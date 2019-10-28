"use strict;"
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x + '/resources/js');
	sessionStorage.setItem('css',x + '/resources/css');
	sessionStorage.setItem('img',x + '/resources/img');
	return{
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		css : ()=>{return sessionStorage.getItem('css');},
		img : ()=>{return sessionStorage.getItem('img');}
	}
}
function User(x){
	sessionStorage.setItem('uid',x);//세션스토리지는 html 명령어
	alert('세션 = '+x)
	return {uid : () => {return sessionStorage.getItem('uid')}}
}