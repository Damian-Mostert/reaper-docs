import dynamic from "next/dynamic";
function Loader(){
    return <div className="w-full h-screen flex justify-center items-center">
            <div className="loader"></div>
    </div>
}

const load = (path) => dynamic(() => import(`./docs/${path}`), { loading: () => <Loader /> });

export default {
    Overview:load("overview"),
    Commands:load("commands"),
    Enviroment:load("env"),
    Routing:load("routing"),
    Controllers:load("controllers"),
    Middleware:load("middleware"),
    Services:load("services"),
    Database:load("database"),
    Models:load("models"),
    Migrations:load("migrations"),
    Seeders:load("seeders"),
    Events:load("events"),
    Templates:load("templates"),
    "Template api calls":load("templateApiCalls"),
    "Template routing":load("templateRouting"),

};
