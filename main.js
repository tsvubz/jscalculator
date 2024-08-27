import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="calculator">
    <div class="display">
      <div class="prev-display"></div>
      <div class="curr-display"></div>
    </div>
    <button class="span-2 clear">AC</button>
    <button class="delete">DEL</button>
    <button class="operation">*</button>
    <button class="number">7</button>
    <button class="number">8</button>
    <button class="number">9</button>
    <button class="operation">/</button>
    <button class="number">4</button>
    <button class="number">5</button>
    <button class="number">6</button>
    <button class="operation">+</button>
    <button class="number">1</button>
    <button class="number">2</button>
    <button class="number">3</button>
    <button class="operation">-</button>
    <button class="number">0</button>
    <button class="number">.</button>
    <button class="span-2 equal">=</button>
  </div>
`

setupCounter(document.querySelector('#counter'))
