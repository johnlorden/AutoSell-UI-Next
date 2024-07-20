import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Sidebar = (props) => {
  return (
    <>
      <div className={`sidebar ${props.rootClassName} `}>
        <div className="sidebar-container">
          <div className="sidebar-container1">
            <Script
              html={`<script>
        document.querySelectorAll('[what="subnav"]').forEach(subnav => {
            subnav.addEventListener('mouseover', function() {
                this.parentElement.querySelector('[what="mainnav"]').classList.add('hovermainnav');
            });

            subnav.addEventListener('mouseout', function() {
                this.parentElement.querySelector('[what="mainnav"]').classList.remove('hovermainnav');
            });
        });
    </script>`}
            ></Script>
          </div>
        </div>
        <img
          alt="image"
          src="/external/autosell.io%20-%20logo%20text-200h-1500h.png"
          loading="lazy"
          className="sidebar-image"
        />
        <button
          id="Dashboard-nav-main"
          type="button"
          what="mainnav"
          className="activemainnav mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-dash-icon">
            <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
          </svg>
          <span className="sidebar-dashboard-text">Dashboard</span>
        </button>
        <button
          id="Digitalshop-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon01">
            <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
          </svg>
          <span className="sidebar-text">Digital Store</span>
        </button>
        <button
          id="Community-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon03">
            <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
          </svg>
          <span className="sidebar-text1">Community</span>
        </button>
        <button
          id="Profile-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon05">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <span className="sidebar-text2">Profile Builder</span>
        </button>
        <button
          id="Testimonial-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon07">
            <path d="M768 598v-86h-234l-86 86h320zM256 598h106l294-294q16-16 0-30l-76-76q-16-14-30 0l-294 294v106zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
          </svg>
          <span className="sidebar-text3">Testimonials</span>
        </button>
        <button
          id="Webinar-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon09">
            <path d="M682 470l-298 170v-342zM896 726v-512h-768v512h768zM896 128q36 0 61 25t25 61l-2 512q0 34-25 59t-59 25h-214v86h-340v-86h-214q-36 0-61-24t-25-60v-512q0-36 25-61t61-25h768z"></path>
          </svg>
          <span className="sidebar-text4">Courses &amp; Webinars</span>
        </button>
        <button
          id="automate-nav-main"
          type="button"
          what="mainnav"
          className="mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon11">
            <path d="M854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
          </svg>
          <span className="sidebar-text5">Automate</span>
        </button>
        <button
          id="payment-link-nav-main"
          type="button"
          what="mainnav"
          className="sidebar-button6 mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon13">
            <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
          </svg>
          <span className="sidebar-text6">Payment Links</span>
        </button>
        <button
          id="ReferandEarn-nav-main"
          type="button"
          what="mainnav"
          className="sidebar-button7 mainnavdefault"
        >
          <svg viewBox="0 0 1097.142857142857 1024" className="sidebar-icon15">
            <path d="M438.857 658.286h219.429v-54.857h-73.143v-256h-65.143l-84.571 78.286 44 45.714c13.714-12 22.286-18.286 31.429-32.571h1.143v164.571h-73.143v54.857zM731.429 512c0 104-62.857 237.714-182.857 237.714s-182.857-133.714-182.857-237.714 62.857-237.714 182.857-237.714 182.857 133.714 182.857 237.714zM1024 658.286v-292.571c-80.571 0-146.286-65.714-146.286-146.286h-658.286c0 80.571-65.714 146.286-146.286 146.286v292.571c80.571 0 146.286 65.714 146.286 146.286h658.286c0-80.571 65.714-146.286 146.286-146.286zM1097.143 182.857v658.286c0 20-16.571 36.571-36.571 36.571h-1024c-20 0-36.571-16.571-36.571-36.571v-658.286c0-20 16.571-36.571 36.571-36.571h1024c20 0 36.571 16.571 36.571 36.571z"></path>
          </svg>
          <span className="sidebar-text7">Refer &amp; Earn</span>
        </button>
        <button
          id="AskAI-nav-main"
          type="button"
          what="mainnav"
          className="sidebar-button8 mainnavdefault"
        >
          <svg viewBox="0 0 1024 1024" className="sidebar-icon17">
            <path d="M512 0c-278.748 0-505.458 222.762-511.848 499.974 5.92-241.864 189.832-435.974 415.848-435.974 229.75 0 416 200.576 416 448 0 53.020 42.98 96 96 96s96-42.98 96-96c0-282.77-229.23-512-512-512zM512 1024c278.748 0 505.458-222.762 511.848-499.974-5.92 241.864-189.832 435.974-415.848 435.974-229.75 0-416-200.576-416-448 0-53.020-42.98-96-96-96s-96 42.98-96 96c0 282.77 229.23 512 512 512z"></path>
          </svg>
          <span className="sidebar-text8">Ask Autosell AI</span>
        </button>
      </div>
      <style jsx>
        {`
          .sidebar-container {
            position: absolute;
          }
          .sidebar-container1 {
            display: contents;
          }
          .sidebar-image {
            width: 200px;
            object-fit: cover;
          }
          .sidebar-dash-icon {
            width: 30px;
            height: 30px;
          }
          .sidebar-dashboard-text {
            width: 100%;
          }
          .sidebar-icon01 {
            width: 30px;
            height: 30px;
          }
          .sidebar-text {
            width: 100%;
          }
          .sidebar-icon03 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text1 {
            width: 100%;
          }
          .sidebar-icon05 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text2 {
            width: 100%;
          }
          .sidebar-icon07 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text3 {
            width: 100%;
          }
          .sidebar-icon09 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text4 {
            width: 100%;
          }
          .sidebar-icon11 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text5 {
            width: 100%;
          }
          .sidebar-button6 {
            transition: 0.3s;
          }

          .sidebar-icon13 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text6 {
            width: 100%;
          }
          .sidebar-button7 {
            transition: 0.3s;
          }

          .sidebar-icon15 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text7 {
            width: 100%;
          }
          .sidebar-button8 {
            transition: 0.3s;
          }

          .sidebar-icon17 {
            width: 24px;
            height: 24px;
          }
          .sidebar-text8 {
            width: 100%;
          }
          .sidebar-root-class-name {
            top: 0px;
            left: 0px;
          }

          .sidebar-root-class-name2 {
            top: 0px;
            flex: 1;
            left: 0px;
            height: auto;
          }

          @media (max-width: 991px) {
            .sidebar-root-class-name {
              display: none;
            }
            .sidebar-root-class-name2 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .sidebar-container {
              display: none;
            }
            .sidebar-root-class-name {
              display: flex;
            }
            .sidebar-root-class-name1 {
              display: none;
            }
            .sidebar-root-class-name2 {
              display: flex;
            }
            .sidebar-root-class-name3 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Sidebar.defaultProps = {
  rootClassName: '',
}

Sidebar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Sidebar
