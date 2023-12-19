import { Injectable } from '@angular/core';
import axios from 'axios';
import { Data } from 'src/app/model/data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  

  constructor() {}

  get(): Promise<Data[]> {
    return axios.get<Data[]>(`${this.apiUrl}/get`).then(response => response.data);
  }

  post(data: Data): Promise<Data> {
    return axios.post<Data>(`${this.apiUrl}/post`, data).then(response => response.data);
  }

  put(data: Data): Promise<Data> {
    return axios.put<Data>(`${this.apiUrl}/update/${data.id}`, data).then(response => response.data);
  }

  delete(id: number) {
    return axios.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateQuantity(id: number, quantity: number, stock: number) {
    return axios.put(`${this.apiUrl}/update/${id}`, {quantity, stock});
  }
}