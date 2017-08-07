var createLoginLayer = (function(){
	var instance;
	return function() {
		if(!instance){
		instance =  document.createElement('div');
		instance.innerHTML = 'hello';
		instance.style.display = 'none';
		document.body.appendChild(instance);
		}
		return instance;

	}
})(); 



var loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', function(){
	var login = createLoginLayer();
	login.style.display = 'block';
});



