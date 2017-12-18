import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import {AvisUserService} from '../shared/services/avis-user.service'


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[AvisUserService]

})
export class ContainerComponent implements OnInit {


  public avisUserForm:FormGroup;


  constructor(private formBuilder:FormBuilder,public avisUserService:AvisUserService) { }

  ngOnInit() {

    this.avisUserForm = this.formBuilder.group({
      user:[' nom utilisateur',Validators.required],
      nomAppl:[" Application",Validators.required],
      description:[' Descption',Validators.required]
    });

  }


  creerAvis(){

    this.avisUserService.addAvisUser(this.avisUserForm.value);
    console.log(this.avisUserForm.value);

    this.avisUserForm.reset();
    
  }

}
