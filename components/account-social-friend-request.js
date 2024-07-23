import React, { useState } from 'react'

import PropTypes from 'prop-types'

const AccountSocialFriendRequest = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <>
      <div
        className={`account-social-friend-request-container ${props.rootClassName} `}
      >
        <a
          href={props.profileUrl}
          className="account-social-friend-request-link"
        >
          <img
            id={props.userID}
            alt={props.profileImageSrc}
            src={props.profileImageSrc}
            className="Profile"
          />
        </a>
        <div className="account-social-friend-request-container1">
          <div className="account-social-friend-request-container2">
            <div className="account-social-friend-request-container3">
              {verified && (
                <img
                  id="Verified-Badge"
                  alt="image"
                  src="/verified-badge.svg"
                  loading="lazy"
                  className="Badge-Verified"
                />
              )}
              <h1 id="User Full Name" className="UserFullName">
                {props.userFullName}
              </h1>
            </div>
          </div>
          <div className="account-social-friend-request-container4">
            <button
              name="AcceptFriendRequest"
              type="button"
              RequestFrom={props.userID}
              className="account-social-friend-request-button button"
            >
              <span>Accept</span>
            </button>
            <button
              name="DeclineFriendRequest"
              type="button"
              RequestFrom={props.userID}
              className="account-social-friend-request-button1 button"
            >
              <span>Decline</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .account-social-friend-request-container {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .account-social-friend-request-link {
            display: contents;
          }
          .account-social-friend-request-container1 {
            gap: 10px;
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .account-social-friend-request-container2 {
            gap: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .account-social-friend-request-container3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .account-social-friend-request-container4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .account-social-friend-request-button {
            fill: var(--dl-color-maincolors-white);
            color: var(--dl-color-maincolors-white);
            padding-top: 0.4rem;
            padding-left: 1.3rem;
            border-radius: 7px;
            padding-right: 1.3rem;
            padding-bottom: 0.4rem;
            background-color: var(--dl-color-nav-elementactive);
          }
          .account-social-friend-request-button1 {
            fill: var(--dl-color-maincolors-black);
            color: var(--dl-color-maincolors-black);
            padding-top: 0.4rem;
            padding-left: 1.3rem;
            border-radius: 7px;
            padding-right: 1.3rem;
            padding-bottom: 0.4rem;
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  )
}

AccountSocialFriendRequest.defaultProps = {
  rootClassName: '',
  userFullName: 'Full Name',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  profileUrl: 'https://www.teleporthq.io',
  userID: '',
}

AccountSocialFriendRequest.propTypes = {
  rootClassName: PropTypes.string,
  userFullName: PropTypes.string,
  profileImageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  profileUrl: PropTypes.string,
  userID: PropTypes.string,
}

export default AccountSocialFriendRequest
