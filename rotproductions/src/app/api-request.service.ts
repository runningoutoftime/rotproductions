import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private httpClient: HttpClient) {

  }

  get(url: string, args: any) {
    let obs = this.httpClient.get(url, args);
    obs.subscribe((payload) => {
      console.log('Got Results', payload);
    })
  }

  getQuiz(movieID) {
    this.get(`/movies/{movieID}/quiz`, {});
  }

  getTest() {
    // This is an async operation, so it needs to be assigned to an observable
    // Observable takes a function that gets excecuted when async operation is done = subscribe
    this.get("https://api.github.com/users/runningoutoftime", {});
  }
}
