import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() students:IUser[]=[];
  @Output() displayStudent = new EventEmitter<IUser>()

  showProfileModal:boolean = false;
  selectedStudent!: IUser;
  searchText: string = ''


  constructor() { }

  ngOnInit(): void {
  }


  delete(student: IUser){
    const index = this.students.indexOf(student)
    this.students.splice(index, 1)
  }

  selectedUser(student:IUser){
   this.selectedStudent = student
  }

  search() {
    if (this.searchText === '') {
      this.students
    } else {
      console.log(this.students = this.students.filter(student => {
        return student.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      }));

    }
  }
}
