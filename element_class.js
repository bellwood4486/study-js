const list = document.getElementsByClassName('my')
// for (let i = 0, len = list.length; i < len; i++) {
//   console.log(list.item(i).href)
// }

for (const l of list) {
  console.log(l.href)
}
