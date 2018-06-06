'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var X_CLOUD = 100;
var Y_CLOUD = 10;
var GAP = 20;
var FONT_GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names) {
  renderCloud(ctx, X_CLOUD + (0.5 * GAP), Y_CLOUD + (0.5 * GAP), 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, X_CLOUD, Y_CLOUD, 'rgb(255, 255, 255)');

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', X_CLOUD + GAP, Y_CLOUD + GAP);
  ctx.fillText('Список результатов:', X_CLOUD + GAP, Y_CLOUD + GAP + (2 * FONT_GAP));

  for (var i = 0; i < names.length; i++) {
    ctx.fillRect(X_CLOUD + (2 * GAP) + (BAR_GAP + BAR_WIDTH) * i, Y_CLOUD + (4 * GAP), BAR_WIDTH, barHeight);
    ctx.fillText(names[i], X_CLOUD + (2 * GAP) + (BAR_GAP + BAR_WIDTH) * i, Y_CLOUD + (4 * GAP) + barHeight + FONT_GAP);
  }
};
