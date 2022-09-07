$(document).ready(function () {
	let result = document.getElementById('result');
	let combinedNumbers;
	let addedNumbers;


	const add = (a) => {
		let myArray = a.split('');

		let newA = myArray.pop();

		let combine = myArray.join('');

		console.log(eval(combine));

		addedNumbers = eval(combine);

		result.innerHTML = addedNumbers;

		return addedNumbers;
	};

	$('#negative').click(() => {
		if (result.innerText == Math.abs(result.innerText)) {
			return (result.innerHTML *= -1);
		} else {
			return (result.innerHTML = Math.abs(result.innerText));
		}
	});

	$('.clicked-buttons').click(function () {

		combinedNumbers = result.innerHTML += this.innerText;

		return combinedNumbers;
	});

	$('#reset').click(function () {
		return (result.innerText = '');
	});

	$('#percentage').click(() => {
		return (result.innerText = result.innerText / 100);
	});

	$('#equal').click(function () {
		add(combinedNumbers);

		return (result.innerHTML = addedNumbers);
	});
});
