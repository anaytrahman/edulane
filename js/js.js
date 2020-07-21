var ul= document.querySelector('.ul-wrap');
 var btn= document.querySelector('.show-menu');
 
 
 
 btn.addEventListener('click', function(){
	 
	if(ul.style.display=== "none"){
		ul.style.display = "block";
	} else{
		
		ul.style.display= "none";
	}
	 
 });
 //active class
 
	//let ul = document.querySelector('ul');
	let li = document.querySelectorAll('li');
	
	li.forEach(el => {
		el.addEventListener('click', function(){
			ul.querySelector('.active').classList.remove('active');
			el.classList.add('active');
		});
	});
 
 
 