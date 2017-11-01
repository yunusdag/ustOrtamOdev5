// STEP 6
(function (window/* STEP 9 */) {

	var byeSpeaker = {}; //STEP 7 boş obje yaratılıp helloSpeakera variableına atama yapıldı.

	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {/* STEP 8 */
		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;/* STEP 9 */

})(window/* STEP 9 */);// STEP 6
