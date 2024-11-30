export async function jsonBodyHandler(req, res) {
    //adicionar cada chunk
    const buffers = []
    //Coleta os dados da requisição
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {
      //Concatena os chunk e converte para string. Em seguida, converte a string para JSON.
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null
    }

    //Define o Header de resposta como json
    res.setHeader('Content-Type', 'application/json')
}