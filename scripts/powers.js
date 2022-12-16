import { getPowers } from "./database.js";

// create function to display html on 

// make sure power name is set to name not size

export const displayPowers = () => {
    const powers = getPowers()
    let html = "<ul>"
    const listItems = powers.map(power => {
        return `<li>
            <input type="checkbox" name="power" value="${power.id}" /> ${power.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}