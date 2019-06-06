/**
  Given a arbitrary JSON, return all the keys whoes value is "JOHN"
  {
    "a": {
      "e": [{"f": "JOHN", "g": "DOE"}]
    },
    "b": {
      "h": "JANE",
    },
    "c": {
      "i": {
        "k": "DOE",
        "l": {
          "m": {
            "n": "JOHN",
            "o": "DOE"
          }
        }
      },
      "j": "JOHN"
    },
    "d": "JOHN",
    "e": "DOE"
  }
*/


const  flattenObject = (ob) => {
	var returnObject = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				returnObject[i + '.' + x] = flatObject[x];
			}
		} else {
			returnObject[i] = ob[i];
		}
  }
  
	return returnObject;
};

/**
 * findKeys: finds the key for the provided value in the JSON object
 * Works by flattening the object, and then checking for value
 * @param {*} json the JSON object to search
 * @param {*} value the value to be searched for
 */
const findKeys = (json, value) => {
  const flattened = flattenObject(json)
  const keys = []

  for (let [key, item] of Object.entries(flattened)) {
    if(item == value){
      keys.push(key[key.length -1])
    }
  }

  return keys
}

// for the sample JSON above, this will return [ 'f', 'n', 'j', 'd' ]
// console.log(findKeys(testObj, 'JOHN'))

module.exports = findKeys
