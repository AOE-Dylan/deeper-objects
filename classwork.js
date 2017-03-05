/*
* Given the data segment "preview", create functions that satisfy the function
* descriptions. There are a total of 4 functions in this file
*/
var preview = {
	images: [
		{
		source: {
			url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?s=8598544207619a3020f808583e28b4c4",
			width: 256,
			height: 256
		},
		resolutions: [
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0",
				width: 108,
				height: 108
			},
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=2b071d25ede17deadf68cb9b7db13230",
				width: 216,
				height: 216
			}
		],
		variants: { },
		id: "KR8oJeB8ComfEPX0bkCe_p2L73IOmk0sTCsyNlfXSNg"
		}
	],
	enabled: false
}

/*
* Function that retrieves the value from the key "enabled"
*, stores the value in a string called "isEnabled", and returns the created 
* variable
*
* Note 		You must use the method "typeof" to ensure the return value is of type 
* 			string
* Return 	isEnabled (string)
*/

function retrieveEnabled(data){
	console.log(data);
	var isEnabled = "";
	isEnabled += data.enabled;
	console.log(typeof isEnabled);
	return isEnabled;
}

console.log(retrieveEnabled(preview));

/*
* Function that changes the value from the key "enabled" to true, and returns 
* the value from the key "enabled"
*
* Return 	value from key enabled (boolean)
*/
function returnEnabled(data){
	console.log(data);
	data.enabled = true;
	return data.enabled;
}

console.log(returnEnabled(preview));

/*
* Function that retrieves the urls only from the key "resolutions" 
* , stores the values in an array called "urls", and returns the created array
* 
* Return 	urls (array)
*/
function retrieveImages(data){
	//console.log(data);

	var urls = [];

	var dataResolutions = data.images[0].resolutions;
	for (var i = 0; i < dataResolutions.length; i++){
		//console.log(dataResolutions[i]);
		for (var key in dataResolutions[i]){
			//console.log(key);
			if (key === "url"){
				urls.push(dataResolutions[i][key]);
				//console.log(urls);
			}
		}
	}
	return urls;
}

console.log(retrieveImages(preview));

/*
* Function that retrieves the first nested key and value pairing
* from the values of "images", stores them in a new object called 
* "allKeyValuePairs", and returns the created object
*
* Format	var allKeyValuePairs = {
*				keys: [],
*				values: []
*			};
*
* Return 	allKeyValuePairs (object)
*/
function retrieveAllKeysAndValues(data){
	console.log(data);
	console.log(data.images);

	var allKeyValuePairs = {
		keys: [],
		values: []
	};

	for (var i = 0; i < data.images.length; i++){
		console.log(data.images[i]);
		for (var key in data.images[i]){
			console.log("***");
			console.log(key);
			allKeyValuePairs.keys.push(key);
			console.log(data.images[i][key]);
			allKeyValuePairs.values.push(data.images[i][key]);
		}
	}
	console.log(allKeyValuePairs);
}

console.log(retrieveAllKeysAndValues(preview));