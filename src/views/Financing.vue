<script setup>
import { ref } from 'vue';
import BackstageCalltoAction from '@/components/BackstageCalltoAction.vue';

import CostaAzul from '@/assets/images/empresas/costa-azul.png';
import EnVivoProduccciones from '@/assets/images/empresas/envivo-producciones.jpg';
import CasaYina from '@/assets/images/empresas/casa-yina.png';
import ElClubdelaMilanesa from '@/assets/images/empresas/el-club-de-la-milanesa.png';
import AlquimiaCrisYoga from '@/assets/images/empresas/alquimia-cris-yoga.png';
import PasteleriaMoma from '@/assets/images/empresas/pasteleria-moma.png';
import RamonaCarteras from '@/assets/images/empresas/ramona-carteras.png';
import OndinasAccesorios from '@/assets/images/empresas/ondinas-accesorios.png';
import Macrame from '@/assets/images/empresas/macrame.png';
import Leroma from '@/assets/images/empresas/leroma.jpg';
import FioreDiPizza from '@/assets/images/empresas/fiore-di-pizza.png';
import BullangaMilanga from '@/assets/images/empresas/bullanga-milanga.png';
import FulanoCafe from '@/assets/images/empresas/fulano-cafe.png';
import LolaBar from '@/assets/images/empresas/lodelola-bar.jpg';
import LolaAlmacenNatural from '@/assets/images/empresas/lola-almacen-natural.jpg';
import LaToppineria from '@/assets/images/empresas/la-toppineria.png';
import BeautyNailsGuada from '@/assets/images/empresas/beauty-nails-guada.png';
import SilvinaStudioBarber from '@/assets/images/empresas/silvina-studio-barber.png';
import AlmaLolaEstetica from '@/assets/images/empresas/alma-lola-estetica.png';
import AmaikaVelas from '@/assets/images/empresas/amaika-velas.png';
import ChacoShoes from '@/assets/images/empresas/chaco-shoes.png';
import Coquetas from '@/assets/images/empresas/coquetas-pd.png';
import OrmaFocaccia from '@/assets/images/empresas/orma-focaccia.jpg';

const empresas = ref([
    {
        name: 'Costa Azul VCP',
        link: 'https://www.instagram.com/costaazul.vcp/',
        img: CostaAzul
    },
    {
        name: 'En Vivo Producciones',
        link: 'https://www.envivoproducciones.net/',
        img: EnVivoProduccciones
    },
    {
        name: 'Casa Yina',
        link: 'https://www.instagram.com/casayina/',
        img: CasaYina
    },
    {
        name: 'El Club de la Milanesa',
        link: 'https://www.instagram.com/elclubdelamilanesa/',
        img: ElClubdelaMilanesa
    },
    {
        name: 'Alquimia Cris Yoga',
        link: 'https://www.instagram.com/alquimia.cris.yoga/',
        img: AlquimiaCrisYoga
    },
    {
        name: 'Pastelería Moma',
        link: 'https://www.instagram.com/pasteleriamoma/',
        img: PasteleriaMoma
    },
    {
        name: 'Ramona Carteras',
        link: 'https://www.instagram.com/ramona.carteras/',
        img: RamonaCarteras
    },
    {
        name: 'Ondinas Accesorios',
        link: 'https://www.instagram.com/ondinas.accesorios/',
        img: OndinasAccesorios
    },
    {
        name: 'Macramé',
        link: 'https://www.instagram.com/macrame/',
        img: Macrame
    },
    {
        name: 'Leroma',
        link: 'https://www.instagram.com/leroma.ok/',
        img: Leroma
    },
    {
        name: 'Fiore Di Pizza',
        link: 'https://www.instagram.com/fioredipizzacba/',
        img: FioreDiPizza
    },
    {
        name: 'Bullanga Milanga',
        link: 'https://www.instagram.com/bullanga.milanga/',
        img: BullangaMilanga
    },
    {
        name: 'Fulano Cafe',
        link: 'https://www.instagram.com/fulanocafe/',
        img: FulanoCafe
    },
    {
        name: 'Lola Bar',
        link: 'https://www.instagram.com/lodelola_bar/',
        img: LolaBar
    },
    {
        name: 'Lola Almacén Natural',
        link: 'https://www.instagram.com/lolaalmacennatural/',
        img: LolaAlmacenNatural
    },
    {
        name: 'La Toppinería',
        link: 'https://www.instagram.com/latoppineria/',
        img: LaToppineria
    },
    {
        name: 'Beauty Nails Guada',
        link: 'https://www.instagram.com/beauty_nails.guada/',
        img: BeautyNailsGuada
    },
    {
        name: 'Silvina Studio Barber',
        link: 'https://www.instagram.com/silvina.studiobarber/',
        img: SilvinaStudioBarber
    },
    {
        name: 'Alma Lola Estética',
        link: 'https://www.instagram.com/almalolaestetica/',
        img: AlmaLolaEstetica
    },
    {
        name: 'Amaika Velas',
        link: 'https://www.instagram.com/amaikavelas/',
        img: AmaikaVelas
    },
    {
        name: 'Chaco Shoes',
        link: 'https://www.instagram.com/chaccoshoes/',
        img: ChacoShoes
    },
    {
        name: 'Coquetas Salón de Belleza',
        link: 'https://www.instagram.com/coquetas_pd/',
        img: Coquetas
    },
    {
        name: 'Orma Focaccia',
        link: 'https://www.instagram.com/ormafocaccia/',
        img: OrmaFocaccia
    }


])

const contributors = ref([
    "Abril Eizikovits",
    "Adrian Maffini",
    "Adriana Díaz",
    "Adri Devoto",
    "Agostina Alasino",
    "Agostina Deangelis",
    "Agostina Soto",
    "Agustin Vecchiet",
    "Ángeles Garraza",
    "Ale Saya",
    "Alejandro Marascchio",
    "Amiel Unsain",
    "Amparo Torres",
    "Analia Valdomero",
    "Analía Veronica Del Aquilla",
    "Ange Riera",
    "Angela Bizio",
    "Angie Altieri",
    "Anto Sponton",
    "Andrea Romero",
    "André Gonzalez",
    "Belen Urqueta",
    "Belen Vazquez",
    "Belén Caminos",
    "Camila Brizuela",
    "Camila Demaria",
    "Camila Leonori",
    "Cami Maccari",
    "Candelaria Ceballos",
    "Candelaria Latzina",
    "Candelaria Nobile",
    "Carla Escandar",
    "Carolina Cena",
    "Carolina Ferrando",
    "Carolina Jovic",
    "Carolina Ledea",
    "Carolina Romero",
    "Carolina de La Roza",
    "Carmela Echegaray",
    "Carmen Sindoni",
    "Carpinteria sergio",
    "Celeste Bravo",
    "Cecilia Díaz",
    "Cecilia Morena",
    "Cecilia Tait",
    "Celesta Gambacorta",
    "Cesar Ortiz",
    "Clemente Vazquez",
    "Clara Callejo",
    "Clara Oliver",
    "Constanza Escalera",
    "Constanza Ramos",
    "Constanza Sanabria",
    "Coti lorenzon",
    "Cristina Coronado",
    "Cristina Kiener",
    "Delfina Caminos",
    "Edelmiro Aguero",
    "Elena Ortiz",
    "Emanuel Luna",
    "Eliana Arguello",
    "Emilia Schargorodsky",
    "Emilio Aguero",
    "Eugenia Bertazzi",
    "Eugenia Daniela Díaz",
    "Eugenia Llabot",
    "Eugenia Santarrosa",
    "Eugenia Simonetti",
    "Fabiana Casado",
    "Facundo Garcia Vieyra",
    "Facundo Sosa Loyola",
    "Federico Wedemeyer",
    "Felipe Kaek",
    "Fernanda Cappelletti",
    "Fernanda Soria",
    "Flor Drewniak",
    "Flor Nogueira",
    "Flor Tacca",
    "Florencia Gauna",
    "Florencia Olmedo",
    "Francisco Bordin",
    "Franca Crostelli",
    "Francisca Aricó",
    "Gaston Roca",
    "Gato Fernández",
    "Gianni Maggiora",
    "Gonzalo Quispe",
    "Grace Finocchietti",
    "Graciela Herrera",
    "Graciela Mussetti",
    "Grego Diaz",
    "Gustavo Chessel",
    "Haydee",
    "Ignacio Ardiles",
    "Ignacio Fasano",
    "Jacquie",
    "Javier Jachevasky",
    "Jessica De Turris",
    "Jimena Sánchez",
    "Joaquín Carreras",
    "Joaquin Leiranes",
    "Joaquín Molina",
    "Jorge Ocampo",
    "José Luis Juan Malatini",
    "Juan Ambrogio",
    "Juan Chacon",
    "Juan Diego Casali",
    "Juan Garcia",
    "Juan Gorla",
    "Juan Jose Crisnejo",
    "Juan Marcón",
    "Juan Pablo Mon",
    "Juan Vazquez",
    "Julian Mira",
    "Juliana Py",
    "Julieta Fernandez",
    "Julieta Moreno",
    "Juli Gattás",
    "Justina Sanchez",
    "Leonor Gonzalez",
    "Liliana Simonetti",
    "Lisa Gilli",
    "Lola Petri",
    "Lorena Veliz",
    "Lorenzo Diaz",
    "Lucas Gastaldi",
    "Luciana Sola",
    "Lula Dassi",
    "Lula Sossa",
    "Lourdes Elizondo",
    "Luz Nazar",
    "Luz Mulinaris",
    "Macarena Castro",
    "Magali Mussetti",
    "Malekerestezachi",
    "Malvina Bertello",
    "Manuela Ortiz",
    "Marcelo Degiovanni",
    "Marcela Pepoloni",
    "Marco Lorenzatti",
    "Maria Aliaga",
    "Maria Fernanda Patiño",
    "Maria Gomila",
    "Maria Jose Guerberoff",
    "Maria Jose LLabot",
    "Mariana Cavallo",
    "Mariana Escriva",
    "Mariana Martos",
    "Mariana Williams",
    "Mariano Nievas",
    "Mariela Cuneo",
    "Marie Martinez",
    "Marina Pazos",
    "Marisol Guerrero",
    "Marissa Mama Mateo",
    "Marta Belen",
    "Marti Kloner",
    "Martina Mazzaglia",
    "Mateo Carranza",
    "Mateo Karakas",
    "Mateo Rivero",
    "Matias Elizondo",
    "Melanie Martinez",
    "Micaela Diez",
    "Milagros Carol",
    "Miqueas Rodriguez",
    "Miriam",
    "Nacho Heinz",
    "Nando Vazquez",
    "Nathalie Attme",
    "Nati Devoto",
    "Nelson Moreschi",
    "Nicolas Ahumada",
    "Nicolás Bett",
    "Nicole Daza",
    "Noelia Lopez",
    "Noemi Bertello",
    "Norma Trapote",
    "Omar Margonari",
    "Oscar Simonetti",
    "Pablo Buteler",
    "Pablo Dell Oso",
    "Pablo Iparraguirre",
    "Pablo Romero",
    "Pablo Zar",
    "Paloma Juncos",
    "Paola Bologna",
    "Paola Etchebarne",
    "Paula Soriente",
    "Patricia Bertarelli",
    "Pilar Farías",
    "Pilar Gandia",
    "Rafael Mammana",
    "Renata Malpassi",
    "Rocio Ferreiro",
    "Rosario De Anquin",
    "Sabrina Scalenghe",
    "Sabrila Eula",
    "Santiago Aguirregomezcorta",
    "Santiago Degiovanni",
    "Santiago Flores",
    "Santino Cossar",
    "Santi Martins",
    "Sarah Farja",
    "Sayan Djee Weemaels",
    "Sebastián Patiño",
    "Silvana Jachevasky",
    "Simon Garraza",
    "Sofia Ganame",
    "Sofia Tagle",
    "Sofia Yunes",
    "Soledad Carcar",
    "Soledad Santiago",
    "Thomas Martinez",
    "Trinidad Sanchez",
    "Valentín Diaz",
    "Valeria Bardini",
    "Valeria Castro",
    "Valentina Castro",
    "Valentina Panero",
    "Valentina Trifonoff",
    "Valentina Vocos",
    "Veronica Sabasta",
    "Veronica Sanchez",
    "Vicky Alcazar",
    "Virginia Asbert",
    "Virginia Martin",
    "Vittorio Faure",
    "Viviana Altamirano",
    "Xime Masjoan",
    "Yanina Seisdedos",
])

</script>


<template>
    <main>
        <div class="header__monte-logo container">
            <router-link to="/">
                <img class="monte-logo" src="../assets/images/logo-word-white.png" alt="Logo de Monte">
            </router-link>
        </div>

        <section class="financing-explanation">
            <div class="financing-explanation__container container">

                <img class="financing-explanation-rifa" src="../assets/images/monte-rifa.png" alt="Rifa de MONTE">
                <h2>¿CÓMO FINANCIAMOS MONTE?</h2>
                <p>Para conseguir el presupuesto necesario para la realización de Monte todo el equipo se juntó y realizó una venta de rifas. Con la ayuda y donación de muchísimas marcas, empresas y emprendimientos, logramos tener más de 20 premios súper copados que hicieron que vendamos un total de 651 rifas.</p>
                <div class="explanation__empresas">
                    <h4>Marcas que confiaron en MONTE</h4>
                    <div class="financing__empresas-list">
                        <div v-for="empresa in empresas" class="financing__empresa-item">
                            <img :src="empresa.img" :alt="empresa.name" class="empresa__img">
                            <a :href="empresa.link" target="_blank" class="empresa__link link">{{ empresa.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="financing__quote">
            <h4>A partir de las donaciones de marcas de toda Córdoba, pudimos financiar MONTE a través de rifas con premios increíbles.</h4>
        </section>

        <section class="financing__rifa">
            <div class="financing__rifa-container container">
                <img src="../assets/images/premios-rifa.jpg" alt="Premios de Rifa">
                <div class="financing__rifa-text">
                    <h2>RIFA DE MONTE</h2>
                    <p>Gracias a las marcas que nos apoyaron y a cada persona que contribuyó comprando una rifa. A todos, les damos nuestro más profundo agradecimiento ya que hoy, MONTE es un sueño hecho realidad.</p>
                    <a href="" target="_blank" class="btn">CONOCÉ A LOS GANADORES</a>
                </div>
            </div>
        </section>

        <section class="financing__contributors">
            <div class="financing__contributors-container container">
                <h2>{{ contributors.length }} PERSONAS CONTRIBUYERON</h2>
                <p>Gracias a la colaboración de todos ustedes, pudimos financiar MONTE y llevarlo a tu pantalla.</p>

                <div class="financing__contributors-list">
                    <p v-for="contributor in contributors" class="financing__contributor-item">{{ contributor }}</p>
                </div>

                <div class="financing__contributors-total">
                    <div class="contributors-data">
                        <h3>$1.456.318 ARS</h3>
                        <h5>Presupuesto total recolectado</h5>
                    </div>
                    <div class="contributors-data">
                        <h3>651</h3>
                        <h5>Rifas vendidas</h5>
                    </div>
                </div>

                <h2>GRACIAS POR AYUDARNOS A HACER</h2>
                <img class="monte-logo" src="../assets/images/logo-word-white.png" alt="MONTE Logo">
            </div>
        </section>

        <BackstageCalltoAction />
    </main>
</template>


<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/variables"
main 
    margin-top: 0
.header__monte-logo
    @include mixins.flex(row, flex-start, center, wrap)
    padding-block: 2rem 1rem
    .monte-logo
        height: 50px
        width: auto


section.financing-explanation
    padding-block: calc(variables.$section-gap * 2)
    background-color: colors.$light
    color: colors.$dark
    .financing-explanation-rifa
        border-radius: 0 0 50px 0
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
        margin-bottom: 1rem
    p
        width: 80%
        margin: 0 auto 3rem auto
.financing__empresas-list
    @include mixins.flex(row, center, center, wrap)
    gap: 2rem
    margin-top: 2rem
    .financing__empresa-item
        @include mixins.flex(column, center, center, nowrap)
        gap: 1rem
        .empresa__img
            width: 100px
            height: 100px
            border-radius: 50%
            background-color: colors.$dark
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
        .empresa__link
            font-size: fonts.$font-sm
            color: colors.$dark
            font-weight: fonts.$font-semibold
            text-decoration: none
            &:hover
                text-decoration: underline


section.financing__quote
    background-image: linear-gradient(140deg, hsl(270deg 100% 56%) 0%, hsl(270deg 100% 31%) 100%)
    h4
        color: colors.$light
        font-size: fonts.$font-md
        font-weight: fonts.$font-regular
        width: 90%
        padding-block: 3rem
        max-width: 950px
        margin-inline: auto


section.financing__rifa
    background-color: colors.$light
    color: colors.$dark
    text-align: left
    padding-block: 4rem
    .financing__rifa-container
        @include mixins.flex(row, center, center, nowrap)
        gap: 3rem
        img
            width: 30%
            height: auto
            border-radius: 0 0 50px 0
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
        p
            margin-block: 2rem
            max-width: 400px


section.financing__contributors
    padding-block: 4rem

    h2
        line-height: 1
    .financing__contributors-list
        @include mixins.flex(row, center, center, wrap)
        gap: 0.7rem
        margin-top: 2rem
        .financing__contributor-item
            font-size: fonts.$font-sm
            font-weight: fonts.$font-semibold
            text-align: center
    .financing__contributors-total
        @include mixins.flex(row, center, center, wrap)
        gap: 2rem
        margin-block: 4rem
        h3
            color: colors.$accent-light-2
            font-weight: fonts.$font-bold
    .monte-logo
        max-width: 400px
        width: 95%

</style>