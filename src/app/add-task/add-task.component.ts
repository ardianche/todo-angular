import { Component, OnInit, NgModule } from '@angular/core';
  import {MaterialModule} from '../material.module';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { FormsModule } from '@angular/forms';
  import {MatSnackBar} from '@angular/material/snack-bar';
@NgModule({
  imports:[
    MatDatepickerModule,
    FormsModule,
  ],
})

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

    constructor(public snackBar:MatSnackBar){}

    date_given = new Date();
    title: string;
    description:string;
    assignee:string;

    tasks_array = [];

    ngOnInit() {
      if(localStorage.length > 0){
        this.tasks_array = JSON.parse(localStorage.getItem('tasks'));
      }
    }

    saveIt(){
      let payload = {
          title :this.title,
          description : this.description,
          assignee: this.assignee,
          date: this.date_given,
          done:false,
      }

      this.tasks_array.push(payload);

      this.date_given = new Date();
      this.title = null;
      this.description = null;
      this.assignee = null;

      localStorage.setItem('tasks',JSON.stringify(this.tasks_array));
      this.openSnackBar();
    }
  openSnackBar() {
    this.snackBar.open('Added succesfuly','',{
      duration: 1200,
    });
  }
}
