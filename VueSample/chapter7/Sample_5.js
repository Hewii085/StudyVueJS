function addContact({name, phone, email="No Email", age=0})
{
    console.log("name : " + name);
    console.log("phone: " + phone);
    console.log("email: " + email);
    console.log("age: " + age);
}

addContact({name:"Lee", phone:"111-1111-1111"})