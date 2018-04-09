
setInterval(() => {
    var date = new Date();
    var mensaje = date.getHours() +":"+date.getMinutes() +":" + date.getSeconds() + "   " +date.getDate() +"/" + (date.getMonth()+1)  + "/" + date.getFullYear()
    postMessage(mensaje);
},1000);
