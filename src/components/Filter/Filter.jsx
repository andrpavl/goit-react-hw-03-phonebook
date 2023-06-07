import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ value, handleChange }) {
  return (
    <label htmlFor="name">
      Find contacts by name
      <input
        className={css.filterInput}
        placeholder="Enter name"
        name="name"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
