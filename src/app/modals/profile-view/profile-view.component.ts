import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STUDENT } from '../models/mock-user';
import { IUser } from '../models/user';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>()
  @Input() student!: IUser

  constructor() { }

  ngOnInit(): void {
  }

}
