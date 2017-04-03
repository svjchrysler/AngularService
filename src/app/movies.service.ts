import { Injectable } from '@angular/core';
import { Movie } from './movies/movie';

@Injectable()
export class MoviesService {

  movies : Movie[];

  constructor() { 
    this.movies = [
      {title: "Transforme 1", id:"1"},
      {title: "Transforme 2", id:"2"},
      {title: "Transforme 3", id:"3"}
    ];
  }

}
