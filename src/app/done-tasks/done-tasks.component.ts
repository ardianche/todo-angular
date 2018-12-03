import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {

  doneTasks = [];

  constructor() { }

  ngOnInit() {
    let task_array = JSON.parse(localStorage.getItem('done_tasks'));
    if(task_array.length > 0){
      this.doneTasks = task_array; 
    }
  }

}
