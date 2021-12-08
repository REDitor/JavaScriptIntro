function addItem() {

    const textarea = document.getElementById('todoText');

    // write your solution here
    const newCard = document.createElement("div");
    newCard.className = "card";
    const newCardBody = document.createElement("div");
    newCardBody.className = "card-body";

    const paragraph = document.createElement("p");
    const newContent = document.createTextNode(textarea.value);

    //organise card
    paragraph.appendChild(newContent);
    newCardBody.appendChild(paragraph);
    newCard.appendChild(newCardBody);

    //add card to page
    const currentCard = document.getElementById("card1");
    document.body.insertBefore(newCard, currentCard);

    //reset the textarea
    textarea.value = '';
}