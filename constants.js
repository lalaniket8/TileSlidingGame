var TILE_COUNT = 3;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 800;
var TILE_SIZE = 64;
var DEFAULT_CANVAS_COLOR = 'black';//'rgb(83,86,44)';

var BOARD_LEFT_OFFSET = (CANVAS_WIDTH / 2) - (TILE_SIZE * (TILE_COUNT / 2));
var BOARD_TOP_OFFSET = (CANVAS_HEIGHT / 2) - (TILE_SIZE * (TILE_COUNT / 2));
var BOARD_RIGHT_MARGIN = (BOARD_LEFT_OFFSET + (TILE_SIZE * TILE_COUNT));
var BOARD_BOTTOM_MARGIN = (BOARD_TOP_OFFSET + (TILE_SIZE * TILE_COUNT));

var TILE_FONT = 'bold ' + (TILE_SIZE/5) +'px Lucida Console';

var RANDOM_STEPS = TILE_COUNT * 200;
var ANIMATION_TIMEOUT = 5;