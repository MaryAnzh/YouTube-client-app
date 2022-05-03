import { createAction, props } from "@ngrx/store";
import { ICustomCard } from "src/app/youtube/model/custom-card.model";
import { IVideoItem } from "src/app/youtube/model/video-item.model";

export namespace ExampleActions {

  export const addCustomCardsAction = createAction(
    'Custom Card',
    props<{ customCards: IVideoItem[] }>()
  );

  export const addVideoItemsAction = createAction(
    'Video Items',
    props<{ videoItems: IVideoItem[] }>()
  );
}
