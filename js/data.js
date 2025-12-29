import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Прекрасный закат на пляже',
  'Мой кот спит',
  'Вкусный завтрак',
  'Путешествие в горы',
  'Концерт любимой группы',
  'Прогулка по парку',
  'Новая машина',
  'Вечеринка с друзьями',
  'Работа кипит',
  'Отдых на даче'
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const generateCommentId = createIdGenerator();

function createMessage() {
  const messageArray = [];
  const messageLength = getRandomInteger(1, 2);
  for (let i = 0; i < messageLength; i++) {
    messageArray.push(getRandomArrayElement(COMMENT_LINES));
  }
  return messageArray.join(' ');
}

function createComment() {
  return {
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomInteger(1, AVATAR_COUNT) + '.svg',
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };
}

function createPicture(index) {
  return {
    id: index,
    url: 'photos/' + index + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment)
  };
}

function getPictures() {
  const pictures = [];
  for (let i = 1; i <= PICTURE_COUNT; i++) {
    pictures.push(createPicture(i));
  }
  return pictures;
}

export {getPictures};
