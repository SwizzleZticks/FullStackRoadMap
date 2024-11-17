import {Component, Output, Input, EventEmitter} from '@angular/core';
import { Task } from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() newTask = new EventEmitter<Task>();
}
