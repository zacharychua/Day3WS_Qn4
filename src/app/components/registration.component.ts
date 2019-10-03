import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {registration} from '../models'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  guest_num;

  constructor() { }

  ngOnInit() {
    this.guest_num = 1;
  }

  processForm(form_value: any){
    let events = [];
    let form_value_keys = Object.keys(form_value);
    console.info(form_value_keys);
    for(let key of form_value_keys){
      if(key.includes("event")) 
        if(form_value[key]) {events.push({key:form_value[key]});
    }
    console.info(new Date(form_value.attending_date));
    //explicit assignment allows more flexibility when processing values from form
    let reg:registration =  {
      "attending_date": (new Date(form_value.attending_date)).getDate(),
      "first_name": form_value.first_name,
      "last_name": form_value.last_name,
      "guest_first_name": form_value.guest_first_name,
      "guest_last_name": form_value.guest_last_name,
      "phone_num": parseInt(form_value.phone_num) || 0,
      "email": form_value.email,
      "event": events,
      "req_dvd": Boolean(form_value.req_dvd),
      "comment": form_value.comment
    }
    //if no manipulation of the data is required, we can just cast to the object as such let reg:registration = <registration>form_value
    
    console.info(reg);
    //console.info(form_value instanceof registration);
  }

  addGuests(guest_num){
    this.guest_num = guest_num;
  }

}
