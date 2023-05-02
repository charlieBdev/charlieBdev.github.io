function readMore() {
    const x = document.getElementById("extraText");
    const btn = document.getElementById("btn-readMore")
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.textContent = "Read less";
    } else {
      x.style.display = "none";
      btn.textContent = "Read more";
    }
}

// let expandedText ="Hi! My name is Charlie. I'm an 'aspiring' Web/Software Developer from Sheffield. <br><br> I'm interested in the usual <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, of course, but I've also coded using <b>C#</b> (see the Sunny's Surfboards project below) and have a basic understanding of <b>Python</b>, <b>SQL</b>, and <b>PHP</b>. <br><br> In my spare time I've been studying Harvard's CS50 Web Programming with JavaScript and Python and I've just completed CS50 Introduction to Computer Science 🥳 I hope to get stuck into <b>React</b>, <b>SASS</b>, and maybe <b>TypeScript</b> in the not too distant future. <b>UX Design</b> is another area I'd like to explore. <br><br> My hobbies include listening to podcasts (The News Agents, TRIP, Ukrainecast, The Trawl, and Sweeney Talks), reading non-fiction, and gaming. <br><br> My biggest achievements are probably my <b>BSc</b> in Applied Computing 🎓 (from 2007!) and the fact that I'm a BJJ brown belt 🥋. Oh, and my two kids are awesome!";

// let isExpandable = false;

// document
//     .getElementById("readMore")
//     .addEventListener("click", function () {
//         let aboutMeText = document.getElementById("aboutMe");

//         if (!isExpandable) {
//             aboutMeText.innerHTML = expandedText;
//             document.getElementById("readMore").innerHTML = "Click to read less";
//             isExpandable = true;
//         } else {
//             // textContent used instead of innerHTML, just because!
//             aboutMeText.textContent = "Hi! My name is Charlie. I'm an 'aspiring' Frontend Developer from Sheffield.";
//             document.getElementById("readMore").textContent = "Click to read more";
//             isExpandable = false;
//         }
//     });