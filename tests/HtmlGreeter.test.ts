import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreet Class", ()=> {
    test("inherits the greeting property from parent", ()=> {
        const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Howdy");
        expect(newHtmlGreeter.greeting).toBe("Howdy");
    })
    test("the tagName property is set by the constructor", ()=> {
        const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Howdy","div");
        expect(newHtmlGreeter.tagName).toBe("div");
    })
    test("the tagName property default to h1", ()=> {
        const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Howdy");
        expect(newHtmlGreeter.tagName).toBe("h1");
    })
    test("the greet method returns an appropriate string", ()=> {
        const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Howdy");
        expect(newHtmlGreeter.greet("Mitch")).toBe("<h1>Howdy, Mitch!</h1>");
    })
})