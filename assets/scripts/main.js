let text = "Hi There I'm Ali Salama";
let text2 = "I'm A ";
let text3 = "Front-End Developer";
let type1 = document.querySelector(".text")
let type2 = document.querySelector(".text2")
let typingSound = document.querySelector(".typing-sound");
let toggleBetweenIcons = document.querySelector(".toggle-between-icons")
let aboutBtn = document.querySelector(".home .container .text-container .about-btn")
let socialIconContainer = document.querySelector(".home .container .text-container .social-icons-container")
let socialIcons = document.querySelectorAll(".home .container .text-container .social-icons-container img")
let rightArrow = document.querySelector(".my-projects .container .right-arrow")
let leftArrow = document.querySelector(".my-projects .container .left-arrow");
let projects = document.getElementsByClassName("works-container")
let caret = document.querySelector(".main-header .container nav .caret")
let i = 0;
let a = 0;
let c = 0;
window.onload = function() {
    setTimeout(() => {
        document.getElementById("home-background").play()
    }, 200);
    setInterval(() => {
        if(typingSound) {
        if(i < text.length) {
            typingSound.play()
            type1.textContent += text[i]
            type1.classList.add("type-icon");
            i++
        }
        }
        if(i >= text.length) {
            type1.classList.remove("type-icon")
            if(a < text2.length) {
                type2.textContent += text2[a]
                type2.style.color = "orange"
                a++
            }
            if(a >= text2.length) {
                type2.innerHTML += "<span class='job-title'></span>"
                let type3 = document.querySelector(".text2 .job-title");
                if(c < text3.length) {
                    type3.classList.add("type-icon")
                    type3.textContent += text3[c]
                    c++
                }
                if(c >= text3.length) {
                    type3.classList.remove("type-icon")
                    aboutBtn.style.opacity = "1"
                    socialIconContainer.style.opacity = "1"
                    for(let i = 0; i < socialIcons.length;i++) {
                        socialIcons[i].style.opacity = "1"
                        socialIcons[i].style.margin = "0 2px"
                    }
                    typingSound.pause();
                }
            }
        }
        // for(let i = 0;i < text.length;i++) {
            
        // }
    }, 50);
}
for(let i = 0; i < socialIcons.length;i++) {
    socialIcons[i].onclick = function(mouse) {
        toggleBetweenIcons.play()
    }
}
for(let i = 1;i < projects[0].children.length;i++) {
    projects[0].children[i].style.opacity = "0"
    projects[0].children[i].style.display = "none"

}
let rightSlide = 0;
let hasSlideRight = false;
let hasSlideLeft= false;
rightArrow.onclick = function(e) {
    hasSlideRight = true;
    for(let i = 0;i < projects[0].children.length;i++) {
        if(hasSlideRight) {  //0 1 2  // 3
            if(rightSlide < projects[0].children.length - 1) {
            projects[0].children[rightSlide].style.left = '100%'
            rightSlide++
            projects[0].children[rightSlide].style.opacity = '1'
            hasSlideRight = false;
            projects[0].children[rightSlide].style.display = "flex"
            }
        }
    }
}

leftArrow.onclick = function(e) {
    hasSlideLeft = true;
    for(let i = 0;i < projects[0].children.length;i++) {
        if(hasSlideLeft) {
            if(rightSlide <= projects[0].children.length - 1 && rightSlide > 0) {
                projects[0].children[rightSlide].style.opacity = '0'
                projects[0].children[rightSlide].style.display = 'none'
                rightSlide--
                projects[0].children[rightSlide].style.left = '0';
                projects[0].children[rightSlide].style.opacity = '1'
                projects[0].children[rightSlide].style.display = "flex"
                hasSlideLeft = false;
            }
        }
    }
}
window.onscroll = function(e) {
    if(document.querySelector('.skills-container').getBoundingClientRect().y < 360){
       for(let i = 0; i < document.getElementsByClassName("skill").length;i++) {
        
        setTimeout(() => {
            document.getElementsByClassName("skill")[i].classList.add("skill-box")
        }, 500);
        setTimeout(() => {
            document.getElementsByClassName("skill")[i].classList.add("add-height")
        }, 1000);
       }
    }
}
let dropMenu = document.querySelectorAll(".main-header .container nav ul li")
let hasClick = false;
caret.onclick = function() {
    if(hasClick == false) {
        caret.appendChild(document.getElementById("main-header-links"))
        document.querySelector(".main-header .container nav ul").style.display = "flex"
        document.querySelector(".main-header .container nav ul").style.flexDirection = "column"
        
        for(let i = 0; i < dropMenu.length;i++) {
            dropMenu[i].style.display = "block"
        }
        setTimeout(() => {
            hasClick = true;
        }, 1000);
    }
    if(hasClick) {
        document.querySelector(".main-header .container nav").appendChild(caret)
        document.querySelector(".main-header .container nav ul").style.display = "none"
        hasClick = false;
        for(let i = 0; i < dropMenu.length;i++) {
            dropMenu[i].style.display = "none"
        }
        setTimeout(() => {
            hasClick = false;
        }, 1000);
    }
}