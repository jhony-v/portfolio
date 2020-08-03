import { Injectable } from '@angular/core';
import contact from '../json/contact.json';
import { LinkContact } from '../@types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactLinkService {
  constructor() {}
  getAllLinkcontacts(): LinkContact[] {
    return <LinkContact[]>contact;
  }
}
