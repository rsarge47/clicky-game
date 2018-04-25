import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Image from './components/Image';
import images from './images.json';

class App extends Component {

  state = {
    images,
    trackId: [],
    score: 0,
    topScore: 0,
    pick: 'Nothing~'
  };

  handleImage = id => {
    const trackId = this.state.trackId;
    let score = this.state.score;
    let topScore = this.state.topScore;
    let images = this.state.images;
    let pick = this.state.pick;

    if (!trackId.includes(id)) {
      pick = 'Success!';
      trackId.push(id);
      score++;
      if(score > topScore) {
        topScore++;
      }
      for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor((Math.random() * (i)) + 0);
        [images[j], images[i]] = [images[i], images[j]];
      }
      this.setState({ images, trackId, score: trackId.length, topScore: topScore, pick: pick});
    } else {
      pick = 'Fail!';
      this.setState({ trackId: [], score: 0, pick: pick})
    };

  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          pick={this.state.pick}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(img => (
            <Image 
              handleImage={this.handleImage}
              id={img.id}
              url={img.url}
            />
          ))};
        </Wrapper>
      </div>
    );
  };
};

export default App;
