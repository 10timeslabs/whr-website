"use client";
import React from 'react';
import CollectionCard from './CollectionCard';
import { useCollections } from '../../hooks/useCollections';

const CollectionsSection = () => {
  const { collections: gtmCollections, loading: gtmLoading, error: gtmError, refetch: gtmRefetch } = useCollections(4, 'gtm');
  const { collections: geoCollections, loading: geoLoading, error: geoError, refetch: geoRefetch } = useCollections(4, 'geo');
  
  const GTM_BASE_URL = process.env.NEXT_PUBLIC_GTM_BASE_URL || 'https://gtm.whr.ai';
  const GEO_BASE_URL = process.env.NEXT_PUBLIC_GEO_BASE_URL || 'https://geo.whr.ai';
  
  const [isMobile, setIsMobile] = React.useState(false);
  const [isFull, setIsFull] = React.useState(true); 
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  // Loading component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-[1200px]:grid-cols-4 max-[950px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-[var(--border-color)] h-[300px] animate-pulse">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="h-24 bg-gray-100 rounded-lg mb-6"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );

  // Error component
  const ErrorDisplay = ({ error, onRetry }: { error: string, onRetry: () => void }) => (
    <div className="text-center py-12">
      <div className="text-red-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Collections</h3>
      <p className="text-gray-600 mb-4">{error}</p>
      <button 
        onClick={onRetry} 
        className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color-hover)] transition-colors"
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      {/* GTM Collection Section */}
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4 max-[650px]:flex-col max-[650px]:gap-2">
            <h2 className="text-[48px] font-medium max-[850px]:text-[32px]">GTM Collection</h2>
                            <a 
                  href={`${GTM_BASE_URL}/collections`} 
                  target="_blank" 
                  rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color-hover)] transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>See More</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <p className="text-[var(--secondary-text-color)] text-[18px] max-w-2xl mx-auto">
            Discover events and opportunities that align with your go-to-market strategy and business objectives
          </p>
        </div>
        
        {/* Handle different states */}
        {gtmLoading && <LoadingSkeleton />}
        
        {gtmError && !gtmLoading && <ErrorDisplay error={gtmError} onRetry={gtmRefetch} />}
        
        {!gtmLoading && !gtmError && gtmCollections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-[1200px]:grid-cols-4 max-[950px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1">
            {gtmCollections.map((collection, index) => (
              <CollectionCard 
                key={collection.id}
                id={collection.id}
                heading={collection.name}
                description={collection.description}
                totalEvent={collection.totalEvent}
                href={isFull 
                  ? `${GTM_BASE_URL}/collections/${collection.id}/events?view=${isMobile ? "list" : "table"}&eventType=active&type=${collection.trackerType[0]}`
                  : `${GTM_BASE_URL}/internal/trackers/create?type=${collection.trackerType[0]}&collectionId=${collection.id}`}
                tags={collection.data.includeKeywords} // Pass all keywords
                trackerType={collection.trackerType}
              />
            ))}
          </div>
        )}
        
        {!gtmLoading && !gtmError && gtmCollections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No GTM collections found</p>
          </div>
        )}
      </div>

      {/* GEO Collection Section */}
      <div className="w-full max-w-7xl mt-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4 max-[650px]:flex-col max-[650px]:gap-2">
            <h2 className="text-[48px] font-medium max-[850px]:text-[32px]">GEO Collection</h2>
                            {/* <a 
                  href={`${GEO_BASE_URL}/signup`} 
                  target="_blank" 
                  rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color-hover)] transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>See More</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a> */}
          </div>
          <p className="text-[var(--secondary-text-color)] text-[18px] max-w-2xl mx-auto">
            Leverage geographical intelligence and location-based insights for strategic decision making
          </p>
        </div>
        
        {/* Handle different states */}
        {geoLoading && <LoadingSkeleton />}
        
        {geoError && !geoLoading && <ErrorDisplay error={geoError} onRetry={geoRefetch} />}
        
        {!geoLoading && !geoError && geoCollections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-[1200px]:grid-cols-4 max-[950px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1">
            {geoCollections.map((collection, index) => (
              <CollectionCard 
                key={collection.id}
                id={collection.id}
                heading={collection.name}
                description={collection.description}
                totalEvent={collection.totalEvent}
                href={`${GEO_BASE_URL}/signup`}
                tags={collection.data.includeKeywords} // Pass all keywords
                trackerType={collection.trackerType}
              />
            ))}
          </div>
        )}
        
        {!geoLoading && !geoError && geoCollections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No GEO collections found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsSection;
