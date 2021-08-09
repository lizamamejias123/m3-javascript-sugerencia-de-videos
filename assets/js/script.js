let modulo = (() => {
    let mostrarPrivado = (id, url) => {
        $(`#${id}`).attr('src', url);
    }

    return {
        mostrar: mostrarPrivado
    }
})();


class Multimedia {
    constructor(url) {
        const _url = url;
        this.getUrl = () => _url;
    };
    get Url() {
        return this.getUrl();
    };
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    };
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        const _id = id;
        this.getId = () => _id;

    }
    playMultimedia() {
        let id = this.getId();
        let url = this.url;
        modulo.mostrar(id, url);

    };
    setInicio(tiempo) {
        let id = this.getId();
        let url = this.url;
        url += `?start=${tiempo}`;
        modulo.mostrar(id, url);
    };
};




let musica = new Reproductor("iframe-musica", "https://www.youtube.com/embed/tAGnKpE4NCI");
console.log(musica.url);
let peliculas = new Reproductor("iframe-peliculas", "https://www.youtube.com/embed/Tr4DmyjDXes");
let series = new Reproductor("iframe-series", "https://www.youtube.com/embed/r7jLFgGJigU");

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();
series.setInicio();