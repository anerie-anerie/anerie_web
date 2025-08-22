import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './photobooth.css';

function Photobooth() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [bgColor, setBgColor] = useState('#fff0b7'); // default white
  const navigate = useNavigate();

  useEffect(() => {
    // Start webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error('Camera error:', err);
        alert('Could not access the camera.');
      });

    // Cleanup webcam on unmount
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    if (photos.length >= 3) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/png');
      setPhotos((prev) => [...prev, imageData]);
    }
  };

  const resetPhotos = () => {
    setPhotos([]);
  };

  const goHome = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    navigate('/');
  };

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }

  const downloadPhotos = () => {
    if (photos.length === 0) return;
  
    const imgElements = photos.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  
    Promise.all(
      imgElements.map(
        (img) =>
          new Promise((resolve) => {
            img.onload = () => resolve(img);
          })
      )
    ).then((loadedImages) => {
        const borderSize = 8;     // match border thickness
        const spacing = 40;       // match gap between photos
        const outerPadding = 40;  // match .photo-strip padding
  
        const photoWidth = loadedImages[0].width;
        const photoHeight = loadedImages[0].height;

      // Calculate canvas size
      const canvasWidth = photoWidth + 2 * borderSize + 2 * outerPadding;
        const canvasHeight = 2 * outerPadding +
      loadedImages.length * (photoHeight + 2 * borderSize) +
      (loadedImages.length - 1) * spacing;
  
      // Create canvas
      const stripCanvas = document.createElement('canvas');
      stripCanvas.width = canvasWidth;
      stripCanvas.height = canvasHeight;
  
      const ctx = stripCanvas.getContext('2d');
  
      // Fill entire background with user-selected color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  
      loadedImages.forEach((img, i) => {
        // Calculate positions
        const x = outerPadding;
        const y =
          outerPadding +
          i * (photoHeight + 2 * borderSize + spacing); // include spacing & border
  
        // Draw rounded border rectangle (darkmagenta)
        ctx.fillStyle = '#59234e';
        roundRect(ctx, x, y, photoWidth + 2 * borderSize, photoHeight + 2 * borderSize, 6);
  
        // Fill inside with white (image background)
        ctx.fillStyle = 'white';
        roundRect(
          ctx,
          x + borderSize,
          y + borderSize,
          photoWidth,
          photoHeight,
          6
        );
        
        // Draw the image
        ctx.drawImage(
          img,
          x + borderSize,
          y + borderSize,
          photoWidth,
          photoHeight
        );
      });
  
      // Export the final image
      const finalStrip = stripCanvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = finalStrip;
      a.download = 'photobooth-strip.png';
      a.click();
    });
  };
  
  return (
    <div className="App">
      <div className="boothTitle"></div>
      <h3>Take some cute pics! You can take a max of 3 photos then download.</h3>

      <video ref={videoRef} autoPlay playsInline className="video" />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div style={{ marginTop: '10px' }}>
      <button
  className="photoboothButton"
  onClick={takePhoto}
  disabled={photos.length >= 3}
>
  {photos.length < 3 ? 'Take Photo' : 'Max 3 Photos'}
</button>

<button
  className="photoboothButton"
  onClick={resetPhotos}
  disabled={photos.length === 0}
  style={{ marginLeft: '2vw' }}
>
  Reset
</button>

<button
  className="photoboothButton"
  onClick={downloadPhotos}
  disabled={photos.length !== 3}
  style={{ marginLeft: '2vw' }}
>
  Download Strip
</button>


  <button
  className="buttonBack"
  onClick={() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    navigate(-1);
  }}
></button>


</div>


      <div className="bg-picker">
        <label htmlFor="bgColor">Background Color: </label>
        <select
          id="bgColor"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        >
          <option value="#E5E5E5">Off-White</option>
          <option value="#000000">Black</option>
          <option value="#dd8dcd">Pink</option>
          <option value="#a6d8b3">Green</option>
          <option value="#aecde4">Blue</option>
          <option value="#bfbfbf">Gray</option>
        </select>
      </div>

      {photos.length > 0 && (
        <div
          className="photo-strip"
          style={{ backgroundColor: bgColor }}
        >
          {photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Snapshot ${index + 1}`}
              className="strip-photo"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Photobooth;