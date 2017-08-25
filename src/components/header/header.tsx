import { Component } from '@stencil/core';


@Component({
  tag: 'db-header',
  styleUrl: 'header.scss'
})
export class Header {

  render() {
    return (
      <div class="header">
        <div class="img-container">
          <stencil-route-link url="/" router="#router">
            <img src="/assets/dan-sm.jpg"></img>
          </stencil-route-link>
        </div>
        <div class="title-container">
          <div class="title">
            <span class="purple">v</span>
            <span class="orange">o</span>
            <span class="red">i</span>
            <span class="hot-pink">d</span>
            <span class="aqua">*&nbsp;</span>
            <span class="red">t</span>
            <span class="hot-green">h</span>
            <span class="hot-pink">o</span>
            <span class="orange">u</span>
            <span class="hot-green">g</span>
            <span class="purple">h</span>
            <span class="aqua">t</span>
            <span class="red">s</span>
          </div>
          <div class="subtitle">
            Thoughts on programming, technology, project management and more
          </div>
        </div>


      </div>
    );
  }
}