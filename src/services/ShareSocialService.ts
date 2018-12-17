interface IUrlOptions {
    url: string;
    title: string;
    description: string;
    image: string;

    utm_source?: string;
    utm_medium?: string;
    utm_campaing?: string;
}

type IShareUrlBuild = (options: IUrlOptions) => string;

interface IShareUrlBuilders {
    [key: string]: IShareUrlBuild;
}

export default class ShareSocialService {
    public static share(type: string): void {
        let shareUrlBuild = ShareSocialService.shareUrlBuilders[type];
        let options = ShareSocialService.appUrlBuild(
            ShareSocialService.getDefaultOptions()
        );
        let shareUrl = shareUrlBuild(options);
        let popupOptions = ShareSocialService.getPopupOptions();

        let popup = window.open(shareUrl, '', popupOptions);
        window.opener = null;
    }

    private static shareUrlBuilders: IShareUrlBuilders = {
        facebook: ({ url }: IUrlOptions) =>
            ShareSocialService.normalize(`
                https://www.facebook.com/sharer/sharer.php?
                &u=${url}
            `),
        vk: ({ url, title, description, image }: IUrlOptions) =>
            ShareSocialService.normalize(`
                http://vkontakte.ru/share.php?
                url=${url},
                &title=${title},
                &description=${description},
                &image=${image},
                &noparse=true,
            `),
        twitter: ({ url, title }: IUrlOptions) =>
            ShareSocialService.normalize(`
                http://twitter.com/share?
                text=${title},
                &url=${url},
                &counturl=${url},
            `),
        telegram: ({ url }: IUrlOptions) =>
            ShareSocialService.normalize(`
                https://telegram.me/share/url?
                url=${url}
            `)
    };

    private static getDefaultOptions(): IUrlOptions {
        return {
            url: '',
            title: document.title,
            description: '',
            image: ''
        };
    }

    private static appUrlBuild(options: IUrlOptions) {
        let utm = '';

        if (options.url === '') {
            options.url = location.href;
        }

        if (options.utm_source !== '') {
            utm += `&utm_source=${options.utm_source}`;
        }

        if (options.utm_medium !== '') {
            utm += `&utm_medium=${options.utm_medium}`;
        }

        if (options.utm_campaing !== '') {
            utm += `&utm_medium=${options.utm_medium}`;
        }

        if (utm !== '') {
            options.url = `${options.url}?${utm}`;
        }

        return options;
    }

    private static normalize = (text: string) => text.replace(/(\n|\s)*/g, '');
    private static getPopupOptions = () => {
        let width = 500;
        let height = 350;

        let left = window.innerWidth / 2 - width / 2;
        let top = window.innerHeight / 2 - height / 2;

        return [
            `resizable,scrollbars,status`,
            `width=${width}`,
            `height=${height}`,
            `left=${left}`,
            `top=${top}`
        ].join();
    };
}
