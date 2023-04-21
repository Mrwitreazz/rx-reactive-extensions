import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];

  @Output() deleteTodo = new EventEmitter<number>();

  @Output() markAsDone = new EventEmitter<number>();

  trackByFn(item: any) {
    return item.id;
  }
}
