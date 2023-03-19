var a=[5,10,"ram",20,"bala",40,"anand"]=["ram","bala","anand"]

document.write("Only number show Filter Method");
document.write("<br>");
document.write("<br>");

let mixed=[5,10,"ram",20,"bala",40,"anand"];
let numbersOnly= mixed.filter(function(word) {
	return typeof word === 'string';
});
document.write(numbersOnly);