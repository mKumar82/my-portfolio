import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer"
const AppContext  = React.createContext();

const initialState ={
    name:"",
    image:"",
    para:"",
    services:[],
    button:"",
};

//https://datausa.io/api/data?drilldowns=Nation&measures=Population

const API = "services.json";

const AppProvider  = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);

   
    
    const updateHomePage = ()=>{
        return dispatch(
            {
                type : "HOME_PAGE",
                payload : {
                    name:"I'm MANISH",
                    para:"I AM A FULL STACK DEVELOPER",
                    image:"images/mkphoto.jpg",
                    
                }
            }
        );
    }
    const updateAboutPage = ()=>{
        return dispatch(
            {
                type : "ABOUT_PAGE",
                payload :{
                    name:"FULL STACK DEVELOPER",
                    para:{
                        main_para:"Seeking a beginner role to enhance and explore my technical knowledge gained in the last few years. I hold a B.Tech degree from a govt college.",
                        skills:`SKILLS : `,
                        frontend:`Frontend : HTML,CSS,JS`,
                        frontend_framework:`Frontend_framework : ReactJS,Bootstrap`,
                        backend:`Backend :       nodejs,java`,
                        backend_framework:`Backend_framework : Expressjs and Spring Boot`,
                        database:`Database : Mysql,Oracle 10g,MongoDB`,

                    },
                    image:"images/mkphoto.jpg",
                }
            }
        );
    }

    const getServices=async (url)=>{
        try {
            const res = await fetch(url);
            const data =await res.json();
            dispatch({type:"GET_SERVICES", payload : data});
        } catch (error) {
            console.log(error);
            
        }

    }

    useEffect(()=>{
        getServices(API);
    },[]);

    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
            {children}
    </AppContext.Provider>

}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};
