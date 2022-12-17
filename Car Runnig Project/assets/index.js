m = 0;
var y;


// to start the car
function start() {
    y = setInterval(run, 100);

    function run() {
        // to avoid to run the car after the screen/ browser    
        if (m == 1130) {
            clearInterval(y);
            m = 0;
        } else {
            m += 10;
            let x = document.getElementById("img");
            x.style.marginLeft = m + 'px';
        }
    }
}

// to stop the car
function stop() {
    clearInterval(y);
}