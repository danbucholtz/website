import { Component } from '@stencil/core';

@Component({
  tag: 'db-projects',
  styleUrl: 'projects.scss'
})
export class Projects {

  render() {
    return ([
      <h2>Projects</h2>,
      <div>
        <p class="first">Occasionally, I builds things.</p>
      </div>
    ]);
  }
}