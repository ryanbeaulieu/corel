
const icons = {
    'add': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve">
            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
            </svg>`
}

class CorelIcon extends HTMLElement {

    get name() {
       return this.getAttribute("name");
    }

    set name(val) {
        this.setAttribute("name", val);
    }

    static get observedAttributes() {
        return ['name'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name);
        if(name === 'name') {
            console.log(icons);
            this.innerHTML = icons[newValue];
        }
    }

}

customElements.define("corel-icon", CorelIcon);