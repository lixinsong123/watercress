import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
declare var $ : any;

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search () {
    var Encipher=null;
    $.ajax({
       type:"get",    //请求方式
       async:false,    //是否异步
       url:"https://api.douban.com/v2/movie/in_theaters",
       dataType:"jsonp",    //跨域json请求一定是jsonp
       jsonp: "callback",    //跨域请求的参数名，默认是callback
           //jsonpCallback:"successCallback",    //自定义跨域参数值，回调函数名也是一样，默认为jQuery自动生成的字符串
       data:{},    //请求参数
   
       beforeSend: function() {
           //请求前的处理
      },
   
       success: function(data) {
           //请求成功处理，和本地回调完全一样
           //console.log(data);
           Encipher =data;
            return Encipher;
       }, 
       complete: function() {
           //请求完成的处理
       },
   
       error: function() {
           //请求出错处理
       }
    });

   
  
  }
}