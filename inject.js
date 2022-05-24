alert("hello");
const para = document.createElement("div");
para.classList.add = "vivek";
para.innerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

</head>

<body>
    <div class="main"></div>
    <div class="wrapper side-panel-open">
        <button class="side-panel-toggle" type="button">
            <span class="material-icons sp-icon-open">keyboard_double_arrow_left</span>
            <span class="material-icons sp-icon-close">keyboard_double_arrow_right</span>
        </button>
        <div class="side-panel">

            <div class="tabContainer">
                <div class="buttonContainer">
                    <button onclick="showPanel(0,'#f44336')">Tab 1</button>
                    <button onclick="showPanel(1,'#4caf50')">Tab 2</button>
                    <button onclick="showPanel(2,'#2196f3')">Tab 3</button>
                </div>
                <div class="tabPanel" ><button id="myBtn">Tooltip</button></div>
                <div class="tabPanel">Tab 2:Content</div>
                <div class="tabPanel">Tab 3:Content</div>
            </div>
        </div>
    </div>
    <style>
        body {
            margin: 0;
            font-family: sans-serif;
            line-height: 1.5;
        }

        .wrapper {
            display: flex;
            height: 100vh;
            position: absolute;
            top: 0;
            right: 0;
        }

        .main {
            flex-grow: 1;
        }

        .side-panel-toggle {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: grid;
            place-items: center;

            color: rgb(255, 255, 255);
            background: #000000;
            border: none;
            border-radius: 5px 0 0 5px;
            outline: none;
            cursor: pointer;
        }

        .side-panel-toggle:hover {
            background: #343a40;
        }

        .sp-icon-close {
            display: none !important;
        }

        .side-panel {
            display: none;
            width: 400px;
            flex-shrink: 0;
            padding: 20px;
            color: white;
            background: #000000;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
            margin: 0;
            padding: 0;
        }

        .side-panel-open .side-panel {
            display: initial;
        }

        .side-panel-open .sp-icon-open {
            display: none !important;
        }

        .side-panel-open .sp-icon-close {
            display: initial !important;
        }


        /*-----------------------------PANEl TAB CSS---------------------------------------*/

        .title {
            font-family: sans-serif;
            color: #dc2d5e;
            text-align: center;
        }

        .tabContainer {
            width: 100%;
            height: 350px;
        }

        .tabContainer .buttonContainer {
            height: 15%;
        }

        .tabContainer .buttonContainer button {
            width: 33.33%;
            height: 100%;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;
            font-family: sans-serif;
            font-size: 18px;
            background-color: #eee;
        }

        .tabContainer .buttonContainer button:hover {
            background-color: #d7d4d4;
        }

        .tabContainer .tabPanel {
            height: 85%;
            background-color: gray;
            color: white;
            text-align: center;
            padding-top: 105px;
            box-sizing: border-box;
            font-family: sans-serif;
            font-size: 22px;
            display: none;
        }
    </style>
   
</body>

</html>`;

document.body.appendChild(para);

document.querySelector(".side-panel-toggle").addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("side-panel-open");
});

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "#f44336");

var btn = document.getElementById("myBtn");
console.log(btn);
btn.onclick = function () {
  alert("ddb");

  var d = document.createElement("div");
  d.style.backgroundColor = "rgb(100, 0, 100, 0.5)";
  d.style.position = "absolute";
  d.style.zIndex = 1000;
  d.style.pointerEvents = "none";
  d.style.cursor = "crosshair";
  document.body.appendChild(d);
  window.addEventListener("mouseover", (e) => {
    var pos = e.target.getBoundingClientRect();

    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    var width = pos.width;
    var height = pos.height;
    var top = Math.max(0, pos.top + scrollTop);
    var left = Math.max(0, pos.left + scrollLeft);

    d.style.width = width + "px";
    d.style.height = height + "px";
    d.style.top = top + "px";
    d.style.left = left + "px";
    d.style.visibility = "visible";
    d.style.transition = "all 0.3s ease";
    d.style.zIndex = 999999999999999;
  });

  window.addEventListener("mouseout", (e) => {
    d.style.visibility = "hidden";
  });

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  var counter = 0;
  window.addEventListener(
    "click",
    (e) => {
      counter++;
      e.stopPropagation();
      e.preventDefault();
      console.log(e.target.classList);
      alert(`${e.target.classList}+gs +${counter} `);
    },
    true
  );
};
