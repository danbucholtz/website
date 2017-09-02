import { Component } from '@stencil/core';

@Component({
  tag: 'db-articles',
  styleUrl: 'articles.scss'
})
export class Articles {

  render() {
    return ([
      <h2>Articles</h2>,
      <div>
        <p class="first">Occasionally, I write things.</p>
      </div>
    ]);
  }
}