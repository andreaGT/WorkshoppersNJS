
console.log(add(getNums()));


function getNums(){
	var numbers = [];

	for (var i = process.argv.length - 1; i >= 2; i--) {
		numbers.push(process.argv[i]);
	}

	return numbers;
}

function add(numbers){
	var total=0;

	for (var i = numbers.length - 1; i >= 0; i--) {
		total += Number(numbers[i]);
	}

	return total;

}