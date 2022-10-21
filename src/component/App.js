import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

function App() {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideo(response.data.items);
    //set automatic video to appear
    setSelectedVideo(response.data.items[0]);
  };

  //set a default search when website first render
  useEffect(() => {
    handleTermSubmit('buliding');
  });

  //set a slected video when user click on
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar handleTermSubmit={handleTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
