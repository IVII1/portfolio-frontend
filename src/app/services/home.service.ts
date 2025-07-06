import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  sendMessage(data: any) {
    const url = `${environment.apiUrl}/api/messages`;
    return this.http.post<Message>(url, data);
  }
}
