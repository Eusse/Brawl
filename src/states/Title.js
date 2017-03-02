/*
 * Title state
 * ===========
 *
 * Title screen
 */

export default class Title extends Phaser.State {

  create() {
    const {centerX: x, centerY: y} = this.world;
    const scene = this.game;
    var style = { font: '32px Arial', fill: '#FFF', wordWrap: true, align: 'center' };
    var text = this.game.add.text(x, y-30, 'Title', style);
    text.anchor.set(0.5);
    var loginLabel = this.game.add.text(x, y + 40, 'Login', { font: '24px Arial', fill: '#fff', align: 'center' });
    loginLabel.inputEnabled = true;
    loginLabel.events.onInputUp.add(function () {
      self.game.switchState('Login');
    });
    var newCharacterLabel = this.game.add.text(x, y + 80, 'New Character', { font: '24px Arial', fill: '#fff', align: 'center' });
    newCharacterLabel.inputEnabled = true;
    newCharacterLabel.events.onInputUp.add(function () {
      scene.state.start('CharacterCreation');
    });
  }

  update() {
    // TODO: Stub
  }

}
