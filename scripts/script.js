let googleBtn = document.getElementById("googleBtn");
let facebookBtn = document.getElementById("facebookBtn");
let youtubeBtn = document.getElementById("youtubeBtn");
let twitterBtn = document.getElementById("twitterBtn");
let instagramBtn = document.getElementById("instagramBtn");
let linkedinBtn = document.getElementById("linkedinBtn");
let githubBtn = document.getElementById("githubBtn");
let currentSiteBtn = document.getElementById("currentSiteBtn");

let copyBtn = document.getElementById("copyBtn");

let outputContainer = document.querySelector(".outputContainer");
let output = document.getElementById("output");

const computeHash = (site, key) => {
  const computed = `${site}**___**${key}`;
  const encrypted = CryptoJS.HmacMD5(computed, key);
  return encrypted;
};

const getSiteUrl = (url) => {
  let domain = new URL(url);
  domain = domain.hostname.replace("www.", "");
  console.log({ domain });
  return domain;
};

const showNotification = () => {
  const elem = document.querySelector(".copyNotification");
  elem.style.display = "block";
  setTimeout(() => {
    elem.style.display = "none";
  }, 3000);
};

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.textContent).then(
    () => {
      showNotification();
    },
    () => {}
  );
});

googleBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("google.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

facebookBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("facebook.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

youtubeBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("youtube.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

twitterBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("twitter.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

instagramBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("instagram.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

linkedinBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("linkedin.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

githubBtn.addEventListener("click", (e) => {
  let key = document.getElementById("key").value;
  const hashed = computeHash("github.com", key);
  outputContainer.style.display = "block";
  output.textContent = hashed;
});

currentSiteBtn.addEventListener("click", (e) => {
  browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let key = document.getElementById("key").value;
    let site = getSiteUrl(tabs[0].url);
    const hashed = computeHash(site, key);
    outputContainer.style.display = "block";
    output.textContent = hashed;
  });
});
