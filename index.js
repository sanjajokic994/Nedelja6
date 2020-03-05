import LaunchList from "./components/launch_list";
import Header from "./components/header"

const app=document.querySelector('#app');

// const header=Header()
const header=Header();


const filters=document.createElement('section');

const launch_list=LaunchList();

const footer=document.createElement('footer');
footer.innerHTML="<h2>Provided by ITBootcamp</h1>"
app.append(header,filters,launch_list,footer);