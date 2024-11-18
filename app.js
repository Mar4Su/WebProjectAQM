const sampleData = {
  busan: {
    yearly: [
      { year: 2022, temperature: 22.5, humidity: 60, pm25: 35, pm10: 50, nox: 20, nh3: 15, co2: 400, so2: 5, voc: 10 },
      { year: 2021, temperature: 21.8, humidity: 58, pm25: 30, pm10: 45, nox: 18, nh3: 12, co2: 390, so2: 6, voc: 12 },
    ],
    monthly: [
      { month: "January", temperature: 5.3, humidity: 70, pm25: 40, pm10: 55, nox: 22, nh3: 16, co2: 420, so2: 6, voc: 15 },
      { month: "February", temperature: 6.1, humidity: 68, pm25: 38, pm10: 50, nox: 20, nh3: 15, co2: 410, so2: 5, voc: 13 },
      { month: "March", temperature: 10.2, humidity: 65, pm25: 42, pm10: 58, nox: 25, nh3: 18, co2: 430, so2: 7, voc: 14 },
    ],
    weekly: [
      { week: "Week 1", temperature: 15.4, humidity: 62, pm25: 36, pm10: 48, nox: 19, nh3: 14, co2: 400, so2: 6, voc: 12 },
      { week: "Week 2", temperature: 16.3, humidity: 64, pm25: 40, pm10: 50, nox: 20, nh3: 15, co2: 410, so2: 5, voc: 13 },
      { week: "Week 3", temperature: 17.1, humidity: 66, pm25: 38, pm10: 52, nox: 22, nh3: 16, co2: 420, so2: 6, voc: 14 },
      { week: "Week 4", temperature: 16.8, humidity: 63, pm25: 35, pm10: 49, nox: 18, nh3: 14, co2: 400, so2: 5, voc: 12 },
    ],
    daily: [
      { day: "Monday", temperature: 20.5, humidity: 60, pm25: 30, pm10: 45, nox: 15, nh3: 12, co2: 380, so2: 4, voc: 11 },
      { day: "Tuesday", temperature: 21.0, humidity: 62, pm25: 32, pm10: 47, nox: 16, nh3: 13, co2: 390, so2: 5, voc: 12 },
      { day: "Wednesday", temperature: 21.5, humidity: 61, pm25: 35, pm10: 50, nox: 18, nh3: 14, co2: 400, so2: 5, voc: 12 },
      { day: "Thursday", temperature: 22.0, humidity: 63, pm25: 28, pm10: 43, nox: 14, nh3: 12, co2: 370, so2: 4, voc: 10 },
      { day: "Friday", temperature: 22.5, humidity: 64, pm25: 33, pm10: 48, nox: 17, nh3: 13, co2: 390, so2: 5, voc: 11 },
      { day: "Saturday", temperature: 23.0, humidity: 65, pm25: 40, pm10: 55, nox: 20, nh3: 15, co2: 420, so2: 6, voc: 13 },
      { day: "Sunday", temperature: 22.8, humidity: 66, pm25: 36, pm10: 50, nox: 19, nh3: 14, co2: 410, so2: 6, voc: 12 },
    ],
    hourly: [
      { hour: "00:00", temperature: 18.0, humidity: 70, pm25: 30, pm10: 45, nox: 15, nh3: 12, co2: 380, so2: 4, voc: 11 },
      { hour: "01:00", temperature: 17.8, humidity: 72, pm25: 32, pm10: 47, nox: 16, nh3: 13, co2: 390, so2: 5, voc: 12 },
      { hour: "02:00", temperature: 17.5, humidity: 71, pm25: 35, pm10: 50, nox: 18, nh3: 14, co2: 400, so2: 5, voc: 12 },
      { hour: "03:00", temperature: 17.0, humidity: 73, pm25: 28, pm10: 43, nox: 14, nh3: 12, co2: 370, so2: 4, voc: 10 },
      { hour: "04:00", temperature: 16.5, humidity: 75, pm25: 33, pm10: 48, nox: 17, nh3: 13, co2: 390, so2: 5, voc: 11 },
      { hour: "05:00", temperature: 16.0, humidity: 74, pm25: 40, pm10: 55, nox: 20, nh3: 15, co2: 420, so2: 6, voc: 13 },
      { hour: "06:00", temperature: 15.5, humidity: 76, pm25: 36, pm10: 50, nox: 19, nh3: 14, co2: 410, so2: 6, voc: 12 },
    ],
  },
  seoul: {
    yearly: [
      { year: 2022, temperature: 23.2, humidity: 58, pm25: 40, pm10: 60, nox: 25, nh3: 18, co2: 450, so2: 6, voc: 14 },
      { year: 2021, temperature: 22.7, humidity: 59, pm25: 38, pm10: 58, nox: 24, nh3: 17, co2: 440, so2: 5, voc: 13 },
    ],
    monthly: [
      { month: "January", temperature: 4.5, humidity: 65, pm25: 42, pm10: 62, nox: 27, nh3: 19, co2: 460, so2: 7, voc: 15 },
      { month: "February", temperature: 5.3, humidity: 67, pm25: 39, pm10: 59, nox: 24, nh3: 18, co2: 450, so2: 6, voc: 14 },
      { month: "March", temperature: 9.0, humidity: 64, pm25: 41, pm10: 61, nox: 26, nh3: 19, co2: 470, so2: 7, voc: 15 },
    ],
    weekly: [
      { week: "Week 1", temperature: 15.0, humidity: 61, pm25: 38, pm10: 57, nox: 22, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { week: "Week 2", temperature: 15.8, humidity: 63, pm25: 40, pm10: 60, nox: 24, nh3: 17, co2: 450, so2: 6, voc: 14 },
      { week: "Week 3", temperature: 16.2, humidity: 65, pm25: 41, pm10: 62, nox: 25, nh3: 18, co2: 460, so2: 6, voc: 15 },
      { week: "Week 4", temperature: 16.5, humidity: 62, pm25: 39, pm10: 58, nox: 23, nh3: 16, co2: 440, so2: 5, voc: 13 },
    ],
    daily: [
      { day: "Monday", temperature: 21.8, humidity: 59, pm25: 37, pm10: 56, nox: 21, nh3: 15, co2: 430, so2: 4, voc: 12 },
      { day: "Tuesday", temperature: 22.3, humidity: 60, pm25: 38, pm10: 57, nox: 22, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { day: "Wednesday", temperature: 22.8, humidity: 61, pm25: 40, pm10: 59, nox: 23, nh3: 17, co2: 450, so2: 6, voc: 14 },
      { day: "Thursday", temperature: 23.2, humidity: 62, pm25: 39, pm10: 58, nox: 23, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { day: "Friday", temperature: 23.5, humidity: 63, pm25: 41, pm10: 60, nox: 25, nh3: 18, co2: 460, so2: 6, voc: 15 },
      { day: "Saturday", temperature: 23.8, humidity: 65, pm25: 42, pm10: 62, nox: 27, nh3: 19, co2: 470, so2: 7, voc: 15 },
      { day: "Sunday", temperature: 23.6, humidity: 64, pm25: 40, pm10: 59, nox: 24, nh3: 17, co2: 450, so2: 6, voc: 14 },
    ],
    hourly: [
      { hour: "00:00", temperature: 18.5, humidity: 68, pm25: 38, pm10: 57, nox: 22, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { hour: "01:00", temperature: 18.2, humidity: 69, pm25: 39, pm10: 58, nox: 23, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { hour: "02:00", temperature: 17.8, humidity: 70, pm25: 40, pm10: 59, nox: 24, nh3: 17, co2: 450, so2: 6, voc: 14 },
      { hour: "03:00", temperature: 17.5, humidity: 71, pm25: 42, pm10: 62, nox: 27, nh3: 19, co2: 470, so2: 7, voc: 15 },
      { hour: "04:00", temperature: 17.2, humidity: 72, pm25: 40, pm10: 60, nox: 24, nh3: 17, co2: 450, so2: 6, voc: 14 },
      { hour: "05:00", temperature: 16.9, humidity: 73, pm25: 38, pm10: 57, nox: 22, nh3: 16, co2: 440, so2: 5, voc: 13 },
      { hour: "06:00", temperature: 16.5, humidity: 74, pm25: 39, pm10: 58, nox: 23, nh3: 16, co2: 440, so2: 5, voc: 13 },
    ],
  },
};



// Handle Data Fetching or Generation
function fetchOrGenerateData(location, period) {
  const locationData = sampleData[location.toLowerCase()];
  if (!locationData) {
    alert(`No data available for ${location}`);
    return [];
  }

  const periodData = locationData[period.toLowerCase()];
  if (periodData && periodData.length > 0) {
    return periodData;
  }

  // Generate Random Data if Missing
  return generateRandomData(period);
}

function updateDashboard(location, period) {
  const data = fetchOrGenerateData(location, period);

  if (data.length === 0) {
    alert("No data available for the selected location and period.");
    return;
  }

  // Calculate Averages
  const avgData = data.reduce(
    (acc, curr) => {
      acc.temperature += curr.temperature;
      acc.humidity += curr.humidity;
      acc.pm25 += curr.pm25;
      acc.pm10 += curr.pm10;
      acc.nox += curr.nox;
      acc.nh3 += curr.nh3;
      acc.co2 += curr.co2;
      acc.so2 += curr.so2;
      acc.voc += curr.voc;
      return acc;
    },
    { temperature: 0, humidity: 0, pm25: 0, pm10: 0, nox: 0, nh3: 0, co2: 0, so2: 0, voc: 0 }
  );

  const dataCount = data.length;

  console.log("Average Temperature:", avgData.temperature / dataCount);
  console.log("Average Humidity:", avgData.humidity / dataCount);

  // Update Cards
  document.getElementById("temperature").innerText = `${(avgData.temperature / dataCount).toFixed(2)} °C`;
  document.getElementById("humidity").innerText = `${(avgData.humidity / dataCount).toFixed(2)} %`;
  document.getElementById("pm25").innerText = `${(avgData.pm25 / dataCount).toFixed(2)} µg/m³`;
  document.getElementById("pm10").innerText = `${(avgData.pm10 / dataCount).toFixed(2)} µg/m³`;
  document.getElementById("nox").innerText = `${(avgData.nox / dataCount).toFixed(2)} ppb`;
  document.getElementById("nh3").innerText = `${(avgData.nh3 / dataCount).toFixed(2)} ppb`;
  document.getElementById("co2").innerText = `${(avgData.co2 / dataCount).toFixed(2)} ppm`;
  document.getElementById("so2").innerText = `${(avgData.so2 / dataCount).toFixed(2)} ppb`;
  document.getElementById("voc").innerText = `${(avgData.voc / dataCount).toFixed(2)} ppb`;

  // Hide loading element and show charts
  document.getElementById("loading").style.display = "none";
  document.getElementById("charts").style.display = "block";

  updateCharts(data, period);
}

// Update Charts
function updateCharts(data, period) {
  const labels = data.map((_, index) => {
    if (period === "hourly") return `${index}:00`;
    if (period === "daily") return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][index % 7];
    if (period === "weekly") return `Week ${index + 1}`;
    if (period === "monthly") return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][index % 12];
    if (period === "yearly") return `${2022 - index}`;
    return `Data ${index + 1}`;
  });

  barChart.data.labels = labels;
  barChart.data.datasets[0].data = data.map((d) => d.pm25);
  barChart.update();

  lineChart.data.labels = labels;
  lineChart.data.datasets[0].data = data.map((d) => d.co2);
  lineChart.update();
}

// Add Event Listener for Update Button
document.querySelector(".update-button").addEventListener("click", () => {
  const location = document.getElementById("station").value;
  const period = document.getElementById("pollutant").value;

  // Show loading state
  document.getElementById("loading").style.display = "block";
  document.getElementById("charts").style.display = "none";

  setTimeout(() => {
    updateDashboard(location, period);
  }, 500); // Simulated delay for loading
});

// Initialize Charts
const barChartCtx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(barChartCtx, {
  type: "bar",
  data: { labels: [], datasets: [{ label: "PM2.5 Levels", data: [], backgroundColor: "#36a2eb" }] },
  options: { responsive: true, maintainAspectRatio: false },
});

const lineChartCtx = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(lineChartCtx, {
  type: "line",
  data: { labels: [], datasets: [{ label: "CO2 Levels", data: [], borderColor: "#007bff", fill: false }] },
  options: { responsive: true, maintainAspectRatio: false },
});
