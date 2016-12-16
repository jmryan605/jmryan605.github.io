class Boot {
  preload() {
   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
   this.scale.pageAlignHorizontally = true;
   this.scale.pageAlignVertically = true;
  }
  create(){
    this.state.start("Load")
  }
}
class Load {
  preload() {
    console.log("Loading...")
    this.load.image("bg","i.redditmedia.com/za_nd0gAOq-itIhkErh1Mjg035TLBXgKg65J__p_TE4.jpg?w=320&s=7848fcb7d967f3a9c217a1402042a983")
  }
  create(){
    console.log("Loaded. Aren't you so proud Ben?")
  }
}
var game = new Phaser.Game(320,568);
game.state.add("Boot",Boot)
game.state.add("Load",Load)
game.state.start("Boot")
