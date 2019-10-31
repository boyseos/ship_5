var admin = admin || {}
var admin = (()=>{
	let _, img, css, js, auth_js, auth_vue_js, service_js, service_vue_js, navi_js, navi_vue_js, router_js
	let init = ()=>{
		_ = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		auth_js = js + '/cmm/auth.js'
		auth_vue_js = js + '/vue/auth_vue.js'
		service_js = js + '/service/service.js'
		service_vue_js = js + '/vue/service_vue.js'
		navi_js = js + '/cmm/navi.js'
		navi_vue_js = js + '/vue/navi_vue.js'
		router_js = js + '/cmm/router.js'
	}
	let onCreate = (x =>{
		alert(x.msg+'성공')
		init()
		setContentView()
	})
	let setContentView = ()=>{
		$('#form_join').remove()
		let arr = [	{txt : '고객정보', name: 'customers'},
					{txt : '웹크롤링', name: 'web_crawling'},
					{txt : '상품명', name: 'item_reg'},
					{txt : 'asdf', name: 'item_srch'},
					{txt : 'asdf', name: 'item_mod'},
					{txt : 'weg', name: 'item_del'},
					{txt : 'sdf', name: 'item_xxx'}]
		tableCreate(arr.length,arr,20)
	}
	
	let tableCreate = (x,arr,y) =>{		
		$('<table id="tab" style="width: 80%; height: 70%; margin: auto"><tbody></tbody></table>')
		.appendTo('body')
		//<td rowspan="'+x+'" id="right" style="border: 3px solid rgb(0, 0, 0);width: '+(100-y)+'%;text-align: center;">main</td>
		$.each(arr,(i,j)=>{
			$('<tr name="'+i+'"></tr>').appendTo('tbody')
			$('<td name="'+j.name+'" style="text-align: center;">'+j.txt+'</td>')
			.css({border : '3px solid #000000', width: y+'%'})
			.appendTo('tbody tr[name="'+i+'"]')
			.click(function(){
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				alert(i+'번째 메뉴클릭 :'+$(this).attr('name'))
				switch($(this).attr('name')){				
					case 'web_crawling':
						webCrawl()
						break;
					case 'customers' : break;
					case 'item_reg' : break;
					case 'item_srch' : break;
					case 'item_mod' : break;
					case 'item_del' : break;
					case 'item_xxx' : break;
				}
			})		
		})
		$('tbody tr[name=0]').append('<td rowspan="'+x+'" id="right" style="border: 3px solid rgb(0, 0, 0);width: '+(100-y)+'%;text-align: center;"></td>')
	}
	
	let webCrawl = () =>{
		$('#right').empty()
		$('<form style="margin: auto;"><select name="cars" size="1" style="width: 300px;"></select><input type="submit"></form>'+
			'<input type="text" placeholder="Search" aria-label="Search" style="width: 300px; text-align: center;">')
		.appendTo('#right')
		let array = [	{txt: '볼보', name: "volvo"},
						{txt: '사브', name: "saab"},
						{txt: '피아트', name: "fiat"},
						{txt: '아우디', name: "audi"},
						{txt: '현대', name: "hyundai"}
					]
		$.each(array,(i,j)=>{
			$('<option name="'+j.name+'">'+j.txt+'</option>')
			.css({border : '1px solid #000000'})
			.appendTo('form select[name=cars]')
			.click(e=>{
				e.preventDefault()
			})
		})
	}
	return{onCreate}
})()