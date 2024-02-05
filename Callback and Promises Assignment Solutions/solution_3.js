let user = {
    firstName: "Tony",
    lastName: "Stark",
    ageInYears: 53,

}

function ageInDays(user,callback){
    const fullName = `${user.firstName} ${user.lastName}`;
    const ageInDays = user.ageInYears * 365;
    callback(fullName,ageInDays);
}

function logResult(fullName,ageInDays){
    console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
}


ageInDays(user,logResult)

