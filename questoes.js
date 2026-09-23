// ===== MÓDULO 1 — SFN E ÓRGÃOS NORMATIVOS (páginas 28 a 44) =====
// correta: 0 = A, 1 = B, 2 = C, 3 = D

const questoes = [

    // ===== SFN =====

    {
        tema: "SFN",
        contexto: "Beatriz acabou de ser contratada por uma corretora e, no primeiro dia, recebe a missão de explicar a um cliente iniciante por que o dinheiro que ele aplica em um CDB ajuda a financiar empresas e famílias. Para isso, ela começa definindo o papel do Sistema Financeiro Nacional.",
        enunciado: "A definição que melhor descreve o SFN é:",
        alternativas: [
            "Conjunto de órgãos do governo federal responsáveis pela arrecadação de tributos e pela execução do orçamento público",
            "Conjunto de instituições e instrumentos que viabilizam a transferência de recursos entre agentes superavitários e deficitários",
            "Estrutura formada exclusivamente pelos bancos comerciais, responsável por captar depósitos e conceder empréstimos",
            "Sistema administrado pela B3, responsável por registrar e liquidar as operações realizadas no mercado de capitais"
        ],
        correta: 1
    },

    {
        tema: "SFN",
        contexto: "Em uma prova interna de certificação, os funcionários de um banco recebem a tarefa de classificar as entidades do SFN em três níveis: órgãos normativos, entidades supervisoras e operadores. Um dos participantes precisa escolher a única combinação classificada corretamente.",
        enunciado: "A classificação correta é:",
        alternativas: [
            "CMN: supervisor; CVM: normativo; corretora de valores: operador",
            "Banco Central: normativo; SUSEP: operador; seguradora: supervisor",
            "CNSP: normativo; SUSEP: supervisor; seguradora: operador",
            "CNPC: supervisor; PREVIC: normativo; fundo de pensão: operador"
        ],
        correta: 2
    },

    {
        tema: "SFN",
        contexto: "Em uma aula sobre intermediação financeira, o professor apresenta quatro situações e pede que os alunos identifiquem qual delas representa um agente deficitário.",
        enunciado: "A situação que representa um agente deficitário é:",
        alternativas: [
            "Um aposentado que aplica parte da renda mensal em um CDB",
            "Uma empresa que contrata um empréstimo para comprar novas máquinas",
            "Uma família que deposita as sobras do salário na caderneta de poupança",
            "Um profissional liberal que investe regularmente em um fundo de ações"
        ],
        correta: 1
    },

    // ===== CMN =====

    {
        tema: "CMN",
        contexto: "Durante um treinamento interno em uma cooperativa de crédito, a gerente Paula explica aos novos colaboradores que o Sistema Financeiro Nacional é dividido entre entidades que criam as regras e entidades que fiscalizam o seu cumprimento. Um dos participantes pergunta qual entidade é responsável por fixar a meta de inflação que o país deve perseguir.",
        enunciado: "Considerando a estrutura do SFN, a entidade responsável por essa atribuição é:",
        alternativas: [
            "O Banco Central do Brasil",
            "O Comitê de Política Monetária (Copom)",
            "O Conselho Monetário Nacional (CMN)",
            "A Comissão de Valores Mobiliários (CVM)"
        ],
        correta: 2
    },

    {
        tema: "CMN",
        contexto: "Rafael, estudante de economia, está montando um resumo sobre o Conselho Monetário Nacional para uma apresentação na faculdade. Ele precisa informar corretamente quais autoridades participam das reuniões e votam as resoluções do conselho.",
        enunciado: "A composição atual do CMN é formada por:",
        alternativas: [
            "Ministro da Fazenda, Ministro do Planejamento e Orçamento e Presidente do Banco Central",
            "Presidente do Banco Central, Presidente da CVM e Ministro da Fazenda",
            "Ministro da Fazenda, Presidente da CVM e Superintendente da SUSEP",
            "Presidente da República, Ministro da Fazenda e Presidente do Banco Central"
        ],
        correta: 0
    },

    {
        tema: "CMN",
        contexto: "Durante uma reunião de planejamento, o diretor de uma instituição financeira comenta que uma nova resolução do Conselho Monetário Nacional mudou os critérios para abertura de novas instituições no país. Um analista recém-contratado questiona se isso realmente está entre as atribuições do conselho.",
        enunciado: "Entre as atribuições abaixo, a que cabe ao CMN é:",
        alternativas: [
            "Regular a constituição, o funcionamento e a fiscalização das instituições financeiras",
            "Realizar diariamente operações de compra e venda de títulos públicos no mercado aberto",
            "Autorizar e acompanhar as ofertas públicas de ações das companhias abertas",
            "Fiscalizar presencialmente as agências bancárias e aplicar multas às instituições"
        ],
        correta: 0
    },

    {
        tema: "CMN",
        contexto: "Ao estudar para uma certificação, Thiago lê que o Conselho Monetário Nacional ocupa o topo do Sistema Financeiro Nacional e quer entender qual é a natureza desse órgão.",
        enunciado: "Sobre a natureza do CMN, é correto afirmar que:",
        alternativas: [
            "Fiscaliza diretamente bancos e cooperativas de crédito, aplicando multas quando necessário",
            "Executa a política monetária por meio da definição diária da taxa Selic",
            "É o órgão deliberativo máximo do SFN, responsável por definir diretrizes, sem funções executivas",
            "Tem seus membros nomeados para mandatos fixos de quatro anos, como a diretoria do Banco Central"
        ],
        correta: 2
    },

    // ===== CNSP E SUSEP =====

    {
        tema: "CNSP e SUSEP",
        contexto: "Carla contratou um plano de previdência PGBL em uma seguradora, pensando em complementar sua aposentadoria. Após uma mudança nas regras de portabilidade do produto, ela quer entender quais entidades criaram a nova norma e quais fiscalizam a seguradora.",
        enunciado: "Para o produto contratado por Carla, as entidades normativa e supervisora são, respectivamente:",
        alternativas: [
            "CNPC e PREVIC",
            "CMN e Banco Central",
            "CNSP e PREVIC",
            "CNSP e SUSEP"
        ],
        correta: 3
    },

    {
        tema: "CNSP e SUSEP",
        contexto: "Pedro adquiriu um título de capitalização oferecido com a promessa de sorteios mensais. Após alguns meses, ele descobre que o valor de resgate é inferior ao total pago e quer saber qual entidade supervisiona a empresa que emitiu o título.",
        enunciado: "A entidade supervisora desse produto é:",
        alternativas: [
            "A PREVIC",
            "O Banco Central do Brasil",
            "A SUSEP",
            "A CVM"
        ],
        correta: 2
    },

    {
        tema: "CNSP e SUSEP",
        contexto: "Uma estudante de ciências contábeis está preparando um trabalho sobre o mercado de seguros e precisa descrever corretamente o papel da SUSEP dentro do Sistema Financeiro Nacional.",
        enunciado: "A descrição correta do papel da SUSEP é:",
        alternativas: [
            "Executar a política definida pelo CNSP, fiscalizando seguradoras, resseguradoras, sociedades de capitalização e entidades abertas de previdência",
            "Criar as normas para os fundos de pensão das empresas e fiscalizar sua gestão",
            "Regular as ofertas públicas de ações das seguradoras de capital aberto",
            "Definir as regras do mercado de seguros e submetê-las à aprovação do CMN"
        ],
        correta: 0
    },

    // ===== CNPC E PREVIC =====

    {
        tema: "CNPC e PREVIC",
        contexto: "Marcos trabalha em uma grande indústria que oferece aos funcionários um plano de previdência exclusivo, administrado por uma fundação criada pela própria empresa. Ele desconfia de irregularidades na gestão dos recursos e quer levar o caso à entidade responsável pela fiscalização.",
        enunciado: "A entidade que Marcos deve procurar é:",
        alternativas: [
            "A SUSEP",
            "A PREVIC",
            "A CVM",
            "O Banco Central do Brasil"
        ],
        correta: 1
    },

    {
        tema: "CNPC e PREVIC",
        contexto: "Em uma palestra sobre previdência, o palestrante explica que os conselhos normativos de seguros privados e de previdência complementar fechada são presididos por autoridades de ministérios diferentes. Um participante anota a informação para revisar depois.",
        enunciado: "A anotação correta é:",
        alternativas: [
            "O CNSP é presidido pelo Presidente do Banco Central, e o CNPC, pelo Ministro da Fazenda",
            "Ambos são presididos pelo Ministro da Fazenda, que também preside o CMN",
            "O CNSP é presidido pelo Superintendente da SUSEP, e o CNPC, pelo Diretor-Superintendente da PREVIC",
            "O CNSP é presidido pelo Ministro da Fazenda, e o CNPC, pelo Ministro da Previdência Social"
        ],
        correta: 3
    },

    {
        tema: "CNPC e PREVIC",
        contexto: "O fundo de pensão dos funcionários de uma empresa estatal apresenta um déficit grave, causado por investimentos mal administrados. Os participantes temem não receber seus benefícios no futuro e buscam saber qual medida pode ser tomada pela entidade fiscalizadora.",
        enunciado: "Nessa situação, a PREVIC pode:",
        alternativas: [
            "Encaminhar o caso à SUSEP, única entidade autorizada a intervir em planos de previdência",
            "Assumir o pagamento dos benefícios com recursos próprios, garantindo os valores aos participantes",
            "Aguardar decisão do CMN, único órgão com poder de intervir em entidades do sistema financeiro",
            "Decretar intervenção ou liquidação extrajudicial da entidade para proteger os participantes"
        ],
        correta: 3
    },

    // ===== CVM =====

    {
        tema: "CVM",
        contexto: "Uma empresa de energia de capital aberto decide captar recursos no mercado por meio da emissão de debêntures para financiar a construção de uma nova usina. Antes da oferta pública, a área jurídica levanta quais exigências regulatórias precisam ser cumpridas.",
        enunciado: "A entidade responsável por regular e fiscalizar essa emissão é:",
        alternativas: [
            "O Banco Central do Brasil",
            "O Conselho Monetário Nacional",
            "A Comissão de Valores Mobiliários",
            "A B3"
        ],
        correta: 2
    },

    {
        tema: "CVM",
        contexto: "Ao atender um cliente na agência, Lucas explica a diferença entre produtos bancários e valores mobiliários. O cliente possui aplicações em poupança, CDB, títulos do Tesouro Direto e cotas de um fundo de investimento, e quer saber qual delas se enquadra como valor mobiliário.",
        enunciado: "Entre as aplicações do cliente, é considerada valor mobiliário:",
        alternativas: [
            "A caderneta de poupança",
            "O CDB",
            "O título do Tesouro Direto",
            "A cota do fundo de investimento"
        ],
        correta: 3
    },

    {
        tema: "CVM",
        contexto: "Fernanda investe em um fundo multimercado e desconfia que o gestor está aplicando os recursos em ativos que não constam na política de investimento do fundo. Ela quer levar o caso à entidade com competência legal para apurar a conduta do gestor e aplicar punições, se for o caso.",
        enunciado: "A entidade que Fernanda deve procurar e sua atribuição correspondente são:",
        alternativas: [
            "Banco Central, responsável por fiscalizar as instituições financeiras que distribuem o fundo",
            "ANBIMA, responsável por aplicar sanções legais aos gestores de fundos",
            "CVM, responsável por fiscalizar os fundos de investimento e seus gestores",
            "B3, responsável por supervisionar a gestão dos fundos negociados em bolsa"
        ],
        correta: 2
    },

    // ===== BANCO CENTRAL =====

    {
        tema: "Banco Central",
        contexto: "Em uma reportagem sobre política econômica, um jornalista comenta que o Banco Central passou a ter autonomia formal, o que mudou a forma como seus dirigentes são nomeados e permanecem no cargo. Um leitor fica em dúvida sobre como funciona esse mandato.",
        enunciado: "Sobre a autonomia do Banco Central, é correto afirmar que:",
        alternativas: [
            "O presidente e os diretores têm mandatos fixos de quatro anos, não coincidentes com o mandato do Presidente da República",
            "O presidente do Banco Central é escolhido pelo CMN e pode ser substituído a qualquer momento pelo Ministro da Fazenda",
            "Os diretores têm mandato vitalício, podendo ser afastados somente por decisão do Senado Federal",
            "O mandato do presidente do Banco Central coincide com o do Presidente da República, encerrando-se junto com ele"
        ],
        correta: 0
    },

    {
        tema: "Banco Central",
        contexto: "Joana é associada de uma cooperativa de crédito em sua cidade e percebeu cobranças de tarifas que considera abusivas. Antes de registrar uma reclamação formal, ela pesquisa qual órgão é responsável por autorizar o funcionamento e fiscalizar esse tipo de instituição.",
        enunciado: "O órgão responsável por essa fiscalização é:",
        alternativas: [
            "A CVM",
            "O Banco Central do Brasil",
            "O Conselho Monetário Nacional",
            "A SUSEP"
        ],
        correta: 1
    },

    {
        tema: "Banco Central",
        contexto: "Em uma aula sobre o SFN, o professor apresenta uma lista de atribuições e pede aos alunos que identifiquem qual delas pertence ao Banco Central do Brasil, e não aos demais órgãos do sistema.",
        enunciado: "Das atribuições abaixo, cabe ao Banco Central:",
        alternativas: [
            "Fiscalizar as companhias abertas e suas ofertas públicas de ações",
            "Regular as operações das sociedades seguradoras e resseguradoras",
            "Fiscalizar as entidades fechadas de previdência complementar",
            "Executar a política monetária e emitir papel-moeda"
        ],
        correta: 3
    },

    {
        tema: "Banco Central",
        contexto: "Um estudante lê uma notícia dizendo que o Banco Central cumpre as decisões do CMN. Curioso, ele pesquisa como funciona a relação entre as duas entidades no dia a dia do Sistema Financeiro Nacional.",
        enunciado: "Sobre essa relação, é correto afirmar que:",
        alternativas: [
            "O Banco Central cria as normas do sistema financeiro, e o CMN apenas as executa e fiscaliza",
            "O Banco Central executa e fiscaliza o cumprimento das normas do CMN, e seu presidente é membro do conselho",
            "O Banco Central é subordinado à CVM, que repassa a ele as decisões tomadas pelo CMN",
            "O CMN e o Banco Central atuam de forma independente, sem relação entre suas atribuições"
        ],
        correta: 1
    }

];

