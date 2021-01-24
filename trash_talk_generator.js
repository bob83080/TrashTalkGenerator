// function sample(array) {
//   const index = Math.floor(Math.random() * array.length)
//   return array[index]
// }

// function generateTrashTalk(options) {
//   const task = {
//     工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
//     設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
//     創業家: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
//   }
//   const phrase = ['很簡單', '很容易', '很快', '很正常']


//   if (typeof (options.job) != "string") {
//     return "請選擇一種身份"
//   } else {
//     let TrashTalk = `身為一個${options.job}，${sample(task[options.job])}，${sample(phrase)}吧!`
//     return TrashTalk
//   }

// }
// module.exports = generateTrashTalk


// define randomIndex generator function
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return index
}

// define Rubbishtalk generator function
function generateTrashtalk(options) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單吧 : )', '很容易吧 : )', '很快吧 : )', '很正常吧 : )']

  //creat a collection to corresponding job
  let collection = []

  if (!options) {
    return '請選擇一種職業!'
  }
  for (let job in task) {
    if (options.job === job) {
      collection = task[job]
    }
  }

  return ('身為一個' + options.title + ',' + collection[sample(collection)] + ',' + phrase[sample(phrase)])

}

// exports rubbish_talk.js
module.exports = generateTrashtalk