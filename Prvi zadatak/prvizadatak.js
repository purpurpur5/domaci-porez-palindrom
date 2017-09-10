var cene = [5,145,69,56,13,456,78,4,30];
var cenaSaPorezom=[];

for (var i = 0; i < cene.length; i++)
{
	if (cene>50)
	{
		cenaSaPorezom.push(cene[i] + cene[i]*0.08);
	}

	else
	{
		cenaSaPorezom.push(cene[i] + cene[i]*0.18);
	}
}

console.log(cene);
console.log(cenaSaPorezom);