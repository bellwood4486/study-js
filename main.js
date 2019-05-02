{
  ;('use strict')

  // 関数命令
  function hoge() {
    console.log(1)
  }
  hoge()

  // 関数リテラル
  const hoge2 = function() {
    console.log(2)
  }
  hoge2()

  const records = []
  records.forEach(function(record) {
    console.log(record['a']['b'])
  })

  records.forEach(record => {
    console.log(record['a']['b'])
  })

  // ステートメントが一つだけの場合は波括弧{}を省略できる。また引数を簡素に。
  records.forEach(r => console.log(r['a']['b']))

  records.forEach(function(record, i) {
    console.log(i + 'line:' + record['a']['b'])
  })

  // アロー関数バージョン
  records.forEach((record, i) => {
    console.log(i + 'line:' + record['a']['b'])
  })

  const results = records.filter(function(record) {
    return record['a']['b'] > 10000
  })
  console.log(results)

  // アロー関数バージョン
  const results2 = records.filter(r => r['a']['b'] > 10000)
  console.log(results2)

  // 関数リテラルバージョン
  let data = [2, 3, 4, 5]
  let result = data.map(function(value) {
    return value * value
  })
  console.log(result)

  // アロー関数バージョン
  const data2 = [2, 3, 4, 5]
  const result2 = data2.map(v => v * v)
  console.log(result2)

  const MONDAY = Symbol('monday')
  const TUESDAY = Symbol('tuesday')
  if (MONDAY === TUESDAY) {
    console.log('same!')
  } else {
    console.log('not same!')
  }

  const week = MONDAY
  switch (week) {
    case MONDAY:
      console.log('monday!')
      break
    case TUESDAY:
      console.log('tuesday!')
      break
  }

  data = [4, 9, 16, 25]
  result = data.some(function(value) {
    return value % 3 === 0
  })
  console.log(result)

  const d = new Date()
  console.log(d)
  console.log(d.toLocaleString())

  const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi
  let str = 'サポートサイトはhttp://www.wings.msn.to/です。'
  str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！'
  result = str.match(p)
  result.forEach(function(r) {
    console.log(r)
  })
}
