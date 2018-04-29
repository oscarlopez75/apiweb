import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GetUsersService } from '../get-users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: string;
  token: string;
  getData: string;
  users: Array<any>;
  numRecords: number;
  gotError: string;
  showError = false;

  constructor(private authService: AuthService, private getUsers: GetUsersService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.token = this.authService.getToken();

    this.getUsers.getUsers(this.token).subscribe(
      data => {
        this.showResults(data);
      },
      error => {
        console.log(error);
        this.gotError = error.error.message;
        this.showError = true;
      },
      () => {}
    );

  }

  showResults(data){
    this.numRecords = data.users.length;
    this.users = data.users;
    console.log(this.users);
  }

}
