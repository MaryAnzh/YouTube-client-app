

export interface IVideoYouTubeResults {
  etag: string,
  items: IVideoItem[],
  kind: string,
  pageInfo: {
    resultsPerPage: number,
    totalResults: number,
  }
}
