
/*function lowercaser(input){
	return input.toLowerCase();
}

const lowercaser = (input) => {
	return input.toLowerCase()
}*/

const lowercaser = (input) => {
	if (typeof input != "string"){
		throw ("Input is not a valid string")
	}
	return input.toLowerCase()
}

module.exports = lowercaser