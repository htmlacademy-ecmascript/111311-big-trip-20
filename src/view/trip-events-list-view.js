import {createElement} from '../render.js';

function createTripEventsTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripEventsListView {
  getTemplate() {
    return createTripEventsTemplate();
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
