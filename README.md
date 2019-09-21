# Xethya + Phaser = <3

This a minimal repo to show how `@xethya/bridge-phaser` works.

## Using the plugin

Add it to your game's configuration like this:

```ts
  plugins: {
    global: [
      {
        key: "XethyaPlugin",
        plugin: XethyaPlugin,
        start: true,
      },
    ],
  },
```

When on a `Scene` (or any object that includes `GameObjectFactory`), you'll have these functions available:

- From `@xethya/dice`: `add.die(faces)`, `add.coinFlip()`, `add.d4()`, `add.d6()`, `add.d8()`, `add.d10()`, `add.d12()`, `add.d20()`, `add.d100()`.
- From `@xethya/inventory`: `add.inventory(options)`.

## Trying out the game

Run `yarn start` on your terminal and go to `http://localhost:8080`.
