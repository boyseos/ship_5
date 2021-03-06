"use strict"
var service_vue = service_vue || {}
service_vue = (()=>{
	return {
		service_head : ()=> {
			return '<head>'+
			'    <meta charset="utf-8">'+
		    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="">'+
		    '<link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">'+
		'    <title>Offcanvas template for Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
		'    <!-- Bootstrap core CSS -->'+
		    '<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">'+
		    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
		'  </head>'
		},
		service_body : () => {
			return  '<body class="bg-light">'+
	
			/*'    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">'+
			'      <a class="navbar-brand" href="#"> '+
			'		<i class="fab fa-accusoft fa-3x">xy</i>'+
			'      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
			'        <i class="fas fa-camera-retro fa-3x"></i>'+
			'      </button>'+
	
			'      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
			'        <ul class="navbar-nav mr-auto">'+
			'          <li id="go_write" class="nav-item active"></li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Notifications</a>'+
			'          </li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Profile</a>'+
			'          </li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Switch account</a>'+
			'          </li>'+
			'          <li class="nav-item dropdown">'+
			'            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
			'            <div class="dropdown-menu" aria-labelledby="dropdown01">'+
			'              <a class="dropdown-item" href="#">Action</a>'+
			'              <a class="dropdown-item" href="#">Another action</a>'+
			'              <a class="dropdown-item" href="#">Something else here</a>'+
			'            </div>'+
			'          </li>'+
			'        </ul>'+
			'        <form class="form-inline my-2 my-lg-0">'+
			'          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
			'          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
			'        </form>'+
			'      </div>'+
			'    </nav>'+*/
			'    <main id = "main"role="main" class="container">'+
			'    <div class="nav-scroller bg-white box-shadow">'+
			'      <nav class="nav nav-underline">'+
			'        <a class="nav-link active" href="#">Dashboard</a>'+
			'        <a class="nav-link" href="#">'+
			'          Friends'+
			'          <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
			'        </a>'+
			'        <a class="nav-link" href="#">Explore</a>'+
			'        <a class="nav-link" href="#">Suggestions</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'      </nav>'+
			'    </div>'+
	
			
			'      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
			'        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
			'        <div class="lh-100">'+
			'          <h6 class="mb-0 text-white lh-100">게 시 판</h6>'+
			'          <small>2019 - 10 - 25</small>'+
			'        </div>'+
			'      </div>'+
	
			'      <div id = "recent_update"class="my-3 p-3 bg-white rounded box-shadow">'+
			'        <h6 class="media -bottom border-gray pb-2 mb-0">최근 글들</h6>'+
			'        <div id = "recent_board1" class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <div id = "recent_board2" class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb75%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb75%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <div id = "recent_board3" class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb76%20text%20%7B%20fill%3A%236f42c1%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb76%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%236f42c1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <small class="d-block text-right mt-3">'+
			'          <a href="#">All updates</a>'+
			'        </small>'+
			'      </div>'+
	
			'      <div class="my-3 p-3 bg-white rounded box-shadow">'+
			'        <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb78%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb78%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <small class="d-block text-right mt-3">'+
			'          <a href="#">All suggestions</a>'+
			'        </small>'+
			'      </div>'+
			'    </main>'+
	
			'    <!-- Bootstrap core JavaScript'+
			'    ================================================== -->'+
			'    <!-- Placed at the end of the document so the pages load faster -->'+
			'    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.js"></script>'+
	
			'+<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="2" style="font-weight:bold;font-size:2pt;font-family:Arial, Helvetica, Open Sans, sans-serif">32x32</text></svg></body>'
		},
		service_write: x =>{
			  return '<div class="container-fluid" style="width:80%">'
			  +'<h1>ARTICLE WRITING</h1>'
			  +'<form id="write_con">' //$('#write_con input[name=writer]')      #아이디, .class 스페이스로 인해 루트밑 객체들을 자동 노드처리해버린다.
			  +'<input type="text" name="writer" style="margin-top:20px" class="form-control" value = "'+ x +'" placeholder="'+ x +'"/>'
			  +'<input type="text" name="title" style="margin-top:20px" class="form-control" placeholder="제목" /><br />'
			  +'<div class="row">'
			  +'<div style="width:97%; margin:10px auto" >'
			  +'<textarea name="content" class="form-control" rows="10"></textarea>'
			  +' </div>'
			  +' </div>'
			  /*+' <input type="reset" class="btn btn-danger" style="float:right;width:100px;margin-right:10px" value="CANCEL"/>'
			  +'<input name="write" type="submit" class="btn btn-primary" style="float:right;width:100px;margin-right:10px" value="SUBMIT"/>'*/
			  +'</form>'
			  +'</div>'
			}
	}
})()

