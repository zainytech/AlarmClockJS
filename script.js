//********************General JS using OOP to make code more understandable**********************//
class AlarmClock {
  constructor() {

  }
  showTime() {
    const time = document.getElementsByClassName("time")[0];
    let hours = 1, minutes = 1, seconds = 1, ampm;
    setInterval(() => {
      const currentTime = new Date();
      hours = currentTime.getHours();
      hours = hours % 12;
      hours = hours == 0 ? 12 : hours;
      this.hours = hours;
      minutes = currentTime.getMinutes();
      this.minutes = minutes;
      seconds = currentTime.getSeconds();
      this.seconds = seconds;
      ampm = hours > 12 ? "AM" : "PM";
      this.ampm = ampm;
      time.innerHTML = `Time is ${hours}:${minutes}:${seconds} ${ampm}`;
    }, 1000)

  }
  selectTime() {
    const setAlarm = document.getElementsByClassName("setAlarm")[0];
    const hoursstr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const minutesstr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
    const hoursOption = `<select>${hoursstr.map(number => `<option>${number}</option>`).join("")}</select>`;
    const minutesOption = `<select>${minutesstr.map(number => `<option>${number}</option>`).join("")}</select>`;
    const ampmOption = "<select><option>AM</option><option>PM</option></select>"
    setAlarm.innerHTML = `Hours:${hoursOption} Minutes:${minutesOption} ${ampmOption}`;
    this.setAlarm = setAlarm;
  }
  selectedTime() {
    const hoursSelect = this.setAlarm.querySelector("select:first-child");
    const minutesSelect = this.setAlarm.querySelector("select:nth-child(2)");
    const ampmSelect = this.setAlarm.querySelector("select:nth-child(3)");
    let selectedHours = hoursSelect.value;
    let selectedMinutes = minutesSelect.value;
    let selectedampm = ampmSelect.value;

    hoursSelect.addEventListener("change", () => {
      selectedHours = hoursSelect.value;
      this.selectedHours = selectedHours
    });
    minutesSelect.addEventListener("change", () => {
      selectedMinutes = minutesSelect.value;
      this.selectedMinutes = selectedMinutes;
    });
    ampmSelect.addEventListener("change", () => {
      selectedampm = ampmSelect.value;
      this.selectedampm = selectedampm;
    });

  }
  calculateTime() {
    let remainingTime = 0;
    const remainingHours = this.selectedHours - this.hours;
    const remainingMinutes = this.selectedMinutes - this.minutes;
    const remainingSeconds = 60 - this.seconds;


    if (this.selectedampm == this.ampm) {

      // consoel.log("same same")
      remainingTime = (remainingHours * 60 * 60) + (remainingMinutes == 1 ? remainingMinutes * remainingSeconds : ((remainingMinutes - 1) * 60) + remainingSeconds);
      if (remainingTime < 0) {
        alert("plz enter valid time")
        return;
      }
      return remainingTime;
    } else {
      // console.log("but diffelenet")
      let remainingHoursChangedTime = Number(11 - this.hours) + Number(this.selectedHours);
      let remainingMinutesChangedTime = Number(60 - this.minutes) + Number(this.selectedMinutes);
      let remainingChangedTime = Number(Number(remainingHoursChangedTime) * 60 * 60) + Number(Number(remainingMinutesChangedTime) * 60) + Number(remainingSeconds);
      return remainingChangedTime;
    }

  }

}
let object = new AlarmClock();
object.showTime();
object.selectTime();
object.selectedTime();

const setbtn = () => {
  let result = object.calculateTime();
  if (result !== undefined) {
    console.log(result);
    remainingTime = document.getElementsByClassName("remainingTime")[0];
    setInterval(() => {
      if (result >= 0) {
        remainingTime.innerHTML = `Time remaining ${result--}s`;
      }
    }, 1000)

    setTimeout(() => {
      const audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav');
      audio.play();
    }, result * 1000)
  }
  else console.log("tme is invalid cant set alarm")

}
const clearbtn = () =>{
    
}


//****************General code without OOP concepts make it complex to understand**********************//

// const time = document.getElementsByClassName("time")[0];
// let hours = 1;
// let minutes = 1;
// let seconds = 1;
// let ampm;
// setInterval(() => {
//   const currentTime = new Date();
//   hours = currentTime.getHours();
//   hours = hours % 12;
//   hours = hours == 0 ? 12 : hours;
//   minutes = currentTime.getMinutes();
//   seconds = currentTime.getSeconds();
//   ampm = hours > 12 ? "AM" : "PM";
//   time.innerHTML = `Time is ${ hours }:${ minutes }:${ seconds } ${ ampm } `;
// }, 1000)

// const setAlarm = document.getElementsByClassName("setAlarm")[0];
// const hoursstr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// const minutesstr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
// const hoursOption = `< select > ${ hoursstr.map(number => `<option>${number}</option>`).join("") }</select > `;
// const minutesOption = `< select > ${ minutesstr.map(number => `<option>${number}</option>`).join("") }</select > `;
// const ampmOption = "<select><option>AM</option><option>PM</option></select>"
// setAlarm.innerHTML = `Hours:${ hoursOption } Minutes:${ minutesOption } ${ ampmOption } `;

// const hoursSelect = setAlarm.querySelector("select:first-child");
// const minutesSelect = setAlarm.querySelector("select:nth-child(2)");
// const ampmSelect = setAlarm.querySelector("select:nth-child(3)");
// let selectedHours = hoursSelect.value;
// let selectedMinutes = minutesSelect.value;
// let selectedampm = ampmSelect.value;

// hoursSelect.addEventListener("change", () => {
//   selectedHours = hoursSelect.value;
//   // console.log("selectedHours", selectedHours)
// });
// minutesSelect.addEventListener("change", () => {
//   selectedMinutes = minutesSelect.value;
//   // console.log("selectedMinutes", selectedMinutes)
// });
// ampmSelect.addEventListener("change", () => {
//   selectedampm = ampmSelect.value;
//   // console.log("selectedampm", selectedampm)
// });


// const setbtn = () => {
//   let totalRemainingTime = 0;
//   let remainingTime = 0;
//   const remainingHours = selectedHours - hours;
//   console.log("remainingHours", remainingHours);
//   const remainingMinutes = selectedMinutes - minutes;
//   const remainingSeconds = 60 - seconds;
//   console.log("remainingMinutes", remainingMinutes)
//   console.log(selectedampm);
//   if (selectedampm == ampm) {
//     // consoel.log("same same")
//     remainingTime = (remainingHours * 60 * 60) + (remainingMinutes == 1 ? remainingMinutes * remainingSeconds : ((remainingMinutes - 1) * 60) + remainingSeconds);
//     totalRemainingTime = remainingTime;
//   } else {
//     // console.log("but diffelenet")
//     let remainingHoursChangedTime = Number(11 - hours) + Number(selectedHours);
//     let remainingMinutesChangedTime = Number(60 - minutes) + Number(selectedMinutes);
//     let remainingChangedTime = Number(Number(remainingHoursChangedTime) * 60 * 60) + Number(Number(remainingMinutesChangedTime) * 60) + Number(remainingSeconds);
//     console.log("remainingHoursChangedTime", remainingHoursChangedTime);
//     console.log("remainingMinutesChangedTime", remainingMinutesChangedTime);

//     totalRemainingTime = remainingChangedTime;
//   }

//   console.log(totalRemainingTime);
//   if (remainingTime < 0) {
//     alert("plz enter valid time")
//   }

//   setTimeout(() => {
//     const audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav');
//     audio.play();
//   }, totalRemainingTime * 1000)
// }

// const clearbtn = () => {
//   console.log("cleRarbtn has been clicked");
// }
