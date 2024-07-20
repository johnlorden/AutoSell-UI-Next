import React from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import Account from '../components/account'
import Crumb from '../components/crumb'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>AutoSell UI</title>
          <meta property="og:title" content="AutoSell UI" />
        </Head>
        <div className="home-container1">
          <Sidebar rootClassName="sidebar-root-class-name"></Sidebar>
        </div>
        <div className="home-dashboard">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <h1 id="PageName" className="home-text">
              <span className="home-text1">Page Title</span>
              <br></br>
            </h1>
            <div className="home-container2">
              <div id="Account" className="home-account">
                <div id="Breadcrumbs" className="home-container3">
                  <div className="home-container4">
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
                      className="home-icon4 ActionIcon"
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
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <Sidebar rootClassName="sidebar-root-class-name1"></Sidebar>
            </div>
          </header>
          <div id="Breadcrumb" className="home-breadcrumb">
            <svg
              id="HomeIcon"
              viewBox="0 0 1024 1024"
              className="home-dash-icon"
            >
              <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
            </svg>
            <Crumb text1="Dashboard"></Crumb>
            <Crumb text1="Products and Services"></Crumb>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container1 {
            width: 20%;
            height: 999.9999389648438px;
            display: flex;
            max-width: 288px;
            min-width: 288px;
            align-items: center;
            flex-direction: row;
          }
          .home-dashboard {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-account {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: Small;
            display: flex;
            max-width: 300px;
            align-items: center;
            justify-content: center;
          }
          .home-container3 {
            gap: 20px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-container4 {
            gap: 25px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon4 {
            width: auto;
          }
          .home-mobile-menu {
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
          .home-breadcrumb {
            gap: 15px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .home-dash-icon {
            width: auto;
            height: 24px;
          }
          @media (max-width: 1600px) {
            .home-dashboard {
              height: auto;
              align-self: stretch;
            }
          }
          @media (max-width: 1200px) {
            .home-dashboard {
              height: auto;
              align-self: stretch;
            }
          }
          @media (max-width: 991px) {
            .home-container1 {
              display: none;
            }
            .home-navbar-interactive {
              display: flex;
              position: relative;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              fill: var(--dl-color-nav-elementactive);
              width: 24px;
              height: 24px;
            }
            .home-text {
              display: none;
            }
            .home-text1 {
              display: none;
            }
            .home-mobile-menu {
              top: 24px;
              right: 320px;
              width: auto;
              position: absolute;
            }
          }
          @media (max-width: 767px) {
            .home-container1 {
              display: none;
            }
            .home-navbar-interactive {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
