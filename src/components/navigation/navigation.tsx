import { Component } from '@stencil/core';


@Component({
  tag: 'db-nav',
  styleUrl: 'navigation.scss'
})
export class Navigation {

  render() {
    return ([
      <div class="author">
        By <span class="name">Dan Bucholtz</span>
      </div>,
      <li class="list">
        <ul>
        <stencil-route-link router="#router" url="/articles">Articles</stencil-route-link>
        </ul>
        <ul>
          <stencil-route-link router="#router" url="/">Colophon</stencil-route-link>
        </ul>
        <ul>
          <stencil-route-link router="#router" url="/projects">Projects</stencil-route-link>
        </ul>

        <ul>
          <a href="https://twitter.com/danbucholtz" target="_blank">Twitter</a>
        </ul>
        <ul>
          <a href="https://github.com/danbucholtz" target="_blank">Github</a>
        </ul>
      </li>
    ]);
  }
}