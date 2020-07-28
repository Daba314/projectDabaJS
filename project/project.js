let ul = document.getElementById("UL1");
let toDos;
function local(){
	toDos = ul.innerHTML;
	localStorage.setItem('toDos',toDos);
}
let addButton = document.querySelector("button");
let task = document.querySelector("input");

addButton.addEventListener("click", add);
function add() {
	let nextLi = document.createElement("li");
	nextLi.id = "item";
	let checkBtn = document.createElement('INPUT');
	checkBtn.setAttribute('type', 'checkbox');
	checkBtn.addEventListener('click',checkFunct);
	nextLi.appendChild(checkBtn);
	nextLi.appendChild(document.createTextNode(task.value));
	task.value = "";
	ul.appendChild(nextLi);


	let deleteBtn = document.createElement("button");
	deleteBtn.innerHTML="X";
	deleteBtn.addEventListener("click",deleteFunct);
	nextLi.appendChild(deleteBtn);

	function checkFunct() 
		{
			nextLi.className="crossed-line";
			let parent = document.getElementById("item").parentNode;
			parent.removeChild(nextLi);
			ul.insertBefore(nextLi,ul.childNodes[0]);
			local();
	    
   		}
   
   function deleteFunct() {
	   
	let parent = document.getElementById("item").parentNode;
	parent.removeChild(nextLi);
	local();
	 }
	local();
	}
	if(localStorage.getItem('toDos')){
		ul.innerHTML = localStorage.getItem('toDos');
	}

function initMap() {

		let greenResidence = {
			lat: 44.4116101,
			lng: -79.6779091,
		  };

  let mapSpot = document.getElementById("map");

  let map = new google.maps.Map(mapSpot, {
    zoom: 15,
    center: greenResidence,
  });

  let marker = new google.maps.Marker({ position: greenResidence, map: map });
}


