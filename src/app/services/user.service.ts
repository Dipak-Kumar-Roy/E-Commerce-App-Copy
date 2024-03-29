import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../data-types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
inavalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(user:signUp){
   this.http.post(`http://localhost:3000/users`, user , {observe:'response'}).subscribe((result)=>{
    console.log(result)
    if(result){
      localStorage.setItem('user', JSON.stringify(result.body))
      this.router.navigate(['/'])
    }
   })
  }
  userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        this.inavalidUserAuth.emit(false)
      localStorage.setItem('user', JSON.stringify(result.body[0]))
      this.router.navigate(['/'])
    }else{
      this.inavalidUserAuth.emit(true)
    }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
}
