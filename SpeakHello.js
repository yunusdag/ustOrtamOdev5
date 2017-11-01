// STEP 2
(function (window/* STEP 5 */) {

	var helloSpeaker = {};/* STEP 3 : boş obje yaratılıp helloSpeakera variableına atama yapıldı.*/ 
	/* dolu obje olsaydı bu şekilde atama yapılıcaktı
	var helloSpeaker = {
		speak: function (name) {
			console.log(speakWord + " " + name)
		}
	};
	*/

	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {/* STEP 4 */
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;/* STEP 5 */

})(window/* STEP 5 */); // STEP 2