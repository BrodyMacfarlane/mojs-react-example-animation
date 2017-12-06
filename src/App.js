import React, { Component } from 'react';
import './App.css';
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import MojsCurveEditor from 'mojs-curve-editor';



//GEAR SHAPE

class GearShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#gear" />'
  }
}

mojs.addShape( 'gear', GearShape );

const gear = new mojs.Shape({
  radius: 100,
  shape: 'gear',
  fill: '#e57455',
  angle: {0 : 720},
  duration: 4000,
  repeat: 9999,
  easing: 'linear.none'
}).play()



//LIGHT SHAPE

class LightShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#light" />'
  }
}

mojs.addShape( 'light', LightShape );

const light = new mojs.Shape({
  radius: {'90' : '100', easing: "M0, 100 C0, 100 45.59291899892236, 27.81581115980783 55, 0 C64.40708100107764, -27.81581115980783 79.76877906939905, 41.70654445870813 85, 55 C90.23122093060095, 68.29345554129188 100, 90 100, 90 "},
  shape: 'light',
  fill: {'#FFFFFF': '#FDFBA7'},
  y: 20,
  x: {'44' : '46', easing: "M0, 50 C0, 50 5, 0 5, 0 C5, 0 10, 100 10, 100 C10, 100 15, 0 15, 0 C15, 0 20, 100 20, 100 C20, 100 25, 0 25, 0 C25, 0 30, 100 30, 100 C30, 100 35, 0 35, 0 C35, 0 40, 100 40, 100 C40, 100 45, 0 45, 0 C45, 0 50, 50 50, 50 C50, 50 100, 50 100, 50 "},
  duration: 2000,
  repeat: 9999
}).play()


//BULB BOT

class BulbotShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#bulbot" />'
  }
}

mojs.addShape( 'bulbot', BulbotShape );

const bulb = new mojs.Shape({
  radius: {'95' : '105', easing: "M0, 100 C0, 100 45.59291899892236, 27.81581115980783 55, 0 C64.40708100107764, -27.81581115980783 79.76877906939905, 41.70654445870813 85, 55 C90.23122093060095, 68.29345554129188 100, 90 100, 90 "},
  shape: 'bulbot',
  fill: '#e57455',
  y: 138,
  x: {'76' : '78', easing: "M0, 50 C0, 50 5, 0 5, 0 C5, 0 10, 100 10, 100 C10, 100 15, 0 15, 0 C15, 0 20, 100 20, 100 C20, 100 25, 0 25, 0 C25, 0 30, 100 30, 100 C30, 100 35, 0 35, 0 C35, 0 40, 100 40, 100 C40, 100 45, 0 45, 0 C45, 0 50, 50 50, 50 C50, 50 100, 50 100, 50 "},
  duration: 2000,
  repeat: 9999
}).play()



//HEART SHAPE
const hartCurve = new MojsCurveEditor({
  name:         'bounce curve'
});

class HartShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#hart" />'
  }
}

mojs.addShape( 'hart', HartShape );

const hart = new mojs.Shape({
  radius: {'110' : '120', easing: "M0, 100 C0, 100 45.59291899892236, 27.81581115980783 55, 0 C64.40708100107764, -27.81581115980783 79.76877906939905, 41.70654445870813 85, 55 C90.23122093060095, 68.29345554129188 100, 90 100, 90 "},
  shape: 'hart',
  fill: {'#e57455': '#FFFFFF'},
  y: 73,
  x: {'89' : '91', easing: "M0, 50 C0, 50 5, 0 5, 0 C5, 0 10, 100 10, 100 C10, 100 15, 0 15, 0 C15, 0 20, 100 20, 100 C20, 100 25, 0 25, 0 C25, 0 30, 100 30, 100 C30, 100 35, 0 35, 0 C35, 0 40, 100 40, 100 C40, 100 45, 0 45, 0 C45, 0 50, 50 50, 50 C50, 50 100, 50 100, 50 "},
  duration: 2000,
  repeat: 9999
}).play()



const mojsPlayer = new MojsPlayer({ add: hart });


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="gear" viewBox="0 0 1000 1000">
            <path d="M192.86,0l-8.12,45.73a171.75,171.75,0,0,0-30,7.83L124.94,18.18,88.87,39l15.44,43.16a171.73,171.73,0,0,0-22.49,22.1L39.1,88.77,18.27,124.85l34.25,29.06A171.74,171.74,0,0,0,43.9,185L0,192.82v41.66l43.89,8a171.74,171.74,0,0,0,8.26,31.46L18.22,302.46,39,338.53l41.58-14.88a171.74,171.74,0,0,0,23.18,23.29l-15,41.35,36.07,20.83,28.51-33.6A171.75,171.75,0,0,0,185.16,384l7.7,43.35h41.66l7.9-43.42a171.75,171.75,0,0,0,31.4-8.74l28.76,33.9,36.07-20.83L323.29,346a171.75,171.75,0,0,0,22.53-22.68l42.59,15.24,20.83-36.07L374.18,273a171.75,171.75,0,0,0,8.1-30.3l45.12-8.21V192.82l-45.59-8.1a171.75,171.75,0,0,0-8.11-29.78l35.49-30.11L388.35,88.76l-43.79,15.88A171.75,171.75,0,0,0,322.84,83l15.74-44L302.51,18.16l-30,35.67a171.75,171.75,0,0,0-29.69-8.15L234.51,0H192.86ZM213.7,146.94a66.76,66.76,0,0,1,0,133.52h0a66.76,66.76,0,1,1,0-133.52Zm0,26.7a40.06,40.06,0,0,0-40.06,40.06h0a40.06,40.06,0,0,0,40.06,40.06h0a40.06,40.06,0,0,0,40.06-40.06h0a40.06,40.06,0,0,0-40.06-40.06Z"/>
          </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="light" viewBox="0 0 1000 1000">
            <path d="M116,.64C49.53,7.2-.09,62.39,0,129.24a127.48,127.48,0,0,0,28.34,80.49l.62.77c1,1.21,2,2.41,3,3.59l.43.53c2.88,3.46,5.6,7,8.17,10.39L54.1,244.93c3.34,5.44,6.31,10.67,8.94,15.62,5.91,11.14,9.5,32.12,10.73,44.62H184.4c1.24-12.5,4.76-33.51,10.67-44.68,2.63-4.92,5.57-10.15,8.91-15.56l13.64-20.08c2.54-3.4,5.23-6.84,8-10.27l.43-.49c1-1.18,2-2.38,3-3.59l.62-.77a127.51,127.51,0,0,0,28.37-80.65A129.21,129.21,0,0,0,116,.64Z"/>
          </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="hart" viewBox="0 0 1000 1000">
            <path d="M21.88,0C13.69-.07,3.92,4.36.75,17c-6.56,26.21,31.64,59.18,40,66,8.61-6.49,48.11-37.9,42.6-64.35C81.19,8.38,73.74,1.56,63.89.87l-.55,0C58,.74,51.15,4.56,44.13,11.61a2.7,2.7,0,0,1-2,.79h0a2.7,2.7,0,0,1-1.94-.87C33.38,4.09,27,.1,21.88,0Z"/>
          </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="bulbot" viewBox="0 0 1000 1000">
            <path d="M109.54,0H0V48.33H35.59a19.8,19.8,0,0,0,38.36,0h35.59Z"/>
          </symbol>
        </svg>
      </div>
    );
  }
}

export default App;
