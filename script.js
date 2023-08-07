let royal = document.getElementById("seats-royal");
let seatrow = Number(royal.getAttribute("seatrow"));
let seatcol = Number(royal.getAttribute("seatcol"));
let currentrow;
for (let i = 0; i < seatrow; i++) {
    royal.innerHTML = royal.innerHTML + `<div class='row' id='row-${i}'><span class="light-grey-text">${String.fromCharCode(65 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
    currentrow = document.getElementById(`row-${i}`);
    for (let j = 0; j < seatcol; j++) {
        currentrow.innerHTML = currentrow.innerHTML + `<a id='${String.fromCharCode(65 + i)+(j+1)}' class='seat pointer'>${j + 1}</a>`;
    }
}

let club = document.getElementById("seats-club");
let club_seatrow = Number(club.getAttribute("club_seatrow"));
let club_seatcol = Number(club.getAttribute("club_seatcol"));
let club_currentrow;

for (let i = 0; i < club_seatrow; i++) {
    club.innerHTML = club.innerHTML + `<div class='row' id='club_row-${i}'><span class="light-grey-text">${String.fromCharCode(66 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
    club_currentrow = document.getElementById(`club_row-${i}`);
    for (let j = 0; j < club_seatcol; j++) {

        if (i > 5) {

            if (j > 4) {

                if (j == 4) {
                    club_currentrow.innerHTML = club_currentrow.innerHTML + `<a id='${String.fromCharCode(66 + i)+(j+1)}' class='seat pointer'>${j + 1}</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

                }
                else {
                    club_currentrow.innerHTML = club_currentrow.innerHTML + `<a id='${String.fromCharCode(66 + i)+(j+1)}' class='seat pointer'>${j + 1}</a>`;
                }
            }
            else {

                club_currentrow.innerHTML = club_currentrow.innerHTML + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

            }


        }
        else {

            if (j == 4) {
                club_currentrow.innerHTML = club_currentrow.innerHTML + `<a id='${String.fromCharCode(66 + i)+(j+1)}' class='seat pointer'>${j + 1}</a> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;`;

            }
            else {
                club_currentrow.innerHTML = club_currentrow.innerHTML + `<a id='${String.fromCharCode(66 + i)+(j+1)}' class='seat pointer'>${j + 1}</a>`;
            }

        }

    }
}


let front = document.getElementById("seats-front");
let front_seatrow = Number(front.getAttribute("front_seatrow"));
let front_seatcol = Number(front.getAttribute("front_seatcol"));
let front_currentrow;

for (let i = 0; i < front_seatrow; i++) {
    front.innerHTML = front.innerHTML + `<div class='row' id='front_row-${i}'><span class="light-grey-text">${String.fromCharCode(77 + i)} &nbsp; &nbsp; </span></div>&nbsp;`;
    front_currentrow = document.getElementById(`front_row-${i}`);
    for (let j = 0; j < front_seatcol; j++) {

        if (i > -1) {

            if (j > 4) {

                if (j == 4) {
                    front_currentrow.innerHTML = front_currentrow.innerHTML + `<a id='${String.fromCharCode(77 + i)+(j+1)}' class='seat pointer'>${j + 1}</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

                }
                else {
                    front_currentrow.innerHTML = front_currentrow.innerHTML + `<a id='${String.fromCharCode(77 + i)+(j+1)}' class='seat pointer'>${j + 1}</a>`;
                }
            }
            else {

                front_currentrow.innerHTML = front_currentrow.innerHTML + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

            }


        }
        else {

            if (j == 4) {
                front_currentrow.innerHTML = front_currentrow.innerHTML + `<a id='${String.fromCharCode(77 + i)+(j+1)}'  class='seat pointer'>${j + 1}</a> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;`;

            }
            else {
                front_currentrow.innerHTML = front_currentrow.innerHTML + `<a  id='${String.fromCharCode(77 + i)+(j+1)}' class='seat pointer'>${j + 1}</a>`;
            }

        }

    }
}

fetch('https://script.google.com/macros/s/AKfycbxnDIU8g_Nkx0JUdWFaFY5GSh_-0yl_v8iipXF7ED6tr6zssTrGUDffhru0M9WUEnZd/exec')
  .then(response => response.json())
  .then(data => {
    document.body.style.display='block';
    data.forEach(item => {
        let el = document.getElementById(item.name);
        el.style.backgroundColor='lightgreen';
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });
  

