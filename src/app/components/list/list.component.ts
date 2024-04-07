import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';
import { DurationPipe } from '../../Pipes/duration.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DurationPipe, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  moviesList: Movies[] = [];
  filteredMovies: any[] = [];
  searchTerm: string = '';
  searchYear: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.apiService.getMovies().subscribe((response: Movies[]) => {
      this.moviesList = response;
      this.filteredMovies = this.moviesList;
    });
  }

  goToDetails(id: String): void {
    this.router.navigateByUrl(`/details/${id}`);
  }

  filterMovies(): void {
    this.filteredMovies = this.moviesList.filter((movie) => {
      const titleMatch: boolean =
        !this.searchTerm ||
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const yearMatch: boolean =
        !this.searchYear || movie.release_date.includes(this.searchYear);
      return titleMatch && yearMatch;
    });
  }
}
