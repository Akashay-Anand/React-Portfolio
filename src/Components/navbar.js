import React from 'react'
import './navbar.css';
import $ from 'jquery';

// Js code for nav
// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});

// --------------add active class-on another-page move----------
$(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

// end of js  


const Navbar = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
</ul>
    </>

    

    // <nav className="navbar navbar-expand-custom navbar-mainbg">
    //     <a className="navbar-brand navbar-logo" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <i className="fas fa-bars text-white"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ml-auto">
    //             <div className="hori-selector"><div class="left"></div><div class="right"></div></div>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
    //             </li>
    //             <li className="nav-item active">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>Address Book</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>Components</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Calendar</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="far fa-chart-bar"></i>Charts</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="javascript:void(0);"><i class="far fa-copy"></i>Documents</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
  )
}

export default Navbar;
