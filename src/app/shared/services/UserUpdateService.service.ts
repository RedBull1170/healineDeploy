import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
  private userInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  updateUserInfo(userInfo: any) {
    this.userInfoSubject.next(userInfo);
  }

  getUserInfo(): Observable<any> {
    return this.userInfoSubject.asObservable();
  }
}
