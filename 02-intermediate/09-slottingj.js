import {LitElement, html} from 'lit-element';

class SlottingJ extends LitElement {  
  render() {
    return html`
      <card-elementj>
        <h1 slot="title">Title Slot</h1>
        <div slot="details">Details Slot</div>
        <h3>I´m here but I you won´t to see me</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3>Me neither</h3>
        <h3 slot="foot">However, I´m visible because i have name ;)</h3>
      </card-elementj>
    `;
  }

}

customElements.define('slotting-j', SlottingJ);

class CardElementJ extends LitElement {  
  render() {
    return html`
      <div class="wrapper">
        <!-- Slots with name allow insert only the named one .  -->
        <slot name="title"></slot>
        <slot name="details"></slot>
        <!-- Slots with no name allow insert n tags in the parent element.  -->
        <!-- <slot></slot> -->
        <slot name="foot"></slot>
      </div>
    `;
  }

}

customElements.define('card-elementj', CardElementJ);