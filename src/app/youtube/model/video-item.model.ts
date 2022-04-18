export interface IVideoItem {
  etag: string,
  id: string,
  kind: string,
  snippet: ISnippet,
  statistics: IStatistics
}

interface ISnippet {
  categoryId: number,
  channelId: string,
  channelTitle: string,
  defaultAudioLanguage: string,
  defaultLanguage: string,
  description: string,
  liveBroadcastContent: string,
  localized: {
    description: string,
    title: string,
  },
  publishedAt: Date,
  tags: string[],
  thumbnails: IThumbnails,
  title: string,
}

interface IThumbnails {
  default: IThumbnailsSettings,
  high: IThumbnailsSettings,
  maxres: IThumbnailsSettings,
  medium: IThumbnailsSettings,
  standard: IThumbnailsSettings,
}

interface IThumbnailsSettings {
  height: number,
  url: string,
  width: number,
}

interface IStatistics {
  favoriteCount: number,
  likeCount: number,
  viewCount: number,
}
