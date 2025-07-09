import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CiteService {
  private citeApi = environment.backendUrl + "api/cites/";

  constructor(private http: HttpClient) { }

  // Vérifie si un bailleur a déjà au moins une cité
  checkIfBailleurHasCity(id_bailleur: string): Observable<any>{
    return this.http.get(`${this.citeApi}bailleur/${id_bailleur}`);
  }
}
