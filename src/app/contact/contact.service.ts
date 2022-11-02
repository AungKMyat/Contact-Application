import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IContact } from "./contact";

@Injectable({
    providedIn: 'root'
})

export class ContactService{
    private contactURL = 'https://jsonplaceholder.typicode.com/users';
    
    constructor (private http: HttpClient){ }

    getContacts(): Observable<IContact[]> {
        return this.http.get<IContact[]>(this.contactURL)
            .pipe(
                tap(data => console.log('All: ', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    getContact(id:number): Observable<IContact | undefined> {
        return this.getContacts()
            .pipe(
                map((contacts:IContact[]) => contacts.find(c => c.id === id))
            );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }

}

