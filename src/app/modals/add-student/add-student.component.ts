import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/user';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

@Output() hideModal = new EventEmitter<void>()
@Output() submitted = new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {
  }

addStudent(form: NgForm){
  this.submitted.emit({...form.value})
}

}
