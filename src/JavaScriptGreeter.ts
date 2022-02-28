import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
    constructor(newGreeting: string){
        super(newGreeting);
    }
    greet(name: string): string {
        return `console.log(${super.greet(name)})`;
    }
}