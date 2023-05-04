import TripFiltersView from './view/trip-filters-view';
import TripPointModel from './model/trip-point-model';
import TripInfoView from './view/trip-info-view';
import {render, RenderPosition} from './framework/render';
import MainPresenter from './presenter/main-presenter';

const pageHeaderElement = document.querySelector('.page-header');
const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = pageHeaderElement.querySelector('.trip-controls__filters');

const tripPointsElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new TripFiltersView(), tripControlsFiltersElement, RenderPosition.BEFOREEND);

const tripPointModel = new TripPointModel();
const mainPresenter = new MainPresenter({
  container: tripPointsElement,
  tripPointModel: tripPointModel
});

mainPresenter.init();
