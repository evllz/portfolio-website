export const skillset = [
  { id: 1, skill: "HTML", icon: "devicon-html5-plain" },
  { id: 2, skill: "CSS", icon: "devicon-css3-plain" },
  { id: 3, skill: "JavaScript", icon: "devicon-javascript-plain" },
  { id: 4, skill: "React", icon: "devicon-react-original" },
  { id: 5, skill: "Vue", icon: "devicon-vuejs-plain" },
  { id: 6, skill: "Node", icon: "devicon-nodejs-plain" },
  { id: 7, skill: "Express", icon: "devicon-express-original" },
  { id: 8, skill: "SQL", icon: "devicon-mysql-plain" },
  { id: 9, skill: "MongoDB", icon: "devicon-mongodb-plain" },
  { id: 10, skill: "Kafka", icon: "devicon-apachekafka-original" },
  { id: 11, skill: "Docker", icon: "devicon-docker-plain" },
  { id: 12, skill: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { id: 12, skill: "GCP", icon: "devicon-googlecloud-plain" },
];
const project1 = require("./project1.jpg");
const project2 = require("./project2.png");
export const projects = [
  {
    title: "Don't Let It Die API",
    description:
      "Users can create an account and start adding the info of their green little friends, as many as they want! And keep track of how often they need to water each one of them.",
    link: "https://github.com/water-my-plants-tt-webpt-172/back-end",
    image: project1,
    id: "1",
  },
  {
    title: "Water Your Plants",
    description:
      "Vue 3 CRUD UI where users can keep track of the plants they have.",
    link: "https://github.com/water-my-plants-tt-webpt-172/back-end",
    image: project2,
    id: "2",
  },
];
