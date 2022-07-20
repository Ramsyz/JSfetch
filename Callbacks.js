const userleft = false;
const userWatchingMovie = false;

function watchingCircket(callback, errorCallback) {
  if (userleft) {
    errorCallback({
      name: "User Left",
      message: ":("
    });
  } else if (userWatchingMovie) {
    errorCallback({
      name: "User Watching Movie",
      message: "Movie < Gehraiyaan"
    });
  } else {
    callback("Share it");
  }
}
watchingCircket(
  (message) => {
    console.log("sucess: " + message);
  },
  (error) => {
    console.log(error.name + "" + error.message);
  }
);
