import {offersStub} from '../stub/offers-stub';
import Observable from '../framework/observable';

export default class OffersModel extends Observable {
  #offers = offersStub;

  get offers() {
    return this.#offers;
  }

  set offers(offers) {
    this.#offers = offers;

    this._notify(null, offers);
  }
}
