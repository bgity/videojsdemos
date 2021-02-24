var player = videojs('demoplayer');

var options = {};
options.forwardButton = 'images/ico_player_30sforward.png';
options.rewindButton = 'images/ico_player_30sback.png';
options.title = 'Ocean fish deep dive';

var Button = videojs.getComponent('Button');

var videoPlayerForwardButton = videojs.extend(Button, {
  constructor: function videoPlayerForwardButton(player, options) {
    Button.apply(this, arguments);
    /* if (options.forwardButton) {
      this.updateForwardButton(options.forwardButton);
    } */
  },
  buildCSSClass: function () {
    return 'vjs-forward-button';
  },
  /* updateForwardButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Forward',
      })
    );
  }, */
  handleClick: function (event) {
    alert('Forward');
  },
});
videojs.registerComponent('videoPlayerForwardButton', videoPlayerForwardButton);

var videoPlayerRewindButton = videojs.extend(Button, {
  constructor: function videoPlayerRewindButton(player, options) {
    Button.apply(this, arguments);
  },
  createEl: function () {
    return videojs.dom.createEl('div', {
      className: 'vjs-rewind-button',
    });
  },

  handleClick: function (event) {
    alert('Rewind');
  },
});
videojs.registerComponent('videoPlayerRewindButton', videoPlayerRewindButton);

var VideojsForwardRewindButtons = videojs.extend(Button, {
  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor: function VideojsForwardRewindButtons(player, options) {
    Button.apply(this, arguments);
    this.addChild('videoPlayerForwardButton', options);
    //this.addChild('videoPlayerRewindButton', options);
  },
  createEl: function () {
    return videojs.dom.createEl('div', {
      className: 'vjs-forward-rewind-buttons',
    });
  },
});
videojs.registerComponent(
  'VideojsForwardRewindButtons',
  VideojsForwardRewindButtons
);
player.controlBar.addChild('VideojsForwardRewindButtons', {});
