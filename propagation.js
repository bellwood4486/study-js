document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener(
    'click',
    function() {
      console.log('#innerリスナーが発生')
    },
    true
  )

  document.getElementById('inner').addEventListener(
    'click',
    function() {
      console.log('#inner2リスナーが発生')
    },
    true
  )

  document.getElementById('outer').addEventListener(
    'click',
    function() {
      console.log('#outerリスナーが発生')
    },
    true
  )
})
