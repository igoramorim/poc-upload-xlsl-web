import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    let headers = new HttpHeaders();

    return this.http.post<any>(`${environment.RESOURCE_URL}/api/upload/`, formData, { headers: headers });
  }

}
