import { defineStore } from "pinia";
import { ref } from "vue";
import ThumbCap1 from '@/assets/images/thumbnail-cap1.jpg';
import ThumbCap2 from '@/assets/images/thumbnail-cap2.jpg';
import MONTEThumbnail from '@/assets/images/monte-thumbnail.jpg';

export const useChaptersStore = defineStore("chapters", () => {
    const chapters = ref([
        {
            chapterID: 0,
            name: 'ALFONSINA',
            teaser: 'TQVZXlfwG1g',
            video: 'https://www.youtube.com/embed/Q5ckNQVp4dM?si=yX7szOTL3F_MjLEr',
            videoThumbnail: ThumbCap1,
            videoThumbnailAlt: 'Alfonsina - Capítulo 1',
            synopsis: 'Alfonsina, Renata y Franca van a una fiesta buscando perderse en la noche, aunque Alfonsina no comparte el entusiasmo de sus amigas. Mientras la música y las luces intensifican todo a su alrededor, ella se siente cada vez más desconectada. Impulsada por algo que no puede explicar, decide alejarse, sin saber que su noche está a punto de cambiar de escenario, llevándola a un lugar tan incierto como inquietante.',
            isAvailable: true
        },
        {
            chapterID: 1,
            name: 'FRANCA Y RENATA',
            teaser: 'bC3ZuAoxUOU',
            video: 'https://www.youtube.com/embed/7aWuqEX3J0Y?si=7EUyKEIC6NdmP8e_',
            videoThumbnail: ThumbCap2,
            videoThumbnailAlt: 'Franca y Renata - Capítulo 2',
            synopsis: 'La música no deja de sonar. Franca y Renata se ven atrapadas en un ambiente de excesos y miradas tensas. La ausencia de Alfonsina se hace evidente, y su búsqueda las lleva a recorrer un laberinto lleno de tensiones ocultas y reproches inesperados.',
            isAvailable: true
        },
        {
            chapterID: 2,
            name: 'MÁXIMO',
            teaser: 'TQVZXlfwG1g',
            video: 'https://www.youtube.com/embed/35PEotET9TY?si=hJ9JV1QvkctalNKN',
            videoThumbnail: MONTEThumbnail,
            videoThumbnailAlt: 'Máximo - Capítulo 3',
            synopsis: 'Entre porros y puchos, Maximo se deja llevar por el ambiente hasta que algo llama su atención. A lo lejos, una figura que se va de la fiesta. La música y las voces de sus amigos se desvanecen a sus espaldas, mientras él sigue una sombra en la noche, reviviendo recuerdos que se vuelven cada vez más inquietantes.',
            isAvailable: true
        },
    
    ]);

    const selectedChapter = ref(chapters.value[0]);

    const selectChapter = (chapterID) => {
        const chapter = chapters.value.find(ch => ch.chapterID === chapterID);
        if (chapter) {
            selectedChapter.value = chapter;
        }
    };

    return {
        chapters,
        selectedChapter,
        selectChapter
    }

})