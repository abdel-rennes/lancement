import { Component, OnInit } from '@angular/core';
import {AvisUser} from '../../shared/model/avis.model'
import {AvisUserService} from '../../shared/services/avis-user.service'


@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.component.html',
  styleUrls: ['./proposition-details.component.css']
})
export class PropositionDetailsComponent implements OnInit {

  public listeAvisUser:AvisUser[] = [new AvisUser("abdel","test","description")];
  
  constructor(public avisUserService:AvisUserService) { }

  ngOnInit() {
    this.avisUserService.avisUser.subscribe((avisUser:AvisUser[]) => {
      this.listeAvisUser = avisUser;
    }); 
  }

}
