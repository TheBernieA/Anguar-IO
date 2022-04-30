import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() showStudentModal = new EventEmitter<void>()
  @Output() searchText = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }
search(){
  this.searchText.emit()
}

}
