import { html } from "lit";
import LitWithoutShadow from "./base/LitWithoutShadow";

class FooterApp extends LitWithoutShadow {
    constructor() {
        super();
    }

    render() {
        return html `
      <p class="text-center text-white mb-0">
        &copy; 2024 storyan. All Rights Reserved.
      </p>
    `;
    }
}

customElements.define("footer-app", FooterApp);