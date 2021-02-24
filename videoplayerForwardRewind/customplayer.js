var player = videojs('demoplayer');

var options = {};
options.forwardButton = 'images/ico_player_30sforward.png';
options.rewindButton = 'images/ico_player_30sback.png';
options.title = 'Ocean fish deep dive';

var vjsButton = videojs.getComponent('Button');

var vjsForwardButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.forwardButton) {
      this.updateForwardButton(options.forwardButton);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() + 30);
  },
  buildCSSClass: function () {
    return 'vjs-forward-button';
  },
  updateForwardButton: function (url) {
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
  },
});
videojs.registerComponent('vjsForwardButton', vjsForwardButton);
player.getChild('controlBar').addChild('vjsForwardButton', options);

var vjsRewindButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.forwardButton) {
      this.updateForwardButton(options.rewindButton);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() - 30);
  },
  buildCSSClass: function () {
    return 'vjs-rewind-button';
  },
  updateForwardButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Rewind',
      })
    );
  },
});
videojs.registerComponent('vjsRewindButton', vjsRewindButton);
player.getChild('controlBar').addChild('vjsRewindButton', options);

var vjsTitle = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.title) {
      this.updateTitle(options.title);
    }
  },

  buildCSSClass: function () {
    return 'vjs-title';
  },
  updateTitle: function (title) {
    if (typeof title !== 'string') {
      title = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), title);
  },
});
videojs.registerComponent('vjsTitle', vjsTitle);
player.getChild('controlBar').addChild('vjsTitle', options);
