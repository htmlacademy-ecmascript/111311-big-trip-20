import {offersStub} from '../stub/offers-stub';

export default class OffersModel {
  get offers() {
    const result = [];
    for (const offersByType of offersStub) {
      result.push(...this.#convert(offersByType));
    }

    return result;
  }

  #convert(offersByType) {
    const result = [];

    const type = offersByType.type;
    for (const offer of offersByType.offers) {
      offer.type = type;
      result.push(offer);
    }

    return result;
  }
}
