function displayResult(){
let parent = document.querySelector("#search_result_container");
emojiList.forEach(element => {
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_desc = document.createElement("td");

    new_emoji.innerText = element.emoji;
    new_aliases.innerText = element.aliases;
    new_desc.innerText = element.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);

    parent.appendChild(new_row);
});
}


 



window.onload = () => displayResult();