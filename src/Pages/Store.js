import React from 'react';
import {Link} from 'react-router-dom';
import h6Logo from "./img/logo/gamelogo.png";
import discoverLogo from "./img/bg/discover.png";
import paypalLogo from "./img/bg/paypal.png";
export default function Store() {
    return (
      
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

<section className="wellet-bg">
<div class="card-form ">


  

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
    )
}
