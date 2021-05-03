import React from 'react';
import ForwardBackOverlayChild from './ForwardBackOverlayChild';
import ReactDOM from 'react-dom';
import videojs from 'video.js';
const vjsComponent = videojs.getComponent('Component');

class ForwardBackOverlay extends vjsComponent {
  constructor(player, options) {
    super(player, options);
    /* Bind the current class context to the mount method */
    this.mount = this.mount.bind(this);

    /* When player is ready, call method to mount React component */
    player.ready(() => {
      this.mount();
    });

    /* Remove React root when component is destroyed */
    this.on('dispose', () => {
      ReactDOM.unmountComponentAtNode(this.el());
    });
  }

  /**
   * We will render out the React ForwardBackOverlay component into the DOM element
   * generated automatically by the VideoJS createEl() method.
   *
   * We fetch that generated element using `this.el()`, a method provided by the
   * vjsComponent class that this class is extending.
   */
  mount() {
    ReactDOM.render(
      <ForwardBackOverlayChild
        vjsComponent={this}
        playerObject={this.player_}
      />,
      this.el()
    );
  }
}

/**
 * Make sure to register the vjsComponent so Video JS knows it exists
 */
vjsComponent.registerComponent('ForwardBackOverlay', ForwardBackOverlay);
export default ForwardBackOverlay;
