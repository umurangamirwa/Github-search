import { Component, OnInit } from '@angular/core';
import {ServiceService}from "../services/service.service"
import {User} from '../user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ServiceService]
})
export class ProfileComponent implements OnInit {
user: User;

  constructor(private profileService: ServiceService, public repoService: ServiceService) { 
  this.user = this.profileService.user;}
  ngOnInit() {
    this.user = this.profileService.user;
    console.log(this.user)
  }

}
