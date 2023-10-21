particlesJS("particles", {
    particles: {
        number: {
            value: 100, 
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#40e0d0" 
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3, 
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

function showCategory(category) {
    const container = document.getElementById('image-container');
    container.innerHTML = ''; 

    const images = {
        'photography': [
            './assets/images/Photography/372416204_682087067306745_758091183125507150_n.jpg',
            './assets/images/Photography/372419880_887654932780607_7599635389119571418_n.jpg',
            './assets/images/Photography/372524593_247665767693719_7467350715290181444_n.jpg',
            './assets/images/Photography/372555022_626789172638065_1124944123813019862_n.jpg',
            './assets/images/Photography/373462137_1351069499180623_4369146804915342110_n.jpg',
            './assets/images/Photography/373464969_858013752360931_8469157937531981524_n.jpg',
            './assets/images/Photography/375523298_315028954361656_7821392787802497613_n.jpg',
            
        ],
        'digital': [
            './assets/images/Digital/1.png',
            './assets/images/Digital/Campaign posters (19.999 × 13.249 in) (4).png',
            './assets/images/Digital/SIKLAB sk kAGAWAD.png',
            './assets/images/Digital/White shirt.png',
            './assets/images/Digital/Royale.png',
            './assets/images/Digital/Black White And Orange Modern Corporate Business Webinar Poster (16.535 × 22.386 in) (2).png',
            './assets/images/Digital/2.jpg',
            './assets/images/Digital/4.jpg',
            './assets/images/Digital/Abion_Final-Activity.gif',
            './assets/images/Digital/Abion_John Paul_BSITAnim2A_facepeel.jpg',
            './assets/images/Digital/Black White And Orange Modern Corporate Business Webinar Poster (16.535 × 22.386 in) (2).png',
            
        ],
        '3d': [
            './assets/images/3d Modeling/XENOS character model 6.png',
            './assets/images/3d Modeling/XENOS character model 7.png',
            './assets/images/3d Modeling/XENOS character model 5.png',
            './assets/images/3d Modeling/XENOS character model 4.png',
            './assets/images/3d Modeling/XENOS character model 3.png',
            './assets/images/3d Modeling/render 2.png',
            './assets/images/3d Modeling/Midterm Scythe Picture.png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (2).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (3).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (4).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (5).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (6).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (7).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe (8).png',
            './assets/images/3d Modeling/Abion_ John Paul_ Scythe.png',
            './assets/images/3d Modeling/dd.png',
            './assets/images/3d Modeling/donut rendered 11.png',
            './assets/images/3d Modeling/Donut page.png',
            './assets/images/3d Modeling/donut sample 1.3.png',
            './assets/images/3d Modeling/donut sample 1.2.png',
            './assets/images/3d Modeling/donut sample 1.1.png',
            
            
        ],
        'Traditional': [
            './assets/images/Traditional Art/373482028_210836618643801_1492823686975175690_n (1).jpg',
            './assets/images/Traditional Art/381485865_285772640901638_7033490720246253399_n.jpg',
            './assets/images/Traditional Art/381487851_179982685124274_322688793022863646_n.jpg',
            './assets/images/Traditional Art/382204334_824167922528871_391480750358786284_n.jpg',
            './assets/images/Traditional Art/383244806_250267568006072_3342096788114505625_n.jpg',
            './assets/images/Traditional Art/383358360_1280986915942583_4637538828382207121_n.jpg',
            './assets/images/Traditional Art/383547902_694138125922375_7944824260633064836_n.jpg',
        ],
    };

    images[category].forEach(imagePath => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Image';

        card.appendChild(img);
        container.appendChild(card);
    });
}
function goBackToHomePage() {
    window.location.href = 'index.html';
}
document.getElementById('backButton').addEventListener('click', goBackToHomePage);


