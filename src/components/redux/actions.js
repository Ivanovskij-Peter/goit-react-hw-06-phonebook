import types from './types';

const addContact = contact => ({
  type: types.ADD,
  payload: contact,
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});
const addFilterArr = data => ({
  type: types.NEW_FILTER_ARR,
  payload: data,
});
export default { addContact, deleteContact, changeFilter, addFilterArr };
