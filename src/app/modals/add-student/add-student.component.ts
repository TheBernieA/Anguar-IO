import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Output() submitted = new EventEmitter<IUser>()
  @Output() closeStudentModal = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }
  //Get input and add to our object
  addStudent(form: NgForm) {
    this.submitted.emit({ ...form.value })
  }
}
