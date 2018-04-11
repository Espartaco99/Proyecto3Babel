/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Proyecto Salto Base/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Proyecto Salto Base/app/app.js":
/*!****************************************!*\
  !*** ./Proyecto Salto Base/app/app.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./Proyecto Salto Base/app/main.js\");\n\r\n\r\n(function(){\r\n   document.addEventListener('DOMContentLoaded',() => new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"Main\"](),false) \r\n})()\r\n\r\n\n\n//# sourceURL=webpack:///./Proyecto_Salto_Base/app/app.js?");

/***/ }),

/***/ "./Proyecto Salto Base/app/main.js":
/*!*****************************************!*\
  !*** ./Proyecto Salto Base/app/main.js ***!
  \*****************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\nclass Main {\r\n  constructor() {\r\n    console.log(\"Main loaded\");\r\n    this.vista = {\r\n      aBtnsMenu: document.querySelectorAll(\"a\"),\r\n      eArticle: document.querySelector(\"article\"),\r\n      body: document.querySelector(\"body\"),\r\n      eMain: document.querySelector(\"main\"),\r\n      aImports: document.querySelectorAll('link[rel=\"import\"]'),\r\n      oImports: {},\r\n      bMenu: document.querySelector(\"#botonMenu\"),\r\n      reloj: document.getElementById(\"reloj\")\r\n    };\r\n    this.user = {\r\n      nombre: localStorage.getItem(\"nombre\"),\r\n      email: localStorage.getItem(\"email\"),\r\n      experiencia: localStorage.getItem(\"experiencia\"),\r\n      opinion: localStorage.getItem(\"opinion\"),\r\n      recbirNoticias: localStorage.getItem(\"recibirNoticias\")\r\n    };\r\n    this.vista.aBtnsMenu.forEach(element => {\r\n      element.addEventListener(\"click\", this.menuItems.bind(this), false);\r\n    });\r\n\r\n    this.vista.aImports.forEach(elem => {\r\n      this.vista.oImports[elem.title] = elem.import;\r\n    });\r\n    this._cargarTemplate(\"home\");\r\n    this.elem = document.querySelector(\"#prueba\");\r\n    this.imagenes = document.querySelectorAll(\"img\");\r\n    this.imagenes.forEach(item => {\r\n      item.addEventListener(\"click\",this.fullScreen.bind(this), false);\r\n    });\r\n    this.vista.bMenu.addEventListener(\r\n      \"click\",\r\n      () => this.desplegarMenu(),\r\n      false\r\n    );\r\n   \r\n    var myWorker = new Worker(\"./app/worker.js\");\r\n    myWorker.onmessage = function(oEvent) {\r\n      this.vista.reloj.innerHTML = oEvent.data;\r\n    }.bind(this);\r\n  }\r\n  fullScreen(oElem) {\r\n    if (oElem.requestFullscreen) {\r\n      oElem.requestFullscreen();\r\n    } else if (oElem.msRequestFullScreen) {\r\n      oElem.msRequestFullscreen();\r\n    } else if (oElem.mozRequestFullScreen) {\r\n      oElem.mozRequestFullScreen();\r\n    } else if (oElem.webkitRequestFullscreen) {\r\n      oElem.webkitRequestFullscreen();\r\n    }\r\n  }\r\n  menuItems(oEv) {\r\n    this._cargarTemplate(oEv.target.title);\r\n   \r\n    oEv.preventDefault();\r\n  }\r\n  _cargarTemplate(id) {\r\n    \r\n    const IMPORT = this.vista.oImports[id];\r\n    const ELEM = IMPORT.querySelector(`[title=${id}]`);\r\n    this.vista.eMain.innerHTML = ELEM.innerHTML;\r\n   \r\n    if (id === \"about\") this.listenersAbout();\r\n  }\r\n  listenersAbout() {\r\n    document\r\n      .getElementById(\"linkAutores\")\r\n      .addEventListener(\"click\", this.desplegar.bind(this), false);\r\n    document\r\n      .getElementById(\"linkFormulario\")\r\n      .addEventListener(\"click\", this.desplegar.bind(this), false);\r\n    document\r\n      .getElementById(\"form_1\")\r\n      .addEventListener(\"submit\", this.enviarDatos.bind(this), false);\r\n    navigator.geolocation.getCurrentPosition(function(position) {\r\n      var coords = position.coords;\r\n      var geocoder = new google.maps.Geocoder();\r\n      var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);\r\n      geocoder.geocode({ latLng: latlng }, function(results, status) {\r\n        if (status == google.maps.GeocoderStatus.OK) {\r\n          if (results[0]) {\r\n            console.log(results[0]);\r\n            document.getElementById(\"address\").value =\r\n              results[0].formatted_address;\r\n          } else {\r\n            alert(\"No results found\");\r\n          }\r\n        } else {\r\n          alert(\"Geocoder failed due to: \" + status);\r\n        }\r\n      });\r\n    });\r\n  }\r\n  desplegar(oEv) {\r\n    if (\r\n      !document.getElementById(\"datosEnviados\").classList.contains(\"oculto\")\r\n    ) {\r\n      document.getElementById(\"datosEnviados\").classList.toggle(\"oculto\");\r\n      document.getElementById(\"formulario\").classList.toggle(\"oculto\");\r\n    } else {\r\n      document.getElementById(\"linkAutores\").classList.toggle(\"desactivo\");\r\n      document.getElementById(\"linkFormulario\").classList.toggle(\"desactivo\");\r\n      document.getElementById(\"formulario\").classList.toggle(\"oculto\");\r\n      document.getElementById(\"autores_container\").classList.toggle(\"oculto\");\r\n    }\r\n    oEv.preventDefault();\r\n  }\r\n\r\n  enviarDatos(event) {\r\n    event.preventDefault();\r\n    var nombre = document.getElementById(\"nombre\").value;\r\n    var email = document.getElementById(\"email\").value;\r\n    var aRadio = document.getElementsByName(\"experiencia\");\r\n    for (var i = 0; i < aRadio.length; i++) {\r\n      if (aRadio[i].checked) {\r\n        var experienciaDatos = aRadio[i].value;\r\n      }\r\n    }\r\n    var checkbox = document.getElementById(\"checkbox\").checked ? \"Si\" : \"No\";\r\n    var opinionDatos = document.getElementById(\"coment\").value;\r\n    localStorage.setItem(\"nombre\", nombre);\r\n    localStorage.setItem(\"email\", email);\r\n    localStorage.setItem(\"experiencia\", experienciaDatos);\r\n    localStorage.setItem(\"opinion\", opinionDatos);\r\n    localStorage.setItem(\"recibirNoticias\", checkbox);\r\n    document.getElementById(\"datosEnviados\").classList.toggle(\"oculto\");\r\n    document.getElementById(\"formulario\").classList.toggle(\"oculto\");\r\n    document.getElementById(\"nombreDatos\").innerHTML = ` ${nombre}`;\r\n    document.getElementById(\"emailDatos\").innerHTML = ` ${email}`;\r\n    document.getElementById(\r\n      \"experienciaDatos\"\r\n    ).innerHTML = ` ${experienciaDatos}`;\r\n    document.getElementById(\"opinionDatos\").innerHTML = ` ${opinionDatos}`;\r\n    document.getElementById(\"checkboxDatos\").innerHTML = ` ${checkbox}`;\r\n  }\r\n\r\n  _mostrarNombre() {\r\n    if (this.user.nombre) {\r\n      console.log(this.user.nombre);\r\n      this.vistaDatosEnviados.nombre.innerHTML = `${this.user.nombre}`;\r\n      //this.vistaDatosEnviados.nombre.classList.add(\"rojo\")\r\n    }\r\n  }\r\n\r\n  _mostrarTareas() {\r\n    if (this.aTareas.length) {\r\n      let lista;\r\n      lista = \"<ul>\";\r\n      this.aTareas.forEach(item => (lista += `<li>${item}</li>`));\r\n      lista += \"</ul>\";\r\n      this.vista.tareas.innerHTML = lista;\r\n    }\r\n  }\r\n\r\n  btnRegistrar() {\r\n    console.log(this.user.nombre);\r\n    this.user.nombre = this.vista.inNombre.value;\r\n    localStorage.setItem(\"nombre\", this.user.nombre);\r\n    this._mostrarNombre();\r\n  }\r\n\r\n  btnAdd() {\r\n    this.tarea = this.vista.inTarea.value;\r\n    this.aTareas.push(this.tarea);\r\n    localStorage.setItem(\"tareas\", JSON.stringify(this.aTareas));\r\n    this._mostrarTareas();\r\n  }\r\n\r\n  desplegarMenu() {\r\n    document.querySelector(\"#menu_movil\").classList.toggle(\"oculto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./Proyecto_Salto_Base/app/main.js?");

/***/ })

/******/ });