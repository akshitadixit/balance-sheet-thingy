function sum(array) {
    var s = 0;
    for (let index = 0; index < array.length; index++) {
        s = s + parseFloat(array[index].value);
    }
    console.log(s);
    return s;
}

function bind1(sc, tsc, rf, trf, tsf) {

    sc.addEventListener('keyup', function () {
        tsc.value = sc.value;
        tsc.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    tsc.addEventListener('keyup', function () {
        tsf.value = parseFloat(tsc.value) + parseFloat(trf.value);
        tsf.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    rf.addEventListener('keyup', function () {
        trf.value = rf.value;
        trf.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    trf.addEventListener('keyup', function () {
        tsf.value = parseFloat(tsc.value) + parseFloat(trf.value);
        tsf.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
}

function bind2(ltb, dtl, otll, ltp, tncl) {

    ltb.addEventListener('keyup', function () {
        tncl.value = parseFloat(ltb.value) + parseFloat(dtl.value) + parseFloat(otll.value) + parseFloat(ltp.value);
        tncl.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    dtl.addEventListener('keyup', function () {
        tncl.value = parseFloat(ltb.value) + parseFloat(dtl.value) + parseFloat(otll.value) + parseFloat(ltp.value);
        tncl.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    ltp.addEventListener('keyup', function () {
        tncl.value = parseFloat(ltb.value) + parseFloat(dtl.value) + parseFloat(otll.value) + parseFloat(ltp.value);
        tncl.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });
    otll.addEventListener('keyup', function () {
        tncl.value = parseFloat(ltb.value) + parseFloat(dtl.value) + parseFloat(otll.value) + parseFloat(ltp.value);
        tncl.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    });

}

function bind3(tsf, tncl, tcl, tcal) {
    tsf.addEventListener('keyup', function () {
        tcal.value = parseFloat(tsf.value) + parseFloat(tncl.value) + parseFloat(tcl.value);
    });
    tncl.addEventListener('keyup', function () {
        tcal.value = parseFloat(tsf.value) + parseFloat(tncl.value) + parseFloat(tcl.value);
    });
    tcl.addEventListener('keyup', function () {
        tcal.value = parseFloat(tsf.value) + parseFloat(tncl.value) + parseFloat(tcl.value);
    });
}

function submit() {
    console.log("here");
    var arr1 = [];

    var sc = document.getElementsByClassName('sc20')[0];
    var tsc = document.getElementsByClassName('tsc20')[0];
    var rf = document.getElementsByClassName('rf20')[0];
    var trf = document.getElementsByClassName('trf20')[0];
    var tsf = document.getElementsByClassName('tsf20')[0];

    bind1(sc, tsc, rf, trf, tsf);

    var ltb = document.getElementsByClassName('ltb20')[0];
    var dtl = document.getElementsByClassName('dtl20')[0];
    var otll = document.getElementsByClassName('otll20')[0];
    var ltp = document.getElementsByClassName('ltp20')[0];
    var tncl = document.getElementsByClassName('tncl20')[0];
    bind2(ltb, dtl, otll, ltp, tncl);

    var stb = document.getElementsByClassName('stb20')[0];
    var tp = document.getElementsByClassName('tp20')[0];
    var ocl = document.getElementsByClassName('ocl20')[0];
    var stp = document.getElementsByClassName('stp20')[0];
    var tcl = document.getElementsByClassName('tcl20')[0];
    bind2(stb, tp, ocl, stp, tcl);

    bind3(tsf, tncl, tcl, document.getElementsByClassName('tcal20')[0]);

    sc = document.getElementsByClassName('sc19')[0];
    tsc = document.getElementsByClassName('tsc19')[0];
    rf = document.getElementsByClassName('rf19')[0];
    trf = document.getElementsByClassName('trf19')[0];
    tsf = document.getElementsByClassName('tsf19')[0];
    bind1(sc, tsc, rf, trf, tsf);


    ltb = document.getElementsByClassName('ltb19')[0];
    dtl = document.getElementsByClassName('dtl19')[0];
    otll = document.getElementsByClassName('otll19')[0];
    ltp = document.getElementsByClassName('ltp19')[0];
    tncl = document.getElementsByClassName('tncl19')[0];
    bind2(ltb, dtl, otll, ltp, tncl);

    stb = document.getElementsByClassName('stb19')[0];
    tp = document.getElementsByClassName('tp19')[0];
    ocl = document.getElementsByClassName('ocl19')[0];
    stp = document.getElementsByClassName('stp19')[0];
    tcl = document.getElementsByClassName('tcl19')[0];
    bind2(stb, tp, ocl, stp, tcl);

    bind3(tsf, tncl, tcl, document.getElementsByClassName('tcal19')[0]);



    console.log("done ig");
}

document.onload = submit();