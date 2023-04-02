let retreatMessage = 'print text on command promt';

const planet = {
	retreat () {
		console.log(retreatMessage);
	},
	
	takeOff() {
		console.log('to planet earth');
	}
};

planet.retreat();
planet.takeOff();