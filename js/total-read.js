const button1 = document.getElementById('button1');

// button1.addEventListener('click', () => {

//     // selectedSeat

    // const current = document.getElementById('selected-seat');
    // const currentSeat = current.innerText;
    // const currentSeatNumber = parseInt(currentSeat);
    // console.log(currentSeatNumber);

    // const newSeatNumber = currentSeatNumber + 1;

    // current.innerText = newSeatNumber
// })


function no1(){
    const removeHidden = document.getElementById('hidden-1')
    removeHidden.classList.remove('hidden')

    const current = document.getElementById('selected-seat');
    const currentSeat = current.innerText;
    const currentSeatNumber = parseInt(currentSeat);
    console.log(currentSeatNumber);

    const newSeatNumber = currentSeatNumber + 1;

    current.innerText = newSeatNumber
}

function no1(){
    const removeHidden = document.getElementById('hidden-2')
    removeHidden.classList.remove('hidden')
}