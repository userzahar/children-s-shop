const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
};

//desktop-first
export const device = {
    desktop: `screen and min-width: ${breakpoints.desktop}`,
    tablet: `screen and max-width: ${breakpoints.desktop}`,
    onlyTablet: `screen and min-width: ${breakpoints.tablet} and max-width: ${breakpoints.desktop}`,
    biggerThanMobile: `screen and min-width: ${breakpoints.tablet}`,
    mobile: `screen and max-width: ${breakpoints.tablet}`,
    smallerThanMobile: `screen and max-width: ${breakpoints.mobile}`,

};