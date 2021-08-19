let studio_hp = document.getElementById("studio_headphones");
let workout_hp = document.getElementById("workout_headphones");
let casual_hp = document.getElementById("casual_headphones");
// studio_hp.childNodes[1].style.background = "url(\"" + headphones[0].images[0] + "\") center/cover fixed no-repeat";

// console.log(studio_hp.childNodes[1].style.background);

// headphones.forEach(hp => {
//     if(hp.category === "studio") {
//         // var hp_name_node = document.createElement("h2");
//         // var hp_name_text = document.createTextNode(hp.name);
//         // hp_name_node.appendChild(hp_name_text);
//         // // console.log(studio_hp);
//         // studio_hp.appendChild(hp_name_node);
//         studio_hp.childNodes[1].src = hp.images[0];

//     }
//     else if(hp.category === "workout") {
//         var hp_name_node = document.createElement("h2");
//         var hp_name_text = document.createTextNode(hp.name);
//         hp_name_node.appendChild(hp_name_text);
//         // console.log(workout_hp);
//         workout_hp.appendChild(hp_name_node);
//     }
//     else if(hp.category === "casual") {
//         var hp_name_node = document.createElement("h2");
//         var hp_name_text = document.createTextNode(hp.name);
//         hp_name_node.appendChild(hp_name_text);
//         // console.log(casual_hp);
//         casual_hp.appendChild(hp_name_node);
//     }

// });

// console.log(studio_hp.childNodes);

studio_hp.childNodes[1].childNodes[1].src = headphones[0].images[0];
studio_hp.childNodes[1].childNodes[1].addEventListener('mouseenter', () => {
    studio_hp.childNodes[1].childNodes[1].src = headphones[0].images[1];
});

studio_hp.childNodes[1].childNodes[1].addEventListener('mouseout', () => {
    studio_hp.childNodes[1].childNodes[1].src = headphones[0].images[0];
});

studio_hp.childNodes[3].childNodes[1].src = headphones[1].images[0];
studio_hp.childNodes[5].childNodes[1].src = headphones[2].images[0];

document.addEventListener('mousemove', (e) => {
    studio_hp.childNodes[1].childNodes[1].style.transform = 'translate(' + -e.pageX * 0.05 + 'px,' + e.pageY * 0.05 + 'px)';
    studio_hp.childNodes[3].childNodes[1].style.transform = 'translate(' + e.pageX * 0.05 + 'px,' + e.pageY * 0.1 + 'px)';
    studio_hp.childNodes[5].childNodes[1].style.transform = 'translate(' + e.pageX * 0.05 + 'px,' + -e.pageY * 0.05 + 'px)';
})