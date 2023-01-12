import React from 'react'
import './navbar.css';
import $ from 'jquery';
import logo from '../Resources/myLogo1.png'

// Js code for nav
// ---------Responsive-navbar-active-animation-----------
// function test(){
// 	var tabsNewAnim = $('#navbarSupportedContent');
// 	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
// 	var activeItemNewAnim = tabsNewAnim.find('.active');
// 	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
// 	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
// 	var itemPosNewAnimTop = activeItemNewAnim.position();
// 	var itemPosNewAnimLeft = activeItemNewAnim.position();
// 	$(".hori-selector").css({
// 		"top":itemPosNewAnimTop.top + "px", 
// 		"left":itemPosNewAnimLeft.left + "px",
// 		"height": activeWidthNewAnimHeight + "px",
// 		"width": activeWidthNewAnimWidth + "px"
// 	});
// 	$("#navbarSupportedContent").on("click","li",function(e){
// 		$('#navbarSupportedContent ul li').removeClass("active");
// 		$(this).addClass('active');
// 		var activeWidthNewAnimHeight = $(this).innerHeight();
// 		var activeWidthNewAnimWidth = $(this).innerWidth();
// 		var itemPosNewAnimTop = $(this).position();
// 		var itemPosNewAnimLeft = $(this).position();
// 		$(".hori-selector").css({
// 			"top":itemPosNewAnimTop.top + "px", 
// 			"left":itemPosNewAnimLeft.left + "px",
// 			"height": activeWidthNewAnimHeight + "px",
// 			"width": activeWidthNewAnimWidth + "px"
// 		});
// 	});
// }
// $(document).ready(function(){
// 	setTimeout(function(){ test(); });
// });
// $(window).on('resize', function(){
// 	setTimeout(function(){ test(); }, 500);
// });
// $(".navbar-toggler").click(function(){
// 	$(".navbar-collapse").slideToggle(300);
// 	setTimeout(function(){ test(); });
// });

// // --------------add active class-on another-page move----------
// $(document).ready(function($){
// 	// Get current path and find target link
// 	var path = window.location.pathname.split("/").pop();

// 	// Account for home page with empty path
// 	if ( path == '' ) {
// 		path = 'index.html';
// 	}

// 	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
// 	// Add active class to target link
// 	target.parent().addClass('active');
// });

// end of js  


const Navbar = () => {
  return (
    <>
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                Akashay Anand
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">About</a>
                <a className="nav-item nav-link" href="#">Skills</a>
                <a className="nav-item nav-link" href="#">Project</a>
                <a className="nav-item nav-link" href="#">Contact</a>
            </div>
            </div>
        </nav>
        </div>


        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Akashay Anand</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">About</a>
      <a className="nav-item nav-link" href="#">Skills</a>
      <a className="nav-item nav-link" href="#">Project</a>
      <a className="nav-item nav-link disabled" href="#">Contact</a>
    </div>
  </div>
</nav> */}
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
