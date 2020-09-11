class person {
    name:string

    constructor(name: string) {
        this.name = name
        console.log(name + "person constructor")
    }
    run() {
        console.log("run....")
    }
    static talk() {
        console.log("talk")
    }
}

class employees extends person{
    constructor(name :string)
    {
        super(name)
        console.log(name + + "employees constructor")
    }
    
}

let p1 = new person("Son")
p1.run()
person.talk();
console.log(p1.run === person.prototype.run)

let e = new employees("E")
