import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';
import { DurationPipe } from '../../Pipes/duration.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  moviesList!: Array<Movies>;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.apiService.getMovies().subscribe((response: Movies[]) => {
      this.moviesList = response;
    });
  }

  goToDetails(id: String): void {
    this.router.navigateByUrl(`/details/${id}`);
  }
}
