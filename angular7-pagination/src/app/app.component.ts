import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
    constructor(private http: HttpClient) { }

    items: Array<any>;
    results:any;
    pagingItems: Array<any>;

    ngOnInit() {        
    var url = "../assets/pagination-data.json";
    this.http.get(url).subscribe(
  		result => {this.results = result;},
  		 err => console.error(err), 
         () => console.log('done')  
       );            
    }
    onChangePage(pagingItems: Array<any>) {
        this.pagingItems = pagingItems;
    }    
}

