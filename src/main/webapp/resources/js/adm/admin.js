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
	let onCreate = (()=>{
		init()
		
	})
	let setContentView = (()=>{
		
	})
	
	return{onCreate}
})()