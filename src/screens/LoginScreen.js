import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import React, { useEffect, useState } from "react";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

  return (
    <div className="loginScreen">
      {showSplash ? (
        <>
          {/* <iframe
            className="iframe-video"
            width="100%"
            src="https://www.youtube.com/embed/GV3HUDMQ-F8?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow=" autoplay;"
            allowfullscreen
          ></iframe> */}
          <video width="100%" height="100%" controls autoPlay loop muted>
            <source src="/logo-animation.mp4" type="video/mp4" />
          </video>
        </>
      ) : (
        <>
          <div className="loginScreen-main">
            <div className="loginScreen-background">
              <img
                className="loginScreen-logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="logo"
              />
              <button
                className="loginScreen-button"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </button>
              <div className="loginScreen-gradient" />
            </div>
            <div className="loginScreen-body">
              {signIn ? (
                <SignUpScreen />
              ) : (
                <>
                  <h1>Unlimited movies, TV Shows and more.</h1>
                  <h2>Watch Anywhere.Cancel at any time.</h2>
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="loginScreen-inputContainer">
                    <form>
                      <input type="email" placeholder="Email address" />
                      <button
                        onClick={() => setSignIn(true)}
                        className="loginScreen-startButton"
                      >
                        Get Started{" "}
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <hr className="line" />
          <div className="loginScreen-row">
            <div className="row-text-container">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              className="row-image"
              alt="row"
            />
            <video width="470" className="row-video" autoPlay loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
          <hr className="line" />
          <div className="loginScreen-row">
            <div className="row-text-container1">
              <h1>Download your shows to watch offline.</h1>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              className="row-image1"
              alt="row"
            />
          </div>
          <hr className="line" />
          <div className="loginScreen-row">
            <div className="row-text-container">
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="row-video-image-container">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                className="row-image3"
                alt="row"
              />

              <video width="400" className="row-video2" autoPlay loop muted>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <hr className="line" />
          <div className="loginScreen-row">
            <div className="row-text-container1">
              <h1>Create profiles for children.</h1>
              <p>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <img
              src="https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              className="row-image1"
              alt="row"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default LoginScreen;
