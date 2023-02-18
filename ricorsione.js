5,7,2,4,12

Selection sort:
Trova il minimo
Mettilo in prima posizione
Ripeti su quello che resta

10,9,8,7,6,5,4,3,2,1
selectionSort([10,9,8,7,6,5,4,3,2,1], 0, 9)

9 = posizioneMinimo([10,9,8,7,6,5,4,3,2,1], 0, 9)
[1,9,8,7,6,5,4,3,2,10]
selectionSort([1,9,8,7,6,5,4,3,2,10], 1, 9)
[1,2,8,7,6,5,4,3,9,10]

function posizioneMinimo(v, inizio, fine)
{
	let minimo = v[inizio];
	let pos = inizio;

	for (let i = inizio + 1; i <= fine; i++){
		if (minimo > v[i]){
			minimo = v[i];
			pos = i;
		}
	}
	retun pos;
}

function posizioneMinimo(v, inizio, fine)
{
	if (inizio === fine)
		return inizio;
	else {
		let posMinimoRestante = posizioneMinimo(v, inizio + 1, fine);
		if (v[inizio] < v[posMinimoRestante])
			return inizio;
		else
			return posMinimoRestante;
			
	}
}

function scambia(v,da,a) {
	let tmp = v[da];
	v[da] = v[a];
	v[a] = tmp; 
}

function selectionSort(v, inizio, fine){
	let posMinimo =  0;

	if (inizio === fine)
		return;
	else {
		posMinimo = posizioneMinimo(v, inizio, fine);
		scambia(v,inizio,posMinimo);
		selectionSort(v, inizio + 1, fine);		
	}
}
selectionSort(v, 0, v.length - 1)