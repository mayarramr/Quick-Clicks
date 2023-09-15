var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var submitBtnInput = document.getElementById("submitBtn");
var visitBtnInput = document.getElementById("visitBtn");
var deleteBtnInput = document.getElementById("deleteBtn");
urlContainer=[];

if (localStorage.getItem('urlContainer') != null) {
    urlContainer =JSON.parse(localStorage.getItem('urlContainer'));
    displaySite(urlContainer)
}


function addSite(){
    var site = {
        name:siteNameInput.value,
        url:siteUrlInput.value
    }

    var urlRegex = /^https?:\/\//;
    if (urlRegex.test(siteUrlInput.value)) {
        urlContainer.push(site);
      } else {
        window.alert('Please enter a valid URL');
      }

    localStorage.setItem('urlContainer',JSON.stringify(urlContainer))
    clear();
    displaySite(urlContainer)
}

function clear() {
     siteNameInput.value=''
     siteUrlInput.value=''
}

function displaySite() {
    var cartoona=``;
    for (let i = 0; i < urlContainer.length; i++) {
        cartoona +=`
        <tr>
        <td>${[i+1]}</td>
        <td>${urlContainer[i].name}</td>
        <td><button class="border border-0 rounded-pill px-3 py-1 bg-dpink text-white marcellus" onclick="visitSite(${[i]})"><span><i class="fa-solid fa-eye" ></i></span> <span>Visit</span></button></td>
        <td><button class="border border-0 rounded-pill px-3 py-1 bg-dpink text-white marcellus" onclick="deleteSite(${[i]})"><span><i class="fa-solid fa-trash" ></i></span> <span>Delete</span></button></td>
    </tr>`
    }
    document.getElementById('tableContent').innerHTML = cartoona;
    console.log(cartoona);
}

function deleteSite(siteIndex) {
    urlContainer.splice(siteIndex,1)
    localStorage.setItem('urlContainer',JSON.stringify(urlContainer))
    displaySite(urlContainer)
}

function visitSite(siteIndex) {
    open(urlContainer[siteIndex].url);
}