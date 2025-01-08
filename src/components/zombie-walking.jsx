import React, { useEffect, useRef } from 'react';

const ModelViewer = ({ 
  modelPath, 
  playbackSpeed = 1,
  autoPlay = true,
  animationName = 'all'  
}) => {
  const modelRef = useRef(null);

  useEffect(() => {
    if (!customElements.get('model-viewer')) {
      customElements.define('model-viewer', ModelViewer);
    }
  }, []);

  useEffect(() => {
    const modelViewer = modelRef.current;
    
    if (modelViewer) {
      modelViewer.addEventListener('load', () => {
        modelViewer.timeScale = playbackSpeed;
        
        if (autoPlay) {
          if (animationName === 'all') {
            modelViewer.availableAnimations.forEach(animation => {
              modelViewer.play({
                animationName: animation,
                repetitions: Infinity
              });
            });
          } else {
            modelViewer.play({
              animationName: animationName,
              repetitions: Infinity
            });
          }
        }
        
        console.log('Animaciones disponibles:', modelViewer.availableAnimations);
      });
    }
  }, [playbackSpeed, autoPlay, animationName]);

  return (
    <model-viewer
      ref={modelRef}
      src={modelPath}
      alt="3D model"
      disable-zoom
      auto-rotate
      camera-controls
      camera-orbit="45deg 90deg .8m"
      shadow-intensity="1"
      style={{
        width: '100%',
        height: '900px',
      }}
    ></model-viewer>
  );
};

export default ModelViewer;