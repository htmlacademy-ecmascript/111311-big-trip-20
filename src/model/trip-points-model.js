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
      this.#tripPoints = tripPoints.map(this.#convertFromServerResponse);
    } catch (err) {
      this.#tripPoints = [];
    }

    this._notify(UpdateType.INIT);
  }

  get tripPoints() {
    return this.#tripPoints;
  }

  updateTripPoint(updateType, updatedTripPoint) {
    const index = this.#tripPoints.findIndex((tripPoint) => tripPoint.id === updatedTripPoint.id);

    if (index === -1) {
      throw new Error('Can\'t update non-existing trip point');
    }

    this.#tripPoints[index] = updatedTripPoint;

    this._notify(updateType, updatedTripPoint);
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

  #convertFromServerResponse(tripPointResponse) {
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
