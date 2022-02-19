export const randomNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 83);
  if (randomNumber === 17) return 16;
  return randomNumber;
};

export const getNoOfFilms = (films) => {
  if (!films) return;
  const filmsArr = films;
  return filmsArr.length;
};

export const compare = (properyy, playerValue, computerValue) => {
  if (playerValue === "unknown" && computerValue !== "unknown") return false;
  if (playerValue !== "unknown" && computerValue === "unknown") return true;
  if (playerValue > computerValue) {
    return true;
  } else if (playerValue < computerValue) {
    return false;
  }
};
