/*
	variables hold promitives or refs
	variables are immutable by default
	vars are block-scoped
*/

pub fn run () {
	let name = "Vlad";
	let mut age = 19;
	println!("im {}, {}", name, age);
	age += 1;
	println!("{} is now {}", name, age);
	const SSN:i32 = 001;
	println!("his ssn is {}", SSN);

	let (title, description) = ("hey", "hey hey");
	println!("{:?}", (title, description))
}