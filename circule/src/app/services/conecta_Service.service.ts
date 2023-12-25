import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Conecta_ServiceService {
public variablesService:boolean= false;
constructor(private http: HttpClient) { }


 apiUrl = 'https://jsonplaceholder.typicode.com/users/';

  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

/*   fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */
}

