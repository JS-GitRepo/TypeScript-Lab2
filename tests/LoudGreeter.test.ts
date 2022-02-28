import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", ()=> {
    test("inherits the greeting property from parent", ()=> {
        const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
        expect(newLoudGreeter.greeting).toBe("Howdy");
    });
    test("greet is overwritten properly to account for 'extra'", ()=> {
        const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
        expect(newLoudGreeter.greet("Mitch")).toBe("Howdy, Mitch!!");
    });
    test("addVolume adds extra '!'s appropriately", ()=> {
        const newLoudGreeter: LoudGreeter = new LoudGreeter("Howdy");
        newLoudGreeter.addVolume();
        newLoudGreeter.addVolume();
        expect(newLoudGreeter.greet("Mitch")).toBe("Howdy, Mitch!!!!");
    });
});