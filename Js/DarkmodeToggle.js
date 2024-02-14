const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


const setState = (key, value) => {
    localStorage.setItem(key, value);
};


const getState = (key) => {
    return localStorage.getItem(key) === "true";
};



const setDarkMode = (isDarkMode) => {
    setState("darkMode", isDarkMode);
};

const getDarkMode = () => {
    return getState("darkMode");
};

const applySavedDarkMode = () => {
    const isDarkMode = getDarkMode();
    body.classList.toggle("dark", isDarkMode);
    modeText.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
};

modeSwitch.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark");
    setDarkMode(isDarkMode);

    if (isDarkMode) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

document.addEventListener("DOMContentLoaded", applySavedDarkMode);



const setSidebarState = (isSidebarClosed) => {
    setState("sidebarClosed", isSidebarClosed);
};

const getSidebarState = () => {
    return getState("sidebarClosed");
};

const applySavedSidebarState = () => {
    const isSidebarClosed = getSidebarState();
    sidebar.classList.toggle("close", isSidebarClosed);
};

toggle.addEventListener("click", () => {
    const isSidebarClosed = sidebar.classList.toggle("close");
    setSidebarState(isSidebarClosed);
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
    setSidebarState(false); 
});

document.addEventListener("DOMContentLoaded", applySavedSidebarState);

function search() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase(); 
    var paragraphs = document.querySelectorAll('.text p'); 
    var found = false;
    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].textContent.toLowerCase(); 
        if (paragraphText.includes(searchInput)) { 
            paragraphs[i].style.display = 'block'; 
            found = true;
        } else {
            paragraphs[i].style.display = 'none'; 
        }
    }
    if (!found) {
        alert('No matching results found.');
    }
}
