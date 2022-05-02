import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

@Output() closeProfileModal = new EventEmitter<void>()
@Input() student!: IUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
