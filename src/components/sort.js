import {createElement} from "../utils.js";

const createTaskSortMarkup = (sort) => {
  const {type, text} = sort;
  return (
    `<a href="#" class="board__filter" data-sort-type="${type}">${text}</a>`
  );
};

const createSortingTemplate = (sorts) => {
  const sortsMarkup = sorts.map((it, i) => createTaskSortMarkup(it, i === 0)).join(`\n`);

  return (
    `<div class="board__filter-list">
      ${sortsMarkup}
    </div>`
  );
};

export default class Sort {
  constructor(sorts) {
    this._element = null;
    this._sorts = sorts;
  }

  getTemplate() {
    return createSortingTemplate(this._sorts);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
