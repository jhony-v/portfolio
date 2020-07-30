import { Injectable } from '@angular/core';
import contact from '../json/contact.json';

export interface LinkContact {
  link : string;
  name : string;
  image : string;
  icon : string;
  background : string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactLinkService {

  constructor() { }
  getAllLinkcontacts() : LinkContact[] {
    return <LinkContact[]>contact;
  }
}
