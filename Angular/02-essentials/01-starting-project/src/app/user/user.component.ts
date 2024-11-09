import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// type User = {  This is also an option instead of interfaces
//  id: string;
//  name: string;
//  avatar: string;
//}
interface User {
    id: string;
    name: string;
    avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

get imagePath() {
  return 'assets/users/' + this.user.avatar;
}

onSelectUser(): void { 
  this.select.emit(this.user.id);
}

}
