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
export default { addContact, deleteContact, changeFilter };
