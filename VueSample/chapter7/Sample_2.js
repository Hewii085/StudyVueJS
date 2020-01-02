'use strict';

function addContact(name, mobile, home="No", address="No",email="No")
{
    var str = `name=${name}, mobile=${mobile}, home=${home},address=${address}, email=${email}`;
    console.log(str);
}

addContact("Kim", "111-1111-1111");
addContact("Cho", "222-2222-2222","333-3333-3333","Seoul");
