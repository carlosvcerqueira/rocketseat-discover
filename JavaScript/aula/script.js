// Adicionando elementos
const div = document.createElement('div');
div.innerHTML = 'Olá, dev!'

// InsetBefore

const body = document.querySelector('body')
const script= body.querySelector('script')

body.insertBefore(div, script)