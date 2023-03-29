import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Cashier } from 'src/app/pojos/Cashier';
import { Inventory } from 'src/app/pojos/Inventory';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  
  form !: FormGroup;
  title !: string;

  name !: string;
  age !: number;
  email !: string;
  phoneNumber !: number;
  workTimings !: Date;
  salary!: number;
  designation!:string;
  

  constructor(
    private fb : FormBuilder,private restService:RestService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', []],
      name : ['', [Validators.required]],
      age : ['', [Validators.required]],
      email : ['' , [Validators.required]],
      phoneNumber : ['',[Validators.required] ],
      workTimings : ['',[Validators.required] ],
      salary : ['', [Validators.required]],
      designation : ['', [Validators.required]]
    })
  }
  id:string='';
 
  cancelEmployee(){

  }

  addEmployee(){
    let employee:Cashier=new Cashier(this.id,this.name,this.age,this.email,this.phoneNumber,this.workTimings,this.salary,this.designation);
    this.restService.addEmployee(employee).subscribe()
    
  }

}
