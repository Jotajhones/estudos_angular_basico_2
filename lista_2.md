### Lista 2: Angular Enterprise (Módulo Administrativo)


#### Bloco 1: Segurança e Tráfego (Roteamento Avançado e Interceptors)
Foco em simular um ambiente autenticado, protegendo rotas e manipulando o tráfego HTTP de forma global.

*   **Exercício 1: Proteção de Rotas (Guards).** Criar um serviço de autenticação simulado. Implementar uma rota de login e usar um `CanActivateFn` (Functional Guard moderno) para impedir que usuários não autenticados acessem o painel administrativo, redirecionando-os para o login.
*   **Exercício 2: O Pedágio (HTTP Interceptor).** Criar um HttpInterceptor funcional que intercepte todas as requisições de saída da aplicação e adicione automaticamente um cabeçalho `Authorization: Bearer meu-token-falso`.
*   **Exercício 3: Tratamento de Erros Global.** Expandir o Interceptor (ou criar um novo exclusivo) para capturar respostas de erro da API (como status 401 ou 404) e exibir uma mensagem em um serviço genérico de alerta, centralizando essa lógica fora dos componentes visuais.

#### Bloco 2: Formulários Complexos (Enterprise Forms)
Foco em formulários dinâmicos e regras de validação pesadas.

*   **Exercício 4: Campos Dinâmicos (FormArray).** Construir um formulário de cadastro estruturado onde o usuário pode clicar em um botão "Adicionar Telefone". O Angular deve gerar novos blocos de campos de telefone infinitamente e de forma reativa.
*   **Exercício 5: Validador Customizado Síncrono.** Criar uma função de validação própria que proíba campos de senha de conterem variações da palavra "senha" ou o nome de usuário digitado em outro campo do mesmo formulário.
*   **Exercício 6: Validador Customizado Assíncrono.** Implementar uma validação no campo de "e-mail" que dispara um Observable para verificar em uma API (com um atraso simulado de rede) se o e-mail já existe na base de dados, bloqueando o envio do formulário enquanto a validação acontece.

#### Bloco 3: RxJS Avançado (Orquestração de Fluxos)
Foco em cenários reais onde os dados vêm de múltiplas fontes ou dependem de ações compostas.

*   **Exercício 7: Requisições Simultâneas (`forkJoin`).** Em uma tela de detalhes, disparar a busca dos dados do perfil do usuário, da lista de permissões e de suas configurações ao mesmo tempo. A tela só deve ser renderizada quando as três chamadas retornarem com sucesso.
*   **Exercício 8: Reatividade Combinada (`combineLatest`).** Criar uma tela de relatório com dois filtros de `select` diferentes (ex: Categoria e Data). A chamada para a API deve ser disparada automaticamente apenas quando houver alteração em qualquer um dos filtros, combinando o valor atual de ambos na mesma requisição.
*   **Exercício 9: Resiliência (`retry` e `catchError`).** Configurar uma chamada HTTP frágil de forma que, se o servidor falhar, o RxJS tente refazer a requisição mais 2 vezes automaticamente (com um pequeno intervalo entre as tentativas) antes de jogar o erro definitivo para a tela.

#### Bloco 4: Performance e Componentização Avançada
Foco em garantir que o sistema escale sem lentidão e no reaproveitamento de código de interface.

*   **Exercício 10: Projeção de Conteúdo (`ng-content`).** Desenvolver um componente genérico e reutilizável de "Modal" ou "Accordion". Ele deve aceitar e renderizar qualquer estrutura HTML externa injetada dentro dele por outros componentes, utilizando a tag `<ng-content>`.
*   **Exercício 11: Renderização Sob Demanda (`@defer`).** Criar um componente artificialmente pesado na sua página inicial. Aplicar o bloco de controle de fluxo `@defer (on viewport)` no HTML pai para garantir que o componente filho só seja instanciado e consuma memória quando o usuário rolar a tela até o local exato onde ele deveria aparecer.
