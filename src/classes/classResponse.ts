const Success = ( data : any , endpoint: string, menssage : string) => {
    let response = {        
        "code": 200,
        "data": data,
        "endpoint": endpoint,
        "message": menssage,
    }

    return response;
}

const InternalServerError = (endpoint : string, menssage : string) => {
    let response = {
        "data": null,
        "code": 500,
        "endpoint": endpoint,
        "message": menssage,
    }

    return response;
}

export {Success, InternalServerError};


