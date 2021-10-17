import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodosRoutingModule, FormsModule],
})
export class TodosModule {}
