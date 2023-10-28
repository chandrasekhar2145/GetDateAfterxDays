const addDays = require("date-fns/addDays");

const GetDateAfterxDays = (days) => {
  const date = addDays(new Date(22, 7, 2020), days);
  return `${date.getDate()}-${date.getMoth() + 1}-${date.getFullYear()}`;
};

module.exports = GetDateAfterxDays;
