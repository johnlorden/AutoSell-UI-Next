import React, { useState } from 'react'

import PropTypes from 'prop-types'

const WhatsOnYourMind = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <>
      <div id={props.postId} className="Post">
        <div className="whats-on-your-mind-container1">
          <span>Hey</span>
          <div className="whats-on-your-mind-container2">
            <span className="whats-on-your-mind-text01">
              {props.text41 ?? (
                <fragment>
                  <span className="whats-on-your-mind-text14">Name</span>
                </fragment>
              )}
            </span>
            <span>
              {props.text42 ?? (
                <fragment>
                  <span>,</span>
                </fragment>
              )}
            </span>
          </div>
          <span>What&apos;s On Your Mind?</span>
        </div>
        <div className="whats-on-your-mind-container3">
          <div className="whats-on-your-mind-container4">
            <img
              alt={props.profileImageSrc}
              src={props.profileImageSrc}
              profileImageSrc={props.imageProfileImageSrc}
              className="Profile"
            />
            {verified && (
              <img
                id="Verified-Badge"
                alt="image"
                src="/verified-badge.svg"
                loading="lazy"
                className="whats-on-your-mind-image1 Badge-Verified"
              />
            )}
          </div>
          <div className="whats-on-your-mind-container5">
            <input
              type="text"
              id={props.textinputId}
              name="Post"
              placeholder="What's On your Mind?"
              className="whats-on-your-mind-textinput"
            />
            <button type="button" className="CommentButton">
              <span>
                {props.text3 ?? (
                  <fragment>
                    <span>Post</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="whats-on-your-mind-container6">
          <button
            type="button"
            className="whats-on-your-mind-button1 PostAction Create-Action"
          >
            <svg
              id="Like"
              viewBox="0 0 1024 1024"
              className="whats-on-your-mind-icon"
            >
              <path d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"></path>
            </svg>
            <span id="LikeCount" className="whats-on-your-mind-text05">
              Live Stream
            </span>
          </button>
          <button type="button" className="PostAction Create-Action">
            <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon2">
              <path d="M298 640h598l-150-192-106 128-150-192zM938 170q34 0 60 26t26 60v426q0 34-26 60t-60 26h-682q-34 0-60-26t-26-60l2-512q0-34 25-59t59-25h256l86 84h340zM86 256v598h768v84h-768q-34 0-60-25t-26-59v-598h86z"></path>
            </svg>
            <span id="CommentCount" className="whats-on-your-mind-text06">
              Media
            </span>
          </button>
          {verified && (
            <button type="button" className="Create-Action">
              <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon4">
                <path d="M768 256h170v470h-170v-470zM86 726v-470h170v470h-170zM298 810v-640h428v640h-428z"></path>
              </svg>
              <span id="CommentCount" className="whats-on-your-mind-text07">
                Carousel
              </span>
            </button>
          )}
          <button type="button" className="Create-Action">
            <svg viewBox="0 0 1024 1024" className="whats-on-your-mind-icon6">
              <path d="M512 342h64v180l150 90-32 52-182-110v-212zM554 128q158 0 271 112t113 272-113 272-271 112q-66 0-145-33t-125-79l60-62q88 88 210 88 124 0 212-87t88-211-88-211-212-87-211 87-87 211h128l-172 172-4-6-166-166h128q0-160 113-272t271-112z"></path>
            </svg>
            <span id="CommentCount" className="whats-on-your-mind-text08">
              Story
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .whats-on-your-mind-container1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .whats-on-your-mind-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .whats-on-your-mind-text01 {
            font-style: normal;
            font-weight: bold;
          }
          .whats-on-your-mind-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .whats-on-your-mind-container4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .whats-on-your-mind-image1 {
            right: 0px;
            bottom: -25px;
            margin: auto;
          }
          .whats-on-your-mind-container5 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .whats-on-your-mind-textinput {
            width: 100%;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .whats-on-your-mind-container6 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .whats-on-your-mind-button1 {
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
          .whats-on-your-mind-icon {
            width: 24px;
            height: 24px;
          }
          .whats-on-your-mind-text05 {
            align-self: center;
          }
          .whats-on-your-mind-icon2 {
            width: 24px;
            height: 24px;
          }
          .whats-on-your-mind-text06 {
            align-self: center;
          }
          .whats-on-your-mind-icon4 {
            width: 24px;
            height: 24px;
          }
          .whats-on-your-mind-text07 {
            align-self: center;
          }
          .whats-on-your-mind-icon6 {
            width: 24px;
            height: 24px;
          }
          .whats-on-your-mind-text08 {
            align-self: center;
          }
          .whats-on-your-mind-text14 {
            font-size: 18px;
          }
        `}
      </style>
    </>
  )
}

WhatsOnYourMind.defaultProps = {
  text1: undefined,
  rootClassName: '',
  text42: undefined,
  text21: undefined,
  text2: undefined,
  text3: undefined,
  textinputId: 'Comment-Bar',
  text41: undefined,
  text211: undefined,
  postId: '',
  rootClassName1: '',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageProfileImageSrc: '',
}

WhatsOnYourMind.propTypes = {
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  text42: PropTypes.element,
  text21: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  textinputId: PropTypes.string,
  text41: PropTypes.element,
  text211: PropTypes.element,
  postId: PropTypes.string,
  rootClassName1: PropTypes.string,
  profileImageSrc: PropTypes.string,
  imageProfileImageSrc: PropTypes.string,
}

export default WhatsOnYourMind
