import TripPointView from '../view/trip-point-view';
import TripPointEditView from '../view/trip-point-edit-view';
import {remove, render, replace} from '../framework/render';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class TripPointsPresenter {
  #tripPointsContainer;
  #handleDataChange;
  #handleModeChange;

  #tripPointComponent;
  #tripPointEditComponent;

  #tripPoint;
  #idToDestinationMap;
  #idToOfferMap;
  #mode = Mode.DEFAULT;

  constructor({tripPointsContainer, onDataChange, onModeChange}) {
    this.#tripPointsContainer = tripPointsContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
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

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#tripPointComponent, prevTripPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#tripPointEditComponent, prevTripPointEditComponent);
    }

    remove(prevTripPointComponent);
    remove(prevTripPointEditComponent);
  }

  destroy() {
    remove(this.#tripPointComponent);
    remove(this.#tripPointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
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
        this.#handleDataChange({...this.#tripPoint, isFavorite: !this.#tripPoint.isFavorite});
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
    this.#mode = Mode.DEFAULT;
  }

  #replacePointToForm() {
    replace(this.#tripPointEditComponent, this.#tripPointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }
}
