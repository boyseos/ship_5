"user strict";
var auth = auth || {}
auth =(()=>{
	let _, js,auth_vue_js, brd_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		auth_vue_js = js+'/vue/auth_vue.js'
		brd_js = js + '/brd/brd.js'
		router_js = _+'/resources/js/cmm/router.js'
	}
	
	let onCreate =()=>{
		alert('온크리진입')
		init()
		$.getScript(auth_vue_js).done(()=>{
			alert('겟스크립트 진입')
			setContentView()
		})
	}
	
	let setContentView =()=>{
		$('body').html(auth_vue.login_body)
    	login()
    }
	//$().on('click',()=>{}) 원래문법
	//$().click(()=>{}) resig이 문법
	//$.ajax('sdf',{}) 원래문법
	let login =()=>{
		$('<a>',{
				text : '회원가입 이동',
				href : '#',
				click : () =>{
					join()
				}
			})
			.appendTo('#a_go_join')
		$('<button>',{
			text : 'Sign in',
			type : 'submit',
			click : e=>{
				e.preventDefault();
//				let data = { uid : $('#uid').val(),
//						upw : $('#upw').val()
//				}
				alert('로그인 전송아이디 : '+{ uid : $('#uid').val(),
					upw : $('#upw').val()
					}.uid)
				$.ajax({
					url : _+'/users/'+$('#uid').val(),
					type : 'POST',
					dataType : 'json',
					data : JSON.stringify({uid : $('#uid').val(),
							upw : $('#upw').val()}),
					contentType : 'application/json',
					success : d =>{
						alert(d.uid+' 님 환영합니다.')
						$.when(
							$.getScript(router_js,$.extend(new User(d.uid))),
							$.getScript(brd_js)
						)
						.done(brd.onCreate())
						.fail(alert('왜 실패?'))
						
//						$.getScript(router_js,
//							()=>{$.extend(new User(d.age))
//								$.getScript(brd_js).done(()=>{
//									brd.onCreate()
//								})
//							})						
					},
					error : e => {
						alert('로그인 ajax 실패')
					}
				})
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#a_login_button')
	}
	let join =()=>{
		alert('회원가입 클릭!!');
		$('body').html(auth_vue.join_body)
		$('#uid').keyup(()=>{
			if ($('#uid').val().length > 1)
				//alert($('#uid').val())
				existid($('#uid'));
		})
		$('<button>',{
			text : 'Continue to checkout',
			href : '#',
			type : 'submit',
			click : e=>{
				e.preventDefault();
				let data = { uid : $('#uid').val(),
						upw : $('#upw').val(),
						uname : $('#uname').val(),
						age : $('#age').val()
				}
				alert('조인 전송아이디 :'+data.uid)
				$.ajax({
					url : _+'/users/',
					type : 'POST',
					dataType : 'json',
					data : JSON.stringify(data),
						//{ uId : $('#uid').val ,uPw : $('#upw)}이 원형태
					contentType : 'application/json',      //meam
					success : d => {
						alert('ajax 조인 성공아이디 : '+ d.uid)
						setContentView()
					},
					error : e => {
						alert('조인 ajax 실패..!!!!!!!!!!')
					}
				})
			}
		})
		.addClass('btn btn-primary btn-lg btn-block')
		.appendTo('#a_join_button')
	}
	
	let existid = x =>{
//		$('<button>',{
//			text : '중복가입 체크',
//			href : '#',
//			type : 'submit',
//			click : e =>{
//				e.preventDefault();
//				alert('중복체크 해보자')
				$.ajax({
					url : _+'/users/'+$('#uid').val()+'/exist',
					// type : 'GET', default 지워도 된다.
					contentType : 'application/json',      //meam
					success : d => {
						if(d.boolean === 'FALSE') $('#dupl_check').val('사용가능한 ID입니다').css('color','blue')
						else $('#dupl_check').val('쓰고있는 ID입니다').css('color','red')
					},
					error : e => {
						alert('중복체크 ajax 실패..!!!!!!!!!!')
					}
				})
//			}
//		})
//		.addClass('btn btn-secondary')
//		.appendTo('#existId')
	}
	return {onCreate};
})();