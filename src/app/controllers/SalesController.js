import convert from 'xml-js';
import Opportunity from '../models/Oportunity';
import bling_api from '../../services/bling_api';
import pipedrive_api from '../../services/pipedrive_api';

class SalesController {
  async index(req, res) {
    const response = await pipedrive_api.get();
    const deals = response.data.data.map(
      ({ id, title, status, value, won_time }) => ({
        id,
        title,
        status,
        value,
        won_time
      })
    );

    await deals.map(({ title, status, value, won_time }) =>
      Opportunity.create({ title, status, value, won_time })
    );

    const optionsToXML = { compact: true, ignoreComment: true, spaces: 4 };
    const xml = convert.js2xml(
      {
        pedido: {
          cliente: {
            nome: 'Organisys Software',
            tipoPessoa: 'J',
            endereco: 'Rua Visconde de São Gabriel',
            cpf_cnpj: '00000000000000',
            ie_rg: '3067663000',
            numero: '392',
            complemento: 'Sala 54',
            bairro: 'Cidade Alta',
            cep: '95.700-000',
            cidade: 'Bento Gonçalves',
            uf: 'RS',
            fone: '5481153376',
            email: 'teste@teste.com.br'
          },
          transporte: {
            transportadora: 'Transportadora XYZ',
            tipo_frete: 'R',
            servico_correios: 'SEDEX - CONTRATO',
            dados_etiqueta: {
              nome: 'Endereço de entrega',
              endereco: 'Rua Visconde de São Gabriel',
              numero: '392',
              complemento: 'Sala 59',
              municipio: 'Bento Gonçalves',
              uf: 'RS',
              cep: '95.700-000',
              bairro: 'Cidade Alta'
            },
            volumes: [
              {
                servico: 'SEDEX - CONTRATO',
                codigoRastreamento: []
              }
            ]
          },
          itens: [
            {
              codigo: '001',
              descricao: 'Caneta 001',
              un: 'Pç',
              qtde: '10',
              vlr_unit: '1.68'
            }
          ],
          vlr_frete: '15',
          vlr_desconto: '10',
          obs: 'Testando o campo observações do pedido',
          obs_internas: 'Testando o campo observações internas do pedido'
        }
      },

      optionsToXML
    );

    const dealsToBling = await bling_api.post(
      `pedido/json/?apikey=${process.env.BLING_KEY}&xml='<'?xml version="1.0" encoding="UTF-8"?>${xml}'`
    );

    return res.json(deals);
  }
}

export default new SalesController();
