class CorelButton extends HTMLButtonElement {

    static get observedAttributes() {
        return ['icon', 'icon-align'];
    }

    connectedCallback() {
        if(!this.classList.contains("corel-btn")) {
            this.classList.add("corel-btn");
        }   
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
        if(name === 'icon') {
            var icon = document.createElement("corel-icon");
            icon.setAttribute("name",newValue);
            this.prepend(icon);
        }
    }
}

customElements.define("corel-btn", CorelButton, { extends: "button" });