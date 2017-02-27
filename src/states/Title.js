/*
 * Title state
 * ===========
 *
 * Title screen
 */

export default class Title extends Phaser.State {

  create() {
    const {centerX: x, centerY: y} = this.world;
    var style = { font: '32px Arial', fill: '#FFF', wordWrap: true, align: 'center' };
    var text = this.game.add.text(x, y, 'Title', style);
    text.anchor.set(0.5);
  }

  update() {
    // TODO: Stub
  }

}
