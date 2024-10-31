

// ********************** declaration des variaible ********************************
var modal = document.getElementById("divModal");
var des1 = document.getElementById('descriptionid');
var date1 = document.getElementById('dateid');
var proprety1 = document.getElementById('propretyid');
var category1 = document.getElementById('categoryid');
var title1 = document.getElementById('Titleid');
var toDo_liste = document.getElementById("todo_list");
var inProgress_liste = document.getElementById("inProgress_list");
var done_liste = document.getElementById("done_list");
var save = document.getElementById("saveAdd");
// *************  declaration un liste pour stock  les objet localment ************
var listeElement = [];
// ************* display pour la modal  ********************************************
modal.style.display = "none";
// ********* display blok pour la mode consernent cilk sur la button add task ******
function addTesk() {
    modal.style.display = "block";
}
// ****************** 
function fermeaddTesk() {
    modal.style.display = "none";
}

save.addEventListener("click", function() {
    if (des1.value == "" || title1.value == "" || date1.value == null) {
        alert("Remplissez tous les champs");
    } else {
        var elementListe = {
            title2: title1.value,
            date2: date1.value,
            proprety2: proprety1.value, 
            category2 :category1.value,
            des2: des1.value
        };
        fermeaddTesk();
        listeElement.push(elementListe);
    }
    modalAdd();
});

function modalAdd() {
    toDo_liste.innerHTML = "";
    inProgress_liste.innerHTML = "";
    done_liste.innerHTML = "";

    for (var i = 0; i < listeElement.length; i++) {
        var itemHTML = `
            <div class="bg-white rounded p-4 mb-4" style="background-color: ${listeElement[i].proprety2}">
                <h3 class="font-bold">${listeElement[i].title2}</h3>
                <p>${listeElement[i].des2}</p>
                <div class="flex justify-between mt-2">
                    <button class="bg-blue-500 text-white py-1 px-3 rounded">Edit</button>
                    <button class="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
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
            default:
                alert('Erreur dans la catégorie');
        }
    }
}
