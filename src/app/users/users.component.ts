import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap} from '@angular/router';  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public data : any = []
  p: number = 1;

  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getData(){
    const url ='https://gorest.co.in/public-api/users'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  UserClicked(id:number)
  {
    console.log(id);
    this.router.navigate(['/userDetails', id])
  }

  putData()
  {
    this.router.navigate(['/addUser'])
  }

}
