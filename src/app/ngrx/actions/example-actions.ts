import { createAction, props } from "@ngrx/store";

export namespace ExampleActions {

  export const videoItemsAction = createAction(
    'Video Items',
    props<{ search: string }>()
  );

  const customCardsAction = createAction(
    'Custom Cards'
  )
}
