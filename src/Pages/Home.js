import React from 'react';
// import mainLogo from "../../public/assets/img/logo/logo.png";
import mainLogo from "./img/logo/logo.png";
import {Link} from 'react-router-dom';
// import preloader from "./img/icon/preloader.svg";
import h3Logo from "./img/logo/h3_logo.png";
import thirdBanner from "./img/slider/third_banner_img.png";
import thirdAboutBanner from "./img/images/third_about_img.png";
import infoBoxHover from "./img/bg/my_info_box_hover.png";
import infoBoxAward from "./img/images/about_award.png";
import infoBoxHover1 from "./img/bg/my_info_box_hover.png";
import thirdAboutBannerShadow from "./img/images/third_about_img_shadow.png";
import gameGallery01 from "./img/images/game_gallery_01.png";
import gameGallery02 from "./img/images/game_gallery_02.png";
import gameGallery03 from "./img/images/game_gallery_03.png";
import gameGallery04 from "./img/images/game_gallery_04.png";
import clanLogo from "./img/images/clan_logo.png";
import matchBox from "./img/bg/my_match_box.png";
import myMatchBox from "./img/team/my_match_clan01.png";
import myMatchVS from "./img/team/match_vs02.png";
import myMatchClan from "./img/team/my_match_clan03.png";
import myMatchClan1 from "./img/team/match_vs02.png";
import myMatchClan2 from "./img/team/my_match_clan04.png";
import myMatchClan95 from "./img/team/my_match_clan05.png";
import myMatchClan05 from "./img/team/match_vs02.png";
import myMatchClan06 from "./img/team/my_match_clan06.png";
import donationImg from "./img/images/dontaion_img.png";
import teamImg from "./img/team/team_img01.png";
import teamImg2 from "./img/team/team_img02.png";
import teamImg3 from "./img/team/team_img03.png";
import teamImg4 from "./img/team/team_img04.png";
import brandLogo01 from "./img/brand/t_brand_logo01.png";
import brandLogo02 from "./img/brand/t_brand_logo02.png";
import brandLogo03 from "./img/brand/t_brand_logo03.png";
import brandLogo04 from "./img/brand/t_brand_logo04.png";
import brandLogo05 from "./img/brand/t_brand_logo05.png";
export default function home() {
    return (
        <div>
      <body>

{/* <!-- preloader --> */}
{/* <div id="preloader">
    <div id="loading-center">
        <div id="loading-center-absolute">
            <img src={preloader} alt=""/>
        </div>
    </div>
</div> */}
{/* <!-- preloader-end --> */}

{/* <!-- header-area --> */}
<header class="third-header-bg">
    <div class="bg"></div>
    <div class="container custom-container">
        <div class="header-top-area t-header-top-area d-none d-lg-block">
            <div class="row">
                <div class="col-sm-6">
                    <div class="header-top-social">
                        <ul>
                            <li>Follow</li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="header-top-login">
                        <ul>
                            <li><a href="#"><i class="far fa-edit"></i>Register</a></li>
                            <li class="or">or</li>
                            <li><a href="#"><i class="far fa-edit"></i>sign in</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="sticky-header">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="main-menu menu-style-two">
                        <nav>
                            <div class="logo d-block d-lg-none">
                                <a href="index-4.html"><img src={mainLogo} alt="Logoss"/></a>
                            </div>
                            
                            <div class="navbar-wrap d-none d-lg-flex">
                                <ul class="left">
                                
                                    {/* <li class="show"><a href="#">Home</a> */}
                                    <li class="show"><Link to="/"> Home </Link>
                                        {/* <ul class="submenu">
                                            <li><a href="index-2.html">Home One</a></li>
                                            <li class="active"><a href="index-3.html">Home Two</a></li>
                                            <li><a href="index-4.html">Home Three</a></li>
                                            <li><a href="index.html">Home Four</a></li>
                                            <li><a href="index-5.html">Home Five</a></li>
                                            <li><a href="index-6.html">Home Six</a></li>
                                            <li><a href="index-7.html">Home Seven</a></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="About"> About </Link></li>
                                    <li><Link to="Overview"> Overview </Link></li>
                                    <li><Link to="Community"> Community </Link></li>
                                    {/* <li><a href="about-us.html">About</a></li> */}
                                    {/* <li><a href="game-overview.html">Overview</a></li>
                                    <li><a href="community.html">Community</a></li> */}
                                </ul>
                                <div class="logo">
                                    <a href="index-3.html"><img src={h3Logo} alt="Logo"/></a>
                                </div>
                                <ul class="right">
                                    {/* <li><a href="#">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="upcoming-games.html">Upcoming Games</a></li>
                                            <li><a href="game-single.html">Game Single</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><a href="shop.html">Store</a></li> */}
                                    <li><Link to="Store"> Store </Link></li>
                                    <li><Link to="Blog"> Blog </Link></li>
                                    {/* <li><a href="#">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">News Page</a></li>
                                            <li><a href="blog-details.html">News Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="Contact"> Contact </Link></li>
                                    {/* <li><a href="contact.html">contact</a></li> */}
                                </ul>
                            </div>
                            <div class="header-action">
                                <ul>
                                    <li class="header-search"><a href="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="mobile-menu-wrap d-block d-lg-none">
                        <nav>
                            <div id="mobile-menu" class="navbar-wrap">
                                <ul>
                                    <li class="show"><a href="#">Home</a>
                                        <ul class="submenu">
                                            <li><a href="index-2.html">Home One</a></li>
                                            <li><a href="index-3.html">Home Two</a></li>
                                            <li><a href="index-4.html">Home Three</a></li>
                                            <li><a href="index.html">Home Four</a></li>
                                            <li><a href="index-5.html">Home Five</a></li>
                                            <li><a href="index-6.html">Home Six</a></li>
                                            <li><a href="index-7.html">Home Seven</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="game-overview.html">Overview</a></li>
                                    <li><a href="community.html">Community</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="upcoming-games.html">Upcoming Games</a></li>
                                            <li><a href="game-single.html">Game Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Store</a></li>
                                    <li><a href="#">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">News Page</a></li>
                                            <li><a href="blog-details.html">News Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact</a></li>
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
    <div class="header-bottom-bg"></div>
</header>
{/* <!-- header-area-end --> */}

{/* <!-- main-area --> */}
<main>

    {/* <!-- slider-area --> */}
    <section class="third-banner-bg">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="third-banner-img wow bounceInDown" data-wow-delay=".2s">
                        <img src={thirdBanner} alt=""/>
                    </div>
                    <div class="third-banner-content text-center wow bounceInUp" data-wow-delay=".2s">
                        <h2>iám stream<span>er</span></h2>
                        <h6>online streaming media</h6>
                        <a href="#" class="btn rotated-btn">buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- slider-area-end --> */}

    {/* <!-- third-about-area --> */}
    <section class="third-about-area third-about-bg pt-120 pb-90">
        <div class="container custom-container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-0 order-lg-2">
                    <div class="third-about-img text-right position-relative">
                        <img src={thirdAboutBanner} class="main-img" alt=""/>
                        <img src={thirdAboutBannerShadow} class="shadow" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="third-about-content">
                        <div class="third-title-style">
                            <h2>themebey<span>ond</span></h2>
                            <div class="inner">
                                <h2>skyward sword</h2>
                                <h6 class="vertical-title">themebeyond</h6>
                                <p>The Legend of Zelda: Skyward Sword is an action-adventure game developed and published by Nintendo for the Wii. The six
                                teenth mainline entry in The Legend of Zelda series.</p>
                            </div>
                            <a href="#" class="btn rotated-btn">buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="see-my-info-wrap pt-110">
                <div class="row">
                    <div class="col-12">
                        <div class="third-section-title text-center mb-75">
                            <h2>see <span>my</span> information</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-4 col-lg-6 col-sm-8">
                        <div class="my-info-box mb-30">
                            <div class="my-info-box-top">
                                <h6>award winning</h6>
                                <img src={infoBoxHover1} alt="" class="info-box-top-hover"/>
                            </div>
                            <div class="my-info-box-content">
                                <div class="mt-award">
                                    <img src={infoBoxAward}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-sm-8">
                        <div class="my-info-box mb-30">
                            <div class="my-info-box-top">
                                <h6>join our team</h6>
                                <img src={infoBoxHover} alt="" class="info-box-top-hover"/>
                            </div>
                            <div class="my-info-box-content">
                                <div class="my-info-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-steam-symbol"></i> STEAM</a></li>
                                        <li><a href="#"><i class="fab fa-facebook-square"></i> Facebook</a></li>
                                        <li><a href="#"><i class="fab fa-twitter-square"></i> Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-sm-8">
                        <div class="my-info-box mb-30">
                            <div class="my-info-box-top">
                                <h6>clan members</h6>
                                <img src={infoBoxHover1} alt="" class="info-box-top-hover"/>
                            </div>
                            <div class="my-info-box-content">
                                <div class="my-clan-wrap">
                                    <div class="clan-logo">
                                        <img src={clanLogo} alt=""/>
                                    </div>
                                    <div class="my-clan-info">
                                        <h4><span>75+</span> members</h4>
                                        <span>active Members</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- third-about-area-end --> */}

    {/* <!-- game-gallery-area --> */}
    <div class="game-gallery-area position-relative">
        <div class="game-gallery-bg"></div>
        <div class="container-fluid p-0 fix">
            <div class="row game-gallery-active">
                <div class="col-12">
                    <div class="game-gallery-item">
                        <img src={gameGallery01}  alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="game-gallery-item">
                        <img src={gameGallery02}  alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="game-gallery-item">
                        <img src={gameGallery03}  alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="game-gallery-item">
                        <img src={gameGallery04} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-nav"></div>
    </div>
    {/* <!-- game-gallery-area-end --> */}

    {/* <!-- my-match-area --> */}
    <section class="my-match-area my-match-bg pb-120">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="third-section-title text-center mb-75">
                        <h2>see <span>my</span> MATCHES</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="my-match-wrap">
                        <div class="my-match-box-wrap wow fadeInDown" data-wow-delay=".2s">
                            <img src={matchBox} alt="" class="match-box-bg"/>
                            <ul>
                                <li>
                                    <div class="my-match-team">
                                        <div class="team-one">
                                            <a href="#"><img src={myMatchBox} alt=""/></a>
                                        </div>
                                        <div class="vs">
                                            <img src={myMatchBox}  alt=""/>
                                        </div>
                                        <div class="team-one">
                                            <a href="#"><img  src={myMatchVS} alt=""/></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="my-match-info">
                                        <a href="https://www.twitch.tv/shroud" target="_blank" class="live-btn">Live MATCHES</a>
                                        <h5>skyward sword</h5>
                                        <span>10th Mar 2020.</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="https://www.twitch.tv/shroud" target="_blank" class="watch-stream"><i class="fas fa-podcast"></i> watch stream</a>
                                </li>
                            </ul>
                        </div>
                        <div class="my-match-box-wrap wow fadeInDown" data-wow-delay=".4s">
                            <img src={matchBox} alt="" class="match-box-bg"/>
                            <ul>
                                <li>
                                    <div class="my-match-team">
                                        <div class="team-one">
                                            <a href="#"><img src={myMatchClan} alt=""/></a>
                                        </div>
                                        <div class="vs">
                                            <img src={myMatchClan1} alt=""/>
                                        </div>
                                        <div class="team-one">
                                            <a href="#"><img src={myMatchClan2}  alt=""/></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="my-match-info">
                                        <a href="https://www.twitch.tv/shroud" target="_blank" class="live-btn">Live MATCHES</a>
                                        <h5>Call Of Duty Mascot</h5>
                                        <span>10th Mar 2020.</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="https://www.twitch.tv/shroud" target="_blank" class="watch-stream"><i class="fas fa-podcast"></i> watch stream</a>
                                </li>
                            </ul>
                        </div>
                        <div class="my-match-box-wrap wow fadeInDown" data-wow-delay=".6s">
                            <img src={matchBox} alt="" class="match-box-bg"/>
                            <ul>
                                <li>
                                    <div class="my-match-team">
                                        <div class="team-one">
                                            <a href="#"><img src={myMatchClan95} alt=""/></a>
                                        </div>
                                        <div class="vs">
                                            <img src={myMatchClan05} alt=""/>
                                        </div>
                                        <div class="team-one">
                                            <a href="#"><img src={myMatchClan06} alt=""/></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="my-match-info">
                                        <a href="https://www.twitch.tv/shroud" target="_blank" class="live-btn">Live MATCHES</a>
                                        <h5>Counter Strike Mascot</h5>
                                        <span>10th Mar 2020.</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="https://www.twitch.tv/shroud" target="_blank" class="watch-stream"><i class="fas fa-podcast"></i> watch stream</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- my-match-area-end --> */}

    {/* <!-- donation-area --> */}
    <section class="donation-area donation-bg fix pt-65">
        <div class="container custom-container">
            <div class="donation-wrap">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-7">
                        <div class="donation-content">
                            <div class="third-title-style">
                                <h2>themebey<span>ond</span></h2>
                                <div class="inner">
                                    <h2>WORLDS MEET REAL</h2>
                                    <h6 class="vertical-title">donation</h6>
                                    <p>The Legend of Zelda: Skyward Sword is an action-adventure game developed and publish game real.</p>
                                </div>
                                <a href="#" class="btn rotated-btn">buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5">
                        <div class="donation-img text-center">
                            <img src={donationImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- donation-area-end --> */}

    {/* <!-- team-area --> */}
    <section class="team-area team-bg">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="third-section-title text-center mb-60">
                        <h2>MEET <span>OUR</span> TEAM</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="third-team-item text-center mb-30">
                        <div class="third-team-img">
                            <img src={teamImg} alt=""/>
                        </div>
                        <div class="third-team-content">
                            <div class="main-bg"></div>
                            <div class="hover-bg"></div>
                            <h5><a href="#">Jannie Visscher</a></h5>
                            <span>weapon master</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="third-team-item text-center mb-30">
                        <div class="third-team-img">
                            <img src={teamImg2} alt=""/>
                        </div>
                        <div class="third-team-content">
                            <div class="main-bg"></div>
                            <div class="hover-bg"></div>
                            <h5><a href="#">warren buffett</a></h5>
                            <span>team leader</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="third-team-item text-center mb-30">
                        <div class="third-team-img">
                            <img  src={teamImg3}  alt=""/>
                        </div>
                        <div class="third-team-content">
                            <div class="main-bg"></div>
                            <div class="hover-bg"></div>
                            <h5><a href="#">anne hathaway</a></h5>
                            <span>weapon master</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                    <div class="third-team-item text-center mb-30">
                        <div class="third-team-img">
                            <img src={teamImg4} alt=""/>
                        </div>
                        <div class="third-team-content">
                            <div class="main-bg"></div>
                            <div class="hover-bg"></div>
                            <h5><a href="#">poll worker</a></h5>
                            <span>team member</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- team-area-end --> */}

    {/* <!-- contact-area --> */}
    <section class="contact-area third-contact-bg">
        <div class="container custom-container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="third-contact-wrap">
                        <div class="third-title-style">
                            <h2>contact<span>us</span></h2>
                            <div class="inner">
                                <h2>MEET oue team</h2>
                                <h6 class="vertical-title">donation</h6>
                                <ul>
                                    <li><span>our location :</span> Central Park Roselle W78 New Jersey</li>
                                    <li><span>Phone :</span> + 97 325 6254 324</li>
                                </ul>
                            </div>
                            <a href="#" class="btn rotated-btn">buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <form action="#" class="third-contact-form">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" placeholder="Your Name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Your Phone"/>
                            </div>
                        </div>
                        <textarea name="message" id="message" placeholder="Wight Message"></textarea>
                        <button class="btn rotated-btn">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- contact-area-end --> */}

    {/* <!-- brand-area --> */}
    <div class="brand-area t-brand-bg">
        <div class="container custom-container">
            <div class="row s-brand-active">
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo01} alt="" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo02} alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo02} alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo04} alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo05} alt=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="t-brand-item">
                        <img src={brandLogo03} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- brand-area-end --> */}

</main>
{/* <!-- main-area-end --> */}

{/* <!-- footer-area --> */}
<footer>
    <div class="footer-top footer-bg third-footer-bg">
        <div class="container custom-container">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <div class="footer-widget mb-50">
                        <div class="logo mb-35">
                            <a href="index-3.html"><img src="img/logo/f_logo.png" alt=""/></a>
                        </div>
                        <div class="fw-text">
                            <p>The Legend of Zelda: Skyward Sword is an action-adventure gam developed
                            publish game real. was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            <div class="fw-social">
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-5">
                    <div class="footer-widget text-right mb-50">
                        <div class="fw-title mb-35">
                            <h3>Quick <span>Link</span></h3>
                        </div>
                        <div class="fw-quick-link">
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy & Police</a></li>
                                <li><a href="#">Our Gallery</a></li>
                                <li><a href="#">Donations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-wrap third-copyright-wrap">
        <div class="container custom-container">
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

</body>

        </div>
    )
}
