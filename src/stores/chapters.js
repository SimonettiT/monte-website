import { defineStore } from "pinia";
import { ref } from "vue";

export const useChaptersStore = defineStore("chapters", () => {
    const chapters = ref([
        {
            chapterID: 1,
            name: 'ALFONSINA',
            teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
            video: 'https://www.youtube.com/embed/9lxZpXWYlpA?si=rqq9SsGuASak85mu',
            videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
            videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
            videoThumbnailAlt: 'Alfonsina - Capítulo 1',
            synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.',
            isAvailable: true
        },
        {
            chapterID: 2,
            name: 'RENATA Y FRANCA',
            teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
            video: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
            videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
            videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
            videoThumbnailAlt: 'Renata y Franca - Capítulo 2',
            synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.',
            isAvailable: false
        },
        {
            chapterID: 3,
            name: 'MÁXIMO',
            teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
            video: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
            videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
            videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
            videoThumbnailAlt: 'Máximo - Capítulo 3',
            synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.',
            isAvailable: false
        },
    
    ])

    const selectedChapter = ref(chapters[0])

    return {
        chapters,
        selectedChapter
    }

})