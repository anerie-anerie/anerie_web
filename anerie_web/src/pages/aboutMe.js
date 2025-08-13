import React, { useState } from 'react';
import Overlay from './Overlay'; // import your Overlay component
import { useNavigate } from 'react-router-dom';
import clickSoundFile from '../click.mp3';
import './aboutMe.css';

function About() {
    const navigate = useNavigate();
    const [overlayText, setOverlayText] = useState(null);
    const showText = (text) => () => setOverlayText(text);
    const closeOverlay = () => setOverlayText(null);

  return (
    <div className="aboutBg">
      <div className="pfp" onClick={showText('This is a self portrait I painted. I love participating in all types of art forms. Some of my favourite mediums are pencil crayons and acrylics.')} style={{ cursor: 'pointer' }}></div>
      <div className="shark" onClick={showText('FRC 8729 Co-Captain')} style={{ cursor: 'pointer' }}></div>
      <div className="flower" onClick={showText('love natures and flowers')} style={{ cursor: 'pointer' }}></div>
      <div className="books" onClick={showText('love reading, here are some favs')} style={{ cursor: 'pointer' }}></div>
      <div className="music" onClick={showText('love music')} style={{ cursor: 'pointer' }}></div>
      <div className="cupcake" onClick={showText('love baking and deserts')} style={{ cursor: 'pointer' }}></div>
      <div className="sol" onClick={showText('lunarhacks and spark of luminosirty')} style={{ cursor: 'pointer' }}></div>
      
      <button className="button" onClick={() => navigate('/')}>
      </button>

      <Overlay text={overlayText} onClose={closeOverlay} />
    </div>
  );
}

export default About;
