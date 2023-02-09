import self from "../img/self.png"
import nk from "../img/NotesKeeperP.png"
import wg from "../img/WordelGameP.png"
import np from "../img/NotepadP.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    firstName: "Akashay",
    lastName: "Anand",
    initials: "AA",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'based in the INDIA'
        },
        {
            emoji: "👨🏻‍🎓",
            text: "Pursuing BTech. from LPU"
        },
        {
            emoji: "📧",
            text: "akashayanand1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Akashay-Anand",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/akashay-anand/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I am Anand. I'm a Backend + Frontend Developer. I enjoy working with Java and JavaScript, Recently I have developed an interest in Books reading. Love to Collaborate with startups! Pin me up for any conversation",
    skills:
        {
            proficientWith: ['Java', 'javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'Spring Boot']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'BasketBall',
            emoji: '🏀'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Coding',
            emoji: '🤖'
        }

    ],
    portfolio: [
        {
            title: "React Js Notes Keeper",
            live: "https://akashay-anand.github.io/Notes-Keeper-App-React-Js-Project-/",
            source: "https://github.com/Akashay-Anand/Notes-Keeper-App-React-Js-Project-",
            image: nk
        },
        {
            title: "Java NotePad App.",
            live: "https://github.com/Akashay-Anand/Notepad",
            source: "https://github.com/Akashay-Anand/Notepad",
            image: np
        },
        {
            title: "Wordel Game",
            live: "https://akashay-anand.github.io/Hitbullseye-Assignment-Wordle-Game/",
            source: "https://github.com/Akashay-Anand/Hitbullseye-Assignment-Wordle-Game",
            image: wg
        }
    ]
}