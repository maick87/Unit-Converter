let InpCon = document.getElementById('input-con');
let BtnCon = document.getElementById('btn-con');
let ConRes = document.getElementById('convert-res');
let ConRes1 = document.getElementById('convert-res1');
let ConRes2 = document.getElementById('convert-res2');
let Res = document.getElementById('p-res');
let Res1 = document.getElementById('p-res1');
let Res2 = document.getElementById('p-res2');

BtnCon.addEventListener('click', Conversion);
BtnCon.addEventListener('click', Converted);
BtnCon.addEventListener('click', Convertid);

function Conversion() {
    let result = Number(InpCon.value) * 3.28;
    Res.textContent += `${Number(InpCon.value)} meters / ${result.toFixed(2)} feets`;
    
}

function Converted () { 

    let resulted = Number(InpCon.value) / 3.78;
    Res1.textContent += `${Number(InpCon.value)} liters / ${resulted.toFixed(2)} gallons`;
}

function Convertid () { 

    let resultid = Number(InpCon.value) * 2.20;
    Res2.textContent += `${Number(InpCon.value)} kg / ${resultid.toFixed(2)} pounds`;
}