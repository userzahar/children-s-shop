//вкладаємо максимум 1 об'єкт в об'єкт теми
//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};

export const light = Object.freeze({
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
});