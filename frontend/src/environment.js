let IS_PROD = true;
const server = IS_PROD ?
    "https://vibe-connect-h6ne.onrender.com" :

    "http://localhost:8000"


export default server;