import { Component, OnInit } from '@angular/core';
import {Users} from '../list-of-users/list-of-users.interface';
import {RegistrationService} from '../../services/Registration/registration.service';
import {User} from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User=new User("","","",null);
  users: Users[];
  message:any;

  constructor(private service:RegistrationService) { }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }

  ngOnInit() {
  }

}
