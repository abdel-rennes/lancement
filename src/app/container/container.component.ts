import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  public avisUserForm:FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {


    this.avisUserForm = this.formBuilder.group({
      utilisateur:[' nom utilisateur',Validators.required],
      nomApplication:[" Application",Validators.required],
      description:[' Descption',Validators.required]
    });


  }


  creerAvis(){
    
  }

}
