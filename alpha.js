var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
alphabet = alphabet.toLowerCase();
/*for (var i = 0; i < alphabet.length; i++) {
	alphabet = alphabet.charAt(i);
	console.log(alphabet[i]);
}
for (var i = 0; i < alphabet.length; i++) {
	alphabet = alphabet.split(i, ' ');
	console.log(alphabet[i]);
}

for (var i = 0; i < alphabetSplit.length; i++){
		var letters = alphabetSplit[i];
		var stacker = "";
		stacker = letters.push('i++');
		console.log(stacker);
	}
*/
var alphabetSplit = [];
alphabetSplit = alphabet.split(" ");
var stacker = "";
var stackString = "";
var result = "";



/*function stackLetters() {
	for (var i = 0; i < alphabetSplit.length; i++) {
		var stacker = alphabetSplit.slice(0, i);
	}
	var stackString = stacker.toString();
	console.log(stackString);
} 
stackLetters(alphabetSplit);
function splitStringAtInterval (string, interval) {
  var result = [];
  for (var i=0; i<string.length; i+=interval)
    result.push(string.substring (i, i+interval));
  return result;
}*/




function stackLetters() {
	for (var i = 0; i < alphabetSplit.length; i++) {
		if (i%5 == 0){
			stacker += " " + alphabetSplit[i];
		} else {
			stacker += alphabetSplit[i];
		}
		stackString = stacker.toString();
		console.log(stackString);
	}
     
}
stackLetters(alphabetSplit);

/*function splitLetters(str, n) {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n));
    }
    console.log(ret);
}
splitLetters(stackString, 6).join('$');

function stackLetters(alpha, interval) {
	for (var i = 0; i < alpha.length; i++) {
		var stacker = alpha.slice(0, i);
		var stackerString = stacker.toString();
		if (stackerString[i] % interval === 0){
			return stackString.join(' ');
		}
	}
	console.log(stackerString);
}
stackLetters(alphabetSplit, 5);

function splitLetters() {
	for (var j = 0; j < stackString.length; j++) {
		if (stackString[j] % 5 == 0){
			stackString = stackString[j].split('').join(' ');
		}
		console.log(stackString);
	}
}
splitLetters(stackString);*/