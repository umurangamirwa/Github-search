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

  constructor() { }

  ngOnInit() {
  }

}