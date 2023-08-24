import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()
  detail!: User;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor(){}

  onRemove(){
    this.remove.emit(this.detail)
  }
}
