import { Action } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/model/custom-card model';

export enum ECustomCardActions {
  CreateCustomCards = '[Admin Component], Create Custom Card',
}

export class CreateCustomCards implements Action {
  public readonly type = ECustomCardActions.CreateCustomCards;
  constructor(public CustomCard: ICustomCard[]) { }
}
