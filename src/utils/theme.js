//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};

class Theme {
    constructor({header, main, footer}) {

        this.header = header ?? {
            
        };

        this.main = main ?? {

        };

        this.footer = footer ?? {
            backgroundColor: "rgb(3, 169, 161)",
            textColor: "white",
        };
    }
}

//світла тема дефолтна
export const light = new Theme({});

export const dark = new Theme({
    //header: {},
    //main: {},
    footer: {
        backgroundColor: "black",
        textColor: "white",
    }
});