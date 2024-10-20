const forwardBtn = document.querySelector(".forward-btn");
const profile = document.querySelector(".profile-data");
const heroProfile = document.querySelector(".hero-profile");
const socialLinks = document.querySelector(".links-wraper");

function toggle() {
    if(socialLinks.classList.contains("hide")) {
        profile.classList.add("hide");
        socialLinks.classList.remove("hide");
        heroProfile.classList.add("social-links");
    } else {
        profile.classList.remove("hide");
        socialLinks.classList.add("hide");
        heroProfile.classList.remove("social-links");
    }
}

forwardBtn.addEventListener('click', toggle);

