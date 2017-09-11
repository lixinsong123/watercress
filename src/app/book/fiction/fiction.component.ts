import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class fictionComponent {
 	//数据
 	fiction_data=[
 		{
 			href:'https://m.douban.com/book/subject/27069925/',
 			src:'https://qnmob2.doubanio.com/lpic/s29499792.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'不可思议的朋友 ',
 			range:'9.2',
 			link:"[日] 田岛征彦/北京联合出版公司/2017-7"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27042344/',
 			src:'https://qnmob2.doubanio.com/lpic/s29469414.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'醒来的女性  ',
 			range:'8.7',
 			link:"[美] 玛丽莲·弗伦奇/北京联合出版公司/2017-7"
 		},
 		{
 			href:'https://m.douban.com/book/subject/26981446/',
 			src:'https://qnmob2.doubanio.com/lpic/s29497457.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'双峰: 神秘史   ',
 			range:'9.0',
 			link:"[美] 马克·弗罗斯特/北京时代华文书局/2017-7-16"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27041539/',
 			src:'https://qnmob2.doubanio.com/lpic/s29448565.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'上锁的房子 ',
 			range:'8.7',
 			link:"[日] 三岛由纪夫/广西师范大学出版社/2017-8-1"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27072981/',
 			src:'https://qnmob2.doubanio.com/lpic/s29479042.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'遗产 ',
 			range:'8.8',
 			link:"[以] 露图·莫丹/后浪丨北京联合出版公司/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27059884/',
 			src:'https://qnmob2.doubanio.com/lpic/s29530748.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'碟形世界：猫和少年魔笛手 ',
 			range:'8.7',
 			link:"[英] 特里·普拉切特/文汇出版社/2017-7"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27036317/',
 			src:'https://qnmob2.doubanio.com/lpic/s29488810.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'独居的一年 ',
 			range:'8.5',
 			link:"[美] 约翰·欧文/读客图书·江苏凤凰文艺出版社/2017-8-1"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27035382/',
 			src:'https://qnmob2.doubanio.com/lpic/s29460229.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'七根凶简',
 			range:'8.6',
 			link:"尾鱼/中国友谊出版公司/2017-7"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27065235/',
 			src:'https://qnmob2.doubanio.com/lpic/s29471015.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'莉莉和章鱼',
 			range:'8.6',
 			link:"[美] 史蒂文·罗利/江苏凤凰文艺出版社/2017-7-5"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 		{
 			href:'https://m.douban.com/book/subject/27078851/',
 			src:'https://qnmob2.doubanio.com/lpic/s29498835.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
 			title:'故事的终结',
 			range:'8.6',
 			link:"[美] 莉迪亚·戴维斯/中信出版集团/2017-8"
 		},
 	];
}
