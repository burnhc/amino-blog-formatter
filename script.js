function textStyle(){
    var fullTextStyle = document.getElementById("fullTextStyle");
	var numSpaces = document.getElementById("spacesBeforeLine").value;
	var customStart = document.getElementById("customStart").value;
	var textStyleString = "[";
	
	if (document.getElementById("center").checked == true) {
		textStyleString += "C";
	} else if (document.getElementById("left").checked == true) {
		textStyleString = textStyleString.replace("C", "");
	}
	
	if (document.getElementById("style1").checked == true) {
		textStyleString += "I";
	} else {
		textStyleString = textStyleString.replace("I", "");
	}
	
	if (document.getElementById("style2").checked == true) {
		textStyleString += "B";
	} else {
		textStyleString = textStyleString.replace("B", "");
	}
	
	if (document.getElementById("style3").checked == true) {
		textStyleString += "U";
	} else {
		textStyleString = textStyleString.replace("U", "");
	}
	
	if (document.getElementById("style4").checked == true) {
		textStyleString += "S";
	} else {
		textStyleString = textStyleString.replace("S", "");
	}
	
	textStyleString += "]";
		
	if (textStyleString == "[]") { //if no style, this will remove the empty brackets
		textStyleString = "";
	}
	
	var i;
	for (i = 0; i < numSpaces; i++) {
		textStyleString += " ";
	}
	
	textStyleString += customStart;
	
	fullTextStyle.value = textStyleString + "Sample text";
}

function checkIfFull() {
    var paragraph = document.getElementById("paragraph").value;
	var charPerLine = document.getElementById("charPerLine").value;
	if (paragraph != "" && charPerLine>=30) {
		textReformatted();
	}
}

function textReformatted(){
	var charIndex;
	var lastPosition = 0;
	var newLine = "";
	var reformattedTextString = "";
	
	var textStyle = document.getElementById("fullTextStyle").value;
	var charPerLine = document.getElementById("charPerLine").value;
	var paragraph = document.getElementById("paragraph").value;
	var reformattedText = document.getElementById("reformattedText");
	
	textStyle = textStyle.replace("Sample text", "");
	
	for (charIndex = 0; charIndex <= paragraph.length; charIndex++) {
		if (newLine.length == charPerLine) {
			while (paragraph.charAt(charIndex) != " ") {
				charIndex--;
			}
			
			newLine = paragraph.substring(lastPosition, charIndex);
			
			if (newLine == "") {
				newLine = newLine.replace("\n+", "\n");
			} else {
				reformattedTextString += textStyle + newLine.trim() + "\n";
			}
			
			lastPosition = charIndex;
			
		} else {
			newLine = paragraph.substring(lastPosition, charIndex);
		}
	}
	
	var lastLine = paragraph.substring(lastPosition, paragraph.length);
	reformattedTextString += textStyle + lastLine.trim();
	reformattedText.value = reformattedTextString;
}