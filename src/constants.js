const TRIP_POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const SortType = {
  BY_DAY: 'by-day',
  BY_PRICE: 'by-price',
  BY_DURATION: 'by-duration',
};

const UserAction = {
  UPDATE_TRIP_POINT: 'UPDATE_TRIP_POINT',
  ADD_TRIP_POINT: 'ADD_TRIP_POINT',
  DELETE_TRIP_POINT: 'DELETE_TRIP_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MAJOR: 'MAJOR',
};

export {TRIP_POINT_TYPES, SortType, UpdateType, UserAction};
