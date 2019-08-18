import React from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const controllerStyle = {
  backgroundColor: '#000000',
  height: '300px',
  width: '100%',
};

export default class SteeringControl extends React.Component {
  constructor(props) {
    super(props);

    this.targetElement = null;

    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    this.setTargetElementRef = (element) => {
      this.targetElement = element;
    };

    this.logTargetElement = () => {
      if (this.targetElement) console.log(this.targetElement);
    };
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  touchStart() {
    console.log('Touch Start');
    disableBodyScroll(this.targetElement);
  }

  touchEnd() {
    console.log('Touch End');
    enableBodyScroll(this.targetElement);
  }

  render() {
    return (
      <div
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        style={controllerStyle}
        ref={this.setTargetElementRef}
      >
        Speed
      </div>
    );
  }
}

