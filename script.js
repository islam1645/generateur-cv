let nom = document.getElementById("nom-d-f");
nom.onkeydown = function () {
  let container = document.getElementById("nom");
  container.innerText = nom.value;
};
let prenom = document.getElementById("prenom");
prenom.onkeydown = function () {
  let container2 = document.getElementById("pren");
  container2.innerText = prenom.value;
};
// detailles personnels
// nom prenom

nom.onkeydown = function () {
  let container = document.getElementById("nom-2");
  container.innerText = nom.value;
};

prenom.onkeydown = function () {
  let container2 = document.getElementById("pren-2");
  container2.innerText = prenom.value;
};
// addresse email
let mail = document.getElementById("email");
mail.onkeydown = function () {
  let mails = document.getElementById("emails");
  mails.innerText = mail.value;
};
// numero de telephone
let phon = document.getElementById("phone");
phon = onkeydown = function () {
  let phon = this.document.getElementById("phone1");
  phon.innerText = phone.value;
};
// adress
let adress = document.getElementById("addresse");
adress.onkeydown = function () {
  let adres = document.getElementById("addres");
  adres.innerText = adress.value;
};
let pc = document.getElementById("postale");
pc.onkeydown = function () {
  let code = document.getElementById("c-p");
  code.innerText = pc.value;
};
let vl = document.getElementById("vil2");
vl.onkeydown = function () {
  let vile = document.getElementById("v");
  vile.innerText = vl.value;
};
let pt = document.getElementById("poste");
pt.onkeydown = function () {
  let pdt = document.getElementById("p-t");
  pdt.innerText = pt.value;
};
let societe = document.getElementById("societe");
societe.onkeydown = function () {
  let ns = document.getElementById("n-s");
  ns.innerText = societe.value;
};
let lieudate = document.getElementById("lieu-date");
lieudate.onkeydown = function () {
  let ld = document.getElementById("l-d");
  ld.innerText = lieudate.value;
};
let description = document.getElementById("description");
description.onkeydown = function () {
  let desc = document.getElementById("desc");
  desc.innerText = description.value;
};
let netablisement = document.getElementById("n-etablissement");
netablisement.onkeydown = function () {
  let netb = document.getElementById("netab");
  netb.innerText = netablisement.value;
};

let lieu = document.getElementById("lieu");
lieu.onkeydown = function () {
  let lde = document.getElementById("n-s");
  lde.innerText = lieu.value;
};
let dscr = document.getElementById("descriptionn");
dscr.onkeydown = function () {
  let dsc = document.getElementById("descr");
  dsc.innerText = dscr.value;
};
// projects
// nom du project
let nomdp = document.getElementById("nomdp");
nomdp.onkeydown = function () {
  let np = document.getElementById("np");
  np.innerText = nomdp.value;
};
// date du project
let dateproject = document.getElementById("dateproject");
dateproject.onkeydown = function () {
  let dtp = document.getElementById("datep");
  dtp.innerText = dateproject.value;
};
// description du project
let descriptioneproject = document.getElementById("descriptioneproject");
descriptioneproject.onkeydown = function () {
  let dscp = document.getElementById("descrp");
  dscp.innerText = descriptioneproject.value;
};

// <label for="langue">langue</label><br>
// <input type="text" id="langue" name="langue">
// <label for="niveau">niveau</label><br>
// <input type="text" name="niveau" id="niveau">?w</input>

// added and delete input with button

let lang = 0;
document.getElementById("addlangue").onclick = function () {
  let input = document.getElementById("langueinput");
  input.insertAdjacentHTML(
    "beforebegin",
    `   <div id="langue${lang}">
        <label>langue:</label><br>
        <input type="text" id="langue${lang}" placeholder="langue"><br>
        <label>niveau:</label><br>
        <input for="niveau" id="niveau${lang}" placeholder="niveau"><br>
        <button onclick="deletelang('langue${lang}')">delete</button>
        </div>
     `
  );
  lang++;
};

function deletelang(langueid, suite) {
  let rep = window.confirm("etes vous sure");
  if (rep) {
      document.getElementById(langueid).remove()
      suite();
  }
}
// added langue to viewer

// let langview = document.getElementById("langue${lang}");
// langview.onkeydown=function(){
//     let langueview = document.getElementById("langview");
//     langueview.innerText=langview,value;
// };

// add more

document.getElementById("dtn").onclick = function () {
  let addat = document.getElementById("datnn");
  addat.insertAdjacentHTML(
    "beforebegin",

    `<div id="ddn">
    <label id="datnlabel">date de naissance:</label><br>
    <input type="text" id="datninput" placeholder="your birthday"><br>
    <button onclick="deletelang('ddn',function(){document.getElementById('dtn').style.display = 'block'})">delete</button><br>
    </div>`
  );

  delete2("dtn");
};

function delete2(langueid) {
  document.getElementById(langueid).style.display = 'none';
}
