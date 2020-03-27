import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';
import { Text, View } from 'react-native';

//importar rotas
import Routes from './src/routes'

//react native não utiliza as mesmas tags HTML para o desenvolvimento
//view = pode usar para qualquer container da aplicação
//text = é utilizada para qualquer texto nao tem diferenla tipo h1 h2 h3 p ...
//nao utilizamos call/id para estilização do código

//OBS: tudo roda com display FLEX na aplicação

//css utiliza camelCase | não existe herança de estilo entre os componentes | sempre criar um estilo por elemento

export default function App() {
  return (
    <Routes />
  );
}

