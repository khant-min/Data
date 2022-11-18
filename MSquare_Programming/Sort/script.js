// const containerTag = document.querySelector(".container");

// const videos = [
//   {
//     title: "Episode 82 - localStorage (Part 1)",
//     thumbnail: "../webDeveloper/img/Fuji photo.jpg",
//     uploadDate: new Date(2021, 7, 6),
//   },
//   {
//     title: "Episode 83 - localStorage (Part 2)",
//     thumbnail: "../webDeveloper/img/Fuji photo2.jpg",
//     uploadDate: new Date(2021, 8, 6),
//   },
//   {
//     title: "Episode 84 - JSON (Part 1)",
//     thumbnail: "../webDeveloper/img/Fuji photo3.jpg",
//     uploadDate: new Date(2021, 5, 6),
//   },
//   {
//     title: "Episode 85 - JSON (Part 2)",
//     thumbnail: "../webDeveloper/img/Fuji photo4.jpg",
//     uploadDate: new Date(2021, 6, 6),
//   },
// ];

// const updateSortUI = videos => {
//   containerTag.innerHTML = "";
//   videos.forEach(video => {
//     const videoTag = `
//       <div class = "videoContainer">
//           <img src = "${video.thumbnail}" class = "img"/>
//           <h6>${video.title}</h6>
//           <p>${video.uploadDate.toLocaleDateString()}</p>
//       </div>
//       `;
//     containerTag.innerHTML += videoTag;
//   });
// };
// updateSortUI(videos);

// const sortTags = document.querySelectorAll(".dropdown-item");
// sortTags.forEach(element => {
//   element.addEventListener("click", event => {
//     const sortType = event.target.id;
//     if (sortType === "ascending") {
//       //sort acending
//       const videoSortedByAscendingOrder = videos.sort(
//         (a, b) => a.uploadDate.getTime() - b.uploadDate.getTime()
//       );
//       updateSortUI(videoSortedByAscendingOrder);
//     } else {
//       //sort decending
//       const videoSortedByDecendingOrder = videos.sort(
//         (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
//       );
//       updateSortUI(videoSortedByDecendingOrder);
//     }
//   });
// });

const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll(".dropdown-item");
sortTags.forEach(element => {
  element.addEventListener("click", event => {
    const sortType = event.target.id;
    if (sortType === "ascending") {
      // ascending
      const videoSortedByAscendingOrder = videos.sort(
        (a, b) => a.uploadDate.getTime() - b.uploadDate.getTime()
      );
      updateSortUI(videoSortedByAscendingOrder);
    } else {
      // desending
      const videoSortedByDecendingOrder = videos.sort(
        (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
      );
      updateSortUI(videoSortedByDecendingOrder);
    }
  });
});

const videos = [
  {
    title: "Episode 82 - localStorage (Part 1)",
    thumbnail: "../webDeveloper/img/Fuji photo.jpg",
    uploadDate: new Date(2022, 7, 6),
  },
  {
    title: "Episode 83 - localStorage (Part 2)",
    thumbnail: "../webDeveloper/img/Fuji photo2.jpg",
    uploadDate: new Date(2022, 8, 6),
  },
  {
    title: "Episode 84 - JSON (Part 1)",
    thumbnail: "../webDeveloper/img/Fuji photo3.jpg",
    uploadDate: new Date(2022, 5, 6),
  },
  {
    title: "Episode 85 - JSON (Part 2)",
    thumbnail: "../webDeveloper/img/Fuji photo4.jpg",
    uploadDate: new Date(2022, 6, 6),
  },
];

const updateSortUI = videos => {
  containerTag.innerHTML = "";
  videos.forEach(video => {
    const videoTag = `
      <div class = "videoContainer">
        <img src = "${video.thumbnail}" class = "img"/>
        <h6>${video.title}</h6>
        <p>${video.uploadDate.toLocaleDateString()}</p>
      </div>`;
    containerTag.innerHTML += videoTag;
  });
};
updateSortUI(videos);
