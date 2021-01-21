import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl:'./loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  loginUser(e: any) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username == 'raj'&& password =='raj123'){
    alert ("Login successfully");
    if("login successfully"){
    }
}
else
{
    alert("Login failed");
    }
  }
  }

