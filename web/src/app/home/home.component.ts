import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { CreateTodoService } from '../services/todo/create-todo.service';
import { DeleteTodoService } from '../services/todo/delete-todo.service';
import { EditTodoService } from '../services/todo/edit-todo.service';
import { FetchAllTodosService } from '../services/todo/fetch-all-todos.service';
import {
  TodoData,
  TodoDialogComponent,
} from '../todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Array<TodoInterface> = [];
  constructor(
    private fetchAll: FetchAllTodosService,
    private createTodo: CreateTodoService,
    private editTodo: EditTodoService,
    private deleteTodo: DeleteTodoService,
    private auth: AuthService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.todos = await this.fetchAll.make();
    this.todos.reverse();
  }
  logout() {
    this.todos = [];
    this.auth.logout();
  }
  add() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: { title: '', description: '' },
    });
    dialogRef.afterClosed().subscribe(async (result: TodoData | undefined) => {
      if (result) {
        this.createTodo.setBody(result);
        await this.createTodo.make();
        this.todos = await this.fetchAll.make();
        this.todos.reverse();
      }
    });
  }
  async delete(todo: TodoInterface, index: number) {
    this.deleteTodo.setBody({ id: todo.ID });
    await this.deleteTodo.make();
    this.todos.splice(index, 1);
  }
  edit(todo: TodoInterface, index: number) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: { title: todo.title, description: todo.description },
    });
    dialogRef.afterClosed().subscribe(async (result: TodoData | undefined) => {
      if (result) {
        this.editTodo.setBody({ ...result, id: todo.ID });
        let response = await this.editTodo.make();
        this.todos[index] = {
          ...todo,
          title: result.title,
          description: result.description,
        };
      }
    });
  }
}
interface TodoInterface {
  ID: number;
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}