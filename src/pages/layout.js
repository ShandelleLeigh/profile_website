import React from 'react';
import './layout.css';

const Layout = () => {
  return (
    <div class="layout">
      <div class="block">
        <span data-speed="-1" class="img-parallax" id="red"/>
        <h2>Parallax Speed -1</h2>
      </div>
      <div class="block">
        <span data-speed="1" class="img-parallax" id="orange"/>
        <h2>Parallax Speed 1</h2>
      </div>
      <div class="block">
        <span data-speed="-0.25" class="img-parallax" id="yellow"/>
        <h2>Parallax Speed -0.25</h2>
      </div>
      <div class="block">
        <span data-speed="0.25" class="img-parallax" id="green"/>
        <h2>Parallax Speed 0.25</h2>
      </div>
      <div class="block">
        <span data-speed="-0.75" class="img-parallax" id="blue"/>
        <h2>Parallax Speed -0.75</h2>
      </div>
      <div class="block">
        <span data-speed="0.75" class="img-parallax" id="purple"/>
        <h2>Parallax Speed 0.75</h2>
      </div>
    </div>
  )
}

export default Layout