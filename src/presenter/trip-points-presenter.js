import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import TripPointEditView from '../view/trip-point-edit-view';
import TripPointView from '../view/trip-point-view';
import {render} from '../framework/render';


export default class TripPointsPresenter {
  #container = null;
  #tripPointModel = null;

  #tripSortComponent = new TripSortView();
  #tripPointListComponent = new TripPointListView();

  constructor({container, tripPointModel}) {
    this.#container = container;
    this.#tripPointModel = tripPointModel;
  }

  init() {
    const tripPoints = [...this.#tripPointModel.tripPoints];
    render(this.#tripSortComponent, this.#container);
    render(this.#tripPointListComponent, this.#container);

    render(new TripPointEditView({tripPoint: tripPoints[0]}), this.#tripPointListComponent.element);

    for (const tripPoint of tripPoints) {
      render(new TripPointView({tripPoint: tripPoint}), this.#tripPointListComponent.element);
    }
  }
}
