import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base {
    private url="https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/profiles.json"
    private http = inject(HttpClient)

    getAll(){
      return this.http.get(this.url)
    }
}
