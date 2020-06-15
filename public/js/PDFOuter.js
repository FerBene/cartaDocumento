var fname = "";
var lastname = "";

var fnameInput = myForm.fname;
fnameInput.addEventListener('change', updateMyForm);

var lastnameInput = myForm.lastname;
lastnameInput.addEventListener('change', updateMyForm);

function updateMyForm() {
    fname =  document.querySelector("#fname").value;
    lastname =  document.querySelector("#lastname").value;
}

var downloadButton =   document.querySelector("#downloadButton");
downloadButton.addEventListener('click', download);

var myPDFForm = new jsPDF();

function download() {
    myPDFForm.text(20, 20, 'ACA PONGO EL NOMBRE:   '+ fname);
    myPDFForm.text(20, 120, 'ACA PONGO EL APELLIDO:   '+ lastname);
    myPDFForm.save("TuCartaDocumento.pdf");
}
