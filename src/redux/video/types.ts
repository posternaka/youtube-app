export type Video = {
    id: string;
    title: string; 
    suptitle: number[]; 
    imageUrl: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface IVideoSlice {
    items: Video[];
    status: Status ;
}