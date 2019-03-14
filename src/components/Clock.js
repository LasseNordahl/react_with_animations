import React, { Component } from 'react';
import anime from 'animejs';

import './../App.css';

const numberOfElements = 120;
const duration = 60000;
const delay = duration / numberOfElements;
const translateY = -200;

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refs: this.getAnimationRefs(numberOfElements)
    }

    this.animateObjects = this.animateObjects.bind(this);
  }

  componentDidMount() {
    let targets = this.state.refs.map((ref) => ref.current);
    this.setState({targets: targets}, () => {
      this.animateObjects()
    });
  }

  animateObjects() {
    var targets = this.state.targets;

    var timeline = anime.timeline({
      duration: delay / 12,
      complete: function() { timeline.restart(); }
    })

    for (let i = 0; i < targets.length; i++) {
      let rotate = (360 / numberOfElements) * i;

      // let backgroundColor = i % 5 == 0 ? '#42f4d4' : '#fcfcfc'
      let backgroundColor ='#fcfcfc'

      timeline.add({
        begin: function() {
          anime({
            backgroundColor:  backgroundColor,
            opacity: 1,
            // scaleY: [1, -20],
            // scale: [1, 1.3],
            // rotate: [rotate + 'deg', rotate + 10 +'deg'],
            // translateY: [translateY + '%', translateY + 10 + '%'],
            targets: targets[i],
            easing: 'easeInSine',
            direction: 'alternate',
            duration: duration / 30,
          })
        }
      })
    }
  }

  getAnimationRefs(count) {
    let animationRefs = []
    for (let i = 0; i < count; i++) {
      animationRefs.push(React.createRef());
    }
    return animationRefs
  }

  renderAnimationObject(ref, key) {
    console.log(key)
    let translation = 'rotate(' + ((360 / numberOfElements) * key) + 'deg) translateY(' + translateY + '%)';
    return (<div className="clockDot" style={{'transform': translation}} ref={ref} key={key}></div>)
  }

  render() {
    const { refs } = this.state;

    return (
      <div>
       {/* <div className="animationCard"> */}
         <div className="clockWrapper">
          {this.state.refs.map((ref, index) => {
            return this.renderAnimationObject(ref, index);
          })}
         </div>
       {/* </div> */}
      </div>
    );
  }
}

export default Clock;
