import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }
}
