'use strict';
(function () {

  var URL_GET_DATA = 'https://javascript.pages.academy/keksobooking/data';
  var URL_POST_DATA = 'https://javascript.pages.academy/keksobooking';
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_CIRCLE = 62;
  var MAIN_PIN_WIDTH = 62;
  var MAIN_PIN_HEIGHT = 84;
  var START_POSITION_MAIN_Y = 570;
  var START_POSITION_MAIN_X = 375;
  var COUNT_ADS = 8;
  var PRICE_MIN = 1000;
  var PRICE_MAX = 1000000;
  var ROOMS_MIN = 1;
  var ROOMS_MAX = 3;
  var ROOMS_COUNT_NOT_GUESTS = 100;
  var GUESTS_MIN = 1;
  var GUESTS_MAX = 3;
  var HEIGHT_Y_MIN = 130;
  var HEIGHT_Y_MAX = 630;
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;
  var LEFT_BUTTON_MOUSE = 0;
  var PHOTO_AD_WIDTH = 45;
  var PHOTO_AD_HEIGHT = 40;
  var DECLENCIONS_ROOMS = ['комната', 'комнаты', 'комнат'];
  var PRICE_DEFAULT = 1000;
  var MIN_LENGTH_PRICE_DEFAULT = 4;
  var PRICE_FOR_BUNGALO = 0;
  var PRICE_FOR_FLAT = 1000;
  var PRICE_FOR_HOUSE = 5000;
  var PRICE_FOR_PALACE = 10000;
  var MAP = document.querySelector('.map');
  var addressInput = document.querySelector('#address');
  var MAX_COUNT_PINS = 5;
  var DEFAULT_VALUE_FILTER = 'any';

  window.utilConsts = {
    TYPES: TYPES,
    TIMES: TIMES,
    FEATURES: FEATURES,
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    MAIN_PIN_CIRCLE: MAIN_PIN_CIRCLE,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    COUNT_ADS: COUNT_ADS,
    PRICE_MIN: PRICE_MIN,
    PRICE_MAX: PRICE_MAX,
    ROOMS_MIN: ROOMS_MIN,
    ROOMS_MAX: ROOMS_MAX,
    ROOMS_COUNT_NOT_GUESTS: ROOMS_COUNT_NOT_GUESTS,
    GUESTS_MIN: GUESTS_MIN,
    GUESTS_MAX: GUESTS_MAX,
    HEIGHT_Y_MIN: HEIGHT_Y_MIN,
    HEIGHT_Y_MAX: HEIGHT_Y_MAX,
    KEY_CODE_ENTER: KEY_CODE_ENTER,
    KEY_CODE_ESC: KEY_CODE_ESC,
    LEFT_BUTTON_MOUSE: LEFT_BUTTON_MOUSE,
    PHOTO_AD_WIDTH: PHOTO_AD_WIDTH,
    PHOTO_AD_HEIGHT: PHOTO_AD_HEIGHT,
    DECLENCIONS_ROOMS: DECLENCIONS_ROOMS,
    PRICE_DEFAULT: PRICE_DEFAULT,
    MIN_LENGTH_PRICE_DEFAULT: MIN_LENGTH_PRICE_DEFAULT,
    PRICE_FOR_BUNGALO: PRICE_FOR_BUNGALO,
    PRICE_FOR_FLAT: PRICE_FOR_FLAT,
    PRICE_FOR_HOUSE: PRICE_FOR_HOUSE,
    PRICE_FOR_PALACE: PRICE_FOR_PALACE,
    MAP: MAP,
    addressInput: addressInput,
    START_POSITION_MAIN_X: START_POSITION_MAIN_X,
    START_POSITION_MAIN_Y: START_POSITION_MAIN_Y,
    URL_GET_DATA: URL_GET_DATA,
    URL_POST_DATA: URL_POST_DATA,
    MAX_COUNT_PINS: MAX_COUNT_PINS,
    DEFAULT_VALUE_FILTER: DEFAULT_VALUE_FILTER
  };
})();
