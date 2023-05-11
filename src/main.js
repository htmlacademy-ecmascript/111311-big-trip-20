import TripFiltersView from './view/trip-filters-view';
import TripPointsModel from './model/trip-points-model';
import TripInfoView from './view/trip-info-view';
import {render, RenderPosition} from './framework/render';
import MainPresenter from './presenter/main-presenter';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';

const pageHeaderElement = document.querySelector('.page-header');
const tripMainElement = pageHeaderElement.querySelector('.trip-main');
const tripControlsFiltersElement = pageHeaderElement.querySelector('.trip-controls__filters');

const tripPointsElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new TripFiltersView(), tripControlsFiltersElement, RenderPosition.BEFOREEND);

const tripPointsModel = new TripPointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const mainPresenter = new MainPresenter({
  container: tripPointsElement,
  tripPointsModel,
  destinationsModel,
  offersModel,
});

mainPresenter.init();
