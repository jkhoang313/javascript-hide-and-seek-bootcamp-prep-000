function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    var inner = parseInt(list[i].innerHTML, 10)
    list[i].innerHTML = (inner + n).toString()
  }
}

function deepestChild() {
  var currentTag = "div#grand-node"
  var query = [document.querySelector(currentTag)]
  var lastChild = ""

  while (query.length > 0) {
    lastChild = document.querySelector(currentTag)
    query.pop()
  }

  return lastChild
}
