document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', function(e) {
    const target = e.target
    console.log('種類:' + e.type)
    console.log('target:' + target)
    console.log('発生元(target):' + target.nodeName + '/' + target.id)
    console.log('this:' + this) // アロー関数だとthisはグローバルオブジェクトになる。なぜなら静的に決まるため。
    console.log('発生元(this):' + this.nodeName + '/' + this.id)
  })
})
