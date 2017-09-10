var unos = prompt("Unesite rec? ");
var rec = unos.toLowerCase();
var obrnutaRec = rec[rec.length - 1];

for (var i = rec.length - 2; i >= 0 ; i--)
{
	obrnutaRec = obrnutaRec + rec[i];
}

console.log(rec);
console.log(obrnutaRec);

if (rec===obrnutaRec)
{
	console.log("rec je palindrom");
}

else
{
	console.log("rec nije palindrom");
}
