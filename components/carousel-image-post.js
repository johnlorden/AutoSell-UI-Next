import React, { useState } from 'react'

import PropTypes from 'prop-types'

import AccountSocial from './account-social'
import Hashtag from './hashtag'
import Mention from './mention'

const CarouselImagePost = (props) => {
  const [more, setMore] = useState(false)
  return (
    <>
      <div id={props.postId} className={`Post ${props.rootClassName} `}>
        <div className="carousel-image-post-container1">
          {more && (
            <div className="carousel-image-post-container2 MoreActions">
              <button
                id="ReportPostButton"
                name="ReportPostButton"
                type="button"
                ReportPostID={props.postId1}
                className="carousel-image-post-button"
              >
                <span>
                  {props.button ?? (
                    <fragment>
                      <span>Report Post</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          )}
          <AccountSocial
            imageAlt
            userFullName={props.userFullName}
            rootClassName="account-social-root-class-name6"
            profileImageSrc={props.profileImageSrc}
          ></AccountSocial>
          {!more && (
            <svg
              viewBox="0 0 1024 1024"
              onClick={() => setMore(true)}
              className="subactions"
            >
              <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
            </svg>
          )}
          {more && (
            <svg
              id="Close"
              viewBox="0 0 1024 1024"
              onClick={() => setMore(false)}
              className="subactions"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          )}
        </div>
        <div className="carousel-image-post-container3">
          <span id="Caption">
            {props.text ?? (
              <fragment>
                <span>Text</span>
              </fragment>
            )}
          </span>
          <Hashtag></Hashtag>
          <Mention rootClassName="mention-root-class-name7"></Mention>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="carousel-image-post-carousel swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="carousel-image-post-image-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="carousel-image-post-image-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="carousel-image-post-image-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="carousel-image-post-carousel-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
            className="carousel-image-post-carousel-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="carousel-image-post-carousel-button-next swiper-button-next"
          ></div>
        </div>
        <div className="carousel-image-post-container4">
          <button
            type="button"
            className="carousel-image-post-button1 PostAction"
          >
            <svg
              id="Like"
              viewBox="0 0 1024 1024"
              className="carousel-image-post-icon04"
            >
              <path d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"></path>
            </svg>
            <span id="LikeCount" className="carousel-image-post-text02">
              {props.likeCount ?? (
                <fragment>
                  <span>0</span>
                </fragment>
              )}
            </span>
          </button>
          <button type="button" className="PostAction">
            <svg viewBox="0 0 1024 1024" className="carousel-image-post-icon06">
              <path d="M938 170v768l-170-170h-598q-34 0-59-26t-25-60v-512q0-34 25-59t59-25h684q34 0 59 25t25 59z"></path>
            </svg>
            <span id="CommentCount" className="carousel-image-post-text03">
              {props.commentCount ?? (
                <fragment>
                  <span>0</span>
                </fragment>
              )}
            </span>
          </button>
          <div className="carousel-image-post-container5">
            <input
              type="text"
              id={props.textinputId}
              name="Comment"
              placeholder="placeholder"
              className="carousel-image-post-textinput"
            />
            <button type="button" className="CommentButton">
              <span>
                {props.text3 ?? (
                  <fragment>
                    <span>Send</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
          <button
            id="CopyLink"
            type="button"
            className="carousel-image-post-button4 SingleActionPost"
          >
            <svg viewBox="0 0 1024 1024" className="carousel-image-post-icon08">
              <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
            </svg>
          </button>
          <button type="button" className="SingleActionPost">
            <svg viewBox="0 0 1024 1024" className="carousel-image-post-icon10">
              <path d="M768 686q52 0 88 37t36 87q0 52-37 89t-87 37-87-37-37-89q0-20 2-28l-302-176q-38 34-88 34-52 0-90-38t-38-90 38-90 90-38q50 0 88 34l300-174q-4-20-4-30 0-52 38-90t90-38 90 38 38 90-38 90-90 38q-48 0-88-36l-300 176q4 20 4 30t-4 30l304 176q36-32 84-32z"></path>
            </svg>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .carousel-image-post-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .carousel-image-post-container2 {
            top: 40px;
            flex: 0 0 auto;
            right: 0px;
            width: 200px;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: absolute;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
            align-items: center;
            border-radius: 15px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .carousel-image-post-button {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .carousel-image-post-button:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: var(--dl-color-theme-primary2);
          }
          .carousel-image-post-button:active {
            transform: scale(0.95);
          }
          .carousel-image-post-container3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .carousel-image-post-carousel {
            width: 100%;
            height: 450px;
            display: inline-block;
            border-radius: 15px;
          }
          .carousel-image-post-image-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .carousel-image-post-image-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .carousel-image-post-image-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .carousel-image-post-carousel-pagination {
            display: block;
          }
          .carousel-image-post-carousel-button-prev {
            fill: var(--dl-color-profiles-profile-border);
            color: var(--dl-color-profiles-profile-border);
          }
          .carousel-image-post-carousel-button-next {
            fill: var(--dl-color-profiles-profile-border);
            color: var(--dl-color-profiles-profile-border);
          }
          .carousel-image-post-container4 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .carousel-image-post-button1 {
            gap: var(--dl-space-space-unit);
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .carousel-image-post-icon04 {
            width: 24px;
            height: 24px;
          }
          .carousel-image-post-text02 {
            align-self: center;
          }
          .carousel-image-post-icon06 {
            width: 24px;
            height: 24px;
          }
          .carousel-image-post-text03 {
            align-self: center;
          }
          .carousel-image-post-container5 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .carousel-image-post-textinput {
            width: 100%;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .carousel-image-post-button4 {
            transition: 0.3s;
          }
          .carousel-image-post-button4:hover {
            background-color: #d6d6d6;
          }
          .carousel-image-post-icon08 {
            width: 24px;
            height: 24px;
          }
          .carousel-image-post-icon10 {
            width: 24px;
            height: 24px;
          }
        `}
      </style>
    </>
  )
}

CarouselImagePost.defaultProps = {
  postId: '',
  textinputId: 'Comment-Bar',
  commentCount: undefined,
  text: undefined,
  postId1: '',
  profileImageSrc: '',
  likeCount: undefined,
  rootClassName: '',
  userFullName: 'Full Name',
  button: undefined,
  text3: undefined,
}

CarouselImagePost.propTypes = {
  postId: PropTypes.string,
  textinputId: PropTypes.string,
  commentCount: PropTypes.element,
  text: PropTypes.element,
  postId1: PropTypes.string,
  profileImageSrc: PropTypes.string,
  likeCount: PropTypes.element,
  rootClassName: PropTypes.string,
  userFullName: PropTypes.string,
  button: PropTypes.element,
  text3: PropTypes.element,
}

export default CarouselImagePost
