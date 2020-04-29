const viaje=require('../models/Viajes');

exports.mostrarViajes=(req, res) => {
    viaje.findAll()
        .then(viajes => res.render('viajes', {
            pagina: "Proximos Viajes", 
            viajes: viajes                   
        }))
        .catch(error => console.log(error))
}

exports.mostrarViaje=(req, res) => {
    viaje.findByPk(req.params.id)
         .then(viaje => res.render('viaje', {
             viaje 
         }))
         .catch(error => console.log(error));
 }

