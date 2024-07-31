var titre = document.getElementById('titre')
if(localStorage.getItem("prenomduvisiteur")){
	titre.textContent = "Bonjour " + localStorage.getItem("prenomduvisiteur")
}else{
	var prenom = prompt("Comment tu t'appelle ?")
	localStorage.setItem("prenomduvisiteur", prenom)
}