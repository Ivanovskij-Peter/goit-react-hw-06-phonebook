import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

function Filter({ filter, getFilterName }) {
  return (
    <>
      <input
        style={{
          display: 'block',
          marginTop: '5px',
          marginBottom: '10px',
          width: '100%',
        }}
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
        placeholder="find contact"
      ></input>
    </>
  );
}
const mapStateToProps = state => {
  const { filter, contacts } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilterName: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
