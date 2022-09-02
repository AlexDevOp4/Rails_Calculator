$(document).ready(function () {
	let result = document.getElementById('result');
	let equal = document.getElementById('equal');
	let combinedNumbers;
	let num1;
	let num2;

	const add = (a, b) => {
		let addedNumbers = a + b;

		console.log(addedNumbers);

		result.innerHTML = addedNumbers;
	};

	$('button').click(function () {
		if (this.innerText === 'AC') return (result.innerText = '');
		combinedNumbers = result.innerHTML += this.innerText;

		return combinedNumbers;
	});


	$('#equal').click(function () {

		if (combinedNumbers[1] === '+') {
			add(parseFloat(combinedNumbers[0]), parseFloat(combinedNumbers[2]));
		}
	});

});
