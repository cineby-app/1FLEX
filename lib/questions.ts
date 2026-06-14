// app/match/questions.ts

export interface Question {
  id: string;
  text: string;
  options: { label: string; value: string; icon?: string }[];
}

export const allQuestions: Question[] = [
  {
    id: 'media_type',
    text: 'What are you in the mood for?',
    options: [
      { label: 'Movie Night', value: 'movie', icon: 'film' },
      { label: 'Binge a Series', value: 'tv', icon: 'tv' },
      { label: 'Surprise Me', value: 'both', icon: 'shuffle' },
    ],
  },
  {
    id: 'genre_1',
    text: 'Pick your favorite genre',
    options: [
      { label: 'Action', value: 'action', icon: 'flame' },
      { label: 'Comedy', value: 'comedy', icon: 'smile' },
      { label: 'Drama', value: 'drama', icon: 'theater' },
      { label: 'Sci-Fi', value: 'sci-fi', icon: 'rocket' },
      { label: 'Romance', value: 'romance', icon: 'heart' },
      { label: 'Thriller', value: 'thriller', icon: 'alert-triangle' },
      { label: 'Horror', value: 'horror', icon: 'ghost' },
      { label: 'Animation', value: 'animation', icon: 'palette' },
    ],
  },
  {
    id: 'genre_2',
    text: 'What is your secondary genre choice?',
    options: [
      { label: 'Western', value: 'western', icon: 'compass' },
      { label: 'Musical', value: 'musical', icon: 'music' },
      { label: 'War', value: 'war', icon: 'flag' },
      { label: 'Crime', value: 'crime', icon: 'briefcase' },
      { label: 'Mystery', value: 'mystery', icon: 'search' },
      { label: 'Fantasy', value: 'fantasy', icon: 'sparkles' },
      { label: 'Documentary', value: 'documentary', icon: 'camera' },
      { label: 'Biopic', value: 'biopic', icon: 'user' },
    ],
  },
  {
    id: 'time_1',
    text: 'How much time do you have?',
    options: [
      { label: 'Quick Watch', value: 'quick', icon: 'clock' },
      { label: 'Standard Length', value: 'standard', icon: 'hourglass' },
      { label: 'Long Story', value: 'long', icon: 'book' },
      { label: 'Epic Journey', value: 'epic', icon: 'compass' },
    ],
  },
  {
    id: 'time_2',
    text: 'Do you prefer shorter or longer episodes?',
    options: [
      { label: '30 min episodes', value: 'short', icon: 'clock' },
      { label: '45-60 min episodes', value: 'medium', icon: 'hourglass' },
      { label: 'Movie length (90+ min)', value: 'long', icon: 'film' },
      { label: 'No preference', value: 'any', icon: 'shuffle' },
    ],
  },
  {
    id: 'era_1',
    text: 'What era do you prefer?',
    options: [
      { label: 'Classic (50s-70s)', value: 'classic', icon: 'film' },
      { label: 'Golden Age (80s-90s)', value: 'golden', icon: 'award' },
      { label: 'Modern (00s-10s)', value: 'modern', icon: 'cpu' },
      { label: 'New Releases', value: 'new', icon: 'sparkles' },
    ],
  },
  {
    id: 'era_2',
    text: 'What decade speaks to you most?',
    options: [
      { label: '1950s', value: '1950s', icon: 'film' },
      { label: '1960s', value: '1960s', icon: 'music' },
      { label: '1970s', value: '1970s', icon: 'guitar' },
      { label: '1980s', value: '1980s', icon: 'radio' },
      { label: '1990s', value: '1990s', icon: 'cpu' },
      { label: '2000s', value: '2000s', icon: 'phone' },
      { label: '2010s', value: '2010s', icon: 'tablet' },
      { label: '2020s', value: '2020s', icon: 'sparkles' },
    ],
  },
  {
    id: 'mood_1',
    text: 'How do you want to feel?',
    options: [
      { label: 'Energetic', value: 'energetic', icon: 'zap' },
      { label: 'Happy', value: 'happy', icon: 'sun' },
      { label: 'Intense', value: 'intense', icon: 'target' },
      { label: 'Nostalgic', value: 'nostalgic', icon: 'clock-rewind' },
      { label: 'Thoughtful', value: 'thoughtful', icon: 'brain' },
      { label: 'Relaxed', value: 'relaxed', icon: 'cloud' },
    ],
  },
  {
    id: 'mood_2',
    text: 'What mood are you trying to escape?',
    options: [
      { label: 'Stress & Anxiety', value: 'stress', icon: 'cloud-rain' },
      { label: 'Boredom', value: 'bored', icon: 'circle' },
      { label: 'Loneliness', value: 'lonely', icon: 'user' },
      { label: 'Anger', value: 'angry', icon: 'flame' },
      { label: 'Sadness', value: 'sad', icon: 'cloud-rain' },
      { label: 'Not escaping anything', value: 'none', icon: 'sun' },
    ],
  },
  {
    id: 'pacing_1',
    text: 'What pacing do you prefer?',
    options: [
      { label: 'Fast & Furious', value: 'fast', icon: 'wind' },
      { label: 'Steady & Engaging', value: 'steady', icon: 'waves' },
      { label: 'Slow Burn', value: 'slow', icon: 'fire' },
      { label: 'Complex Layers', value: 'complex', icon: 'layers' },
    ],
  },
  {
    id: 'pacing_2',
    text: 'How do you feel about plot twists?',
    options: [
      { label: 'Love them!', value: 'love', icon: 'zap' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Predictable is fine', value: 'predictable', icon: 'eye' },
      { label: 'Hate them', value: 'hate', icon: 'x' },
    ],
  },
  {
    id: 'setting_1',
    text: 'Where should the story take place?',
    options: [
      { label: 'Space / Future', value: 'space', icon: 'orbit' },
      { label: 'Real World', value: 'real', icon: 'globe' },
      { label: 'Fantasy Realm', value: 'fantasy', icon: 'sparkles' },
      { label: 'Historical', value: 'historical', icon: 'landmark' },
      { label: 'Underwater', value: 'underwater', icon: 'droplet' },
      { label: 'Post-Apocalyptic', value: 'apocalypse', icon: 'skull' },
    ],
  },
  {
    id: 'setting_2',
    text: 'Do you prefer urban or rural settings?',
    options: [
      { label: 'Big City', value: 'urban', icon: 'building' },
      { label: 'Small Town', value: 'rural', icon: 'home' },
      { label: 'Wilderness', value: 'wild', icon: 'tree' },
      { label: 'Suburbs', value: 'suburb', icon: 'home' },
      { label: 'No preference', value: 'any', icon: 'shuffle' },
    ],
  },
  {
    id: 'protagonist_1',
    text: 'What kind of hero do you prefer?',
    options: [
      { label: 'Underdog', value: 'underdog', icon: 'shield' },
      { label: 'Anti-hero', value: 'antihero', icon: 'skull' },
      { label: 'Ensemble Cast', value: 'ensemble', icon: 'users' },
      { label: 'Chosen One', value: 'chosen', icon: 'crown' },
      { label: 'Reluctant Hero', value: 'reluctant', icon: 'help-circle' },
      { label: 'Female Lead', value: 'female', icon: 'venus' },
    ],
  },
  {
    id: 'protagonist_2',
    text: 'What age range for main characters?',
    options: [
      { label: 'Teens / Young Adults', value: 'teen', icon: 'user' },
      { label: '20s-30s', value: 'young', icon: 'user' },
      { label: '40s-50s', value: 'middle', icon: 'user' },
      { label: '60s+', value: 'senior', icon: 'user' },
      { label: 'Mixed ages', value: 'mixed', icon: 'users' },
    ],
  },
  {
    id: 'ending_1',
    text: 'How do you want it to end?',
    options: [
      { label: 'Happily Ever After', value: 'happy', icon: 'heart' },
      { label: 'Keep Me Guessing', value: 'ambiguous', icon: 'help-circle' },
      { label: 'Mind-Blowing Twist', value: 'twist', icon: 'zap' },
      { label: 'Tragic but Beautiful', value: 'tragic', icon: 'cloud-rain' },
      { label: 'Open Ending', value: 'open', icon: 'door-open' },
    ],
  },
  {
    id: 'ending_2',
    text: 'Do you need closure or open to interpretation?',
    options: [
      { label: 'Need full closure', value: 'closure', icon: 'check-circle' },
      { label: 'Some ambiguity is fine', value: 'some', icon: 'help-circle' },
      { label: 'Love open endings', value: 'open', icon: 'door-open' },
      { label: 'Set up for sequel', value: 'sequel', icon: 'trending-up' },
    ],
  },
  {
    id: 'visuals_1',
    text: 'What visual style excites you?',
    options: [
      { label: 'Bright & Colorful', value: 'colorful', icon: 'palette' },
      { label: 'Dark & Gritty', value: 'dark', icon: 'moon' },
      { label: 'Visually Stunning', value: 'stunning', icon: 'camera' },
      { label: 'Grounded & Realistic', value: 'realistic', icon: 'eye' },
      { label: 'Anime Style', value: 'anime', icon: 'brush' },
      { label: 'Black & White', value: 'bw', icon: 'contrast' },
    ],
  },
  {
    id: 'visuals_2',
    text: 'How important are special effects?',
    options: [
      { label: 'Very important', value: 'very', icon: 'sparkles' },
      { label: 'Somewhat important', value: 'somewhat', icon: 'camera' },
      { label: 'Not important at all', value: 'not', icon: 'eye' },
      { label: 'Practical effects only', value: 'practical', icon: 'wrench' },
    ],
  },
  {
    id: 'stakes_1',
    text: 'What should be at stake?',
    options: [
      { label: 'The Entire World', value: 'world', icon: 'globe' },
      { label: 'Personal Relationships', value: 'personal', icon: 'heart' },
      { label: 'Survival', value: 'survival', icon: 'alert-triangle' },
      { label: 'Discovering Truth', value: 'truth', icon: 'search' },
      { label: 'Fortune & Power', value: 'fortune', icon: 'dollar-sign' },
      { label: 'Freedom', value: 'freedom', icon: 'flag' },
    ],
  },
  {
    id: 'stakes_2',
    text: 'How high should the stakes be?',
    options: [
      { label: 'Life or death', value: 'extreme', icon: 'skull' },
      { label: 'High stakes', value: 'high', icon: 'alert-triangle' },
      { label: 'Medium stakes', value: 'medium', icon: 'target' },
      { label: 'Low stakes / Cozy', value: 'low', icon: 'heart' },
    ],
  },
  {
    id: 'focus_1',
    text: 'What should grab your attention most?',
    options: [
      { label: 'Heart-pumping Action', value: 'action', icon: 'zap' },
      { label: 'Deep Character Study', value: 'character', icon: 'users' },
      { label: 'Mind-bending Plot', value: 'plot', icon: 'brain' },
      { label: 'Laughs & Jokes', value: 'comedy', icon: 'smile' },
      { label: 'Emotional Journey', value: 'emotional', icon: 'heart' },
      { label: 'Philosophical Themes', value: 'philosophy', icon: 'book-open' },
    ],
  },
  {
    id: 'focus_2',
    text: 'Do you prefer dialogue-heavy or action-heavy?',
    options: [
      { label: 'Dialogue-heavy', value: 'dialogue', icon: 'message-circle' },
      { label: 'Action-heavy', value: 'action', icon: 'zap' },
      { label: 'Balanced', value: 'balanced', icon: 'scale' },
      { label: 'Visual storytelling', value: 'visual', icon: 'camera' },
    ],
  },
  {
    id: 'budget_1',
    text: 'Big budget or indie?',
    options: [
      { label: 'Huge Blockbuster', value: 'blockbuster', icon: 'award' },
      { label: 'Hidden Indie Gem', value: 'indie', icon: 'gem' },
      { label: 'Critical Darling', value: 'critical', icon: 'star' },
      { label: 'Cult Classic', value: 'cult', icon: 'flame' },
      { label: "Doesn't Matter", value: 'any', icon: 'shuffle' },
    ],
  },
  {
    id: 'budget_2',
    text: 'How do you feel about found footage style?',
    options: [
      { label: 'Love it', value: 'love', icon: 'camera' },
      { label: 'It can be good', value: 'ok', icon: 'eye' },
      { label: 'Not a fan', value: 'no', icon: 'x' },
      { label: 'Makes me dizzy', value: 'hate', icon: 'alert-triangle' },
    ],
  },
  {
    id: 'suspense_1',
    text: 'How do you like your suspense?',
    options: [
      { label: 'Jump Scares', value: 'jump', icon: 'ghost' },
      { label: 'Psychological Tension', value: 'psychological', icon: 'brain' },
      { label: 'Action Sequences', value: 'action', icon: 'target' },
      { label: 'Slow Reveal', value: 'slow', icon: 'clock' },
      { label: 'No suspense', value: 'none', icon: 'shield' },
    ],
  },
  {
    id: 'suspense_2',
    text: 'Do you like being scared?',
    options: [
      { label: 'Love horror', value: 'love', icon: 'ghost' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Only mild', value: 'mild', icon: 'shield' },
      { label: 'Not at all', value: 'no', icon: 'sun' },
    ],
  },
  {
    id: 'emotion_1',
    text: 'Which emotion do you want to feel most?',
    options: [
      { label: 'A Good Cry', value: 'sad', icon: 'cloud-rain' },
      { label: 'Adrenaline Rush', value: 'excited', icon: 'zap' },
      { label: 'Belly Laughs', value: 'funny', icon: 'smile' },
      { label: 'Paranoia', value: 'scared', icon: 'ghost' },
      { label: 'Warm & Fuzzy', value: 'warm', icon: 'heart' },
      { label: 'Awe & Wonder', value: 'awe', icon: 'sparkles' },
    ],
  },
  {
    id: 'emotion_2',
    text: 'Do you want to feel inspired?',
    options: [
      { label: 'Yes, very much', value: 'yes', icon: 'sparkles' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Not necessary', value: 'no', icon: 'x' },
      { label: 'I want to be challenged', value: 'challenge', icon: 'target' },
    ],
  },
  {
    id: 'subtitles_1',
    text: 'Are subtitles okay?',
    options: [
      { label: 'Yes, love foreign films', value: 'yes', icon: 'globe' },
      { label: 'Only if dubbed', value: 'dubbed', icon: 'mic' },
      { label: 'Prefer English', value: 'english', icon: 'flag' },
      { label: 'Any language', value: 'any', icon: 'languages' },
    ],
  },
  {
    id: 'subtitles_2',
    text: 'What foreign cinema interests you?',
    options: [
      { label: 'Korean', value: 'korean', icon: 'globe' },
      { label: 'Japanese', value: 'japanese', icon: 'globe' },
      { label: 'French', value: 'french', icon: 'globe' },
      { label: 'Spanish', value: 'spanish', icon: 'globe' },
      { label: 'Indian (Bollywood)', value: 'indian', icon: 'globe' },
      { label: 'Any', value: 'any', icon: 'globe' },
    ],
  },
  {
    id: 'atmosphere_1',
    text: 'What atmosphere hits right?',
    options: [
      { label: 'Cozy & Comforting', value: 'cozy', icon: 'home' },
      { label: 'Dark & Rainy', value: 'dark', icon: 'cloud-rain' },
      { label: 'Snowy Isolation', value: 'snow', icon: 'snowflake' },
      { label: 'Sunny & Bright', value: 'sunny', icon: 'sun' },
      { label: 'Mysterious & Foggy', value: 'mysterious', icon: 'cloud' },
      { label: 'Night City', value: 'night', icon: 'moon' },
    ],
  },
  {
    id: 'atmosphere_2',
    text: 'Do you prefer realistic or stylized worlds?',
    options: [
      { label: 'Realistic', value: 'realistic', icon: 'eye' },
      { label: 'Stylized', value: 'stylized', icon: 'palette' },
      { label: 'Surreal', value: 'surreal', icon: 'cloud' },
      { label: 'Hyper-realistic', value: 'hyper', icon: 'camera' },
    ],
  },
  {
    id: 'rewatch_1',
    text: 'How important is rewatchability?',
    options: [
      { label: 'Very important', value: 'high', icon: 'repeat' },
      { label: 'Somewhat important', value: 'medium', icon: 'clock' },
      { label: 'One-time is fine', value: 'low', icon: 'x' },
      { label: 'Better on rewatch', value: 'better', icon: 'trending-up' },
    ],
  },
  {
    id: 'rewatch_2',
    text: 'Do you notice new details on rewatch?',
    options: [
      { label: 'Always', value: 'always', icon: 'eye' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Rarely', value: 'rarely', icon: 'x' },
      { label: 'I love hidden details', value: 'love', icon: 'search' },
    ],
  },
  {
    id: 'dialogue_1',
    text: 'Dialogue or visual storytelling?',
    options: [
      { label: 'Witty Banter', value: 'banter', icon: 'message-circle' },
      { label: 'Deep Monologues', value: 'monologue', icon: 'book-open' },
      { label: 'Show, Dont Tell', value: 'visual', icon: 'camera' },
      { label: 'Visual Masterpiece', value: 'visuals', icon: 'image' },
      { label: 'Quiet & Subtle', value: 'quiet', icon: 'volume-2' },
    ],
  },
  {
    id: 'dialogue_2',
    text: 'What makes dialogue great to you?',
    options: [
      { label: 'Realistic conversations', value: 'realistic', icon: 'message-circle' },
      { label: 'Poetic & Philosophical', value: 'poetic', icon: 'book-open' },
      { label: 'Fast & Snappy', value: 'fast', icon: 'zap' },
      { label: 'Minimalist', value: 'minimal', icon: 'volume-x' },
    ],
  },
  {
    id: 'villain_1',
    text: 'What makes a great villain?',
    options: [
      { label: 'Relatable Motives', value: 'relatable', icon: 'heart' },
      { label: 'Pure Evil', value: 'evil', icon: 'skull' },
      { label: 'Corporate Greed', value: 'corporate', icon: 'briefcase' },
      { label: 'Comical Buffoon', value: 'comical', icon: 'smile' },
      { label: 'Mastermind', value: 'mastermind', icon: 'brain' },
      { label: 'Tragic Backstory', value: 'tragic', icon: 'cloud-rain' },
    ],
  },
  {
    id: 'villain_2',
    text: 'Do you prefer a clear villain or grey morality?',
    options: [
      { label: 'Clear villain', value: 'clear', icon: 'skull' },
      { label: 'Grey morality', value: 'grey', icon: 'balance' },
      { label: 'No real villain', value: 'none', icon: 'heart' },
      { label: 'Villain protagonist', value: 'protagonist', icon: 'user' },
    ],
  },
  {
    id: 'music_1',
    text: 'What soundtrack fits your mood?',
    options: [
      { label: 'Epic Orchestral', value: 'orchestral', icon: 'music' },
      { label: 'Pop Anthems', value: 'pop', icon: 'radio' },
      { label: 'Eerie Synths', value: 'synth', icon: 'mic' },
      { label: 'Classical or Jazz', value: 'classical', icon: 'piano' },
      { label: 'Rock & Roll', value: 'rock', icon: 'guitar' },
      { label: 'Silence is Golden', value: 'silence', icon: 'volume-x' },
    ],
  },
  {
    id: 'music_2',
    text: 'How important is the musical score?',
    options: [
      { label: 'Essential', value: 'essential', icon: 'music' },
      { label: 'Important', value: 'important', icon: 'headphones' },
      { label: 'Nice to have', value: 'nice', icon: 'radio' },
      { label: 'Dont notice', value: 'ignore', icon: 'volume-x' },
    ],
  },
  {
    id: 'humor_1',
    text: 'What is your sense of humor?',
    options: [
      { label: 'Slapstick', value: 'slapstick', icon: 'smile' },
      { label: 'Dry & Witty', value: 'dry', icon: 'brain' },
      { label: 'Dark Humor', value: 'dark', icon: 'skull' },
      { label: 'Goofy Parody', value: 'goofy', icon: 'laugh' },
      { label: 'Sarcastic', value: 'sarcastic', icon: 'message-circle' },
      { label: 'Clean Comedy', value: 'clean', icon: 'sun' },
    ],
  },
  {
    id: 'humor_2',
    text: 'How much comedy do you want?',
    options: [
      { label: 'Full comedy', value: 'full', icon: 'smile' },
      { label: 'Dramedy', value: 'mixed', icon: 'balance' },
      { label: 'A little comic relief', value: 'little', icon: 'clock' },
      { label: 'No comedy', value: 'none', icon: 'x' },
    ],
  },
  {
    id: 'violence_1',
    text: 'What level of intensity?',
    options: [
      { label: 'Clean & PG-13', value: 'mild', icon: 'shield' },
      { label: 'Gritty & Gory', value: 'intense', icon: 'skull' },
      { label: 'Stylized Violence', value: 'stylish', icon: 'camera' },
      { label: 'No Violence', value: 'none', icon: 'heart' },
    ],
  },
  {
    id: 'violence_2',
    text: 'Can violence be artistic?',
    options: [
      { label: 'Yes, love stylish violence', value: 'yes', icon: 'camera' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Prefer implied', value: 'implied', icon: 'eye' },
      { label: 'No violence needed', value: 'no', icon: 'heart' },
    ],
  },
  {
    id: 'tropes_1',
    text: 'What trope do you enjoy?',
    options: [
      { label: 'Enemies to Lovers', value: 'enemies', icon: 'heart' },
      { label: 'The Chosen One', value: 'chosen', icon: 'crown' },
      { label: 'Whodunit Mystery', value: 'mystery', icon: 'search' },
      { label: 'Fish out of Water', value: 'fish', icon: 'droplet' },
      { label: 'Found Family', value: 'family', icon: 'users' },
      { label: 'Time Loop', value: 'time', icon: 'clock' },
    ],
  },
  {
    id: 'tropes_2',
    text: 'What trope do you hate?',
    options: [
      { label: 'Love Triangle', value: 'triangle', icon: 'heart' },
      { label: 'Amnesia', value: 'amnesia', icon: 'brain' },
      { label: 'Deus Ex Machina', value: 'deus', icon: 'sparkles' },
      { label: "It Was All a Dream", value: 'dream', icon: 'cloud' },
      { label: 'Miscommunication', value: 'miscommunication', icon: 'message-circle' },
      { label: 'None', value: 'none', icon: 'x' },
    ],
  },
  {
    id: 'source_1',
    text: 'Preferred source material?',
    options: [
      { label: 'Based on True Story', value: 'true', icon: 'flag' },
      { label: 'Book Adaptation', value: 'book', icon: 'book' },
      { label: 'Comic Book', value: 'comic', icon: 'image' },
      { label: 'Video Game', value: 'game', icon: 'gamepad' },
      { label: 'Completely Original', value: 'original', icon: 'sparkles' },
    ],
  },
  {
    id: 'source_2',
    text: 'Do you prefer adaptations or originals?',
    options: [
      { label: 'Adaptations', value: 'adaptation', icon: 'book' },
      { label: 'Original stories', value: 'original', icon: 'sparkles' },
      { label: 'Both equally', value: 'both', icon: 'shuffle' },
      { label: 'Reboots/Remakes', value: 'remake', icon: 'repeat' },
    ],
  },
  {
    id: 'color_1',
    text: 'What color palette do you prefer?',
    options: [
      { label: 'Neon Cyberpunk', value: 'neon', icon: 'sparkles' },
      { label: 'Washed-out Muted', value: 'muted', icon: 'cloud' },
      { label: 'Warm & Golden', value: 'warm', icon: 'sun' },
      { label: 'Cold Blues', value: 'cold', icon: 'droplet' },
      { label: 'High Contrast', value: 'contrast', icon: 'contrast' },
      { label: 'Pastel', value: 'pastel', icon: 'palette' },
    ],
  },
  {
    id: 'color_2',
    text: 'Do you notice color grading in films?',
    options: [
      { label: 'Always', value: 'always', icon: 'eye' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Rarely', value: 'rarely', icon: 'x' },
      { label: 'Love vibrant colors', value: 'vibrant', icon: 'palette' },
    ],
  },
  {
    id: 'magic_1',
    text: 'Level of magic or tech?',
    options: [
      { label: 'Hard Sci-Fi', value: 'scifi', icon: 'cpu' },
      { label: 'High Fantasy Magic', value: 'fantasy', icon: 'sparkles' },
      { label: 'Slightly Supernatural', value: 'supernatural', icon: 'ghost' },
      { label: 'Completely Grounded', value: 'grounded', icon: 'globe' },
      { label: 'Low Magic', value: 'low', icon: 'candle' },
    ],
  },
  {
    id: 'magic_2',
    text: 'Do you prefer hard magic systems or soft magic?',
    options: [
      { label: 'Hard (with rules)', value: 'hard', icon: 'book' },
      { label: 'Soft (mysterious)', value: 'soft', icon: 'sparkles' },
      { label: 'No magic', value: 'none', icon: 'x' },
      { label: 'Science-based', value: 'science', icon: 'cpu' },
    ],
  },
  {
    id: 'family_1',
    text: 'Who are you watching with?',
    options: [
      { label: 'Family Friendly', value: 'family', icon: 'users' },
      { label: 'Mature Audiences', value: 'mature', icon: 'skull' },
      { label: 'Date Night', value: 'date', icon: 'heart' },
      { label: 'Just Me', value: 'alone', icon: 'user' },
      { label: 'Friends', value: 'friends', icon: 'users' },
    ],
  },
  {
    id: 'family_2',
    text: 'Age appropriate content?',
    options: [
      { label: 'G / PG', value: 'pg', icon: 'shield' },
      { label: 'PG-13', value: 'pg13', icon: 'eye' },
      { label: 'R', value: 'r', icon: 'skull' },
      { label: 'NC-17 / Unrated', value: 'nc17', icon: 'alert-triangle' },
    ],
  },
  {
    id: 'animation_1',
    text: 'Animation style preference?',
    options: [
      { label: 'Classic 2D', value: '2d', icon: 'brush' },
      { label: 'Cutting-edge 3D', value: '3d', icon: 'cube' },
      { label: 'Stop Motion', value: 'stop', icon: 'camera' },
      { label: 'Live Action Only', value: 'live', icon: 'film' },
      { label: 'Anime', value: 'anime', icon: 'eye' },
    ],
  },
  {
    id: 'animation_2',
    text: 'Do you watch animated content for adults?',
    options: [
      { label: 'Yes, love adult animation', value: 'yes', icon: 'tv' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Prefer kids animation', value: 'kids', icon: 'smile' },
      { label: 'No animation', value: 'no', icon: 'x' },
    ],
  },
  {
    id: 'plot_1',
    text: 'Preferred plot structure?',
    options: [
      { label: 'Straightforward Linear', value: 'linear', icon: 'trending-up' },
      { label: 'Mind-bending Timeline', value: 'nonlinear', icon: 'zap' },
      { label: 'Multiple Stories', value: 'multiple', icon: 'git-branch' },
      { label: 'Anthology Format', value: 'anthology', icon: 'layers' },
      { label: 'Frame Story', value: 'frame', icon: 'repeat' },
    ],
  },
  {
    id: 'plot_2',
    text: 'How complex should the plot be?',
    options: [
      { label: 'Simple & Straightforward', value: 'simple', icon: 'trending-up' },
      { label: 'Moderately Complex', value: 'moderate', icon: 'waves' },
      { label: 'Very Complex', value: 'complex', icon: 'brain' },
      { label: 'Incomprehensible', value: 'incomprehensible', icon: 'zap' },
    ],
  },
  {
    id: 'leads_1',
    text: 'Number of main characters?',
    options: [
      { label: 'A Lone Wolf', value: 'solo', icon: 'user' },
      { label: 'A Dynamic Duo', value: 'duo', icon: 'users' },
      { label: 'A Love Triangle', value: 'triangle', icon: 'heart' },
      { label: 'Massive Ensemble', value: 'ensemble', icon: 'users' },
    ],
  },
  {
    id: 'leads_2',
    text: 'Do you prefer character-driven or plot-driven?',
    options: [
      { label: 'Character-driven', value: 'character', icon: 'user' },
      { label: 'Plot-driven', value: 'plot', icon: 'trending-up' },
      { label: 'Balanced', value: 'balanced', icon: 'scale' },
      { label: 'World-driven', value: 'world', icon: 'globe' },
    ],
  },
  {
    id: 'depth_1',
    text: 'How deep should the themes be?',
    options: [
      { label: 'Light & Fun', value: 'light', icon: 'sun' },
      { label: 'Thought-provoking', value: 'thoughtful', icon: 'brain' },
      { label: 'Philosophical', value: 'philosophical', icon: 'book-open' },
      { label: 'Dark & Heavy', value: 'dark', icon: 'moon' },
    ],
  },
  {
    id: 'depth_2',
    text: 'Do you like social commentary in media?',
    options: [
      { label: 'Yes, very much', value: 'yes', icon: 'message-circle' },
      { label: 'If done subtly', value: 'subtle', icon: 'eye' },
      { label: 'No, prefer escapism', value: 'no', icon: 'cloud' },
      { label: 'Dont notice', value: 'ignore', icon: 'x' },
    ],
  },
  {
    id: 'format_1',
    text: 'Series or standalone?',
    options: [
      { label: 'Standalone Movie', value: 'standalone', icon: 'film' },
      { label: 'Movie Franchise', value: 'franchise', icon: 'layers' },
      { label: 'Limited Series', value: 'limited', icon: 'tv' },
      { label: 'Ongoing Series', value: 'ongoing', icon: 'repeat' },
    ],
  },
  {
    id: 'format_2',
    text: 'How many seasons can you commit to?',
    options: [
      { label: '1-2 seasons', value: 'short', icon: 'clock' },
      { label: '3-5 seasons', value: 'medium', icon: 'hourglass' },
      { label: '6+ seasons', value: 'long', icon: 'book' },
      { label: 'As long as its good', value: 'any', icon: 'heart' },
    ],
  },
  {
    id: 'release_1',
    text: 'Do you prefer completed series or ongoing?',
    options: [
      { label: 'Completed series', value: 'completed', icon: 'check-circle' },
      { label: 'Ongoing (weekly watch)', value: 'ongoing', icon: 'clock' },
      { label: 'Binge-ready only', value: 'binge', icon: 'zap' },
      { label: 'No preference', value: 'any', icon: 'shuffle' },
    ],
  },
  {
    id: 'release_2',
    text: 'Weekly release or all at once?',
    options: [
      { label: 'All at once (binge)', value: 'binge', icon: 'zap' },
      { label: 'Weekly (anticipation)', value: 'weekly', icon: 'clock' },
      { label: 'Both are fine', value: 'both', icon: 'shuffle' },
    ],
  },
  {
    id: 'awards_1',
    text: 'Do award nominations influence you?',
    options: [
      { label: 'Yes, trust the awards', value: 'yes', icon: 'award' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'No, I decide', value: 'no', icon: 'x' },
      { label: 'Prefer audience scores', value: 'audience', icon: 'users' },
    ],
  },
  {
    id: 'awards_2',
    text: 'Oscar winner or Fan favorite?',
    options: [
      { label: 'Oscar winners', value: 'oscar', icon: 'award' },
      { label: 'Fan favorites', value: 'fan', icon: 'heart' },
      { label: 'Cult classics', value: 'cult', icon: 'flame' },
      { label: 'Hidden gems', value: 'gem', icon: 'gem' },
    ],
  },
  {
    id: 'social_1',
    text: 'Do you watch what\'s trending?',
    options: [
      { label: 'Yes, love popular', value: 'yes', icon: 'trending-up' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'No, avoid hype', value: 'no', icon: 'x' },
      { label: 'I find my own', value: 'own', icon: 'search' },
    ],
  },
  {
    id: 'social_2',
    text: 'Do you avoid spoilers?',
    options: [
      { label: 'At all costs', value: 'yes', icon: 'shield' },
      { label: 'Prefer to', value: 'prefer', icon: 'eye' },
      { label: 'Doesnt bother me', value: 'no', icon: 'x' },
      { label: 'I seek them out', value: 'seek', icon: 'search' },
    ],
  },
  {
    id: 'comfort_1',
    text: 'Do you rewatch comfort content?',
    options: [
      { label: 'All the time', value: 'always', icon: 'repeat' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Rarely', value: 'rarely', icon: 'x' },
      { label: 'Always something new', value: 'new', icon: 'sparkles' },
    ],
  },
  {
    id: 'comfort_2',
    text: 'What is your comfort genre?',
    options: [
      { label: 'Rom-com', value: 'romcom', icon: 'heart' },
      { label: 'Sitcom', value: 'sitcom', icon: 'smile' },
      { label: 'Animation', value: 'animation', icon: 'palette' },
      { label: 'Action', value: 'action', icon: 'flame' },
      { label: 'Fantasy', value: 'fantasy', icon: 'sparkles' },
      { label: 'None', value: 'none', icon: 'x' },
    ],
  },
  {
    id: 'length_1',
    text: 'Can you handle 3+ hour movies?',
    options: [
      { label: 'Love long epics', value: 'yes', icon: 'film' },
      { label: 'If its good', value: 'good', icon: 'star' },
      { label: 'Prefer under 2 hours', value: 'no', icon: 'clock' },
      { label: 'Need intermission', value: 'break', icon: 'coffee' },
    ],
  },
  {
    id: 'length_2',
    text: 'Do you prefer director\'s cuts?',
    options: [
      { label: 'Always', value: 'always', icon: 'award' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Prefer theatrical', value: 'theatrical', icon: 'film' },
      { label: 'What\'s the difference?', value: 'dontknow', icon: 'help-circle' },
    ],
  },
  {
    id: 'director_1',
    text: 'Do you follow specific directors?',
    options: [
      { label: 'Yes, have favorites', value: 'yes', icon: 'award' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Dont notice', value: 'no', icon: 'x' },
      { label: 'Only a few', value: 'few', icon: 'user' },
    ],
  },
  {
    id: 'director_2',
    text: 'Nolan, Tarantino, or Spielberg?',
    options: [
      { label: 'Nolan (Complex)', value: 'nolan', icon: 'brain' },
      { label: 'Tarantino (Stylish)', value: 'tarantino', icon: 'camera' },
      { label: 'Spielberg (Classic)', value: 'spielberg', icon: 'award' },
      { label: 'All are great', value: 'all', icon: 'star' },
      { label: 'Someone else', value: 'other', icon: 'user' },
    ],
  },
  {
    id: 'actor_1',
    text: 'Do you follow specific actors?',
    options: [
      { label: 'Yes, have favorites', value: 'yes', icon: 'user' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Not really', value: 'no', icon: 'x' },
      { label: 'Character over actor', value: 'character', icon: 'users' },
    ],
  },
  {
    id: 'actor_2',
    text: 'Method acting or natural?',
    options: [
      { label: 'Method acting', value: 'method', icon: 'brain' },
      { label: 'Natural style', value: 'natural', icon: 'smile' },
      { label: 'Both work', value: 'both', icon: 'shuffle' },
      { label: 'Dont care', value: 'dontcare', icon: 'x' },
    ],
  },
  {
    id: 'cinematography_1',
    text: 'Do you notice cinematography?',
    options: [
      { label: 'Yes, love good shots', value: 'yes', icon: 'camera' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Not really', value: 'no', icon: 'x' },
      { label: 'Essential for me', value: 'essential', icon: 'award' },
    ],
  },
  {
    id: 'cinematography_2',
    text: 'Long takes or quick cuts?',
    options: [
      { label: 'Long takes (artistic)', value: 'long', icon: 'camera' },
      { label: 'Quick cuts (energetic)', value: 'quick', icon: 'zap' },
      { label: 'Both work', value: 'both', icon: 'shuffle' },
      { label: 'Dont notice', value: 'dontcare', icon: 'x' },
    ],
  },
  {
    id: 'prequel_1',
    text: 'Prequels, sequels, or originals?',
    options: [
      { label: 'Originals only', value: 'original', icon: 'sparkles' },
      { label: 'Sequels', value: 'sequel', icon: 'trending-up' },
      { label: 'Prequels', value: 'prequel', icon: 'clock-rewind' },
      { label: 'All of them', value: 'all', icon: 'shuffle' },
    ],
  },
  {
    id: 'prequel_2',
    text: 'Do you watch prequels before originals?',
    options: [
      { label: 'Release order', value: 'release', icon: 'clock' },
      { label: 'Chronological order', value: 'chrono', icon: 'trending-up' },
      { label: 'Doesnt matter', value: 'any', icon: 'shuffle' },
    ],
  },
  {
    id: 'spinoff_1',
    text: 'Do you enjoy spin-offs?',
    options: [
      { label: 'Love them', value: 'love', icon: 'heart' },
      { label: 'If done well', value: 'good', icon: 'star' },
      { label: 'Usually disappointed', value: 'bad', icon: 'x' },
      { label: 'Prefer main story', value: 'main', icon: 'film' },
    ],
  },
  {
    id: 'spinoff_2',
    text: 'Villain origin story or hero journey?',
    options: [
      { label: 'Villain origin', value: 'villain', icon: 'skull' },
      { label: 'Hero journey', value: 'hero', icon: 'shield' },
      { label: 'Side character', value: 'side', icon: 'user' },
      { label: 'Both', value: 'both', icon: 'shuffle' },
    ],
  },
  {
    id: 'finale_1',
    text: 'How important is the ending?',
    options: [
      { label: 'Make or break', value: 'very', icon: 'target' },
      { label: 'Very important', value: 'important', icon: 'star' },
      { label: 'Journey matters more', value: 'journey', icon: 'compass' },
      { label: 'Can forgive bad ending', value: 'forgive', icon: 'heart' },
    ],
  },
  {
    id: 'finale_2',
    text: 'Satisfying ending or realistic?',
    options: [
      { label: 'Satisfying', value: 'satisfying', icon: 'check-circle' },
      { label: 'Realistic', value: 'realistic', icon: 'eye' },
      { label: 'Bittersweet', value: 'bittersweet', icon: 'cloud-rain' },
      { label: 'Happy only', value: 'happy', icon: 'sun' },
    ],
  },
  {
    id: 'bonus_1',
    text: 'Do you watch behind-the-scenes content?',
    options: [
      { label: 'Love BTS', value: 'yes', icon: 'camera' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Never', value: 'no', icon: 'x' },
      { label: 'Only for favorites', value: 'fav', icon: 'heart' },
    ],
  },
  {
    id: 'bonus_2',
    text: 'Commentary tracks?',
    options: [
      { label: 'Love them', value: 'love', icon: 'message-circle' },
      { label: 'Sometimes', value: 'sometimes', icon: 'clock' },
      { label: 'Never listen', value: 'never', icon: 'x' },
      { label: 'Only for classics', value: 'classic', icon: 'award' },
    ],
  },
  {
    id: 'bonus_3',
    text: 'Do you collect physical media?',
    options: [
      { label: 'Yes, collector', value: 'yes', icon: 'package' },
      { label: 'A few favorites', value: 'some', icon: 'star' },
      { label: 'Digital only', value: 'digital', icon: 'cloud' },
      { label: 'Streaming only', value: 'stream', icon: 'tv' },
    ],
  },
];

// Shuffle array helper
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random questions (max 25, never repeat in a session)
export function getRandomQuestions(previousIds: string[] = [], maxQuestions: number = 25): Question[] {
  // Filter out already used questions
  const available = allQuestions.filter(q => !previousIds.includes(q.id));
  
  // Shuffle and take up to maxQuestions
  const shuffled = shuffleArray(available);
  
  // Always include media_type as first question
  const mediaTypeQuestion = allQuestions.find(q => q.id === 'media_type');
  const otherQuestions = shuffled.filter(q => q.id !== 'media_type');
  
  const result = mediaTypeQuestion ? [mediaTypeQuestion, ...otherQuestions] : otherQuestions;
  
  return result.slice(0, maxQuestions);
}