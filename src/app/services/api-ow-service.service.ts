import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiOwServiceService {

  constructor(private http: HttpClient) { }

  getAllHeroes() {
    return this.http.get("https://fastapi-deploy-uonp.onrender.com/all-heroes");
  }
}
