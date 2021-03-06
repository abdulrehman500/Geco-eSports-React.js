import React from 'react';
// import mainLogo from "../../public/assets/img/logo/logo.png";
// import mainLogo from "./img/logo/h3_logo.png";
import {Link} from 'react-router-dom';
// import preloader from "./img/icon/preloader.svg";

import streaming_bg from "./img/bg/streaming_bg.jpg";
import streaming_bg02 from "./img/bg/streaming_bg02.jpg";
import banner1 from "./img/bg/banner2.jpg";
import divider from "./img/bg/devider.png";
// import streaming_bg11 from "./img/bg/banner1.";
import h6Logo from "./img/logo/gamelogo.png";
import mask1 from "./img/logo/mask1.png";
import mask2 from "./img/logo/mask2.png";
import mask3 from "./img/logo/mask3.png";
import card1 from "./img/logo/helmet.png";
import card2 from "./img/logo/edit-tools.png";
import card3 from "./img/logo/assassins-creed.png";
import cards from "./img/logo/cards.png";
import cards1 from "./img/images/card1.png";
import thirdBanner from "./img/slider/third_banner_img.png";

export default function home() {
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

{/* <!-- header-area-end --> */}

{/* <!-- main-area --> */}
<main>

    {/* <!-- slider-area --> */}
    <section class="slider-area home-four-slider">
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

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={banner1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="slider-content">
                                <h6 data-animation="fadeInUp" data-delay=".4s">world gaming</h6>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Texas Hold 
 <span>'em Poker</span> ONLINE</h2>
                                <p data-animation="fadeInUp" data-delay=".6s">Find technology or people for digital projects in public sector.</p>
                                <a href="#" class="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">READ MORE</a>
                            </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={streaming_bg} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="slider-content">
                                <h6 data-animation="fadeInUp" data-delay=".4s">world gaming</h6>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Texas Hold 
 <span>'em Poker</span> ONLINE</h2>
                                <p data-animation="fadeInUp" data-delay=".6s">Find technology or people for digital projects in public sector.</p>
                                <a href="#" class="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">READ MORE</a>
                            </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={streaming_bg02}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="slider-content">
                                <h6 data-animation="fadeInUp" data-delay=".4s">world gaming</h6>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Texas Hold 
 <span>'em Poker</span> ONLINE</h2>
                                <p data-animation="fadeInUp" data-delay=".6s">Find technology or people for digital projects in public sector.</p>
                                <a href="#" class="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">READ MORE</a>
                            </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        {/* <div class="slider-active">

            <div class="single-slider slider-bg slider-style-two">
                <div class="container custom-container-two">
                    <div class="row">
                        <div class="col-xl-6 col-lg-7 col-md-11">
                            <div class="slider-content">
                                <h6 data-animation="fadeInUp" data-delay=".4s">world gaming</h6>
                                <h2 data-animation="fadeInUp" data-delay=".4s">Texas Hold 
                <span>'em Poker</span> ONLINE</h2>
                                <p data-animation="fadeInUp" data-delay=".6s">Find technology or people for digital projects in public sector.</p>
                                <a href="#" class="btn btn-style-two" data-animation="fadeInUp" data-delay=".8s">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div class="slider-img"><img src="img/slider/four_slider_img01.png" alt="" data-animation="slideInRightS" data-delay=".8s"/></div>
                </div>
            </div>
         
        </div> */}
    </section>

    <section>

        <div className="container">
        <div className="text-center">
        <div className="top-heading mt-5 mb-5">
            <h2 className="">RELEASED GAMES</h2>
            <p>Compete with 100 players on a remote island for winner takes showdown
knows issues where certain skin strategic</p>
<img className="img-fluid" src={divider}/> 
            
        </div>

        <div class="cards-main-warapper">
        <div class="row">
            <div class="col-md-6">
                <div class="rating-section d-flex">
                    <img src={cards1} alt=""/>
                    <div class="rating-inner">
                        <div class="rating-stars"><span>Rating :  </span>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.025" height="21.107" viewBox="0 0 22.025 21.107">
                                <path id="star_1_" data-name="star (1)" d="M21.968,8.468a1.168,1.168,0,0,0-1.008-.8L14.6,7.085,12.089,1.2a1.171,1.171,0,0,0-2.153,0L7.423,7.085l-6.358.577A1.172,1.172,0,0,0,.4,9.711l4.805,4.214L3.788,20.167a1.169,1.169,0,0,0,1.741,1.265l5.484-3.277,5.482,3.277a1.17,1.17,0,0,0,1.742-1.265l-1.417-6.242,4.805-4.213a1.171,1.171,0,0,0,.343-1.244Zm0,0" transform="translate(0 -0.491)" fill="#ffc107"></path>
                              </svg>
                              
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.025" height="21.107" viewBox="0 0 22.025 21.107">
                                <path id="star_1_" data-name="star (1)" d="M21.968,8.468a1.168,1.168,0,0,0-1.008-.8L14.6,7.085,12.089,1.2a1.171,1.171,0,0,0-2.153,0L7.423,7.085l-6.358.577A1.172,1.172,0,0,0,.4,9.711l4.805,4.214L3.788,20.167a1.169,1.169,0,0,0,1.741,1.265l5.484-3.277,5.482,3.277a1.17,1.17,0,0,0,1.742-1.265l-1.417-6.242,4.805-4.213a1.171,1.171,0,0,0,.343-1.244Zm0,0" transform="translate(0 -0.491)" fill="#ffc107"></path>
                              </svg>
                              
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.025" height="21.107" viewBox="0 0 22.025 21.107">
                                <path id="star_1_" data-name="star (1)" d="M21.968,8.468a1.168,1.168,0,0,0-1.008-.8L14.6,7.085,12.089,1.2a1.171,1.171,0,0,0-2.153,0L7.423,7.085l-6.358.577A1.172,1.172,0,0,0,.4,9.711l4.805,4.214L3.788,20.167a1.169,1.169,0,0,0,1.741,1.265l5.484-3.277,5.482,3.277a1.17,1.17,0,0,0,1.742-1.265l-1.417-6.242,4.805-4.213a1.171,1.171,0,0,0,.343-1.244Zm0,0" transform="translate(0 -0.491)" fill="#ffc107"></path>
                              </svg>
                              
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.025" height="21.107" viewBox="0 0 22.025 21.107">
                                <path id="star_1_" data-name="star (1)" d="M21.968,8.468a1.168,1.168,0,0,0-1.008-.8L14.6,7.085,12.089,1.2a1.171,1.171,0,0,0-2.153,0L7.423,7.085l-6.358.577A1.172,1.172,0,0,0,.4,9.711l4.805,4.214L3.788,20.167a1.169,1.169,0,0,0,1.741,1.265l5.484-3.277,5.482,3.277a1.17,1.17,0,0,0,1.742-1.265l-1.417-6.242,4.805-4.213a1.171,1.171,0,0,0,.343-1.244Zm0,0" transform="translate(0 -0.491)" fill="#ffc107"></path>
                              </svg>
                              
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.025" height="21.107" viewBox="0 0 22.025 21.107">
                                <path id="star_1_" data-name="star (1)" d="M21.968,8.468a1.168,1.168,0,0,0-1.008-.8L14.6,7.085,12.089,1.2a1.171,1.171,0,0,0-2.153,0L7.423,7.085l-6.358.577A1.172,1.172,0,0,0,.4,9.711l4.805,4.214L3.788,20.167a1.169,1.169,0,0,0,1.741,1.265l5.484-3.277,5.482,3.277a1.17,1.17,0,0,0,1.742-1.265l-1.417-6.242,4.805-4.213a1.171,1.171,0,0,0,.343-1.244Zm0,0" transform="translate(0 -0.491)" fill="#ffc107"></path>
                              </svg>
                              
                        
                        </div>

                        <div class="poker-bar">
                          <h6>Poker</h6>
                        </div>

                        <div class="tab-inner-text">
                          <h6>Category  : <span>Virtual Game    </span></h6>
                          <h6 class="pt-2">Model  : <span>   Complete 100 Players </span></h6>
                          <h6 class="pt-2">Controller : <span>PlayStation 5, Xbox, PS4   </span></h6>
                        </div>

                        <div class="tab-inner-paragrape">
                       <p>Compete with 100 players on a remote island
                        for winner takes showdown knows issues 
                        where certain skin strategic</p>
                        </div>
                        <div class="tab-hexagon">Play Now</div> 
                    </div>
                </div>
            </div>
            <div class="col-md-6">
              <div class="cards-warapper">
                <div class="released-card1 ">
                  <div class="tab-caption ">
                   
                   <div class="tab-text">
                    <h5 class="tab-heading">Casino</h5>
                    <h3>BlackJack</h3>
                   </div>
                    
                  </div>  
                </div>
                <div class="released-card2 ">

                  <div class="tab-caption ">
                   
                    <div class="tab-text pr-5">
                     <h5 class="tab-heading">Casino</h5>
                     <h3>Craps</h3>
                    </div>
                     
                   </div> 

                </div>
                <div class="released-card3 ">
                  <div class="tab-caption ">
                   
                    <div class="tab-text">
                     <h5 class="tab-heading">Casino</h5>
                     <h3>Roulette</h3>
                    </div>
                     
                   </div> 

                </div>
              </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    {/* <!-- slider-area-end --> */}

    {/* <!-- brand-area --> */}
    {/* <div class="brand-area brand-bg home-four-brand">
        <div class="container">
            <div class="row brand-active">
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo01.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo02.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo03.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo04.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo05.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo06.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="brand-item">
                        <img src="img/brand/brand_logo03.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- brand-area-end --> */}

    {/* <!-- home-four-area-bg --> */}
    <div class="home-four-area-bg">
        <div class="bg"></div>
        {/* <!-- latest-games-area --> */}
        {/* <section class="latest-games-area home-four-latest-games pt-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8">
                        <div class="section-title home-four-title mb-50">
                            <span>LATEST RELEASES</span>
                            <h2>Create & <span>Manage</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="latest-games-active owl-carousel">
                            <div class="latest-games-items mb-30">
                                <div class="latest-games-thumb">
                                    <a href="#"><img src="img/product/latest_games_thumb01.jpg" alt=""/></a>
                                </div>
                                <div class="latest-games-content">
                                    <div class="lg-tag">
                                        <a href="#">racing</a>
                                    </div>
                                    <h4><a href="#">Vertical Games <span>Daily</span></a></h4>
                                    <p>entry fee : <span>free</span></p>
                                </div>
                            </div>
                            <div class="latest-games-items mb-30">
                                <div class="latest-games-thumb">
                                    <a href="#"><img src="img/product/latest_games_thumb02.jpg" alt=""/></a>
                                </div>
                                <div class="latest-games-content">
                                    <div class="lg-tag">
                                        <a href="#">zombie</a>
                                    </div>
                                    <h4><a href="#">Hunter Killer <span>ii</span></a></h4>
                                    <p>entry fee : <span>$25,00</span></p>
                                </div>
                            </div>
                            <div class="latest-games-items mb-30">
                                <div class="latest-games-thumb">
                                    <a href="#"><img src="img/product/latest_games_thumb03.jpg" alt=""/></a>
                                </div>
                                <div class="latest-games-content">
                                    <div class="lg-tag">
                                        <a href="#">creative</a>
                                    </div>
                                    <h4><a href="#">Sky Walker <span>Daily</span></a></h4>
                                    <p>entry fee : <span>$25,00</span></p>
                                </div>
                            </div>
                            <div class="latest-games-items mb-30">
                                <div class="latest-games-thumb">
                                    <a href="#"><img src="img/product/latest_games_thumb01.jpg" alt=""/></a>
                                </div>
                                <div class="latest-games-content">
                                    <div class="lg-tag">
                                        <a href="#">racing</a>
                                    </div>
                                    <h4><a href="#">Vertical games <span>daily</span></a></h4>
                                    <p>entry fee : <span>free</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- latest-games-area-end --> */}

        {/* <!-- live-match-area --> */}
        {/* <section class="live-match-area pt-90">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="section-title home-four-title text-center mb-60">
                            <h2>watch live <span>match</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-9">
                        <div class="live-match-wrap">
                            <img src="img/images/live_match_img.jpg" alt=""/>
                            <a href="https://www.youtube.com/watch?v=04KPiGmC7Lc" class="popup-video"><img src="img/icon/video_play_icon.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- live-match-area-end --> */}

        {/* <!-- live-match-team-area --> */}
        {/* <section class="live-match-area fix pt-120 pb-110">
            <div class="container custom-container-two">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="live-match-team">
                            <img src="img/team/live_match_logo01.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="live-match-time text-center">
                            <span>upcoming live matches</span>
                            <h2 class="time">08:30</h2>
                            <h2 class="live-overlay-text">live</h2>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="live-match-team right">
                            <img src="img/team/live_match_logo02.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- live-match-team-area-end --> */}

    </div>
    {/* <!-- home-four-area-bg-end --> */}

    {/* <!-- featured-game-area --> */}
    {/* <section class="featured-game-area new-released-game-area pt-115 pb-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8">
                    <div class="section-title home-four-title black-title text-center mb-60">
                        <h2>ALL RELEASED <span>GAMES</span></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid container-full">
            <div class="row no-gutters new-released-game-active">
                <div class="col-lg-3">
                    <div class="featured-game-item mb-30">
                        <div class="featured-game-thumb">
                            <img src="img/images/s_featured_game_thumb01.jpg" alt=""/>
                        </div>
                        <div class="featured-game-content">
                            <h4><a href="#">JUST FOR <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                        <div class="featured-game-content featured-game-overlay-content">
                            <div class="featured-game-icon"><img src="img/icon/featured_game_icon.png" alt=""/></div>
                            <h4><a href="#">JUST FOR <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="featured-game-item mb-30">
                        <div class="featured-game-thumb">
                            <img src="img/images/s_featured_game_thumb02.jpg" alt=""/>
                        </div>
                        <div class="featured-game-content">
                            <h4><a href="#">Need FOR <span>Speed</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                        <div class="featured-game-content featured-game-overlay-content">
                            <div class="featured-game-icon"><img src="img/icon/featured_game_icon.png" alt=""/></div>
                            <h4><a href="#">Need FOR <span>Speed</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="featured-game-item mb-30">
                        <div class="featured-game-thumb">
                            <img src="img/images/s_featured_game_thumb03.jpg" alt=""/>
                        </div>
                        <div class="featured-game-content">
                            <h4><a href="#">egypt hunting <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                        <div class="featured-game-content featured-game-overlay-content">
                            <div class="featured-game-icon"><img src="img/icon/featured_game_icon.png" alt=""/></div>
                            <h4><a href="#">egypt hunting <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="featured-game-item mb-30">
                        <div class="featured-game-thumb">
                            <img src="img/images/s_featured_game_thumb04.jpg" alt=""/>
                        </div>
                        <div class="featured-game-content">
                            <h4><a href="#">JUST FOR <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                        <div class="featured-game-content featured-game-overlay-content">
                            <div class="featured-game-icon"><img src="img/icon/featured_game_icon.png" alt=""/></div>
                            <h4><a href="#">JUST FOR <span>GAMERS</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="featured-game-item mb-30">
                        <div class="featured-game-thumb">
                            <img src="img/images/s_featured_game_thumb02.jpg" alt=""/>
                        </div>
                        <div class="featured-game-content">
                            <h4><a href="#">Need FOR <span>Speed</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                        <div class="featured-game-content featured-game-overlay-content">
                            <div class="featured-game-icon"><img src="img/icon/featured_game_icon.png" alt=""/></div>
                            <h4><a href="#">Need FOR <span>Speed</span></a></h4>
                            <div class="featured-game-meta">
                                <i class="fas fa-bell"></i>
                                <span>Playstation 5 , Xbox</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- featured-game-area-end --> */}

    {/* <!-- shop-area --> */}
    <section class="shop-area home-four-shop-area pt-115 ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8">
                    <div class="section-title home-four-title text-center mb-35">
                        <h2>JUST FOR  <span>GAMERS</span></h2>
                        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
                    </div>
                </div>
            </div>

            
             <div class="row ">
             <div class="col-md-6 pt-5">
             <div class="media mt-5">
  <img class="mr-3 img1" src={card1} alt="Ge"/>
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
       <p  class="text-mute">ringilla. Donec lacinia congue felis in faucibus <br/>ringilla. Donec lacinia con.</p>
       
  </div>
</div>
             <div class="media mt-5">
  <img class="mr-3 img2" src={card2} alt="Ge"/>
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
       <p  class="text-mute">ringilla. Donec lacinia congue felis in faucibus <br/>ringilla. Donec lacinia con.</p>
       
  </div>
</div>
             <div class="media mt-5">
  <img class="mr-3 img3" src={card3} alt="Ge"/>
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
       <p  class="text-mute">ringilla. Donec lacinia congue felis in faucibus <br/>ringilla. Donec lacinia con.</p>
       
  </div>
</div>
                 </div>
             <div class="col-md-6 ">
                 <img className="img-fluid rounded float-right" src={cards} />
                 </div>
                 </div>
            {/* <div class="row product-active">
                <div class="col-xl-3">
                    <div class="shop-item">
                        <div class="product-thumb">
                            <a href="#"><img src="img/product/s_product_img01.jpg" alt=""/></a>
                        </div>
                        <div class="product-content">
                            <div class="product-tag"><a href="#">t-shirt</a></div>
                            <h4><a href="#">Women Black T-shirt</a></h4>
                            <div class="product-meta">
                                <div class="product-price">
                                    <h5>$29.00</h5>
                                </div>
                                <div class="product-cart-action">
                                    <a href="#"><i class="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="shop-item">
                        <div class="product-thumb">
                            <a href="#"><img src="img/product/s_product_img02.jpg" alt=""/></a>
                        </div>
                        <div class="product-content">
                            <div class="product-tag"><a href="#">x-box</a></div>
                            <h4><a href="#">Gears 5 Xbox Controller</a></h4>
                            <div class="product-meta">
                                <div class="product-price">
                                    <h5>$29.00</h5>
                                </div>
                                <div class="product-cart-action">
                                    <a href="#"><i class="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="shop-item">
                        <div class="product-thumb">
                            <a href="#"><img src="img/product/s_product_img03.jpg" alt=""/></a>
                        </div>
                        <div class="product-content">
                            <div class="product-tag"><a href="#">graphics</a></div>
                            <h4><a href="#">GeForce RTX 2070</a></h4>
                            <div class="product-meta">
                                <div class="product-price">
                                    <h5>$29.00</h5>
                                </div>
                                <div class="product-cart-action">
                                    <a href="#"><i class="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="shop-item">
                        <div class="product-thumb">
                            <a href="#"><img src="img/product/s_product_img04.jpg" alt=""/></a>
                        </div>
                        <div class="product-content">
                            <div class="product-tag"><a href="#">VR-Box</a></div>
                            <h4><a href="#">Virtual Reality Smiled</a></h4>
                            <div class="product-meta">
                                <div class="product-price">
                                    <h5>$29.00</h5>
                                </div>
                                <div class="product-cart-action">
                                    <a href="#"><i class="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="shop-item">
                        <div class="product-thumb">
                            <a href="#"><img src="img/product/s_product_img04.jpg" alt=""/></a>
                        </div>
                        <div class="product-content">
                            <div class="product-tag"><a href="#">VR-Box</a></div>
                            <h4><a href="#">Virtual Reality Smiled</a></h4>
                            <div class="product-meta">
                                <div class="product-price">
                                    <h5>$29.00</h5>
                                </div>
                                <div class="product-cart-action">
                                    <a href="#"><i class="fas fa-shopping-basket"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    {/* <!-- shop-area-end --> */}

    {/* <!-- blog-area --> */}
    <section class="blog-area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8">
                    <div class="section-title home-four-title black-title text-center mb-65">
                        <h2>JUST FEATURED <span> GAMES</span></h2>
                        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-9">
                    <div class="blog-post home-four-blog-post mb-50">
                        <div class="blog-thumb mb-30">
                            <a href="#"><img src={mask1} alt=""/></a>
                        </div>
                        <div class="blog-post-content">
                            <div class="blog-meta">
                                <ul>
                                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                                    <li><i class="far fa-calendar-alt"></i>september 19, 2020</li>
                                </ul>
                            </div>
                            <h4><a href="#">Shooter action video</a></h4>
                            <p>Compete with 100 players on a remote island thats winner takes showdown known issue.</p>
                            {/* <a href="blog-details.html" class="read-more">Read More <i class="fas fa-caret-right"></i></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-9">
                    <div class="blog-post home-four-blog-post mb-50">
                        <div class="blog-thumb mb-30">
                            <a href="#"><img src={mask2} alt=""/></a>
                        </div>
                        <div class="blog-post-content">
                            <div class="blog-meta">
                                <ul>
                                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                                    <li><i class="far fa-calendar-alt"></i>september 19, 2020</li>
                                </ul>
                            </div>
                            <h4><a href="#">THE WALKING DEAD</a></h4>
                            <p>Compete with 100 players on a remote island thats winner takes showdown known issue.</p>
                            {/* <a href="blog-details.html" class="read-more">Read More <i class="fas fa-caret-right"></i></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-9">
                    <div class="blog-post home-four-blog-post mb-50">
                        <div class="blog-thumb mb-30">
                            <a href="#"><img src={mask3} alt=""/></a>
                        </div>
                        <div class="blog-post-content">
                            <div class="blog-meta">
                                <ul>
                                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                                    <li><i class="far fa-calendar-alt"></i>september 19, 2020</li>
                                </ul>
                            </div>
                            <h4><a href="#">DEFENSE OF THE ANCIENTS</a></h4>
                            <p>Compete with 100 players on a remote island thats winner takes showdown known issue.</p>
                            {/* <a href="blog-details.html" class="read-more">Read More <i class="fas fa-caret-right"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- blog-area-end --> */}

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
                        <p>Copyright ?? 2020 <a href="#">Geco</a> All Rights Reserved.</p>
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

</body>

        </div>
    )
}
