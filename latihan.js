// deklarasi variable {Number (float,integer), String, Boolean}

//  a = 1;
//  b = 2 ;
// isTrue = true;
// console.log(a + b)

// nama = 1;
// // console.log(isTrue);

// console.log(nama[3])
// // looping
// for(i = 0; i<10; i ++){
//     if(i<5){
//         console.log(`${i} adalah kurang dari 5 dengan nama : ${nama}`)
//     }else{
//         console.log(`${i} adalah lebih dari 5`)
//     }

// }

// condition

// object
// dictionary

// darahAxe = axe.hp - miya.atk

// console.log('miya lawan axe')
// console.log(`darah axe tinggal ${darahAxe}`)

// // function

// miya = { name: "miya", atk: 100, hp: 200 };
// axe = { name: "axe", atk: 50, hp: 500 };

// function nyerang(penyerang, diserang) {
//   let hp = diserang.hp - penyerang.atk;
//   console.log(
//     `Diserang ${penyerang.name} darah ${diserang.name} tinggal ${hp}`
//   );
// }

// //ES6
// const nyerang = (penyerang, diserang) => {
//   let hp = diserang.hp - penyerang.atk;
//   console.log(
//     `Diserang ${penyerang.name} darah ${diserang.name} tinggal ${hp}`
//   );
// };

// nyerang(axe, miya);

karakterapi = [
  { name: "miya", atk: 100, hp: 200 },
  { name: "axe", atk: 50, hp: 500 },
  { name: "kuda", atk: 150, hp: 500 },
  { name: "axxxe", atk: 100, hp: 500 },
];

const listhero = (input)=>{
    for(i=0; i<input.length; i++){
        console.log(`${i+1}. ${input[i].name}, attack : ${input[i].atk} , hp : ${input[i].hp}`);
    }
}

listhero(karakterapi);

