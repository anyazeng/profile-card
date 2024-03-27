import PropTypes from 'prop-types'

export default function SkillList(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color}}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
  }
  
SkillList.propTypes = {
    color: PropTypes.string,
    skill: PropTypes.string,
    emoji: PropTypes.symbol
}