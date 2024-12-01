import Skill from "./Skill";

const skills = [
  {
    name: "JavaScript & TypeScript",
    level: "advanced",
    color: "#F8A2A2",
  },
  {
    name: "HTML+CSS",
    level: "intermediate",
    color: "#C5DBC4",
  },
  {
    name: "React",
    level: "advanced",
    color: "#C5DBC4",
  },
  {
    name: "PostgresSQL & MongoDB",
    level: "beginner",
    color: "#C5DBC4",
  },
  {
    name: "AWS",
    level: "beginner",
    color: "#F2D7E8",
  },
  {
    name: "Node.js",
    level: "advanced",
    color: "#F8A2A2",
  },
  {
    name: "Nest.js",
    level: "beginner",
    color: "#F2D7E8",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          color={skill.color}
          level={skill.level}
          key={skill.name}
        />
      ))}
    </div>
  );
}

// color:"#F9DC5C"
