import React from "react";
import { createRoot } from "react-dom/client";
import AppButton from "./components/App";
import AppCard from "./components/AppCard";
import Icon from "./components/Icon";
import ShortenItHistory from "./components/ShortenItHistory";

const rootSignUp = createRoot(document.getElementById("signUpButton"));
rootSignUp.render(
  <AppButton myId="signUp" value="Sign Up" width="7.5" borderRadius="25" />
);

const rootGetStart = createRoot(document.getElementById("getStartedButton"));
rootGetStart.render(
  <AppButton
    myId="getStarted"
    value="Get Started"
    width="10"
    borderRadius="25"
  />
);

const rootFooterGetStart = createRoot(
  document.getElementById("footerGetStartedButton")
);
rootFooterGetStart.render(
  <AppButton
    myId="footerGetStarted"
    value="Get Started"
    width="10"
    borderRadius="25"
  />
);

const rootShortenIt = createRoot(document.getElementById("shortenIt"));
rootShortenIt.render(
  <AppButton
    myId="myShortenIt"
    value="Shorten It!"
    width="9"
    borderRadius="5"
  />
);

const rootCards = createRoot(document.getElementById("cards"));
rootCards.render(<AppCard />);

const rootSocialIcons = createRoot(document.getElementById("social"));
rootSocialIcons.render(<Icon />);

const error = document.getElementById("error");

const getShortenURL = async (url = "") => {
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const rootShortenItHistory = createRoot(document.getElementById("history"));
const shortenButton = document.getElementById("shortenIt");
const inputError = document.getElementById("shortenLink");
var myCount = 0;
shortenButton.addEventListener("click", async () => {
  const data = await getShortenURL(
    "https://api.shrtco.de/v2/shorten?url=" +
      document.getElementById("shortenLink").value
  );
  if (data.ok === true) {
    var count = localStorage.length;
    localStorage.setItem(
      `originalLink${count}`,
      document.getElementById("shortenLink").value
    );
    localStorage.setItem(`shortenLink${count}`, data.result.full_short_link);
    count++;
    const arr = [];
    for (var i = 0; i < localStorage.length; i = i + 2) {
      arr.push(
        <ShortenItHistory
          key={`${myCount}`}
          myId={`original${myCount}`}
          originalUrl={localStorage.getItem(`originalLink${i}`)}
          shortenUrl={localStorage.getItem(`shortenLink${i}`)}
          button={
            <AppButton
              myId={`copy${myCount}`}
              value="Copy"
              width="7"
              borderRadius="5"
            />
          }
        />
      );
      myCount++;
    }
    const lastThree = arr.slice(Math.max(arr.length - 3, 0));
    rootShortenItHistory.render(lastThree.reverse());
    document.getElementById("shortenLink").value = "";
    inputError.classList.remove("inputError");
    error.className = "unDisplayError";
  } else if (data.error_code === 1) {
    error.innerHTML = "<i>Please add a link</i>";
    inputError.classList.add("inputError");
    error.className = "";
  } else {
    error.textContent = data.error;
    inputError.classList.add("inputError");
    error.className = "";
  }
});

const copy = document.querySelector("#history");
copy.addEventListener("click", (e) => {
  const selectedCopy = document.getElementById(e.target.id);
  const selectedShortenIt = document.getElementById(e.target.id).parentElement
    .previousElementSibling;
  navigator.clipboard.writeText(selectedShortenIt.textContent);
  selectedCopy.textContent = "Copied!";
  selectedCopy.classList.add("selectedCopy");
});

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("myMenu");
menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("menuDisAppear");
});

if (window.innerWidth > 1000) {
  sideMenu.classList.remove("menuDisAppear");
} else {
  sideMenu.classList.add("menuDisAppear");
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1000) {
    sideMenu.classList.add("menuDisAppear");
  } else {
    sideMenu.classList.remove("menuDisAppear");
  }
});

const getStarted = document.querySelectorAll(".myGetStarted");
getStarted.forEach((element) => {
  element.addEventListener("click", () => {
    document.getElementById("shortenLink").focus();
  });
});
