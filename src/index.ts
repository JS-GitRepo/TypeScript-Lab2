import { Greeter } from "./Greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";

const newGreeter = new Greeter("Sup");
const newJSGreeter = new JavaScriptGreeter("Sup");
const newLoudGreeter = new LoudGreeter("Sup");
const newHtmlGreeter = new HtmlGreeter("Sup");

console.log(newGreeter.greet("Jake"));
console.log(newJSGreeter.greet("Jake"));
console.log(newLoudGreeter.greet("Jake"));
console.log(newHtmlGreeter.greet("Jake"));
