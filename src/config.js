export default {
  API: "https://tranquil-mountain-91418.herokuapp.com",
  //API: process.env.REACT_APP_API_ENDPOINT,
  getOptions: (method) => {
    return JSON.parse(
      JSON.stringify({
        method: method.toUpperCase(),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${window.sessionStorage.jwt}`,
        },
      })
    );
  },

  // Checks that a user has signed in
  checkForAuth: (history) => {
    if (!window.sessionStorage.jwt) {
      history.push("/Login");
    }
  },

  // Watches for mobile and desktop size changes
  watchRoot: (options, observer) => {
    const htmlNode = document.getElementById("html");
    const projectList = document.getElementById("project-list");
    const taskList = document.getElementById("task-list");
    const formContainer = document.getElementById("form-container");
    const x = (window.innerHeight - 25) * 0.885;
    if (!!projectList && projectList.scrollHeight > x) {
      htmlNode.style.height = "auto";
    } else if (!!taskList && taskList.scrollHeight > x) {
      htmlNode.style.height = "auto";
    } else if (!!formContainer && formContainer.scrollHeight > x) {
      htmlNode.style.height = "auto";
    } else {
      htmlNode.style.height = "100%";
    }
  },
};
