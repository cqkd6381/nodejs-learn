// http爬虫
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://class.ibestservice.com/courses';

function filterClass(html){
	var $ = cheerio.load(html)
	var clss = $('.box')
	var clssData = []
	clss.each(function(item){
		var cls = $(this)
		var clsCategory = cls.find('.box-head').children('span').text()
		var clsTitle = cls.find('.box-body').children('span').text()
		var clsData = {
			clsCategory:clsCategory,
			clsTitle:clsTitle
		}
		clssData.push(clsData)
	})
	return clssData
}

function printClssInfo(clssData){
	clssData.forEach(function(item){
		var clsTitle = item.clsTitle
		console.log(clsTitle+ '\n')

	})
}
http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		var clssData = filterClass(html)
		printClssInfo(clssData)
	})
}).on('error',function(){
	console.log('获取页面数据出错')
})