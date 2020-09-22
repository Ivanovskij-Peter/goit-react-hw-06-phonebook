import { createAction } from '@reduxjs/toolkit';

// const addContact = contact => ({
//   type: types.ADD,
//   payload: contact,
// });
const addContact = createAction('phonebook/add');

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });
const deleteContact = createAction('phonebook/delete');

// const changeFilter = value => ({
//   type: types.FILTER,
//   payload: value,
// });
const changeFilter = createAction('phonebook/filter');

export default { addContact, deleteContact, changeFilter };
