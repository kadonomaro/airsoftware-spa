class MetaInfo {
    constructor() {
        this._pagesMeta = {};
    }

    /**
     * Set meta info for all pages
     * @param meta { Object } - Meta info object
     */
    set(meta) {
        this._pagesMeta = meta;
    }

    /**
     * Get meta info of selected page
     * @param page { String } - Page name
     * @returns {{meta: [{vmid: string, name: string, content}], title}}
     */
    get(page) {
        if (!this._pagesMeta[page]) {
            console.warn("Pages meta should not be empty");
        }
        const { title, description } = this._pagesMeta[page];
        return {
            title,
            meta: [
                {
                    vmid: "description",
                    name: "description",
                    content: description,
                },
            ],
        };
    }
}

export const metaInfo = new MetaInfo();
