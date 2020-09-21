import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

function Filter({ filter, contacts, getFilterName, addFilterArr }) {
  const FilterName = e => {
    const inputValue = e.target.value.toLowerCase();
    const visibleContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(inputValue),
    );

    addFilterArr(visibleContacts);
  };
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
        onChange={FilterName}
        placeholder="find contact"
      ></input>
    </>
  );
}
const mapStateToProps = state => {
  return { contacts: state.contacts.contacts };

  // const normalizedFilter = filter.toLowerCase();

  // return {
  //   contacts: visibleContacts,
  // };
};

const mapDispatchToProps = dispatch => ({
  addFilterArr: id => dispatch(actions.addFilterArr(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// (({ value }) =>
//     value.toLowerCase().includes(normalizedFilter),
//   );
