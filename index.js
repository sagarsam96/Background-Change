const body = document.querySelector(".container");

const show=(props)=>{
    const color=props.attributes.value;
    body.style.background=color.value;
    props.style.border="4px solid white";
}

const enter=(props)=>{
    body.style.background="";
    props.style.border="";   
}
