import { createAction, props } from "@ngrx/store";
import { ICustomCard } from "src/app/youtube/model/custom-card.model";
import { IVideoItem } from "src/app/youtube/model/video-item.model";

export namespace ExampleActions {

  export const addYoutubeAction = createAction(
    'Video Items',
    props<{ items: (IVideoItem | ICustomCard)[] }>()
  );

}
