import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router,ActivatedRoute  } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
public data:any = []
public selectedId :any;
public data1: any = []
public data2:any = []
public min:any = []

variable ='https://gorest.co.in/public-api/users';
variable1 ='https://gorest.co.in/public-api/posts';

constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) {
}

ngOnInit(): void {
  let id = this.route.snapshot.params['id'];
  this.selectedId = id;
  console.log(this.selectedId)
  this.getData1(this.selectedId)

 }

 getData1(id:number){
  const url = `${this.variable}/${id}`;
  this.http.get(url).subscribe((res)=>{
    this.data = res
    console.log(this.data)
  })
}

  viewPost(id:number)
  {
    const url ='https://gorest.co.in/public-api/posts'
    this.http.get(url).subscribe((res)=>{
    this.data1 = res
    var j =0;
    for(var i = 0; i < this.data1.data.length; i++){
      if (this.data1.data[i].user_id == id)
      {
          this.min[j] = this.data1.data[i];
          j++
      }
      
    }
    
  })
  }

  ViewComments()
  {

  }

}
