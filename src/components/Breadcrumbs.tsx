"use client";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: "/" + pathSegments.slice(0, index + 1).join("/"),
    })),
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "BreadcrumbList",
      position: index + 1,
      name: breadcrumb.name,
      item: `https://whr.ai${breadcrumb.path}`,
    })),
  };

  return (
    <>
      {/* JSON-LD for Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default Breadcrumbs;
