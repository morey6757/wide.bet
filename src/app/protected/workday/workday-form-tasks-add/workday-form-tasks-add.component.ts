import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-workday-form-tasks-add',
  templateUrl: './workday-form-tasks-add.component.html',
  styles: []
})
export class WorkdayFormTasksAddComponent implements OnInit {

  @Output() addedTask = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.addedTask.emit();
  }

}
