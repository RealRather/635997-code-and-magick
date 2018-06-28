'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var AMOUNT_WIZARDS = 4;
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomElement = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomWizardName = function (names, lastNames) {
  var wizardName = names[getRandomElement(0, names.length)] + ' ' + lastNames[getRandomElement(0, lastNames.length)];
  return wizardName;
};

//  Генерация JS-объектов
var generateObjects = function (countObjects) {
  var arrayWizards = [];
  for (var i = 0; i < countObjects; i++) {
    var wizard = {
      name: getRandomWizardName(NAMES, LAST_NAMES),
      coatColor: WIZARD_COAT_COLORS[getRandomElement(0, WIZARD_COAT_COLORS.length)],
      eyesColor: WIZARD_EYES_COLORS[getRandomElement(0, WIZARD_EYES_COLORS.length)]
    };
    arrayWizards.push(wizard);
  }
  return arrayWizards;
};

var wizards = generateObjects(AMOUNT_WIZARDS);

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Отрисовка шаблона в документ
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Показывает блок похожих пресонажей
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ---------------------------------------------------------------------------
// Обработка событий

var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userDialogOpenIcon = userDialogOpen.querySelector('.setup-open-icon');
var userDialogSubmit = userDialog.querySelector('.setup-submit');
var userDialogForm = userDialog.querySelector('.setup-wizard-form');
var userDialogFieldName = userDialog.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
var wizardEyesColor = setupWizard.querySelector('.wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onPopupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var onPopupOpenEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Открытие и скрытие окна настройки персонажа
userDialogOpenIcon.addEventListener('keydown', onPopupOpenEnterPress);
userDialogClose.addEventListener('keydown', onPopupCloseEnterPress);

userDialogOpen.addEventListener('click', openPopup);
userDialogClose.addEventListener('click', closePopup);

// Отправление формы
userDialogSubmit.addEventListener('click', function () {
  userDialogForm.submit();
});

userDialogSubmit.addEventListener('keydown', function (evt) {
  if (evt.keycode === ENTER_KEYCODE) {
    userDialogForm.submit();
  }
});

// Ввод имени на форме
userDialogFieldName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});
userDialogFieldName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var onWizardCoatClick = function () {
  var newCoatColor = WIZARD_COAT_COLORS[getRandomElement(0, WIZARD_COAT_COLORS.length)];
  wizardCoatColor.style.fill = newCoatColor;
  userDialog.querySelector('input[name="coat-color"]').value = newCoatColor;
};

var onWizardEyesClick = function () {
  var newEyesColor = WIZARD_EYES_COLORS[getRandomElement(0, WIZARD_EYES_COLORS.length)];
  wizardEyesColor.style.fill = newEyesColor;
  userDialog.querySelector('input[name="eyes-color"]').value = newEyesColor;
};

var onWizardFireballClick = function () {
  var newFireballColor = WIZARD_FIREBALL_COLORS[getRandomElement(0, WIZARD_FIREBALL_COLORS.length)];
  wizardFireballColor.style.backgroundColor = newFireballColor;
  userDialog.querySelector('input[name="fireball-color"]').value = newFireballColor;
};

// Изменение цвета: мантии, глаз и фаербола, персонажа по нажатию
wizardCoatColor.addEventListener('click', onWizardCoatClick);
wizardEyesColor.addEventListener('click', onWizardEyesClick);
wizardFireballColor.addEventListener('click', onWizardFireballClick);
