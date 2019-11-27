# Linkapi

Este é um exemplo de testes de api entre o a ERP Bling e o Pipedrive. Ganhando uma venda/negociação no Pipedrive e automaticamente virar 
um pedido no Bling.

## Lógica utilizada

Um servidor express com uma simples arquitetura MVC, que no momento no qual a rota de sales é chamada ele envia os deals ganhos do Pipedrive para o Bling com uma
estrutura de pedido padrão e mantém o registro dos deals em uma collection de oportunities no MongoDB.

## Visuals
#### Exemplo de processo.

![Linkapi](https://user-images.githubusercontent.com/53484547/69733716-8c56cd00-110c-11ea-988f-83bdb26e6336.gif "LinkAPI Gif")

Para inicializar o projeto
```bash
 git clone https://github.com/Lucas-Fonte/linkapi.git
```

Use um package manager, [yarn](https://yarnpkg.com/en/docs/install#mac-stable) ou [npm](https://www.npmjs.com/get-npm) , para instalar as dependências.

```bash
yarn && yarn start
```
Lembrando sempre de alterar as variáveis no arquivo **.env**, configurando a key fornecida pelo mongo e as chaves das APIs do Pipedrive e do Bling.

Foi utilizado do [Insomnia](https://insomnia.rest/) para testar a requisição.

## License
MIT License

License
Copyright (c) [2019]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.