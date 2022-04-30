import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { NavBarComponent } from './home-container/nav-bar/nav-bar.component';
import { SliderComponent } from './home-container/slider/slider.component';
import { ContentComponent } from './home-container/content/content.component';
import { ProfileViewComponent } from './modals/profile-view/profile-view.component';
import { AddStudentComponent } from './modals/add-student/add-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    NavBarComponent,
    SliderComponent,
    ContentComponent,
    ProfileViewComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
