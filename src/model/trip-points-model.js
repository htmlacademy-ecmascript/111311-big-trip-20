import {tripPointsStub} from '../stub/trip-points-stub';

export default class TripPointsModel {
  get tripPoints() {
    const result = [];
    for (const tripPointResponse of tripPointsStub) {
      result.push(this.#convert(tripPointResponse));
    }

    return result;
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
