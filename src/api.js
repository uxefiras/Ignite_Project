const api_Url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getCurrentYear = () => {
  const Year = new Date().getFullYear();
  return Year;
};

const Month = getCurrentMonth();
const Day = getCurrentDay();
const Year = getCurrentYear();
const currentDate = `${Year}-${Month}-${Day}`;
const lastcurrentDate = `${Year - 1}-${Month}-${Day}`;
const nextDate = `${Year + 1}-${Month}-${Day}`;

export const apiFullUrlGetter = () =>
  `${api_Url}&dates=${currentDate}&page_size=10`;
