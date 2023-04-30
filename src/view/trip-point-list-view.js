import {createElement} from '../render.js';

function createTripPointsTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripPointListView {
  getTemplate() {
    return createTripPointsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
