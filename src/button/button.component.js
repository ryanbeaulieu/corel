class CorelButton extends HTMLButtonElement {

    get iconAlign() {
        return this.getAttribute('icon-align');
    }

    set iconAlign(val) {
        this.setAttribute("icon-align", val);
    }

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

            if(this.iconAlign === 'right') {
                this.append(icon);
            }else {
                this.prepend(icon);
            }
        }
    }
}

customElements.define("corel-btn", CorelButton, { extends: "button" });