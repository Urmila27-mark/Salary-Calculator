document.addEventListener("DOMContentLoaded", function () {
    getQuoteBasedOnTimeZone();
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

const quotes = {
    "Sunday": "Relax and recharge! 🌞 Tomorrow is a new start.",
    "Monday": "New week, new goals! 💪 Stay motivated.",
    "Tuesday": "Keep pushing forward! 🚀 You’re doing great.",
    "Wednesday": "You're halfway there! 🔥 Keep going!",
    "Thursday": "Almost there! 🌟 Stay focused.",
    "Friday": "Finish strong! 🎉 The weekend is near.",
    "Saturday": "Enjoy the weekend! 🌸 Reflect and recharge."
};

function calculateSalary() {
    let employeeName = document.getElementById("employeeName").value;
    let baseSalary = parseFloat(document.getElementById("baseSalary").value) || 0;
    let bonus = parseFloat(document.getElementById("bonus").value) || 0;
    let da = parseFloat(document.getElementById("da").value) || 0;
    let overtime = parseFloat(document.getElementById("overtime").value) || 0;
    let tax = parseFloat(document.getElementById("tax").value) || 0;

    let daAmount = (da / 100) * baseSalary;
    let grossSalary = baseSalary + bonus + daAmount + overtime;
    let taxAmount = (tax / 100) * grossSalary;
    let totalSalary = grossSalary - taxAmount;

    document.getElementById("employeeOutput").innerText = `Employee: ${employeeName}`;
    document.getElementById("totalSalary").innerText = `$${totalSalary.toFixed(2)}`;
}

function getQuoteBasedOnTimeZone() {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('quote').innerText = quotes[day] || "Stay Positive! ✨";
}