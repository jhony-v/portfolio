import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface ImageFromRepository {
  avatar_url : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  encapsulation : ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'portfolio-jhony';
  profileImage : string = '';

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.http.get("https://api.github.com/users/jhony-24").subscribe(( e : ImageFromRepository ) => {
      this.profileImage = e.avatar_url;
  });
  }

}
