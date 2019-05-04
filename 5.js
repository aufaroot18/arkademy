const karakterAcak = (input) => {
	const character = "0123456789abcdefghijklmnopqrstuvwxyz";
	const data = input;
	var result = '';
	var results = [];

	for (let i=0; i<data; i++) {
		// untuk membuat karakter acak
		for (let j=0; j<32; j++) {
			result += character.charAt(Math.random() * 32);
		}

		// untuk melakukan pengecekan
		results.push(result);
		result = "";
	}

	// untuk menampilkan karakter menggunakan perulangan
	for (let i=0; i<results.length; i++) {
		console.log(results[i]);
	}
}

karakterAcak(3);