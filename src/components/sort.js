import AbstractComponent from "./abstract-component.js";
import {SORTS_NAME} from "../const.js";

const createTaskSortMarkup = (sort) => {
  const {type, text} = sort;
  return (
    `<a href="#" class="board__filter" data-sort-type="${type}">${text}</a>`
  );
};

const createSortingTemplate = (sorts) => {
  const sortsMarkup = sorts.map((it) => createTaskSortMarkup(it)).join(`\n`);

  return (
    `<div class="board__filter-list">
      ${sortsMarkup}
    </div>`
  );
};

export default class Sort extends AbstractComponent {
  constructor(sorts) {
    super();
    this._sorts = sorts;
    this._currenSortType = SORTS_NAME[0].type;
  }

  getTemplate() {
    return createSortingTemplate(this._sorts);
  }

  getSortType() {
    return this._currenSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}
