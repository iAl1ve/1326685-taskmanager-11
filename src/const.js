export const KEY_ESC = `Escape`;
export const KEY_ESC_CODE = 27;

export const COLOR = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`,
};

export const COLORS = Object.values(COLOR);

export const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

export const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const SORTS_NAME = [
  {
    type: `default`,
    text: `SORT BY DEFAULT`
  },
  {
    type: `date-up`,
    text: `SORT BY DATE up`
  },
  {
    type: `date-down`,
    text: `SORT BY DATE down`
  }
];

export const FilterType = {
  ALL: `all`,
  ARCHIVE: `archive`,
  FAVORITES: `favorites`,
  OVERDUE: `overdue`,
  REPEATING: `repeating`,
  TODAY: `today`,
};
