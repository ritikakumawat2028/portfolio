var typed= new Typed(".text",{
    strings:["Frontend Developer","Web Developer"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


function openModal(service) {
    const modal = document.getElementById("serviceModal");
    const body = document.getElementById("modal-body");

    if (service === "frontend") {
        body.innerHTML = `
        <h2>🟦 Frontend Web Development</h2>
        <p>I specialize in creating responsive, fast, and visually appealing websites using modern frontend technologies.</p>

        <h3>What I Do</h3>
        <ul>
            <li>Build responsive layouts using HTML, CSS, Tailwind CSS, and Bootstrap</li>
            <li>Develop interactive UI components with JavaScript and React.js</li>
            <li>Ensure cross-browser compatibility and mobile-first design</li>
            <li>Optimize performance and write clean, readable code</li>
        </ul>

        <strong>Tools & Technologies</strong>
        <p>HTML • CSS • JavaScript • React.js • Tailwind CSS • Bootstrap</p>
        `;
    }

    if (service === "uiux") {
        body.innerHTML = `
        <h2>🎨 UI/UX Design</h2>
        <p>I design user-centric interfaces that are simple, intuitive, and visually consistent using Figma.</p>

        <h3>What I Do</h3>
        <ul>
            <li>Create wireframes and UI layouts using Figma</li>
            <li>Design clean interfaces following UI/UX principles</li>
            <li>Convert Figma designs into responsive web pages</li>
            <li>Improve visual hierarchy and user flow</li>
        </ul>

        <strong>Tools & Technologies</strong>
        <p>Figma • UI Principles • Responsive Design • Design-to-Code</p>
        `;
    }

    if (service === "backend") {
        body.innerHTML = `
        <h2>⚙️ Backend & API Integration</h2>
        <p>I have working knowledge of backend technologies to understand full-stack workflows.</p>

        <h3>What I Do</h3>
        <ul>
            <li>Integrate frontend applications with REST APIs</li>
            <li>Work with Node.js and Express.js for basic backend logic</li>
            <li>Handle form submissions and data flow</li>
            <li>Understand full-stack application architecture</li>
        </ul>

        <strong>Tools & Technologies</strong>
        <p>Node.js • Express.js • REST APIs • JSON</p>
        `;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("serviceModal");
    if (event.target === modal) {
        closeModal();
    }
};

