class person {
    name:string

    constructor(name: string) {
        this.name = name
        console.log(name)
    }
    run() {
        console.log("run....")
    }
    static talk() {
        console.log("talk")
    }
}

let p1 = new person("Son")
p1.run()
person.talk();
console.log(p1.run === person.prototype.run)