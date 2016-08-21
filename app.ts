import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
@Component({
    selector: 'helloWorld',
    template: `
    {{ name }}
`
})
class HelloWorld {
    name: string;
    constructor() {
        this.name = 'Hello world!';
    }
}
bootstrap(HelloWorld);
