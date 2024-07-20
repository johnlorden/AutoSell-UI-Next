import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import Account from '../components/account'
import Crumb from '../components/crumb'
import Story from '../components/story'
import WhatsOnYourMind from '../components/whats-on-your-mind'
import TextOnlyPost from '../components/text-only-post'
import CarouselImagePost from '../components/carousel-image-post'
import SingleImagePost from '../components/single-image-post'
import MultipleImagePost from '../components/multiple-image-post'
import Announcment from '../components/announcment'

const NewsFeed = (props) => {
  return (
    <>
      <div className="news-feed-container">
        <Head>
          <title>NewsFeed - AutoSell UI</title>
          <meta property="og:title" content="NewsFeed - AutoSell UI" />
        </Head>
        <div className="news-feed-container01">
          <Sidebar rootClassName="sidebar-root-class-name2"></Sidebar>
        </div>
        <div>
          <div className="news-feed-container03">
            <header
              data-thq="thq-navbar"
              className="news-feed-navbar-interactive"
            >
              <div data-thq="thq-burger-menu" className="news-feed-burger-menu">
                <svg viewBox="0 0 1024 1024" className="news-feed-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <h1 id="PageName" className="news-feed-text">
                <span className="news-feed-text01">Page Title</span>
                <br></br>
              </h1>
              <div data-thq="thq-mobile-menu" className="news-feed-mobile-menu">
                <Sidebar rootClassName="sidebar-root-class-name3"></Sidebar>
              </div>
            </header>
            <div className="news-feed-container04">
              <div id="Account" className="news-feed-account">
                <div id="Breadcrumbs" className="news-feed-container05">
                  <div className="news-feed-container06">
                    <svg
                      id="Notifications"
                      viewBox="0 0 1024 1024"
                      className="ActionIcon"
                    >
                      <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
                    </svg>
                    <svg
                      id="Messages"
                      viewBox="0 0 1024 1024"
                      className="news-feed-icon04 ActionIcon"
                    >
                      <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                    </svg>
                    <svg
                      id="Settings"
                      viewBox="0 0 1024 1024"
                      className="ActionIcon"
                    >
                      <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                    </svg>
                  </div>
                  <Account></Account>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed-dashboard">
            <div id="Breadcrumb" className="news-feed-breadcrumb">
              <svg
                id="HomeIcon"
                viewBox="0 0 1024 1024"
                className="news-feed-dash-icon"
              >
                <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
              </svg>
              <Crumb text1="Crumb"></Crumb>
              <Crumb></Crumb>
            </div>
            <div className="news-feed-container07">
              <div className="news-feed-news-feed">
                <div className="news-feed-container08">
                  <div id="Stories" className="news-feed-container09">
                    <div className="news-feed-container10">
                      <svg viewBox="0 0 1024 1024" className="news-feed-icon09">
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                    <Story></Story>
                  </div>
                  <WhatsOnYourMind
                    text1={
                      <fragment>
                        <span>Live Stream</span>
                      </fragment>
                    }
                    text2={
                      <fragment>
                        <span>Media</span>
                      </fragment>
                    }
                    text3={
                      <fragment>
                        <span>Post</span>
                      </fragment>
                    }
                    text21={
                      <fragment>
                        <span>Carousel</span>
                      </fragment>
                    }
                    text41={
                      <fragment>
                        <span className="news-feed-text07">Name</span>
                      </fragment>
                    }
                    text42={
                      <fragment>
                        <span>,</span>
                      </fragment>
                    }
                    text211={
                      <fragment>
                        <span id="Create-Story">Story</span>
                      </fragment>
                    }
                    rootClassName="whats-on-your-mind-root-class-name"
                  ></WhatsOnYourMind>
                  <TextOnlyPost
                    text={
                      <fragment>
                        <span>Text</span>
                      </fragment>
                    }
                    text3={
                      <fragment>
                        <span>Send</span>
                      </fragment>
                    }
                    button={
                      <fragment>
                        <span>Report Post</span>
                      </fragment>
                    }
                    likeCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    commentCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    rootClassName="text-only-post-root-class-name"
                  ></TextOnlyPost>
                  <CarouselImagePost
                    text={
                      <fragment>
                        <span>Text</span>
                      </fragment>
                    }
                    text3={
                      <fragment>
                        <span>Send</span>
                      </fragment>
                    }
                    button={
                      <fragment>
                        <span>Report Post</span>
                      </fragment>
                    }
                    likeCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    commentCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    rootClassName="carousel-image-post-root-class-name"
                  ></CarouselImagePost>
                  <SingleImagePost
                    text={
                      <fragment>
                        <span>Text</span>
                      </fragment>
                    }
                    text3={
                      <fragment>
                        <span>Send</span>
                      </fragment>
                    }
                    button={
                      <fragment>
                        <span>Report Post</span>
                      </fragment>
                    }
                    likeCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    commentCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    rootClassName="single-image-post-root-class-name"
                  ></SingleImagePost>
                  <MultipleImagePost
                    text={
                      <fragment>
                        <span>Text</span>
                      </fragment>
                    }
                    text3={
                      <fragment>
                        <span>Send</span>
                      </fragment>
                    }
                    button={
                      <fragment>
                        <span>Report Post</span>
                      </fragment>
                    }
                    likeCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    commentCount={
                      <fragment>
                        <span>0</span>
                      </fragment>
                    }
                    rootClassName="multiple-image-post-root-class-name"
                  ></MultipleImagePost>
                </div>
              </div>
              <div className="news-feed-right-side-actions">
                <Announcment></Announcment>
                <Announcment></Announcment>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .news-feed-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .news-feed-container01 {
            width: 20%;
            height: auto;
            display: flex;
            z-index: 100;
            max-width: 288px;
            min-width: 288px;
            align-items: center;
            flex-direction: row;
          }
          .news-feed-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 999;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .news-feed-navbar-interactive {
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            z-index: 100;
            max-width: 100%;
            min-width: auto;
            align-self: flex-end;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .news-feed-burger-menu {
            display: none;
          }
          .news-feed-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .news-feed-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .news-feed-container04 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .news-feed-account {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: Small;
            display: flex;
            max-width: 300px;
            align-items: center;
            justify-content: center;
          }
          .news-feed-container05 {
            gap: 20px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .news-feed-container06 {
            gap: 25px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .news-feed-icon04 {
            width: auto;
          }
          .news-feed-dashboard {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-feed-breadcrumb {
            gap: 15px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .news-feed-dash-icon {
            width: auto;
            height: 24px;
          }
          .news-feed-container07 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .news-feed-news-feed {
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .news-feed-container08 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .news-feed-container09 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 1000px;
            min-width: 100%;
            align-items: center;
            justify-content: flex-start;
          }
          .news-feed-container10 {
            width: 100px;
            height: 100px;
            display: flex;
            max-width: 100px;
            min-width: 100px;
            max-height: 100px;
            min-height: 100x;
            align-items: center;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              353.61deg,
              #86f2b1 -2.46%,
              #6932eb 40.1%,
              #6c29ca 96.52%
            );
          }
          .news-feed-icon09 {
            fill: #ffffff;
            width: auto;
            height: 30px;
          }
          .news-feed-text07 {
            font-size: 18px;
          }
          .news-feed-right-side-actions {
            gap: var(--dl-space-space-halfunit);
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 1600px) {
            .news-feed-container03 {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .news-feed-navbar-interactive {
              position: 0px;
              max-width: auto;
              min-width: auto;
              align-self: center;
            }
            .news-feed-container05 {
              align-self: center;
            }
            .news-feed-dashboard {
              height: auto;
              align-self: stretch;
            }
            .news-feed-news-feed {
              width: 100%;
            }
            .news-feed-container08 {
              width: 50%;
            }
            .news-feed-right-side-actions {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .news-feed-container03 {
              width: 913px;
              justify-content: space-between;
            }
            .news-feed-navbar-interactive {
              flex: 0 0 auto;
            }
            .news-feed-dashboard {
              width: 913px;
              height: auto;
              align-self: flex-start;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .news-feed-container07 {
              width: 80%;
              flex-direction: column-reverse;
            }
            .news-feed-news-feed {
              width: 100%;
            }
            .news-feed-container08 {
              width: 100%;
              align-items: flex-start;
            }
            .news-feed-right-side-actions {
              flex-direction: row;
            }
          }
          @media (max-width: 991px) {
            .news-feed-container01 {
              display: none;
            }
            .news-feed-navbar-interactive {
              display: flex;
              position: relative;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .news-feed-burger-menu {
              display: flex;
            }
            .news-feed-icon {
              fill: var(--dl-color-nav-elementactive);
              width: 24px;
              height: 24px;
            }
            .news-feed-text {
              display: none;
            }
            .news-feed-text01 {
              display: none;
            }
            .news-feed-mobile-menu {
              top: 24px;
              right: 320px;
              width: auto;
              position: absolute;
            }
          }
          @media (max-width: 767px) {
            .news-feed-container01 {
              display: none;
            }
            .news-feed-navbar-interactive {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .news-feed-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .news-feed-container03 {
              padding-left: var(--dl-space-space-halfunit);
            }
            .news-feed-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .news-feed-mobile-menu {
              padding: 16px;
            }
            .news-feed-dashboard {
              z-index: 99;
            }
          }
        `}
      </style>
    </>
  )
}

export default NewsFeed
