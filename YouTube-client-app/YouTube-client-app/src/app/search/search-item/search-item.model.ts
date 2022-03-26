export interface IThumbnail {
  "url": string,
  "width": number,
  "height": number
}

export interface IThumbnails {
  "default": IThumbnail,
  "medium": IThumbnail,
  "high": IThumbnail,
  "standard": IThumbnail,
  "maxres": IThumbnail
}

export interface ISnippet {
  "publishedAt": string,
  "channelId": string,
  "title": string,
  "description": string,
  "thumbnails": IThumbnails,
  "channelTitle": string,
  "tags": string[],
  "categoryId": string,
  "liveBroadcastContent": string,
  "localized": {
    "title": string,
    "description": string
  },
  "defaultAudioLanguage": string
}

export interface IStatistics {
    "viewCount": string,
    "likeCount": string,
  "dislikeCount": string,
  "favoriteCount": string,
  "commentCount": string
}

export interface ISearchItem {
  "kind": string
  "etag": string,
  "id": string,
  "snippet": ISnippet,
  "statistics": IStatistics
}
