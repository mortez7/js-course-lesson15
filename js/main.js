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

    newElement.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    newElement.textContent = "asdifsudhusduhfusd";
    document.body.append(newElement);
  };
};

const newBlock = new DomElement(".block", "100px", "200px", "yellow", "14px");
const newText = new DomElement("#best", "300px", "400px", "green", "18px");

newBlock.createElement();
newText.createElement();
