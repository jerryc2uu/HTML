$(document).ready(function(){
	
	//id check 버튼 이벤트
	$('#idcheck').click(function(){
		var sid = $('#id').val();
		
		if(!sid) {
			return;
		} 
		
		$.ajax({
			url: '/black/member/idCheck.pink',
			type: 'POST', 
			dataType: 'json',
			data: {
				id: sid
			},
			success: function(data){
				var result = data.result;
				if(result == 'OK') {
					$('#checkmsg').html('* 사용 가능한 아이디입니다. *').css('color', 'blue');
				} else {
					$('#checkmsg').html('# 사용 불가능한 아이디입니다. #').css('color', 'red');
					$('#id').val('');
				}
			},
			error: function(){
				alert('### 통신에러 ###');
			}
		});
	});
	
	//비밀번호 체크
	$('#pwc').keyup(function(){
		var pw = $('#pw').val();
		var pwc = $("#pwc").val();
		
		if(pw == pwc) {
			$('#pwcheck').css('display', 'block');
			$('#pwcheck').html('* 비밀번호가 일치합니다. *').css('color', 'blue');	
		} else {			
			$('#pwcheck').css('display', 'block');
			$('#pwcheck').html('# 비밀번호가 일치하지 않습니다. #').css('color', 'red');	
		}
	});
	
	//성별 선택 시 아바타 거르기
	$('input:radio[name=gen]').click(function(){
		
		$('#avatar').css('display', 'block');
		
		if($(':radio[name="gen"]:checked').val() == 'M') {
			$('#female').css('display', 'none');
			$('#male').css('display', 'block');						
		}  else {
			$('#female').css('display', 'block');
			$('#male').css('display', 'none');			
		}
	});
	
	
	//reset 버튼 이벤트
	$('#rbtn').click(function(){
		document.frm.reset();
	});
	
	//home 버튼 이벤트
	$('#hbtn').click(function() {
    	$(location).attr('href', '/black/')
	});

	//join 버튼 이벤트
	$('#jbtn').click(function(){
		//정규표현식
		var pid = /^[a-zA-Z0-9]{4,10}$/;
		var ppw = /^[a-zA-Z0-9]{4,10}$/;
		var pmail = /^[a-zA-Z0-9]{4,10}@[a-zA-Z]{4,13}.com$/;
		var ptel = /^010-[0-9]{4}-[0-9]{4}$/;
		
		
		var	sid = $('#id').val();
		var	spw = $('#pw').val();
		var	smail = $('#mail').val();
		var	stel = $('#tel').val();
		
		
		var idResult = pid.test(sid);
		var pwResult = ppw.test(spw);
		var mailResult = pmail.test(smail);
		var telResult = ptel.test(stel);
		

		//성별
		var gen = $('input[name="gen"]:checked').val();
	
		
		//아바타
		var avatar = $('input[name="avt"]:checked').val();

		
		if(idResult && pwResult && mailResult && telResult && gen && avatar) {
			
			$('#frm').submit();
			
		} else if (!idResult) {
				alert('아이디 확인');
				id.focus();
				return false;
		} else if (!pwResult) {
				alert('비번 확인');
				pw.focus();
				return false;
		} else if (!mailResult) {
				alert('메일 확인');
				mail.focus();
				return false;
		} else if (!telResult) {
				alert('전번 확인');
				tel.focus();
				return false;
		} else if (!gen) {
				alert('성별 체크');
				return false;
		} else if (!avatar) {
				alert('아바타 체크');
				return false;
		}
	});
});