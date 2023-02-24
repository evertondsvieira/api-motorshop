
# Motor Shop

O Motor Shop é uma plataforma de intermediação de vendas de veículos, tem como seu objetivo indexar anuncios de vendedores, podendo os anuncios serem da modalidade venda ou leilão.




## Lista de Links do projeto Backend Motor Shop

 - [Repositório do Frontend da Aplicação](https://github.com/grupo32-t12-paulo/grupo32-t12-paulo-front-end)
 
## Instalação

1.Faça o clone do repositório em sua máquina local.
Depois instale as dependências com yarn:

```bash
  yarn install
```

2.Na pasta raiz do projeto você encontrará um arquivo *.env.example* crie um arquivo *.env* com base nesse arquivo e preencha as informações necessárias para criar o banco de dados e rodar a aplicação.


3. Carregue as migrations pelo yarn:
```bash
  yarn typeorm migration:run -d src/data-source
```

4. Rode o servidor local pelo yarn:
```bash
  yarn dev
```

## Documentação da API

# users
 ## Create User
 `POST` 
  http://localhost:3000/users

Todos os campos são obrigatórios 
- name - deve ser do tipo string
- email - deve ser do tipo string
- password - deve ser do tipo string
- cellPhone - deve ser do tipo string
- cpf - deve ser do tipo string
- dateBirth - deve ser do tipo string (ano)
- description - deve ser do tipo string
- cep - deve ser do tipo number
- state - deve ser do tipo string
- city - deve ser do tipo string
- street - deve ser do tipo string
- number - deve ser do tipo strings

 **Retorno esperado Status `201` Ok**

  ## Body `json` example request:

```
 {
   "name": "Kenzie",
	 "email": "kezie@kenzie.com",
	 "password": "1234",
	 "cellPhone": "83933532332",
	 "cpf": "403.259.220-03",
	 "dateBirth":"2001",
	 "description": "...",
	 "address": {
		 "cep": 12345678,
		 "state": "SP",
		 "city": "São Paulo",
		 "street": "...",
		 "number": "000"
	 }
 }
```

## GET USERS DETAILS
 `GET` 
  http://localhost:3000/users/{id}

- Esta rota não necessita de corpo
- Essa rota não necessita de autenticação
- Essa rota necessita apenas do `id` do `USER`
**Retorno esperado Status `200` Ok**


# Announcements
 ## Create Announcements
 `POST` 
  http://localhost:3000/announcements/{userId}

- Essa rota necessita de autenticação
- Essa rota necessita do `id` do `USER`

 Todos os campos são obrigatórios 
- title - deve ser do tipo string
- adType - deve ser do tipo string
- year - deve ser do tipo number
- mileage - deve ser do tipo number
- price - deve ser do tipo number
- description - deve ser do tipo string (ano)
- vehicleType - deve ser do tipo string
- coverImage - deve ser do tipo string

 **Retorno esperado Status `200` Ok**
  ## Body `json` example request:

```
 {
	"title": "Fusca",
	"adType": "sale",
	"year": 2001,
	"mileage": 2000,
	"price": 1000,
	"description": "Um dos primeiros anos do Fusca com motor 1600 (chassis BS); ótima apresentação e conservação; documentação em dia, apto a imediata transferência e placa de coleção.",
	"vehicleType": "car",
	"coverImage": "https://ateliedocarro.com.br/wp-content/uploads/2019/06/Fusca-1600-76-Amarelo-Imperial-30-150x150.jpeg"
}
```

**Retorno esperado Status `201` Ok**

## GET ANNOUNCEMENTS
 `GET` 
  http://localhost:3000/announcements/{announcementsId}

- Esta rota não necessita de corpo
- Essa rota não necessita de autenticação
- Essa rota necessita do `id` do `annoucement`
**Retorno esperado Status `200` Ok**

## PATCH ANNOUNCEMENTS
`PATCH` 
  http://localhost:3000/announcements/{annoucementId}

- Esta rota necessita de corpo
- Essa rota necessita de autenticação
- Essa rota necessita do `id` do `annoucement`
**Retorno esperado Status `200` Ok**

## DELETE ANNOUNCEMENTS
`DELETE` 
  http://localhost:3000/announcements/{annoucementId}

- Esta rota necessita de corpo
- Essa rota necessita de autenticação
- Essa rota necessita do `id` do `annoucement`
**Retorno esperado Status `204` Ok**
