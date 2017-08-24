import { Component } from '@stencil/core';


@Component({
  tag: 'db-site',
  styleUrl: 'site.scss'
})
export class Site {

  render() {
    return (
      <db-header></db-header>
    );
  }
}