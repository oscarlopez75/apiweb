import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom_form_validator';
import { GetTokenService } from '../get-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  password:string = '';
  username:string = '';
  titleAlert:string = 'This field is required bitch';



  constructor(private fb: FormBuilder, private getToken: GetTokenService) {
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': [null, Validators.compose([Validators.required, CustomValidators.validateCharacters])]
    });
  }

  ngOnInit() {

  }

  addPost(post){
    this.password = post.password;
    this.username = post.username;

    this.getToken.sendCredentials(this.username, this.password)
    .subscribe(
                data => {
                  console.log("Data: ");
                  this.userHasToken(data, true);
                },
                error => {
                  console.log("Error: ");
                  this.userHasToken(error, false);
                },
                () => {}
             );

  }

  userHasToken(userData, foundIt: boolean){

    if(foundIt){
      console.log(userData);
      localStorage.setItem('username', userData.username);
      localStorage.setItem('token', userData.jwt);
    }else{
      console.log(userData.error);
    }
  }







}
