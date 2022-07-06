const nav = document.querySelector('body')

const toggle = document.querySelectorAll('.toggle')

for (const elemnt of toggle) {
  elemnt.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
