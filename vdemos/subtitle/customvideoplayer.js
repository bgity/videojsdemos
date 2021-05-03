var player = videojs('demoplayer', {
  controlBar: {
    volumePanel: {
      inline: false,
      vertical: true,
    },
  },
});
var options = {};
options.forwardButton = 'images/ico_player_30sforward.png';
options.rewindButton = 'images/ico_player_30sback.png';
options.subTitleButton = 'images/subtitle.png';
options.videoQualityButton = 'images/video_quality.png';
options.Subtitle = 'Subtitle & Audio';
options.videoQualityTitle = 'Video Quality';

options.subtitlesContent =
  '<div id="subtitles" class="vjs-subtitlesContent" style="display:none;"><div class="opt-1"><h3>Subtitles</h3> <ul class="team__names"><li data-name="en">English</li><li data-name="zh">Chinese</li><li data-name="es">Spanish</li><li data-name="fr">French</li></ul></div><div class="opt-2"><h3>Audio and Language</h3><p>Hindi<span>&check;</span></p></div></div>';
options.qualityContent =
  '<div id="quality" class="vjs-qualityContent" style="display:none;"><h3 class="heading">Video Quality</h3><ol><li>Auto<span>&check;</span></li><li>High</li><li>Good</li><li>Data Saver</li></ol></div>';

//Select text track
var tracks = player.textTracks();
console.log(tracks);
const meetTheTeamSectionNames = document.querySelectorAll('.team__names li');
Array.from(meetTheTeamSectionNames).forEach((name) => {
  name.addEventListener('click', function (e) {
    const nameMe = e.target.getAttribute('data-name');
    console.log(nameMe);
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.mode = 'disabled';
      if (track.kind === 'captions' && track.language === nameMe) {
        track.mode = 'showing';
      }
    }
  });
});

var vjsButton = videojs.getComponent('Button');
var videoQualityButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.videoQualityButton) {
      this.updatevideoQualityButton(options.videoQualityButton);
    }
  },
  handleClick: function () {
    var x = document.getElementById('quality');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  },
  buildCSSClass: function () {
    return 'vjs-videoQuality-button';
  },
  updatevideoQualityButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Video Quality',
      })
    );
  },
});
videojs.registerComponent('videoQualityButton', videoQualityButton);
player.getChild('controlBar').addChild('videoQualityButton', options);

var subTitleButton = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.subTitleButton) {
      this.updateSubtitleButton(options.subTitleButton);
    }
  },
  handleClick: function () {
    var x = document.getElementById('subtitles');
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }

    //Select text track
    var tracks = player.textTracks();
    console.log(tracks);
    const meetTheTeamSectionNames = document.querySelectorAll(
      '.team__names li'
    );
    Array.from(meetTheTeamSectionNames).forEach((name) => {
      name.addEventListener('click', function (e) {
        const nameMe = e.target.getAttribute('data-name');
        console.log(nameMe);
        for (var i = 0; i < tracks.length; i++) {
          var track = tracks[i];
          track.mode = 'disabled';
          if (track.kind === 'captions' && track.language === nameMe) {
            track.mode = 'showing';
          }
        }
      });
    });
  },
  buildCSSClass: function () {
    return 'vjs-subtitle-button';
  },
  updateSubtitleButton: function (url) {
    if (typeof url !== 'string') {
      url = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('img', {
        src: url,
        alt: 'Subtitle',
      })
    );
  },
});
videojs.registerComponent('subTitleButton', subTitleButton);
player.getChild('controlBar').addChild('subTitleButton', options);

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
    if (options.rewindButton) {
      this.updateRewindButton(options.rewindButton);
    }
  },
  handleClick: function () {
    player.currentTime(player.currentTime() - 30);
  },
  buildCSSClass: function () {
    return 'vjs-rewind-button';
  },
  updateRewindButton: function (url) {
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

var Subtitle = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.Subtitle) {
      this.updateTitle(options.Subtitle);
    }
  },
  handleClick: function () {
    var x = document.getElementById('subtitles');
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  },

  buildCSSClass: function () {
    return 'vjs-title';
  },
  updateTitle: function (Subtitle) {
    if (typeof Subtitle !== 'string') {
      Subtitle = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), Subtitle);
  },
});
videojs.registerComponent('Subtitle', Subtitle);
player.getChild('controlBar').addChild('Subtitle', options);

var videoQualityTitle = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.videoQualityTitle) {
      this.updateTitle(options.videoQualityTitle);
    }
  },
  handleClick: function () {
    var x = document.getElementById('quality');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  },

  buildCSSClass: function () {
    return 'vjs-quality-title';
  },
  updateTitle: function (videoQualityTitle) {
    if (typeof videoQualityTitle !== 'string') {
      videoQualityTitle = '';
    }
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(this.el(), videoQualityTitle);
  },
});
videojs.registerComponent('videoQualityTitle', videoQualityTitle);
player.getChild('controlBar').addChild('videoQualityTitle', options);

var vjsSubtitleContent = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.subtitlesContent) {
      this.updatesubtitlesContent(options.subtitlesContent);
    }
  },
  buildCSSClass: function () {
    return 'vjs-SubtitlesContent';
  },
  updatesubtitlesContent: function (subtitlesContent) {
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('div', {
        innerHTML: subtitlesContent,
      })
    );
  },
});
videojs.registerComponent('vjsSubtitleContent', vjsSubtitleContent);
player.addChild('vjsSubtitleContent', options);

// VIDEO QUALITY CONTENT
var vjsQualityContent = videojs.extend(vjsButton, {
  constructor: function (player, options) {
    vjsButton.apply(this, arguments);
    if (options.qualityContent) {
      this.updatesubtitlesContent(options.qualityContent);
    }
  },
  buildCSSClass: function () {
    return 'vjs-QualityContent';
  },
  updatesubtitlesContent: function (qualityContent) {
    videojs.dom.emptyEl(this.el());
    videojs.dom.appendContent(
      this.el(),
      videojs.dom.createEl('div', {
        innerHTML: qualityContent,
      })
    );
  },
});
videojs.registerComponent('vjsQualityContent', vjsQualityContent);
player.addChild('vjsQualityContent', options);
