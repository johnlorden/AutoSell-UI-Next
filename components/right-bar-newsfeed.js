import React from 'react'

import PropTypes from 'prop-types'

import AccountSocialFriendRequest from './account-social-friend-request'

const RightBarNewsfeed = (props) => {
  return (
    <>
      <div
        className={`right-bar-newsfeed-container sidebar ${props.rootClassName} `}
      >
        <div className="right-bar-newsfeed-container1">
          <h3 className="HeadingColored">
            {props.heading ?? (
              <fragment>
                <span>Announcements</span>
              </fragment>
            )}
          </h3>
          <div className="right-bar-newsfeed-container2">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="false"
              data-autoplay-delay="3500"
              data-pause-autoplay-on-mouse-enter="true"
              data-disable-autoplay-on-interaction="false"
              className="right-bar-newsfeed-slider"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="right-bar-newsfeed-slider-slide swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="right-bar-newsfeed-slider-slide1 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="right-bar-newsfeed-slider-slide2 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="right-bar-newsfeed-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="right-bar-newsfeed-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="right-bar-newsfeed-slider-button-next swiper-button-next"
              ></div>
            </div>
          </div>
        </div>
        <div className="right-bar-newsfeed-container3">
          <h3 className="HeadingColored">
            {props.heading1 ?? (
              <fragment>
                <span>Friend Request</span>
              </fragment>
            )}
          </h3>
          <div className="right-bar-newsfeed-container4">
            <AccountSocialFriendRequest
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
              rootClassName="account-social-friend-request-root-class-name"
            ></AccountSocialFriendRequest>
            <AccountSocialFriendRequest
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
              rootClassName="account-social-friend-request-root-class-name1"
            ></AccountSocialFriendRequest>
            <AccountSocialFriendRequest
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
              rootClassName="account-social-friend-request-root-class-name2"
            ></AccountSocialFriendRequest>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .right-bar-newsfeed-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            z-index: 100;
            position: fixed;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .right-bar-newsfeed-container1 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .right-bar-newsfeed-container2 {
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .right-bar-newsfeed-slider {
            flex: 1;
            width: 274px;
            height: auto;
            overflow: hidden;
            object-fit: cover;
            aspect-ratio: 16/9;
            border-radius: 10px;
          }
          .right-bar-newsfeed-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .right-bar-newsfeed-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .right-bar-newsfeed-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .right-bar-newsfeed-slider-pagination {
            display: none;
          }
          .right-bar-newsfeed-slider-button-prev {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
          .right-bar-newsfeed-slider-button-next {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
          .right-bar-newsfeed-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .right-bar-newsfeed-container4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

RightBarNewsfeed.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  heading: undefined,
}

RightBarNewsfeed.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
}

export default RightBarNewsfeed
