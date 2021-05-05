const form = document.querySelector(".js-form"), //form은 html document의 클래스 js-form
	input = form.querySelector("input"),//input은 form 안의 태그 input
	greeting = document.querySelector(".js-greetings");//greeting은  html document의 클래스 js-greeting

const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text) { //saveName은 로컬스토리지의 currentUser key에 text를 설정한다
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {//handleSumit은 
	event.preventDefault();//	event.preventDefault()은 올바르지 않은 value가 입력되는 것을 막는다
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN); //form의 showing 클래스 추가
	form.addEventListener("submit", handleSubmit); //form을 제출하면 handleSubmit실행
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);//form의 showing 클래스 제거
	greeting.classList.add(SHOWING_CN);//greeitng의 showing 클래스 추가
	greeting.innerText = `Hello ${text}`; //텍스트 안에 'Hello' 삽입
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS); // currentUser는 로컬 스토리지 안의 아이템USER_LS을 가져오는 것을 말한다.
	if (currentUser === null) {/// currentUser에 아무 것도 없을 때 (USER_LS 안의 값없음)
		// she is not
		askForName(); //askForName실행
	} else {
		paintGreeting(currentUser);//아니라면 paintGreetinf 실행
	}
}

function init() {
	loadName();
}

init();