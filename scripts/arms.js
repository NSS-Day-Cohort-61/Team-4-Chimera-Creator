// arms module

// import getArms from database
import { getArms } from "./database.js";

const arms = getArms()

// create event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "arm") {
            setArm(parseInt(clickEvent.target.value))
        }
    }
)

// export function to set the html of each item
export const Arms = () => {
    let html = `<ul>`

    // This is how you have been converting objects to <li> elements
    const listItems = arms.map(arm => {
        html += `<li>
            <input type="radio" name="arm" value="${arm.id}" /> ${metal.name}
        </li>`
    })
    html += listItems.join("")
    return html
    
}