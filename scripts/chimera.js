import { displayPowers } from "./powers.js";

export const chimera = () => {
  return `
        <div>
          <h2>Heads</h2>
        </div>
        <div>
          <h2>
          Torsos
          </h2>
        </div>
        <div>
          <h2>Arms</h2>
        </div>
        <div>
          <h2>
          Legs
          </h2>
        </div>
        <div>
          <h2>
          Tails
          </h2>
        </div>
        <div>
          <h2>Powers</h2>
          ${displayPowers()}
        </div>
    `;
};
