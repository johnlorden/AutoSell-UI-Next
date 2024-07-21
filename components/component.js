import React from 'react'

import PropTypes from 'prop-types'

import AccountSocialFriendRequest from './account-social-friend-request'

const AppComponent = (props) => {
  return (
    <>
      <div
        className={`app-component-container sidebar ${props.rootClassName} `}
      >
        <div className="app-component-container1">
          <h3 className="HeadingColored">
            {props.heading ?? (
              <fragment>
                <span>Announcements</span>
              </fragment>
            )}
          </h3>
          <div className="app-component-container2">
            <div
              data-thq="slider"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="false"
              data-loop="true"
              data-disable-autoplay-on-interaction="false"
              data-pause-autoplay-on-mouse-enter="true"
              data-autoplay-delay="3500"
              className="app-component-slider"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="app-component-slider-slide swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="app-component-slider-slide1 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="app-component-slider-slide2 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="app-component-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
                className="app-component-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="app-component-slider-button-next swiper-button-next"
              ></div>
            </div>
          </div>
        </div>
        <div className="app-component-container3">
          <h3 className="HeadingColored">
            {props.heading1 ?? (
              <fragment>
                <span>Friend Request</span>
              </fragment>
            )}
          </h3>
          <div className="app-component-container4">
            <AccountSocialFriendRequest
              rootClassName="account-social-friend-request-root-class-name"
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
            ></AccountSocialFriendRequest>
            <AccountSocialFriendRequest
              rootClassName="account-social-friend-request-root-class-name1"
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
            ></AccountSocialFriendRequest>
            <AccountSocialFriendRequest
              rootClassName="account-social-friend-request-root-class-name2"
              DeclineButton={
                <fragment>
                  <span>Decline</span>
                </fragment>
              }
            ></AccountSocialFriendRequest>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-component-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            z-index: 100;
            position: fixed;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-container1 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-container2 {
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
          .app-component-slider {
            flex: 1;
            width: 274px;
            height: auto;
            overflow: hidden;
            object-fit: cover;
            aspect-ratio: 16/9;
            border-radius: 10px;
          }
          .app-component-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .app-component-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .app-component-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .app-component-slider-pagination {
            display: none;
          }
          .app-component-slider-button-prev {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
          .app-component-slider-button-next {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
          .app-component-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-container4 {
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

AppComponent.defaultProps = {
  heading: undefined,
  heading1: undefined,
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AppComponent
