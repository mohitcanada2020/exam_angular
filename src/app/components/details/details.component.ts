import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails, Movies } from '../../models/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  movieId!: String;
  movieDetails! : MovieDetails;
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe((res : any) => {
          this.movieId = res.id;
        })
  }

  ngOnInit(): void {
    this.apiService.getMovieDetails(this.movieId).subscribe((response: MovieDetails) => {
      console.log("response is---->",response);
      this.movieDetails = response;
    });
  }
}
