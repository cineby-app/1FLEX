import { Metadata } from 'next';
import { fetchKeywordDetails } from '@/lib/tmdb';

interface KeywordPageProps {
  params: Promise<{ keywordId: string }>;
}

function getIdFromSlug(slug: string): number | null {
  if (!slug) return null;
  const parts = slug.split("-");
  const id = parts.pop();
  return id ? parseInt(id, 10) : null;
}

function getNameFromSlug(slug: string): string {
  if (!slug) return "Keyword";
  const parts = slug.split("-");
  parts.pop();
  const name = parts.join(" ");
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Generate dynamic metadata for each keyword page
export async function generateMetadata({ params }: KeywordPageProps): Promise<Metadata> {
  const { keywordId } = await params;
  
  // Extract ID from slug (e.g., "action-123" → 123)
  const id = getIdFromSlug(keywordId);
  
  let keywordName = '';
  
  if (id) {
    // Fetch keyword details from API
    try {
      const keyword = await fetchKeywordDetails(id.toString());
      keywordName = keyword?.name || getNameFromSlug(keywordId);
    } catch (error) {
      keywordName = getNameFromSlug(keywordId);
    }
  } else {
    keywordName = getNameFromSlug(keywordId);
  }
  
  const title = `${keywordName} Movies & TV Shows | 1Flex`;
  const description = `Discover all movies and TV shows tagged with "${keywordName}". Explore the best ${keywordName} films and series, including top-rated, popular, and latest releases. Find your next favorite ${keywordName.toLowerCase()} movie or show on 1Flex.`;
  
  return {
    title,
    description,
    keywords: [`${keywordName} movies`, `${keywordName} TV shows`, `${keywordName} films`, `best ${keywordName} movies`, `top ${keywordName} series`, `${keywordName} tag`, 'movie database', 'TV show discovery', 'movies by keyword', '1Flex keywords'],
    openGraph: {
      title,
      description,
      url: `https://1flex.live/keyword/${keywordId}`,
      siteName: '1Flex',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/img/logo.png',
          width: 1200,
          height: 630,
          alt: `${keywordName} Movies & TV Shows on 1Flex`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/img/logo.png'],
      creator: '@1Flex',
      site: '@1Flex',
    },
    alternates: {
      canonical: `https://1flex.live/keyword/${keywordId}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function KeywordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}