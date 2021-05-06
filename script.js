let fullDate = new Date();
let year = fullDate.getFullYear();
let month = fullDate.getMonth();
let monthDay = fullDate.getDate();
let weekDay = fullDate.getDay();

let nextB = document.querySelector(".nextBut");
let backB = document.querySelector(".backBut");
let rightBlock = document.querySelector(".calendar");

nextB.addEventListener("click", (e)=>{
   month = month+1;
   if(month > 11){
      month =  0;
      year = year+1;
   }

   rightBlock.innerHTML = "";

   let monthName = getStrMonth(month);
   let mDays = monthDays(month);
   let monthFirstDay = getMonthStartDay(year, month);
   setbg(monthName);
   creatCalendar(year, mDays, monthName, monthDay, monthFirstDay);
});

backB.addEventListener("click", (e)=>{
   month = month-1;
   if(month < 0){
      month =  11;
      year = year-1;
   }

   rightBlock.innerHTML = "";

   let monthName = getStrMonth(month);
   let mDays = monthDays(month);
   let monthFirstDay = getMonthStartDay(year, month);
   setbg(monthName);
   creatCalendar(year, mDays, monthName, monthDay, monthFirstDay);
});

let monthName = getStrMonth(month);
let mDays = monthDays(month);
let monthFirstDay = getMonthStartDay(year, month);


function getStrMonth(month){
   switch(month){
      case 0: return "Январь";
      break;
      case 1: return "Февраль";
      break;
      case 2: return "Март";
      break;
      case 3: return "Апрель";
      break;
      case 4: return "Май";
      break;
      case 5: return "Июнь";
      break;
      case 6: return "Июль";
      break;
      case 7: return "Август";
      break;
      case 8: return "Сентябрь";
      break;
      case 9: return "Октябрь";
      break;
      case 10: return "Ноябрь";
      break;
      case 11: return "Декабрь";
      break;

   }
}

function monthDays(month){
   let days = 0;

   if((month+1) === 2){
      days = 29;
   }
   else if((month+1)%2 === 0 && (month+1)<8){
      days = 30;
   }else if((month+1)%2 === 0 && (month+1)>7){
      days = 31
   }else if((month+1)%2 !== 0 && (month+1)<8){
      days = 31
   }else if((month+1)%2 !== 0 && (month+1)>7){
      days = 30
   }

   return days;
}

function getMonthStartDay(year, month){
   let d = new Date(year, month, 1);
   return d.getDay();
};

function creatCalendar(year, monthDays, monthName, monthDay, startD){
   let calendar  = document.createElement("div");
   calendar.className = "calendarFrame";

   let calenderHeader = document.createElement("div");
   let headerTitle = document.createElement("div");
   headerTitle.innerHTML="Season Calendar";
   calenderHeader.className = "calendarHeader";
   headerTitle.className = "headerTitle";
   calenderHeader.appendChild(headerTitle);

   let calendarYear = document.createElement("div");
   calendarYear.className = "calendarYear";
   calendarYear.innerHTML = year;

   let calendarMonth = document.createElement("div");
   calendarMonth.className = "calenderMonth";
   calendarMonth.innerHTML = monthName;

   let calendarTable = document.createElement("div");
   calendarTable.className = "calendarTable";


   let arrwd = ["Понедельник", "Вторник", "Среда", "Четверк", "Пятьница", "Субота", "Воскресения"];
   let weekDays = document.createElement('div');
      weekDays.className = "weekDays";
      for(let i=0; i<7; i++){
         let wd = document.createElement("div");
         wd.className="weekD";
         wd.innerHTML = arrwd[i];
         weekDays.appendChild(wd);
      }

   let days = monthDays;
   let  startDay = startD;
   let forCount = 0;
   if(startDay+days > 7*5){
      forCount = 6*7;
   }
   else{
      forCount = 5*7;
   }

   let j=1;
   for(let i=1; i<=forCount; i++){
      if(i<startDay){
         let calerdarDay = document.createElement('div');
         calerdarDay.innerHTML = "";
         calendarTable.appendChild(calerdarDay);
         calerdarDay.className = "calenderDays";
      }else{
         if(j<=days){
            let calerdarDay = document.createElement('div');
            calerdarDay.innerHTML = j;
            calendarTable.appendChild(calerdarDay);
            calerdarDay.className = "calenderDays";
            if(monthDay === j){
               calerdarDay.style = "background-color: green;";
            }
            j++;
         }else{
            let calerdarDay = document.createElement('div');
            calerdarDay.innerHTML = "";
            calendarTable.appendChild(calerdarDay);
            calerdarDay.className = "calenderDays";
            j++;
         }
      }

      
   }

   let doc = document.querySelector('.calendar');
   calenderHeader.appendChild(calendarYear);
   calenderHeader.appendChild(calendarMonth);
   calendar.appendChild(calenderHeader);
   calendar.appendChild(weekDays);
   calendar.appendChild(calendarTable);
   doc.appendChild(calendar);
   
};

function setbg(month){
   switch(month){
      case "Декабрь":
      case "Январь":
      case "Февраль":
      document.body.style = "background-image: url('./images/winter.jpg');";
      break;
      case "Март":
      case "Апрель":
      case "Май":
      document.body.style = "background-image: url('./images/sping.jpg');";
      break;
      case "Июнь":
      case "Июль":
      case "Август":
      document.body.style = "background-image: url('./images/summer.jpg');";
      break;
      case "Сентябрь":
      case "Октябрь":
      case "Ноябрь":
      document.body.style = "background-image: url('./images/autunm.jpg');";
      break;
   }
}

setbg(monthName);
creatCalendar(year, mDays, monthName, monthDay, monthFirstDay);

