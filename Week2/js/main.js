//Array singers creates 5 JSON objects with name, DOB, and bestSongs variables.
const singers = [
  {
    "name": "Freddie Mercury",
    "DOB": "9/5/1946",
    "bestSongs": [" Bohemian Rhapsody", " Another One Bites the Dust", " Killer Queen"]
  },
  {
    "name": "Pete Townshend",
    "DOB": "5/19/1945",
    "bestSongs": [" Baba O'Riley", " Won't Get Fooled Again", " Behind Blue Eyes"]
  },
  {
    "name": "Lou Gramm",
    "DOB": "5/2/1950",
    "bestSongs": [" Juke Box Hero", " Urgent", " Cold as Ice"]
  },
  {
    "name": "James Hetfield",
    "DOB": "8/3/1963",
    "bestSongs": [" For Whom the Bell Tolls", " Master of Puppets", " One"]
  },
  {
    "name": "Sharon den Adel",
    "DOB": "7/12/1974",
    "bestSongs": [" Stairway to the Skies", " Shot in the Dark", " Faster"]
  }
]

//Add event listener DOMContentLoaded to ensure the page has loaded prior to executing the JavaScript.
document.addEventListener("DOMContentLoaded", () => {

    //Create constant to call on tableBody.
    const tbody = document.getElementById("tableBody");

    //Create rows string to hold the table rows.
    let rows = "";

    //forEach loop pulls the Singer objects from the singers array and populates the rows.
    singers.forEach(Singer => {
        rows += `
            <tr>
                <td>${Singer.name}</td>
                <td>${Singer.DOB}</td>
                <td>${Singer.bestSongs}</td>
            </tr>
        `;
    });

    //Write the rows to the tbody innerHTML.
    tbody.innerHTML = rows;
});