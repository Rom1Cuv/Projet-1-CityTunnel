import assert from 'assert';
class Person {
    constructor(name, age, weeaboo) {
        this.name = name;
        this.age = age;
        this.weeaboo = weeaboo;
    }
    introduce() {
        return `My name is ${this.name} and I am ${this.age}`;
    }
    greets(name) {
        if (this.weeaboo === true) {
            return `Ohayo ${name}-chan`;
        } else {
            return `Hello ${name}`;
        }
    }
    match(Person) {
        if (Person.weeaboo === this.weeaboo) {
            return true;
        } else {
            return false;
        }
    }
}
// Begin of tests
//const assert = require("assert");
assert.strictEqual(typeof Person, "function", "Person class is undefined");
if (typeof Person === "function") {
    assert.strictEqual(new Person("John Doe", 30, false).name, "John Doe");
    assert.strictEqual(new Person("John Doe", 30, false).age, 30);
    assert.strictEqual(new Person("John Doe", 30, false).weeaboo, false);
    assert.strictEqual(
        typeof new Person().introduce,
        "function",
        "introduce method is undefined"
    );
    if (typeof new Person().introduce === "function") {
        assert.strictEqual(
            new Person("John Doe", 30, false).introduce(),
            "My name is John Doe and I am 30"
        );
    }
    assert.strictEqual(
        typeof new Person().greets,
        "function",
        "greets method is undefined"
    );
    if (typeof new Person().greets === "function") {
        assert.strictEqual(
            new Person("John Doe", 30, false).greets("Barbara"),
            "Hello Barbara"
        );
        assert.strictEqual(
            new Person("John Doe", 30, true).greets("Uzaki"),
            "Ohayo Uzaki-chan"
        );
    }
    assert.strictEqual(
        typeof new Person().match,
        "function",
        "match method is undefined"
    );
    if (typeof new Person().match === "function") {
        assert.strictEqual(
            new Person("John Doe", 30, false).match(
                new Person("Jane Doe", 30, false)
            ),
            true
        );
        assert.strictEqual(
            new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, false)),
            false
        );
        assert.strictEqual(
            new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, true)),
            true
        );
    }
}
// End of tests