// COUNTER

let count = 0
let groups = []
let total = 0
let countEl = document.getElementById("count-el")
let groupsEl = document.getElementById("groups-el")
let totalEl = document.getElementById("total-el")

let expandedText ="Hi! My name is Charlie. I'm an 'aspiring' Frontend Developer from Sheffield. <br><br> I'm interested in the usual <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, of course, but I've also coded using <b>C#</b> and have a basic understanding of <b>Python</b>, <b>SQL</b>, and <b>PHP</b>. <br><br> In my spare time I'm currently study Harvard's <b>CS50</b> (<b>Computer Science</b> with a lot of <b>C</b> so far) and hope to get stuck into <b>React</b>, <b>SASS</b>, and maybe <b>TypeScript</b> in the not too distant future. <b>UX Design</b> is another area I'd like to explore. <br><br> My hobbies include listening to podcasts (The News Agents, TRIP, Ukrainecast, The Trawl, and Sweeney Talks), reading non-fiction, and gaming. <br><br> My biggest achievements are probably my <b>BSc</b> in Applied Computing 🎓 (from 2007!) and the fact that I'm a BJJ brown belt 🥋. Oh, and my two kids are awesome!";

let isExpandable = false;

document
    .getElementById("readMore")
    .addEventListener("click", function () {
        let aboutMeText = document.getElementById("aboutMe");

        if (!isExpandable) {
            aboutMeText.innerHTML = expandedText;
            document.getElementById("readMore").innerHTML = "Click to read less";
            isExpandable = true;
        } else {
            aboutMeText.innerHTML = "Hi! My name is Charlie. I'm an 'aspiring' Frontend Developer from Sheffield.";
            document.getElementById("readMore").innerHTML = "Click to read more";
            isExpandable = false;
        }
    });

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