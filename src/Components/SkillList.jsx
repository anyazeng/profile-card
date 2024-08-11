import Skill from "./Skill";

const skills = [
  {
    name: "JavaScript & Typescript",
    level: "advanced",
    color: "#F8A2A2",
  },
  {
    name: "HTML+CSS",
    level: "intermediate",
    color: "#C5DBC4",
  },
  {
    name: "React Redux",
    level: "advanced",
    color: "#C5DBC4",
  },
  {
    name: "PostgresSQL, MongoDB",
    level: "beginner",
    color: "#C5DBC4",
  },
  {
    name: "Prisma",
    level: "beginner",
    color: "#F2D7E8",
  },
  {
    name: "Node.JS",
    level: "advanced",
    color: "#F8A2A2",
  },
  {
    name: "NestJs",
    level: "intermediate",
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
