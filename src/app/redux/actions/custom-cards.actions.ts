import { Action } from '@ngrx/store';
import { type } from 'os';
import { ICustomCard } from 'src/app/youtube/model/custom-card model';

export enum ECustomCardActions {
  CreateCustomCards = '[Admin Component], Create Custom Card',
}

export class CreateCustomCards implements Action {
  public readonly type = ECustomCardActions.CreateCustomCards;
  constructor(public CustomCard: ICustomCard[]) { }
}

export type CustomCardActions = CreateCustomCards;
