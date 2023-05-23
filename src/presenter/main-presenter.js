import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import {render} from '../framework/render';
import EmptyTripPointsView from '../view/empty-trip-points-view';
import TripPointsPresenter from './trip-points-presenter';
import {updateModel} from '../utils/utils';
import {SortType} from '../constants';
import {sortByDayAsc, sortByDurationDesc, sortByPriceDesc} from '../utils/sort-utils';


export default class MainPresenter {
  #container;
  #tripPointsModel;
  #tripSortComponent;
  #tripPointListComponent = new TripPointListView();

  #tripPoints = [];
  #idToTripPointsPresentersMap = new Map();
  #currentSortType = SortType.BY_DAY;

  #idToDestinationMap = new Map();
  #typeToOffersMap = new Map();

  constructor({container, tripPointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#tripPointsModel = tripPointsModel;

    if (destinationsModel) {
      for (const destination of destinationsModel.destinations) {
        this.#idToDestinationMap.set(destination.id, destination);
      }
    }

    if (offersModel) {
      for (const offerByType of offersModel.offers) {
        this.#typeToOffersMap.set(offerByType.type, offerByType.offers);
      }
    }
  }

  init() {
    this.#tripPoints = [...this.#tripPointsModel.tripPoints];
    if (this.#tripPoints.length === 0) {
      render(new EmptyTripPointsView(), this.#container);
      return;
    }

    this.#renderSort();
    render(this.#tripPointListComponent, this.#container);

    this.#renderTripPoints();
  }

  #handleSortTypeChange = (sortType) => {
    if (!sortType || this.#currentSortType === sortType) {
      return;
    }

    this.#sortTripPoints(sortType);
    this.#clearTripPoints();
    this.#renderTripPoints();
  };

  #sortTripPoints(sortType) {
    switch (sortType) {
      case SortType.BY_DAY:
        this.#tripPoints.sort(sortByDayAsc);
        break;
      case SortType.BY_PRICE:
        this.#tripPoints.sort(sortByPriceDesc);
        break;
      case SortType.BY_DURATION:
        this.#tripPoints.sort(sortByDurationDesc);
        break;
      default:
        break;
    }

    this.#currentSortType = sortType;
  }

  #renderSort() {
    this.#tripSortComponent = new TripSortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#tripSortComponent, this.#container);
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

      tripPointsPresenter.init(tripPoint, this.#idToDestinationMap, this.#typeToOffersMap);
      this.#idToTripPointsPresentersMap.set(tripPoint.id, tripPointsPresenter);
    }
  }

  #clearTripPoints() {
    this.#idToTripPointsPresentersMap.forEach((presenter) => presenter.destroy());
    this.#idToTripPointsPresentersMap.clear();
  }

  #handleTripPointChange = (updatedTripPoint) => {
    this.#tripPoints = updateModel(this.#tripPoints, updatedTripPoint);
    this.#idToTripPointsPresentersMap.get(updatedTripPoint.id)
      .init(updatedTripPoint, this.#idToDestinationMap, this.#typeToOffersMap);
  };
}
