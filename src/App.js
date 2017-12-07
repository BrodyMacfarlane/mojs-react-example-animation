import React, { Component } from 'react';
import './App.css';
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import MojsCurveEditor from 'mojs-curve-editor';








// const DURATION = 400;
// const BOUNCE_DURATION = 400;
// const X_SHIFT = 300;


// const rectShadow = new mojs.Shape({
//   shape:      'rect',
//   fill:       'rgba(0,0,0, .2)',
//   top:        '50%',
//   left:       '23%',
//   radius:     2,
//   radiusX:    20,
//   x:          21,
//   rx:         3,
//   opacity:    { 1 : .25 },
//   scaleX:     { 1 : .75 },
//   origin:     '0 50%',
//   easing:     'cubic.out',
//   delay:      200,
//   duration:   250,
//   // isShowStart: true,
//   isShowEnd:    false,
//   isForce3d:    true
// }).then({
//   opacity: { to: 1, easing: 'bounce.out' },
//   scaleX: { to: 1, easing: 'bounce.out' },
//   duration: BOUNCE_DURATION
// });

// const {approximate} = mojs.easing;

// const easeOutUpper = (p) => {
//   return mojs.easing.cubic.out(p) - p;
// }

// const easeOut = mojs.easing.mix(
//   {to: .5, value: .375}, { to: 1, value: easeOutUpper } );

// const SQUASH_SIZE = 1.5;

// const scaleCurve = approximate((p) => {
//    return 1 + SQUASH_SIZE*easeOut(p);
// });

// const nScaleCurve = approximate((p) => {
//    return 1 - SQUASH_SIZE*easeOut(p);
// });

// const rect = new mojs.Shape({
//   parent:   document.body,
//   shape:    'rect',
//   rx:       3,
//   fill:     '#29363B',
//   left:     '22%',
//   top:      '50%',
//   radius:   20,
//   y:        -20,
//   x:         22,
//   scaleX:   { 1: 1, curve: scaleCurve },
//   scaleY:   { 1: 1, curve: nScaleCurve },
//   origin:   '0 100%',
//   duration: 200,
//   isForce3d:  true
// }).then({
//   angle: { to: -45, easing: 'cubic.out' },
//   duration: 250,
// }).then({
//   angle: { to: 0, easing: 'bounce.out' },
//   duration: BOUNCE_DURATION
// });

// const dustOpts = {
//   parent:   document.body,
//   radius:   20,
//   fill:     'white',
//   radius:   'rand(3, 15)',
//   left:     '20%',
//   top:      '50%',
//   scale:    { 1: 0 },
//   x:        { 0: 70 },
//   y:        { 0: -20 },
//   isForce3d: true,
//   swirlSize: 50,
//   swirlFrequency: 1,
//   isTimelineLess: true,
// }

// const dust = new mojs.Timeline;

// for (var i = 0; i < 7; i++) {
//   dust.add( new mojs.ShapeSwirl({
//       ...dustOpts,
//       delay:  i*45
//     })
//   )
// }

// const dustTrail = new mojs.Timeline;

// for (var i = 0; i < 2; i++) {

//   let direction = ( i % 2 === 0 ) ? 1 : -1;
//   let pathScale = ( i % 2 === 0 ) ? 1 : .75;

//   dustTrail.add( new mojs.ShapeSwirl({
//       ...dustOpts,
//       radius:   'rand(10, 15)',
//       delay:  200 + i*45,
//       direction,
//       pathScale,
//       swirlSize: 10,
//       swirlFrequency: 3,
//     })
//   )
// }


// const timeline = new mojs.Timeline({ delay: 500, speed: .5 });

// timeline
//   .add(
//     rect, rectShadow,
//     dust, dustTrail
//   );

// new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });










// PRESENT SHAPE

class PresentShape extends mojs.CustomShape {
  getShape () {
    return '<use xlink:href="#present" />'
  }
}

mojs.addShape( 'present', PresentShape );

const present = new mojs.Shape({
  radius: 100,
  shape: 'present',
  x: {'-1000': 0, easing: 'elastic.inout'},
  angle: {0 : 720, easing: 'elastic.inout'},
  duration: 4000
}).then({
  x: {0: 2000, easing: 'expo.out'},
  angle: {0 : 720, easing: 'expo.out'},
  duration: 2000
})


const timeline = new mojs.Timeline
timeline.add(present)

const mojsPlayer = new MojsPlayer({ add: timeline });


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <symbol id="present" viewBox="0 0 1000 1000">
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
          </symbol>
        </svg>
      </div>
    );
  }
}

export default App;
