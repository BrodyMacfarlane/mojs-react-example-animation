import React, { Component } from 'react';
import './App.css';
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import MojsCurveEditor from 'mojs-curve-editor';





const yCurve = new MojsCurveEditor()



//GEAR SHAPE

class GearShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#gear" />'
  }
}

mojs.addShape( 'gear', GearShape );

const heart1 = new mojs.Shape({
  shape: 'circle',
  radius: {0 : 1000},
  duration: 500,
  easing: 'ease.inout',
  fill: '#e5e5e5',
  delay: 0,
})

const heart2 = new mojs.Shape({
  shape: 'circle',
  radius: {0 : 1000},
  duration: 500,
  easing: 'ease.inout',
  fill: '#b20000',
  delay: 2000,
})

const heart3 = new mojs.Shape({
  shape: 'circle',
  radius: {0 : 1000},
  duration: 500,
  easing: 'ease.inout',
  fill: '#03a9f4',
  delay: 4000,
})

const gear = new mojs.Shape({
  radius: 100,
  shape: 'gear',
  fill: {'#FFF': '#1c1c1c', easing: yCurve.getEasing()},
  angle: {0: 720, easing: 'elastic.inout'},
  duration: 6000
})


const timeline = new mojs.Timeline()
timeline.add(gear, heart1, heart2, heart3)
// timeline.add( burst, fadeBurst, parent );

const mojsPlayer = new MojsPlayer({ add: timeline });


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="gear" viewBox="0 0 853 853">
            <path d="M192.86,0l-8.12,45.73a171.75,171.75,0,0,0-30,7.83L124.94,18.18,88.87,39l15.44,43.16a171.73,171.73,0,0,0-22.49,22.1L39.1,88.77,18.27,124.85l34.25,29.06A171.74,171.74,0,0,0,43.9,185L0,192.82v41.66l43.89,8a171.74,171.74,0,0,0,8.26,31.46L18.22,302.46,39,338.53l41.58-14.88a171.74,171.74,0,0,0,23.18,23.29l-15,41.35,36.07,20.83,28.51-33.6A171.75,171.75,0,0,0,185.16,384l7.7,43.35h41.66l7.9-43.42a171.75,171.75,0,0,0,31.4-8.74l28.76,33.9,36.07-20.83L323.29,346a171.75,171.75,0,0,0,22.53-22.68l42.59,15.24,20.83-36.07L374.18,273a171.75,171.75,0,0,0,8.1-30.3l45.12-8.21V192.82l-45.59-8.1a171.75,171.75,0,0,0-8.11-29.78l35.49-30.11L388.35,88.76l-43.79,15.88A171.75,171.75,0,0,0,322.84,83l15.74-44L302.51,18.16l-30,35.67a171.75,171.75,0,0,0-29.69-8.15L234.51,0H192.86ZM213.7,146.94a66.76,66.76,0,0,1,0,133.52h0a66.76,66.76,0,1,1,0-133.52Zm0,26.7a40.06,40.06,0,0,0-40.06,40.06h0a40.06,40.06,0,0,0,40.06,40.06h0a40.06,40.06,0,0,0,40.06-40.06h0a40.06,40.06,0,0,0-40.06-40.06Z"/>
          </symbol>
        </svg>
      </div>
    );
  }
}

export default App;
