function addItem() {
    const textarea = document.getElementById("todoText")

    const itemList = document.getElementById("itemList");

    const newCol = document.createElement("div");
    newCol.className = "col-md-6 col-xxl-4 pt-4";

    const newCard = document.createElement("div");
    newCard.className = "card";

    const newCardBody = document.createElement("div");
    newCardBody.className = "card-body";

    const paragraph = document.createElement("p");
    paragraph.innerHTML = textarea.value;

    newCardBody.appendChild(paragraph);
    newCard.appendChild(newCardBody);
    newCol.appendChild(newCard);

    itemList.appendChild(newCol);

    textarea.value = '';
    // write your solution here
    // const newCard = document.createElement("div");
    // newCard.className = "card";
    // const newCardBody = document.createElement("div");
    // newCardBody.className = "card-body";
    //
    // const paragraph = document.createElement("p");
    // const newContent = document.createTextNode(textarea.value);
    //
    // //organise card
    // paragraph.appendChild(newContent);
    // newCardBody.appendChild(paragraph);
    // newCard.appendChild(newCardBody);
    //
    // //add card to page
    // const row = document.getElementsByClassName('card');
    // document.body.insertBefore(newCard, row);

    //reset the textarea

}