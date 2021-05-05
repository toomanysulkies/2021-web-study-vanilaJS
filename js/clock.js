const clockContainer = document.querySelector(".js-clock"), // clockContainer는 도큐먼트 안의 js-clock클래스
	clockTitle = clockContainer.querySelector("h1");// clockTitle은 clockContainer 안의 h1

function getTime() { //getTime 실행
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} `; //위에서 얻은 변수값을 clockTitle 안의 텍스트에 시간:분:초 형식으로 넣어준다. + 시, 분, 초가 한자리 수 일 때 한자리값만 출력되는 것이 아니라 두자리로(예 02초) 출력되게 하기 위해 10미만의 한자리수에는 앞에 0이 붙게끔 설정
}

function init() {//getTime실행
	getTime();
	setInterval(getTime, 1000)//일정한 시간을 간격으로 작업을 계속 실행.
}

init();

