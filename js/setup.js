'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var AMOUNT_WIZARDS = 4;
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomWizardName = function (names, lastNames) {
  var wizardName = names[getRandomElement(0, names.length)] + ' ' + lastNames[getRandomElement(0, lastNames.length)];
  return wizardName;
};

var generateObjects = function (countObjects) {
  var arrayWizards = [];
  for (var i = 0; i < countObjects; i++) {
    var wizard = {
      name: getRandomWizardName(NAMES, LAST_NAMES),
      coatColor: WIZARD_COAT_COLORS[getRandomElement(0, WIZARD_COAT_COLORS.length)],
      eyesColor: WIZARD_EYES_COLORS[getRandomElement(0, WIZARD_EYES_COLORS.length)]
    }
    arrayWizards.push(wizard);
  }
  return arrayWizards;
};

//console.log(getRandomWizardName(NAMES, LAST_NAMES));
//console.log(generateObjects(4));

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
