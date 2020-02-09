pub fn run () {
	// print to console
	println!("hello from my print file");
	println!("{}", 1);
	println!("{0} is from {1}", "Vlad", "Vilnius");
	println!("{name} is from Vilnius", name = "Vlad");
	println!("{} of {:b} people know binary, the other half doesn't", 1, 2);
	
	println!("{:?}", (12 + 4, true, "hey")); // multiple values with tuple
}