import PropTypes from "prop-types";

const SkillItem = ({ title, icon, text }) => {
  return (
    <div class='flip-card mx-1'>
      <div class='flip-card-inner'>
        <div class='flip-card-front'>
          {icon}
          <h5>{title}</h5>
        </div>
        <div class='flip-card-back'>
          <p className='skills-text'>{text}</p>
        </div>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SkillItem;
