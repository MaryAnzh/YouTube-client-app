export interface IVideoItem {
  etag: string,
  id: string,
  kind: string,
  snippet: ISnippet,
  statistics: IStatistics
}

interface ISnippet {
  categoryId: string,
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
  publishedAt: string,
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
  commentCount: string,
  favoriteCount: string,
  likeCount: string,
  viewCount: string,
}


export interface IVideoItemUnCorrect {
  etag: string,
  id: string,
  kind: string,
  snippet: ISnippetUnCorrect,
  statistics: IStatisticsUnCorrect
}

interface ISnippetUnCorrect {
  categoryId: string,
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
  publishedAt: string,
  tags: string[],
  thumbnails: IThumbnails,
  title: string,
}

interface IStatisticsUnCorrect {
  commentCount: string,
  favoriteCount: string,
  likeCount: string,
  viewCount: string,
}
