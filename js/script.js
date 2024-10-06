
// fetch("http://localhost:3001/games")
//   .then((response) => response.json())
//   .then((data) => {
//     const gameContainer = document.querySelector(".container div");

//     let dataC = data.result;
//     for (let game of dataC) {
//       gameContainer.innerHTML += `
//         <div class="card h-100">
//           <img src="${game.image}" class="card-img-top" alt="${game.name}" />
//           <div class="card-body d-flex flex-column justify-content-between">
//             <h2 class="card-title fs-5">${game.name}</h2>
//             <h3 class="fs-6">${game.publisher}</h3>
//             <p class="card-text">${game.description}</p>
//             <p class="card-rating">{this.getGameStarsRating(game.id)}</p>
//             <p class="card-details">
//               <span class="badge text-bg-info">New</span>
//               <span class="badge text-bg-light">${game.genre}</span>
//               <span class="badge text-bg-light">${game.developer}</span>
//             </p>
//             <div class="btn btn-primary btn--view-more">View More details</div>
//           </div>
//         </div>`
//         ;

//       let modal = document.querySelector(".modal");
//       let buttonView = document.querySelectorAll(".btn--view-more");

      
//       for (let bottoni of buttonView) {
//         bottoni.addEventListener("click", () => {
//           console.log("hai bestemmiato");
//           modal.innerHTML = `
//                   <div class="modal-dialog d-flex m-auto">
//               <div class="modal-content m-auto">
//                 <div class="modal-header">
//                   <h5 class="modal-title">Selected Game</h5>
//                 </div>
//                 <div class="modal-body p-0">
//                   <div class="container-fluid">
//                     <div class="row my-3">
//                       <div class="col-2">
//                         <img src="${game.image}" class="modal-img img-fluid" alt="..." />  
//                       </div>
//                       <div class="col">
//                         <p class="modal-details">
//                           <span class="badge text-bg-info">New</span>
//                           <span class="modal-genre badge text-bg-light">${game.genre}</span>
//                           <span class="modal-developer badge text-bg-light">${game.developer}</span>
//                         </p>
//                         <div class="modal-body">
//                           <h2 class="modal-name fs-5">${game.name}</h2>
//                           <h3 class="modal-publisher fs-6">${game.publisher}</h3>

//                           <p class="modal-summary">${game.summary}</p>

//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary modal-close" data-bs-dismiss="modal">
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>`
//             ;
//           modal.style.display = "block";

//           let close = document.querySelector(".btn-secondary")
//           close.addEventListener("click", () => {
//             modal.style.display = "none"
//           })


//         }); //click button
//       }// for button
//     }// for 1
//   }) // .then
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });







fetch("http://localhost:3001/games")
  .then((response) => response.json())
  .then((data) => {
    const gameContainer = document.querySelector(".container div");

    let dataC = data.result;
    for (let game of dataC) {
      const gameCard = document.createElement("div");
      gameCard.classList.add("card", "h-100");

      gameCard.innerHTML = `
        <img src="${game.image}" class="card-img-top" alt="${game.name}" />
        <div class="card-body d-flex flex-column justify-content-between">
          <h2 class="card-title fs-5">${game.name}</h2>
          <h3 class="fs-6">${game.publisher}</h3>
          <p class="card-text">${game.description}</p>
          <p class="card-rating"></p>
          <p class="card-details">
            <span class="badge text-bg-info">New</span>
            <span class="badge text-bg-light">${game.genre}</span>
            <span class="badge text-bg-light">${game.developer}</span>
          </p>
          <div class="btn btn-primary btn--view-more">View More details</div>
        </div>
      `;


      // {this.getGameStarsRating(game.id)}

      gameContainer.appendChild(gameCard);

      const viewMoreButton = gameCard.querySelector(".btn--view-more");
      viewMoreButton.addEventListener("click", function() {
        const clickedGame = game; // Capture the clicked game object

        const modal = document.querySelector(".modal");
        modal.innerHTML = `
          <div class="modal-dialog d-flex m-auto">
            <div class="modal-content m-auto">
              <div class="modal-header">
                <h5 class="modal-title">Selected Game</h5>
              </div>
              <div class="modal-body p-0">
                <div class="container-fluid">
                  <div class="row my-3">
                    <div class="col-2">
                      <img src="${clickedGame.image}" class="modal-img img-fluid" alt="..." />
                    </div>
                    <div class="col">
                      <p class="modal-details">
                        <span class="badge text-bg-info">New</span>
                        <span class="modal-genre badge text-bg-light">${clickedGame.genre}</span>
                        <span class="modal-developer badge text-bg-light">${clickedGame.developer}</span>
                      </p>
                      <div class="modal-body">
                        <h2 class="modal-name fs-5">${clickedGame.name}</h2>
                        <h3 class="modal-publisher fs-6">${clickedGame.publisher}</h3>
                        <p class="modal-summary">${clickedGame.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary modal-close" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        `;

        modal.style.display = "block";

        const closeButton = modal.querySelector(".modal-close");
        closeButton.addEventListener("click", () => {
          modal.style.display = "none";
        });
      });
    }
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
  