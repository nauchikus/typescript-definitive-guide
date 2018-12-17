let contents: string;
let chapters: string;

if (process.env.NODE_ENV === 'development') {
    contents = 'http://192.168.0.226:1234/book/contents.json';
    chapters = 'http://192.168.0.226:1234/book/chapters';
} else if (process.env.NOE_ENV === 'production') {
    contents =
        'https://nauchikus.github.io/typescript-definitive-guide/book/contents.json';
    chapters =
        'https://nauchikus.github.io/typescript-definitive-guide/book/chapters';
} else {
    throw new Error('not set environment');
}

export default {
    book: {
        contents,
        chapters
    }
};
