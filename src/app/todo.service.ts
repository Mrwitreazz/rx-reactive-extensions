import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todos = new BehaviorSubject<Todo[]>([]);

  readonly todos$ = this.todos.asObservable();

  addTodo(description: string) {
    this.todos.next([
      ...this.todos.value,
      { id: +new Date(), description, priority: 'LOW', done: false },
    ]);
    this.updateLocal();
  }

  deleteTodo(id: number) {
    const filteredTodos = this.todos.value.filter((todo) => todo.id !== id);
    this.todos.next(filteredTodos);
    this.updateLocal();
  }

  done(id: number) {
    const todos = this.todos.value.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: true };
      }

      return todo;
    });

    this.todos.next(todos);
    this.updateLocal();
  }

  updateLocal() {
    localStorage.setItem('todos', JSON.stringify(this.todos.value));
  }

  initialize() {
    const local = JSON.parse(localStorage.getItem('todos') ?? '');
    this.todos.next(local);
  }
}
