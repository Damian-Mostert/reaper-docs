import dynamic from "next/dynamic";
function Loader(){
    return <div className="w-full h-screen flex justify-center items-center">
            <div className="loader"></div>
    </div>
}

const load = (path) => dynamic(() => import(`./docs/${path}`), { loading: () => <Loader /> });

const schema = {
   fire:{
    Welcome:{
        Overview:load("overview"),
        Commands:load("commands"),
        Enviroment:load("env"),
    },
    Backend:{
        Routing:load("routing"),
        Controllers:load("controllers"),
        Middleware:load("middleware"),
        Services:load("services"),
        Events:load("events"),

    },
    Database:{
        Database:load("database"),
        Models:load("models"),
        Migrations:load("migrations"),
        Seeders:load("seeders"),
    
    },
    Frontend:{
        Templates:load("templates"),
        "Template api calls":load("templateApiCalls"),
        "Template routing":load("templateRouting"),
    }
   },
   syth:{
    "Comming soon":{
        "Comming soon":load("templates"),
    }
   }
};

export default schema;

