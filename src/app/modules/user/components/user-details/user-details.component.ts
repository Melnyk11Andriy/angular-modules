import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

userInsides: IUser;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   this.activatedRoute.params.subscribe(value => {
     console.log(value);
     this.userInsides = this.router.getCurrentNavigation()?.extras.state as IUser;
     console.log(this.userInsides)
   });

  }

  ngOnInit(): void {
  }

}
