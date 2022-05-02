import { Component,Input,OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

@Input() students: IUser[] = []

showProfileModal: boolean = false;
selectedStudent!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  selectedUser(student: IUser){
    this.selectedStudent = student
  }
  delete(id: IUser){
    this.students=this.students.filter(student => student != id)
  }

}
