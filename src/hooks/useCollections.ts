import { useState, useEffect, useCallback } from 'react';

// Types for API response
interface TrackerData {
  id: string;
  name: string;
  totalEvent: number;
  data: {
    excludeKeywords: string[];
    includeKeywords: string[];
  };
  description: string;
  trackerType: string[];
}

interface ApiResponse {
  data: {
    count: number;
    trackers: TrackerData[];
  };
}

interface UseCollectionsResult {
  collections: TrackerData[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// Simple in-memory cache
const cache: { [key: string]: { data: TrackerData[]; timestamp: number } } = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useCollections = (limit: number = 5, apiType: 'gtm' | 'geo' = 'gtm'): UseCollectionsResult => {
  const [collections, setCollections] = useState<TrackerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCollections = useCallback(async (retryCount = 0) => {
    const cacheKey = `collections_${apiType}_${limit}`;
    const now = Date.now();
    
    // Check cache first
    if (cache[cacheKey] && now - cache[cacheKey].timestamp < CACHE_DURATION) {
      setCollections(cache[cacheKey].data);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
      
                  const GTM_API_URL = process.env.NEXT_PUBLIC_GTM_API_URL || 'https://gtm-api.whr.ai';
            const GEO_API_URL = process.env.NEXT_PUBLIC_GEO_API_URL || 'https://geodev-api.whr.ai';
            
            const apiUrl = apiType === 'gtm' 
              ? `${GTM_API_URL}/others/preset?offset=0&limit=${limit}&sortAs=desc`
              : `${GEO_API_URL}/others/preset?offset=0&limit=${limit}&sortAs=desc`;
      
      const response = await fetch(
        apiUrl,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      
      if (data?.data?.trackers && Array.isArray(data.data.trackers)) {
        const limitedCollections = data.data.trackers.slice(0, limit);
        
        // Cache the result
        cache[cacheKey] = {
          data: limitedCollections,
          timestamp: now
        };
        
        setCollections(limitedCollections);
      } else {
        throw new Error('Invalid API response structure');
      }
    } catch (err) {
      console.error('Error fetching collections:', err);
      
      // Retry logic for network failures
      if (retryCount < 2 && err instanceof Error && err.name !== 'AbortError') {
        setTimeout(() => fetchCollections(retryCount + 1), 1000 * (retryCount + 1));
        return;
      }
      
      setError(err instanceof Error ? err.message : 'Failed to fetch collections');
      setCollections([]);
    } finally {
      setLoading(false);
    }
  }, [limit, apiType]);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  const refetch = useCallback(() => {
    fetchCollections();
  }, [fetchCollections]);

  return {
    collections,
    loading,
    error,
    refetch
  };
};
