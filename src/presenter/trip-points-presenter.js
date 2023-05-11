import TripPointView from '../view/trip-point-view';
import TripPointEditView from '../view/trip-point-edit-view';
import {render, replace} from '../framework/render';

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
    this.#idToDestinationMap = idToDestinationMap;
    this.#idToOfferMap = idToOfferMap;

    this.#tripPointComponent = new TripPointView({
      tripPoint,
      idToDestinationMap,
      onRollupClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    this.#tripPointEditComponent = new TripPointEditView({
      tripPoint,
      idToDestinationMap,
      idToOfferMap,
      onRollupClick: this.#handleRollupClick(),
      onFormSubmit: this.#handleFormSubmit()
    });

    render(this.#tripPointComponent, this.#tripPointsContainer);
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
}
