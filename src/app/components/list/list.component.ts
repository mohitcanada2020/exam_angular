import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {

  moviesList!:Array<Movies>;
  constructor(private apiService:ApiService,private router: Router) {}

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList() {
    this.apiService.getMovies().subscribe((response:Movies[])=>{
      this.moviesList = response;
      console.log('val-----',response)
    })
  
  }

  goToDetails(id: String){
    console.log("id is----->",id);
    this.router.navigateByUrl(`/details/${id}`);
  }
}
