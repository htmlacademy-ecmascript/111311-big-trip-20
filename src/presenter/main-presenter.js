import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import {render} from '../framework/render';
import EmptyTripPointsView from '../view/empty-trip-points-view';
import TripPointsPresenter from './trip-points-presenter';


export default class MainPresenter {
  #container = null;
  #tripPointModel = null;

  #tripSortComponent = new TripSortView();
  #tripPointListComponent = new TripPointListView();

  #tripPoints = [];

  constructor({container, tripPointModel}) {
    this.#container = container;
    this.#tripPointModel = tripPointModel;
  }

  init() {
    this.#tripPoints = [...this.#tripPointModel.tripPoints];
    if (this.#tripPoints.length === 0) {
      render(new EmptyTripPointsView(), this.#container);
      return;
    }

    render(this.#tripSortComponent, this.#container);
    render(this.#tripPointListComponent, this.#container);

    for (const tripPoint of this.#tripPoints) {
      const tripPointsPresenter = new TripPointsPresenter({
        tripPointsContainer: this.#tripPointListComponent.element
      });
      tripPointsPresenter.init(tripPoint);
    }
  }
}
