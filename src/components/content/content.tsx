import { Component } from '@stencil/core';

@Component({
  tag: 'db-content',
  styleUrl: 'content.scss'
})
export class Content {

  render() {
    return (
      <stencil-router id="router">
        <stencil-route url="/" component="db-about" router="#router" exact={true}/>
      </stencil-router>
    );
  }
}