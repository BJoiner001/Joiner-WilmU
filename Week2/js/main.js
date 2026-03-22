//Class Singer to construct Singer objects. Takes name, DOB, and bestSongs variables.
class Singer{
    constructor(name,DOB,bestSongs){
        this.name = name;
        this.DOB = DOB;
        this.bestSongs = bestSongs;
    }
}

//Array singers holds the five Singer objects.
const singers = [
    new Singer("Freddie Mercury", "9/5/1946", "Bohemian Rhapsody, Another One Bites the Dust, Killer Queen"),
    new Singer("Pete Townshend", "5/19/1945", "Baba O'Riley, Won't Get Fooled Again, Behind Blue Eyes"),
    new Singer("Lou Gramm", "5/2/1950", "Juke Box Hero, Urgent, Cold as Ice"),
    new Singer("James Hetfield", "8/3/1963", "For Whom the Bell Tolls, Master of Puppets, One"),
    new Singer("Sharon den Adel", "7/12/1974", "Stairway to the Skies, Shot in the Dark, Faster")
];

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