var trabajos = [{
    figure: "media/limbo.jpg",
    alt: "Imagen del producto en su versión de cojín sobre una cama",
    title: "LIMBO",
    about: "Pie de cama transformable en cojín que permite guardar ropa para disimular el desorden que se produce al cambiar reiteradas veces de ropa",
    url: "https://www.instagram.com/p/B1km_Xrh_vL/",
}, {
    figure: "media/melosa.jpg",
    alt: "Imagen del producto en su packaging primario, sobre el dedo de una persona",
    title: "MELOSA",
    about: "Identidad de marca basada en el diseño de producto inspirado en el baklava, junto con sus packagings",
    url: "https://www.instagram.com/p/B1mq4vfhSYD/",

}, {
    figure: "media/milu.jpg",
    alt: "Imagen de una persona utilizando el producto en su versión silla, leyendo un libro",
    title: "MILU",
    about: "Creador de espacios modular para albergues en un contexto de emergencia, a partir de reciclaje de pendones de PVC",
    url: "https://www.instagram.com/p/B1koO0HBCAz/",
}, {
    figure: "media/sakumu.jpg",
    alt: "Imagen de un afiche donde aparece un doroyaki y un capuccino",
    title: "SAKUMU",
    about: "Identidad gráfica y trabajo fotográfico para Sakumu, pastelería tradicional Japonesa",
    url: "https://www.instagram.com/p/B1mrcD_BFFJ/"
}, {
    figure: "media/pep.jpg",
    alt: "Imagen de los cuatro productos sobre un plato",
    title: "PEP",
    about: "Sistema lúdico de organización para porcionar adecuadamente la comida infantil",
    url: "https://www.instagram.com/p/B1maacD_BFFJ/"
}, {
    figure: "media/tenek.jpg",
    alt: "Imagen del producto puesto en el pie de una persona",
    title: "TENEK",
    about: "Implemento que permite a personas con falta de sus extremidades superiores jugar Tenis de Mesa con el pie",
    url: "https://www.instagram.com/p/B1mq9-cBbUH/"
}, {
    figure: "media/07.jpg",
    alt: "Imagen de dos vasos con jugo",
    title: "HUROM",
    about: "Trabajo fotográfico de comida saludable junto a Hurom, marca de electrodomésticos de la empresa a Puro y Claro ",
    url: "https://www.instagram.com/p/B1mvKbghL5T/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver más</a><q>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
