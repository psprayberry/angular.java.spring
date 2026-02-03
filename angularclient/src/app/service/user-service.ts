import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService {

  constructor() { }

  public findAll(): Observable<User[]> {
    return 'UserService.findAll() is not available yet';
  }
}
