 express = require('express');
const router = express.Router();

// controladores
const nosotrosControler=require('../controlers/nosotrosControler');
const homeControler=require('../controlers/homeControler');
const viajesControler=require('../controlers/viajesControler');
const testimonialesControler=require('../controlers/testimonialControler');

module.exports=function() {
    router.get('/', homeControler.consultasHomepage);  
    router.get('/nosotros',nosotrosControler.infoNosotros);
    router.get('/viajes/:id', viajesControler.mostrarViaje);
    router.get('/viajes', viajesControler.mostrarViajes); 
    router.get('/testimoniales', testimonialesControler.mostrarTestimoniales); 
    router.post('/testimoniales', testimonialesControler.agregarTestimonial); 
    return router;   
}