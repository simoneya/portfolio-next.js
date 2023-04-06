interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}