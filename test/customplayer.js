var player = videojs('demoplayer');
// define option parameter
var options = {};
options.logo = 'information.png';
options.title = 'Ocean fish deep dive';
var Button = videojs.getComponent('Button');

var videoTitle = videojs.extend(Button, {
  constructor: function RDMContentTitle(player, options) {
    Button.apply(this, arguments);
    if (options.title) {
      this.updateTitle(options.title);
    }
  },
  createEl: function () {
    return videojs.dom.createEl('div', {
      className: 'vjs-video-title',
    });
  },
  updateTitle: function (title) {
    if (typeof title !== 'string') {
      title = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), title);
  },
  handleClick: function (event) {
    alert('fffffff');
  },
});
videojs.registerComponent('videoTitle', videoTitle);

var VideoInfo = videojs.extend(Button, {
  // The constructor of a component receives two arguments: the
  // player it will be associated with and an object of options.
  constructor: function VideoInfo(player, options) {
    Button.apply(this, arguments);
    this.addChild('videoTitle', options);
  },
  createEl: function () {
    return videojs.dom.createEl('div', {
      className: 'vjs-video-info',
    });
  },
});
videojs.registerComponent('VideoInfo', VideoInfo);
player.controlBar.addChild('VideoInfo', options);
