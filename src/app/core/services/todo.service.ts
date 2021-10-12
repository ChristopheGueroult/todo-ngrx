import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todo$ = new BehaviorSubject<Todo[]>([{ message: 'test', done: false }]);
  constructor(private http: HttpClient) {}
  // public addTodo(todo: Todo) {
  //   this.todo$.next([...this.todo$.value, todo]);
  // }
  // public deleteTodo(index: number) {
  //   this.todo$.next(this.todo$.value.filter((v, i) => i !== index));
  // }
  // public toggleTodo(index: number) {
  //   this.todo$.next(
  //     this.todo$.value.map((v, i) =>
  //       i !== index ? v : { ...v, done: !v.done }
  //     )
  //   );
  // }

  public fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://restapi.fr/api/ngrxtodos');
  }
}
