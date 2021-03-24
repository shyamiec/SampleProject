import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent{
   
   employee1 = new Employee(1,'',132,'1A');
   public submitted = false;

  onSubmit()
  {
   if(this.submitted==false)
    this.submitted = true;
  }
}
