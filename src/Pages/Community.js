import React from 'react';
import {Link} from 'react-router-dom';
import divider from "./img/bg/devider.png";
import h6Logo from "./img/logo/gamelogo.png";
// import desk-card1 from "./img/logo/gamelogo.png";

import cardImg from "./img/darkcard.png";
import cardImg1 from "./img/card22.png";
import cardImg2 from "./img/card23.png";

export default function Community() {
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

{/* <!-- main-area --> */}
<main>

        <section>
      <div class="container-fluid mb-5 mt-3">
      <div class="section-texdt text-center mt-5 mb-5 pt-5 pb-5">
            <h1 className="text-black-heading">JUST FEATURED GAMES</h1>
            <p>Compete with 100 players on a remote island for winner takes showdown
                knows issues where certain skin strategic</p>
                <img src={divider} alt=""/>
        </div>


        <div class="card-columns">
          <div class="card p-5 border-0">
            <img class="card-img-top" src={cardImg} alt="Card image cap"/>
            <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
          <h4 class="card-title">Bologna</h4>
          <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
          <p class="card-text">It is people. </p>
        
          </div>
            <div class="tab-caption ">
                   
              <div class="tab-text pr-5">
               <h5 class="tab-heading">Casino</h5>
               <h3>Craps</h3>
              </div>
               
             </div> 
          </div>
          <div class="card  p-5 border-0 ">
            <img class="card-img-top" src={cardImg1} alt="Card image cap"/>
            <div class="tab-caption ">
                   
              <div class="tab-text pr-5">
               <h5 class="tab-heading">Casino</h5>
               <h3>Craps</h3>
              </div>
               
             </div> 
          </div>
          <div class="card  p-5 border-0">
            <img class="card-img-top" src={cardImg2} alt="Card image cap"/>
            <div class="tab-caption ">
                   
              <div class="tab-text pr-5">
               <h5 class="tab-heading">Casino</h5>
               <h3>Craps</h3>
              </div>
               
             </div> 
          </div>
          <div class="card  p-5 border-0 ">
            <img class="card-img-top" src={cardImg} alt="Card image cap"/>
            <div class="tab-caption ">
                   
              <div class="tab-text pr-5">
               <h5 class="tab-heading">Casino</h5>
               <h3>Craps</h3>
              </div>
               
             </div> 
          </div>
          <div class="card  p-5 border-0">
            <img class="card-img-top" src={cardImg1} alt="Card image cap"/>
          </div>
          <div class="card  p-5 border-0">
            <img class="card-img-top" src={cardImg2} alt="Card image cap"/>
          </div>
       
     
        </div>
      </div>
    </section>



</main>
{/* <!-- main-area-end --> */}

{/* <!-- footer-area --> */}
<footer>
    <div class="footer-top footer-bg s-footer-bg">
        {/* <!-- newsletter-area --> */}
        <div class="newsletter-area s-newsletter-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="newsletter-wrap">
                            <div class="section-title newsletter-title">
                                <h2>Our <span>Newsletter</span></h2>
                            </div>
                            <div class="newsletter-form">
                                <form action="#">
                                    <div class="newsletter-form-grp">
                                        <i class="far fa-envelope"></i>
                                        <input type="email" placeholder="Enter your email..."/>
                                    </div>
                                    <button>SUBSCRIBE <i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- newsletter-area-end --> */}
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="footer-widget mb-50">
                        <div class="footer-logo mb-35">
                            <a href="index.html"><img src="img/logo/logo.png" alt=""/></a>
                        </div>
                        <div class="footer-text">
                            <p>Gemas marketplace the relase etras thats sheets continig passag.</p>
                            <div class="footer-contact">
                                <ul>
                                    <li><i class="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street
                                        lan West new queens</li>
                                    <li><i class="fas fa-headphones"></i> <span>Phone : </span>+24 1245 654 235</li>
                                    <li><i class="fas fa-envelope-open"></i><span>Email : </span>info@exemple.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6">
                    <div class="footer-widget mb-50">
                        <div class="fw-title mb-35">
                            <h5>Products</h5>
                        </div>
                        <div class="fw-link">
                            <ul>
                                <li><a href="#">Graphics (26)</a></li>
                                <li><a href="#">Backgrounds (11)</a></li>
                                <li><a href="#">Fonts (9)</a></li>
                                <li><a href="#">Music (3)</a></li>
                                <li><a href="#">Photography (3)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6">
                    <div class="footer-widget mb-50">
                        <div class="fw-title mb-35">
                            <h5>Need Help?</h5>
                        </div>
                        <div class="fw-link">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Affiliate</a></li>
                                <li><a href="#">FAQUse Cases</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="footer-widget mb-50">
                        <div class="fw-title mb-35">
                            <h5>Follow us</h5>
                        </div>
                        <div class="footer-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-widget mb-50">
                        <div class="fw-title mb-35">
                            <h5>Newsletter Sign Up</h5>
                        </div>
                        <div class="footer-newsletter">
                            <form action="#">
                                <input type="text" placeholder="Enter your email"/>
                                <button><i class="fas fa-rocket"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-fire"><img src="img/images/footer_fire.png" alt=""/></div>
        <div class="footer-fire footer-fire-right"><img src="img/images/footer_fire.png" alt=""/></div>
    </div>
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
                        <img src="img/images/card_img.png" alt="img" />
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
