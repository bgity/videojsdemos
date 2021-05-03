import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import 'videojs-hotkeys';

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src:
          'http://de01o5fplap5r.cloudfront.net/d83b3b02-d0c9-11ea-8e3b-7c04d0d55e30.mp4',
        type: 'video/mp4',
      },
    ],
    fluid: false,
    /* playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3],
    plugins: {
      hotkeys: {
        enableModifiersForNumbers: false, // to disable ctrl+1,3 as most people use it to navigate tab
        seekStep: 10, // left right 30 sec jump,
        volumeStep: 0.1,
      },
    }, */
  };
  return (
    <div>
      <VideoPlayer {...videoJsOptions} />;
    </div>
  );
}

export default App;
