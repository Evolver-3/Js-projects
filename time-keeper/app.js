const months=[
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
]

const weekdays=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
const details=document.querySelector('details')
const giveaway =document.querySelector('.giveaway')
const deadlines=document.querySelectorAll(".deadline h4")


let date=new Date(2025,11,29,20,59,59 )
const dateFull=date.getFullYear();
const datehours=date.getHours();
const dateMinutes=date.getSeconds();

let month=date.getMonth();


let day=date.getDay();

const din=date.getDate();


giveaway.textContent=`giveaway ends on ${weekdays[day]} ${din}, ${months[month]} ${dateFull}, ${datehours}:${dateMinutes} pm`

const futureDate=date.getTime();


function timer(){
  const Today=new Date().getTime();

  const min=futureDate-Today;

  const oneDay=24*60*60*1000;
  const oneHour=60*60*1000;
  const oneMinutes=60*1000;

 

  let day=min/oneDay;
  day=Math.floor(day)

  let hours=Math.floor((min%oneDay)/oneHour);
 

  let minutes=Math.floor((min%oneHour)/oneMinutes)

  let seconds=Math.floor((min%oneMinutes)/1000)
  const values=[day,hours,minutes,seconds]

  function format(deadline){
    if(deadline<10){
      return deadline=`0${deadline}`
    }
    else{
      return deadline= `${deadline}`
    }
  }

  deadlines.forEach(function(deadline,index){
    deadline.innerHTML=format(values[index])
  })
 if(min<0){
  clearInterval(countInterval);
  giveaway.innerHTML=`<h4 class="expired"> sorry, this giveaway has expired </h4>`;

 
 }
}

let countInterval=setInterval(timer,1000)


