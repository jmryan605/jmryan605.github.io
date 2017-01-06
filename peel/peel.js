class Boot {
  preload() {
   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
   this.scale.pageAlignHorizontally = true;
   this.scale.pageAlignVertically = true;
  }
  create(){
    this.state.start("Load");
  }
}

class Load {
  preload() {
    console.log("Loading...");
    this.load.image("bg","assets/bg.png");
  }
  create(){
    console.log("Loaded. Aren't you so proud Ben?");
    this.state.start("Play");
  }
}

class Play {
  create() {
    console.log("Entered Play! :D");
    this.background = this.add.tileSprite(0,0,320,568,"bg");
    this.background.autoScroll(0,700);
  }
}

var game = new Phaser.Game(320,568);

game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play",Play);
game.state.start("Boot");
