import {render} from './render';
import TripEventsPresenter from './presenter/trip-events-presenter';
import TripFiltersView from './view/trip-filters-view';

const pageHeader = document.querySelector('.page-header');
const tripControlsFiltersElement = pageHeader.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
const boardPresenter = new TripEventsPresenter({container: tripEventsElement});

render(new TripFiltersView(), tripControlsFiltersElement);

boardPresenter.init();
