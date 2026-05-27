import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _keresendo=signal("")
  keresendo = this._keresendo.asReadonly()

  setKeresendo(adat:string){
    this._keresendo.set(adat)
  }
}
