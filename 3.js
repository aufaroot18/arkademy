const cetakPola = (input) => {
	var data = [];
	if (input %2 == 1) {
		for (let i=0; i<input; i++) {
			for (let j=0; j<input; j++) {
				data.push("*");
			}
			console.log(data);
			data = [];
		}
	}
	else {
		console.log("harus bilangan ganjil");
	}
}

cetakPola(5);