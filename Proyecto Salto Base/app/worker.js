
setInterval(() => {
    var date = new Date();
    var hora = date.getHours() +":";
    if( date.getMinutes()<10) hora += "0" +  date.getMinutes();
    else hora +=   date.getMinutes();
    if( date.getSeconds()<10) hora += ":0" +  date.getSeconds();
    else hora += ":" +   date.getSeconds();
    var mensaje = hora + "   " +date.getDate() +"/" + (date.getMonth()+1)  + "/" + date.getFullYear()
    postMessage(mensaje);
},1000);
