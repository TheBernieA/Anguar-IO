import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { STUDENT } from 'src/app/modals/models/mock-user';
import { IUser } from 'src/app/modals/models/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  students = STUDENT;
  @Output() showProfileModal = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  add(student: IUser){
    this.students.push({...student})
  }

  delete(student: any){
    const index = this.students.indexOf(student)
    this.students.splice(index, 1)
  }
}
