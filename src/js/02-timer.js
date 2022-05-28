import flatpickr from "flatpickr";
// const flatpickr = require("flatpickr");
import "flatpickr/dist/flatpickr.min.css";

console.log(flatpickr);
let selectedDate = null;

const options = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      console.log(selectedDate);
    },
  };
  flatpickr("#datetime-picker", options);