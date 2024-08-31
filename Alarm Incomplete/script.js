// value assigning to html
const showTime = document.getElementById("current");
const weekDay = document.getElementById("day");
const alarmTime = document.getElementById("alarm");
const alarmbtn = document.getElementById("alarmbtn");
const alarmOn = document.getElementById("alarmOn");
let currentHours = 0;
// Array of days 
let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let alarmData = []
// 24 hour changed into 12 hours
function hourCorrect(hour){
  if (hour >= 12){
    hour = `${hour - 12} PM`
    return hour;
  }else if(hour === 0){
    hour = `${12} PM`
    return hour;
  }else{
    hour = `${hour} AM`
    return hour;
  }
}

// Action Code
function updateTime(){
  // Declaring all date variables
  const today = new Date();
  const hours = today.getHours();
  const day = today.getDay();
  const years = today.getFullYear();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  currentHours = hours
  weekDay.textContent = `Today is : ${dayList[day]}`;
  showTime.textContent = `Current time is : ${hourCorrect(hours)} : ${minutes} : ${seconds} `;
}

// Call to the action function
updateTime();

// Update time every Second
setInterval(updateTime, 1000);

// Alarm
alarmbtn.addEventListener("click", () =>{
  alarmData.push(parseInt(alarmTime.value));
  console.log(alarmData);
  alarmTime.value = "";  
  if (alarmData.includes(10)){
    alarmOn.play();
  }
})
console.log(alarmData)

