import { Component, OnInit } from '@angular/core';
import { ProjectRepository } from 'src/app/@types/interfaces';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-projects-module',
  templateUrl: './projects-module.component.html',
  styleUrls: ['./projects-module.component.styl'],
})
export class ProjectsModuleComponent implements OnInit {
  projects: ProjectRepository[] = [];
  loading: boolean = false;
  constructor(private userGithub: UserProfileService) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories() {
    this.loading = true;
    this.userGithub.getUserRepositories().subscribe(repositores => {
      this.loading = false;
      this.projects = repositores;
    });
  }

  searchRepositories(value: string) {
    this.userGithub.getUserRepositories().subscribe( repositories => {
      this.projects = repositories.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()));
    });
  }

  onCancel() {
    this.getRepositories();
  }
}
