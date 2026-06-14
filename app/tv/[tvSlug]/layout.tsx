// app/tv/[tvSlug]/layout.tsx
import { fetchTVShowDetails, fetchTVCrew } from "@/lib/tmdb";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tvSlug: string }>;
};

// Generate dynamic metadata from API
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tvSlug } = await params;
  // Extract ID from slug format: "breaking-bad-1396" -> id = "1396"
  const id = tvSlug.split("-").pop();
  
  if (!id) {
    return {
      title: "TV Show Not Found | 1Flex",
      description: "The requested TV show could not be found on 1Flex",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  try {
    const tvShow = await fetchTVShowDetails(id);
    
    if (!tvShow) {
      return {
        title: "TV Show Not Found | 1Flex",
        description: "The requested TV show could not be found on 1Flex",
        robots: {
          index: false,
          follow: false,
        },
      };
    }
    
    // Generate canonical URL with exact slug format
    const canonicalUrl = `https://1flex.live/tv/${tvSlug}`;
    
    // Rating for structured data
    const ratingValue = tvShow.vote_average || 0;
    const ratingCount = tvShow.vote_count || 0;
    const releaseYear = tvShow.first_air_date?.split("-")[0] || "";
    const lastAirYear = tvShow.last_air_date?.split("-")[0] || "";
    const numberOfSeasons = tvShow.number_of_seasons || 0;
    const numberOfEpisodes = tvShow.number_of_episodes || 0;
    
    // Get creator/director from TV show
    let creator = "";
    if (tvShow.id) {
      try {
        const { fetchTVCrew } = await import("@/lib/tmdb");
        const crew = await fetchTVCrew(id);
        const creatorObj = crew.find((c: any) => c.job === "Creator" || c.job === "Director");
        if (creatorObj) creator = creatorObj.name;
      } catch (error) {
        // Silent fail - creator not critical for SEO
      }
    }
    
    return {
      title: `Watch ${tvShow.name} (${releaseYear || "Unknown"}) Free on 1Flex`,
      description: tvShow.overview?.slice(0, 160) || `Stream ${tvShow.name} free on 1Flex. Check ratings, view all seasons and episodes, and watch this TV series online in HD.`,
      keywords: tvShow.genres 
        ? `${tvShow.name}, watch ${tvShow.name} online free, ${tvShow.genres.map((g) => g.name).join(", ")}, TV series streaming, binge-watch shows, 1Flex TV`
        : `${tvShow.name}, watch TV shows free on 1Flex`,
      
      // Canonical URL
      alternates: {
        canonical: canonicalUrl,
      },
      
      // Open Graph
      openGraph: {
        title: `Watch ${tvShow.name} (${releaseYear}) Free Online | 1Flex TV Series`,
        description: tvShow.overview?.slice(0, 160) || `Stream ${tvShow.name} free on 1Flex. Watch full episodes, check ratings, and read reviews.`,
        url: canonicalUrl,
        siteName: "1Flex",
        images: tvShow.poster_path 
          ? [
              {
                url: `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`,
                width: 500,
                height: 750,
                alt: `${tvShow.name} poster - watch on 1Flex`,
              },
              {
                url: `https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`,
                width: 1200,
                height: 630,
                alt: `${tvShow.name} backdrop - stream free on 1Flex`,
              },
            ]
          : [],
        locale: "en_US",
        type: "video.tv_show",
        ...(tvShow.first_air_date && { "tv:release_date": tvShow.first_air_date }),
        ...(lastAirYear && { "tv:last_air_date": tvShow.last_air_date }),
        ...(numberOfSeasons && { "tv:number_of_seasons": numberOfSeasons.toString() }),
        ...(numberOfEpisodes && { "tv:number_of_episodes": numberOfEpisodes.toString() }),
        ...(creator && { "tv:creator": creator }),
      },
      
      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: `${tvShow.name} (${releaseYear}) - Watch Free on 1Flex`,
        description: tvShow.overview?.slice(0, 160) || `Stream ${tvShow.name} free on 1Flex.`,
        images: tvShow.poster_path ? [`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`] : [],
        site: "@1Flex",
        creator: "@1Flex",
      },
      
      // Robots Control
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      
      // Verification
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
      },
      
      // Other meta
      category: "entertainment",
      classification: "TV Series Streaming Platform",
      authors: [{ name: "1Flex", url: "https://1flex.live" }],
      creator: "1Flex",
      publisher: "1Flex",
      
      // Apple & Mobile
      appleWebApp: {
        title: `${tvShow.name} - Watch on 1Flex`,
        statusBarStyle: "black-translucent",
        capable: true,
      },
      
      // Additional TV metadata for rich snippets
      other: {
        "rating:value": ratingValue.toString(),
        "rating:count": ratingCount.toString(),
        "rating:best": "10",
        "rating:worst": "0",
        "first_air_date": tvShow.first_air_date || "",
        "last_air_date": tvShow.last_air_date || "",
        "number_of_seasons": numberOfSeasons.toString(),
        "number_of_episodes": numberOfEpisodes.toString(),
        "content:language": tvShow.original_language || "en",
        ...(tvShow.status && { "tv:status": tvShow.status }),
        ...(tvShow.original_name && tvShow.original_name !== tvShow.name && { "original:name": tvShow.original_name }),
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Watch TV Series Free Online | 1Flex",
      description: "Stream your favorite TV shows free on 1Flex. Browse thousands of series with ratings and reviews.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

// Layout wrapper
export default function TVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}