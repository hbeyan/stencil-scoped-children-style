import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: false,
  scoped: true
})
export class MyComponent {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
