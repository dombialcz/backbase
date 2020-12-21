// Definitions of element function extensions in wdio.conf.js beforeSuite hook
// Element Extensions
// usage example: $('body').isValid();
declare module WebdriverIO {
    interface Element {
        isTouched: () => boolean;
    }

    interface Element {
        isValid: () => boolean;
    }
}
