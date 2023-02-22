const trainWithNardo = {
  _teamMembers : [
    {firstName: 'Michael', lastName: 'Watts', age: 36, sex: 'male'},
    {firstName: 'Rihanna', lastName: 'Singer', age: 33, sex: 'female'},
    {firstName: 'Frank', lastName: 'Steez', age: 31, sex: 'male'},
    {firstName: 'Andrea', lastName: 'Yamagucci', age: 55, sex: 'female'}
  ],
get teamMembers () {
  return this._teamMembers
},
teamMember(newFirstName, newLastName, newAge, newSex) {
  let member = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge,
    sex: newSex
  }
  return this._teamMembers.push(member);
},
/*findWoman is used to loop through teamMembers and extract woman by identifying 
if sex is listed as 'female'*/
findWoman () {
  let woman = {};
  for (let i in this.teamMembers) {
      let person = this.teamMembers[i]
      console.log(person);
      if (Object.values(person).indexOf('female') != -1) {
        woman += Object.keys(person);
      }
    }
  console.log(typeof woman)
  }

};

const womansTeam = {
  _teamMembers :[],
  get teammates () {
  }}
//Use this variable when you want to know how big the team is.
const teamSize = trainWithNardo.teamMembers.length;
trainWithNardo.teamMember('Eric', 'Jones', 34, 'male');
//console.log(trainWithNardo.teamMembers.find(item => item.sex === 'female'));
//console.log(trainWithNardo.teamMembers);
//console.log(teamSize);

console.log(trainWithNardo.findWoman());