const { Howl, Howler } = require('howler');
console.clear();

class musicPlayer {
    constructor() {
        this.play = this.play.bind(this);
        this.playBtn = document.getElementById('play');
        this.playBtn.addEventListener('click', this.play);
        this.controlPanel = document.getElementById('control-panel');
        this.infoBar = document.getElementById('info');
    }

    play() {


        let controlPanelObj = this.controlPanel,
            infoBarObj = this.infoBar
        Array.from(controlPanelObj.classList).find(function (element) {


            if (element !== "active") {
                console.log('open');
               return controlPanelObj.classList.add('active')
            }else{
                console.log('close');
               return controlPanelObj.classList.remove('active')
            }

        });

        Array.from(infoBarObj.classList).find(function (element) {
            if (element !== "active") {
               return infoBarObj.classList.add('active')
            }else{
               return infoBarObj.classList.remove('active')
            }

            // return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });
    }
}

const newMusicplayer = new musicPlayer();


let sound = new Howl({
    src: ['/assets/audios/piste_for_home.mp3'],
});
let info = document.getElementById('play');
let classes = info.classList;

info.addEventListener('click', function() {
  let result = classes.toggle("active");

  if (result) {
    sound.play()
  } else {
    sound.pause()
  }
})

