import { Container, Text, Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * Class representing a magic hat containing emojis
 * @extends Container
 */
export default class MagicHat extends Container {
  constructor() {
    super();

    this.name = 'magic-hat';

    this._emojis = [...'😀😁😂🤣😃😄😆😉😊😋😎😍😘🥰😗😙☺🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫🥱😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱🥵🥶😳🤪😵🥴😠😡🤬😷🤒🤕🤢🤮🤧😇🥳🥺🤠🤡🤥🤫🤭'];

    this._item = new Text('', { fontSize: 200 });

    this._body = new Sprite.from('hat');

    this._body.interactive = true;
    this._body.buttonMode = true;
    
    this._addBody();
    this._addMask();
    this._body.on('click', this._handleBodyClick.bind(this));
  }

  /**
   * @private
   * @returns {string}
   */
  _getRandomEmoji() {
    return this._emojis[Math.floor(Math.random() * this._emojis.length)];
  }

  /**
   * @private
   */
  _handleBodyClick() {
    this._item.text = this._getRandomEmoji();

    gsap.fromTo(this._item, { y: 0 }, { y: -250, ease: 'elastic', duration: 1.5 });
  }

  /**
   * @private
   */
  _addMask() {
    const mask = Sprite.from('hat-mask');
    mask.anchor.set(0.5);
    mask.y = -300;

    this.addChild(mask);

    this._item.mask = mask;
  }

  /**
   * @private
   */
  _addBody() {
    this._body.anchor.set(0.5);
    this._item.anchor.set(0.5);

    this.addChild(this._body, this._item);
  }
}