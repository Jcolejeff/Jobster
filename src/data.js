import image1 from "./assets/images/clasikdrip (2).png";
import image2 from "./assets/images/shortly.png";
import image3 from "./assets/images/quizzles.png";
import image4 from "./assets/images/esaybank.png";
const Projects = [
	{
		id: "recAGJfiU4CeaV0HL",
		title: "Clasik-Drip",
		stack: [
			"react",
			"styled-components",
			"strapi",
			"auth0",
			"react-reveal",
			"react-router",
			"react-icons",
			"react-markdown",
			"react-paystack",
		],
		shortDesc:
			"an e-commerce webApp for clothes and accessories, built with react, styled-components, react-paystack, and coupled with strapi cms for content management.",
		explanation:
			"After checking several headless cms, I decided to choose Strapi because of its simple and intuitive content editor ,I wanted the site to have some simple animation too, I used React reveal for that.CSS in js is my go-to for styling in React apps. Great things have been said about it already, and my preferred tool for that is Styled-components, mainly because it lets you write actual CSS and it's popular.",
		image: image1,
		wrappingUp:
			"This project marked a number of firsts for me, including my introduction to strapi and auth0 I increased my use of git, strengthened my knowledge of react.I could go on and on about the lessons I learnt while working on this project, but the most significant ones were my improved knowledge of React Hooks, Git administration, User authentication, and API integration.",
		requirement:
			" In order for me to consider this initiative successful, I had a few criteria in mind.The resultant website must, at the very least, be quick and responsive ,include a few basic animations, and be simple enough for a non-technical person to edit.",
		challenge:
			"I encountered a few hiccups along the way, as with most projects. The organization and structure of the code proved to be one of the more challenging aspects. I became aware of the need of keeping an orderly framework due to the size of this project.I made a concerted effort to make components as reusable as possible and deploying strapi to heroku was quite the challenge , but nothing alot of googling didn't help with  ",
		purpose:
			"My friend who has an online boutique , but only sells on whatsapp and instagram , i saw the need for an e-commerce store that would enable her to showcase her products in a more structured and streamlined manner,the goal was to build a webapp that was secure,could accept online payment and was user friendly ",
		live: "https://clasikdrip.com/",
		coderepo: "https://github.com/Jcolejeff/Clasik-Drip-Wears",
	},
	{
		id: "recIL6mJNfWObonls",
		title: "Shortly",
		stack: ["react", "shortCode-api", "styled-components", "react-icons"],
		explanation:
			"i used shortcode Api for the url shortening ,CSS in js is my go-to for styling in React apps. Great things have been said about it already, and my preferred tool for that is Styled-components, mainly because it lets you write actual CSS and it's popular.",
		shortDesc:
			"a url shortener webApp,built with react, styled-components, and coupled with shortCode-api for shortening urls.",
		image: image2,
		wrappingUp:
			"I learnt  to implement designs, I learnt some uselful CRUD operations ,Got more experience with react",
		requirement:
			"As always, apart from the bare minimum that the resultant website must be fast and responsive. I had a few requirements in mind to be able to call this project a success.The resulting website must match the design on the design file, and also for users to be able to delete entries from the list of shortened urls",
		challenge:
			"It was fairly challenging building the project. The alert component gave a few headaches, after a lot of googling and checking online resources, I was able to tackle the issues",
		purpose:
			"I wanted to get really good with working with Api's, and that's by building many projects. So I decided to build another react  project.before this project, the UIs of all the projects I've built were designed by me tinkering around until it looks good to me, I wanted to implement a design created by a professional designer and also have experience implementing a design file.So i went on front-end mentor to get an intermediate level challenge to tackle ",
		live: "https://shortly-url-fem.netlify.app/",
		coderepo: "https://github.com/Jcolejeff/url-shortner",
	},
	{
		id: "rec61x18GVY99hQq5",
		title: "Quizzles",
		stack: ["react", "styled-components", "Open-TBD Api", "react-reveal"],
		explanation:
			"Because of the simplicity of its state management and the variety of accessible packages, React was an obvious choice for this project.I used React-Reveal for the  animation because it's simple and fits in my use case , styled components for styling and Open TBD api to get the questions",
		image: image3,
		wrappingUp:
			"I was able to build a game i really enjoyed  and I learned to alot as this project put my programming logic to a test.",
		shortDesc:
			"a fun interactive quiz webApp, built with react, styled-components, and coupled with Open-TBD Api for quiz questions.",
		requirement:
			"I had a few requirements in mind to be able to call this project a success.Apart from the bare minimum that the generated website must be fast and responsive.The user interface should be minimal and beautiful and have simple animations",
		challenge:
			"The api endpoint wasn't as easy to construct from the user input on the fly, but google again came to the rescue!!!.",
		purpose:
			"i really like trivia games that stimulates and expand my knowledge , so i wanted to build one that would have a variety of topics",
		live: "https://quizzles-plus.netlify.app/",
		coderepo: "https://github.com/Jcolejeff/quizApp",
	},
	{
		id: "rec83x18GTU99hHUI",
		title: "Eazy-bank-landing Page ",
		stack: ["react", "styled-components", "react-icons"],
		explanation:
			"CSS in js is my go-to for styling in React apps. Great things have been said about it already, and my preferred tool for that is Styled-components, mainly because it lets you write actual CSS and it's popular. ",
		image: image4,
		wrappingUp:
			"i improved my skill of taking a design from concept to deployment,understanding more about react hooks and in general got more experience with react",
		requirement:
			"As always, apart from the bare minimum that the website must be fast and responsive. I had a few requirements in mind to be able to call this project a success.The resulting website must match the design on the design file.",
		shortDesc:
			"a landing page for a fictitious bank, built with react, styled-components",
		challenge:
			"It was fairly easy building the project.but i ran into some few issues with the mobile navigation ,but i'm glad it turned out fine",
		purpose:
			"The UIs of all the projects I've built were designed by me tinkering around until it looks good to me.I wanted to implement a design created by a professional designer and also have experience implementing a design file again so i went on frontend mentor to tackle another intermediate level challenge .",
		live: "https://easy-bank-fem.netlify.app/",
		coderepo: "https://github.com/Jcolejeff/easy-bank-page",
	},
];
export default Projects;
