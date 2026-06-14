// app/[movieSlug]/layout.tsx
import { fetchMovieDetails } from "@/lib/tmdb";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ movieSlug: string }>;
};

// Generate dynamic metadata from API
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { movieSlug } = await params;
  // Extract ID from slug format: "michael-936075" -> id = "936075"
  const id = movieSlug.split("-").pop();
  
  if (!id) {
    return {
      title: "Movie Not Found | 1Flex",
      description: "The requested movie could not be found on 1Flex",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  try {
    const movie = await fetchMovieDetails(id);
    
    if (!movie) {
      return {
        title: "Movie Not Found | 1Flex",
        description: "The requested movie could not be found on 1Flex",
        robots: {
          index: false,
          follow: false,
        },
      };
    }
    
    // Generate canonical URL with exact slug format
    const canonicalUrl = `https://1flex.live/${movieSlug}`;
    
    // Rating for structured data
    const ratingValue = movie.vote_average || 0;
    const ratingCount = movie.vote_count || 0;
    const releaseYear = movie.release_date?.split("-")[0] || "";
    const runtimeMinutes = movie.runtime || 0;
    
    // Get director from movie (if available in credits)
    let director = "";
    if (movie.id) {
      try {
        const { fetchMovieCrew } = await import("@/lib/tmdb");
        const crew = await fetchMovieCrew(id);
        const directorObj = crew.find((c: any) => c.job === "Director");
        if (directorObj) director = directorObj.name;
      } catch (error) {
        // Silent fail - director not critical for SEO
      }
    }
    
    return {
      title: `Watch ${movie.title} (${releaseYear || "Unknown"}) Free on 1Flex`,
      description: movie.overview?.slice(0, 160) || `Stream ${movie.title} free on 1Flex. Check ratings, watch trailers, and read reviews before you watch this movie online in HD.`,
      keywords: movie.genres 
        ? `${movie.title}, watch ${movie.title} online free, ${movie.genres.map((g) => g.name).join(", ")}, movie streaming, watch full movie HD, 1Flex movies`
        : `${movie.title}, watch free movies online on 1Flex`,
      
      // Canonical URL
      alternates: {
        canonical: canonicalUrl,
      },
      
      // Open Graph
      openGraph: {
        title: `Watch ${movie.title} (${releaseYear}) Free Online | 1Flex Movie Streaming`,
        description: movie.overview?.slice(0, 160) || `Stream ${movie.title} free on 1Flex. Watch the trailer, check ratings, and read reviews.`,
        url: canonicalUrl,
        siteName: "1Flex",
        images: movie.poster_path 
          ? [
              {
                url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                width: 500,
                height: 750,
                alt: `${movie.title} poster - watch free on 1Flex`,
              },
            ]
          : [],
        locale: "en_US",
        type: "video.movie",
        ...(movie.release_date && { "movie:release_date": movie.release_date }),
        ...(runtimeMinutes && { "movie:runtime": runtimeMinutes }),
        ...(director && { "movie:director": director }),
      },
      
      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: `${movie.title} (${releaseYear}) - Watch Free on 1Flex`,
        description: movie.overview?.slice(0, 160) || `Stream ${movie.title} free on 1Flex.`,
        images: movie.poster_path ? [`https://image.tmdb.org/t/p/w500${movie.poster_path}`] : [],
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
      classification: "Movie Streaming Platform",
      authors: [{ name: "1Flex", url: "https://1flex.live" }],
      creator: "1Flex",
      publisher: "1Flex",
      
      // Apple & Mobile
      appleWebApp: {
        title: `${movie.title} - Watch on 1Flex`,
        statusBarStyle: "black-translucent",
        capable: true,
      },
      
      // Additional movie metadata for rich snippets
      other: {
        "rating:value": ratingValue.toString(),
        "rating:count": ratingCount.toString(),
        "rating:best": "10",
        "rating:worst": "0",
        "release:date": movie.release_date || "",
        "content:language": movie.original_language || "en",
        ...(movie.status && { "movie:status": movie.status }),
        ...(movie.original_title && movie.original_title !== movie.title && { "original:title": movie.original_title }),
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Watch Free Movies Online | 1Flex",
      description: "Stream thousands of movies free on 1Flex. Browse the latest releases, classic films, and trending movies with ratings and reviews.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

// Layout wrapper
export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}