'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var X_CLOUD = 100;
var Y_CLOUD = 10;
var GAP = 20;
var FONT_GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (numbArray) {
  var maxElement = 0;
  if (numbArray.length > 0) {
    maxElement = numbArray[0];
    for (var i = 0; i < numbArray.length; i++) {
      if (numbArray[i] > maxElement) {
        maxElement = numbArray[i];
      }
    }
  }
  return maxElement;
};

var getBarColor = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, X_CLOUD + (0.5 * GAP), Y_CLOUD + (0.5 * GAP), 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, X_CLOUD, Y_CLOUD, 'rgb(255, 255, 255)');

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', X_CLOUD + GAP, Y_CLOUD + GAP);
  ctx.fillText('Список результатов:', X_CLOUD + GAP, Y_CLOUD + GAP + (2 * FONT_GAP));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(parseInt(times[i], 10), X_CLOUD + (2 * GAP) + (BAR_GAP + BAR_WIDTH) * i, Y_CLOUD + (3 * GAP) + (MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime)));
    ctx.fillText(names[i], X_CLOUD + (2 * GAP) + (BAR_GAP + BAR_WIDTH) * i, Y_CLOUD + (4 * GAP) + MAX_BAR_HEIGHT + FONT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var barColor = getBarColor(0, 256);
      ctx.fillStyle = 'rgba(0, 0, ' + barColor + ', 1' + ')';
    }
    ctx.fillRect(X_CLOUD + (2 * GAP) + (BAR_GAP + BAR_WIDTH) * i, Y_CLOUD + (4 * GAP) + (MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime)), BAR_WIDTH, (MAX_BAR_HEIGHT * times[i] / maxTime));
  }
};
