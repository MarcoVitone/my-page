let disp = document.form.area;
let fCall = 0;

function add(n) {
    if(fCall === 0){
        disp.innerHtml = disp.value += n;
    }
}


function addOp(n) {
        disp.innerHtml = disp.value += n;
        fCall = 0;
}

function ris() {
      document.form.area.value = eval(disp.value);
      fCall = 1;
}

function canc() {
    disp.value = '';
    fCall = 0;
}

function del() {
    if(fCall === 0){
        disp.value = disp.value.slice(0, - 1);
    }else{
        disp.value = '';
        fCall = 0;
    }
}

function pow2() {
    disp.value = disp.value * disp.value;
    fCall = 1;
}

function pow3() {
    disp.value = disp.value * disp.value * disp.value;
    fCall = 1;
}

function sqrt() {
    disp.value = Math.sqrt(disp.value);
    fCall = 1;
}