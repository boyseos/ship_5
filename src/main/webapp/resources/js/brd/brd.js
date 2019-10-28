"use strict"
var brd = brd || {}
brd = (()=>{
	let _, js, brd_vue_js, uid, authjs, $form
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		uid = $.uid()
		brd_vue_js = js + '/vue/brd_vue.js'
		authjs = js+'/cmm/auth.js'
		$form = 'form'
		}
	let setContentView = () =>{
		console.log('brd 겟스크립트 진입')
		$('head').html(brd_vue.brd_head)
		$('body').html(brd_vue.brd_body)
		$('#recent_update .media').remove()
		$('<h1>', {text : '글이 없나?'})
		.addClass('media text-muted pt-3')
		.appendTo('#recent_update')
//			$('#recent_board2').html
//			('<h1>',{text : '글이 없나?'}).addClass('media text-muted pt-3')
//			$('#recent_board3').html
//			('<h1>',{text : '글이 없나?'}).addClass('media text-muted pt-3')
	}
	let write = x =>{
		$('#recent_update').html(brd_vue.brd_write(x))
		$('#write_con textarea').val(uid)
		$('#write_con input[name="title"]').val('asdfdd')
		$('<button>',{
			text : '글다썻다',
			type : 'submit',
			style : "float:right;width:100px;margin-right:10px"
		})
		.addClass('btn btn-primary')
		.appendTo('#write_con')
		.click(e=>{
			e.preventDefault();
			let json = {
					uid : $('#write_con input[name=writer]').val(),
					title : $('#write_con input[name=title]').val(),
					content : $('#write_con textarea').val()
			}
			alert('타이틀'+json.title)
			$.ajax({
				url : _+'/articles/',
				type : 'POST',		//rest 상태에대한 타입.
				data : JSON.stringify(json),			// []도 제이슨이다...!?
				dataType : 'json',	// data의 타입 = {} = json
				contentType : 'application/json',
				success : d =>{
					alert('서엉공!')
					setContentView()
					navigation()
				},
				error : e=>{alert('실패')}
			})
		})
		
		$('<button>',{
			text : '취소하자',
			type : 'submit',
			style : "float:right;width:100px;margin-right:10px"
		})
		.addClass('btn btn-danger')
		.appendTo('#write_con')
		.click(()=>{

		})
	}
	/*+' <input type="reset"  value="CANCEL"/>'
	  +'<input name="write" type="submit" value="SUBMIT"/>'*/
	let onCreate = x =>{
		init()
		$.getScript(brd_vue_js).done(()=>{
			setContentView()
			navigation()
		})
	}
	let navigation = () => {
		$('<a>',{
			text : '글쓰기',
			click : e=>{
				e.preventDefault()
				write(uid)
				}
			})
			.addClass('nav-link')
			.appendTo('#go_write')
	}
	return {onCreate}
})()