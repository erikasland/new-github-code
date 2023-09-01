import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ColorsService {
  constructor(private http: HttpClient) {

  }

  getColors(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
  }

  postColors(colors: object):Observable<any> {
    return this.http.post("http://localhost:3000/posts", colors, httpOptions);
  }

  deleteColor() {

  }

  updateColor() {

  }
}
