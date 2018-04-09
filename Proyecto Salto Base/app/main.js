export class Main {
    constructor(){
        console.log('Main loaded')
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article'),
            body : document.querySelector('body'),
            eMain : document.querySelector('main'),
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {},
            bMenu:  document.querySelector("#botonMenu")
        }
        this.user = {
            nombre: localStorage.getItem('nombre'),
            email: localStorage.getItem('email'),
            experiencia: localStorage.getItem('experiencia'),
            opinion: localStorage.getItem('opinion'),
            recbirNoticias:localStorage.getItem('recibirNoticias')
        }
        this.vista.aBtnsMenu.forEach(element => {
            element.addEventListener('click',this.menuItems.bind(this),false)
        });
      
        this.vista.aImports.forEach(elem=>{
            this.vista.oImports[elem.title]=elem.import
        })
        this._cargarTemplate('home')
        this.vista.bMenu.addEventListener("click", () => this.desplegarMenu(), false)
        
    }
    menuItems(oEv){
        this._cargarTemplate(oEv.target.title)
        oEv.preventDefault()
    }
    _cargarTemplate(id){
        const IMPORT = this.vista.oImports[id]
        const ELEM = IMPORT.querySelector(`[title=${id}]`)
        this.vista.eMain.innerHTML = ELEM.innerHTML
        if(id === 'about')this.listenersAbout()
        
    }
    listenersAbout(){
        document.getElementById("linkAutores").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("linkFormulario").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("form_1").addEventListener("submit",this.enviarDatos.bind(this),false)  
    }                
    desplegar(oEv) {
        if (!document.getElementById("datosEnviados").classList.contains('oculto')){ 
            document.getElementById("datosEnviados").classList.toggle('oculto')
            document.getElementById("formulario").classList.toggle('oculto')       
         }  else{
         document.getElementById("linkAutores").classList.toggle('desactivo')
         document.getElementById("linkFormulario").classList.toggle('desactivo')
         document.getElementById("formulario").classList.toggle("oculto")
         document.getElementById("autores_container").classList.toggle("oculto")
               }
         oEv.preventDefault()            
     }

     enviarDatos(event){
        event.preventDefault();
         var nombre = document.getElementById("nombre").value;
         var email = document.getElementById("email").value;
         var aRadio = document.getElementsByName("experiencia");
         for(var i=0; i < aRadio.length; i++) {
             if (aRadio[i].checked) { 
                  var experienciaDatos = aRadio[i].value;
         }
         }
        var checkbox = document.getElementById("checkbox").checked ? "Si" : "No";		
        var opinionDatos = document.getElementById("coment").value;
        localStorage.setItem("nombre",  nombre)
        localStorage.setItem("email",  email)
        localStorage.setItem("experiencia",  experienciaDatos)
        localStorage.setItem("opinion",  opinionDatos)
        localStorage.setItem("recibirNoticias",  checkbox)
        document.getElementById("datosEnviados").classList.toggle('oculto')
        document.getElementById("formulario").classList.toggle('oculto')
        document.getElementById("nombreDatos").innerHTML=` ${nombre}`
        document.getElementById("emailDatos").innerHTML=` ${email}`
        document.getElementById("experienciaDatos").innerHTML=` ${experienciaDatos}`
        document.getElementById("opinionDatos").innerHTML=` ${opinionDatos}`
        document.getElementById("checkboxDatos").innerHTML=` ${checkbox}`
     }

     _mostrarNombre () {
        if(this.user.nombre) {
           console.log(this.user.nombre)
           this.vistaDatosEnviados.nombre.innerHTML =`${this.user.nombre}`
           //this.vistaDatosEnviados.nombre.classList.add("rojo")
        }
    }

   _mostrarTareas() {
        if(this.aTareas.length) {
           let lista;
           lista = "<ul>"
           this.aTareas.forEach(item=>lista+=`<li>${item}</li>`)
           lista += "</ul>"
           this.vista.tareas.innerHTML = lista
        }
    }

   btnRegistrar() {
       console.log(this.user.nombre)
        this.user.nombre = this.vista.inNombre.value
        localStorage.setItem("nombre",  this.user.nombre)
        this._mostrarNombre()
    }

    btnAdd() {
        this.tarea = this.vista.inTarea.value
        this.aTareas.push( this.tarea)
        localStorage.setItem("tareas", JSON.stringify(this.aTareas))
        this._mostrarTareas()
    }

     desplegarMenu() {
        document.querySelector("#menu_movil").classList.toggle("oculto")
    }
}


