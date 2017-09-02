import { Component } from '@stencil/core';

@Component({
  tag: 'db-about',
  styleUrl: 'about.scss'
})
export class About {

  render() {
    return ([
      <h2>About</h2>,
      <div>
        <p class="first">Hi! 👋 I'm Dan Bucholtz. I'm a husband, dad, and software engineer located in Wisconsin.</p>
        <p>In my free time, I enjoy reading and learning, contributing to open-source software projects, and watching sports.</p>
        <p>I made this site to primarily to learn and experiment with building a static web site with a new tool I helped build called <a href="http://stenciljs.com">StencilJS</a>. Stencil is a toolkit for buildingstandard-compliant web components with an amazing developer experience.</p>

      </div>
    ]);
  }
}