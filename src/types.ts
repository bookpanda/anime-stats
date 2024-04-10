interface Entry {
  id: number;
  status: string;
  progress: number;
  media: {
    title: {
      english: string;
      userPreferred: string;
    };
    coverImage: {
      color: string;
      large: string;
    };
    episodes: number;
    siteUrl: string;
  };
  startedAt: {
    date: Date;
    year: number;
    month: number;
    day: number;
  };
  completedAt: {
    date: Date;
    year: number;
    month: number;
    day: number;
  };
  score: number;
}
