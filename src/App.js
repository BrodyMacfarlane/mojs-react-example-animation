import React, { Component } from 'react';
import './App.css';
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import MojsCurveEditor from 'mojs-curve-editor';



//GEAR SHAPE

class PresentShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#present" />'
  }
}

mojs.addShape( 'present', PresentShape );

const present = new mojs.Shape({
  radius: 100,
  shape: 'present',
  fill: '#e57455',
  angle: {0 : 720},
  duration: 4000,
  easing: 'linear.none'
})



const mojsPlayer = new MojsPlayer({ add: present });


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <svg version="1.1" id="present" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512"  space="preserve">
          <path class="st0" d="M306.1,0c-20,0-37.8,8.8-50.1,22.8C243.8,8.8,225.9,0,205.9,0c-36.8,0-66.8,30-66.8,66.8s30,66.8,66.8,66.8H256
            h50.1c36.8,0,66.8-30,66.8-66.8S342.9,0,306.1,0z M172.5,66.8c0-18.4,15-33.4,33.4-33.4s33.4,15,33.4,33.4v33.4h-33.4
            C187.5,100.2,172.5,85.2,172.5,66.8z M306.1,100.2h-33.4V66.8c0-18.4,15-33.4,33.4-33.4s33.4,15,33.4,33.4S324.5,100.2,306.1,100.2z
            "/>
          <path class="st1" d="M473,495.3c0,9.2-7.5,16.7-16.7,16.7H55.7c-9.2,0-16.7-7.5-16.7-16.7V217c0-9.2,7.5-16.7,16.7-16.7h400.7
            c9.2,0,16.7,7.5,16.7,16.7L473,495.3L473,495.3z"/>
          <path class="st2" d="M506.4,217c0,9.2-7.5,16.7-16.7,16.7H22.3c-9.2,0-16.7-7.5-16.7-16.7V116.9c0-9.2,7.5-16.7,16.7-16.7h467.5
            c9.2,0,16.7,7.5,16.7,16.7V217H506.4z"/>
          <path class="st3" d="M456.3,200.3H256V512h200.3c9.2,0,16.7-7.5,16.7-16.7V217C473,207.8,465.6,200.3,456.3,200.3z"/>
          <path class="st4" d="M306.1,0c-20,0-37.8,8.8-50.1,22.8c0,0,0,0,0-0.1v110.9l0,0h50.1c36.8,0,66.8-30,66.8-66.8S342.9,0,306.1,0z
              M306.1,100.2h-33.4V66.8c0-18.4,15-33.4,33.4-33.4s33.4,15,33.4,33.4S324.5,100.2,306.1,100.2z"/>
          <path class="st1" d="M489.7,100.2H256v133.6h233.7c9.2,0,16.7-7.5,16.7-16.7V116.9C506.4,107.6,499,100.2,489.7,100.2z"/>
          <path class="st0" d="M306.1,512H205.9V100.2h100.2L306.1,512L306.1,512z"/>
          <rect x="256" y="100.2" class="st4" width="50.1" height="411.8"/>
        </svg>
     
      </div>
    );
  }
}

export default App;
