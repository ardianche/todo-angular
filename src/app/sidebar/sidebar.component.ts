import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('list') list: any;
  @Output() tabChange = new EventEmitter();

  constructor() { }

  active_tab = 1;
  ngOnInit() {
  }

  sendEvent(id){
    this.tabChange.emit(id);
    this.active_tab = id;
  }

}
