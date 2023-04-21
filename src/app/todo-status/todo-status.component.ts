import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css'],
})
export class TodoStatusComponent {
  @Input() doneCount = 0;

  @Input() undoneCount = 0;
}
