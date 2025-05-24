import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, Observable } from "rxjs";
import { Scarpa } from "../interfaces/scarpa.interface";
import { Category } from "../interfaces/category.enums";
import { Sport } from "../interfaces/sport.enums";


@Injectable({
  providedIn: 'root'
})
export class ScarpaService {

  private JsonUrl = "http://localhost:3000/";



  constructor(private http: HttpClient) { }

  getScarpe(category?: Category, filters?: { color: string, sport: Sport | undefined }): Observable<Scarpa[]> {
    let params = new HttpParams()

    if (category) {
      params = params.set('category', category);
    }
    if (filters?.color) {
      params = params.set("color", filters.color)
    }
    if(filters?.sport){
      params = params.set("sport", filters.sport)
    }

    return this.http.get<Scarpa[]>(this.JsonUrl + "products", { params })




  }

  getProduct(id: string): Observable<Scarpa> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Scarpa[]>(this.JsonUrl + "product", { params }
    ).pipe(map((res: Scarpa[]) => res[0]))  // prendo il primo elemento
  }



}
