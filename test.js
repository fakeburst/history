function move()
{
    var elem = document.getElementById("anime");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}

function calculate()
{
    var elem = document.getElementById("container");
    var width = elem.offsetWidth;
    var percent = width/1232.0;
    var height = 1559 * percent;
    elem.style.height = height + "px";
    console.log(width);
    console.log(percent);
    console.log(height);
    elem = document.getElementById("name");
    console.log(elem.style.fontFamily);
}

