import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {AvisUser} from '../model/avis.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AvisUserService {


  public avisUser:BehaviorSubject<AvisUser[]> = new BehaviorSubject(null);


  constructor(private http:HttpClient) {
    this.initAvisUser();
   }


   initAvisUser(){
    this.http.get<AvisUser[]>("https://lancement-62fce.firebaseio.com/lancement.json").subscribe((avisUser:AvisUser[]) => {
      this.avisUser.next(avisUser);
    } );
   }

  addAvisUser(avisUser: AvisUser){
    const avisUsers = this.avisUser.value.slice();
    avisUsers.push(new AvisUser(avisUser.user,avisUser.nomAppl,avisUser.description));
    this.avisUser.next(avisUsers);
    this.save();

  }



  save(){
    this.http.put("https://lancement-62fce.firebaseio.com/lancement.json",this.avisUser.value).subscribe(res => console.log(res));
  }

}
