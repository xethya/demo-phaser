import { XethyaPlugin } from "@xethya/bridge-phaser";
import "phaser";
import { Main } from "./scenes/Main";
import { Preloader } from "./scenes/Preloader";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "canvas",
  width: 960,
  height: 540,
  scene: [Preloader, Main],
  plugins: {
    global: [
      {
        key: "XethyaPlugin",
        plugin: XethyaPlugin,
        start: true,
      },
    ],
  },
};

const game = new Phaser.Game(config);
