
exports.handler = async (event) => {
    console.log(event)
    return {
        codeError: 200,
        message: 'cliente creado'
    }
}