const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    nome: { type: String, default: '' },
    cnpj: { type: String, default: '' },
    endereco: { type: String, default: '' },
    categoria: { type: String, enum: ['Cliente efetivo', 'Cliente em potencial', 'Concorrente', 'Fornecedor', 'Parceiro'], default: 'Cliente em potencial' },
    jornada: { type: String, enum: ['Evento', 'Gosta', 'Conectado', 'Vive'], default: 'Conhece' },
    origem: { type: String, enum: ['Evento', 'Indicação', 'Site', 'Outros'], default: 'Outros' },
    responsavel: { type: Types.ObjectId, ref: 'Usuario' },
    telefone: { type: String, default: '' },
    website: { type: String, default: '' },
    descricao: { type: String, default: '' },
});

module.exports = mongoose.model('Empresa', EmpresaSchema);