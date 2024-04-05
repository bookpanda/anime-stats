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
    };
    startedAt: {
        year: number;
        month: number;
        day: number;
    };
    completedAt: {
        year: number;
        month: number;
        day: number;
    };
    score: number;
}
