function createNote(noteTitle , noteBody){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let xButton = document.createElement("button");

    xButton.classList.add("delete");

    let xText = document.createTextNode("X");
    let h2TN = document.createTextNode(noteTitle);
    let pTN = document.createTextNode(noteBody);

    h2.appendChild(h2TN);
    p.appendChild(pTN);
    xButton.appendChild(xText);

    a.appendChild(h2);
    a.appendChild(xButton);
    a.appendChild(p);
    a.setAttribute("href", "#");

    li.appendChild(a);
    document.getElementById("notes").appendChild(li);
}

function createNoteFromInput(e){
    e.preventDefault();
    let noteTitle = document.getElementById("new-note-title-input").value;
    let noteBody = document.getElementById("new-note-body-input").value;
    document.getElementById("new-note-title-input").value="";
    document.getElementById("new-note-body-input").value="";
    createNote(noteTitle , noteBody);
}

document
    .getElementById("inputform")
    .addEventListener("submit",createNoteFromInput , false);