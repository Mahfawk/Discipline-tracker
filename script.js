let historique=[];
let jour = historique.length==0 ? 0 : historique.length.at(-1).jour;
let datyandroany;
function maka_donnee(){
    datyandroany= new Date().toLocaleDateString("fr-FR"); //maka daty androany
    let verifcheckes= document.querySelectorAll('input[type="checkbox"]:checked'); // checkbox valide
    let isachecked = verifcheckes.length; // manisa checkbox valide

    let journee={"date":datyandroany,"point":isachecked,"jour":++jour};
    historique.push(journee);
    if(historique.length > 0 && datyandroany == historique.at(-1).date){
            document.querySelector("#exporter").disabled=true;
        }
    console.log(historique);
    console.log(historique.at(-1).date);
    console.log(jour)
}
function ajout_activite(){ 
    let list_act= document.querySelector(".activity_list"); 
    let new_act=document.createElement("div"); //definition new element
    new_act.setAttribute("id","activity")
    let checke = document.createElement("input");
    checke.setAttribute("type","checkbox");
    let texte = document.createElement("input");
    texte.setAttribute("type","text");
    texte.setAttribute("placeholder","Entrer une activité");
    texte.setAttribute("style","font-size:30px");
    new_act.appendChild(checke); //mise en place de checke
    new_act.appendChild(texte); //mise en place de texte
    list_act.appendChild(new_act); // combinaison
}