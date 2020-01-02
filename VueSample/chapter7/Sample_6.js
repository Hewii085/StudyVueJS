function Person(name, yearCount){
    this.name = name;
    this.age=0;

    var incrAge = function(){
        this.age++;
    }

    for(var i=1; i <= yearCount; i++){
        incrAge();// this.age가 Person 안의 age는 아님.
        incrAge.apply(this);
    }
}

var p1 = new Person("Kim", 20);
console.log(p1.name +"'s age : "+p1.age);