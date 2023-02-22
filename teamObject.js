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
newTeamMember(newFirstName, newLastName, newAge, newSex) {
  let member = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge,
    sex: newSex
  }
  return this._teamMembers.push(member);
},
/*findWoman is used to loop through teamMembers and extract women by identifying 
if sex is listed as 'female'*/
findWoman () {
  let woman = [];
  for (let i in this.teamMembers) {
      let person = this.teamMembers[i];
      if (person.sex != 'female') {
        woman.push(person);
      }
    }
  console.log(woman) //prints: Rihanna,Singer,33,femaleAndrea,Yamagucci,55,female
  return woman
  }
};

const teamSize = trainWithNardo.teamMembers.length;
trainWithNardo.newTeamMember('Eric', 'Jones', 34, 'male');
console.log(trainWithNardo.findWoman()); //prints: undefined