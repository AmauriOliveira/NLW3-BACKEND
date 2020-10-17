
# Happy Backend

### Sobre

Back-end feito em Typescript com NodeJs desenvolvida durante a terceira semana NextLevelWeek da Rocketseat onde tem como objeto ajudar as pessoas que desejam visitarem os orfanatos, mostrando a localização e as informações necessárias para realizar a visitas.

## Download

> Clone o projeto para uma pasta

``` bath
git clone https://github.com/AmauriOliveira/NLW3-BACKEND.git
```

## Instalação

> Acesse a pasta NLW3-BACKEND

``` bath
cd NLW3-BACKEND
```

> Instale os pacotes

``` bath
yarn
```

## Criando banco de dados

> Rodando as migration

``` bath
yarn typeorm migration:run
```

## Scripts

> Rodando em modo DEV

``` bath
yarn dev
```

> Rodando os projeto

``` bath
yarn start
```

> Rodando o CLI do typeorm com TypeScript

``` bath
yarn typeorm
```


## End points da API

### GET

> /orphanages

Retorna um Array de orphanages

``` JSON
[
  {
    "id": integer,
    "name": string,
    "latitude": integer,
    "longitude": integer,
    "about": string,
    "instructions": string,
    "opening_hours": string,
    "open_on_weekends": boolean,
    "images": [
      {
        "id": integer,
         "url": string
      }
    ]
  }
]
```

> /orphanages/ID

Retorna um orphanage e deve se informar o ID

``` JSON
  {
    "id": integer,
    "name": string,
    "latitude": integer,
    "longitude": integer,
    "about": string,
    "instructions": string,
    "opening_hours": string,
    "open_on_weekends": boolean,
    "images": [
      {
        "id": integer,
         "url": string
      }
    ]
  }
```

### POST

> /orphanages

Cadastra um orphanage usando uma MultiPart Form, com os sequintes campos.

name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images

Todos são obrigatórios, o about no máximo 300 characters e pode enviar várias images.

Ao cadastrar com sucesso retorna um json com o item codastrado


## Exemplos de migration

> Crie uma migration com nome create_orphanages

``` bath
 yarn typeorm migration:create -n create_orphanages
```

> Rodando as migration

``` bath
 yarn typeorm migration:run
 ```

 > Reverter a ultima migration

``` bath
yarn typeorm migration:revert
 ```
