import { Greeter } from "../src/Greeter";

describe("Greeter class", ()=> {
    test("greeting is set by the constructor", ()=> {
        const newGreeter: Greeter = new Greeter("Howdy");
        expect(newGreeter.greeting).toBe("Howdy");
    });
    test("the greet method properly returns a sentence", ()=> {
        const newGreeter: Greeter = new Greeter("Howdy");
        expect(newGreeter.greet("Bob")).toBe("Howdy, Bob!");
    });
});