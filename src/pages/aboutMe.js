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
      <div className="shark" onClick={showText('In my FRC team, we just these IKEA blahajs for cheering! I am a Co-Captain of FRC 8729: Sparkling H20. We use sharks as our mascots.')} style={{ cursor: 'pointer' }}></div>
      <div className="flower" onClick={showText('I love flowers of all kinds, from painting them, to gifting them to observing them. Some favourites are: Lily of the valley and peonies.')} style={{ cursor: 'pointer' }}></div>
      <div className="books" onClick={showText('I am always trying to get into a new book. I love reading and some of my favourites are: Radio Silence and I Wish You All the Best.')} style={{ cursor: 'pointer' }}></div>
      <div className="music" onClick={showText('You can always find me listening to music when working or sitting on buses. This album: At the Beach, In Every Life is one of my go-tos.')} style={{ cursor: 'pointer' }}></div>
      <div className="cupcake" onClick={showText('Sweet treats are what I look forward to every evening! I love baking cakes, cupcakes, brownies, cinnamon rolls and learning more!')} style={{ cursor: 'pointer' }}></div>
      <div className="sol" onClick={showText('This is a sticker from Spark of Luminosity, an childrens symposium run by Lunarhacks. I love organizing events for the community and going to hackathons!')} style={{ cursor: 'pointer' }}></div>
      
      <button className="button" onClick={() => navigate('/')}>
      </button>

      <Overlay text={overlayText} onClose={closeOverlay} />
    </div>
  );
}

export default About;
