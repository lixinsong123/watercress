import { Component,OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class indexComponent  {

 	//首页信息数据
 	data_information=[
 	 {
 	 	href:'https://m.douban.com/page/h09ystq',
 	 	imgUrl:'https://qnmob2.doubanio.com/img/files/file-1504747037.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'嘻哈少年PG One：rapper不正常，但很酷',
 	 	link :'膨胀少年呛声毒评，不服你也来Freestyle',
 	 	authorName:'瓣嘴',
 	 	label:"来自栏目 瓣嘴"
 	 },
 	 {
 	 	href:'https://m.douban.com/page/fs2cgxg',
 	 	imgUrl:'https://qnmob2.doubanio.com/img/files/file-1504683282.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'广播精选｜王戎七岁，尝与诸小儿游',
 	 	link :'看道旁共享单车积灰，诸儿竞走刷之，唯戎不动。人问之，答曰……',
 	 	authorName:'豆瓣',
 	 	label:"来自栏目 广播精选"
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635961312/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45151118.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'中国古代的落地灯',
 	 	link :'今天的人也许很难相信，在中国古代存在着可以调节光照方向的落地灯。可是，《红楼梦》中恰恰清楚描述了...',
 	 	authorName:'孟晖',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635991994/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45157368.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'禁锢的欢愉，维多利亚时代不能说的秘密',
 	 	link :'《法国中尉的女人》是当代文学大师约翰·福尔斯的代表作，出版当年即成为当年最畅销图书。故事讲述了186...',
 	 	authorName:'新经典',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635828494/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45130797.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'《敦刻尔克》：英国为什么伟大？因为他们有这么多优雅的老男人',
 	 	link :'文✎熊太行 影评圈基本上偏左，比如好多作者，无论男女，总是说我们今天看战争片是为了反战，这不对。...',
 	 	authorName:'熊太行',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635961312/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45151118.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'中国古代的落地灯',
 	 	link :'今天的人也许很难相信，在中国古代存在着可以调节光照方向的落地灯。可是，《红楼梦》中恰恰清楚描述了...',
 	 	authorName:'孟晖',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635991994/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45157368.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'禁锢的欢愉，维多利亚时代不能说的秘密',
 	 	link :'《法国中尉的女人》是当代文学大师约翰·福尔斯的代表作，出版当年即成为当年最畅销图书。故事讲述了186...',
 	 	authorName:'新经典',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635828494/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45130797.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'《敦刻尔克》：英国为什么伟大？因为他们有这么多优雅的老男人',
 	 	link :'文✎熊太行 影评圈基本上偏左，比如好多作者，无论男女，总是说我们今天看战争片是为了反战，这不对。...',
 	 	authorName:'熊太行',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635961312/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45151118.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'中国古代的落地灯',
 	 	link :'今天的人也许很难相信，在中国古代存在着可以调节光照方向的落地灯。可是，《红楼梦》中恰恰清楚描述了...',
 	 	authorName:'孟晖',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635991994/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45157368.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'禁锢的欢愉，维多利亚时代不能说的秘密',
 	 	link :'《法国中尉的女人》是当代文学大师约翰·福尔斯的代表作，出版当年即成为当年最畅销图书。故事讲述了186...',
 	 	authorName:'新经典',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635828494/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45130797.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'《敦刻尔克》：英国为什么伟大？因为他们有这么多优雅的老男人',
 	 	link :'文✎熊太行 影评圈基本上偏左，比如好多作者，无论男女，总是说我们今天看战争片是为了反战，这不对。...',
 	 	authorName:'熊太行',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635961312/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45151118.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'中国古代的落地灯',
 	 	link :'今天的人也许很难相信，在中国古代存在着可以调节光照方向的落地灯。可是，《红楼梦》中恰恰清楚描述了...',
 	 	authorName:'孟晖',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635991994/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45157368.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'禁锢的欢愉，维多利亚时代不能说的秘密',
 	 	link :'《法国中尉的女人》是当代文学大师约翰·福尔斯的代表作，出版当年即成为当年最畅销图书。故事讲述了186...',
 	 	authorName:'新经典',
 	 	label:""
 	 },
 	 {
 	 	href:'https://m.douban.com/note/635828494/',
 	 	imgUrl:'https://qnmob2.doubanio.com/view/note/large/public/p45130797.jpg?imageView2/2/q/80/w/330/h/330/format/jpg',
 	 	title:'《敦刻尔克》：英国为什么伟大？因为他们有这么多优雅的老男人',
 	 	link :'文✎熊太行 影评圈基本上偏左，比如好多作者，无论男女，总是说我们今天看战争片是为了反战，这不对。...',
 	 	authorName:'熊太行',
 	 	label:""
 	 }

 	];
}
