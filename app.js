const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')



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



    for (let i = 0; i < data.length; i++) {
        currentHrs[i].textContent = `${data[i].timeframes[duration].current}hrs`;
        previousHrs[i].textContent = `${time} - ${data[i].timeframes[duration].previous}`;
    }
}


dailyBtn.addEventListener('click', function () {
    duration = "daily";
    time = "Yesterday";
    dailyBtn.classList.add('active')
    fetchAndUpdateData();
});

weeklyBtn.addEventListener('click', function () {
    duration = "weekly";
    time = "Last week";
    fetchAndUpdateData();
});

monthlyBtn.addEventListener('click', function () {
    duration = "monthly";
    time = "Last month";
    fetchAndUpdateData();
});

function fetchAndUpdateData() {
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
}
