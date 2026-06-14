import { Metadata } from 'next';
import { getGenres } from '@/lib/tmdb';

interface GenrePageProps {
  params: Promise<{ genreId: string }>;
}

// Generate dynamic metadata for each genre page
export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { genreId } = await params;
  
  // Get genre name from API
  let genreName = 'Movies';
  
  try {
    const genres = await getGenres();
    const genre = genres.find(g => g.id.toString() === genreId);
    genreName = genre?.name || 'Movies';
  } catch (error) {
    genreName = 'Movies';
  }
  
  const title = `${genreName} Movies & TV Shows | 1Flex`;
  const description = `Explore the best ${genreName} movies and TV shows. Discover top-rated, popular, and latest ${genreName} films and series. Find your next favorite ${genreName.toLowerCase()} movie or show to watch tonight on 1Flex.`;
  
  return {
    title,
    description,
    keywords: [`${genreName} movies`, `${genreName} TV shows`, `${genreName} films`, `${genreName} series`, `best ${genreName} movies`, `top ${genreName} shows`, `${genreName} genre`, 'movie database', 'TV show discovery', '1Flex genres'],
    openGraph: {
      title,
      description,
      url: `https://1flex.live/genre/${genreId}`,
      siteName: '1Flex',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/img/logo.png',
          width: 1200,
          height: 630,
          alt: `${genreName} Movies & TV Shows on 1Flex`,
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
      canonical: `https://1flex.live/genre/${genreId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Simple layout that just renders children
export default function GenreLayout({ children }: { children: React.ReactNode }) {
  return children;
}