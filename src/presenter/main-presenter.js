import TripSortView from '../view/trip-sort-view';
import TripPointListView from '../view/trip-point-list-view';
import {remove, render} from '../framework/render';
import EmptyTripPointsView from '../view/empty-trip-points-view';
import TripPointsPresenter from './trip-points-presenter';
import {SortType, UpdateType, UserAction} from '../constants';
import {sortByDayAsc, sortByDurationDesc, sortByPriceDesc} from '../utils/sort-utils';


export default class MainPresenter {
  #container;
  #tripPointsModel;

  #tripSortComponent;
  #tripPointListComponent = new TripPointListView();
  #emptyTripPointsListComponent = new EmptyTripPointsView();

  #idToTripPointsPresentersMap = new Map();
  #currentSortType = SortType.BY_DAY;

  #idToDestinationMap = new Map();
  #typeToOffersMap = new Map();

  constructor({container, tripPointsModel, destinationsModel, offersModel}) {
    this.#container = container;
    this.#tripPointsModel = tripPointsModel;
    this.#tripPointsModel.addObserver(this.#handleTripPointsModelEvent);

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
    this.#renderMain();
  }

  get tripPoints() {
    switch (this.#currentSortType) {
      case SortType.BY_DAY:
        return [...this.#tripPointsModel.tripPoints].sort(sortByDayAsc);
      case SortType.BY_PRICE:
        return [...this.#tripPointsModel.tripPoints].sort(sortByPriceDesc);
      case SortType.BY_DURATION:
        return [...this.#tripPointsModel.tripPoints].sort(sortByDurationDesc);
    }

    return this.#tripPointsModel.tripPoints;
  }

  #renderMain = () => {
    if (this.#tripPointsModel.tripPoints.length === 0) {
      render(this.#emptyTripPointsListComponent, this.#container);
      return;
    }

    this.#renderSort();
    render(this.#tripPointListComponent, this.#container);
    this.#renderTripPoints();
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_TRIP_POINT:
        this.#tripPointsModel.updateTripPoint(updateType, update);
        break;
      case UserAction.ADD_TRIP_POINT:
        // ToDo
        break;
      case UserAction.DELETE_TRIP_POINT:
        // ToDo
        break;
    }
  };

  #handleTripPointsModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#tripPointsModel.get(data.id).init(data, this.#idToDestinationMap, this.#typeToOffersMap);
        break;
      case UpdateType.MINOR:

        break;
      case UpdateType.MAJOR:
        // ToDo
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (!sortType || this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearMain();
    this.#renderMain();
  };

  #renderSort() {
    this.#tripSortComponent = new TripSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#tripSortComponent, this.#container);
  }

  #handleModeChange = () => {
    this.#idToTripPointsPresentersMap.forEach((presenter) => presenter.resetView());
  };

  #renderTripPoints() {
    for (const tripPoint of this.tripPoints) {
      const tripPointsPresenter = new TripPointsPresenter({
        tripPointsContainer: this.#tripPointListComponent.element,
        onDataChange: this.#handleViewAction,
        onModeChange: this.#handleModeChange
      });

      tripPointsPresenter.init(tripPoint, this.#idToDestinationMap, this.#typeToOffersMap);
      this.#idToTripPointsPresentersMap.set(tripPoint.id, tripPointsPresenter);
    }
  }

  #clearMain() {
    this.#idToTripPointsPresentersMap.forEach((presenter) => presenter.destroy());
    this.#idToTripPointsPresentersMap.clear();

    remove(this.#tripSortComponent);
    remove(this.#emptyTripPointsListComponent);
  }
}
