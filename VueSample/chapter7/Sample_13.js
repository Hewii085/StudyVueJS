class Person{
    constructor(name, tel, address){
        this.name = name;
        this.tel = tel;
        this.address = address;

        if(Person.count)
        {
            Person.count++;
        }
        else
        {
            Person.count = 1;
        }
    }

    static getPersonCount(){
        return Person.count;
    }

    toString(){
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
    }
}

class Employee extends Person{
    constructor(name, tel, address, empno, dept){
        super(name,tel,address);
        this.empno = empno;
        this.dept = dept;
    }

    toString()
    {
        return super.toString() + `, empno = ${this.empno}, dept=${this.dept}`;
    }

    getEmpInfo(){
        return `${this.empno} : ${this.name} 은 ${this.dept} 부서입니다`;
    }
}

var p1 = new Person("Lee", "111-1111-1111", "GyengGi");
var p2 = new Person("Kim","222-2222-2222", "Seoul");
console.log(p1.toString());
console.log(Person.getPersonCount());

let e1= new Employee("J","333-3333-3333","Seoul", "a123", "TF");
console.log(e1.getEmpInfo());
console.log(e1.toString());
console.log(Person.getPersonCount());