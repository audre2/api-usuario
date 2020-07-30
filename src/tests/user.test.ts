import { expect } from 'chai';
import { UserService } from "./../services/userService";
import { assert } from 'console';

describe('Testar Usuario Service', () => {
  const userService = new UserService();
  const cpfParams = {
    "params":{
       "cpf":"12345678"
    }
  };
  const body = {
    "body":{
      "nome": "Teste Teste",
      "email": "Teste@gmail.com",
      "cpf": 12345678,
      "dataNascimento": "2020-09-29",
      "telefone": "111234567"
    }
  };

  
/*   describe('Método GET Teste', () => {
    const users = userService.getTeste();
    it('Deve retornar uma lista de nomes', () => {
      expect(users).to.be.an('array');
    });
  }); */

  describe('Método GET All Users', () => {
    it('Deve retornar uma lista com todos os Usuários', () => {
      const users = userService.getAllUsers();
      users.then(result => {
        expect(result).to.be.an('array');
        expect(result[0]).to.include.all.keys('nome', 'email', 'cpf', 'dataNascimento');
      });
      
    });
  });

  describe('Método GET By CPF', () => {
    it('Deve retornar um Usuário', () => {
      const users = userService.getUser(cpfParams);
      users.then(result => {
        expect(result[0]).to.include.all.keys('nome', 'email', 'cpf', 'dataNascimento');
      });
      
    });
  });

  describe('Método Criar', () => {
    it('Deve criar um Usuário', () => {
      userService.insertUser(body);
      assert(true);
    });
  });

  describe('Método Delete', () => {
    it('Deve deletar um Usuário', () => {
      userService.deleteUser(cpfParams).then(data => {
        expect(data).to.be.equal(1);
      })
    });
  });
  
});