import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  @Input() tab: any;

  constructor() { }

  ngOnInit() {

  }

}
