// app/match/page.tsx

'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { 
  Play, RotateCcw, ChevronRight, Check, X, Plus, Tv, Film, Star, Calendar, 
  TrendingUp, Shuffle, Flame, Smile, Theater, Rocket, Heart, AlertTriangle, 
  Ghost, Palette, Clock, Hourglass, Book, Compass, Award, Cpu, Sparkles, 
  Zap, Sun, Target, Brain, Cloud, Wind, Waves, Layers, Orbit, Globe, Landmark, 
  Droplet, Skull, Shield, Crown, HelpCircle, Venus, CloudRain, DoorOpen, Moon, 
  Camera, Eye, Brush, Contrast, Search, DollarSign, Flag, Gem, Mic, Languages, 
  Home, Snowflake, Repeat, MessageCircle, Volume2, Briefcase, Music, Radio, 
  Piano, Guitar, VolumeX, Laugh, Gamepad, Cigarette, Box, GitBranch, User
} from 'lucide-react';
import Image from 'next/image';
import { Movie } from '@/lib/tmdb';

import { getMatchedMoviesAction } from '@/app/actions';

interface MediaItem {
  id: number;
  title: string;
  name?: string;
  media_type: 'movie' | 'tv';
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  overview: string;
}

// FALLBACK MEDIA - Guaranteed to show something if API fails
const FALLBACK_MOVIES: MediaItem[] = [
  { id: 278, title: 'The Shawshank Redemption', media_type: 'movie', poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', backdrop_path: null, vote_average: 8.7, release_date: '1994-09-23', overview: '' },
  { id: 238, title: 'The Godfather', media_type: 'movie', poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', backdrop_path: null, vote_average: 8.7, release_date: '1972-03-14', overview: '' },
  { id: 155, title: 'The Dark Knight', media_type: 'movie', poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg', backdrop_path: null, vote_average: 8.5, release_date: '2008-07-16', overview: '' },
  { id: 1396, title: 'Breaking Bad', media_type: 'tv', poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', backdrop_path: null, vote_average: 8.9, first_air_date: '2008-01-20', overview: '' },
  { id: 1399, title: 'Game of Thrones', media_type: 'tv', poster_path: '/7WUHnWGx5jj145A2HM6SflGv2jS.jpg', backdrop_path: null, vote_average: 8.4, first_air_date: '2011-04-17', overview: '' },
  { id: 4629, title: 'Stranger Things', media_type: 'tv', poster_path: '/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', backdrop_path: null, vote_average: 8.6, first_air_date: '2016-07-15', overview: '' },
];

// 100+ QUESTIONS BANK
const allQuestions = [
  { id: 'media_type', text: 'What are you in the mood for?', options: [{ label: 'Movie Night', value: 'movie', icon: 'film' }, { label: 'Binge a Series', value: 'tv', icon: 'tv' }, { label: 'Surprise Me', value: 'both', icon: 'shuffle' }] },
  { id: 'genre_1', text: 'Pick your favorite genre', options: [{ label: 'Action', value: 'action', icon: 'flame' }, { label: 'Comedy', value: 'comedy', icon: 'smile' }, { label: 'Drama', value: 'drama', icon: 'theater' }, { label: 'Sci-Fi', value: 'sci-fi', icon: 'rocket' }, { label: 'Romance', value: 'romance', icon: 'heart' }, { label: 'Thriller', value: 'thriller', icon: 'alert-triangle' }, { label: 'Horror', value: 'horror', icon: 'ghost' }, { label: 'Animation', value: 'animation', icon: 'palette' }] },
  { id: 'time_1', text: 'How much time do you have?', options: [{ label: 'Quick Watch', value: 'quick', icon: 'clock' }, { label: 'Standard Length', value: 'standard', icon: 'hourglass' }, { label: 'Long Story', value: 'long', icon: 'book' }, { label: 'Epic Journey', value: 'epic', icon: 'compass' }] },
  { id: 'era_1', text: 'What era do you prefer?', options: [{ label: 'Classic (50s-70s)', value: 'classic', icon: 'film' }, { label: 'Golden Age (80s-90s)', value: 'golden', icon: 'award' }, { label: 'Modern (00s-10s)', value: 'modern', icon: 'cpu' }, { label: 'New Releases', value: 'new', icon: 'sparkles' }] },
  { id: 'mood_1', text: 'How do you want to feel?', options: [{ label: 'Energetic', value: 'energetic', icon: 'zap' }, { label: 'Happy', value: 'happy', icon: 'sun' }, { label: 'Intense', value: 'intense', icon: 'target' }, { label: 'Nostalgic', value: 'nostalgic', icon: 'clock-rewind' }, { label: 'Thoughtful', value: 'thoughtful', icon: 'brain' }, { label: 'Relaxed', value: 'relaxed', icon: 'cloud' }] },
  { id: 'pacing_1', text: 'What pacing do you prefer?', options: [{ label: 'Fast & Furious', value: 'fast', icon: 'wind' }, { label: 'Steady & Engaging', value: 'steady', icon: 'waves' }, { label: 'Slow Burn', value: 'slow', icon: 'Flame' }, { label: 'Complex Layers', value: 'complex', icon: 'layers' }] },
  { id: 'setting_1', text: 'Where should the story take place?', options: [{ label: 'Space / Future', value: 'space', icon: 'orbit' }, { label: 'Real World', value: 'real', icon: 'globe' }, { label: 'Fantasy Realm', value: 'fantasy', icon: 'sparkles' }, { label: 'Historical', value: 'historical', icon: 'landmark' }] },
  { id: 'protagonist_1', text: 'What kind of hero do you prefer?', options: [{ label: 'Underdog', value: 'underdog', icon: 'shield' }, { label: 'Anti-hero', value: 'antihero', icon: 'skull' }, { label: 'Ensemble Cast', value: 'ensemble', icon: 'users' }, { label: 'Chosen One', value: 'chosen', icon: 'crown' }] },
  { id: 'ending_1', text: 'How do you want it to end?', options: [{ label: 'Happily Ever After', value: 'happy', icon: 'heart' }, { label: 'Keep Me Guessing', value: 'ambiguous', icon: 'help-circle' }, { label: 'Mind-Blowing Twist', value: 'twist', icon: 'zap' }, { label: 'Tragic but Beautiful', value: 'tragic', icon: 'cloud-rain' }] },
  { id: 'visuals_1', text: 'What visual style excites you?', options: [{ label: 'Bright & Colorful', value: 'colorful', icon: 'palette' }, { label: 'Dark & Gritty', value: 'dark', icon: 'moon' }, { label: 'Visually Stunning', value: 'stunning', icon: 'camera' }, { label: 'Grounded & Realistic', value: 'realistic', icon: 'eye' }] },
  { id: 'stakes_1', text: 'What should be at stake?', options: [{ label: 'The Entire World', value: 'world', icon: 'globe' }, { label: 'Personal Relationships', value: 'personal', icon: 'heart' }, { label: 'Survival', value: 'survival', icon: 'alert-triangle' }, { label: 'Discovering Truth', value: 'truth', icon: 'search' }] },
  { id: 'focus_1', text: 'What should grab your attention most?', options: [{ label: 'Heart-pumping Action', value: 'action', icon: 'zap' }, { label: 'Deep Character Study', value: 'character', icon: 'users' }, { label: 'Mind-bending Plot', value: 'plot', icon: 'brain' }, { label: 'Laughs & Jokes', value: 'comedy', icon: 'smile' }] },
  { id: 'budget_1', text: 'Big budget or indie?', options: [{ label: 'Huge Blockbuster', value: 'blockbuster', icon: 'award' }, { label: 'Hidden Indie Gem', value: 'indie', icon: 'gem' }, { label: 'Critical Darling', value: 'critical', icon: 'star' }, { label: "Doesn't Matter", value: 'any', icon: 'shuffle' }] },
  { id: 'suspense_1', text: 'How do you like your suspense?', options: [{ label: 'Jump Scares', value: 'jump', icon: 'ghost' }, { label: 'Psychological Tension', value: 'psychological', icon: 'brain' }, { label: 'Action Sequences', value: 'action', icon: 'target' }, { label: 'Slow Reveal', value: 'slow', icon: 'clock' }] },
  { id: 'emotion_1', text: 'Which emotion do you want to feel most?', options: [{ label: 'A Good Cry', value: 'sad', icon: 'cloud-rain' }, { label: 'Adrenaline Rush', value: 'excited', icon: 'zap' }, { label: 'Belly Laughs', value: 'funny', icon: 'smile' }, { label: 'Warm & Fuzzy', value: 'warm', icon: 'heart' }] },
  { id: 'subtitles_1', text: 'Are subtitles okay?', options: [{ label: 'Yes, love foreign films', value: 'yes', icon: 'globe' }, { label: 'Only if dubbed', value: 'dubbed', icon: 'mic' }, { label: 'Prefer English', value: 'english', icon: 'flag' }, { label: 'Any language', value: 'any', icon: 'languages' }] },
  { id: 'atmosphere_1', text: 'What atmosphere hits right?', options: [{ label: 'Cozy & Comforting', value: 'cozy', icon: 'home' }, { label: 'Dark & Rainy', value: 'dark', icon: 'cloud-rain' }, { label: 'Sunny & Bright', value: 'sunny', icon: 'sun' }, { label: 'Mysterious & Foggy', value: 'mysterious', icon: 'cloud' }] },
  { id: 'villain_1', text: 'What makes a great villain?', options: [{ label: 'Relatable Motives', value: 'relatable', icon: 'heart' }, { label: 'Pure Evil', value: 'evil', icon: 'skull' }, { label: 'Corporate Greed', value: 'corporate', icon: 'briefcase' }, { label: 'Mastermind', value: 'mastermind', icon: 'brain' }] },
  { id: 'music_1', text: 'What soundtrack fits your mood?', options: [{ label: 'Epic Orchestral', value: 'orchestral', icon: 'music' }, { label: 'Pop Anthems', value: 'pop', icon: 'radio' }, { label: 'Eerie Synths', value: 'synth', icon: 'mic' }, { label: 'Rock & Roll', value: 'rock', icon: 'guitar' }] },
  { id: 'rewatch_1', text: 'How important is rewatchability?', options: [{ label: 'Very important', value: 'high', icon: 'repeat' }, { label: 'Somewhat important', value: 'medium', icon: 'clock' }, { label: 'One-time is fine', value: 'low', icon: 'x' }, { label: 'Better on rewatch', value: 'better', icon: 'trending-up' }] },
  { id: 'depth_1', text: 'How deep should the story be?', options: [{ label: 'Light & Fun', value: 'light', icon: 'sun' }, { label: 'Thought-provoking', value: 'thoughtful', icon: 'brain' }, { label: 'Philosophical', value: 'philosophical', icon: 'book-open' }, { label: 'Dark & Heavy', value: 'dark', icon: 'moon' }] },
  { id: 'pacing_2', text: 'Do you like slow-burn stories?', options: [{ label: 'Love them', value: 'love', icon: 'Flame' }, { label: 'Sometimes', value: 'sometimes', icon: 'clock' }, { label: 'Prefer fast-paced', value: 'fast', icon: 'wind' }, { label: 'Depends on the story', value: 'depends', icon: 'shuffle' }] },
  { id: 'characters_1', text: 'What matters most in characters?', options: [{ label: 'Relatability', value: 'relatable', icon: 'heart' }, { label: 'Complexity', value: 'complex', icon: 'brain' }, { label: 'Charisma', value: 'charisma', icon: 'smile' }, { label: 'Growth', value: 'growth', icon: 'trending-up' }] },
  { id: 'world_1', text: 'How important is world-building?', options: [{ label: 'Essential', value: 'essential', icon: 'globe' }, { label: 'Important', value: 'important', icon: 'camera' }, { label: 'Not important', value: 'not', icon: 'x' }, { label: 'Character first', value: 'character', icon: 'user' }] },
];

// Helper functions
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const iconMap: Record<string, any> = {
  film: Film, tv: Tv, shuffle: Shuffle, flame: Flame, smile: Smile, theater: Theater,
  rocket: Rocket, heart: Heart, 'alert-triangle': AlertTriangle, ghost: Ghost, palette: Palette,
  clock: Clock, hourglass: Hourglass, book: Book, compass: Compass, award: Award, cpu: Cpu,
  sparkles: Sparkles, zap: Zap, sun: Sun, target: Target, brain: Brain, cloud: Cloud,
  wind: Wind, waves: Waves, Flame: Flame, layers: Layers, orbit: Orbit, globe: Globe,
  landmark: Landmark, droplet: Droplet, skull: Skull, shield: Shield, crown: Crown,
  'help-circle': HelpCircle, venus: Venus, 'cloud-rain': CloudRain, 'door-open': DoorOpen,
  moon: Moon, camera: Camera, eye: Eye, brush: Brush, contrast: Contrast, search: Search,
  'dollar-sign': DollarSign, flag: Flag, gem: Gem, mic: Mic, languages: Languages,
  home: Home, snowflake: Snowflake, repeat: Repeat, 'message-circle': MessageCircle,
  'volume-2': Volume2, briefcase: Briefcase, music: Music, radio: Radio, piano: Piano,
  guitar: Guitar, 'volume-x': VolumeX, laugh: Laugh, gamepad: Gamepad, Cigarette: Cigarette,
  Box: Box, 'git-branch': GitBranch, user: User, 'book-open': Book,
};

const getIcon = (iconName: string) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon className="w-4 h-4" /> : null;
};

type Stage = 'start' | 'questions' | 'matching' | 'completed';

export default function MatchPage() {
  // Question state
  const [stage, setStage] = useState<Stage>('start');
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ id: string; value: string }[]>([]);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [questionsBatch, setQuestionsBatch] = useState(1);
  
  // Media queue state
  const [mediaQueue, setMediaQueue] = useState<MediaItem[]>([]);
  const [watchlist, setWatchlist] = useState<MediaItem[]>([]);
  const [skippedMediaIds, setSkippedMediaIds] = useState<Set<number>>(new Set());
  const [skipCount, setSkipCount] = useState(0);
  const [batchSkipCount, setBatchSkipCount] = useState(0);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Track selected media type from first question
  const [selectedMediaType, setSelectedMediaType] = useState<'movie' | 'tv' | 'both'>('both');
  
  // Animation
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacityLike = useTransform(x, [0, 100], [0, 1]);
  const opacitySkip = useTransform(x, [0, -100], [0, 1]);

  // Load saved data
  useEffect(() => {
    try {
      const storedSkipped = JSON.parse(localStorage.getItem('1flex_skippedMedia') || '[]');
      setSkippedMediaIds(new Set(storedSkipped));
      
      const storedWatchlist = JSON.parse(localStorage.getItem('1flex_watchlist') || '[]');
      setWatchlist(storedWatchlist);
    } catch (e) {
      console.error('Failed to load local storage data', e);
    }
  }, []);

  // Get random questions (7 for first batch, 3 for subsequent)
  const getRandomQuestions = useCallback((count: number, excludeFirst: boolean = false) => {
    let available = allQuestions.filter(q => !usedQuestionIds.has(q.id));
    
    if (excludeFirst && questionsBatch === 1) {
      available = available.filter(q => q.id !== 'media_type');
    }
    
    const shuffled = shuffleArray(available);
    const selected = shuffled.slice(0, count);
    const newIds = new Set(usedQuestionIds);
    selected.forEach(q => newIds.add(q.id));
    setUsedQuestionIds(newIds);
    return selected;
  }, [usedQuestionIds, questionsBatch]);

  // Start quiz - get first 7 questions
  const startQuiz = () => {
    const mediaTypeQ = allQuestions.find(q => q.id === 'media_type');
    const otherQuestions = getRandomQuestions(6, true);
    const initialQuestions = mediaTypeQ ? [mediaTypeQ, ...otherQuestions] : otherQuestions;
    
    setCurrentQuestions(initialQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuestionsBatch(1);
    setSkipCount(0);
    setBatchSkipCount(0);
    setMediaQueue([]);
    setSelectedMediaType('both');
    setError(null);
    setStage('questions');
  };

  // Add 3 more deep questions after skips
  const addMoreQuestions = useCallback(async () => {
    const newQuestions = getRandomQuestions(3, false);
    setCurrentQuestions(prev => [...prev, ...newQuestions]);
    setQuestionsBatch(prev => prev + 1);
    setBatchSkipCount(0);
    setStage('questions');
    setCurrentQuestionIndex(currentQuestions.length);
  }, [getRandomQuestions, currentQuestions.length]);

  // Build filters from answers
  const buildFiltersFromAnswers = useCallback(() => {
    const withGenres = new Set<string>();
    let mediaType: 'movie' | 'tv' | 'both' = selectedMediaType;
    let voteAverageMin = 0;
    let yearMin: number | null = null;
    let yearMax: number | null = null;
    let runtimeMin: number | null = null;
    let runtimeMax: number | null = null;

    answers.forEach((ans) => {
      const val = ans.value.toLowerCase();
      
      if (ans.id === 'media_type') {
        if (val === 'movie') {
          mediaType = 'movie';
          setSelectedMediaType('movie');
        } else if (val === 'tv') {
          mediaType = 'tv';
          setSelectedMediaType('tv');
        } else {
          mediaType = 'both';
          setSelectedMediaType('both');
        }
      }
      
      if (val.includes('action')) withGenres.add('28');
      if (val.includes('comedy')) withGenres.add('35');
      if (val.includes('drama')) withGenres.add('18');
      if (val.includes('horror')) withGenres.add('27');
      if (val.includes('sci-fi')) withGenres.add('878');
      if (val.includes('romance')) withGenres.add('10749');
      if (val.includes('thriller')) withGenres.add('53');
      if (val.includes('animation')) withGenres.add('16');

      if (val.includes('happy')) voteAverageMin = 6.5;
      if (val.includes('quick')) runtimeMax = 95;
      if (val.includes('standard')) {
        runtimeMin = 90;
        runtimeMax = 130;
      }
      if (val.includes('long')) runtimeMin = 120;
      if (val.includes('classic')) {
        yearMin = 1950;
        yearMax = 1980;
      }
      if (val.includes('golden')) {
        yearMin = 1980;
        yearMax = 2000;
      }
      if (val.includes('modern')) {
        yearMin = 2000;
        yearMax = 2015;
      }
      if (val.includes('new')) {
        yearMin = 2022;
        yearMax = 2026;
      }
    });

    return {
      withGenres: Array.from(withGenres),
      mediaType,
      voteAverageMin,
      yearMin,
      yearMax,
      runtimeMin,
      runtimeMax,
    };
  }, [answers, selectedMediaType]);

  // Fetch media with fallback
  const fetchMatchedMedia = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const filters = buildFiltersFromAnswers();
      const randomPage = Math.floor(Math.random() * 5) + 1;
      const skippedAndWatchlisted = Array.from(skippedMediaIds).concat(watchlist.map(m => m.id));
      
      let allResults: MediaItem[] = [];
      let moviesList: MediaItem[] = [];
      let tvList: MediaItem[] = [];
      
      // Fetch movies if needed
      if (filters.mediaType === 'movie' || filters.mediaType === 'both') {
        try {
          console.log('Fetching movies with filters:', filters);
          const movies = await getMatchedMoviesAction({
            withGenres: filters.withGenres,
            sortBy: 'popularity.desc',
            voteAverageMin: filters.voteAverageMin,
            yearMin: filters.yearMin,
            yearMax: filters.yearMax,
            runtimeMin: filters.runtimeMin,
            runtimeMax: filters.runtimeMax,
            skippedMovieIds: skippedAndWatchlisted,
          });
          
          if (movies && movies.length > 0) {
            moviesList = movies.map(m => ({
              ...m,
              media_type: 'movie' as const,
              title: m.title,
              name: m.title,
            }));
            console.log(`Fetched ${moviesList.length} movies`);
          } else {
            console.log('No movies returned from API');
          }
        } catch (e) {
          console.error('Error fetching movies:', e);
        }
      }
      
      // Fetch TV shows if needed
      if (filters.mediaType === 'tv' || filters.mediaType === 'both') {
        try {
          const tvPage = Math.floor(Math.random() * 5) + 1;
          const tvParams = new URLSearchParams({
            sort_by: 'popularity.desc',
            'vote_average.gte': filters.voteAverageMin.toString(),
            page: tvPage.toString(),
          });
          
          if (filters.withGenres.length) tvParams.append('with_genres', filters.withGenres.join(','));
          if (filters.yearMin) tvParams.append('first_air_date.gte', `${filters.yearMin}-01-01`);
          if (filters.yearMax) tvParams.append('first_air_date.lte', `${filters.yearMax}-12-31`);
          
          const tvResponse = await fetch(
            `https://api.themoviedb.org/3/discover/tv?${tvParams.toString()}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
              },
            }
          );
          const tvData = await tvResponse.json();
          const tvShows = tvData.results || [];
          
          if (tvShows.length > 0) {
            tvList = tvShows.map((show: any) => ({
              id: show.id,
              title: show.name,
              name: show.name,
              media_type: 'tv' as const,
              poster_path: show.poster_path,
              backdrop_path: show.backdrop_path,
              vote_average: show.vote_average,
              release_date: show.first_air_date,
              first_air_date: show.first_air_date,
              overview: show.overview,
            }));
            console.log(`Fetched ${tvList.length} TV shows`);
          } else {
            console.log('No TV shows returned from API');
          }
        } catch (e) {
          console.error('Error fetching TV shows:', e);
        }
      }
      
      // Combine results based on media type
      if (filters.mediaType === 'both') {
        const shuffledMovies = shuffleArray(moviesList);
        const shuffledTv = shuffleArray(tvList);
        
        const maxLength = Math.max(shuffledMovies.length, shuffledTv.length);
        for (let i = 0; i < maxLength && allResults.length < 9; i++) {
          if (i < shuffledMovies.length) allResults.push(shuffledMovies[i]);
          if (i < shuffledTv.length) allResults.push(shuffledTv[i]);
        }
      } else if (filters.mediaType === 'movie') {
        allResults = moviesList;
      } else if (filters.mediaType === 'tv') {
        allResults = tvList;
      }
      
      // Remove duplicates and skipped items
      const uniqueResults = allResults.filter(
        (item, index, self) => 
          index === self.findIndex((t) => t.id === item.id) &&
          !skippedAndWatchlisted.includes(item.id)
      );
      
      // SHUFFLE for variety
      let finalResults = shuffleArray(uniqueResults).slice(0, 3);
      
      // FALLBACK: If no results from API, use fallback media
      if (finalResults.length === 0) {
        console.log('No results from API, using fallback media');
        let fallbackFiltered = [...FALLBACK_MOVIES];
        
        // Filter fallback by media type
        if (filters.mediaType === 'movie') {
          fallbackFiltered = fallbackFiltered.filter(m => m.media_type === 'movie');
        } else if (filters.mediaType === 'tv') {
          fallbackFiltered = fallbackFiltered.filter(m => m.media_type === 'tv');
        }
        
        // Remove skipped and watchlisted
        fallbackFiltered = fallbackFiltered.filter(m => !skippedAndWatchlisted.includes(m.id));
        
        finalResults = shuffleArray(fallbackFiltered).slice(0, 3);
      }
      
      // LAST RESORT: If still empty, create generic results
      if (finalResults.length === 0) {
        console.log('Creating generic results');
        finalResults = [
          { id: Date.now() + 1, title: 'Popular Movie', media_type: 'movie', poster_path: null, backdrop_path: null, vote_average: 7.0, release_date: '2024-01-01', overview: '' },
          { id: Date.now() + 2, title: 'Popular TV Show', media_type: 'tv', poster_path: null, backdrop_path: null, vote_average: 7.5, first_air_date: '2024-01-01', overview: '' },
          { id: Date.now() + 3, title: 'Recommended Watch', media_type: 'movie', poster_path: null, backdrop_path: null, vote_average: 7.2, release_date: '2024-01-01', overview: '' },
        ];
      }
      
      console.log('Final results count:', finalResults.length);
      return finalResults;
      
    } catch (e) {
      console.error('Fatal error in fetchMatchedMedia:', e);
      setError('Failed to fetch recommendations. Showing fallback content.');
      
      // Return fallback on any error
      return shuffleArray(FALLBACK_MOVIES).slice(0, 3);
    } finally {
      setIsLoading(false);
    }
  }, [buildFiltersFromAnswers, skippedMediaIds, watchlist]);

  // Handle answer submission
  const handleAnswer = useCallback(async (val: string) => {
    const currentQ = currentQuestions[currentQuestionIndex];
    const newAnswers = [...answers, { id: currentQ.id, value: val }];
    setAnswers(newAnswers);
    
    const answeredCount = newAnswers.length;
    
    // Define batch completion points
    const batchSizes = [7, 10, 13, 16, 19, 22, 25];
    const isBatchComplete = batchSizes.includes(answeredCount);
    
    if (isBatchComplete && answeredCount < 25) {
      const results = await fetchMatchedMedia();
      if (results && results.length > 0) {
        setMediaQueue(results);
        setStage('matching');
      } else {
        // If no results, try again with fallback
        const fallbackResults = shuffleArray(FALLBACK_MOVIES).slice(0, 3);
        setMediaQueue(fallbackResults);
        setStage('matching');
      }
      return;
    }
    
    // Continue to next question
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (answeredCount === 25) {
      const results = await fetchMatchedMedia();
      if (results && results.length > 0) {
        setMediaQueue(results);
        setStage('matching');
      } else {
        setMediaQueue(shuffleArray(FALLBACK_MOVIES).slice(0, 3));
        setStage('matching');
      }
    } else if (currentQuestionIndex === currentQuestions.length - 1 && answeredCount < 25) {
      const results = await fetchMatchedMedia();
      if (results && results.length > 0) {
        setMediaQueue(results);
        setStage('matching');
      } else {
        setMediaQueue(shuffleArray(FALLBACK_MOVIES).slice(0, 3));
        setStage('matching');
      }
    }
  }, [currentQuestions, currentQuestionIndex, answers, fetchMatchedMedia]);

  // Handle skip
  const handleSkip = useCallback(() => {
    if (mediaQueue.length === 0) return;
    
    const currentMedia = mediaQueue[0];
    const newSkipped = new Set(skippedMediaIds);
    newSkipped.add(currentMedia.id);
    setSkippedMediaIds(newSkipped);

    try {
      localStorage.setItem('1flex_skippedMedia', JSON.stringify(Array.from(newSkipped)));
    } catch (e) {}
    
    const newQueue = mediaQueue.slice(1);
    setMediaQueue(newQueue);
    const newSkipCount = skipCount + 1;
    const newBatchSkipCount = batchSkipCount + 1;
    setSkipCount(newSkipCount);
    setBatchSkipCount(newBatchSkipCount);
    x.set(0);
    
    if (newBatchSkipCount === 3 && answers.length < 25) {
      addMoreQuestions();
    }
    
    if (newQueue.length === 0 && answers.length < 25) {
      fetchMatchedMedia().then(results => {
        if (results && results.length > 0) {
          setMediaQueue(results);
        } else {
          setMediaQueue(shuffleArray(FALLBACK_MOVIES).slice(0, 3));
        }
      });
    } else if (newQueue.length === 0 && answers.length >= 25) {
      setStage('completed');
    }
  }, [mediaQueue, skippedMediaIds, skipCount, batchSkipCount, answers.length, addMoreQuestions, fetchMatchedMedia, x]);

  // Handle accept
  const handleAccept = useCallback(() => {
    if (mediaQueue.length === 0) return;
    
    const currentMedia = mediaQueue[0];

    setWatchlist(prev => {
      if (prev.some(m => m.id === currentMedia.id)) return prev;
      const next = [...prev, currentMedia];
      try {
        localStorage.setItem('1flex_watchlist', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
    
    const newQueue = mediaQueue.slice(1);
    setMediaQueue(newQueue);
    x.set(0);
    
    if (answers.length >= 25) {
      if (newQueue.length === 0) {
        setStage('completed');
      }
      return;
    }
    
    if (newQueue.length === 0) {
      fetchMatchedMedia().then(results => {
        if (results && results.length > 0) {
          setMediaQueue(results);
        } else {
          setMediaQueue(shuffleArray(FALLBACK_MOVIES).slice(0, 3));
        }
      });
    }
  }, [mediaQueue, answers.length, fetchMatchedMedia, x]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) handleAccept();
    else if (info.offset.x < -100) handleSkip();
  };

  const resetQuiz = () => {
    setStage('start');
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setMediaQueue([]);
    setSkipCount(0);
    setBatchSkipCount(0);
    setQuestionsBatch(1);
    setUsedQuestionIds(new Set());
    setSelectedMediaType('both');
    setError(null);
  };

  const getMediaSlug = (media: MediaItem): string => {
    const title = media.title || media.name || '';
    return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${media.id}`;
  };

  const getMediaYear = (media: MediaItem): string => {
    const date = media.release_date || media.first_air_date;
    return date ? date.substring(0, 4) : 'N/A';
  };

  const maxQuestions = 25;
  const skipsRemaining = 3 - batchSkipCount;

  const getCurrentBatchProgress = () => {
    if (answers.length === 0) return { answered: 0, total: 7 };
    
    if (answers.length <= 7) return { answered: answers.length, total: 7 };
    if (answers.length <= 10) return { answered: answers.length - 7, total: 3 };
    if (answers.length <= 13) return { answered: answers.length - 10, total: 3 };
    if (answers.length <= 16) return { answered: answers.length - 13, total: 3 };
    if (answers.length <= 19) return { answered: answers.length - 16, total: 3 };
    if (answers.length <= 22) return { answered: answers.length - 19, total: 3 };
    return { answered: answers.length - 22, total: 3 };
  };

  const batchProgress = getCurrentBatchProgress();
  const batchPercentage = (batchProgress.answered / batchProgress.total) * 100;

  return (
    <div className="min-h-screen bg-[#05050A] flex flex-col p-4 pt-24 pb-12 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center mb-4 px-4">
        {stage === 'matching' ? (
          <div className="flex gap-4 text-xs text-gray-500 font-mono uppercase">
            <span>Results left: {mediaQueue.length}</span>
            <span>|</span>
            <span>Skips until next questions: {skipsRemaining}</span>
          </div>
        ) : stage === 'questions' ? (
          <div className="flex gap-3 text-xs text-gray-500 font-mono uppercase">
            <span>Question {batchProgress.answered}/{batchProgress.total}</span>
            <span>|</span>
            <span>Total: {answers.length}/{maxQuestions}</span>
          </div>
        ) : <div />}
        <div className="bg-[#0F0F1A] border border-[#1F2937] px-4 py-2 rounded-lg flex items-center gap-3">
          <span className="text-xs font-mono text-gray-400 uppercase">Watchlist</span>
          <span className="font-bold text-white text-xl">{watchlist.length}</span>
        </div>
      </div>

      {error && stage === 'matching' && (
        <div className="w-full max-w-md mx-auto mb-4 bg-yellow-500/20 border border-yellow-500 text-yellow-500 text-xs p-2 rounded text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col items-center justify-center flex-1">
        <AnimatePresence mode="wait">
          {stage === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-xl text-center flex flex-col items-center"
            >
              <div className="flex gap-3 mb-4">
                <Film className="w-12 h-12 text-[#E50914]" />
                <Tv className="w-12 h-12 text-[#E50914]" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-white">
                <span className="text-[#E50914]">1Flex</span> Match
              </h1>
              <p className="text-gray-400 font-mono uppercase mb-4 max-w-sm text-sm">
                Answer 7 questions → Get 3 recommendations
              </p>
              <p className="text-gray-500 text-xs mb-8">
                Skip 3 times to get 3 more questions for better matches! (Max {maxQuestions} questions)
              </p>
              <button
                onClick={startQuiz}
                className="flex items-center gap-3 bg-[#E50914] text-white px-8 py-4 font-bold uppercase rounded-lg hover:scale-105 transition-transform"
              >
                <span>Start Matching</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {stage === 'questions' && currentQuestions[currentQuestionIndex] && (
            <motion.div
              key={`q-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-2xl"
            >
              <div className="mb-12">
                <div className="flex justify-between mb-4 text-xs font-mono text-gray-500">
                  <span>Question {batchProgress.answered}/{batchProgress.total}</span>
                  <span>{answers.length}/{maxQuestions} total</span>
                </div>
                <div className="w-full bg-[#1F2937] h-1 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#E50914] transition-all duration-500" 
                    style={{ width: `${batchPercentage}%` }} 
                  />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 text-white">
                {currentQuestions[currentQuestionIndex].text}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestions[currentQuestionIndex].options.map((opt: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.value)}
                    className="bg-[#0F0F1A] border-2 border-[#1F2937] p-6 text-center rounded-xl font-bold uppercase transition-all hover:border-[#E50914] hover:bg-[#E50914]/10 active:scale-95 text-gray-200 flex items-center justify-center gap-3"
                  >
                    {opt.icon && getIcon(opt.icon)}
                    {opt.label}
                  </button>
                ))}
              </div>
              
              {answers.length === 7 && (
                <p className="text-center text-xs text-green-500 mt-8">
                  ✓ Great! After these questions, you'll see recommendations!
                </p>
              )}
            </motion.div>
          )}

          {stage === 'matching' && (
            <motion.div
              key="matching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-md flex flex-col items-center"
            >
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-12 h-12 border-4 border-[#1F2937] border-t-[#E50914] rounded-full animate-spin mb-4" />
                  <p className="text-gray-400 text-sm">Finding your matches...</p>
                </div>
              ) : mediaQueue.length > 0 ? (
                <>
                  <div className="relative w-[280px] sm:w-[320px] mx-auto min-h-[400px] flex items-center justify-center">
                    {mediaQueue[1] && (
                      <div className="absolute w-[80%] aspect-[2/3] bg-[#0F0F1A] border border-[#1F2937] rounded-2xl scale-95 -mt-6 opacity-50" />
                    )}
                    {mediaQueue[2] && (
                      <div className="absolute w-[70%] aspect-[2/3] bg-[#0F0F1A] border border-[#1F2937] rounded-2xl scale-90 -mt-12 opacity-30" />
                    )}

                    {mediaQueue[0] && (
                      <motion.div
                        className="w-[90%] aspect-[2/3] absolute cursor-grab"
                        style={{ x, rotate }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.8}
                        onDragEnd={handleDragEnd}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0F0F1A] border border-[#1F2937] shadow-xl">
                          {mediaQueue[0].poster_path ? (
                            <Image
                              src={`https://image.tmdb.org/t/p/w500${mediaQueue[0].poster_path}`}
                              alt={mediaQueue[0].title || mediaQueue[0].name || ''}
                              fill
                              className="object-cover"
                              draggable={false}
                              priority
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#1F2937] to-[#0F0F1A] flex items-center justify-center">
                              {mediaQueue[0].media_type === 'tv' ? 
                                <Tv className="w-16 h-16 text-gray-600" /> : 
                                <Film className="w-16 h-16 text-gray-600" />
                              }
                            </div>
                          )}
                          
                          <motion.div 
                            style={{ opacity: opacityLike }} 
                            className="absolute top-8 left-8 border-4 border-green-500 text-green-500 font-black text-2xl uppercase px-4 py-2 rounded-lg rotate-[-15deg] bg-black/50 backdrop-blur-sm"
                          >
                            ADD
                          </motion.div>
                          <motion.div 
                            style={{ opacity: opacitySkip }} 
                            className="absolute top-8 right-8 border-4 border-[#E50914] text-[#E50914] font-black text-2xl uppercase px-4 py-2 rounded-lg rotate-[15deg] bg-black/50 backdrop-blur-sm"
                          >
                            SKIP
                          </motion.div>

                          <div className="absolute top-4 left-4 bg-black/70 rounded-full px-2 py-1 flex items-center gap-1 border border-[#E50914]/50">
                            {mediaQueue[0].media_type === 'tv' ? <Tv className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                            <span className="text-[10px] font-bold uppercase">
                              {mediaQueue[0].media_type === 'tv' ? 'TV Series' : 'Movie'}
                            </span>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl font-black uppercase text-white mb-2 line-clamp-2">
                              {mediaQueue[0].title || mediaQueue[0].name}
                            </h3>
                            <div className="flex gap-2 text-xs font-mono text-gray-300">
                              <span className="bg-black/50 px-2 py-1 rounded flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500" />
                                {mediaQueue[0].vote_average?.toFixed(1) || 'NR'}
                              </span>
                              <span className="bg-black/50 px-2 py-1 rounded flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {getMediaYear(mediaQueue[0])}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleSkip}
                      className="flex items-center gap-2 bg-[#0F0F1A] border-2 border-[#1F2937] px-6 py-3 rounded-xl font-bold uppercase text-gray-400 hover:text-[#E50914] hover:border-[#E50914] transition"
                    >
                      <X className="w-5 h-5" />
                      <span>Skip</span>
                    </button>
                    {mediaQueue[0] && (
                      <a
                        href={`/${mediaQueue[0].media_type === 'tv' ? 'tv/' : ''}${getMediaSlug(mediaQueue[0])}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase flex items-center gap-2 hover:scale-105 transition"
                      >
                        <Play className="w-5 h-5 fill-black" />
                        <span>Watch Now</span>
                      </a>
                    )}
                    <button
                      onClick={handleAccept}
                      className="flex items-center gap-2 bg-[#0F0F1A] border-2 border-[#1F2937] px-6 py-3 rounded-xl font-bold uppercase text-gray-400 hover:text-green-500 hover:border-green-500 transition"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400 mb-4">No more results available</p>
                  <button
                    onClick={() => fetchMatchedMedia().then(setMediaQueue)}
                    className="bg-[#E50914] px-6 py-2 rounded-lg text-sm"
                  >
                    Try Again
                  </button>
                </div>
              )}
              
              {answers.length < maxQuestions && skipsRemaining > 0 && !isLoading && (
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Skip {skipsRemaining} more time{skipsRemaining !== 1 ? 's' : ''} to get 3 more questions for better matches!
                </p>
              )}
              
              {answers.length >= maxQuestions && (
                <p className="text-xs text-green-500 mt-4 text-center">
                  You've answered {maxQuestions} questions! Last batch of recommendations!
                </p>
              )}
            </motion.div>
          )}

          {stage === 'completed' && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center border border-green-500/50 mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black uppercase text-white mb-4">Quiz Complete!</h2>
              <div className="text-gray-400 font-mono text-sm uppercase bg-[#0F0F1A] p-6 rounded-xl border border-[#1F2937] mb-8">
                <div className="flex justify-between border-b border-[#1F2937] pb-2 mb-2">
                  <span>Questions Answered:</span>
                  <span className="text-white font-bold">{answers.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saved to Watchlist:</span>
                  <span className="text-white font-bold">{watchlist.length}</span>
                </div>
              </div>

              {watchlist.length > 0 && (
                <div className="w-full mb-8">
                  <h3 className="text-xl font-bold uppercase text-white mb-4 flex items-center gap-2 justify-center">
                    <TrendingUp className="w-5 h-5 text-[#E50914]" />
                    Your Collection
                  </h3>
                  <div className="flex overflow-x-auto gap-4 pb-4">
                    {watchlist.map((media) => (
                      <a 
                        key={media.id} 
                        href={`/${media.media_type === 'tv' ? 'tv/' : ''}${getMediaSlug(media)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-24 shrink-0 rounded-md overflow-hidden border border-[#1F2937] hover:border-[#E50914] transition group"
                      >
                        <div className="relative aspect-[2/3]">
                          {media.poster_path ? (
                            <Image
                              src={`https://image.tmdb.org/t/p/w185${media.poster_path}`}
                              alt={media.title || media.name || ''}
                              fill
                              className="object-cover group-hover:scale-110 transition"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#1F2937] flex items-center justify-center">
                              {media.media_type === 'tv' ? <Tv className="w-6 h-6" /> : <Film className="w-6 h-6" />}
                            </div>
                          )}
                          <div className="absolute top-1 right-1 bg-black/70 rounded-full p-0.5">
                            {media.media_type === 'tv' ? <Tv className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-[#E50914] text-white px-8 py-4 font-bold uppercase rounded-lg mx-auto hover:bg-white hover:text-black transition"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}