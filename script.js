(function () {
    "use strict";

    const button = document.querySelector('.btn');
    const birthDay = document.getElementById("day");
    const birthMonth = document.getElementById("month");
    const birthYear = document.getElementById("year");
    const years = document.querySelector("#years");
    const months = document.querySelector("#months");
    const days = document.querySelector("#days");
    const erroTextYear = document.querySelector(".error-text-year");
    const erroTextMonth = document.querySelector(".error-text-month");
    const erroTextDay = document.querySelector(".error-text-day");
    const h6s = document.querySelectorAll("h6");
    const errorBorders = document.querySelectorAll("input");

     function animateValue(element, start, end, duration) {
       let current = start;
       let range = end - start;
       let increment = end > start ? 1 : -1;
       let stepTime = Math.abs(Math.floor(duration / range));
       let timer = setInterval(function () {
         current += increment;
         element.textContent = ` ${current}`;
         if (current == end) {
           clearInterval(timer);
         }
       }, stepTime);
    }

    // Restrict input to numbers only
    [birthDay, birthMonth, birthYear].forEach((input) => {
        input.addEventListener(".input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        });
    });

    function checkAge() {
        const day = parseInt(birthDay.value, 10);
        const month = parseInt(birthMonth.value, 10);
        const year = parseInt(birthYear.value, 10);

        const currentDate = new Date();
        const birthDate = new Date(year, month - 1, day);

        // Reset error messages and styles
        function resetError() {
            erroTextDay.innerHTML = "";
            erroTextMonth.innerHTML = "";
            erroTextYear.innerHTML = "";
            h6s.forEach((h6) => {
                h6.style.color = "var(--Smokey-grey)";
            });
            errorBorders.forEach((error) => {
                error.style.borderColor = "var(--Light-grey)";
            });
    }

    resetError();

    let hasError = false;

    function update() {
      h6s.forEach((h6) => {
        h6.style.color = "var(--Light-red)";
      });
      years.innerHTML = "--";
      months.innerHTML = "--";
      days.innerHTML = "--";
    }

    // Check if the entered date is valid
    if (isNaN(day) || day < 1 || day > 31) {
      erroTextDay.innerHTML = "Invalid day";
      document.querySelector(".h6").style.color =
        "var(--Light-red)";
      birthDay.style.borderColor = "var(--Light-red)";
      birthMonth.style.borderColor = "var(--Light-red)";
      birthYear.style.borderColor = "var(--Light-red)";
      hasError = true;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      erroTextMonth.innerHTML = "Invalid month.";
      document.querySelector(".h6").style.color =
        "var(--Light-red)";
      birthMonth.style.borderColor = "var(--Light-red)";
      birthDay.style.borderColor = "var(--Light-red)";
      birthYear.style.borderColor = "var(--Light-red)";
      hasError = true;
    }

    if (isNaN(year) || year < 1 || year > currentDate.getFullYear()) {
      erroTextYear.innerHTML = "Invalid year.";
      document.querySelector(".h6").style.color =
        "var(--Light-red)";
      birthYear.style.borderColor = "var(--Light-red)";
      birthDay.style.borderColor = "var(--Light-red)";
      birthMonth.style.borderColor = "var(--Light-red)";
      hasError = true;
    }

    if (hasError) {
      update();
      return;
    }

    // Calculate the age
    if (birthDate <= currentDate) {
      let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
      let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
      let ageInDays = currentDate.getDate() - birthDate.getDate();

      if (ageInDays < 0) {
        const lastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          birthDate.getDate()
        );
        const daysInLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
        ageInDays =
          daysInLastMonth - lastMonth.getDate() + currentDate.getDate();
        ageInMonths--;
      }

      if (ageInMonths < 0) {
        ageInMonths = 12 + ageInMonths;
        ageInYears--;
      }

      years.textContent = ageInYears;
      months.textContent = ageInMonths;
      days.textContent = ageInDays;

      // had to comment out because of the glich
      animateValue(years, 0, ageInYears, 1500);
      animateValue(months, 0, ageInMonths, 1500);
      animateValue(days, 0, ageInDays, 1500);
     }
   }
  button.addEventListener("click", checkAge);
})();

















        





