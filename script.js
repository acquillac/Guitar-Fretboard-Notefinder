const key = document.querySelector(".key");
const keybtns = key.querySelectorAll('button');
const scale = document.querySelector(".scale");
const scaleBtns = scale.querySelectorAll('button');
const fretboard = document.querySelector(".fretboard");
const allnotes = fretboard.querySelectorAll('td');
const keyandscale = ["",""];
const btnhighlighted = "rgb(82, 117, 193)";
const btndefalt = "rgb(48, 72, 125)";

// add event listener to each key button
keybtns.forEach((elem) => {
    elem.addEventListener("click", () => {
        keyandscale[0] = elem.id; // update key
        removeStyle(keybtns, elem.id)
        removeFretboardStyle();
        elem.style.backgroundColor = btnhighlighted; // style selected button

        // a key and scale have been chosen update fretboard
        if (keyandscale[0] != "" && keyandscale[1] != "") {
            updateNotes(keyandscale[0], keyandscale[1]);
        }
    })
})

// add event listener to each scale button
scaleBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
        keyandscale[1] = elem.id; // update scale
        removeStyle(scaleBtns, elem.id)
        removeFretboardStyle();
        elem.style.backgroundColor = btnhighlighted; // style selected button
        
        // a key and scale have been chosen update fretboard
        if (keyandscale[0] != "" && keyandscale[1] != "") {
            updateNotes(keyandscale[0], keyandscale[1]);
        }
    })
})

// set all buttons to default color
function removeStyle(arr, keyid){
    arr.forEach((elem)=>{
        if (elem.id !== keyid){
            elem.style.backgroundColor = btndefalt;
        }
    })
}

// remove note background color
function removeFretboardStyle(){
    allnotes.forEach((elem) => {
        elem.style.backgroundColor = "#093748"; // set default background
    })
}

// update note background color
function updateFretboardBackground(notes){

    rootnote = true; // first note will be root
     
    notes.forEach((elem) => {

        // match note from array to css classes
        elemclass = "." + elem + "-bg";
        let allelements = document.querySelectorAll(elemclass); 

        // update each member of the css class
        allelements.forEach((classmember) => {
            if (rootnote){
                 classmember.style.backgroundColor = "#701b3d";
            }
            else {
                classmember.style.backgroundColor = "#791486";
            }
        }
        )

        rootnote = false;
    }
    )
}

// update fretboard 
function updateNotes (keychoice, scaleChoice){
    // match scale 
    switch (scaleChoice) {
        case "Major":
            majorScale(keychoice);
            break;
        case  "Minor":
            minorScale(keychoice);
            break;
        default:
        break;
    }
}

// update to Major-Scale
function majorScale(keychoice){
    // match key
    let notearr = [];
    switch (keychoice) {
        case "A": 
            // A-Major: A, B, C#, D, E, F#, G#
            notearr = ["a", "b", "csharp", "d", "e", "fsharp", "gsharp"];
        break;
        case "A#":
            // A#-Major: A#, C, D, D#, F, G, A
            notearr = ["asharp", "c", "d", "dsharp", "f", "g", "a"];
        break;
        case "B":
            // B-Major: B, C#, D#, E, F#, G#, A#
            notearr = ["b", "csharp", "dsharp", "e", "fsharp", "gsharp", "asharp"];
        break;
        case "C":
            // C-Major: C, D, E, F, G, A, B
            notearr = ["c", "d", "e", "f", "g", "a", "b"];
        break;
        case "C#":
            // C#-Major: C#, D#, F, F#, G#, A#, C
            notearr = ["csharp", "dsharp", "f", "fsharp", "gsharp", "asharp", "c"];
        break;
        case "D":
            // D-Major: D, E, F#, G, A, B, C#
            notearr = ["d", "e", "fsharp", "g", "a", "b", "csharp"];
        break;
        case "D#":
            // D#-Major: D#, F, G, G#, A#, C, D
            notearr = ["dsharp", "f", "g", "gsharp", "asharp", "c", "d"];
        break;
        case "E":
            // E-Major: E, F#, G#, A, B, C#, D#
            notearr = ["e", "fsharp", "gsharp", "a", "b", "csharp", "dsharp"];
        break;
        case "F":
            // F-Major: F, G, A, A#, C, D, E
            notearr = ["f", "g", "a", "asharp", "c", "d", "e"];
        break;
        case "F#":
            // F#-Major: F#, G#, A#, B, C#, D#, F
            notearr = ["fsharp", "gsharp", "asharp", "b", "csharp", "dsharp", "f"];
        break;
        case "G":
            // G-Major: G, A, B, C, D, E, F#
            notearr = ["g", "a", "b", "c", "d", "e", "f"];
        break;
        case "G#":
            // G#-Major: G#, A#, C, C#, D#, F, G
            notearr = ["gsharp", "asharp", "c", "csharp", "dsharp", "f", "g"];
        break;
        default:
            // Unkown Key
        break;
    }
    updateFretboardBackground(notearr);
}
//update to Minor-Scale
function minorScale(keychoice){
    // match key
    let notearr = [];
    switch (keychoice) {
        case "A": 
            // A-Minor: A, B, C, D, E, F, G
            notearr = ["a", "b", "c", "d", "e", "f", "g"];
        break;
        case "A#":
            // A#-Minor: A#, C, C#, D#, F, F#, G#
            notearr = ["asharp", "c", "csharp", "dsharp", "f", "fsharp", "gsharp"];
        break;
        case "B":
            // B-Minor: B, C#, D, E, F#, G, A
            notearr = ["b", "csharp", "d", "e", "fsharp", "g", "a"];
        break;
        case "C":
            // C-Minor: C, D, D#, F, G, G#, A#
            notearr = ["c", "d", "dsharp", "f", "g", "gsharp", "asharp"];
        break;
        case "C#":
            // C#-Minor: C# D#, E, F#, G#, A, B
            notearr = ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "b"];
        break;
        case "D":
            // D-Minor: D, E, F, G, A, A#, C
            notearr = ["d", "e", "f", "g", "a", "asharp", "c"];
        break;
        case "D#":
            // D#-Minor: D#, F, F#, G#, A#, B, C#
            notearr = ["dsharp", "f", "fsharp", "gsharp", "asharp", "b", "csharp"];
        break;
        case "E":
            // E-Minor: E, F#, G, A, B, C, D
            notearr = ["e", "fsharp", "g", "a", "b", "c", "d"];
        break;
        case "F":
            // F-Minor: F, G, G#, A#, C, C#, D#
            notearr = ["f", "g", "gsharp", "asharp", "c", "csharp", "dsharp"];
        break;
        case "F#":
            // F#-Minor: F#, G#, A, B, C#, D, E
            notearr = ["fsharp", "gsharp", "a", "b", "csharp", "d", "e"];
        break;
        case "G":
            // G-Minor: G, A, A#, C, D, D#, F
            notearr = ["g", "a", "asharp", "c", "d", "dsharp", "f"];
        break;
        case "G#":
            // G#-Minor: G#, A#, B, C#, D#, E, F#
            notearr = ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"];
        break;
        default:
            // Unkown Key
        break;
    }
    updateFretboardBackground(notearr);
}
