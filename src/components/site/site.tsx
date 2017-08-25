import { Component } from '@stencil/core';


@Component({
  tag: 'db-site',
  styleUrl: 'site.scss'
})
export class Site {

  render() {
    return ([
      <div class="site">
        <db-header></db-header>
        <div class="content-container">
          <db-nav></db-nav>
          <db-content></db-content>
        </div>
      </div>
    ]);
  }
}