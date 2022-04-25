const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const d = new Date();
function renderCalendar() {
    
    const monthTitle = $('.title-month')
    const yearTitle = $('.title-year')
    const year = d.getFullYear()
    
    const monthOfYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    
    const month = monthOfYear[d.getMonth()]
    // Gan gia ten thang qua index
    d.setDate(1)
    const indexFirstDayPresMonth = d.getDay()    
    // ngay 1 cua thang hien tai la thu may

    monthTitle.innerHTML = month
    yearTitle.innerHTML = year
    
    
    const dayOfMonth = $('.body ul')
    const finalDayPrevMonth = new Date(d.getFullYear(), d.getMonth(), 0).getDate()
    // ngay cuoi cung cua thang truoc
    const finalDayPresMonth = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate()
    // ngay cuoi cung cua thang hien tai
    
    
    let days = '';
    
    for(let i = indexFirstDayPresMonth; i > 0; i--) {
    
        days += `<li class ="out-day">${finalDayPrevMonth-i +1}</li>`
    }
    
    for (let i = 1; i <=finalDayPresMonth; i++) {
    
        if(i=== new Date().getDate() && d.getMonth() === new Date().getMonth()) {
        days += `<li class="today">${i}</li>`;
    
        } else {
    
            days += `<li>${i}</li>`;
        }
    }

    dayOfMonth.innerHTML = days
    const daynumber = $$('.body ul li')

    for (let i= 1;i < 42 - daynumber.length + 1; i++) {
        days += `<li class="out-day">${i}</li>`
    }

    dayOfMonth.innerHTML = days
}
renderCalendar()


const prevBtn = $('.prev-button')
const nextBtn = $('.next-button')

prevBtn.onclick = function() {
    d.setMonth(d.getMonth()-1)
    renderCalendar()
}
nextBtn.onclick = function() {
    d.setMonth(d.getMonth()+1)
    renderCalendar()
}