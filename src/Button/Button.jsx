import PropTypes from 'prop-types';

export const Button = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
