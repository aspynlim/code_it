// Conditional Statement
// if 문 활용
if (todo.isClear) {
  li.classList.add('item', 'done');
} else {
  li.classList.add('item');
}

// 삼항 조건 연산자 활용
todo.isClear
  ? li.classList.add('item', 'done')
  : li.classList.add('item');

// 논리 연산자 활용
li.classList.add('item', todo.isClear && 'done');


/* QUIZ */
// 1. forEach 메소드를 활용했다.
// 2. 할 일들은 li태그로 만들었다.
// 3. 할 일들은 기본적으로 item이라는 클래스를 가지고 있다.
// 4. 할 일 중에서 isClear 프로퍼티가 true인 할 일은 done이라는 클래스가 추가되었다.
// 5. 할 일들에 1부터 시작하는 번호가 매겨져있다.
// 6. 할 일들은 모두 <ul class="list"></ul>태그 안에 들어가 있다.

// 여기에 코드를 작성해 주세요.
data.forEach((todo, i) => { // 1번 조건
  const li = document.createElement('li'); // 2번 조건
  
  if (todo.isClear) {
    li.classList.add('item', 'done'); // 4번 조건
  } else {
    li.classList.add('item'); // 3번 조건
  }

  li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
  list.appendChild(li); // 6번 조건
});