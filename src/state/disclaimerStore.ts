import { action, makeObservable, observable } from 'mobx';

import { DISCLAIMER_LOCALSTORAGE_KEY } from '../constants';

class DisclaimerStore {
  showDisclaimer: boolean = true;

  constructor() {
    makeObservable(this, {
      dismissDisclaimer: action,
      initializeDisclaimer: action,
      showDisclaimer: observable,
    });

    this.initializeDisclaimer();
  }

  initializeDisclaimer() {
    const previewMode = new URLSearchParams(window.location.search).get('preview') === 'true';

    if (previewMode) {
      localStorage.removeItem(DISCLAIMER_LOCALSTORAGE_KEY);
      this.showDisclaimer = true;
    } else {
      const disclaimerDismissed = localStorage.getItem(DISCLAIMER_LOCALSTORAGE_KEY);
      this.showDisclaimer = !disclaimerDismissed;
    }
  }

  dismissDisclaimer() {
    localStorage.setItem(DISCLAIMER_LOCALSTORAGE_KEY, 'true');
    this.showDisclaimer = false;
  }
}

export const disclaimerStore = new DisclaimerStore();

export default disclaimerStore;
