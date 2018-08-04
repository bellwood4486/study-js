document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener(
    'click',
    function(e) {
      console.log('#innerリスナーが発生')
      console.log('cancelable:' + e.cancelable)
      e.stopPropagation()
    },
    false
  )

  document.getElementById('inner').addEventListener(
    'click',
    function() {
      console.log('#inner2リスナーが発生')
    },
    false
  )

  document.getElementById('outer').addEventListener(
    'click',
    function() {
      console.log('#outerリスナーが発生')
    },
    false
  )
})
