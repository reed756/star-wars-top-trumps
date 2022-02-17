export const randomNumber = () => {
  return Math.ceil(Math.random() * 82);
};

export const getNoOfFilms = (...films) => {
  const filmsArr = films;
  return filmsArr.length;
};
