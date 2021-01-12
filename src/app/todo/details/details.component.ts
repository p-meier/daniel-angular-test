import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  todo: any = {};
  todos: any[] = [];

  hasCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  add(): void {
    if (this.todo.label) {

      const todo = {
        label: this.todo.label.trim(),
        done: false
      }

      // why does it not work with this.todo? why do i need to create a separate todo object?
      this.todos.push(todo);
      this.todo = {};

    }
  }

  remove(): void {
    this.todos = this.todos.filter(el => !el.done);
  }

  complete(index: any): void {
    this.todos.forEach(el => {
      if (this.todos.indexOf(el) === index) {
        el.done = !el.done;
      }
    });

    this.hasCompleted = this.todos.some(el => el.done);
  }

  log(text: string): void {
    console.log(text)
  }

}
