function skillsMember() {
  var skills = ["HTML", "CSS", "JS", "React", "Node"];
  var member = {
    name: "John",
    age: 25,
    skills: skills,
  };
  // Write code here
  var memberSkills = member.skills;
  var newSkills = memberSkills.join(", ");
  return newSkills;
}