import {WinMetadata} from "../pages/what-is-new";
import {InnovationContentNav} from "../models/InnovationContentNav";
import {toId, toUrl} from "../utils/converter-path-utils";
import {Counter} from "../utils/string-utils";
import {toLastVersion} from "../utils/version-utils";


export class InnovationMetadataToContentNavTransformer {
    static transform(metadata: WinMetadata): InnovationContentNav {
        const version = toLastVersion(metadata);
        const counter = new Counter();
        const contentIndexCounter = new Counter();


        const contentNav: InnovationContentNav = {
            key: version.version.toString(),
            level: 0,
            index: counter.get(),
            contentIndex: contentIndexCounter.get(),
            title: version.version,
            path: version.version,
            elementId: version.version,
            children: metadata.innovations.map(({innovationName}, index) => {
                return {
                    key: `${innovationName.toString()}_${index}`,
                    level: 1,
                    index: counter.get(),
                    contentIndex: contentIndexCounter.get(),
                    title: innovationName,
                    path: toUrl(innovationName),
                    elementId: toId(innovationName),
                };
            })
        } as InnovationContentNav;


        return contentNav;
    }
}

