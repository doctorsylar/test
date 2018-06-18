"use strict";

$('#carousel').carousel({
    interval: 2000
});

// VueJS section
var app = new Vue({
    el: '#app',
    data: {
        message: ""
    }
});

var rangeApp = new Vue({
    el: '#rangeApp',
    data: {
        range: "250"
    }
});

var testId = new Vue({
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
                var names = fullName.split(' ');
                this.firstName = names[0];
                if (names.length > 1) {
                    this.lastName = names[names.length-1];
                }
            }
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var toDoList = new Vue({
    el: '#toDoList',
    data: {
        list : ["one", "two"]
    },
    methods: {
        addTask : function () {
            this.list.push(document.getElementById('inputToDo').value);
            document.getElementById('inputToDo').value = "";
        }
    }
});

var testCheckbox = new Vue({
    el: '#test-checkbox',
    data: {
        checked: true
    }
});

var example_3 = new Vue({
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

// Global component
// Vue.component('blog-post', {
//     props: ['post'],
//     template:
//     `<div class="blog-post">
//         <h3>{{ post.title }}</h3>
//         <div v-html="post.content"></div>
//     </div>`
// });


// Local component
var blogPost = {
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
// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <button v-on:click="$emit('enlarge-text')">
//         Enlarge text
//       </button>
//       <button v-on:click="$emit('reduce-text')">
//         Reduce text
//       </button>
//       <div v-html="post.content"></div>
//     </div>
//   `
// });

var blogPostsEventsDiv = new Vue({
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

// var blogPostsList = new Vue({
//     el: '#components-demo',
//     data: {
//         posts: [
//             { id: 1, title: 'Post title 1', content: "Post 1 content" },
//             { id: 2, title: 'Post title 2', content: "Post 2 content"  },
//             { id: 3, title: 'Post title 3', content: "Post 3 content"  }
//         ]
//     }
// });


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
    alert("Индекс: " + selected +
        ", фрукт: " + document.getElementById("mySelect")
            .children[selected].innerHTML);
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