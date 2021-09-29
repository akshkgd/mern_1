// functions
function welcome(){
	return('this is a test');
}


let welcomeOutput = welcome()
console.log(welcomeOutput + ' this is a test')

// functions
function welcome(name2, age){
	return(name2 + ' welcome to the masterclass ' + age  );
}


let name = 'himanshu srivastava';
let age = 24;
console.log(welcome(name, age))

//Arrow functions

function demo(){
	
}

cube = (num) =>{
	num = num+1;
	return num*num*num
}
console.log(cube(5))

// few built in functions
// toLowerCase();
// toUpperCase();


console.log(Math.floor(Math.random()*1000000))

// arrays
let name = 'ashish';
name = 'ashish shukla';
let students = ['ashish', 'sharyu', 'tanzeela', 'prabhakar', 'vanitha', 'adithya', 'satya'];
students.pop();
students.push('akshay');
students.push('himanshu');

console.log(students);

// arrays
let name = 'ashish';
name = 'ashish shukla';
let students = ['ashish', 'sharyu', 'tanzeela', 'prabhakar', 'vanitha', 'adithya', 'satya'];


randomPicker = (num) =>{
	return (Math.floor(Math.random()*num))
}

let totalStudents = students.length
console.log(students[randomPicker(totalStudents)]);






















