import React, { useState } from 'react'

import PropTypes from 'prop-types'

import AccountSocial from './account-social'
import Hashtag from './hashtag'
import Mention from './mention'

const SingleVideoPost = (props) => {
  const [more, setMore] = useState(false)
  return (
    <>
      <div id={props.postId} className="single-video-post-container Post">
        <div className="single-video-post-container1">
          {more && (
            <div className="single-video-post-container2">
              <button
                id="ReportPostButton"
                name="ReportPostButton"
                type="button"
                ReportPostID={props.postId1}
                className="single-video-post-button"
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
            rootClassName="account-social-root-class-name7"
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
        <div className="single-video-post-container3">
          <span id="Caption">
            {props.text ?? (
              <fragment>
                <span>Text</span>
              </fragment>
            )}
          </span>
          <Hashtag></Hashtag>
          <Mention rootClassName="mention-root-class-name8"></Mention>
        </div>
        <div id="Images" className="single-video-post-container4">
          <video
            src={props.videoSrc}
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="VideoPost PostImage"
          ></video>
        </div>
        <div className="single-video-post-container5">
          <button
            type="button"
            className="single-video-post-button1 PostAction"
          >
            <svg
              id="Like"
              viewBox="0 0 1024 1024"
              className="single-video-post-icon04"
            >
              <path d="M932 550l-114 262q-26 42-74 42h-346q-40 0-70-30t-30-70v-334q0-36 26-62l274-272 18 20q24 24 38 52 6 14 4 28l-40 198h236q34 0 59 26t25 60v46q0 18-6 34zM86 854v-470h84q18 0 31 12t13 30v384q0 18-13 31t-31 13h-84z"></path>
            </svg>
            <span id="LikeCount" className="single-video-post-text02">
              {props.likeCount ?? (
                <fragment>
                  <span>0</span>
                </fragment>
              )}
            </span>
          </button>
          <button type="button" className="PostAction">
            <svg viewBox="0 0 1024 1024" className="single-video-post-icon06">
              <path d="M938 170v768l-170-170h-598q-34 0-59-26t-25-60v-512q0-34 25-59t59-25h684q34 0 59 25t25 59z"></path>
            </svg>
            <span id="CommentCount" className="single-video-post-text03">
              {props.commentCount ?? (
                <fragment>
                  <span>0</span>
                </fragment>
              )}
            </span>
          </button>
          <div className="single-video-post-container6">
            <input
              type="text"
              id={props.textinputId}
              name="Comment"
              placeholder="placeholder"
              className="single-video-post-textinput"
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
            className="single-video-post-button4 SingleActionPost"
          >
            <svg viewBox="0 0 1024 1024" className="single-video-post-icon08">
              <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
            </svg>
          </button>
          <button type="button" className="SingleActionPost">
            <svg viewBox="0 0 1024 1024" className="single-video-post-icon10">
              <path d="M768 686q52 0 88 37t36 87q0 52-37 89t-87 37-87-37-37-89q0-20 2-28l-302-176q-38 34-88 34-52 0-90-38t-38-90 38-90 90-38q50 0 88 34l300-174q-4-20-4-30 0-52 38-90t90-38 90 38 38 90-38 90-90 38q-48 0-88-36l-300 176q4 20 4 30t-4 30l304 176q36-32 84-32z"></path>
            </svg>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .single-video-post-container {
            width: 100%;
          }
          .single-video-post-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            justify-content: space-between;
          }
          .single-video-post-container2 {
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
          .single-video-post-button {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .single-video-post-button:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
            background-color: var(--dl-color-theme-primary2);
          }
          .single-video-post-button:active {
            transform: scale(0.95);
          }
          .single-video-post-container3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .single-video-post-container4 {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .single-video-post-container5 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .single-video-post-button1 {
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
          .single-video-post-icon04 {
            width: 24px;
            height: 24px;
          }
          .single-video-post-text02 {
            align-self: center;
          }
          .single-video-post-icon06 {
            width: 24px;
            height: 24px;
          }
          .single-video-post-text03 {
            align-self: center;
          }
          .single-video-post-container6 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .single-video-post-textinput {
            width: 100%;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .single-video-post-button4 {
            transition: 0.3s;
          }
          .single-video-post-button4:hover {
            background-color: #d6d6d6;
          }
          .single-video-post-icon08 {
            width: 24px;
            height: 24px;
          }
          .single-video-post-icon10 {
            width: 24px;
            height: 24px;
          }
        `}
      </style>
    </>
  )
}

SingleVideoPost.defaultProps = {
  button: undefined,
  profileImageSrc: '',
  postId: '',
  text: undefined,
  likeCount: undefined,
  text3: undefined,
  textinputId: 'Comment-Bar',
  userFullName: 'Full Name',
  postId1: '',
  videoSrc: '',
  commentCount: undefined,
}

SingleVideoPost.propTypes = {
  button: PropTypes.element,
  profileImageSrc: PropTypes.string,
  postId: PropTypes.string,
  text: PropTypes.element,
  likeCount: PropTypes.element,
  text3: PropTypes.element,
  textinputId: PropTypes.string,
  userFullName: PropTypes.string,
  postId1: PropTypes.string,
  videoSrc: PropTypes.string,
  commentCount: PropTypes.element,
}

export default SingleVideoPost
