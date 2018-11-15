
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    aashirwad: { name: 'Aashirwad Sinha', picture: 'assets/images/nick.png' },
    shailesh: { name: 'Shailesh Pratapwar', picture: 'assets/images/eva.png' },
    ravi: { name: 'Ravi Arora', picture: 'assets/images/jack.png' }
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
