import Observable from '../framework/observable';
import {UpdateType} from '../constants';

export default class TripPointsModel extends Observable {
  #tripPointsApiService;
  #tripPoints = [];

  constructor({tripPointsApiService}) {
    super();
    this.#tripPointsApiService = tripPointsApiService;
  }

  async init() {
    try {
      const tripPoints = await this.#tripPointsApiService.tripPoints;
      this.#tripPoints = tripPoints.map(this.#adaptToClient);
    } catch (err) {
      this.#tripPoints = [];
    }

    this._notify(UpdateType.INIT);
  }

  get tripPoints() {
    return this.#tripPoints;
  }

  async updateTripPoint(updateType, updatedTripPoint) {
    const index = this.#tripPoints.findIndex((tripPoint) => tripPoint.id === updatedTripPoint.id);

    if (index === -1) {
      throw new Error('Can\'t update non-existing trip point');
    }

    try {
      const response = await this.#tripPointsApiService.updateTripPoint(updatedTripPoint);
      this.#tripPoints[index] = this.#adaptToClient(response);
      this._notify(updateType, updatedTripPoint);
    } catch (e) {
      console.log(e);
      throw new Error('Can\'t update trip point');
    }
  }

  addTripPoint(updateType, newTripPoint) {
    this.#tripPoints = [
      newTripPoint,
      ...this.#tripPoints,
    ];

    this._notify(updateType, newTripPoint);
  }

  deleteTripPoint(updateType, tripPointToDelete) {
    const index = this.#tripPoints.findIndex((tripPoint) => tripPoint.id === tripPointToDelete.id);

    if (index === -1) {
      throw new Error('Can\'t delete non-existent trip-point');
    }

    this.#tripPoints = [
      ...this.#tripPoints.slice(0, index),
      ...this.#tripPoints.slice(index + 1),
    ];

    this._notify(updateType);
  }

  #adaptToClient(tripPointResponse) {
    const result = {
      ...tripPointResponse,
      basePrice: tripPointResponse['base_price'],
      dateFrom: tripPointResponse['date_from'] !== null
        ? new Date(tripPointResponse['date_from'])
        : null,
      dateTo: tripPointResponse['date_to'] !== null
        ? new Date(tripPointResponse['date_to'])
        : null,
      isFavorite: tripPointResponse['is_favorite']
    };

    delete result['base_price'];
    delete result['date_from'];
    delete result['date_to'];
    delete result['is_favorite'];

    return result;
  }
}
