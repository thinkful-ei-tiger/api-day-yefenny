const items = [];
let hideCheckeditems = false;
let error = null;

const setError = function (sentError) {
  this.error = sentError;
};

const findById = function (id) {
  return this.items.find((currentItem) => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function (id, newData) {
  let foundItem = this.findById(id);
  Object.assign(foundItem, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter((currentItem) => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  error,
  setError,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};
