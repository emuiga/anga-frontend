import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import firebase from 'firebase/compat/app';
// import 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return new Promise((resolve, reject)=>{
  //     firebase.auth().onAuthStateChanged((user: firebase.User | null )=>{
  //       if(user){
  //         resolve(true);
  //       }else{
  //         resolve(false);
  //         this.router.navigate(["login"]);
  //       }
  //     })
  //   })
  // }
  
}