import './style.css'
import { setupCalculator } from './calculator.js'

document.querySelector('#app').innerHTML = `
  <h1 class="title">Basic Calculator <i class="fas fa-calculator"></i></h1>
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

setupCalculator(document.querySelector('#calculator'))
