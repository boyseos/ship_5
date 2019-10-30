var navi = navi ||{}
navi =(()=>{
	let js, navijs, uid
	let init = z =>{
		_ = $.ctx()
		$js = z
		$uid = $.uid()
		brd_js = 'resources/js/brd/brd.js'
	}
	let setContentView = () =>{
		$('<a>',{
			text : '글쓰기',
			click : e=>{
				e.preventDefault()
				$.getScript(brd_js,()=>{
					brd.write($uid)
				})
				}
			})
			.addClass('nav-link')
			.appendTo('#go_write')
		//if uid 
		$('<a>',{
			text : $uid+'로그아웃',
		})
	}
	let onCreate = z =>{
		init(z)
		setContentView()
	}
	return {onCreate}
	
})()
