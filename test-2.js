function changeTimeFormat(time) {
  let [hour, minute, second] = time.slice(0, -2).split(":");
  const period = time.slice(-2);

  if (period === "PM" && hour !== "12") {
    hour = String(Number(hour) + 12);
  } else if (period === "AM" && hour === "12") {
    hour = "00";
  }

  return `${hour}:${minute}:${second}`;
}

const inputTime = "16:05:45AM";
const outputTime = changeTimeFormat(inputTime);
console.log(outputTime);
