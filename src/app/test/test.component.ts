import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {WikipediaService} from './test.service';

import {Http} from '@angular/http';
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class testComponent implements OnInit {

	data ;
	ngOnInit(){

	}
	constructor(private wikipediaService: WikipediaService,public jsonp:Jsonp,private http: Http) {}
			items: Observable<string[]>;

		  // search (term: string) {
		  //   this.items = this.wikipediaService.search(term);
		  //   console.log( this.wikipediaService.search(term));
		  // }
		  search(){
		  	 //url地址后面添加?callback=JSONP_CALLBACK
	        let wikiUrl = 'https://api.douban.com/v2/movie/in_theaters?callback=JSONP_CALLBACK';
	        // 也可使用URLSearchParams()设置参数，这里只有一个参数，就写在url里面了。
	        // 使用map().substribe()获取数据
	        this.jsonp.get(wikiUrl)
	            .map(request => <string[]> request.json()[1])
	            .subscribe((response) => {
	            	console.log(response);
	            }, (error) => {
	                console.error(error);
	            });

		  }

}

	/*
	  constructor(private wikipediaService: WikipediaService,public jsonp:Jsonp) {}
		items: Observable<string[]>;

	  // search (term: string) {
	  //   this.items = this.wikipediaService.search(term);
	  //   console.log( this.wikipediaService.search(term));
	  // }
	  search(){
	  	 // 重点来了，url地址后面添加?callback=JSONP_CALLBACK
        let wikiUrl = 'https://api.douban.com/v2/movie/in_theaters?callback=JSONP_CALLBACK';
        // 也可使用URLSearchParams()设置参数，这里只有一个参数，就写在url里面了。
        // 使用map().substribe()获取数据
        this.jsonp.get(wikiUrl)
            .map(request => <string[]> request.json()[1])
            .subscribe((response) => {
            	console.log(response);
            }, (error) => {
                console.error(error);
            });
	  }*/