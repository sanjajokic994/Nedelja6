import {getcompanyInfo} from "../services/spacex_service"

const Header = () => {
   const header=document.createElement("header");
   const mainHeader = document.createElement("h1");
   header.appendChild(mainHeader);


getcompanyInfo().then(
    response=>{
        console.log(response.data);
      // let data=response.data;
      let{name,summary}= response.data
      
     
      if(name.includes('X')){
        name=name.replace('X', `<span class='spanX'>X</span>`)
      }
      
      console.log(name)
      mainHeader.innerHTML=`<label class='label0'>${name}</label><label class='label1'>...${summary}</label>`
     
    }
  )
  return header

}

export default Header;