import { expensify, keycrypt } from "../assets/projects-img";

const useProjects = ()=>{
    const projects = [
        {
            title:"Expensify",
            image:expensify,
            description:"An complete app for managing all your expenses with your own customized categories",
            technologies:"ReactJs, Tailwind",
            url:"https://github.com/geeksrahul/expensify",
        },
        {
            title:"KeyCrypt",
            image:keycrypt,
            description:"Random Password Generator With Custome Length, Constraints,...",
            technologies:"ReactJs, Tailwind",
            url:"https://github.com/geeksrahul/KeyCrypt",
        },
    ]
    return projects;
}

export default useProjects;