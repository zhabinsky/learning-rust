/*

There are two types of strings:
1) Primitive str : immutavle and fixed length
2) String = Growable

*/


/*

my_str.replace
my_str.contains
my_str.split_whitespace

*/

pub fn run () {
	let hello = "hello"; // immutable
	let mut hello_growable = String::from("a"); // Growable

	println!("{}", hello.len());

	println!("capacity: {} {}", hello_growable, hello_growable.capacity());

	hello_growable.push('b');
	hello_growable.push_str("cd");
	
	println!("capacity: {} {}", hello_growable, hello_growable.capacity());

	println!("{:?}", (hello, hello_growable));


	let mut s = String::with_capacity(10); //


}