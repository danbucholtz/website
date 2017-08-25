import { Component } from '@stencil/core';

@Component({
  tag: 'db-about',
  styleUrl: 'about.scss'
})
export class About {

  render() {
    return (
      <div>
        <p class="first">Hi. I'm Dan. I'm a software engineer located in Wisconsin. I work for company called Ionic building amazing software for developers, such as Ionic Framework and Stencil.</p>
      </div>
    );
  }
}