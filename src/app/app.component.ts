import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs = [
    {
      name:'Add Task',
      index:0,
    },
    {
      name:'List of tasks',
      index:1,
    },
    {
      name:'Done Tasks',
      index:2,
    },
    {
      name:'Additional',
      index:3,
    }
  ];
  title = 'todo-app';

  active_tab = {
    index:1,
  }

  changeTab(new_index){
    this.active_tab.index = new_index;
  }
}
