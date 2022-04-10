import { Injectable } from '@angular/core';
import { POST } from '../POST';
import { Posts } from '../Posts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getinfo(): Posts[] {
    return POST;
  }
}
