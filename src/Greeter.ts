export class Greeter {
    greeting: string;
    constructor(newGreeting: string){
        this.greeting = newGreeting;
    }
    greet(name: string): string {
        return `${this.greeting}, ${name}!`
    }
}