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
    

    if (count > 0) {
        count = 0
        countEl.innerText = count
    } else {
        if (groups.length > 0) {
            if (groups.length == 1) {
                groups.pop()
                groupsEl.innerText = 0
    
                total = 0
                totalEl.innerText = total
            } else {
                groups.pop()
                groupsEl.innerText = groups
    
                total -= groups[groups.length - 1]
                totalEl.innerText = total
            }
        }
    }
}