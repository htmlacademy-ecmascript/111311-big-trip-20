import TripSortView from '../view/trip-sort-view';
import {render} from '../render';
import TripPointListView from '../view/trip-point-list-view';
import TripPointEditView from '../view/trip-point-edit-view';
import TripPointView from '../view/trip-point-view';


export default class TripPointsPresenter {
  tripSortComponent = new TripSortView();
  tripPointListComponent = new TripPointListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.tripSortComponent, this.container);
    render(this.tripPointListComponent, this.container);

    render(new TripPointEditView(), this.tripPointListComponent.getElement());

    const tempTripEventsStubsCount = 3;

    for (let i = 0; i < tempTripEventsStubsCount; i++) {
      render(new TripPointView(), this.tripPointListComponent.getElement());
    }
  }
}
