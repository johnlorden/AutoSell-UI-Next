import React from 'react'
import Head from 'next/head'

import Account from '../components/account'

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <Head>
          <title>Search - AutoSell UI</title>
          <meta property="og:title" content="Search - AutoSell UI" />
        </Head>
        <div className="search-container1">
          <div className="search-container2">
            <div className="search-container3">
              <img
                alt="image"
                src="/autosell%20icon.svg"
                className="search-image"
              />
              <img
                alt="image"
                src="/external/autosell.io%20-%20logo%20text-200h-200h.png"
                className="search-image1"
              />
              <div className="search-search-bar">
                <button
                  id="Search-Button"
                  name="Search-Button"
                  type="submit"
                  className="search-search-button search"
                >
                  <svg viewBox="0 0 1024 1024" className="search-icon">
                    <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                  <span className="search-text">
                    <span>Search</span>
                    <br></br>
                  </span>
                </button>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="search-textinput input"
                />
              </div>
            </div>
          </div>
          <div className="search-container4">
            <Account
              text={
                <fragment>
                  <span className="search-text03">Notification Title</span>
                </fragment>
              }
              text1={
                <fragment>
                  <span className="search-text04">Notification Title</span>
                </fragment>
              }
              text2={
                <fragment>
                  <span className="search-text05">Notifications</span>
                </fragment>
              }
              button={
                <fragment>
                  <span>Let&apos;s Automate!</span>
                </fragment>
              }
              text21={
                <fragment>
                  <span className="search-text07">Messages</span>
                </fragment>
              }
              button1={
                <fragment>
                  <span>Button</span>
                </fragment>
              }
              heading={
                <fragment>
                  <span className="Announcement-Text">Announcements</span>
                </fragment>
              }
              text211={
                <fragment>
                  <span className="search-text10">Messages</span>
                </fragment>
              }
              planName="Plan Name"
              UserFullName={
                <fragment>
                  <span className="Announcement-Text">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullName="Full Name"
              rootClassName="account-root-class-name2"
              UserRecentMessage={
                <fragment>
                  <span>
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullNameMessageList1={
                <fragment>
                  <span className="search-text17">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullNameMessageList2={
                <fragment>
                  <span className="search-text20">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullNameMessageList3={
                <fragment>
                  <span className="search-text23">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullNameMessageList21={
                <fragment>
                  <span className="search-text26">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              userFullNameMessageList22={
                <fragment>
                  <span className="search-text29">
                    <span>UserFullName</span>
                    <br></br>
                  </span>
                </fragment>
              }
              conversationRecentMessage1={
                <fragment>
                  <span className="search-text32">
                    <span>RecentMessage</span>
                    <br></br>
                  </span>
                </fragment>
              }
              conversationRecentMessage2={
                <fragment>
                  <span className="search-text35">
                    <span>RecentMessage</span>
                    <br></br>
                  </span>
                </fragment>
              }
              conversationRecentMessage3={
                <fragment>
                  <span className="search-text38">
                    <span>RecentMessage</span>
                    <br></br>
                  </span>
                </fragment>
              }
              conversationRecentMessage21={
                <fragment>
                  <span className="search-text41">
                    <span>RecentMessage</span>
                    <br></br>
                  </span>
                </fragment>
              }
              conversationRecentMessage22={
                <fragment>
                  <span className="search-text44">
                    <span>RecentMessage</span>
                    <br></br>
                  </span>
                </fragment>
              }
            ></Account>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .search-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .search-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .search-container2 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .search-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .search-image {
            width: auto;
            display: none;
            min-width: auto;
            min-height: 30px;
            object-fit: cover;
          }
          .search-image1 {
            width: 200px;
            object-fit: cover;
          }
          .search-search-bar {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            justify-content: center;
          }
          .search-search-button {
            gap: var(--dl-space-space-halfunit);
            right: 5px;
            width: auto;
            padding-left: 6px;
            padding-right: 6px;
          }
          .search-icon {
            width: 24px;
            height: 24px;
            display: none;
          }
          .search-textinput {
            width: 100%;
            height: 40px;
            max-width: 100%;
            min-width: 40px;
            transition: 0.3s;
            border-color: var(--dl-color-nav-elementactive);
            border-radius: 15px;
          }
          .search-textinput:focus {
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            background-color: var(--dl-color-nav-navactive);
          }
          .search-textinput:hover {
            background-color: var(--dl-color-nav-navactive);
          }
          .search-container4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .search-text03 {
            width: 1200px;
            height: var(--dl-size-size-xsmall);
            font-size: 16px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
          }
          .search-text04 {
            width: 1200px;
            height: var(--dl-size-size-xsmall);
          }
          .search-text05 {
            width: 100%;
            font-style: normal;
            text-align: left;
            font-weight: 700;
          }
          .search-text07 {
            width: auto;
            text-align: left;
          }
          .search-text10 {
            width: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
          }
          .search-text17 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
          .search-text20 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
          .search-text23 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
          .search-text26 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
          .search-text29 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
          }
          .search-text32 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .search-text35 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .search-text38 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .search-text41 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .search-text44 {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 1600px) {
            .search-container3 {
              width: auto;
            }
            .search-image {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .search-container3 {
              width: auto;
            }
            .search-image {
              display: flex;
            }
            .search-image1 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .search-container1 {
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .search-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .search-container3 {
              width: 100%;
              justify-content: flex-start;
            }
            .search-icon {
              display: flex;
            }
            .search-text {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .search-icon {
              display: flex;
            }
            .search-text {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Search
