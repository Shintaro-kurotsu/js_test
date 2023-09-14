const quiz = [
  {
    question: '1467年、8代目足利義政のあとつぎ問題が原因で起こった11年にも及ぶこの戦乱をなんという？',
    answers: [
  '平治の乱',
  '保元の乱',
  '応仁の乱',
  '島原の乱'
],
correct: '応仁の乱'
  }, {
    question: '世界四大文明は中国文明、インダス文明、エジプト文明、あと1つは？',
    answers: [
  'ギリシア',
  'アステカ',
  'マヤ',
  'メソポタミア'
],
    correct: 'メソポタミア'
  }, {
    question: 'アジアで一番長い川の名前は何でしょうか？',
    answers: [
  'インダス川',
  'メコン川',
  '長江',
  '信濃川'
],
    correct: '長江'
  }, {
    question: '12世紀末に平氏を滅ぼして、鎌倉幕府を開き武家政治を始めた人物はだれでしょうか？',
    answers: [
  '源頼朝',
  '源義朝',
  '源義経',
  '源頼光'
],
    correct: '源頼朝'
  }, {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
  'スーパーファミコン',
  'プレイステーション２',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
],
    correct: 'ニンテンドーDS'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz ();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
});
handlerIndex++;
}

