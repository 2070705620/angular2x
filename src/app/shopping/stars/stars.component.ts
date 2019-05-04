import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {

  constructor() { }

  static MAX_STAR = 5;
  hoverStarLink = new StarLink(StarsComponent.MAX_STAR);
  hoverItem: Star;
  hoverStars = this.hoverStarLink.list;

  starLink = new StarLink(StarsComponent.MAX_STAR);
  current: Star;
  stars = this.starLink.list;

  @Input()
  rating: number;

  hovering = false;

  ngOnInit() {
    const current = this.current = this.stars[Math.floor(this.rating) / 1];
    // 前
    let cursor = current;
    if (cursor) {
      if (cursor.prev) {
        while (cursor.prev) {
          cursor.prev.toFull();
          cursor = cursor.prev;
        }
      }
      if (this.rating % 1 === .5) {
        this.current.toHalf();
      }
    }
  }

  hoverOnStar(e: MouseEvent, starItem: Star) {
    this.hoverItem = starItem;
    this.hovering = true;
    const {hoverItem} = this;
    let cursor: Star = starItem;
    while (cursor.prev) {
      cursor.prev.toFull();
      cursor = cursor.prev;
    }
    cursor = starItem;
    while (cursor.next) {
      cursor.next.toEmpty();
      cursor = cursor.next;
    }
    if (e.offsetX > ((e.target as HTMLElement).clientWidth) / 2.0 ) {
      starItem.src = Star.LOGO_START_FULL;
    } else {
      starItem.src = Star.LOGO_START_HALF;
    }
  }
  clickStar(e: MouseEvent, item: Star) {
    const {stars} = this;
    const synItem = stars[item.i]; // 静态队列中的item
    this.current = synItem;
    if (synItem) {
      // 前后
      let cursor = synItem;
      while (cursor.prev) {
        cursor.prev.toFull();
        cursor = cursor.prev;
      }
      cursor = synItem;
      while (cursor.next) {
        cursor.next.toEmpty();
        cursor = cursor.next;
      }
    }
    // 自身
    if (e.offsetX > ((e.target as HTMLElement).clientWidth) / 2.0 ) {
      stars[item.i].toFull();
    } else {
      stars[item.i].toHalf();
    }
  }
  eventLeaveStar(starItem: Star) {
    this.hovering = false;
  }
  get showScore() {
    const {hovering, hoverItem, current} = this;
    if (hovering) {
      if (!hoverItem) {
        return 0;
      }
      if (hoverItem.isFull) {
        return hoverItem.i + 1;
      } else if (hoverItem.isHalf) {
        return hoverItem.i + .5;
      }
    } else {
      if (!current) {
        return 0;
      }
      if (current.isFull) {
        return current.i + 1;
      } else if (current.isHalf) {
        return current.i + .5;
      }
    }
  }
}
class StarLink {
  head: Star;
  tail: Star;
  cursor: Star;

  constructor(count: number) {
    for (let index = 0; index < count; index++) {
      this.addNode(new Star(index, Star.LOGO_START_EMPTY));
    }
  }
  private addNode(star: Star) {
    if (!this.head) { // 空链表
      this.head = star;
    } else { // 末尾追加
      star.prev = this.tail;
      this.tail.next = star;
    }
    this.tail = star;
  }
  get list() {
    const list: Array<Star> = [];
    let cursor0: Star = this.head;
    do {
      if (cursor0) {
        list.push(cursor0);
        cursor0 = cursor0.next;
      } else {
        break;
      }
    }while (cursor0);
    return list;
  }
}

class Star {
  /*会编译检查路径*/
  static LOGO_START_FULL = require('./star-full.png');
  static LOGO_START_HALF = require('./star-half.png');
  static LOGO_START_EMPTY = require('./star-empty.png');

  prev: Star;
  next: Star;

  constructor(public i: number, public src: string) {}

  toFull() {
    this.src = Star.LOGO_START_FULL;
  }
  toHalf() {
    this.src = Star.LOGO_START_HALF;
  }
  toEmpty() {
    this.src = Star.LOGO_START_EMPTY;
  }
  get isFull() {
    return this.src === Star.LOGO_START_FULL;
  }
  get isHalf() {
    return this.src === Star.LOGO_START_HALF;
  }
  get isEmpty() {
    return this.src === Star.LOGO_START_EMPTY;
  }
}
