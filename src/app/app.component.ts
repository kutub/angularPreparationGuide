import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Preparation Guide';
  constructor(private http: HttpClient) { }

  subjects = [];

  ngOnInit() {
      this.http.get('http://127.0.0.1:8000/study/api/').subscribe(data => {
      console.log(data[0].subject);
        this.subjects = data;
    });
  }
}
