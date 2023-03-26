//вкладаємо максимум 1 об'єкт в об'єкт теми
//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};


class Theme {
    constructor(
        /* header = {
            
        }, 
        main = {
            
        },  */
        footer = {
            backgroundColor: "rgb(3, 169, 161)",
        }
    ) {
        //this.header = header;
        //this.main = main;
        this.footer = footer;
    }
}

//світла тема дефолтна
export const light = new Theme(
    /* header: {},
    main: {}, */
    {
        backgroundColor: "black",
    }
);

//створення темної теми
export const dark = new Theme();


/* export const light = Object.freeze({
    header: {

    },

    main: {

    },

    footer: {
      backgroundColor: "rgb(3, 169, 161)",
    }
});
  
export const dark = Object.freeze({
    footer: {
      backgroundColor: "black",
    }
}); */