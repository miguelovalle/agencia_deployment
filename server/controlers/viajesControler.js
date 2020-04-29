const viaje=require('../models/Viajes');

exports.mostrarViajes= async (req, res) => {
    const viajes= await viaje.findAll();
    res.render('viajes', {pagina: "Proximos Viajes", viajes});
 }

 exports.mostrarViaje=(req, res) => {
   viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje 
        }))
        .catch(error => console.log(error));
}
/*
 exports.mostrarViaje = async (req, res) => {
    const viaje = await viaje.findByPk(req.params.id)
    res.render('viaje', {viaje})
 }
*/