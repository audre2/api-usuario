export const swaggerDocument = {
  "openapi": "3.0.2",
  "info": {
    "title": "api-usuario",
    "description": "API para gerenciar usuários",
    "version": "1.0.0",
    "contact": {
      "name": "Andrew Sato",
      "email": "andrewsato10@gmail.com"
    }
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "tags": [
    {
      "name": "user",
      "description": "O escopo destas api's são em relação a obter dados de usuário"
    }
  ],
  "paths": {
    "/users": {
      "post": {
        "requestBody": {
          "$ref": "#/components/requestBodies/IncluirUsuarioBody"
        },
        "tags": [
          "user"
        ],
        "summary": "Insere um usuários.",
        "description": "Insere um usuários.",
        "operationId": "inserirUsuario",
        "responses": {
          "200": {
            "$ref": "#/components/responses/Success"
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "500": {
            "$ref": "#/components/responses/GeneralError"
          }
        }
      },
      "put": {
        "requestBody": {
          "$ref": "#/components/requestBodies/AtualizarUsuarioBody"
        },
        "tags": [
          "user"
        ],
        "summary": "Atualiza um usuário.",
        "description": "Atualiza um usuário.",
        "operationId": "atualizarUsuario",
        "responses": {
          "200": {
            "$ref": "#/components/responses/ConsultarUsuarios"
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "500": {
            "$ref": "#/components/responses/GeneralError"
          }
        }
      },
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Recupera todos os usuário.",
        "description": "Recupera todos os usuário.",
        "operationId": "pesquisarUsuarios",
        "responses": {
          "200": {
            "$ref": "#/components/responses/PesquisaUsuarios"
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/GeneralError"
          }
        }
      }
    },
    "/users/{cpf}": {
      "get": {
        "parameters": [
          {
            "in": "path",
            "name": "cpf",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true,
            "description": "Número do CPF"
          }
        ],
        "tags": [
          "user"
        ],
        "summary": "Recupera um usuário a partir do cpf.",
        "description": "Recupera um usuário a partir do cpf.",
        "operationId": "consultarUsuario",
        "responses": {
          "200": {
            "$ref": "#/components/responses/ConsultarUsuarios"
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/GeneralError"
          }
        }
      },
      "delete": {
        "parameters": [
          {
            "in": "path",
            "name": "cpf",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true,
            "description": "Número do CPF"
          }
        ],
        "tags": [
          "user"
        ],
        "summary": "Deleta um usuário a partir do cpf.",
        "description": "Deleta um usuário a partir do cpf.",
        "operationId": "deletarUsuario",
        "responses": {
          "200": {
            "$ref": "#/components/responses/Success"
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/GeneralError"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "GenericMessage": {
        "type": "object",
        "properties": {
          "mensagem": {
            "type": "string"
          }
        }
      },
      "ListaUsuarioType": {
        "type": "object",
        "properties": {
          "usuarios": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UsuarioType"
            }
          }
        }
      },
      "UsuarioType": {
        "type": "object",
        "properties": {
          "nome": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "cpf": {
            "type": "integer",
            "format": "int64"
          },
          "dataNascimento": {
            "type": "string",
            "format": "date"
          },
          "telefone": {
            "type": "string"
          }
        }
      }
    },
    "requestBodies": {
      "IncluirUsuarioBody": {
        "description": "Campos/propriedades necessárias para incluir um usuário.",
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/UsuarioType"
            }
          }
        }
      },
      "AtualizarUsuarioBody": {
        "description": "Campos/propriedades necessárias para atualizar um usuário.",
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/UsuarioType"
            }
          }
        }
      }
    },
    "responses": {
      "Unauthorized": {
        "description": "Não autorizado.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GenericMessage"
            }
          }
        }
      },
      "IllegalInput": {
        "description": "Entrada/operação ilegal.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GenericMessage"
            }
          }
        }
      },
      "NotFound": {
        "description": "Não encontrado.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GenericMessage"
            }
          }
        }
      },
      "GeneralError": {
        "description": "Ocorreu um erro interno.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GenericMessage"
            }
          }
        }
      },
      "Success": {
        "description": "Sucesso.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GenericMessage"
            }
          }
        }
      },
      "PesquisaUsuarios": {
        "description": "Sucesso.",
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UsuarioType"
              }
            }
          }
        }
      },
      "ConsultarUsuarios": {
        "description": "Sucesso.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/UsuarioType"
            }
          }
        }
      }
    }
  }
}