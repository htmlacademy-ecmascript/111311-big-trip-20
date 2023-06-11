import ApiService from '../framework/api-service';

const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export default class TripPointsApiService extends ApiService {
  get tripPoints() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  async updateTripPoint(tripPoint) {
    const response = await this._load({
      url: `points/${tripPoint.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#convertToServerRequest(tripPoint)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    return await ApiService.parseResponse(response);
  }

  #convertToServerRequest(tripPointRequest) {
    const result = {
      ...tripPointRequest,
      'base_price': tripPointRequest.basePrice,
      'date_from': tripPointRequest.dateFrom,
      'date_to': tripPointRequest.dateTo,
      'is_favorite': tripPointRequest.isFavorite
    };

    delete tripPointRequest.basePrice;
    delete tripPointRequest.dateFrom;
    delete tripPointRequest.dateTo;
    delete tripPointRequest.isFavorite;

    return result;
  }
}
