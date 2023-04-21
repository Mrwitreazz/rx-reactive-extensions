import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodoService } from './todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'demo-app';

  service = inject(TodoService);

  todos$ = this.service.todos$;

  ngOnInit(): void {
    this.service.initialize();
  }

  count$ = this.todos$.pipe(
    map((todos) => {
      return {
        done: todos.filter((t) => t.done).length,
        undone: todos.filter((t) => !t.done).length,
      };
    })
  );
}
