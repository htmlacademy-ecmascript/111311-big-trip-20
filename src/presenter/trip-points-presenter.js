import TripPointView from '../view/trip-point-view';
import TripPointEditView from '../view/trip-point-edit-view';
import {remove, render, replace} from '../framework/render';

export default class TripPointsPresenter {
  #tripPointsContainer;

  #tripPointComponent;
  #tripPointEditComponent;

  #tripPoint;
  #idToDestinationMap;
  #idToOfferMap;

  constructor({tripPointsContainer}) {
    this.#tripPointsContainer = tripPointsContainer;
  }

  init(tripPoint, idToDestinationMap, idToOfferMap) {
    this.#tripPoint = tripPoint;

    const prevTripPointComponent = this.#tripPointComponent;
    const prevTripPointEditComponent = this.#tripPointEditComponent;

    this.#idToDestinationMap = idToDestinationMap;
    this.#idToOfferMap = idToOfferMap;

    this.#tripPointComponent = this.#createTripPointView();

    this.#tripPointEditComponent = new TripPointEditView({
      tripPoint,
      idToDestinationMap,
      idToOfferMap,
      onRollupClick: this.#handleRollupClick(),
      onFormSubmit: this.#handleFormSubmit()
    });

    if (!prevTripPointComponent || !prevTripPointEditComponent) {
      render(this.#tripPointComponent, this.#tripPointsContainer);
      return;
    }

    if (this.#tripPointsContainer.contains(prevTripPointComponent.element)) {
      replace(this.#tripPointComponent, prevTripPointComponent);
    }

    if (this.#tripPointsContainer.contains(prevTripPointEditComponent.element)) {
      replace(this.#tripPointEditComponent, prevTripPointEditComponent);
    }

    render(this.#tripPointComponent, this.#tripPointsContainer);

    remove(prevTripPointComponent);
    remove(prevTripPointEditComponent);
  }

  #createTripPointView() {
    return new TripPointView({
      tripPoint: this.#tripPoint,
      idToDestinationMap: this.#idToDestinationMap,
      onRollupClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
      onFavoriteClick: () => {
        this.#toggleFavorite();
      }
    });
  }

  #handleFormSubmit() {
    return () => {
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    };
  }

  #handleRollupClick() {
    return () => {
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    };
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #replaceFormToPoint() {
    replace(this.#tripPointComponent, this.#tripPointEditComponent);
  }

  #replacePointToForm() {
    replace(this.#tripPointEditComponent, this.#tripPointComponent);
  }

  #toggleFavorite() {
    this.#tripPoint.isFavorite = !this.#tripPoint.isFavorite;
    replace(this.#tripPointComponent, this.#createTripPointView());
  }
}
