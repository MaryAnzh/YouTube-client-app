import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from '../../core/services/data/data.service';

@Injectable()

export class videoItemsEffects {

  getVideoId$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Search Component], Search Video'),
      mergeMap(() => this.dataService.items$
        .pipe(
          map(movies => ({ type: '[DataService], Search Video By Id', payload: movies })),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) { }

}
