import { createAction, props } from "@ngrx/store";
import { ICustomCard } from "src/app/youtube/model/custom-card.model";
import { IVideoItem } from "src/app/youtube/model/video-item.model";

export namespace ExampleActions {

  export const videoItemsAction = createAction(
    'Video Items',
    props<{ videoItems: IVideoItem[] }>()
  );

  const customCardsAction = createAction(
    'Custom Cards',
    props<{ customCard: ICustomCard[] }>()
  )
}
