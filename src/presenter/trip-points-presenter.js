import TripPointView from '../view/trip-point-view';
import TripPointEditView from '../view/trip-point-edit-view';
import {render, replace} from '../framework/render';

export default class TripPointsPresenter {
  #tripPointsContainer = null;

  #tripPointComponent = null;
  #tripPointEditComponent = null;

  #tripPoint = null;

  constructor({tripPointsContainer}) {
    this.#tripPointsContainer = tripPointsContainer;
  }

  init(tripPoint) {
    this.#tripPoint = tripPoint;

    this.#tripPointComponent = new TripPointView({
      tripPoint,
      onRollupClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    this.#tripPointEditComponent = new TripPointEditView({
      tripPoint,
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
