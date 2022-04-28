//var pat1 = /[a-z]{5}/;//소문자 5개로 이뤄진 부분이 있는가?
//var pat1 = /^[a-z]{5}$/;//처음부터 끝까지 소문자 5개로 이뤄졌는가?
/*var pat1 = /^[a-z]{5}/i;//대소문자 구분 없이 검사

var str = 'Black pink';

var result = pat1.test(str);
var result2 = pat1.exec(str);

console.log('result : ' + result);
console.log('result2 : ' + result2);*/

//아이디 입력 받아서 영문 4글자 이상 8글자 이하면 콘솔화면에 출력, 
//아니면 입력된 내용 지우고 '형식에 맞지 않는 아이디입니다.' 출력

//리셋 버튼 클릭 이벤트
document.getElementById('rbtn').onclick = function() {
//	document.getElementById('tid').value = '';
	var sid = document.getElementById('tid').value;
	if(sid) {
		//변수에 데이터 있는 경우(null 또는 undefined가 아닌 상태)
		document.getElementById('tpw').focus();
	} else {
		// 변수에 데이터 없음(null 또는 undefined)
		document.getElementById('tid').focus();	
	} 
};
/*
//로그인 버튼 클릭 이벤트
document.getElementById('lbtn').onclick = function() {
	//입력 데이터 꺼낸다
	var sid = document.getElementById('tid').value;
	
	//정규식 패턴 만든다
	var pat = new RegExp('^[a-zA-Z]{4,8}$');
	
	//검사
	var result = pat.test(sid);
	
	//결과 따라 처리
	if(result) {
		// 패턴에 맞는 경우
		console.log('입력 아이디 : ' + sid);
	} else {
		//패턴에 맞지 않는 경우
		document.getElementById('tid').value = '';
		console.log('형식에 맞지 않는 아이디입니다.');
	}
	

};*/

//로그인 버튼 클릭 시 아이디와 비밀번호 읽어서 유효성 검사 후 
//검사에 통과하면 test.html로 아이디 비번 전송
//불통 시 입력 내용 지우고 다시 입력하도록 한다

//비밀번호는 첫 문자는 알파벳, 숫자와 알파벳으로 구성된 4글자 이상 8글자 이하로 작성
document.getElementById('lbtn').onclick = function() {
	//할일
	//1. 입력 내용 읽기
	var sid = document.getElementById('tid').value;
	var spw = document.getElementById('tpw').value;
	//2. 검사
	//2-1. 패턴 만들기
	var idPat = /^[a-zA-Z]{4,8}$/;
	var pwPat = /^[a-zA-Z][a-zA-Z0-9]{3,7}$/;
	//2-2. 검사 ㄱㄱ
	var idResult = idPat.test(sid);
	var pwResult = pwPat.test(spw);
	//3. 검사 결과에 대한 처리
	if(idResult && pwResult) {
		//3-1. 통과한 경우: test.html로 입력내용 전송
//		location.href = 'test.html?id=' + sid + '&pw=' + spw; // => GET 방식 전송
		//데이터 전송용 form 태그의 input 태그에 읽은 데이터 입력해서 전송
		//1. 아이디가 id, pw인 태그에 전송 데이터를 채워넣는다.
		document.getElementById('id').value = sid;
		document.getElementById('pw').value = spw;
		//2. 폼 태그를 전송
		document.getElementById('frm').submit();
	} else {
		//3-2. 불통
		document.getElementById('tid').value = '';
		document.getElementById('tpw').value = '';
		document.getElementById('tid').focus();
	}
		
}

