var phrase = ['A front end developer',
			'A little bit of designer',
	      		'A student of back end development',
			'A passionate experience seeker',
			'An avid learner of programming',
			'And a real damn coffee lover'];
var count = 0;
	
function writeText(text,i){
	if(i < text.length){
		setTimeout(function(){
			document.getElementById('textType').textContent = text.substring(0,i+1);
			writeText(text,i+1);
		},100);
	}else{
		setTimeout(function(){
			delText(text,i);
		},2000);
	}
}
function delText(text,i){
	if(i>=0){
		setTimeout(function(){
			document.getElementById('textType').textContent = text.substring(0,i-1);
			delText(text,i-1);
		},50);
	}else{
		count+=1;
		startType();	
	}
}
function startType(){
	if(count == phrase.length){
		count = 0;
	}
	setTimeout(function(){
		writeText(phrase[count],0);
	},500);
		
}

function reroll(i,el){
	this.roll = Math.floor((Math.random()* 5 )+1);
	if(this.roll == 5){
		el[i].style.opacity = '1';
		el[i].style.backgroundColor = 'transparent';
	}else{
		setTimeout(function(){
			reroll(i,el);
		},100);
	}
}
function textOp(){
	var el = document.getElementsByClassName('textOp');
	for(var i=0;i<document.getElementsByClassName('textOp').length;i++){
		reroll(i,el);
	}
}


function navLine(){
	for(var i=0;i<document.getElementsByClassName('line').length;i++){
		document.getElementsByClassName('line')[i].addEventListener('mouseover',function(){
			document.getElementsByClassName('bef')[this.dataset.index].style.width = '150%';
			document.getElementsByClassName('bef')[this.dataset.index].style.borderBottomColor = '#18bfef';
		});
		document.getElementsByClassName('line')[i].addEventListener('mouseleave',function(){
			document.getElementsByClassName('bef')[this.dataset.index].style.borderBottomColor = '#838b91';
			document.getElementsByClassName('bef')[this.dataset.index].style.width = '25px';	
		});

		document.getElementsByClassName('line')[i].addEventListener('click',function(){
			for(var x=0;x<document.getElementsByClassName('nav-content').length;x++){
				document.getElementsByClassName('nav-content')[x].style.display = 'none';
				document.getElementsByClassName('nav-i')[x].style.color = '#838b91';
			}
			
			this.querySelector('.nav-i').style.color = '#18bfef';
			contShow(this.dataset.index);
		});
	}
}
function contShow(i){

	if(i == '1'){
		for(var x=0;x<document.getElementsByClassName('textOp').length;x++){
			document.getElementsByClassName('textOp')[x].style.opacity = '0.1';
		}
		textOp();
	}
	if(i == '2'){
		for(var x=0;x<document.getElementsByClassName('reOp').length;x++){
			document.getElementsByClassName('reOp')[x].style.opacity = '0.1';
			document.getElementsByClassName('reOp')[x].style.backgroundColor = 'rgba(0,0,0,0.9)';
		}
		reOp();
	}
	if(i == '3'){
		for(var x=0;x<document.getElementsByClassName('writeOp').length;x++){
			document.getElementsByClassName('writeOp')[x].style.opacity = '0.1';
		}
		writeOp(0);
	}
	if(i == '4'){
		for(var x=0;x<document.getElementsByClassName('transText').length;x++){
			document.getElementsByClassName('transText')[x].style.opacity = '0.1';
		}
		
		transText();
	}


	document.getElementsByClassName('nav-content')[i].style.display = 'block';
}

window.addEventListener('load',function(){
	writeText(phrase[count],0);
	navLine();
	createText();
});


function createText(){
	this.para = ['Im a graduate of BS Information Technology from Catanduanes State University and im currently working as a front end developer in Ten88 Digital. Im quite sure that i have gained a lot of experience in developing websites and web app, but im still learning.',
				'My idea of a great UI/UX design is the ability of the product to convey what it wants the user to see and experience without using any roundabout methods. Simple, lightweight and easy to comprehend. A user-centered approach with strong and appealing visual language and little to no explanation of the navigation.',
				'I like fellines and caffeine.'];
	this.arrText = this.para[0].split('');
	for(var i=0;i < this.arrText.length;i++){
	this.newEl = document.createElement('I');
	this.newEl.textContent = arrText[i];
	this.newEl.classList.add('reOp');
	document.getElementById('textArea').appendChild(this.newEl);
	}
	this.arrText.splice(0,arrText.length);
	this.arrText = this.para[1].split('');
	for(var x=0;x< this.arrText.length;x++){
	this.newEl = document.createElement('I');
	this.newEl.textContent = this.arrText[x];
	this.newEl.classList.add('writeOp');
	document.getElementById('textAreaDesign').appendChild(this.newEl);
	}
	this.arrText.splice(0,arrText.length);
	this.arrText = this.para[2].split('');
	for(var y=0;y < this.arrText.length;y++){
	this.newEl = document.createElement('I');
	this.newEl.textContent = this.arrText[y];
	this.newEl.style.transform = 'translate(0,-100%)';
	this.newEl.classList.add('transText');
	document.getElementById('textAreaTrans').appendChild(this.newEl);
	}
}
function reOp(i){
	var el = document.getElementsByClassName('reOp');
	for(var i=0;i<document.getElementsByClassName('reOp').length;i++){
		reroll(i,el);
	}
}

function writeOp(i){
	if(i < document.getElementsByClassName('writeOp').length){
		document.getElementsByClassName('writeOp')[i].style.opacity = '1';
		setTimeout(function(){
			writeOp(i+1);
		},10);
	}

}

function transText(){
	var el = document.getElementsByClassName('transText');
	for(var i=0;i<document.getElementsByClassName('transText').length;i++){
		trans(i,el);
	}
}


function trans(i,el){
	this.roll = Math.floor((Math.random()* 5 )+1);
	if(this.roll == 5){
		el[i].style.transform = 'translate(0,0)';
		el[i].style.opacity = '1';
	}else{
		setTimeout(function(){
			trans(i,el);
		},100);
	}
}

console.log('Author: Rexor Quinones; Dev Date: Sep 28, 2017;');
