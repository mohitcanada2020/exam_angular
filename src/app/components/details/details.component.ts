import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDetails } from '../../models/movies';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DurationPipe } from '../../Pipes/duration.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DurationPipe, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  movieDetails$!: Observable<MovieDetails>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const movieId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');
    this.movieDetails$ = this.apiService.getMovieDetails(
      movieId ? movieId : ''
    );
  }
}
