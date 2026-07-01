document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});
const projects = [
    {
        title: "Rock Paper Scissors",
        desc: "Interactive Rock Paper Scissors game with score tracking.",
        link: "https://heba-metwally.github.io/RPS-game/"
    },
    {
        title: "Calculator App",
        desc: "Simple interactive calculator built with JavaScript.",
        link: "https://heba-metwally.github.io/CodeAlpha_Calculator"
    },
    {
        title: "Image Gallery",
        desc: "Responsive image gallery with modern layout.",
        link: "https://heba-metwally.github.io/CodeAlpha_ImageGallery"
    },
    {
        title: "Music Player App",
        desc: "A custom web audio player with play, pause, track skipping and volume control features.",
        link: "https://heba-metwally.github.io/CodeAlpha_MusicPlayer"
    }
    ];
    const images = document.querySelectorAll(".slides img");
    const dots = document.querySelectorAll(".dot");
    
    const title = document.getElementById("projectTitle");
    const desc = document.getElementById("projectDesc");
    const link = document.getElementById("projectLink");
    
    let index = 0;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    function showProject(i){
        images.forEach(img=>img.classList.remove("active"));
        dots.forEach(dot=>dot.classList.remove("active"));
    
        images[i].classList.add("active");
        dots[i].classList.add("active");
    
        title.textContent = projects[i].title;
        desc.textContent = projects[i].desc;
        link.href = projects[i].link;
        index = i;
    }
    dots.forEach((dot,i)=>{
        dot.addEventListener("click",()=>showProject(i));
    });

    function nextProject() {
        index++;
        if (index >= projects.length) {
            index = 0;
        }
        showProject(index);
    }
    function prevProject() {
        index--;
        if (index < 0) {
            index = projects.length - 1;
        }
        showProject(index);
    }
    next.addEventListener("click", nextProject);
    prev.addEventListener("click", prevProject);

    const projectCard = document.getElementById("projectCard");
    projectCard.focus();
    projectCard.addEventListener("keydown",(e)=>{
        switch(e.key){
            case "ArrowRight":
                e.preventDefault();
                nextProject();
                break;
    
            case "ArrowLeft":
                e.preventDefault();
                prevProject();
                break;
    
            case "Home":
                e.preventDefault();
                showProject(0);
                break;
    
            case "End":
                e.preventDefault();
                showProject(projects.length-1);
                break;
        }
    });