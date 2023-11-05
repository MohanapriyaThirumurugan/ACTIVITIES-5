// resumea in json formate  using for loop of loop in loop
 MyResumea={
    "Name":"MohanaPriya T",
    "role":"MERN full stack devloper",
    "Email id":"mohanapriyathirumurugan01@gmail.com",
    "PhoneNumber":"9367852147",
    "Address":["main road","xyz village","xyz dis"],
    "Education":{
        "10th":"rajavignesg higher school",
        "Cgpa":"8.4",
        "year":"2017",
        "12th":"sowdambika girls higher secondary school",
        "percentage":"60",
        "year":"2019"
    },
    "Skills":["HTML","CSS","JavaScript","Express","nodeJS","Mangodb"],
    "course copmpletion":"MERN FULL STACK DEVELOPER, completed at guvi",
    "project":{
        "finalyear":"cloud based projects using machine learning",
        "miniproject":" smart irrigation",
    },
    

 }
 // using for loop
 const skill =MyResumea.Skills;
    for(let i=0;i<skill.length;i++){
        console.log(skill[i]);
    }
// using for of loop
const education=MyResumea.Education;
for(let edusnew in education){
    console.log(edusnew)
}
// using for in loop
my=MyResumea.Address
for(let pro in my){
console.log(my[pro]);
}
// my resumea in json method
Resumea={
    "Name":"MohanaPriya T",
    "role":"MERN full stack devloper",
    "Email id":"mohanapriyathirumurugan01@gmail.com",
    "PhoneNumber":"9367852147",
    "Address":["main road","xyz village","xyz dis"],
    "Education":{
        "10th":"rajavignesg higher school",
        "Cgpa":"8.4",
        "year":"2017",
        "12th":"sowdambika girls higher secondary school",
        "percentage":"60",
        "year":"2019"
    },
    "Skills":["HTML","CSS","JavaScript","Express","nodeJS","Mangodb"],
    "course copmpletion":"MERN FULL STACK DEVELOPER, completed at guvi",
    "project":{
        "finalyear":"cloud based projects using machine learning",
        "miniproject":" smart irrigation",
    },
    

 }
 console.log(Resumea);