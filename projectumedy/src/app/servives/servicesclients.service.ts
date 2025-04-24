import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user.model';
import { catchError, Observable } from 'rxjs';
import { Categorie } from '../modules/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesclientsService {
  private apiURL = 'http://localhost:8081/api/user';
  private apiURL1 = 'http://localhost:8081/cat';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http:HttpClient) { }
  user! : User;
  addclient(clt : User) : Observable<User>
  {
    return this.http.post<User>(this.apiURL,clt,this.httpOptions);
  }
  addCat(cat: Categorie) {
    return this.http.post<Categorie>(this.apiURL1, cat, this.httpOptions).pipe(
      catchError((error) => {
        console.error('Error adding category:', error);
        throw error;
      })
    );
  }
}
