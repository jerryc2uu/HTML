//join 버튼 이벤트
document.getElementById('jbtn').onclick = function() {
	
	//데이터 입력 체크
	//이름
	var sname = document.getElementById('name').value;
	
	//아이디
	var sid = document.getElementById('id').value;
	
	//비번
	var spw = document.getElementById('pw').value;
	
	//메일	
	var smail = document.getElementById('mail').value;
	
	//전번
	var stel = document.getElementById('tel').value;
	
	//성별
	var gender = document.getElementsByName('gen');
	var sgen;
	for(var i = 0 ; i < gender.length; i++) {
		if(gender[i].checked) {
			sgen = gender[i].value;
		}
	}
	
	
	//아바타
	var avt = document.getElementsByClassName('avt');
	var savt;
	for(var i = 0 ; i < avt.length; i++) {
		if(avt[i].checked) {
			savt = avt[i].value;
		}
	}
	
	/*
	var el = document.getElementsByClassName('ck');
	for(var i = 0 ; i < el.length ; i++) {
		var tmp = el[i].value;
		if(!tmp) {
			el[i].focus();
			return;
		}
	}
	*/	
	/*//정규식 표현 검사
	//이름
	var namePat = /^[ㄱ-ㅎ가-힣]{4}$/;	
	var nameResult = namePat.test(sname);
	
	if(nameResult) {
		sname = document.getElementById('name').value;
		document.getElementById('frm').submit();	
	} else {
		document.getElementById('name').value = '';
		document.getElementById('name').focus();		
	}
	
	//아이디
	var idPat = /^[a-z]{5}$/;
	var idResult = idPat.test(sid);
	
	if(idResult) {
		sid = document.getElementById('id').value;
		document.getElementById('frm').submit();	
	} else {
		document.getElementById('id').value = '';
		document.getElementById('id').focus();		
	}
	
	//비번
	var pwPat = /^[a-zA-Z][a-zA-Z0-9]{3,7}$/
	var pwResult = pwPat.test(spw);
	
	if(pwResult) {
		spw = document.getElementById('pw').value;
		document.getElementById('frm').submit();
	} else {
		document.getElementById('pw').value='';
		document.getElementById('pw').focus;		
	}
	//메일
	//var mailPat = /^[a-z0-9]*@[a-z.]]	
	
	//전번
	var telPat = /^\d{3}-\d{3,4}-\d{4}$/;
	var telResult = telPat.test(stel);
	
	if(telResult) {
		stel = document.getElementById('tel').value;
		document.getElementById('frm').submit();
	} else {
		document.getElementById('tel').value = '';
		document.getElementById('tel').focus;
	}*/
	//제출
	document.getElementById('frm').submit();
		/*
	alert(sname);
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;
	document.getElementById('frm').submit; 
	
//reset 버튼 이벤트
/*document.getElementById('rbtn').onclick = function() {
	document.getElementById('frm').reset();
	//var sid = document.frm.id.value;
	//document.frm.reset();

	//docement.querySelectorAll('[type="radio"]:checked')[0].value;
};
	*/

}