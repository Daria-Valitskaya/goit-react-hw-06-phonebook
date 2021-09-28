import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onChangeFilter } from "../../redux/Contacts/contacts-actions";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (event) =>
    dispatch(onChangeFilter(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
