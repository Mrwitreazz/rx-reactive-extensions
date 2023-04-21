import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  @Output() addTodo = new EventEmitter<string>();

  description = '';
}
