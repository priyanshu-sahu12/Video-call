let IS_PROD = true;
const server = IS_PROD ?
    "https://video-call-4.onrender.com" :

    "http://localhost:8000"


export default server;