//객체 만들기 => 이미 메모리에 올라간 붕어빵
var obj1 = {
	name: 'Nobody',	//  name은 속성
	age: 0
};

console.log(obj1.name + ' : ' + obj1['age']);

//객체는 한 개..
var obj2 = obj1;
obj1.name = 'jennie';
console.log('obj1.name : ' + obj1.name);
console.log('obj2.name : ' + obj1.name);

//다시 객체 만들기 => 객체 만들 틀
class Member {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	
}

var memb1 = new Member('제니', 27);
var memb2 = new Member('리사', 27);

console.log('memb1.name : ' + memb1.name);
console.log('memb2.name : ' + memb2.name);

memb1.groupName = 'Black Pink';
console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb1.groupName : ' + memb2.groupName);
//memb2.groupName = 'Blakc Pink';

//객체 만든 후 나중에 필요한 변수 추가
Member.prototype.groupName = 'Black Pink';
console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb1.groupName : ' + memb2.groupName);

memb2.groupName = '블랙핑크';
console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb1.groupName : ' + memb2.groupName);

Member.prototype.groupName = '블랙핑크';
console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb1.groupName : ' + memb2.groupName);
