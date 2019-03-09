//
// Change this to true to work locally in a development environment
//
const development = false;


export default {
    path: `/${development ? "dev" : "production"}`,
}