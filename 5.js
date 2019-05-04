const karakterAcak = (input) => {
	const character = "0123456789abcdefghijklmnopqrstuvwxyz";
	const data = input;
	var result = '';
	for (let i=0; i<data; i++) {
		for (let j=0; j<32; j++) {
			result += character.charAt(Math.random() * 32);
		}
		console.log(result);
		result = "";
	}
}

karakterAcak(3);