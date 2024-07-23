import React from 'react'

import PropTypes from 'prop-types'

import AccountProfileOnly from './account-profile-only'

const MessageList = (props) => {
  return (
    <>
      <div className="message-list-message-list">
        <AccountProfileOnly
          containerUrl={props.userProfileUrl}
          rootClassName="account-profile-only-root-class-name1"
          profileImageSrc={props.componentProfileImageSrc}
          imageProfileImageSrc={props.userImageProfileImageSrc1}
          imageImageProfileImageSrc={props.componentImageImageProfileImageSrc}
        ></AccountProfileOnly>
        <div className="message-list-container">
          <h4>
            {props.userFullNameMessageList ?? (
              <fragment>
                <span className="message-list-text5">
                  <span>UserFullName</span>
                  <br></br>
                </span>
              </fragment>
            )}
          </h4>
          <h4 className="message-list-text1">
            {props.conversationRecentMessage ?? (
              <fragment>
                <span className="message-list-text2">
                  <span>RecentMessage</span>
                  <br></br>
                </span>
              </fragment>
            )}
          </h4>
        </div>
      </div>
      <style jsx>
        {`
          .message-list-message-list {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .message-list-container {
            gap: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .message-list-text1 {
            font-style: normal;
            font-weight: 400;
          }
          .message-list-text2 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .message-list-text5 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
        `}
      </style>
    </>
  )
}

MessageList.defaultProps = {
  userImageProfileImageSrc1: '',
  componentImageImageProfileImageSrc: '',
  componentImageProfileImageSrc: '',
  userProfileUrl: '',
  conversationRecentMessage: undefined,
  componentProfileImageSrc: '',
  userFullNameMessageList: undefined,
}

MessageList.propTypes = {
  userImageProfileImageSrc1: PropTypes.string,
  componentImageImageProfileImageSrc: PropTypes.string,
  componentImageProfileImageSrc: PropTypes.string,
  userProfileUrl: PropTypes.string,
  conversationRecentMessage: PropTypes.element,
  componentProfileImageSrc: PropTypes.string,
  userFullNameMessageList: PropTypes.element,
}

export default MessageList
