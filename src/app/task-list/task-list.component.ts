import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks = [];

  done_tasks = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.length > 0){
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  activity(param, item){
    let index = this.tasks.indexOf(item);
    if(param === 'remove'){
      if(index > -1) this.tasks.splice(index,1);
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }else{
      item.done = !item.done;
      if(this.done_tasks.length > 0){
        let doneIndex = this.done_tasks.indexOf(item);
        if(doneIndex > -1){
          this.done_tasks.splice(doneIndex,1);
        }
      }else{
        console.log('A po hin qetu',item);
        this.done_tasks.push(item);
        localStorage.setItem('done_tasks',JSON.stringify(this.done_tasks));
      }
      this.tasks.splice(index,1,item);
    }
  }
}
