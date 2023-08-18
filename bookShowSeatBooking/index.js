import { BookingData } from "./data.js"; 
let rootElement = document.querySelector('#root');

const drawSeats = (bookingData) => {
    let fragment = new DocumentFragment();

    bookingData.forEach((data) => {
        let mainDiv = document.createElement('div');
        let name = document.createElement('div');
        let mainID = data.id;
        name.innerHTML = `${data.name}-Rs. ${data.price}`;
        name.classList.add("marg-bottom")
        mainDiv.appendChild(name);
        
        data.rows.forEach((rowData) => {
            let rowDiv = document.createElement('div');
            rowDiv.innerHTML = rowData.row;
            rowDiv.classList.add('row')
            mainDiv.appendChild(rowDiv);
            rowData.seats.forEach((row) => {
                let rowLevelDiv = document.createElement('div');
                rowLevelDiv.innerHTML = row.seatNumber;
                if(row.bootingType === "no_seat"){
                    rowLevelDiv.classList.add('no-seat');
                } else if(row.bootingType === "vacant"){
                    rowLevelDiv.classList.add('seat-vaccant');
                    rowLevelDiv.style.cursor = 'pointer';
                    // rowLevelDiv.setAttribute('id', )
                } else if(row.bootingType === "blocked"){
                    rowLevelDiv.classList.add('seat-blocked');
                }else if(row.bootingType === "booked"){
                    rowLevelDiv.classList.add('seat-booked');
                }
                rowLevelDiv.setAttribute('id', `${mainID}-${rowData.row}-${row.id}`)
                rowDiv.appendChild(rowLevelDiv);
            })

        })
        fragment.appendChild(mainDiv);
    })
    rootElement.appendChild(fragment);
    rootElement.addEventListener('click', bookSeat);
}

function bookSeat(e){
    if(e.target.classList.contains('parcially-boocked')){
        e.target.classList.remove('parcially-boocked');
        e.target.classList.add('seat-vaccant')
    }else{
        e.target.classList.remove('seat-vaccant')
        e.target.classList.add('parcially-boocked')
    }
    console.log(e.target.classList.contains('parcially-boocked'));
}

drawSeats(BookingData);