import PropTypes from 'prop-types'

Button.propTypes = {
  text: PropTypes.string,
  css: PropTypes.string,
  handleOnClick: PropTypes.func,
  icon: PropTypes.element,
};

function Button({ text, css, handleOnClick, icon }) {
  return (
    <button
      onClick={handleOnClick}
      className={`flex items-center text-2xl ${css}`}
    >
      {text}{icon}
    </button>
  );
}

export default Button;
