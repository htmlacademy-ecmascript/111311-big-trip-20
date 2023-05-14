import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import {render} from '../framework/render';
import EmptyTripPointsView from '../view/empty-trip-points-view';
import TripPointsPresenter from './trip-points-presenter';
import {updateModel} from '../utils';


export default class MainPresenter {
  #container;
  #tripPointsModel;
  #tripSortComponent = new TripSortView();
  #tripPointListComponent = new TripPointListView();

  #tripPoints = [];
  #idToTripPointsPresentersMap = new Map();

  #idToDestinationMap = new Map();
  #idToOfferMap = new Map();

  constructor({container, tripPointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#tripPointsModel = tripPointsModel;

    if (destinationsModel) {
      for (const destination of destinationsModel.destinations) {
        this.#idToDestinationMap.set(destination.id, destination);
      }
    }

    if (offersModel) {
      for (const offer of offersModel.offers) {
        this.#idToOfferMap.set(offer.id, offer);
      }
    }
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

  #handleModeChange = () => {
    this.#idToTripPointsPresentersMap.forEach((presenter) => presenter.resetView());
  };

  #renderTripPoints() {
    for (const tripPoint of this.#tripPoints) {
      const tripPointsPresenter = new TripPointsPresenter({
        tripPointsContainer: this.#tripPointListComponent.element,
        onDataChange: this.#handleTripPointChange,
        onModeChange: this.#handleModeChange
      });

      tripPointsPresenter.init(tripPoint, this.#idToDestinationMap, this.#idToOfferMap);
      this.#idToTripPointsPresentersMap.set(tripPoint.id, tripPointsPresenter);
    }
  }

  #handleTripPointChange = (updatedTripPoint) => {
    this.#tripPoints = updateModel(this.#tripPoints, updatedTripPoint);
    this.#idToTripPointsPresentersMap.get(updatedTripPoint.id)
      .init(updatedTripPoint, this.#idToDestinationMap, this.#idToOfferMap);
  };
}
