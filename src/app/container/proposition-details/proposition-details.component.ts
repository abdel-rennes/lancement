import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.component.html',
  styleUrls: ['./proposition-details.component.css']
})
export class PropositionDetailsComponent implements OnInit {

  public listeAvisUser:string[] = ["test","test","test"];
  
  constructor() { }

  ngOnInit() {
  }

}
