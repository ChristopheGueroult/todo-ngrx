import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todo$ = new BehaviorSubject<Todo[]>([{ message: 'test', done: false }]);
  constructor() {}
  public addTodo(todo: Todo) {
    this.todo$.next([...this.todo$.value, todo]);
  }
  public deleteTodo(index: number) {
    this.todo$.next(this.todo$.value.filter((v, i) => i !== index));
  }
  public toggleTodo(index: number) {
    this.todo$.next(
      this.todo$.value.map((v, i) =>
        i !== index ? v : { ...v, done: !v.done }
      )
    );
  }
}
