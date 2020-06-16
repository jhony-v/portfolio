import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactLinkService, LinkContact } from 'src/app/services/contact-link.service';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.styl']
})
export class HomeModuleComponent implements OnInit {


  private allLinksContact : LinkContact[];

  constructor( private router : Router,private contacts : ContactLinkService) { 
  }

  ngOnInit(): void {
    this.allLinksContact = this.contacts.getAllLinkcontacts();
  }

  navigateNext() {
    this.router.navigate(['/history']);
  }

}
