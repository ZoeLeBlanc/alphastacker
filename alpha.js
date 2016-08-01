var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
alphabet = alphabet.toLowerCase();

var alphabetSplit = [];
alphabetSplit = alphabet.split(" ");
var stacker = "";
var stackString = "";



function stackLetters() {
	for (var i = 0; i < alphabetSplit.length; i++) {
		if(i % 6 === 0){
			alphabetSplit.splice(i,0, " ");
		}
	}
	for (var i = 0; i <alphabetSplit.length; i ++) {
		stacker = alphabetSplit.slice(0, i);
		stackString = stacker.toString();
		console.log(stacker);
	}
}
stackLetters(alphabetSplit);
/*
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
*/

