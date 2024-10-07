const navBlock = document.createElement("nav");
navBlock.className = "nav_block";

const nameTitle = document.createElement("p");
nameTitle.className = "name_title";
nameTitle.innerHTML = `
  <span><img id="logo" src="./assets/Logo.svg" alt="" /></span>
  Anushervon Abdusamadov
`;

const links = document.createElement("div");
links.className = "links";
const linksContent = [
  "Home",
  "About",
  "Resume",
  "Skills",
  "Projects",
  "Contact",
];
linksContent.forEach((linkText) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = linkText;
  links.appendChild(link);
});

const themeButton = document.createElement("button");
themeButton.id = "themeButton";
themeButton.innerHTML = '<img id="btnTheme" src="./assets/Moon.svg" alt="" />';
links.appendChild(themeButton);

const burgerMob = document.createElement("div");
burgerMob.className = "burgerMob";

const btnBurger = document.createElement("button");
btnBurger.className = "btnBurger";
btnBurger.innerHTML =
  '<img id="btnBurger" src="./assets/Burger Menu.svg" alt="" />';
burgerMob.appendChild(btnBurger);

const themeButtonMob = document.createElement("button");
themeButtonMob.className = "themeMob";
themeButtonMob.id = "themeButtonMob";
themeButtonMob.innerHTML =
  '<img id="btnTheme1" src="./assets/Moon.svg" alt="" />';
burgerMob.appendChild(themeButtonMob);

const linksMob = document.createElement("div");
linksMob.className = "linksMob";
linksContent.forEach((linkText) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = linkText;
  linksMob.appendChild(link);
});

const socialMedia = document.createElement("div");
socialMedia.className = "socialMedia";
const socialMediaLinks = [
  {
    url: "https://pin.it/7EPeizM0s",
    icon: "./assets/pinterest_white.svg",
    alt: "Pinterest",
  },
  {
    url: "https://www.linkedin.com/in/anushervon-abdusamadov-4672b92a6",
    icon: "./assets/Linkedin.svg",
    alt: "Linkedin",
  },
  {
    url: "https://t.me/rdr_22",
    icon: "./assets/Telegram.svg",
    alt: "Telegram",
  },
  {
    url: "https://github.com/Anushervon-Abdusamadov/Anushervon-Abdusamadov",
    icon: "./assets/GitHub.svg",
    alt: "GitHub",
  },
];
socialMediaLinks.forEach((item) => {
  const link = document.createElement("a");
  link.href = item.url;
  link.target = "_blank";
  const icon = document.createElement("img");
  icon.src = item.icon;
  icon.alt = item.alt;
  link.appendChild(icon);
  socialMedia.appendChild(link);
});

const emailFixed = document.createElement("p");
emailFixed.className = "emailFixed";
emailFixed.innerHTML = `
  <span><img id="line" src="./assets/line.svg" alt="anushervon.a14@gmail.com" /></span>
  anushervon.a14@gmail.com
`;

// Добавляем элементы на страницу
navBlock.appendChild(nameTitle);
navBlock.appendChild(links);
navBlock.appendChild(burgerMob);
navBlock.appendChild(linksMob);
document.body.appendChild(navBlock);

document.body.appendChild(socialMedia);

document.body.appendChild(emailFixed);

// Создаем элементы для первого раздела
const heroBlock = document.createElement("div");
heroBlock.className = "hero_block";

const heroTexts = document.createElement("div");
heroTexts.className = "heroTexts";

const heroIcon = document.createElement("span");
heroIcon.className = "heroIcon";

const heroTitle = document.createElement("p");
heroTitle.className = "heroTitle";
heroTitle.id = "textChange";
heroTitle.textContent = "Hello!";

const messageBoxImg = document.createElement("img");
messageBoxImg.src = "./assets/Message Box.svg";
messageBoxImg.alt = "";

heroIcon.appendChild(heroTitle);
heroIcon.appendChild(messageBoxImg);

const heroName = document.createElement("p");
heroName.className = "heroName";
heroName.innerHTML = `I'm <span class="myName">Anushervon</span><span><img src="./assets/wave-hello.gif" alt="" style="padding: 0px 10px"></span>`;

const txt1 = document.createElement("p");
txt1.className = "txt1";
txt1.innerHTML = `UI/UX Designer, Front-End Developer, Editor & Thinker. <br />Based in Tajikistan.`;

const heroButtons = document.createElement("div");
heroButtons.className = "heroButtons";

const btnDwnl1 = document.createElement("button");
btnDwnl1.className = "btnDwnl";
btnDwnl1.textContent = "Download CV";
btnDwnl1.onclick = downloadFile;

function downloadFile() {
  var link = document.createElement("a");
  link.download = "CV_A";
  link.href =
    "https://drive.google.com/file/d/1_I_xiLDpFrkSVQAJUyPDuGCWXBd4oDfw/view?usp=sharing";

  document.body.appendChild(link); // Добавляем ссылку в DOM
  link.click(); // Вызываем метод click() для запуска скачивания
  document.body.removeChild(link); // Удаляем ссылку из DOM
}

const btnTouch1 = document.createElement("button");
btnTouch1.className = "btnTouch";
btnTouch1.textContent = "Get in Touch!";

heroButtons.appendChild(btnDwnl1);
heroButtons.appendChild(btnTouch1);

heroTexts.appendChild(heroIcon);
heroTexts.appendChild(heroName);
heroTexts.appendChild(txt1);
heroTexts.appendChild(heroButtons);

const divMe = document.createElement("div");
divMe.className = "divMe";

const pic1 = document.createElement("img");
pic1.className = "pic1";
pic1.src = "./assets/i.svg";
pic1.alt = "";

divMe.appendChild(pic1);

const heroButtons2 = document.createElement("div");
heroButtons2.className = "heroButtons2";

const btnDwnl2 = document.createElement("button");
btnDwnl2.className = "btnDwnl";
btnDwnl2.textContent = "Download CV";

const btnTouch2 = document.createElement("button");
btnTouch2.className = "btnTouch";
btnTouch2.textContent = "Get in Touch!";

heroButtons2.appendChild(btnDwnl2);
heroButtons2.appendChild(btnTouch2);

heroBlock.appendChild(heroTexts);
heroBlock.appendChild(divMe);
heroBlock.appendChild(heroButtons2);

// Создаем элементы для второго раздела
const secondSection = document.createElement("div");
secondSection.className = "secondSection";

const secondBlock = document.createElement("div");
secondBlock.className = "secondBlock";

const p = document.createElement("p");
p.innerHTML = `<span>T</span>his is it. ;)<span><img id="underlineVec" src="./assets/Line 6.svg" alt=""></span>`;

const captionBlock = document.createElement("div");
captionBlock.className = "captionBlock";
// 0
captionBlock.textContent = `
I have been studying programming (Front-end) for more than half a year. I am a passionate and dedicated front-end developer currently in my third year of college pursuing a degree in Information Technology and Programming. I have a strong foundation in HTML, CSS and JavaScript and I want to apply my knowledge and contribute to web development projects. I learn quickly and thrive in a collaborative environment. Excited to gain hands-on experience and make a positive impact on the industry.
`;

secondBlock.appendChild(p);
secondBlock.appendChild(captionBlock);

const vec1 = document.createElement("img");
vec1.classList.add("posAb", "vec1");
vec1.src = "./assets/Rectangle.svg";
vec1.alt = "";

const vec2 = document.createElement("img");
vec2.classList.add("posAb", "vec2");
vec2.src = "./assets/Vector 1.svg";
vec2.alt = "";
vec2.id = "vec2";

const vec3 = document.createElement("img");
vec3.classList.add("posAb", "vec3");
vec3.src = "./assets/Vector 4.svg";
vec3.alt = "";
vec3.id = "vec3";

const vec4 = document.createElement("img");
vec4.classList.add("posAb", "vec4");
vec4.src = "./assets/Vector 5.svg";
vec4.alt = "";
vec4.id = "vec4";

const vec5 = document.createElement("img");
vec5.classList.add("posAb", "vec5");
vec5.src = "./assets/Vector 3.svg";
vec5.alt = "";
vec5.id = "vec5";

secondSection.appendChild(secondBlock);

secondSection.appendChild(vec1);
secondSection.appendChild(vec2);
secondSection.appendChild(vec3);
secondSection.appendChild(vec4);
secondSection.appendChild(vec5);

document.body.appendChild(heroBlock);
document.body.appendChild(secondSection);

const themButton = document.getElementById("themeButton");
const themButton2 = document.getElementById("themeButtonMob");

function changeTitle() {
  const textArr = ["Hallo!", "Hello!", "Привет!", "Салом!"];
  let i = 0;

  function updateText() {
    const textElement = document.getElementById("textChange");
    textElement.classList.add("fadeOut");

    setTimeout(function () {
      textElement.textContent = textArr[i];
      textElement.classList.remove("fadeOut");
      i = (i + 1) % textArr.length;
    }, 750); // Длительность анимации / 2 (в миллисекундах)

    setTimeout(updateText, 3000); // Вызываем функцию себя через каждые 3 секунды
  }

  // Начинаем анимацию сразу
  updateText();
}

window.onload = function () {
  changeTitle();
};

const elements = {
  logo: ["./assets/logo.svg", "./assets/logo_white.svg"],
  btnTheme: ["./assets/moon.svg", "./assets/sun.svg"],
  btnTheme1: ["./assets/moon.svg", "./assets/sun.svg"],
  btnBurger: ["./assets/Burger Menu.svg", "./assets/Burger Menu white.svg"],
  // iconFacebook: ["./assets/facebook.svg", "./assets/facebookDark.svg"],
  // iconInst: ["./assets/instagram.svg", "./assets/instDark.svg"],
  iconGit: ["./assets/github.svg", "./assets/gitDark.svg"],
  iconTg: ["./assets/telegram.svg", "./assets/tgDark.svg"],
  line: ["./assets/line.svg", "./assets/lineForDark.svg"],
  vec2: ["./assets/Vector 1.svg", "./assets/Vector 1dark.svg"],
  vec3: ["./assets/Vector 4.svg", "./assets/Vector 4dark.svg"],
  vec4: ["./assets/Vector 5.svg", "./assets/Vector 5dark.svg"],
  vec5: ["./assets/Vector 3.svg", "./assets/Vector 3dark.svg"],
  underlineVec: ["./assets/Line 6.svg", "./assets/Line 6dark.svg"],
};

themButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  for (let id in elements) {
    const element = document.getElementById(id);
    const src = document.body.classList.contains("dark")
      ? elements[id][1]
      : elements[id][0];
    element.setAttribute("src", src);
  }
});

themButton2.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  for (let id in elements) {
    const element = document.getElementById(id);
    const src = document.body.classList.contains("dark")
      ? elements[id][1]
      : elements[id][0];
    element.setAttribute("src", src);
  }
});

document.querySelector(".btnBurger").addEventListener("click", function () {
  document.querySelector(".linksMob").classList.toggle("active");
});
