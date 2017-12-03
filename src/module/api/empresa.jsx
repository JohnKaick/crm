import axios from 'axios'

export function obter(id) {
    return axios.get(`http://localhost:3001/empresa/obter/${id}`)
}

export function obterTodos() {
    return axios.get('http://localhost:3001/empresa/obter-todos')
}

export function cadastrar(data) {
    return axios.put('http://localhost:3001/empresa/cadastrar', {
        nome: data.nome,
        cnpj: data.cnpj,
        endereco: data.endereco,
        categoria: data.categoria,
        jornada: data.jornada,
        origem: data.origem,
        telefone: data.telefone,
        website: data.website,
        descricao: data.descricao
    })
}

export function editar(data) {
    return axios.post(`http://localhost:3001/empresa/editar/${data.id}`, {
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
    return axios.delete(`http://localhost:3001/empresa/deletar/${id}`)
}