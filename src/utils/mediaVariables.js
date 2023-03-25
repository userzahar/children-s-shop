const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
};

export const device = {
    Mobile: `max-width: ${breakpoints.tablet}`,
    Tablet: `min-width: ${breakpoints.tablet} and max-width: ${breakpoints.desktop}`,
    Desktop: `min-width: ${breakpoints.desktop}`,
    smallerThanDesktop: `max-width: ${breakpoints.desktop}`,
    biggerThanMobile: `min-width: ${breakpoints.tablet}`
};