var awal = 110;
var ucup = 130;
var rudy = 120;

if (awal > rudy) {
  if (awal > ucup) {
    console.log("Awal merupakan siswa tertinggi")
  } else {
    console.log("Awal merupakan siswa terendah kedua")
  }
} else {
  if (ucup > awal) {
    console.log("Ucup merupakan siswa tertinggi")
  } else {
    console.log("ucup merupakan siswa terendah")
  }
}

if (awal > ucup) {
  console.log("awal tertinggi")
} else if (awal > rudy) {
  console.log("awal tertinggi kedua")
} else {
  console.log("awal terendah")
}
if (ucup > awal) {
  console.log("ucup tertinggi")
} else if (ucup > rudy) {
  console.log("ucup tertinggi kedua")
} else {
  console.log("ucup terendah")
}
if (rudy > ucup) {
  console.log("rudy tertinggi")
} else if (rudy > awal) {
  console.log("rudy tertinggi kedua")
} else {
  console.log("rudy terendah")
}