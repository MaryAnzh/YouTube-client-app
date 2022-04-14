import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})

export class GuardsService {

  constructor(private storageService: StorageService) { }


}
