import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
   
   employee1:Employee={id:1,Name:'shyam agrahari',gradeId:132,gradeName:'1A*'};
  constructor() { }

  ngOnInit(){
  
  }

}
