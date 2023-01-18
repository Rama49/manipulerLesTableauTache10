let tab1 = [];
let tab2 = [];
// on utilise la boucle for pour boucler le prompt et de pusher en meme temps sur tab1
for (let a = 0; a <5; a++) {
    let users1= Number(prompt('remplissez le tableau1 svp'));
  tab1.push(users1);
}
console.log(tab1);

// on utilise la boucle for pour boucler le prompt et de pusher en meme temps sur tab2
for (let a = 0; a < 5; a++) {
    let users2 = Number(prompt('remplissez le tableau2 svp'));
    tab2.push(users2);
};
console.log(tab2);

let tab3 = [];
let tab4 =[]

// on declare trois variable pour les affecter des positions fixe a tab1
let a = tab1[0];
let b = tab1[1];
let c = tab1[2];
let g = tab1[3];
let f = tab1[4];

// on declare deux variable pour les affecter des positions fixe a tab2
let d= tab2[0];
let e = tab2[1];
let h= tab2[2];
let i = tab2[3];
let j = tab2[4];


// on utilise des conditions pour pusher des elements de tab1 qui differe de tab2
if ((a != d) && (a != e) && (a != h) && (a != i) && (a != j)){
  tab3.push(a)
} 
 if ((b != d) && (b != e) && (b != h) && (b != i) && (b != j)){
  tab3.push(b)
}
if ((c != d) && (c != e) && (c != h) && (c != i) && (c != j)){
  tab3.push(c)
}
if ((g != d) && (g != e) && (g != h) && (g != i) && (g != j)){
  tab3.push(g)
}
if ((f != d) && (f != e) && (f != h) && (f != i) && (f != j)){
  tab3.push(f)
}
console.log(tab3);


// on utilise des conditions pour pusher des elements de tab1 qui sont identiques des elements de tab2
if ((a === d) || (a === e) || (a === h) || (a === i) || (a === j)){
  tab4.push(a)
} 
 if ((b === d) || (b === e) || (b === h) || (b === i) || (b === j)){
  tab4.push(b)
}
if ((c === d) || (c === e) || (c === h) || (c === i) || (c === j)){
  tab4.push(c)
}
if ((g === d) || (g === e) || (g === h) || (g === i) || (g === j)){
  tab4.push(g)
}
if ((f === d) || (f === e) || (f === h) || (f === i) || (f === j)){
  tab4.push(f)
}
console.log(tab4);
