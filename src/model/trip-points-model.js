import {tripPointsStub} from '../stub/trip-points-stub';
import Observable from '../framework/observable';

export default class TripPointsModel extends Observable {
  #tripPoints = tripPointsStub.map((stub) => this.#convert(stub));

  get tripPoints() {
    return this.#tripPoints;
  }

  set tripPoints(tripPoints) {
    this.#tripPoints = tripPoints;

    this._notify(null, tripPoints);
  }

  updateTripPoint(updateType, updatedTripPoint) {
    const index = this.#tripPoints.findIndex((tripPoint) => tripPoint.id === updatedTripPoint.id);

    if (index === -1) {
      throw new Error('Can\'t update non-existing trip point');
    }

    this.#tripPoints[index] = updatedTripPoint;

    this._notify(updateType, updatedTripPoint);
  }

  #convert(tripPointResponse) {
    const result = {
      ...tripPointResponse,
      basePrice: tripPointResponse.base_price,
      dateFrom: tripPointResponse.date_from,
      dateTo: tripPointResponse.date_to,
      isFavorite: tripPointResponse.is_favorite
    };

    delete tripPointResponse.base_price;
    delete tripPointResponse.date_from;
    delete tripPointResponse.date_to;
    delete tripPointResponse.is_favorite;

    return result;
  }
}
