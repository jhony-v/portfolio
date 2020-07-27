import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface ProjectRepository {
  html_url : string;
  name : string;
  description: string;
  created_at : string;
  language : string;
}


@Component({
  selector: 'app-projects-module',
  templateUrl: './projects-module.component.html',
  styleUrls: ['./projects-module.component.styl']
})
export class ProjectsModuleComponent implements OnInit {

  projects : ProjectRepository[] = [];
  loading : boolean = false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.loading = true;
    this.http.get("https://api.github.com/users/jhony-24/repos").subscribe((e : ProjectRepository[]) => {
      this.loading = false;
      this.projects = e;
    });
  }

}
