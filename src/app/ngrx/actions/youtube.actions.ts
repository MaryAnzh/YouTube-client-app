import { createAction, props } from "@ngrx/store";
import { ICustomCard } from "src/app/youtube/model/custom-card.model";
import { IVideoItem } from "src/app/youtube/model/video-item.model";

export namespace YoutubeActions {

  export const addCustomCardsAction = createAction(
    '[Youtube] Add Custom Card',
    props<{ customCards: ICustomCard[] }>()
  );

  export const addVideoItemsAction = createAction(
    '[Youtube] Set Video Items',
    props<{ videoItems: IVideoItem[] }>()
  );
}
