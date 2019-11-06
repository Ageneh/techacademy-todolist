export const SETSTATE_INIT = "SETSTATE_INIT";

export const TYPES = {
    SETSTATE_INIT: "SETSTATE_INIT",
};

export const setStateInit = (init) => ({
    type: TYPES.SETSTATE_INIT,
    init: init,
});