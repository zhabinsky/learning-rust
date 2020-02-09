# sources:
https://doc.rust-lang.org/rust-by-example
https://www.youtube.com/watch?v=zF34dRivLOw


# Things to remember

- [macros](https://doc.rust-lang.org/rust-by-example/macros.html)
```
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}
fn main() {
    say_hello!()
}
```