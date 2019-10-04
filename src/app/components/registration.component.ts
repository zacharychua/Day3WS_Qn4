import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {registration} from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  guest_i: number;
  guest_num: number[];

  constructor() { }

  ngOnInit() {
    this.guest_i = 1;
    this.guest_num = [];
    this.guest_num.push(this.guest_i);
  }

  processForm(form: NgForm){
    let form_value: any = form.value;
    let events = [];
    let guest_first_names = [];
    let guest_last_names = [];
    let form_value_keys = Object.keys(form_value);
    console.info(form_value_keys);
    for(let key of form_value_keys){
      if(key.includes("event")) 
        if(form_value[key]) events.push({key:form_value[key]});
    }
    for(let key of form_value_keys){
      if(key.includes("guest_first")) 
        if(form_value[key]) guest_first_names.push({key:form_value[key]});
    }
    for(let key of form_value_keys){
      if(key.includes("guest_last")) 
        if(form_value[key]) guest_last_names.push({key:form_value[key]});
    }
    console.info(new Date(form_value.attending_date));
    //explicit assignment allows more flexibility when processing values from form
    let reg:registration =  {
      "attending_date": (new Date(form_value.attending_date.toString())).valueOf(),
      "first_name": form_value.first_name,
      "last_name": form_value.last_name,
      "guest_first_name": guest_first_names,
      "guest_last_name": guest_last_names,
      "phone_num": parseInt(form_value.phone_num) || 0,
      "email": form_value.email,
      "event": events,
      "req_dvd": Boolean(form_value.req_dvd),
      "secret": form_value.secret,
      "comment": form_value.comment
    }
    //if no manipulation of the data is required, we can just cast to the object as such let reg:registration = <registration>form_value
    form.resetForm();
    console.info(reg);
    //console.info(form_value instanceof registration);
  }

  addGuests(guest_num){
    this.guest_i += 1;
    this.guest_num.push(this.guest_i);
  }

  removeGuests(guest_num){
    this.guest_i -= 1;
    this.guest_num.splice(this.guest_num.indexOf(guest_num),1);
  }
  
}

