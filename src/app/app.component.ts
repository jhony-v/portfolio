import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserProfileService } from './services/user-profile.service';

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

  constructor(private userGithub : UserProfileService) {}

  ngOnInit() {
      this.userGithub.getUserGithub().subscribe((e) => {
        this.profileImage = e.avatar_url;
      });
  }

}
