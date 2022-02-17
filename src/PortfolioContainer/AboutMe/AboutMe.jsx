import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/SrollService';
import Animations from '../../utilities/Animations'


export default function AboutMe(props) {
  let fadeInScreenHandle = (screen) => {
    if (screen.fadeScreen !== props.id)
      return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandle)

  const SCREEN_CONSTSANTS = {
    description: "Full stack web and mobile developer with background knowledge of MERN stack with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for on organization.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End as perthe design",
        "React and React Native",
        "Redux for State Management",
        "Bulding REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights"
    }
  }
  const renderHighlights = () => {
    return (
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => {
        <div className="highlight" key={i}>
          <div className="highlight-blob">
            <span>{value}</span>
          </div>
        </div>
      })
    )
  }

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={'Aboute Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className='about-me-description'> {SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-hightlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {" "}
                Hire me {" "}
              </button>
              <a href="ehizcv.pdf" download='Ehiedu ehizcv.pdf'>
                <button className="btn highlighted-btn">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}