class UI {
  createBoard() {
    const board = document.getElementById("board");

    const redCells = [
      1, 2, 3, 4, 5, 6, 16, 31, 46, 61, 21, 36, 51, 66, 76, 77, 79, 80, 81, 78,
      92, 107, 108, 109, 110, 111, 112,
    ];

    const blueCells = [
      15, 14, 13, 12, 11, 10, 25, 40, 55, 70, 85, 86, 87, 88, 89, 90, 30, 45,
      60, 75, 24, 23, 38, 53, 68, 83, 98,
    ];

    const greenCells = [
      225, 224, 223, 222, 221, 220, 205, 190, 175, 160, 145, 146, 147, 148, 149,
      150, 165, 180, 195, 210, 134, 119, 118, 117, 116, 115, 114,
    ];

    const yellowCells = [
      211, 196, 181, 166, 151, 136, 137, 138, 139, 140, 141, 156, 171, 186, 201,
      216, 215, 214, 213, 212, 202, 203, 188, 173, 158, 143, 128,
    ];

    const safeCells = [92, 37, 24, 103, 134, 189, 202, 123];

    const redStartPlaces = [
      [17, 18, 33, 32],
      [19, 20, 35, 34],
      [47, 48, 63, 62],
      [49, 50, 65, 64],
    ];
    const blueStartPlace = [
      [26, 27, 42, 41],
      [28, 29, 44, 43],
      [58, 59, 74, 73],
      [56, 57, 72, 71],
    ];

    const greenStartPlaces = [
      [161, 162, 177, 176],
      [163, 164, 179, 178],
      [193, 194, 209, 208],
      [191, 192, 207, 206],
    ];

    const yellowStartPlaces = [
      [152, 153, 168, 167],
      [154, 155, 170, 169],
      [184, 185, 200, 199],
      [182, 183, 198, 197],
    ];

    //draw cells
    for (let cellNumber = 1; cellNumber <= 15 * 15; cellNumber++) {
      const boardCell = document.createElement("div");
      // boardCell.innerText = cellNumber;
      boardCell.classList.add("board-cell");
      board.appendChild(boardCell);
    }

    //colored cells
    redCells.forEach((cellNumber) =>
      board.children[cellNumber - 1].classList.add("red")
    );
    blueCells.forEach((cellNumber) =>
      board.children[cellNumber - 1].classList.add("blue")
    );
    greenCells.forEach((cellNumber) =>
      board.children[cellNumber - 1].classList.add("green")
    );
    yellowCells.forEach((cellNumber) =>
      board.children[cellNumber - 1].classList.add("yellow")
    );
    safeCells.forEach((cellNumber) => {
      board.children[cellNumber - 1].innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="star-icon"
        >
          <defs>
            <style></style>
          </defs>
          <title>star-outline</title>
          <path
            class="cls-1"
            d="M405.33,512a21.32,21.32,0,0,1-12.4-4L256,410.21,119.07,508A21.34,21.34,0,0,1,86,485.48l39.74-158.95L6.25,207.08a21.33,21.33,0,0,1,15.08-36.42H177.21L236,13.84a21.33,21.33,0,0,1,39.95,0l58.81,156.82H490.67a21.33,21.33,0,0,1,15.08,36.42L386.29,326.54,426,485.48A21.33,21.33,0,0,1,405.33,512ZM256,362.66a21.33,21.33,0,0,1,12.4,4l102.18,73L342,325.17a21.33,21.33,0,0,1,5.61-20.26l91.58-91.58H320a21.34,21.34,0,0,1-20-13.84L256,82.09,212,199.49a21.34,21.34,0,0,1-20,13.84H72.84l91.58,91.58A21.33,21.33,0,0,1,170,325.17L141.42,439.62l102.18-73A21.33,21.33,0,0,1,256,362.66Z"
          />
        </svg>`;
      board.children[cellNumber - 1].classList.add("safe-cell");
    });

    // to draw start places
    const drawStartPlaces = (places, colorClass) => {
      places.forEach((position) => {
        position.forEach((cellNumber, index) => {
          switch (index) {
            case 0:
              board.children[cellNumber - 1].classList.add(
                "firt-part-position",
                colorClass
              );
              break;
            case 1:
              board.children[cellNumber - 1].classList.add(
                "second-part-position",
                colorClass
              );
              break;
            case 2:
              board.children[cellNumber - 1].classList.add(
                "third-part-position",
                colorClass
              );
              break;
            case 3:
              board.children[cellNumber - 1].classList.add(
                "fourth-part-position",
                colorClass
              );
              break;
            default:
              break;
          }
        });
      });
    };
    drawStartPlaces(redStartPlaces, "red");
    drawStartPlaces(blueStartPlace, "blue");
    drawStartPlaces(greenStartPlaces, "green");
    drawStartPlaces(yellowStartPlaces, "yellow");

    //cesll with two colorClass
    board.children[96].classList.add("red-blue");
    board.children[98].classList.add("blue-green");
    board.children[128].classList.add("green-yellow");
    board.children[126].classList.add("yellow-red");
    //single colored cell inside home
    board.children[96].classList.add("no-bottom-border");
    board.children[98].classList.add("no-bottom-border");
    board.children[111].classList.add("no-bottom-border");
    board.children[113].classList.add("no-bottom-border");
    board.children[128].classList.add("no-top-border");
    board.children[126].classList.add("no-top-border");
    board.children[97].classList.add("no-right-border");
    board.children[96].classList.add("no-right-border");
    board.children[126].classList.add("no-right-border");
    board.children[127].classList.add("no-right-border");
    //home cell
    board.children[112].classList.add("home");
    board.children[112].innerText = "Home";
  }
}

export default UI
