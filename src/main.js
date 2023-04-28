import {render} from './render';
import TripFiltersView from './view/trip-filters-view';

const pageHeader = document.querySelector('.page-header');
const tripControlsFiltersElement = pageHeader.querySelector('.trip-controls__filters');

render(new TripFiltersView(), tripControlsFiltersElement);
