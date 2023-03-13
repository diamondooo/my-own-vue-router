import BaseHistory from "./base";

export default class HashHistory extends BaseHistory {
  constructor(options) {
    super(options);

    this.initListener();
  }

  initListener() {
    window.addEventListener(
      "hashchange",
      () => {
        this.transitionTo(this.getCurrentLocation());
      },
      false
    );
  }

  getCurrentLocation() {
    let href = window.location.hash;

    const searchIndex = href.indexOf("?");
    if (searchIndex < 0) {
      const hashIndex = href.indexOf("#");
      if (hashIndex > -1) {
        href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
      } else href = decodeURI(href);
    } else {
      href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
    }

    return href;
  }

  push(hash) {
    window.location.hash = hash;
  }
}
