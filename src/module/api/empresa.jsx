import axios from 'axios'

export function obter(id) {
    return axios.get('/empresa/' + id)
}

export function obterTodos() {
    return axios.get('/empresa')
}

export function cadastrar(data) {
    return axios.put('/empresa', {
        nome: data.nome,
        cnpj: data.cnpj,
        endereco: data.endereco,
        categoria: data.categoria,
        jornada: data.jornada,
        origem: data.origem,
        responsavel: data.responsavel,
        telefone: data.telefone,
        website: data.website,
        descricao: data.descricao
    })
}

export function editar(data) {
    return axios.post('/empresa/' + data.id, {
        nome: data.nome,
        cnpj: data.cnpj,
        endereco: data.endereco,
        categoria: data.categoria,
        jornada: data.jornada,
        origem: data.origem,
        responsavel: data.responsavel,
        telefone: data.telefone,
        website: data.website,
        descricao: data.descricao
    })
}

export function deletar(id) {
    return axios.delete('/empresa/' + id)
}