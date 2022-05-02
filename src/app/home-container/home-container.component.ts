import { Component, OnInit } from '@angular/core';
import { STUDENT } from '../models/mock-user';
import { IUser } from '../models/user';




@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  students = STUDENT
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
add(student: IUser){
this.students.push({
  ...student,
  id: this.students.length
})
}
}
