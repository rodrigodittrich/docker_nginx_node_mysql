# Desafio do curso Full Cycle 3.0 - Docker com Nginx + NodeJS + MySQL

![](https://github.com/rodrigodittrich/draw/blob/main/docker-nginx-node-mysql.png)

O Objetivo deste desafio é subir 3 containers onde:

* O nginx irá "conversar com a aplicação nodejs;
* Quando a aplicação node iniciar, será inserido na base de dados um nome;
* No momento de acessar a aplicação, será apresentada a frase "" e um datatable com o nome que foi inserido na base de dados;

# Procedimento para iniciar a aplicação

**1 - Inicie todos os containtes com o docker-compose**
```
docker-compose up -d
```

**2 - Testar aplicação**
```
http://localhost:8080/
```