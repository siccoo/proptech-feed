export interface User {
    name: string;
    avatar: string;
    role?: 'Individual' | 'Agent' | 'Developer' | 'Owner' | 'Broker';
    isVerified?: boolean;
}

export interface Post {
    id: string;
    user: User;
    timestamp: string;
    type: 'General' | 'Property';
    content: string;
    location?: string;
    status?: 'For Sale' | 'For Rent';
    media?: {
        type: 'image' | 'video';
        url: string;
        duration?: string;
    }[];
    likes: number;
    commentsCount: number;
    isBookmarked?: boolean;
    likedBy: string[];
    topComment?: {
        user: string;
        text: string;
    };
}