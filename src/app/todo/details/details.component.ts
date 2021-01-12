import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  todo: any = {};
  todos: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  add(): void {
    if (this.todo.label) {

      this.todo.label = this.todo.label.trim();
      this.todo.done = false;
      this.todo.id = Math.random().toString(36).slice(2);

      this.todos.push(this.todo);
      this.todo = {};

    }
  }

  remove(): void {
    this.todos = this.todos.filter(el => !el.done);
  }

  deleteSingleTodo(todo: any): void {
    this.todos = this.todos.filter(item => item.id !== todo.id);
  }

  complete(todo: any): void {
    if (todo) {
      todo.done = !todo.done;
    }
  }

  log(text: string): void {
    console.log(text)
  }

  hasCompletedTodos(): boolean {
    return this.todos.some(el => el.done);
  }

}
