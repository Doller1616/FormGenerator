let initializeID = 0;
export const properties = (element) => {
    const basic = {
        id : initializeID --,
        asPer : '',
        col : [],
        row : [],
        defaultValue : "",
        element : element,
        label : element,
        name : `${elements.TEXTFIELD}${initializeID --}`,
        placeholder : element,
        required : false,
        rules : null,
        size : "medium",
        type : "text",
        value : "",
        visible : true
    }

    switch (element) {
        case elements.TEXTFIELD:
        return basic;    
        default:
         return basic;
    }
}

export const elements = {
    TEXTFIELD: 'TextField'
}

export const sides = {
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    Bottom: "bottom",
  };