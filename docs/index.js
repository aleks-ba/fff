let x = 0;

function onInputChange(value) {
    x = value
}


function interpolate() {
    const array = [
        {
            kk: 0,
            d: -2.5,
        },
        {
            kk: 10,
            d: -0.5,
        },
        {
            kk: 20,
            d: 1.6,
        },
        {
            kk: 30,
            d: 4.4,
        },
        {
            kk: 40,
            d: 7.6,
        },
    ];

    let min = 0;
    let max = 10;

    for (let i = 0; i < array.length; i++) {
        if (array[i].kk > x) {
            continue;
        }
        min = array[i];

        if (i + 1 > array.length - 1) {
            min = array[array.length - 2];
            max = array[i];
        } else {
            max = array[i + 1];
        }
    }

    const x1 = min.kk;
    const x2 = max.kk;
    const fx1 = min.d;
    const fx2 = max.d;

    const result = fx1 + (x - x1) * ((fx2 - fx1) / (x2 - x1));

    document.getElementById("result").innerHTML = result;

    console.log(min.kk);
    console.log(max.kk);

    console.log(result);
}

