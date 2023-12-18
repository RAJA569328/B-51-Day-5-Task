let Resume = '{"FirstName":"Raja","SecondName":"Ramanathan R","Age":24,"Education":{"Tenth":"Kendriya Vidyalaya IIT Madras","Diploma":"Sri SaiRam Polytechnic college","BE":"Sri SaiRam Institute Of Technology"},"Skill":["Javascript","ReactJS","HTML","CSS","Bootstrap","NodeJS"],"Country":"India","State":"Tamil Nadu","City":"Chennai","WorkExperience":"2 Years Non IT","PassedOut":2020,"Hobbies":["Driving","Cricket","Snooker","Podcast"]}'
console.log(JSON.parse(Resume))

/*
OUTPUT
{
FirstName: 'Raja',
SecondName: 'Ramanathan R',
Age: 24,
Education: {
    Tenth: 'Kendriya Vidyalaya IIT Madras',
    Diploma: 'Sri SaiRam Polytechnic college',
    BE: 'Sri SaiRam Institute Of Technology'
},
Skill: [ 'Javascript', 'ReactJS', 'HTML', 'CSS', 'Bootstrap', 'NodeJS' ],
Country: 'India',
State: 'Tamil Nadu',
City: 'Chennai',
WorkExperience: '2 Years Non IT',
PassedOut: 2020,
Hobbies: [ 'Driving', 'Cricket', 'Snooker', 'Podcast' ]
}
*/