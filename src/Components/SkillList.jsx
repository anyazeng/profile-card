import Skill from "./Skill";

const skills = [
  {
    name:"HTML+CSS",
    level:"intermediate",
    color:"#C5DBC4"
  },
  {
    name:"JavaScript",
    level:"advanced",
    color:"#F8A2A2"
  },
  {
    name:"React Redux",
    level:"advanced",
    color:"#C5DBC4" 
  },
  {
    name:"Git GitHub",
    level:"intermediate",
    color:"#F2D7E8"
  },
  {
    name:"Bootstrap",
    level:"beginner",
    color:"#F2D7E8"
  },
  {
    name:"Node.JS express",
    level: "advanced",
    color:"#F8A2A2"
  }
]

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <Skill name={skill.name} color={skill.color} level={skill.level} key={skill.name} />
      ))}  
    </div>
  );
}

// color:"#F9DC5C"