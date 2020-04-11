export default {
  API: "http://localhost:8000",

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

  checkForAuth: (history) => {
    if (!window.sessionStorage.jwt) {
      history.push("/Login");
    }
  },

  watchRoot: (options, observer) => {
    const htmlNode = document.getElementById("html");
	const projectList = document.getElementById("project-list");
	const taskList = document.getElementById('task-list')
    const x = 1 - (25/window.innerHeight +0.115);
    if(!!projectList && projectList.scrollHeight > window.innerHeight*x){
      htmlNode.style.height = "auto"
    } else {
      htmlNode.style.height = "100%"
	}
	
	if(!!taskList && taskList.scrollHeight > window.innerHeight*x){
		htmlNode.style.height = "auto"
	} else {
		htmlNode.style.height = "100%"
	}
  },
};
