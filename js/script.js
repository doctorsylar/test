"use strict";

$('#carousel').carousel({
    interval: 2000
});

// VueJS section
let app = new Vue({
    el: '#app',
    data: {
        message: ""
    }
});

let rangeApp = new Vue({
    el: '#rangeApp',
    data: {
        range: "250"
    }
});

let testId = new Vue({
    el: '#testId',
    data : {
        firstName : "",
        lastName : ""
    },
    computed : {
        fullName : {
            get : function () {
                if (this.firstName !== '' && this.lastName !== '') {
                    return this.firstName + ' ' + this.lastName;
                }
                else {
                    return this.firstName + this.lastName;
                }
            },
            set : function (fullName) {
                let names = fullName.split(' ');
                this.firstName = names[0];
                if (names.length > 1) {
                    this.lastName = names[names.length-1];
                }
            }
        }
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

let toDoList = new Vue({
    el: '#toDoList',
    data: {
        list : [
            { text: 'one' },
            { text: 'two'}
        ],
        inputVue: ''
    },
    methods: {
        addTask : function () {
            this.list.push({ text : this.inputVue });
            this.inputVue = "";
        },
        deleteTask : function (index) {
            this.list.splice(index, 1);
        }
    }
});

let testCheckbox = new Vue({
    el: '#test-checkbox',
    data: {
        checked: true
    }
});

let example_3 = new Vue({
    el: '#example-3',
    data: {
        checkedNames: []
    }
});


Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});



// Local component
let blogPost = {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('reduce-text')">
        Reduce text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
};

let blogPostsEventsDiv = new Vue({
    el: '#blog-posts-events',
    data: {
        posts: [
            { id: 1, title: 'title 1', content: 'content 1'},
            { id: 2, title: 'title 2', content: 'content 2'},
            { id: 3, title: 'title 3', content: 'content 3'}
        ],
        postFontSize: 1
    },
    components: {
        'blog-post' : blogPost
    }
});

new Vue({
    el: '#passwordHider',
    data: {
        type: 'password'
    },
    methods: {
        changeType: function () {
            if (this.type === 'password') {
                this.type = 'text';
            }
            else {
                this.type = 'password';
            }
        }
    }
});

new Vue({
    el: '#classHider',
    data: {
        showElement: 'one'
    },
    methods: {
        changeElement(el) {
            let elem = el.target;
            console.log(el);
            this.showElement = elem.classList[elem.classList.length - 1];
        }
    }

});


// jQuery section
$(function () {
    // hide
    $('#about').click(function () {
        $('#cont').toggle();
    });
    $('.flexbox-container button').click(function () {
        let el_id = this.id;
        alert('id: ' + el_id);
    });

    // $(window).scroll(function () {
    //      let elems = $('.scroll-div');
    // });

});

//Pure JS section
function selFunc() {
    let selected = document.getElementById("mySelect").selectedIndex;
    alert("Индекс: " + selected +
        ", фрукт: " + document.getElementById("mySelect")
            .children[selected].innerHTML);
}

// Carousel JS code
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(value) {
    showSlide(slideIndex += value);
}

function showSlide(number) {
    let i;
    let slides = document.getElementsByClassName('slidy');

    if (number >= slides.length) {
        slideIndex = 0;
    }
    else if (number < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++ ) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}
function deactivate() {
    let elem = document.getElementById('deactivative');
    elem.classList.remove('act');
    alert(elem.height);
}
function checkHeight() {
    let elem = document.getElementById('deactivative');
    alert(elem.scrollHeight);
}

/*CAN BE DELETED*/

document.getElementById('nav').onmouseover = function (event) {
    let target = event.target;
    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
};

document.onmouseover = function (event) {
    let target = event.target;
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
};

function closeMenu() {
    let menu = document.getElementById('nav');
    let submenu = document.getElementsByClassName('submenu');
    for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}


/*CAN BE DELETED*/

// let eduButtons = document.getElementsByClassName('edu-button');
// eduButtons.onclick = function () {
//     let blocks = document.getElementsByClassName('edu-information');
//     console.log(blocks.length);
// };
function toggleInformation () {
    let blocks = document.getElementsByClassName('edu-information');
    console.log(blocks);
}
let eduButtons = document.getElementsByClassName('edu-button');
eduButtons.addEventListener('click', function () {
    console.log('clicked');
});