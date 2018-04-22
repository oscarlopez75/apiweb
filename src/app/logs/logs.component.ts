import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GetLogsService } from '../get-logs.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  user: string;
  token: string;
  getData: string;
  logs: Array<any>;
  numRecords: number;
  gotError: string;
  showError = false;

  constructor(private authService: AuthService, private getLogs: GetLogsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.token = this.authService.getToken();


    console.log("*********************************");
    this.getLogs.getLogs(this.token).subscribe(
      data => {
        this.showResults(data);
      },
      error => {
        console.log(error);
        this.gotError = "There was an error, contact support";
        this.showError = true;
      },
      () => {}
    );


  }

  showResults(data){

    if('cleared' in data){

      if(data.cleared){
        this.numRecords = data.logs.length;
        this.logs = data.logs;
        console.log(this.logs);
      }else{
        this.gotError = "User " + this.user + " has no access";
        this.showError = true;
        console.log("User has no access");
      }

    }else{
      this.gotError = "There was an error, contact support";
      this.showError = true;
      console.log(data);
    }

  }

}
