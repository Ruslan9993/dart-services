'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');

  form.addEventListener('submit', sendForm);
  
  async function sendForm(event) {
    event.preventDefault()
  }
})