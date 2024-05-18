export class Utils {
    static CreateDivElements(className, id) {
        const div = document.createElement('div');
        if (className) div.className = className;
        if (id) div.id = id;
        return div;
    }

    static Createh1Elements(className, id) {
        const h1 = document.createElement('h1');
        if (className) h1.className = className;
        if (id) h1.id = id;
        return h1;
    }

    static Createh2Elements(className, id) {
        const h2 = document.createElement('h2');
        if (className) h2.className = className;
        if (id) h2.id = id;
        return h2;
    }

    static Createh3Elements(className, id) {
        const h3 = document.createElement('h3');
        if (className) h3.className = className;
        if (id) h3.id = id;
        return h3;
    }

    static Createh4Elements(className, id) {
        const h4 = document.createElement('h4');
        if (className) h4.className = className;
        if (id) h4.id = id;
        return h4;
    }

    static CreateParagraphElements(className, id) {
        const p = document.createElement('p');
        if (className) p.className = className;
        if (id) p.id = id;
        return p;
    }
}