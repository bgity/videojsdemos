import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoForwardBackwardOverlay from './customVideoComponents/ForwardBackOverlay';
import SubTitle from './customVideoComponents/subtitle/SubTitle';

const VideoPlayer = (props) => {
  const videoNode = useRef();
  var player;

  useEffect(() => {
    player = videojs(videoNode.current, props, function onPlayerReady() {
      console.log('Video.js Ready');
    });
    player.getChild('controlBar').addChild('ForwardBackOverlay', {});
    player.getChild('controlBar').addChild('SubTitle', {});
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoNode}
          className='video-js'
          width='820'
          height='600'
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
