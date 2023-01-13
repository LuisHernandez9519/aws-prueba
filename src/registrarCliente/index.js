
exports.handler = async (event) => {
    console.log(event)
    return {
        codeError: 200,
        message: 'Se ha desplegado Serverless con Jenkins'
    }
}