// join.html에서 전송한 데이터를
//페이지에 h1 태그로 추가해서 보여주세요..

/*document.getElementById('jbtn').onclick = function() {
	
	var sname = document.getElementById('name').value;
	document.getElementById('name').textContent = sname;
	document.getElementById('frm').submit();
		/*
	alert(sname);
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;
	document.getElementById('frm').submit; 
	
	}
	*/


	//docement.querySelectorAll('[type="radio"]:checked')[0].value;
	var param = location.search;
	param = param.substring(1);
	param = decodeURIComponent(param);
	var arr1 = param.split('&'); // 배열
	/*
		param: 'id=jerry%pw=j12345&name=제리'	
		
		문자열 배열로 반환
		arr : ['id=jerry, pw=j12345, name=제리']
		
		tmp : ['id', 'jerry'] ['pw', 'j12345'] ['name', '제리'] 
	*/
	var key = [];
	var data = {};
	
	for(var i = 0 ; i < arr1.length ; i++) {
		var tmp = arr1[i].split('=');
		key[i] = tmp[0];
		data[tmp[0]] = tmp[1];
	}
	
	for(var i = 0; i < arr1.length ; i++) {
		document.write('<h1 class="w3-center w3-pink">' + key[i] + ' : ' + data[key[i]] + '</h1>');
	}
	/*for(var i = 0 ; i < arr1.length; i++) {
		document.getElementById('tname').innerHTML = tmp + '<h1 class="w3-center">' + key[i] + ' : ' + data[key[i]] + '</h1>'; 
	}*/
