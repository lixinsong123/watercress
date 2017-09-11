import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class bookComponent {
  	//最受欢迎的图书(数据-->虚构类)
  	fictionData=[
  		{
  			a_href:'https://m.douban.com/book/subject/27028847/?refer=home',
  			img_src:'https://qnmob2.doubanio.com/lpic/s29466436.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
  			title:'沉睡的人鱼之家',
  			rank:'7.3',
  		},
      {
        a_href:'https://m.douban.com/book/subject/27069925?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29499792.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'不可思议的朋友',
        rank:'9.2',
      },
      {
        a_href:'https://m.douban.com/book/subject/27042344?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29469414.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'醒来的女性',
        rank:'8.7',
      },
      {
        a_href:'https://m.douban.com/book/subject/26981446?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29497457.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'双峰: 神秘史',
        rank:'9.0',
      },
      {
        a_href:'https://m.douban.com/book/subject/27042830?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29450044.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'幽灵',
        rank:'8.6',
      },
      {
        a_href:'https://m.douban.com/book/subject/27072981?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29479042.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'遗产',
        rank:'8.8',
      },
      {
        a_href:'https://m.douban.com/book/subject/27035382?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29460229.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'七根凶简',
        rank:'8.6',
      },
      {
        a_href:'https://m.douban.com/book/subject/27059884?refer=home',
        img_src:'https://qnmob2.doubanio.com/lpic/s29530748.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
        title:'碟形世界：猫和少年魔笛手',
        rank:'8.7',
      },
  	];
    ////最受欢迎的图书(数据-->非虚构类)
    nofictionData=[
      {
          a_href:'https://m.douban.com/book/subject/27056409/?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29470672.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'深度工作',
          rank:'8.1'
      },
      {
          a_href:'https://m.douban.com/book/subject/27052521?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29487688.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'可怕的中年(全10册)',
          rank:'7.7'
      },
      {
          a_href:'https://m.douban.com/book/subject/27077687?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29483420.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'此生多珍重',
          rank:'9.1'
      },
      {
          a_href:'https://m.douban.com/book/subject/27054715?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29460740.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'荒野之歌',
          rank:'9.5'
      },
      {
          a_href:'https://m.douban.com/book/subject/27074861?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29497641.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'东京一年',
          rank:'7.1'
      },
      {
          a_href:'https://m.douban.com/book/subject/27037167?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29451355.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'冷暴力',
          rank:'8.0'
      },
      {
          a_href:'https://m.douban.com/book/subject/27029463?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29435054.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'畅销作家写作全技巧',
          rank:'8.6'
      },
      {
          a_href:'https://m.douban.com/book/subject/27029478?refer=home',
          img_src:'https://qnmob2.doubanio.com/lpic/s29520918.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg',
          title:'厨艺的常识',
          rank:'8.8'
      },
    ];
    //豆瓣书店数据
    bookstore=[
      {
        a_href:'https://market.douban.com/book/yiselie?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1974.jpg',
        title:'自由与爱之地',
        price:'¥ 49'
      },
      {
        a_href:'https://market.douban.com/book/weizhidaxue?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1869.jpg',
        title:'未知大学',
        price:'¥ 134.4'
      },
      {
        a_href:'https://market.douban.com/book/naranote?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1796.jpg',
        title:'奈良手记',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/busiyi?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1761.jpg',
        title:'不思议图书馆',
        price:'¥ 38.4'
      },
      {
        a_href:'https://market.douban.com/book/lynch?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1689.jpg',
        title:'与火同行',
        price:'¥ 39.8'
      },
      {
        a_href:'https://market.douban.com/book/ruhuazaiye?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1721.jpg',
        title:'如花在野',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/talese?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1679.jpg',
        title:'被仰望与被遗忘的',
        price:'¥ 52'
      },
      {
        a_href:'https://market.douban.com/book/baiguiyexing?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1611.jpg',
        title:'百鬼夜行 阳',
        price:'¥ 39.2'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
      {
        a_href:'https://market.douban.com/book/zaowu?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web',
        img_src:'https://img1.doubanio.com/view/freyr_page_photo/raw/public/1567.jpg',
        title:'造物',
        price:'¥ 54.4'
      },
    ];
 	constructor(){
 		
 	}

}
