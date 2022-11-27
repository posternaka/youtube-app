export type YouTubeVideo = {
    "snippet": Snippet,
    "kind": string,
    "etag": string,
}

export type Snippet = {
    "title": string,
    "description": string,
    "thumbnails": {
        "medium" : {
            "url": string
        }
    }
}

export type YouTubeResult = {
    "kind": string,
    "etag": string,
    "nextPageToken": string,
    "regionCode": string,
    "pageInfo": any,
    "items": YouTubeVideo[],
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type Request = {
    id: string,
    q: string,
    maxResult: number,
    sort: string,
}

export interface IVideoSlice {
    items: YouTubeVideo[];
    request: Request,
    favoriteRequest: Request[],
    status: Status ;
}