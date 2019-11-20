import { Component, OnInit } from '@angular/core';
import {User } from '../password';

  @Component({
  moduleId: module.id,
  selector: 'app-confrmpass',
  templateUrl: './confrmpass.component.html',
  styleUrls: ['./confrmpass.component.css'],
   })

  export class confrmPassword implements OnInit {
    public user: User;
  
    ngOnInit() {
      this.user = {
        password: '',
        confirmPassword: ''
      }
    }
  
    save(model: User, isValid: boolean) {
      // call API to save customer
      console.log(model, isValid);
    }
  }
  