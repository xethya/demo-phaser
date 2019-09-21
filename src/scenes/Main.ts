export class Main extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    const logo = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "sheet1", "phaser-logo");

    const music = this.sound.add("DOG");
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      if (!music.isPlaying) {
        music.play();
      }

      const d100 = this.add.d100();
      const x = d100.die.roll();
      const y = d100.die.roll();

      console.log("I've offset your mouse position by X:", x, " and Y: ", y, " using a d100!");

      logo.setPosition(pointer.x + x, pointer.y + y);
    });
  }
}
