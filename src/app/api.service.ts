import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url = 'https://jsonp.afeld.me/?url=https://api.myglamapp.pl/api/categories?language=EN';

  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get(this.url);
}
}
