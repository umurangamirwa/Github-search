import { Component, OnInit } from '@angular/core';
import{ ServiceService } from '../services/service.service';
import { User } from '../user';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  name ={
    name:""
  }
  user = new User (' ',' ',' ',' ',' ',0,' ',0,0,new Date);
  submitSearch(name) {
    this.profileService.getProfileInfo(this.name.name);
    this.repoService.getRepoInfo(this.name.name);
    // console.log(this.name.name)
  }

  constructor(private profileService: ServiceService, private repoService: ServiceService) { }

  ngOnInit() {
  }

}
