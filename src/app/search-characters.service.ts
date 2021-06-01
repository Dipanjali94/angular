import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCharactersService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://gateway.marvel.com/v1/public';

  getSearchedCharacters(searchTerm: string): Observable<any> {
     const queryparams = new HttpParams()
     .append('nameStartsWith', searchTerm)
     .append('apikey', '6871af630ca51742153d2db8dbf10dcb')
     .append('hash', '609bb5211dbf0e54c53e927bb92f5ee7')
     .append('ts', '1');

      return this.http.get(`${this.baseUrl}/characters`, {observe: 'body', params: queryparams});
  }
}
