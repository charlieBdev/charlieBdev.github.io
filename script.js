// COUNTER

//let countEl = document.getElementById("count-el")
let count = 0

// increment
function increment() {
    count++
    console.log("Increment button was clicked.")
    //countEl.innerText = count
    document.getElementById("count-el").innerText = count
}

// save
function save() {
    console.log("The count is " + count)
}