import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import {render} from '../framework/render';
import EmptyTripPointsView from '../view/empty-trip-points-view';
import TripPointsPresenter from './trip-points-presenter';


export default class MainPresenter {
  #container;
  #tripPointsModel;
  #destinationsModel;
  #offersModel;

  #tripSortComponent = new TripSortView();
  #tripPointListComponent = new TripPointListView();

  #tripPoints = [];

  constructor({container, tripPointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#tripPoints = [...this.#tripPointsModel.tripPoints];
    if (this.#tripPoints.length === 0) {
      render(new EmptyTripPointsView(), this.#container);
      return;
    }

    render(this.#tripSortComponent, this.#container);
    render(this.#tripPointListComponent, this.#container);

    this.#renderTripPoints();
  }

  #renderTripPoints() {
    const idToDestinationMap = new Map();
    if (this.#destinationsModel) {
      for (const destination of this.#destinationsModel.destinations) {
        idToDestinationMap.set(destination.id, destination);
      }
    }

    const idToOfferMap = new Map();
    if (this.#offersModel) {
      for (const offer of this.#offersModel.offers) {
        idToOfferMap.set(offer.id, offer);
      }
    }

    for (const tripPoint of this.#tripPoints) {
      const tripPointsPresenter = new TripPointsPresenter({
        tripPointsContainer: this.#tripPointListComponent.element
      });
      tripPointsPresenter.init(tripPoint, idToDestinationMap, idToOfferMap);
    }
  }
}
