function generateAkanName() {
  const day = parseInt(document.getElementById("Day").value);
  const month = parseInt(document.getElementById("Month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
if (!isValidDate(day, month, year)) {
  alert("Please enter a valid date.");
  return;
}

const date = Date(year, month - 1, day);
const dayOfWeek = calculateDayOfWeek(date);
const akanName = getAkanName(dayOfWeek, gender);

document.getElementById("result").textContent = `Your Akan name is ${akanName}`;

function isValidDate(day, month, year) {
  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    return false;
  }
  return true;
}

function calculateDayOfWeek(date) {
  const CC = Math.floor(date.getFullYear() / 100);
  const YY = date.getFullYear() % 100;
  const MM = date.getMonth() + 1;
  const DD = date.getDate();
  return (
    (Math.floor(CC / 4 - 2 * CC - 1) +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (MM + 1)) / 10) +
      DD) %
    7
  );
}

function getAkanName(dayOfWeek, gender) {
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else {
    return femaleNames[dayOfWeek];
  }
}
