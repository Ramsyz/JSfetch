const userleft = false;
const userWatchingMovie = false;

function watchingCircket() {
  return new Promise((resolve, reject) => {
    if (userleft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingMovie) {
      reject({
        name: "User Watching Movie",
        message: "Movie < Gehraiyaan"
      });
    } else {
      resolve("Share it");
    }
  });
}

watchingCircket()
  .then((message) => {
    console.log("sucess: " + message);
  })
  .catch((error) => {
    console.log(error.name + "" + error.message);
  });
