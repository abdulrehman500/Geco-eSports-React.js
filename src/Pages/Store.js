import React from 'react';
import {Link} from 'react-router-dom';
import h6Logo from "./img/logo/gamelogo.png";
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
<header>
    <div class="header-top-area s-header-top-area d-none d-lg-block">
        <div class="container-fluid s-container-full-padding">
            <div class="row align-items-center">
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="header-top-offer">
                        <p>Exclusive Black Friday ! Offer</p>
                        <span class="coming-time" data-countdown="2021/3/15"></span>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="header-top-right">
                        <div class="header-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        <div class="header-top-action">
                            <ul>
                                <li>
                                    <div class="header-top-mail">
                                        <p><span>|</span><i class="far fa-envelope"></i><a href="mailto:info@gmail.com">info@gecoinfo.com</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="sticky-header" class="transparent-header">
        <div class="container-fluid s-container-full-padding">
            <div class="row">
                <div class="col-12">
                    <div class="main-menu menu-style-two">
                        <nav>
                            <div class="logo">
                                <a href="index-2.html"><img src={h6Logo} alt="Logo"/></a>
                            </div>
                            <div id="mobile-menu" class="navbar-wrap d-none d-lg-flex">
                                <ul>
                                   <li><Link to="/"> Home </Link></li>
                                    {/* <li><a href="#">Home</a>
                                        {/* <ul class="submenu">
                                            <li><a href="index-2.html">Home One</a></li>
                                            <li><a href="index-3.html">Home Two</a></li>
                                            <li><a href="index-4.html">Home Three</a></li>
                                            <li><a href="index.html">Home Four</a></li>
                                            <li><a href="index-5.html">Home Five</a></li>
                                            <li><a href="index-6.html">Home Six</a></li>
                                            <li><a href="index-7.html">Home Seven</a></li>
                                        </ul> */}
                                    {/* </li> */} 
                                    {/* <li><a href="#">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="about-us.html">About Story</a></li>
                                            <li><a href="upcoming-games.html">Upcoming Games</a></li>
                                            <li><a href="game-single.html">Game Single</a></li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="Overview">Overview</Link></li>
                                    <li><Link to="Community">Community</Link></li>
                                    {/* <li><a href="shop.html">Store</a></li> */}
                                    <li><Link to="Store">Store</Link></li>
                                    <li><Link to="Blog">Blog </Link></li>
                                    <li><Link to="Contact">Contact </Link></li>
                                    {/* <li><a href="#">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">News Page</a></li>
                                            <li><a href="blog-details.html">News Details</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li class="show"><a href="contact.html">contact</a></li> */}
                                    {/* <li><Link to="About"> About </Link></li>
                                    <li><Link to="Overview"> Overview </Link></li>
                                    <li><Link to="Community"> Blog </Link></li> */}
                                    {/* <li><Link to="Contact"> Contact </Link></li> */}
                                </ul>
                            </div>
                            <div class="header-action">
                                <ul>
                                    <li class="header-shop-cart"><a href="#"><i class="fas fa-shopping-basket"></i><span>0</span></a>
                                        <ul class="minicart">
                                            <li class="d-flex align-items-start">
                                                <div class="cart-img">
                                                    <a href="#">
                                                        <img src="img/product/cart_p01.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="cart-content">
                                                    <h4>
                                                        <a href="#">Xbox One Controller</a>
                                                    </h4>
                                                    <div class="cart-price">
                                                        <span class="new">$229.9</span>
                                                        <span>
                                                            <del>$229.9</del>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="del-icon">
                                                    <a href="#">
                                                        <i class="far fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="total-price">
                                                    <span class="f-left">Total:</span>
                                                    <span class="f-right">$239.9</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkout-link">
                                                    <a href="cart.html">Shopping Cart</a>
                                                    <a class="red-color" href="checkout.html">Checkout</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="header-search"><a href="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></a></li>
                                </ul>
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

    {/* <!-- breadcrumb-area --> */}
    <section class="breadcrumb-area breadcrumb-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-content text-center">
                        <h2>accessories <span>store</span></h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page">store</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb-area-end --> */}

    {/* <!-- shop-area --> */}
    <section class="shop-area pt-120 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item01.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">Gaming T-Shirt</a></h5>
                            <span>Price: $12.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item02.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">Gaming backpack</a></h5>
                            <span>Price: $19.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item03.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">xbox one controller</a></h5>
                            <span>Price: $14.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item04.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">Gaming T-Shirt</a></h5>
                            <span>Price: $12.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item05.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">Gaming backpack</a></h5>
                            <span>Price: $19.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item06.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">Joy‑Con controllers</a></h5>
                            <span>Price: $14.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item07.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">nintendo switch</a></h5>
                            <span>Price: $12.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item08.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">xbox one controller</a></h5>
                            <span>Price: $19.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="accessories-item text-center mb-80">
                        <div class="accessories-thumb mb-30">
                            <a href="#"><img src="img/product/shop_item09.jpg" alt=""/></a>
                        </div>
                        <div class="accessories-content">
                            <h5><a href="#">MaxGreen 5902 Blue</a></h5>
                            <span>Price: $14.00</span>
                            <a href="#" class="shop-add-action">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- shop-area-end --> */}

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
                        <img src="img/images/card_img.png" alt="img"/>
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
