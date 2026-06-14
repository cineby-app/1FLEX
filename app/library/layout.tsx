import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Library | Watchlist, Favorites & History on 1Flex',
  description: 'Save and organize your personal movie and TV show collection on 1Flex. Manage your watchlist, favorite titles, and track your viewing history all in one place.',
  keywords: ['watchlist', 'favorites', 'recently watched', 'movie library', 'TV show collection', 'saved movies', '1Flex library', 'personal watchlist'],
  openGraph: {
    title: 'My Library | Your Watchlist & Favorites on 1Flex',
    description: 'Save movies and TV shows to your personal library on 1Flex. Manage watchlist, favorites, and recently watched content.',
    url: 'https://1flex.live/library',
    siteName: '1Flex',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Library | Your Watchlist & Favorites on 1Flex',
    description: 'Save movies and TV shows to your personal library on 1Flex.',
    creator: '@1Flex',
    site: '@1Flex',
  },
  alternates: {
    canonical: 'https://1flex.live/library',
  },
  // Private indexing rule configuration for personal client dashboards
  robots: {
    index: false,
    follow: false,
  },
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}