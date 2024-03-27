import Skill from "./Skill";

export default function SkillList() {
  return (
      <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="🗝️" color="#C5DBC4" />
      <Skill skill="JavaScript " emoji="🗝️" color="#F8A2A2" />
      <Skill skill="React Redux" emoji="🗝️" color="#F2D7E8" />
      <Skill skill="Node.JS express" emoji="🗝️" color="#F9DC5C" />
    </div>
  );
}
