// ********************** declaration des variaible ********************************

var modal = document.getElementById("divModal");
var modal2 = document.getElementById("divModal2");
var des1 = document.getElementById('descriptionid');
var date1 = document.getElementById('dateid');
var proprety1 = document.getElementById('propretyid');
var category1 = document.getElementById('categoryid');
var title1 = document.getElementById('Titleid');
var modalEdet= document.getElementById("divModal2");
var desEdet = document.getElementById('descriptionid2');
var dateEdet = document.getElementById('dateid2');
var propretyEdet = document.getElementById('propretyid2');
var categoryEdet = document.getElementById('categoryid2');
var titleEdet = document.getElementById('Titleid2');
var toDo_liste = document.getElementById("todo_list");
var inProgress_liste = document.getElementById("inProgress_list");
var done_liste = document.getElementById("done_list");
var save = document.getElementById("saveAdd");
var edit = document.getElementById("editid");
var supreme =document.getElementById("deleteid");
// var checkbo = document.getElementsByName('choix');
// var filtre = document.querySelectorAll('choix');
var numbreToDo =document.getElementById("toDon");
var numbreProgress = document.getElementById('progressn');
var numbreDone = document.getElementById('donen'); 

// *************  declaration un liste pour stock  les objet localment ************
var listeElement = [];
// ************* display pour la modal  ********************************************
modal.style.display = "none"; 
// ************* display pour la modal edet ****************************************
modal2.style.display = "none";

// ********* display blok pour la mode consernent cilk sur la button add task ******
function addTesk() {
    modal.style.display = "block";
    des1.value="";
    date1.value="";
    proprety1.value="Select proprety";
    category1.value="Select category";
    title1.value="";
}

// ************** blok pour la mode consernent cilk sur la button ferme modal ******
function fermeaddTesk() {
    modal.style.display = "none";
    modal2.style.display = "none";
}
//************fonction pour lire le varaible dans input et stock dans tableau ******  

    // category1.value="Select category";


    function colorf(colredwite){

        if (des1.value == "" ){
            des1.style.backgroundColor ="recolredwited";
        }
         if (title1.value == "" ){
        title1.style.backgroundColor ="colredwite";
        }
        if (date1.value == "" ){
            date1.style.color ="colredwite";
        }
        if (proprety1.value == "Select proprety" ){
            proprety1.style.color ="colredwite";
        }
        if (category1.value == "Select category" ){
            category1.style.color ="colredwite";
        } 
     }

save.addEventListener("click", function() {
    if(des1.value != "" && title1.value != "" && date1.value != "" && proprety1.value != "Select proprety" && category1.value != "Select category" ){
                
        var elementListe = {
            title2: title1.value,
            date2: date1.value,
            proprety2: proprety1.value, 
            category2 :category1.value,
            des2: des1.value
        };
         colorf(white);
        fermeaddTesk();
        listeElement.push(elementListe);    
        modalAdd();
    }else {
        alert("select toout le input");
        colorf(red);
    }

});
 
//******** fonction est afficher les contune de tableau dans les itemes de flex ******
function modalAdd() {
    // supreme le itemes de flex
    toDo_liste.innerHTML = "";
    inProgress_liste.innerHTML = "";
    done_liste.innerHTML = "";

     // rempele les itemes de flex
    for (var i = 0; i < listeElement.length; i++) {
        var itemHTML = `
            <div class="bg-white rounded p-4 mb-4" style="background-color: ${listeElement[i].proprety2}">
                <h3 class="font-bold"  >${listeElement[i].title2}</h3>
                <p >${listeElement[i].des2}</p>
                <div class="flex justify-between mt-2">
                    <button class="bg-blue-500 text-white py-1 px-3 rounded"    onclick="addEdet(${i})" id ="editid">Edit</button>
                    <button class="bg-red-500 text-white py-1 px-3 rounded"id="deleteid" id="deleteid"  onclick="deleteTask(${i})">Delete</button>
                </div>
            </div>
        `;

        switch (listeElement[i].category2) {
            case 'TO DO':
                toDo_liste.innerHTML += itemHTML; 
                break;
            case 'DOING':
                inProgress_liste.innerHTML += itemHTML; 
                break;
            case 'DON':
                done_liste.innerHTML += itemHTML; 
                break;
            default:;
        }
    }
    statistique();

}

function statistique(){
       
var  tempToDo = 0;
var tempProgress = 0;
var tempDone =0;
for (var i = 0; i < listeElement.length; i++) {

    switch (listeElement[i].category2) {
        case 'TO DO':tempToDo++;break;
        case 'DOING':tempProgress++;break;
        case 'DON':tempDone++;break;
        default:;
    }

}
numbreToDo.innerHTML=tempToDo;
numbreProgress.innerHTML=tempProgress;
numbreDone.innerHTML=tempDone;
}
function addEdet(index) {
    modal2.style.display = "block";
    const task = listeElement[index];
    titleEdet.value = task.title2;
    desEdet.value = task.des2;
    dateEdet.value = task.date2;
    propretyEdet.value = task.proprety2;
    categoryEdet.value = task.category2;

    // Save changes made in the edit modal
    document.getElementById("saveEdet").onclick = function() {
        task.title2 = titleEdet.value;
        task.des2 = desEdet.value;
        task.date2 = dateEdet.value;
        task.proprety2 = propretyEdet.value;
        task.category2 = categoryEdet.value;
        fermeaddTesk();
        modalAdd();
    };
}

// Deletes a task
function deleteTask(index) {
    listeElement.splice(index, 1);
    modalAdd(); 
}
// profils = profils.filter(p => p.id !== id);
function filterTasks(pro){
console.log(pro);

var listeTemp = listeElement;
    listeElement =listeElement.filter(elementListe=>elementListe.proprety2 == pro);
    console.log(listeElement);
    modalAdd();
    listeElement=listeTemp;  
    console.log(listeElement); 

}
function compareDate(p1, p2) { //jj/mm/aaaa
    // Compare years
    if (p1.date2.substring(6, 10) !== p2.date2.substring(6, 10)) {
        return p1.date2.substring(6, 10).localeCompare(p2.date2.substring(6, 10));
    }
    // Compare months
    else if (p1.date2.substring(3, 5) !== p2.date2.substring(3, 5)) {
        return p1.date2.substring(3, 5).localeCompare(p2.date2.substring(3, 5));
    }
    // Compare days
    return p1.date2.substring(0, 2).localeCompare(p2.date2.substring(0, 2));
}

function tri() {
    listeElement.sort(compareDate);
    modalAdd();
}
