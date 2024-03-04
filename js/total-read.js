const button1 = document.getElementById('button1');


function no1() {
    const removeHidden = document.getElementById('hidden-1')
    removeHidden.classList.remove('hidden')

    const current = document.getElementById('selected-seat');
    const currentSeat = current.innerText;
    const currentSeatNumber = parseInt(currentSeat);
    console.log(currentSeatNumber);

    const newSeatNumber = currentSeatNumber + 1;

    current.innerText = newSeatNumber
}

function handleButtonClick1() {
    const removeHidden1 = document.getElementById('hidden-1')
    removeHidden1.classList.remove('hidden')
}

function handleButtonClick2() {
    const removeHidden2 = document.getElementById('hidden-2')
    removeHidden2.classList.remove('hidden')
}

function handleButtonClick3() {
    const removeHidden3 = document.getElementById('hidden-3')
    removeHidden3.classList.remove('hidden')
}

function handleButtonClick4() {
    const removeHidden4 = document.getElementById('hidden-4')
    removeHidden4.classList.remove('hidden')
}

function handleButtonClick5() {
    const removeHidden5 = document.getElementById('hidden-5')
    removeHidden5.classList.remove('hidden')
}

function handleButtonClick6() {
    const removeHidden6 = document.getElementById('hidden-6')
    removeHidden6.classList.remove('hidden')
}
