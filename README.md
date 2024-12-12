# Desafio do curso Full Cycle 3.0 - Docker com Nginx + NodeJS + MySQL

![](https://github.com/rodrigodittrich/draw/blob/main/docker-nginx-node-mysql.png)

O Objetivo deste desafio é subir 3 containers onde:

* O nginx irá "conversar" com a aplicação nodejs;
* Quando a aplicação node iniciar, será inserido na base de dados um nome na tabela people;
* No momento de acessar a aplicação, será apresentada a frase "Full Cycle Rocks!" e uma tabela com o nome que foi inserido na base de dados;

# Procedimento para iniciar a aplicação

**1 - Inicie todos os containtes com o docker-compose**
```
docker-compose up -d
```

**2 - Testar aplicação**
```
http://localhost:8080/
```

**3 - Resultado esperado após subir a aplicação**
![](https://github.com/rodrigodittrich/docker_nginx_node_mysql/blob/main/images/resultado-nginx-node-mysql.png)