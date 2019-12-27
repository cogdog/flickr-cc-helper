// IMAGE SIZES  ------------------------------------------------------------------------
// size codes for image used in HTML '_m'=240px, ''=500px, '_z'=640 '_c'=800px, '_b' = 1024px

var ps_dims = {
	_m: '240', _z: '640', _c: '800', _b: '1024'
};

// FLICKR API KEY -----------------------------------------------------------------------
// flickr api key goes here. Get yer own at https://www.flickr.com/services/apps/create/apply
// Smoke will rise from your browser w/o this, bad mojo will be place upon you. Just kidding.

var fpai = 'bc5da65ee5e7f823282800672064eae0'; // did you put your key in quotes?
	
// LICENSE STUFF ------------------------------------------------------------------------		
// labels for flickr licenses; first element is license = 0 aka all rights reserved (BOOOO, HISSSS)
// If you like long flowing names, edit away
// Now includes flickr commons, US GOVT work, and new PD licenses
var licenses = new Array( "", "BY-NC-SA", "BY-NC", "BY-NC-ND", "BY", "BY-SA", "BY-ND", "", "PD", "CC0", "PDM" );

// plain text license 
function get_license_text( thelicense ) {
	switch( thelicense ) {
		case "7":
			return 'with no copyright restriction (Flickr Commons)';
			break;
		case "8":
			return 'as a United States Government Work (PD)';
			break;
		case "9":
			return 'into the public domain using (CC0)';
			break;
		case "10":
			return 'into the public domain using (PDM)';
			break;

		default:
			return 'under a Creative Commons (' + licenses[thelicense] + ') license';
	}
}

// Helper to return CC Best Practices TASL format 
// https://wiki.creativecommons.org/wiki/Best_practices_for_attribution
function get_tasl_text( thelicense ) {
	switch( thelicense ) {
		case "7":
			return 'no copyright (Flickr Commons)';
			break;
		default:
			return 'CC ' + licenses[thelicense];
	}
}

// Helper to return a readable & linked license string
function get_license_md( thelicense ) {
	switch( thelicense ) {
		case "7":
			return 'with [no copyright restriction (Flickr Commons)](https://flickr.com/commons/usage/)';
			break;
		case "8":
			return 'as a [Public Domain United States Government Work (PD)](https://www.usa.gov/copyright.shtml)';
			break;
		case "9":
			return 'into the public domain using [Creative Commons Public Domain Dedication (CC0)](https://creativecommons.org/publicdomain/zero/1.0/)';
			break;
		case "10":
			return 'with no copyright restrictions using [Creative Commons Public Domain Mark](https://creativecommons.org/publicdomain/mark/1.0/)';
			break;

		default:
			cc_lic = licenses[thelicense];
			return 'under a [Creative Commons (' + cc_lic + ') license](https://creativecommons.org/licenses/' + cc_lic.toLowerCase()  + '/2.0/)';
	}
}


// Helper to return a readable & linked license string
function get_license_html( thelicense ) {
	switch( thelicense ) {
		case "7":
			return 'with <a href="https://flickr.com/commons/usage/">no copyright restriction (Flickr Commons)</a>';
			break;
		case "8":
			return 'as a <a href="https://www.usa.gov/copyright.shtml">Public Domain United States Government Work (PD)</a>';
			break;
		case "9":
			return 'into the public domain using <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication (CC0)</a>';
			break;
		case "10":
			return 'with no copyright restrictions using <a href="https://creativecommons.org/publicdomain/mark/1.0/">Creative Commons Public Domain Mark (PDM)</a>';
			break;

		default:
			cc_lic = licenses[thelicense];
			return 'under a <a href="https://creativecommons.org/licenses/' + cc_lic.toLowerCase()  + '/2.0/">Creative Commons (' + cc_lic +') license</a>';
	}
}

// Helper to return CC Best Practices TASL format https://wiki.creativecommons.org/wiki/Best_practices_for_attribution
function get_tasl_html( thelicense ) {
	switch( thelicense ) {
		case "7":
			return '<a href="https://flickr.com/commons/usage/">no copyright (Flickr Commons)</a>';
			break;
		case "8":
			return '<a href="https://www.usa.gov/copyright.shtml">US Government PD</a>';
			break;
		case "9":
			return '<a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>';
			break;
		case "10":
			return '<a href="https://creativecommons.org/publicdomain/mark/1.0/">CC PDM</a>';
			break;

		default:
			cc_lic = licenses[thelicense];
			return '<a href="https://creativecommons.org/licenses/' + cc_lic.toLowerCase()  + '/2.0/">CC ' + cc_lic +'</a>';
	}
}

// Helper to return CC Best Practices TASL format https://wiki.creativecommons.org/wiki/Best_practices_for_attribution
function get_license_md_tasl( thelicense ) {
	switch( thelicense ) {
		case "7":
			return '[no copyright (Flickr Commons)](https://flickr.com/commons/usage/)';
			break;
		case "8":
			return '[US Government PD](https://www.usa.gov/copyright.shtml)';
			break;
		case "9":
			return '[CC0](https://creativecommons.org/publicdomain/zero/1.0/)';
			break;
		case "10":
			return '[CC PDM](https://creativecommons.org/publicdomain/mark/1.0/)';
			break;
		default:
			cc_lic = licenses[thelicense];
			return '[CC ' + cc_lic + '](https://creativecommons.org/licenses/' + cc_lic.toLowerCase()  + '/2.0/)';
	}
}



// CHECK QUERY PARAMS -------------------------------------------------------------------
// Get the URL query parameters for the tool page, we are looking for one called "flickd"
// h/t ----- http://stackoverflow.com/a/3855394/2418186

var qs = (function(a) {
	if (a == "") return {};
	var b = {};
	for (var i = 0; i < a.length; ++i)
	{
		var p=a[i].split('=');
		if (p.length != 2) continue;
		b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}
	return b;
})(window.location.search.substr(1).split('&'));


// WAITING PATIENTLY FOR THE API --------------------------------------------------------
// set up a time to change the status message
var waiting_msg = setInterval(function () { ChangeStatusMessage() }, 800);

// Holders for message to let 'em know wheels are spinning
// Here is where you can have fun by adding new messages FORK IT BABY!
function ChangeStatusMessage() {
	var funnymessages = ['Philosophizing open education with Christina Hendricks', 'Enjoying a good cup of tea with Kim Carter', 'Narrating the thinking with Colin Madland', 'Playing ping pong competitively with Paul Stacey', 'Hopping on the caravan with Shannon Hauser', 'Crafting wood pens with JR Dingwall', 'Wishing to be as wise as Frances Bell', 'Being inspired by Mark Otter', 'Championing open education with Lorna Campbell',   'Favoriting all the tweets by Robin DeRosa', 'Taking cricket lessons from Rajiv Jhangiani', 'Buying at least 3 paintings by Sheila MacNeill', 'Getting Air (and GIFing it) with Terry Greene', 'Admiring the castle view of @ammienoot', 'Humbly thanking Robert Daniel', 'Gone curling with Clint Lalonde', 'Dreaming of walking the Flaggy Shore with Catherine Cronin', 'High fiving with Hugh Blackmer', 'Jamming in the studio with Irwin Devries', 'Getting inspired by economics listening to Jim Luke', 'Sending profuse thanks to Jim McGee', 'Checking our spelling of Autumm Caines', 'Peeking in  Barbara Ganley\'s garden', 'Greasing the tubes for transmission', 'Making a GIF with a hard G', 'Smiling at you for being a good attributor', 'Saying thanks to @SenorG for spreading the good word', 'Snickering at the people who keep saying flickr is dead',  'Feeding the squirrels who spin the turbines', 'Eating tacos with Ken Bauer', 'Bueller? Bueller?', 'Barking like a big dog', 'Has anyone seen my data? Jason?', 'Wondering about the meaning of life', 'Wishing Brian Lamb would blog more', 'Wondering if Jim Groom really exists', 'Knocking on the doors of the Emerald Castle saying please give us some API data', 'Crosswiring the figwitz circuit', 'Gazing up at the sky', 'Getting the lovely stuff', 'Sautéing onions and garlic in butter', 'Being cool in school like @bennettscience', 'Charging the flux capacitor',  'Engaging the Serendipity Happenstancer', 'Tossing frisbees', 'Making the donuts', 'Plugging in the Marshall amps and cranking the volume past 11', 'Pondering our measly existence', 'Asking Alexa for help',  'Double clutching and pushing the pedal to the floor', 'Whistling for Felix', 'Hoping for more nice sponsors on patreon' ];

	// Attach the message to the screen. Aren't we clever?	
	$('#attribution').text( funnymessages[Math.floor(Math.random()*funnymessages.length)] + '...');
}

// Create an alert if we have not generated a result
setTimeout("if (attrib_str == '') alert('Ouch, we seem to not be making contact with the flickr API, it might be taking a nap. It may need more time, so you can let this spin and enjoy the funny messages, or perhaps try later.')", 10000);

// OTHER STUFF -------------------------------------------------------------------------
// placeholder for attribution string, to be built later
var attrib_str = '';
