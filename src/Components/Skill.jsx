import PropTypes from 'prop-types'


export default function Skill({name, color, level}) {
    return (
      <div className="skill" style={{ backgroundColor: color}}>
        <span>{name}</span>
        <span>
          {level === "beginner" && "🏅"}
          {level === "intermediate" && "🎖️"}
          {level === "advanced" && "🏆"}
        </span>
      </div>
    );
  }
  
Skill.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.string
}