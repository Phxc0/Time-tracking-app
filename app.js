const cardTitle = document.querySelectorAll('.card-title')
const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')
const test = document.getElementsByClassName(".current-hrs")



let duration = "daily"
let time = "Yesterday"

fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    const currentHrs = document.querySelectorAll('.current-hrs');
    const previousHrs = document.querySelectorAll('.previous-hrs');

    dailyBtn.addEventListener('click', ()=> {
   duration = "daily"
   time ="Yesterday"
      appendData(data)

})
    weeklyBtn.addEventListener('click', ()=> {
   duration = "weekly"
   time ="Last week"
      appendData(data)
})
    monthlyBtn.addEventListener('click', ()=> {
   duration = "monthly"
   time ="Last month"
   appendData(data)
})

    for (let i = 0; i < data.length; i++) {
        currentHrs[i].textContent = `${data[i].timeframes[duration].current}hrs`;
        previousHrs[i].textContent = `${time} - ${data[i].timeframes[duration].previous}`;
    }
}


