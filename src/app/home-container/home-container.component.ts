import { Component, OnInit } from '@angular/core';
import { STUDENT } from '../modals/models/mock-user';
import { IUser } from '../modals/models/user';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  students = STUDENT;
  showCreateModal:boolean = false;
  showStudentModal:boolean = false;
  showProfileModal:boolean = false;
  closeModal: boolean = false;

  selectedStudent?: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  add(student: IUser){
    this.students.push({...student,
    id: this.students.length
    })
  }

  showDetials(student: IUser){
    this.selectedStudent = student
  }
}
