import {destinationsStub} from '../stub/destinations-stub';
import Observable from '../framework/observable';

export default class DestinationsModel extends Observable {
  #destinations = destinationsStub;

  get destinations() {
    return this.#destinations;
  }

  set destinations(destinations) {
    this.#destinations = destinations;

    this._notify(null, destinations);
  }
}
