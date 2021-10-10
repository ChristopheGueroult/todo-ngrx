import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './core/interfaces/todo';
import { TodoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todo$: Observable<Todo[]> = this.todoService.todo$.asObservable();
  public message!: string;
  constructor(private todoService: TodoService) {}
  public addTodo() {
    this.todoService.addTodo({ message: this.message, done: false });
  }
  public toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
  }
  public deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
}
