import { AppConfig } from '@/facade';

interface ILoader {
    get(url: string, options: RequestInit): Promise<Response>;
}

type IRead = ({ value, done }: { value: number; done: boolean }) => any;

const jsonGetOptions: RequestInit = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
        // 'Content-type': 'text/plain',
    }
};
const textGetOptions: RequestInit = {
    method: 'GET',
    headers: {
        'Content-type': 'text/plain; charset=utf-8'
    }
};

export const UrlLoader: ILoader = {
    get(url: string, options: RequestInit) {
        return fetch(url, options);
    }
};

export const Loader = ((loader: ILoader) => ({
    loadContents() {
        let url = AppConfig.book.contents;

        return loader
            .get(url, jsonGetOptions)
            .then(response => response.json());
    },
    loadChapterByName(name: string) {
        let url = `${AppConfig.book.chapters}/${name}.html`;

        return loader
            .get(url, textGetOptions)
            .then(response => response.text());
        // .then( response => {
        //     if ( response.body === null ) {
        //         throw new Error( 'body must not be null' );
        //     }
        //
        //
        //     let reader = response.body.getReader();
        //     let result = '';
        //
        //     const byteToString = ( bytes: number ) => String.fromCharCode.apply( null, bytes );
        //
        //     const read: IRead = ( { value, done } ) => {
        //         result += byteToString( value );
        //
        //         if ( done ) {
        //             return result;
        //         }
        //
        //         return reader.read().then( read );
        //     };
        //
        //     return reader.read().then( read );
        // } );
    }
}))(UrlLoader);
