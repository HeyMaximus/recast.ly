import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import Search from '/compiled/src/components/Search.js';
import searchYouTube from '/src/lib/searchYouTube.js';
// import React, { useState } from 'react';

const { useState} = React;
const { useEffect } = React;

var App = () => {
  const [selectedVideo, setSelectedVideo] = useState(exampleVideoData[0]);

  const [list, setList] = useState(exampleVideoData);

  const handleTitleClick = function(v) {
    setSelectedVideo(v);
  };

  const testFunction = function (v) {
    setList(v);
  }

  useEffect( () => {
    searchYouTube('flower', setList);
  }


  )

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search setList={testFunction} searchYouTube={searchYouTube}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={selectedVideo}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={list} cb={handleTitleClick} /></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


