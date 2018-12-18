const {
    VUE_APP_CONTENTS_URL: contents,
    VUE_APP_CHAPTERS_URL: chapters
} = process.env;


export default {
    book: {
        contents,
        chapters
    }
};
