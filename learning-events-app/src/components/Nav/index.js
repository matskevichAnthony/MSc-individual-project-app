import React, { useEffect } from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            console.log("lol")
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () { animation(); }, 500);
        });

    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">

            <Link className="navbar-brand navbar-logo" to="/" exact>
                Web Solutions
            </Link>


            <button
                className="navbar-toggler"
                onClick={function () {
                    setTimeout(function () { animation(); });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div
                className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/" exact>
                            <i
                                className="fas fa-map-marked-alt">
                            </i>Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/events" exact>
                            <i
                                className="far fa-calendar-alt">
                            </i>Events
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/settings" exact>
                            <i
                                className="fas fa-cog">
                            </i>Settings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user" exact>
                            <i
                                className="fas fa-user">
                            </i>User
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;