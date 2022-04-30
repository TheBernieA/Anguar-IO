import { Component, OnInit } from '@angular/core';
import { STUDENT } from '../models/mock-user';
import { IUser } from '../models/user';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  students = STUDENT;
  showModal: boolean = false;


  selectedStudent!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  add(student: IUser) {
    this.students.push({
      ...student,
      id: this.students.length
    })
  }

  showDetials(student: IUser) {
    this.selectedStudent = student
  }

  delete(student: IUser) {
    const index = this.students.indexOf(student)
    this.students.splice(index, 1)
  }

}
