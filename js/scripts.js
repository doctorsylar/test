$('#carousel').carousel({
    interval: 2000
});


// jQuery section
$(function () {
   // hide
   $('#about').click(function () {
       $('#cont').toggle()
   });

   // $('#mySelect').change(function () {
   //     var selected = $('#mySelect').selectedIndex;
   //     console.log(selected);
   //     alert("Индекс: " + selected);
   // });
});

//Pure JS section
function selFunc() {
    var selected = document.getElementById("mySelect").selectedIndex;
    alert("Индекс: " + selected);
}

function check() {
    let range = document.getElementById('inp-range');
    let res = document.getElementById('range-result');
    res.innerHTML = range.value;
}

/*CAN BE DELETED*/

document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
};

document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var submenu = document.getElementsByClassName('submenu');
    for (var i = 0; i < submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}


/*CAN BE DELETED*/