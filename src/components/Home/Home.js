import React from 'react';
import PropTypes from 'prop-types';
import ContentPannel from '../ContentPannel/ContentPannel';
import UserDetails from '../UserDetails/UserDetails';
import Arrow from '../../assets/img/arrow.svg';
import Face from '../../assets/img/face.svg';
import './Home.css';

function Home() {

  const handleOnClick = () => {
    const contentDiv = document.getElementById("content");
    const arrowDiv = document.getElementById("arrow");
    const isContentShowing = contentDiv?.classList?.contains("contentShown");
    if (isContentShowing) {
      contentDiv.classList.remove("contentShown");
      contentDiv.classList.add("contentHidden");
      arrowDiv.classList.remove("arrowRotate");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'});
    } else {
      contentDiv.classList.add("contentShown");
      contentDiv.classList.remove("contentHidden");
      arrowDiv.classList.add("arrowRotate");
      window.scrollTo({
        top: document.getElementById("main")?.scrollHeight,
        left: 0,
        behavior: 'smooth'});
    }
  }


  return (
    <>

      <UserDetails />
      <ContentPannel />
      <div id="facePanel" data-testid="Home">
        <img src={Face} id="face" className="centerX" />
        <h1 id="faceTitle"  className="centerX">Front-end challenge!</h1>
        <h2 id="faceBody" className="centerX">This is a design that you will need  to code up and impress us.</h2>
        <img src={Arrow} id="arrow" className="arrow centerX" onClick={handleOnClick} />
      </div>
    </>
  );

}


Home.propTypes = {};

Home.defaultProps = {};

export default Home;
