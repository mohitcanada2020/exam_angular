import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetails, Movies } from '../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>('/movies');
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movies/${id}`);
  }
}
