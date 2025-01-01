"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let newElement = "";
    if (this.selector.startsWith(".")) {
      newElement = document.createElement("div");
      newElement.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith("#")) {
      newElement = document.createElement("p");
      newElement.id = this.selector.slice(1);
    }
    this.position = { top: 100, left: 100 };
    newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; position: absolute; top: ${this.position.top}px; left: ${this.position.left}px;`;

    document.body.append(newElement);
    this.element = newElement;
  };
  this.move = function (event) {
    const step = 10;
    switch (event.key) {
      case "ArrowUp":
        this.position.top -= step;
        break;
      case "ArrowDown":
        this.position.top += step;
        break;
      case "ArrowLeft":
        this.position.left -= step;
        break;
      case "ArrowRight":
        this.position.left += step;
        break;
      default:
        return;
    }

    this.element.style.top = `${this.position.top}px`;
    this.element.style.left = `${this.position.left}px`;
  };
};

const newSquare = new DomElement(".block", "100px", "100px", "yellow", "14px");

newSquare.createElement();

document.addEventListener("keydown", newSquare.move.bind(newSquare));
