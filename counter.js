// COUNTER

let count = 0
let groups = []
let total = 0
let countEl = document.getElementById("count-el")
let groupsEl = document.getElementById("groups-el")
let totalEl = document.getElementById("total-el")

// increment
function increment() {
    count++
    console.log("Increment button was clicked.")
    countEl.innerText = count
}

// save
function add() {
    console.log("Add button was clicked.")
    if (count > 0) {
        groups.push(count)
        groupsEl.innerText = groups

        // update total passengers
        total += count
        totalEl.innerText = total

        count = 0
        countEl.innerText = count
    }
}

// undo
function undo() {
    console.log("Undo button was clicked.")

    // if we just want to reset the people entering
    if (count > 0) {
        count = 0
        countEl.innerText = count
    // if we want to remove the last group and update the total
    } else {
        if (total > 0) {
            let lastGroup = groups.pop()
            total -= lastGroup
            totalEl.innerText = total

            if (groups.length < 1) {
                groupsEl.innerText = "0"
            } else {
                groupsEl.innerText = groups
            }
        }
    }
}