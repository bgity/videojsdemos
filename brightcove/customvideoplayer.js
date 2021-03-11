//Initalise the video player object
var player = videojs('demoPlayer');

//Initalise the video player component Button method
var vjsButton = videojs.getComponent('Button');

//Initalise the video player options
var options = {};
options.ccButtonImage = 'icons/subtitle.png';

//Add Cutom CC button to the video player
var vjsCCButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.ccButtonImage) {
      this.updateCCButton(options.ccButtonImage);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() + 30);
  },
  buildCSSClass: function () {
    return 'vjs-cc-button';
  },
  updateCCButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'CC',
      })
    );
  },
});
videojs.registerComponent('vjsCCButton', vjsCCButton);
player.getChild('controlBar').addChild('vjsCCButton', options);

//Add Cutom CC button to the video player
var vjsCCButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.ccButtonImage) {
      this.updateCCButton(options.ccButtonImage);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() + 30);
  },
  buildCSSClass: function () {
    return 'vjs-cc-button';
  },
  updateCCButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'CC',
      })
    );
  },
});
videojs.registerComponent('vjsCCButton', vjsCCButton);
player.getChild('controlBar').addChild('vjsCCButton', options);
