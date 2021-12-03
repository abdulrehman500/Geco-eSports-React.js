import React from 'react';
import {Link} from 'react-router-dom';
import h6Logo from "./img/logo/gamelogo.png";
import discoverLogo from "./img/bg/discover.png";
import paypalLogo from "./img/bg/paypal.png";
export default function Blog() {
    return (
        <div>
              <body>

{/* <!-- preloader --> */}
{/* <div id="preloader">
    <div id="loading-center">
        <div id="loading-center-absolute">
            <img src="img/icon/preloader.svg" alt=""/>
        </div>
    </div>
</div> */}
{/* <!-- preloader-end --> */}

{/* <!-- header-area --> */}
<header class="header-style-four">
   
   <div id="sticky-header" class="header-four-wrap">
       <div class="container custom-container-two">
           <div class="row">
               <div class="col-12">
                   <div class="main-menu menu-style-two">
                       <nav>
                           <div class="logo">
                               <a href="index-4.html"><img src={h6Logo} alt="Logo"/></a>
                           </div>
                           <div id="mobile-menu" class="navbar-wrap d-none d-lg-flex">
                               <ul>
                                   <li><Link to="/"> Home </Link></li>
                                   <li><Link to="Contact">Contact US</Link></li>
                                   <li><Link to="Community">Games  </Link></li>
                                   <li><Link to="Wallet">Wallet</Link></li>
                                   <li><Link to="Blog">Profile </Link></li>
                                 
                           
                               </ul>
                           </div>
                           <div class="header-social">
                      
                       <ul>
                           <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                           <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                       </ul>
                   </div>
                           <div class="header-action">
                              
                           </div>
                       </nav>
                   </div>
                   <div class="mobile-menu"></div>
               </div>
               {/* <!-- Modal Search --> */}
               <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
                   <div class="modal-dialog" role="document">
                       <div class="modal-content">
                           <form>
                               <input type="text" placeholder="Search here..."/>
                               <button><i class="fa fa-search"></i></button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</header>
{/* <!-- header-area-end --> */}

<section className="profile-bg">
<div class="card-form ">
<div class=" login-form ">
	<div class="card-body ">
		<h3 class="card-title ">Login </h3>
		<div class="card-text">
		
	
			<form>
            <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="password" style={{background:"white", borderRadius:"30px",width: "60%", marginLeft:"72px"}}  class="form-control" id="inputPassword" />
    </div>
  </div>
            <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" style={{background:"white", borderRadius:"30px",    width: "60%",marginLeft:"72px"}} class="form-control" id="inputPassword"/>
    </div>
  </div>
			
				<button type="submit" class="btn-login">Login</button>
				
				<div class="sign-up">
				Not registered yet?  <a href="#">Create an account.</a>
				</div>
			</form>
		</div>
		</div>
	</div>

    <div className="btn-signs">
    <div className="btn-google">
    <svg  width="49.249" height="31.662" viewBox="0 0 49.249 31.662">

  <g id="Group_48" data-name="Group 48" clip-path="url(#clip-path)">
    <path id="Path_34" data-name="Path 34" d="M637.906,690.4h7.686a9.773,9.773,0,1,1-2.653-10.478,1.059,1.059,0,0,0,1.44-.006l2.824-2.657a1.056,1.056,0,0,0,0-1.535,15.684,15.684,0,0,0-10.508-4.309,15.74,15.74,0,1,0,15.4,16.622c.013-.1.02-3.612.02-3.612H637.906a1.055,1.055,0,0,0-1.055,1.055v3.865a1.055,1.055,0,0,0,1.055,1.055Zm0,0" transform="translate(-620.644 -671.363)" fill="#eba009"/>
  </g>
</svg>

  Sign up with Google
    </div>
    <div className="btn-fb">
    <svg xmlns="http://www.w3.org/2000/svg" width="20.701" className="mr-4" height="38.651" viewBox="0 0 20.701 38.651">
  <path id="Path_813" data-name="Path 813"
   d="M773.492,117.841l1.073-7h-6.711v-4.539c0-1.914.937-3.779,3.943-3.779h3.051V96.572a37.183,37.183,0,0,0-5.417-.473c-5.527,0-9.14,3.35-9.14,9.415v5.331h-6.143v7h6.143V134.75h7.563V117.841Z" transform="translate(-754.148 -96.099)" fill="#fff"/>
</svg>

 Sign up with Facebook
    </div>
    </div>

</div>
</section>

{/* <!-- footer-area --> */}
<footer>
   
    <div class="copyright-wrap s-copyright-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="copyright-text">
                        <p>Copyright © 2020 <a href="#">Geco</a> All Rights Reserved.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 d-none d-md-block">
                    <div class="payment-method-img text-right">
                        <img src={discoverLogo} alt="img"/>
                        <img className="ml-2 mr-2" src={paypalLogo} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
{/* <!-- footer-area-end --> */}




</body>
        </div>
    )
}
