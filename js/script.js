// Clock update
function updateClock() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clockDate").textContent = dateStr;
  document.getElementById("clockHour").textContent = h;
  document.getElementById("clockMin").textContent = m;
  document.getElementById("clockSec").textContent = s;
}
updateClock();
setInterval(updateClock, 1000);

// Footer year
document.getElementById("footerYear").textContent =
  new Date().getFullYear();
