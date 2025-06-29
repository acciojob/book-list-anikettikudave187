//your JS code here. If required.
let submitBtn=document.getElementById('submit');

submitBtn.addEventListener("click",()=>{
	const title=document.getElementById("title").value.trim();
	const author=document.getElementById("author").value.trim();
	const isbn=document.getElementById("isbn").value.trim();

	if(title && author && isbn){
		const list=document.getElementById('book-list');

		const row=document.createElement('tr');
		row.innerHTML=`<td>${title}</td>
						<td>${author}</td>
						<td>${isbn}</td>
						<td><button class="delete">X</button></td>`;

		list.appendChild(row);

		document.getElementById("title").value="";
		document.getElementById("author").value="";
		document.getElementById("isbn").value="";
	}else{
		alert('enter all the fields');
	}
});

document.getElementById('book-list').addEventListener("click",(e)=>{
	if(e.target.classList.contains('delete')){
		e.target.closest('tr').remove();
	}
});





