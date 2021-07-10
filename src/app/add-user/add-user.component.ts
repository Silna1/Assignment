import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public data :any = []
  postId : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  submit(){

    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>('https://gorest.co.in/public/v1/users', body, { headers }).subscribe(data => {
        this.postId = data.id;
    
      });
  console.log("Submitted");
}


}
