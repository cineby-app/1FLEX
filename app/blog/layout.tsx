import type { Metadata, Viewport } from "next";

// Global Layout Viewport configurations for mobile responsiveness
export const viewport: Viewport = {
  themeColor: "#05050A",
  colorScheme: "dark",
};

// Target SEO Metadata optimized for Entertainment & Film Blogs
export const metadata: Metadata = {
  title: {
    default: "1Flex Blog | Movie Reviews, TV Show Recaps & Streaming Guides",
    template: "%s | 1Flex Blog",
  },
  description: "Read expert movie reviews, binge-worthy TV show recaps, and weekly streaming guides on 1Flex Blog. Discover what to watch next with our in-depth film and series analysis.",
  keywords: [
    "movie reviews",
    "TV show recaps",
    "film critiques",
    "streaming recommendations",
    "what to watch",
    "1Flex blog",
    "series breakdowns",
    "cinema analysis",
    "binge guides",
    "entertainment blog",
    "film culture",
    "new releases review"
  ],
  alternates: {
    canonical: "https://1flex.live/blog",
  },
  // openGraph: {
  //   title: "1Flex Blog | Movie Reviews, TV Recaps & Streaming Guides",
  //   description: "Expert film analysis, TV series breakdowns, and streaming recommendations from the 1Flex editorial team.",
  //   url: "https://1flex.live/blog",
  //   siteName: "1Flex Blog",
  //   locale: "en_US",
  //   type: "blog",
  //   images: [
  //     {
  //       url: "/img/logo.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "1Flex Blog - Movie & TV Show Reviews",
  //     },
  //   ],
  // },
  twitter: {
    card: "summary_large_image",
    title: "1Flex Blog | Movie Reviews, TV Recaps & Streaming Guides",
    description: "Read expert film analysis, TV series breakdowns, and streaming recommendations from 1Flex.",
    images: ["/img/logo.png"],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD structured schema parsing specifically for a Blog index layout profile
  const blogSeriesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://1flex.live/blog",
    "name": "1Flex Blog",
    "url": "https://1flex.live/blog",
    "description": "Expert movie reviews, TV series breakdowns, streaming recommendations, and in-depth cinema analysis from the 1Flex team.",
    "publisher": {
      "@type": "Organization",
      "name": "1Flex",
      "logo": {
        "@type": "ImageObject",
        "url": "https://1flex.live/img/logo.png"
      }
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* Dynamic script injection providing Google Bot structured entity clarity */}
      <script
        type="viplication/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSeriesJsonLd) }}
      />
      
      {/* Section Content Rendering Target Layer wrviper */}
      <div>
        {children}
      </div>
    </>
  );
}