/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;


var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';
var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

var onBtnClick = function (t, opts) {
	console.log('Someone clicked the button');
  };

TrelloPowerUp.initialize({
	'board-buttons': function (t, opts) {
		return [{
		  // we can either provide a button that has a callback function
		  icon: {
			dark: WHITE_ICON,
			light: BLACK_ICON
		  },
		  text: 'Callback',
		  callback: onBtnClick,
		  condition: 'edit'
		}, {
		  // or we can also have a button that is just a simple url
		  // clicking it will open a new tab at the provided url
		  icon: {
			dark: WHITE_ICON,
			light: BLACK_ICON
		  },
		  text: 'URL',
		  condition: 'always',
		  url: 'https://trello.com/inspiration',
		  target: 'Inspiring Boards' // optional target for above url
		}];
	  },
	  'card-buttons': function (t, opts) {
		return [{
		  // usually you will provide a callback function to be run on button click
		  // we recommend that you use a popup on click generally
		  icon: GRAY_ICON, // don't use a colored icon here
		  text: 'Test Button',
		  callback: onBtnClick,
		  condition: 'edit'
		}, {
		  // but of course, you could also just kick off to a url if that's your thing
		  icon: GRAY_ICON,
		  text: 'Just a URL',
		  condition: 'always',
		  url: 'https://developers.trello.com',
		  target: 'Trello Developer Site' // optional target for above url
		}];
	  }
});
