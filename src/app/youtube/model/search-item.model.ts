export interface Default {
  height: number;
  url: string;
  width: number;
}

export interface ISearchVideoItem {
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  kind: string,
  snippet: {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishTime: Date,
    publishedAt: Date,
    thumbnails: VideoThumbnails,
    title: string,
  },
}

export interface VideoThumbnails {
  default: Default;
  medium: Default;
  high: Default;
}
