
document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML += `
        <div> Categories </div>
        <select id="cats"></select>

        <div> Activities </div>
        <select id="acts"></select>

        <div> Details </div>
        <table id="details">?</table>
    `;

    for (c of categories) {
        cats.appendChild(new Option(c));
    }

    cats.addEventListener("change", () => {
        acts.innerHTML = "";
        for (a of activities) { //extract a single activity into a
            if (cats.value === a.category) {
                acts.appendChild(new Option(a.name, a.id));
            }
        }
    });

    acts.addEventListener("change", () => {
        details.innerHTML = "";
        for (a of activities) {
            if (a.id === acts.value) {
                for (prop in a) { //a is the activity object
                    let value = a[prop]; //prop is the key
                    details.innerHTML += `
                        <tr>
                            <th> ${prop} </th>
                            <td> ${value} </td>
                        </tr>
                    `;
                }
            }
        }
    });

});