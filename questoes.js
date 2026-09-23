// ===== MÓDULO 1 — 118 questões =====
// grupo: usado no sorteio | tema: assunto específico
// correta: 0 = A, 1 = B, 2 = C, 3 = D

const questoes = [

    // ===================== GRUPO: ESTRUTURA DO SFN (20) =====================

    {
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "fácil",
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

    {
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "fácil",
        contexto: "Rafael, estudante de economia, está montando um resumo sobre o Conselho Monetário Nacional para uma apresentação na faculdade. Ele precisa informar corretamente quais autoridades participam das reuniões e votam as resoluções do conselho.",
        enunciado: "A composição atual do CMN é formada por:",
        alternativas: [
            "Ministro da Fazenda, Ministro do Planejamento e Orçamento e Presidente do Banco Central",
            "Presidente do Banco Central, Presidente da CVM e Ministro da Fazenda",
            "Ministro da Fazenda, Presidente da CVM e Superintendente da SUSEP",
            "Presidente da República, Ministro da Fazenda, Presidente do Banco Central e Presidente da CVM"
        ],
        correta: 0
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "fácil",
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
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "fácil",
        contexto: "Marcos trabalha em uma grande indústria que oferece aos funcionários um plano de previdência exclusivo, administrado por uma fundação criada pela própria empresa. Ele desconfia de irregularidades na gestão dos recursos e quer levar o caso à entidade responsável pela fiscalização.",
        enunciado: "A entidade que Marcos deve procurar é:",
        alternativas: [
            "A SUSEP",
            "A CVM",
            "O Banco Central do Brasil",
            "A PREVIC"
        ],
        correta: 3
    },

    {
        grupo: "Estrutura do SFN",
        tema: "Banco Central",
        nivel: "fácil",
        contexto: "Joana é associada de uma cooperativa de crédito em sua cidade e percebeu cobranças de tarifas que considera abusivas. Antes de registrar uma reclamação formal, ela pesquisa qual órgão é responsável por autorizar o funcionamento e fiscalizar esse tipo de instituição.",
        enunciado: "O órgão responsável por essa fiscalização é:",
        alternativas: [
            "O Banco Central do Brasil",
            "A CVM",
            "O Conselho Monetário Nacional",
            "A SUSEP"
        ],
        correta: 0
    },

    {
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "médio",
        contexto: "Seu Valdir, pequeno produtor rural, tem um CDB na cooperativa onde é associado. Ele pergunta a Ana, profissional certificada CPA, por que a instituição paga juros no CDB dele e, ao mesmo tempo, cobra juros mais altos no crédito rural do vizinho.",
        enunciado: "Ana deve explicar que essa dinâmica ocorre porque:",
        alternativas: [
            "a instituição capta recursos de quem tem sobra e empresta a quem precisa, sendo remunerada pela diferença entre as taxas, o spread",
            "a instituição capta recursos de quem tem sobra e empresta a quem precisa, mas o spread de cada operação é fixado pelo CMN",
            "os recursos do CDB ficam integralmente depositados no Banco Central, e o crédito rural é financiado apenas com capital próprio",
            "a instituição empresta apenas recursos próprios, e os juros pagos no CDB são custeados pelas tarifas cobradas dos associados"
        ],
        correta: 0
    },

    {
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "médio",
        contexto: "Um cliente leu uma notícia sobre uma nova regra para o mercado de seguros e pergunta ao gerente, certificado CPA, quem criou a regra, quem vai fiscalizar o seu cumprimento e onde a seguradora dele se encaixa nessa estrutura.",
        enunciado: "A explicação correta do gerente é:",
        alternativas: [
            "a regra foi criada pela SUSEP, que também a fiscaliza, e o CNSP atua apenas como órgão consultivo, sem poder normativo",
            "a regra foi criada pelo CNSP, órgão normativo; a SUSEP fiscaliza o cumprimento; e a seguradora atua como instituição operadora",
            "a regra foi criada pelo CMN, que regula todos os mercados; a SUSEP fiscaliza; e a seguradora atua como instituição operadora",
            "a regra foi criada pelo CNSP; a fiscalização cabe ao Banco Central; e a seguradora atua como instituição operadora"
        ],
        correta: 1
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "médio",
        contexto: "Durante o atendimento, uma cliente comenta com o gerente, certificado CPA, que leu que o Banco Central decidiu qual será a meta de inflação do país e que, por isso, ele é o responsável por defini-la.",
        enunciado: "Para corrigir o entendimento da cliente, o gerente deve esclarecer que:",
        alternativas: [
            "a meta é fixada pelo Copom, que também define a taxa Selic necessária para alcançá-la ao longo do ano",
            "a meta é fixada pelo Banco Central, e o CMN apenas a divulga oficialmente ao mercado e à sociedade",
            "a meta é fixada pelo CMN, e cabe ao Banco Central, por meio do Copom, conduzir os juros para alcançá-la",
            "a meta é fixada pelo CMN, e cabe à CVM acompanhar o seu cumprimento pelas instituições financeiras"
        ],
        correta: 2
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "médio",
        contexto: "Um empreendedor quer abrir uma instituição financeira voltada ao crédito digital e procura uma consultora certificada CPA para entender quem define as regras de constituição e funcionamento e quem analisa e aprova o pedido de autorização.",
        enunciado: "A consultora deve explicar que:",
        alternativas: [
            "o Banco Central define as regras de constituição, e o CMN analisa o pedido e autoriza o funcionamento",
            "a CVM define as regras e autoriza o funcionamento, por se tratar de uma empresa de tecnologia financeira",
            "o CMN define as regras e também autoriza diretamente o funcionamento, sem participação do Banco Central",
            "o CMN define as regras de constituição e funcionamento, e o Banco Central analisa o pedido e autoriza"
        ],
        correta: 3
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "médio",
        contexto: "Carla contratou um plano PGBL em uma seguradora. Após uma mudança nas regras de portabilidade do produto, ela pergunta ao gerente, certificado CPA, quais entidades criaram a nova norma e quais fiscalizam a seguradora.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "por ser previdência fechada, as normas vêm do CNPC, e a fiscalização da seguradora cabe à PREVIC",
            "por ser previdência aberta, as normas vêm do CNSP, e a fiscalização da seguradora cabe à SUSEP",
            "por ser previdência aberta, as normas vêm do CNSP, e a fiscalização da seguradora cabe à PREVIC",
            "por ser um investimento, as normas vêm do CMN, e a fiscalização da seguradora cabe à CVM"
        ],
        correta: 1
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "médio",
        contexto: "Antes de contratar um seguro de vida oferecido por telefone, Sílvia pede orientação a um profissional certificado CPA. Ela quer confirmar se a seguradora está autorizada a funcionar e se o corretor que a atendeu é habilitado.",
        enunciado: "O profissional deve orientar Sílvia a consultar:",
        alternativas: [
            "o Banco Central, que autoriza as seguradoras por se tratarem de instituições financeiras",
            "a SUSEP para a seguradora, mas o registro dos corretores é mantido exclusivamente pela ANBIMA",
            "a SUSEP, que autoriza e fiscaliza as seguradoras e mantém o registro dos corretores de seguros",
            "o CNSP, que fiscaliza diretamente as seguradoras e mantém o registro dos corretores de seguros"
        ],
        correta: 2
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "médio",
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
        grupo: "Estrutura do SFN",
        tema: "CVM",
        nivel: "médio",
        contexto: "O diretor financeiro de uma companhia aberta vai emitir debêntures para financiar uma nova fábrica e pede ao gerente do banco coordenador, certificado CPA, que explique quem regula e fiscaliza a operação.",
        enunciado: "Sobre a oferta, o gerente deve explicar que:",
        alternativas: [
            "as debêntures são títulos de crédito bancário, e o Banco Central regula e fiscaliza a oferta",
            "as debêntures são valores mobiliários, mas a fiscalização da oferta cabe à B3, onde serão negociadas",
            "as debêntures são valores mobiliários, e a CVM regula e fiscaliza a oferta e as informações divulgadas",
            "as debêntures são valores mobiliários, e a ANBIMA regula a oferta com poder legal de punir a empresa"
        ],
        correta: 2
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CVM",
        nivel: "médio",
        contexto: "Ao atender um cliente na agência, Lucas explica a diferença entre produtos bancários e valores mobiliários. O cliente possui aplicações em poupança, CDB, títulos do Tesouro Direto e cotas de um fundo de investimento, e quer saber qual delas se enquadra como valor mobiliário.",
        enunciado: "Entre as aplicações do cliente, é considerada valor mobiliário:",
        alternativas: [
            "A caderneta de poupança",
            "O Certificado de Depósito Bancário (CDB)",
            "O título do Tesouro Direto",
            "A cota do fundo de investimento"
        ],
        correta: 3
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CVM",
        nivel: "médio",
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

    {
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "difícil",
        contexto: "Paulo participa do fundo de pensão da empresa onde trabalha, tem um plano VGBL contratado em uma seguradora e aplica em um fundo multimercado distribuído pelo seu banco. Ele suspeita de irregularidades nos três produtos e quer levar cada caso à entidade supervisora correta.",
        enunciado: "Considerando a ordem fundo de pensão, VGBL e fundo multimercado, Paulo deve procurar, respectivamente:",
        alternativas: [
            "PREVIC, SUSEP e CVM",
            "SUSEP, PREVIC e Banco Central",
            "PREVIC, SUSEP e Banco Central",
            "SUSEP, SUSEP e CVM"
        ],
        correta: 0
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "difícil",
        contexto: "Um cliente acredita que seu banco descumpriu uma norma sobre tarifas e diz ao gerente, certificado CPA, que vai denunciar a instituição ao CMN, que, segundo ele, é quem fiscaliza e pune os bancos. Ele acrescenta que a norma foi aprovada pelo presidente do Banco Central, sozinho.",
        enunciado: "Para corrigir o entendimento do cliente, o gerente deve explicar que:",
        alternativas: [
            "o CMN fiscaliza e pune as instituições, mas as normas são definidas individualmente pelo presidente do Banco Central",
            "o CMN aprova as normas por votação de seus três membros, e a fiscalização e as punições cabem ao Banco Central",
            "o CMN aprova as normas por votação de seus três membros, mas as punições às instituições cabem à CVM",
            "o CMN aprova as normas por decisão exclusiva do Ministro da Fazenda, e o Banco Central fiscaliza e pune"
        ],
        correta: 1
    },

    {
        grupo: "Estrutura do SFN",
        tema: "Banco Central",
        nivel: "difícil",
        contexto: "Um investidor comenta com o assessor, certificado CPA, que, com a autonomia, o Banco Central deixou de seguir o CMN e que o presidente do BC agora fica no cargo enquanto o Presidente da República quiser.",
        enunciado: "Para corrigir o investidor, o assessor deve explicar que a autonomia:",
        alternativas: [
            "criou mandatos fixos de quatro anos, não coincidentes com o presidencial, e o presidente do BC segue no CMN",
            "criou mandatos fixos de quatro anos, coincidentes com o presidencial, e o BC passou a fixar a meta de inflação",
            "criou mandatos fixos, não coincidentes com o presidencial, e o presidente do BC deixou de integrar o CMN",
            "manteve os mandatos livres, definidos pelo Presidente da República, mas o BC deixou de seguir as metas do CMN"
        ],
        correta: 0
    },

    {
        grupo: "Estrutura do SFN",
        tema: "Banco Central",
        nivel: "difícil",
        contexto: "Em um treinamento, o instrutor descreve três situações envolvendo um banco de médio porte com ações negociadas em bolsa: primeiro, o banco sofre uma falta momentânea de caixa; depois, surgem indícios de gestão irregular; por fim, rumores sem divulgação de fato relevante derrubam o preço das ações.",
        enunciado: "As entidades que devem atuar em cada situação, na ordem apresentada, são:",
        alternativas: [
            "CMN, Banco Central e B3",
            "Banco Central, CVM e CVM",
            "Fundo Garantidor de Créditos, Banco Central e ANBIMA",
            "Banco Central, Banco Central e CVM"
        ],
        correta: 3
    },

    {
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "difícil",
        contexto: "O fundo de pensão dos funcionários de uma estatal apresenta déficit grave causado por má gestão. Uma participante diz ao gerente, certificado CPA, que está tranquila, pois a SUSEP vai intervir no fundo e o FGC garante até R$ 250 mil de cada participante.",
        enunciado: "Para corrigir o entendimento da participante, o gerente deve explicar que:",
        alternativas: [
            "a SUSEP pode decretar a intervenção, e os recursos contam com a garantia do FGC até R$ 250 mil",
            "a PREVIC pode decretar intervenção ou liquidação extrajudicial, e os recursos não têm garantia do FGC",
            "a PREVIC pode decretar a intervenção, e os recursos contam com a garantia do FGC até R$ 250 mil",
            "o Banco Central pode decretar a intervenção, e os recursos não têm garantia do FGC"
        ],
        correta: 1
    },

    

    // ===================== GRUPO: INSTITUIÇÕES FINANCEIRAS (15) =====================

    {
        grupo: "Instituições financeiras",
        tema: "Bancos",
        contexto: "Em uma aula sobre intermediação financeira, a professora apresenta as diferentes instituições que compõem o SFN e pede aos alunos que identifiquem o que torna os bancos comerciais únicos em relação às demais.",
        enunciado: "A característica que diferencia os bancos comerciais das demais instituições financeiras é:",
        alternativas: [
            "A emissão de papel-moeda para atender à demanda da população",
            "A captação de recursos exclusivamente por meio da caderneta de poupança",
            "A captação de depósitos à vista, o que permite a criação de moeda escritural",
            "A atuação exclusiva em operações de mercado de capitais, como emissão de ações"
        ],
        correta: 2
    },

    {
        grupo: "Instituições financeiras",
        tema: "Bancos",
        contexto: "Ao pesquisar sobre a instituição onde pretende abrir conta, Renata descobre que ela é classificada pelo Banco Central como banco múltiplo. Curiosa, ela quer entender o que essa classificação significa.",
        enunciado: "Um banco múltiplo é uma instituição que:",
        alternativas: [
            "Opera com uma única carteira, podendo escolher entre comercial, de investimento ou de crédito imobiliário",
            "Opera com pelo menos duas carteiras, sendo uma delas obrigatoriamente comercial ou de investimento",
            "É obrigatoriamente controlada pelo governo e atua em programas de desenvolvimento regional",
            "Atua exclusivamente com crédito imobiliário e financiamento de veículos"
        ],
        correta: 1
    },

    {
        grupo: "Instituições financeiras",
        tema: "Bancos",
        contexto: "A diretoria de uma empresa de médio porte planeja abrir o capital na bolsa nos próximos anos e, até lá, precisa de financiamento de longo prazo para ampliar sua fábrica. O diretor financeiro busca uma instituição especializada nesse tipo de operação.",
        enunciado: "A instituição mais adequada para atender a essas necessidades é:",
        alternativas: [
            "A cooperativa de crédito",
            "A sociedade de crédito imobiliário",
            "O banco comercial",
            "O banco de investimento"
        ],
        correta: 3
    },

    {
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        contexto: "Juliana está decidindo entre abrir conta em um banco tradicional ou em uma cooperativa de crédito da sua cidade. Antes de escolher, ela quer entender a principal diferença na natureza das duas instituições.",
        enunciado: "Em relação ao banco tradicional, a cooperativa de crédito se diferencia porque:",
        alternativas: [
            "Não é autorizada nem fiscalizada pelo Banco Central, seguindo apenas as regras definidas em assembleia",
            "Pode apenas captar recursos dos associados, sendo proibida de conceder empréstimos",
            "É constituída como sociedade anônima, com ações negociadas na bolsa de valores",
            "Tem como associados pessoas que são, ao mesmo tempo, donas e usuárias da instituição, sem finalidade de lucro"
        ],
        correta: 3
    },

    {
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        contexto: "Ao acessar o site da cooperativa onde tem conta, Laura percebe que ela faz parte de um sistema que inclui cooperativas centrais e uma confederação. Ela quer entender como essa estrutura se organiza.",
        enunciado: "A organização correta dos sistemas cooperativos de crédito é:",
        alternativas: [
            "As singulares são controladas pelas confederações, que captam recursos diretamente do público",
            "As centrais atendem diretamente os associados, e as singulares fiscalizam as centrais",
            "As singulares atendem os associados, as centrais reúnem as singulares, e as confederações reúnem as centrais",
            "Todas as cooperativas respondem diretamente ao CMN, sem níveis intermediários de organização"
        ],
        correta: 2
    },

    {
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        contexto: "Em um trabalho sobre bancos públicos, um estudante precisa diferenciar a Caixa Econômica Federal de outras instituições financeiras ligadas ao governo federal.",
        enunciado: "A descrição correta da Caixa Econômica Federal é:",
        alternativas: [
            "Sociedade de economia mista, com ações negociadas na bolsa e controle da União",
            "Empresa pública que opera o FGTS e atua como principal agente dos programas habitacionais do governo",
            "Autarquia federal responsável por fiscalizar os bancos públicos e seus programas sociais",
            "Banco de desenvolvimento voltado ao financiamento de grandes projetos de infraestrutura"
        ],
        correta: 1
    },

    {
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        contexto: "Lucas mantém o salário em uma conta de pagamento de um aplicativo digital, autorizado pelo Banco Central como instituição de pagamento. Um amigo pergunta se o dinheiro dele estaria protegido caso a empresa quebrasse.",
        enunciado: "Sobre os recursos mantidos por Lucas, é correto afirmar que:",
        alternativas: [
            "Têm cobertura do FGC até R$ 250 mil, assim como uma conta corrente bancária",
            "Podem ser emprestados livremente pela instituição a outros clientes",
            "São regulados pela CVM, por serem considerados um investimento",
            "Não têm cobertura do FGC, mas ficam separados do patrimônio da instituição"
        ],
        correta: 3
    },

    {
        grupo: "Instituições financeiras",
        tema: "Fintechs",
        contexto: "Uma startup quer atuar no mercado de crédito concedendo empréstimos pela internet, usando apenas o próprio capital, sem captar recursos do público. Os sócios pesquisam qual tipo de autorização devem solicitar ao Banco Central.",
        enunciado: "O modelo de instituição adequado para essa operação é:",
        alternativas: [
            "Sociedade de Empréstimo entre Pessoas (SEP)",
            "Sociedade de Crédito Direto (SCD)",
            "Instituição de pagamento emissora de moeda eletrônica",
            "Banco comercial"
        ],
        correta: 1
    },

    {
        grupo: "Instituições financeiras",
        tema: "Financiamento e leasing",
        contexto: "O dono de uma transportadora precisa de um novo caminhão e está comparando duas propostas: um financiamento e um contrato de leasing. O gerente explica que a diferença principal está em quem é o dono do veículo durante o contrato.",
        enunciado: "Sobre o leasing, é correto afirmar que:",
        alternativas: [
            "O bem passa a ser do cliente desde a assinatura, ficando alienado à instituição até a quitação",
            "O cliente é obrigado a comprar o bem ao final do contrato, pelo valor definido na assinatura",
            "O bem pertence à arrendadora durante o contrato, e ao final o cliente pode comprá-lo, devolvê-lo ou renovar",
            "É o mesmo produto que o financiamento, mudando apenas o nome comercial e a taxa de juros"
        ],
        correta: 2
    },

    {
        grupo: "Instituições financeiras",
        tema: "Fomento e microcrédito",
        contexto: "Dona Sônia vende salgados em uma feira e quer comprar um forno maior para aumentar a produção. Ela não tem conta em banco, comprovante de renda formal nem bens para dar em garantia. Um agente de crédito visita a feira e apresenta uma linha específica para esse perfil.",
        enunciado: "A linha de crédito apresentada a Dona Sônia é característica do:",
        alternativas: [
            "Microcrédito produtivo orientado",
            "Crédito consignado",
            "Financiamento de capital fixo do BNDES",
            "Crédito direto ao consumidor (CDC)"
        ],
        correta: 0
    },

    {
        grupo: "Instituições financeiras",
        tema: "Fomento e microcrédito",
        contexto: "Um estudante pesquisa sobre instituições que financiam o desenvolvimento econômico de estados e regiões, e encontra referências às agências de fomento estaduais.",
        enunciado: "Sobre as agências de fomento, é correto afirmar que:",
        alternativas: [
            "Captam depósitos à vista do público, como os bancos comerciais",
            "Financiam projetos de desenvolvimento em seu estado, sem captar recursos do público",
            "São fiscalizadas pela CVM, por atuarem no mercado de capitais",
            "Atuam exclusivamente na concessão de crédito imobiliário para pessoas de baixa renda"
        ],
        correta: 1
    },

    {
        grupo: "Instituições financeiras",
        tema: "Crédito imobiliário",
        contexto: "Ao pesquisar sobre financiamento para comprar o primeiro apartamento, Camila lê que o crédito habitacional no Brasil tem duas grandes fontes de recursos, direcionadas por lei para esse tipo de operação.",
        enunciado: "As principais fontes de recursos do crédito habitacional no Brasil são:",
        alternativas: [
            "Depósitos à vista e reservas internacionais",
            "Recursos do Tesouro Nacional e emissão de ações",
            "Caderneta de poupança e FGTS",
            "Títulos de capitalização e previdência privada"
        ],
        correta: 2
    },

    {
        grupo: "Instituições financeiras",
        tema: "Crédito imobiliário",
        contexto: "Rodrigo quer financiar um imóvel de alto padrão, cujo valor ultrapassa o limite máximo permitido pelo Sistema Financeiro da Habitação. O gerente explica que, nesse caso, o financiamento seguirá outro sistema, com regras diferentes.",
        enunciado: "O financiamento de Rodrigo será feito pelo:",
        alternativas: [
            "SFH, com taxa de juros limitada e possibilidade de usar o FGTS",
            "SFI, com taxas negociadas livremente e sem possibilidade de usar o FGTS",
            "Programa habitacional do governo, com subsídio na entrada",
            "Consórcio imobiliário, obrigatório para imóveis acima do limite"
        ],
        correta: 1
    },

    {
        grupo: "Instituições financeiras",
        tema: "Consórcio",
        contexto: "Aline quer trocar de carro, mas não tem pressa em receber o veículo. O vendedor de uma administradora oferece um consórcio como alternativa ao financiamento, e ela quer entender as principais diferenças entre os dois.",
        enunciado: "Em comparação com o financiamento, é correto afirmar que, no consórcio:",
        alternativas: [
            "O cliente recebe o bem imediatamente e paga juros menores",
            "A supervisão é feita pela SUSEP, pois o produto funciona como um seguro",
            "A contemplação ocorre exclusivamente pela ordem de entrada no grupo",
            "Não há cobrança de juros, mas há taxa de administração, e o bem só é adquirido após a contemplação"
        ],
        correta: 3
    },

    {
        grupo: "Instituições financeiras",
        tema: "Consórcio",
        contexto: "Após entrar em um grupo de consórcio imobiliário, Fábio quer entender como pode ser contemplado antes do fim do prazo e qual órgão fiscaliza a administradora responsável pelo grupo.",
        enunciado: "Sobre o funcionamento do consórcio, é correto afirmar que:",
        alternativas: [
            "A contemplação ocorre por sorteio ou por lance, e as administradoras são supervisionadas pelo Banco Central",
            "A contemplação ocorre apenas por lance, e as administradoras são supervisionadas pela CVM",
            "A contemplação ocorre apenas por sorteio, e as administradoras são supervisionadas pela SUSEP",
            "A contemplação ocorre pela ordem de pagamento das parcelas, sem supervisão de órgão público"
        ],
        correta: 0
    },

    // ===================== GRUPO: MERCADO DE CAPITAIS (11) =====================

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "Gustavo abriu conta em uma corretora e comprou suas primeiras ações pelo home broker. Curioso, ele quer entender qual é o papel da B3 nessa operação, já que quem executou a ordem foi a corretora.",
        enunciado: "Na operação de Gustavo, a B3 é responsável por:",
        alternativas: [
            "Atender diretamente o investidor e executar suas ordens de compra, sem necessidade de corretora",
            "Regular e fiscalizar o mercado de ações, aplicando punições às companhias abertas",
            "Administrar o ambiente de negociação, compensar e liquidar as operações e custodiar os ativos",
            "Garantir o valor investido nas ações contra perdas causadas por queda nos preços"
        ],
        correta: 2
    },

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "Em uma palestra para novos investidores, o palestrante explica que a B3 é uma empresa privada, com ações negociadas na própria bolsa. Um participante pergunta se, por ser privada, ela fica livre de qualquer fiscalização.",
        enunciado: "Sobre a supervisão da B3, é correto afirmar que ela é supervisionada:",
        alternativas: [
            "Apenas pela ANBIMA, por ser uma entidade privada do mercado",
            "Pela CVM e pelo Banco Central, conforme o tipo de atividade exercida",
            "Pela SUSEP, por oferecer mecanismos de garantia aos investidores",
            "Por nenhum órgão, por ser uma empresa de capital aberto"
        ],
        correta: 1
    },

    {
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        contexto: "Ao escolher onde abrir conta para investir, Mariana encontra uma corretora de títulos e valores mobiliários e uma distribuidora de títulos e valores mobiliários. Ela quer saber se existe alguma diferença relevante entre as duas.",
        enunciado: "Sobre corretoras e distribuidoras, é correto afirmar que:",
        alternativas: [
            "Apenas as corretoras podem operar na bolsa, e as distribuidoras atuam somente no mercado de balcão",
            "As distribuidoras são supervisionadas pela SUSEP, e as corretoras, pela CVM",
            "As corretoras podem captar depósitos à vista, e as distribuidoras não",
            "Atualmente, ambas podem operar diretamente na bolsa, e as diferenças práticas entre elas são pequenas"
        ],
        correta: 3
    },

    {
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        contexto: "Em uma reunião de equipe, o gerente comenta que a instituição precisa se adequar a uma nova regra de um código da ANBIMA. Um funcionário recém-contratado pergunta que tipo de entidade é a ANBIMA e de onde vem sua autoridade.",
        enunciado: "A descrição correta da ANBIMA é:",
        alternativas: [
            "Órgão público vinculado ao Ministério da Fazenda, com poder de lei para punir qualquer instituição financeira",
            "Autarquia ligada ao Banco Central, responsável por fiscalizar bancos e corretoras",
            "Associação privada que atua na autorregulação, criando códigos que as instituições associadas ou aderentes devem seguir",
            "Entidade que substituiu a CVM na regulação e fiscalização dos fundos de investimento"
        ],
        correta: 2
    },

    {
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        contexto: "Carlos foi promovido a gerente de investimentos em um banco associado à ANBIMA. Antes de começar a recomendar produtos aos clientes, ele é informado de que precisa obter uma certificação.",
        enunciado: "A exigência da certificação para Carlos existe porque:",
        alternativas: [
            "Uma lei federal exige certificação para qualquer funcionário de instituição financeira",
            "A certificação é emitida pelo Banco Central e autoriza o profissional a gerir fundos",
            "A certificação substitui a necessidade de análise do perfil de investimento dos clientes",
            "As regras da ANBIMA exigem que profissionais que distribuem produtos de investimento comprovem sua qualificação"
        ],
        correta: 3
    },

    {
        grupo: "Mercado de capitais",
        tema: "Apimec, Planejar e Ancord",
        contexto: "Em uma feira de carreiras do mercado financeiro, três entidades apresentam suas certificações profissionais: Apimec, Planejar e Ancord. Um estudante tenta associar cada entidade ao profissional que ela certifica.",
        enunciado: "A associação correta é:",
        alternativas: [
            "Apimec: planejadores financeiros; Planejar: assessores de investimento; Ancord: analistas de valores mobiliários",
            "Apimec: assessores de investimento; Planejar: analistas de valores mobiliários; Ancord: planejadores financeiros",
            "Apimec: analistas de valores mobiliários; Planejar: planejadores financeiros; Ancord: assessores de investimento",
            "As três entidades emitem a mesma certificação, com nomes diferentes conforme a região do país"
        ],
        correta: 2
    },

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "Uma empresa de tecnologia realiza sua oferta pública inicial de ações (IPO). Meses depois, os investidores que compraram na oferta passam a negociar essas ações entre si na bolsa.",
        enunciado: "Sobre essas duas etapas, é correto afirmar que:",
        alternativas: [
            "O IPO ocorre no mercado primário, com os recursos indo para a empresa, e as negociações posteriores ocorrem no mercado secundário",
            "O IPO ocorre no mercado secundário, e as negociações posteriores ocorrem no mercado primário",
            "Nas negociações posteriores, os recursos também vão para a empresa emissora",
            "As duas etapas ocorrem no mercado primário, pois envolvem as mesmas ações"
        ],
        correta: 0
    },

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "Ao montar sua carteira de ações, Rodrigo percebe que algumas empresas têm ações com códigos terminados em 3 e outras em 4, que correspondem a ações ordinárias e preferenciais.",
        enunciado: "A diferença entre ações ordinárias (ON) e preferenciais (PN) é que:",
        alternativas: [
            "As ON têm prioridade no recebimento de dividendos, e as PN dão direito a voto",
            "As ON dão direito a voto, e as PN têm prioridade no recebimento de dividendos, geralmente sem direito a voto",
            "As ON são negociadas apenas no mercado de balcão, e as PN apenas na bolsa",
            "As ON e as PN têm exatamente os mesmos direitos, mudando apenas o código de negociação"
        ],
        correta: 1
    },

    {
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        contexto: "Em uma oferta pública de ações, o banco coordenador se compromete a comprar todas as ações que não forem vendidas aos investidores, garantindo à empresa a captação total prevista.",
        enunciado: "Esse tipo de compromisso é conhecido como:",
        alternativas: [
            "Melhores esforços",
            "Standby",
            "Garantia firme",
            "Book building"
        ],
        correta: 2
    },

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "Uma empresa anuncia que cada ação será dividida em duas. Antes do anúncio, Camila tinha 100 ações cotadas a R$ 40,00.",
        enunciado: "Após o desdobramento, a posição de Camila passa a ser de:",
        alternativas: [
            "100 ações a R$ 80,00, totalizando R$ 8.000,00",
            "200 ações a R$ 40,00, totalizando R$ 8.000,00",
            "50 ações a R$ 80,00, totalizando R$ 4.000,00",
            "200 ações a R$ 20,00, mantendo o total de R$ 4.000,00"
        ],
        correta: 3
    },

    {
        grupo: "Mercado de capitais",
        tema: "B3",
        contexto: "O controlador de uma companhia aberta vende sua participação para um novo grupo. Os acionistas minoritários com ações ordinárias querem saber se têm algum direito nessa operação.",
        enunciado: "Pela Lei das S.A., o tag along garante aos minoritários com ações ordinárias o direito de vender suas ações por, no mínimo:",
        alternativas: [
            "80% do preço pago ao controlador",
            "50% do preço pago ao controlador",
            "100% do preço pago ao controlador, em qualquer segmento de listagem",
            "O preço de mercado do dia anterior ao anúncio"
        ],
        correta: 0
    },

    // ===================== GRUPO: SEGUROS E PREVIDÊNCIA (11) =====================

    {
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        contexto: "Uma seguradora de médio porte fechou um contrato para segurar uma grande usina hidrelétrica. Caso ocorra um sinistro total, a indenização seria maior que todo o patrimônio da seguradora. Para operar com segurança, ela busca apoio de outra instituição.",
        enunciado: "A instituição procurada pela seguradora tem como função:",
        alternativas: [
            "Vender seguros diretamente ao consumidor final, sem intermediação de corretores",
            "Assumir parte dos riscos da seguradora, protegendo-a contra perdas de grande valor",
            "Fiscalizar as seguradoras em nome da SUSEP, aprovando os contratos de grande porte",
            "Garantir os valores dos segurados em caso de quebra da seguradora, como o FGC"
        ],
        correta: 1
    },

    {
        grupo: "Seguros e previdência",
        tema: "Capitalização",
        contexto: "Seu Antônio foi abordado na agência com a oferta de um título de capitalização. O vendedor destacou os sorteios mensais e disse que o produto seria uma boa forma de guardar dinheiro, comparando-o à poupança.",
        enunciado: "Sobre o título de capitalização, é correto afirmar que:",
        alternativas: [
            "Costuma render mais que a poupança, pois os sorteios aumentam a rentabilidade média",
            "Tem os valores garantidos pelo FGC até R$ 250 mil por CPF",
            "Não é considerado investimento, pois parte das parcelas vai para sorteios e despesas, e o resgate antecipado pode ser menor que o valor pago",
            "É um valor mobiliário e, por isso, sua comercialização é regulada pela CVM"
        ],
        correta: 2
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Durante um treinamento sobre previdência, os participantes precisam comparar as entidades abertas de previdência complementar (EAPC) com as entidades fechadas (EFPC).",
        enunciado: "A comparação correta entre as duas é:",
        alternativas: [
            "A EAPC não tem fins lucrativos e atende só empregados de uma empresa, enquanto a EFPC tem fins lucrativos e atende qualquer pessoa",
            "Ambas são supervisionadas pela PREVIC e seguem as normas do CNPC",
            "Ambas atendem qualquer pessoa, diferindo apenas no tipo de plano oferecido, PGBL ou VGBL",
            "A EAPC tem fins lucrativos e atende qualquer pessoa, enquanto a EFPC não tem fins lucrativos e atende empregados ou associados de um grupo"
        ],
        correta: 3
    },

    {
        grupo: "Seguros e previdência",
        tema: "Corretoras de seguro",
        contexto: "Ao contratar o seguro do carro, Patrícia foi atendida por um corretor de seguros, que comparou propostas de várias seguradoras e explicou as coberturas. Ela quer entender qual é exatamente o papel desse profissional.",
        enunciado: "O corretor de seguros é responsável por:",
        alternativas: [
            "Intermediar a contratação do seguro e orientar o cliente, devendo ser habilitado e registrado na SUSEP",
            "Assumir os riscos do contrato e pagar diretamente as indenizações ao segurado",
            "Fiscalizar as seguradoras e aplicar multas quando houver irregularidades",
            "Emitir as apólices em nome próprio, substituindo a seguradora na operação"
        ],
        correta: 0
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Mariana é assalariada, contribui para o INSS e faz a declaração completa do Imposto de Renda. Ela quer contratar um plano de previdência que traga benefício fiscal enquanto contribui.",
        enunciado: "O plano mais adequado para Mariana é o:",
        alternativas: [
            "VGBL, pois permite deduzir as contribuições da base de cálculo do IR",
            "PGBL, pois permite deduzir as contribuições até 12% da renda bruta tributável",
            "VGBL, pois o IR no resgate incide sobre o valor total acumulado",
            "PGBL, pois é isento de IR no resgate"
        ],
        correta: 1
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Seu Jorge é aposentado, isento de Imposto de Renda e faz a declaração simplificada. Ele quer um plano de previdência para planejar a sucessão patrimonial.",
        enunciado: "Para o perfil de Seu Jorge, o plano mais indicado e a base de incidência do IR no resgate são:",
        alternativas: [
            "PGBL, com IR sobre o valor total resgatado",
            "PGBL, com IR apenas sobre os rendimentos",
            "VGBL, com IR sobre o valor total resgatado",
            "VGBL, com IR apenas sobre os rendimentos"
        ],
        correta: 3
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Carolina, de 30 anos, está contratando um plano de previdência e pretende manter os recursos aplicados por mais de dez anos. O gerente explica as opções de tributação.",
        enunciado: "Considerando o horizonte de Carolina, a tabela mais vantajosa e sua alíquota mínima são:",
        alternativas: [
            "Regressiva, com alíquota mínima de 10% para recursos aplicados há mais de dez anos",
            "Progressiva, com alíquota fixa de 15% para qualquer prazo",
            "Regressiva, com alíquota mínima de 15% para recursos aplicados há mais de cinco anos",
            "Progressiva, com isenção total após dez anos"
        ],
        correta: 0
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Luís optou pela tabela progressiva em seu plano de previdência e fez um resgate parcial. Ele percebe que houve um desconto de Imposto de Renda no momento do resgate.",
        enunciado: "Na tabela progressiva, no momento do resgate:",
        alternativas: [
            "Não há retenção de IR, que é pago apenas na declaração anual",
            "Há retenção de 35%, que diminui conforme o prazo de aplicação",
            "Há retenção antecipada de 15%, com ajuste na declaração anual",
            "Há retenção de 10%, alíquota definitiva e sem ajuste"
        ],
        correta: 2
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Insatisfeita com as taxas de seu plano de previdência, Beatriz quer transferir os recursos para outra instituição, sem pagar Imposto de Renda na operação.",
        enunciado: "Sobre a portabilidade de previdência, é correto afirmar que:",
        alternativas: [
            "É permitida entre planos do mesmo tipo, como de PGBL para PGBL, sem incidência de IR",
            "É permitida entre quaisquer planos, inclusive de PGBL para VGBL, sem incidência de IR",
            "Exige o resgate total dos recursos, com pagamento do IR antes da transferência",
            "Só é permitida após dez anos de contribuição no plano de origem"
        ],
        correta: 0
    },

    {
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        contexto: "Ricardo compara um fundo de investimento tradicional com um plano de previdência e quer saber qual deles sofre a antecipação semestral do Imposto de Renda.",
        enunciado: "Sobre o come-cotas, é correto afirmar que:",
        alternativas: [
            "Incide semestralmente tanto em fundos quanto em planos de previdência",
            "Incide apenas em planos de previdência, nos meses de maio e novembro",
            "Não incide sobre planos de previdência, o que favorece o crescimento dos recursos no longo prazo",
            "Incide sobre planos de previdência apenas quando se escolhe a tabela progressiva"
        ],
        correta: 2
    },

    {
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        contexto: "Ao contratar um seguro residencial, Paula lê o contrato e encontra termos como prêmio, sinistro e indenização. Ela quer entender o significado de cada um.",
        enunciado: "No contrato de seguro, o prêmio corresponde:",
        alternativas: [
            "Ao valor pago pela seguradora ao segurado após um sinistro",
            "Ao evento que causa o dano coberto pelo seguro",
            "À parte do prejuízo que fica sob responsabilidade do segurado",
            "Ao valor pago pelo segurado à seguradora pela cobertura contratada"
        ],
        correta: 3
    },

    // ===================== GRUPO: GARANTIAS E INFRAESTRUTURA (14) =====================

    {
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        contexto: "Roberto tem R$ 400 mil aplicados em CDB de um único banco. Após ler notícias sobre dificuldades financeiras da instituição, ele quer saber quanto desse valor estaria protegido pelo Fundo Garantidor de Créditos.",
        enunciado: "O valor de Roberto protegido pelo FGC é de:",
        alternativas: [
            "R$ 400 mil, pois o CDB tem garantia integral do FGC",
            "Até R$ 250 mil, limite por CPF em cada instituição ou conglomerado",
            "Até R$ 1 milhão, limite por CPF em cada instituição",
            "Nenhum valor, pois o CDB não tem cobertura do FGC"
        ],
        correta: 1
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        contexto: "Uma cliente quer diversificar seus investimentos, mas faz questão de aplicar apenas em produtos com cobertura do Fundo Garantidor de Créditos. O gerente apresenta quatro opções.",
        enunciado: "Entre as opções, a que possui cobertura do FGC é:",
        alternativas: [
            "Cotas de um fundo de investimento DI",
            "Debêntures de uma empresa de energia",
            "Títulos do Tesouro Direto",
            "Letra de Crédito do Agronegócio (LCA)"
        ],
        correta: 3
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        contexto: "Otávio é associado de uma cooperativa de crédito e mantém R$ 100 mil aplicados em um depósito a prazo na instituição. Ele quer saber se esse valor tem alguma garantia caso a cooperativa enfrente problemas.",
        enunciado: "Sobre a garantia dos recursos de Otávio, é correto afirmar que:",
        alternativas: [
            "São protegidos pelo FGCoop, com limite de até R$ 250 mil por associado",
            "São protegidos pelo FGC, pois cooperativas seguem as mesmas regras dos bancos",
            "Não têm nenhuma garantia, pois cooperativas não são instituições financeiras",
            "São garantidos pelo Banco Central, sem limite de valor"
        ],
        correta: 0
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        contexto: "Uma empresa precisa transferir um valor alto para um fornecedor e quer que o dinheiro esteja disponível no mesmo instante. O gerente explica que a operação passará pelo sistema de liquidação operado pelo Banco Central.",
        enunciado: "Nesse sistema, a liquidação ocorre de forma:",
        alternativas: [
            "Diferida, ao fim do dia, pelo valor líquido de todas as operações",
            "Compensada, com prazo de até dois dias úteis para o crédito",
            "Bruta e em tempo real, operação por operação",
            "Garantida pelo FGC, com liquidação feita pela B3"
        ],
        correta: 2
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        contexto: "Dois investidores fecham uma operação na bolsa: um vende ações e o outro compra. Um deles pergunta o que acontece caso a outra parte não entregue as ações ou não pague no prazo.",
        enunciado: "Nessa situação, a clearing house protege a operação porque:",
        alternativas: [
            "Devolve o dinheiro ao investidor prejudicado com recursos do FGC",
            "Cancela automaticamente a operação e aplica multa à corretora",
            "Transfere a responsabilidade para a CVM, que cobra a parte inadimplente",
            "Atua como contraparte central, garantindo a liquidação mesmo se uma das partes não cumprir"
        ],
        correta: 3
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        contexto: "Em uma madrugada de domingo, Bianca envia um Pix para pagar um conserto e o valor cai na conta do prestador em poucos segundos.",
        enunciado: "Sobre o sistema que processou essa operação, é correto afirmar que:",
        alternativas: [
            "É operado pela B3 e funciona apenas em dias úteis",
            "É operado pelos próprios bancos, sem participação do Banco Central",
            "É operado pelo Banco Central e liquida as operações em tempo real, todos os dias",
            "Compensa as operações ao fim do dia, pelo valor líquido"
        ],
        correta: 2
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        contexto: "Ao consultar seus investimentos, Tiago vê que suas ações estão registradas em seu nome em uma entidade responsável pela guarda dos ativos e pelo controle da titularidade.",
        enunciado: "A entidade descrita é o:",
        alternativas: [
            "Depositário central",
            "Banco comercial",
            "Fundo Garantidor de Créditos",
            "Comitê de Política Monetária"
        ],
        correta: 0
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        contexto: "Uma empresa faz uma operação de derivativos no mercado de balcão e precisa formalizar o registro dessa operação para dar transparência e segurança jurídica.",
        enunciado: "A instituição responsável por esse registro é a:",
        alternativas: [
            "Clearing house",
            "Corretora de seguros",
            "Entidade registradora",
            "Agência de fomento"
        ],
        correta: 2
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        contexto: "Ao comprar um título do Tesouro Direto, um investidor descobre que a custódia e a liquidação dos títulos públicos federais são feitas por um sistema específico.",
        enunciado: "Esse sistema é o:",
        alternativas: [
            "SPI, operado pela B3",
            "Selic, administrado pelo Banco Central",
            "FGC, administrado pelos bancos",
            "STR, administrado pela CVM"
        ],
        correta: 1
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        contexto: "Um investidor foi prejudicado por uma falha operacional de sua corretora na B3 e busca uma forma de ser ressarcido.",
        enunciado: "A entidade que administra o mecanismo de ressarcimento de prejuízos e supervisiona os participantes da B3 é a:",
        alternativas: [
            "ANBIMA",
            "SUSEP",
            "PREVIC",
            "BSM Supervisão de Mercados"
        ],
        correta: 3
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        contexto: "A quebra de um grande banco começa a gerar desconfiança em outras instituições, que passam a enfrentar saques em massa, mesmo estando saudáveis.",
        enunciado: "Essa situação caracteriza o risco:",
        alternativas: [
            "Sistêmico",
            "De crédito individual",
            "Não sistemático",
            "Operacional de uma única instituição"
        ],
        correta: 0
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        contexto: "Em uma aula sobre supervisão bancária, o professor explica que os bancos precisam manter capital suficiente para cobrir os riscos que assumem, seguindo recomendações internacionais.",
        enunciado: "O Índice de Basileia é calculado pela relação entre:",
        alternativas: [
            "O lucro e o patrimônio líquido do banco",
            "Os depósitos à vista e os depósitos a prazo",
            "O Patrimônio de Referência e os ativos ponderados pelo risco",
            "As reservas internacionais e a dívida pública"
        ],
        correta: 2
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        contexto: "Dois bancos têm carteiras de mesmo valor total, mas o primeiro concentra empréstimos de alto risco, e o segundo, títulos públicos federais.",
        enunciado: "Pelas regras de capital baseadas nos ativos ponderados pelo risco (RWA):",
        alternativas: [
            "Os dois bancos precisam manter o mesmo capital, pois as carteiras têm o mesmo valor",
            "O segundo banco precisa de mais capital, por ter mais títulos públicos",
            "Nenhum dos dois precisa manter capital, pois são supervisionados pelo Banco Central",
            "O primeiro banco precisa manter mais capital, por assumir riscos maiores"
        ],
        correta: 3
    },

    {
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        contexto: "Em um relatório, o Banco Central menciona um comitê interno que avalia os riscos para o sistema financeiro como um todo e define diretrizes para preservar sua estabilidade.",
        enunciado: "O comitê descrito é o:",
        alternativas: [
            "Copom",
            "Comef",
            "CMN",
            "CNSP"
        ],
        correta: 1
    },

    // ===================== GRUPO: ECONOMIA (18) =====================

    {
        grupo: "Economia",
        tema: "Fluxo circular de renda",
        contexto: "Em uma aula de introdução à economia, o professor desenha um diagrama com dois grupos principais, famílias e empresas, e setas mostrando o que circula entre eles.",
        enunciado: "A descrição correta do fluxo circular de renda é:",
        alternativas: [
            "As empresas fornecem fatores de produção às famílias, que pagam salários às empresas",
            "As famílias fornecem fatores de produção às empresas e recebem renda, que volta às empresas por meio do consumo",
            "O governo produz todos os bens e serviços e os distribui às famílias sem contrapartida",
            "Os bancos definem a renda das famílias conforme o volume de crédito concedido às empresas"
        ],
        correta: 1
    },

    {
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        contexto: "Uma grande empresa de logística precisa de recursos para construir novos centros de distribuição ao longo dos próximos dez anos. A diretoria decide emitir debêntures e vendê-las a investidores.",
        enunciado: "Essa operação acontece no:",
        alternativas: [
            "Mercado monetário",
            "Mercado de crédito",
            "Mercado de capitais",
            "Mercado de câmbio"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        contexto: "No fim do dia, um banco percebe que ficou com menos recursos do que precisava em caixa, enquanto outro banco ficou com sobra. Os dois fecham uma operação de um dia para equilibrar suas posições.",
        enunciado: "Essa operação acontece no:",
        alternativas: [
            "Mercado de crédito",
            "Mercado de câmbio",
            "Mercado de capitais",
            "Mercado monetário"
        ],
        correta: 3
    },

    {
        grupo: "Economia",
        tema: "Política fiscal",
        contexto: "Com a economia em recessão e o desemprego em alta, o governo federal anuncia a redução de impostos sobre a produção industrial e o aumento dos investimentos em obras de infraestrutura.",
        enunciado: "As medidas anunciadas caracterizam uma política:",
        alternativas: [
            "Monetária contracionista",
            "Fiscal expansionista",
            "Fiscal contracionista",
            "Cambial de valorização da moeda"
        ],
        correta: 1
    },

    {
        grupo: "Economia",
        tema: "Política fiscal",
        contexto: "Em uma aula sobre políticas econômicas, os alunos recebem uma lista de medidas e precisam identificar qual delas é um instrumento de política fiscal.",
        enunciado: "É instrumento de política fiscal:",
        alternativas: [
            "A alteração do depósito compulsório dos bancos",
            "A definição da meta da taxa Selic",
            "A mudança na alíquota do Imposto de Renda",
            "A realização de operações de swap cambial"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "Lei de Responsabilidade Fiscal",
        contexto: "Um novo prefeito assume o cargo e é alertado pela equipe técnica de que as despesas com funcionários já estão próximas do limite legal. A equipe cita a lei que estabelece esse controle.",
        enunciado: "Sobre a Lei de Responsabilidade Fiscal, é correto afirmar que:",
        alternativas: [
            "Limita gastos com pessoal e endividamento, exigindo planejamento e transparência de União, estados e municípios",
            "Define a meta de inflação a ser perseguida pelo Banco Central a cada ano",
            "Aplica-se apenas à União, sem efeito sobre estados e municípios",
            "Autoriza o Banco Central a financiar diretamente os gastos do Tesouro Nacional"
        ],
        correta: 0
    },

    {
        grupo: "Economia",
        tema: "Política monetária e Selic",
        contexto: "Um investidor que acompanha o noticiário econômico quer entender quem é responsável por definir a meta da taxa Selic e com que frequência essa decisão é tomada.",
        enunciado: "A meta da taxa Selic é definida pelo:",
        alternativas: [
            "Banco Central, em reuniões diárias da diretoria",
            "CMN, em reuniões mensais",
            "Copom, em reuniões realizadas oito vezes por ano",
            "Ministério da Fazenda, em reuniões trimestrais"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "Política monetária e Selic",
        contexto: "Com a inflação acima da meta por vários meses seguidos, o Copom decide elevar a taxa Selic em 1 ponto percentual.",
        enunciado: "O efeito esperado dessa decisão sobre a economia é:",
        alternativas: [
            "Aumento do crédito e do consumo, pressionando a inflação para cima",
            "Crédito mais caro, redução do consumo e desaceleração da inflação",
            "Queda imediata da rentabilidade das aplicações pós-fixadas",
            "Desvalorização do real, tornando os produtos importados mais baratos"
        ],
        correta: 1
    },

    {
        grupo: "Economia",
        tema: "Política monetária e Selic",
        contexto: "Após uma sequência de altas na taxa Selic, um analista explica que a decisão também afeta a cotação do dólar, e não apenas o crédito e o consumo.",
        enunciado: "O efeito da alta da Selic pelo canal do câmbio tende a ser:",
        alternativas: [
            "Saída de capital estrangeiro do país, com alta do dólar",
            "Aumento das exportações, por conta do real mais desvalorizado",
            "Nenhum efeito sobre o câmbio, que depende apenas da balança comercial",
            "Entrada de capital estrangeiro, valorização do real e produtos importados mais baratos"
        ],
        correta: 3
    },

    {
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        contexto: "A taxa de juros negociada entre os bancos começa a ficar abaixo da meta definida pelo Copom. Para corrigir a situação, o Banco Central passa a vender títulos públicos no mercado.",
        enunciado: "O instrumento utilizado e seu efeito são:",
        alternativas: [
            "Redesconto, aumentando a liquidez do sistema",
            "Depósito compulsório, ampliando a oferta de crédito",
            "Operações de mercado aberto, retirando dinheiro de circulação",
            "Swap cambial, reduzindo a cotação do dólar"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        contexto: "O Banco Central decide aumentar o percentual dos depósitos que os bancos são obrigados a manter recolhidos junto a ele.",
        enunciado: "O efeito esperado dessa medida é:",
        alternativas: [
            "Redução dos recursos disponíveis para empréstimo, com efeito contracionista",
            "Aumento dos recursos disponíveis para empréstimo, com efeito expansionista",
            "Redução automática da meta da taxa Selic",
            "Ampliação do limite de cobertura do FGC"
        ],
        correta: 0
    },

    {
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        contexto: "Um banco sólido enfrenta uma falta momentânea de caixa por causa de saques acima do esperado e recorre a um empréstimo de curtíssimo prazo diretamente com o Banco Central.",
        enunciado: "O instrumento utilizado nessa situação é:",
        alternativas: [
            "O depósito compulsório",
            "A operação de mercado aberto",
            "O swap cambial",
            "O redesconto"
        ],
        correta: 3
    },

    {
        grupo: "Economia",
        tema: "Política cambial",
        contexto: "Um turista estrangeiro pergunta a um guia brasileiro como o preço do dólar é definido no Brasil e se o governo controla essa cotação.",
        enunciado: "O regime cambial adotado pelo Brasil é o de:",
        alternativas: [
            "Câmbio fixo, com a cotação definida pelo governo",
            "Câmbio flutuante, com intervenções pontuais do Banco Central para reduzir a volatilidade",
            "Bandas cambiais rígidas, com limites definidos pelo CMN",
            "Câmbio totalmente livre, sem possibilidade de atuação do Banco Central"
        ],
        correta: 1
    },

    {
        grupo: "Economia",
        tema: "Política cambial",
        contexto: "Em um período de forte alta do dólar, o Banco Central anuncia a realização de leilões de swap cambial.",
        enunciado: "O objetivo dessa medida é:",
        alternativas: [
            "Vender dólares das reservas internacionais diretamente no mercado à vista",
            "Elevar a taxa Selic sem a necessidade de reunião do Copom",
            "Oferecer proteção contra a alta do dólar, sem uso direto das reservas internacionais",
            "Proibir temporariamente a compra de dólares por pessoas físicas"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "Política cambial",
        contexto: "Um investidor estrangeiro avalia aplicar recursos no Brasil e quer saber quanto ganharia, em dólares, com uma aplicação atrelada aos juros do mercado brasileiro.",
        enunciado: "Essa taxa é conhecida como:",
        alternativas: [
            "Cupom cambial",
            "Taxa Selic",
            "Taxa Referencial (TR)",
            "Taxa de redesconto"
        ],
        correta: 0
    },

    {
        grupo: "Economia",
        tema: "PIB e inflação",
        contexto: "Em uma reportagem sobre o crescimento econômico, o jornalista afirma que o PIB do país cresceu no último ano. Um leitor quer entender exatamente o que esse indicador mede.",
        enunciado: "O PIB corresponde à soma de:",
        alternativas: [
            "Todos os bens e serviços produzidos por empresas brasileiras, dentro e fora do país",
            "Todas as exportações realizadas pelo país no período",
            "Todos os bens e serviços finais produzidos dentro do território do país em determinado período",
            "Todos os bens intermediários e finais vendidos no país, incluindo os importados"
        ],
        correta: 2
    },

    {
        grupo: "Economia",
        tema: "PIB e inflação",
        contexto: "Ao estudar sobre inflação, Paulo descobre que existem vários índices de preços no Brasil, mas apenas um deles é usado como referência para o sistema de metas de inflação.",
        enunciado: "O índice oficial usado no sistema de metas de inflação é o:",
        alternativas: [
            "IPCA, calculado pelo IBGE",
            "IGP-M, calculado pela FGV",
            "INPC, calculado pelo Banco Central",
            "IPCA, calculado pela FGV"
        ],
        correta: 0
    },

    {
        grupo: "Economia",
        tema: "PIB e inflação",
        contexto: "Ao longo de um ano, Márcia manteve seus recursos em uma aplicação que rendeu 6%. No mesmo período, a inflação medida pelo IPCA foi de 7%.",
        enunciado: "Sobre o resultado da aplicação de Márcia, é correto afirmar que:",
        alternativas: [
            "Ela teve ganho real de 6%, pois a inflação não afeta o rendimento",
            "Ela teve ganho real de 13%, somando rendimento e inflação",
            "Ela manteve exatamente o mesmo poder de compra do início do ano",
            "Ela teve rendimento real negativo, perdendo poder de compra"
        ],
        correta: 3
    },

    // ===================== GRUPO: MATEMÁTICA FINANCEIRA (13) =====================

    {
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        contexto: "Um investidor aplicou em um título que rendeu 12% no ano. No mesmo período, a inflação foi de 5%.",
        enunciado: "A taxa de juros real obtida pelo investidor foi de aproximadamente:",
        alternativas: [
            "7,00%",
            "6,67%",
            "17,00%",
            "17,60%"
        ],
        correta: 1
    },

    {
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        contexto: "Um contrato informa uma taxa de 12% ao ano, com capitalização mensal. O cliente quer saber qual é a taxa efetiva que pagará no ano.",
        enunciado: "A taxa efetiva anual desse contrato é de aproximadamente:",
        alternativas: [
            "12,00%",
            "1,00%",
            "12,68%",
            "144,00%"
        ],
        correta: 2
    },

    {
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        contexto: "Ao analisar a rentabilidade de um CDB atrelado ao DI, um cliente percebe que a taxa é calculada de forma diferente de outras taxas que conhece, considerando apenas os dias em que há negociação.",
        enunciado: "No Brasil, as taxas DI e Selic são expressas em base anual de:",
        alternativas: [
            "360 dias corridos",
            "365 dias corridos",
            "30 dias por mês",
            "252 dias úteis"
        ],
        correta: 3
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Uma empresa avalia um projeto de expansão. Ao descontar todos os fluxos de caixa futuros pela taxa mínima de atratividade definida pela diretoria, o resultado encontrado foi um Valor Presente Líquido positivo.",
        enunciado: "Com base nesse resultado, a decisão mais adequada é:",
        alternativas: [
            "Rejeitar o projeto, pois o VPL positivo indica prejuízo",
            "Aceitar o projeto, pois ele remunera o capital acima da taxa mínima exigida",
            "Rejeitar o projeto, pois o retorno ficou abaixo da taxa mínima exigida",
            "Adiar a decisão, pois o VPL não serve para avaliar projetos"
        ],
        correta: 1
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Antes de avaliar novos projetos, o diretor financeiro de uma empresa define a taxa de retorno mínima que qualquer investimento precisa oferecer para ser considerado.",
        enunciado: "Essa taxa é conhecida como:",
        alternativas: [
            "Taxa Mínima de Atratividade (TMA)",
            "Taxa Referencial (TR)",
            "Taxa de juros nominal",
            "Taxa de redesconto"
        ],
        correta: 0
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Luana aplicou R$ 10.000,00 em um investimento que rende 1% ao mês, no regime de juros compostos, e pretende resgatar tudo após 12 meses.",
        enunciado: "O valor aproximado que Luana terá ao final do período é de:",
        alternativas: [
            "R$ 11.000,00",
            "R$ 11.200,00",
            "R$ 12.000,00",
            "R$ 11.268,25"
        ],
        correta: 3
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Uma empresa receberá R$ 11.000,00 daqui a um ano. O gestor quer saber quanto esse valor representa hoje, considerando uma taxa de desconto de 10% ao ano.",
        enunciado: "O valor presente desse recebimento é de:",
        alternativas: [
            "R$ 9.900,00",
            "R$ 11.000,00",
            "R$ 10.000,00",
            "R$ 12.100,00"
        ],
        correta: 2
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Um empreendedor investiu R$ 50.000,00 em um novo equipamento e, ao final do período analisado, obteve um lucro de R$ 10.000,00 com essa aplicação.",
        enunciado: "O retorno sobre o investimento (ROI) obtido foi de:",
        alternativas: [
            "20%",
            "10%",
            "25%",
            "50%"
        ],
        correta: 0
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Uma empresa financia suas atividades com recursos dos sócios e com empréstimos bancários. O diretor financeiro quer calcular um único custo que represente o total dos recursos utilizados.",
        enunciado: "O indicador que representa esse custo é o:",
        alternativas: [
            "Valor Presente Líquido, que soma os fluxos futuros descontados",
            "Payback, que mede o tempo de recuperação do capital",
            "Custo Médio Ponderado de Capital (WACC), que pondera o custo do capital próprio e de terceiros",
            "ROI, que mede o lucro em relação ao valor investido"
        ],
        correta: 2
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Um investidor decide tomar um empréstimo para ampliar o valor aplicado em ações, apostando que os preços vão subir.",
        enunciado: "Sobre essa estratégia de alavancagem, é correto afirmar que:",
        alternativas: [
            "Elimina o risco da operação, pois o empréstimo protege contra quedas",
            "Amplia os ganhos em caso de alta, mas também amplia as perdas em caso de queda",
            "Reduz o retorno potencial, pois parte do lucro vai para os juros",
            "Só produz efeito em aplicações de renda fixa"
        ],
        correta: 1
    },

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        contexto: "Uma empresa investiu R$ 60.000,00 em uma máquina que gera uma economia de R$ 15.000,00 por ano.",
        enunciado: "O payback simples desse investimento é de:",
        alternativas: [
            "3 anos",
            "5 anos",
            "6 anos",
            "4 anos"
        ],
        correta: 3
    },

    {
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        contexto: "Ao simular um financiamento imobiliário pelo Sistema de Amortização Constante (SAC), Bruno percebe que as parcelas mudam ao longo do contrato.",
        enunciado: "No SAC, o comportamento das parcelas é:",
        alternativas: [
            "Decrescente, pois a amortização é constante e os juros diminuem a cada mês",
            "Constante do início ao fim do contrato",
            "Crescente, pois os juros aumentam a cada mês",
            "Decrescente, pois a amortização diminui a cada mês"
        ],
        correta: 0
    },

    {
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        contexto: "Ao financiar um carro pela Tabela Price, Ana nota que o valor da parcela é o mesmo do começo ao fim do contrato.",
        enunciado: "Na Tabela Price, ao longo do tempo:",
        alternativas: [
            "A amortização é constante, e os juros são crescentes",
            "A amortização e os juros permanecem constantes",
            "A amortização é crescente, e os juros são decrescentes",
            "A amortização é decrescente, e os juros são crescentes"
        ],
        correta: 2
    },

    // ===================== GRUPO: INVESTIDORES E RISCOS (7) =====================

    {
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        contexto: "Fernando possui R$ 1,5 milhão em aplicações financeiras e assina uma declaração atestando essa condição. O gerente informa que, com isso, ele passa a ter acesso a produtos antes indisponíveis para ele.",
        enunciado: "Com base nessas informações, Fernando pode ser classificado como investidor:",
        alternativas: [
            "Profissional",
            "Qualificado",
            "Não residente",
            "De varejo, sem mudança de classificação"
        ],
        correta: 1
    },

    {
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        contexto: "Uma empresária possui R$ 12 milhões em aplicações financeiras e declara essa condição por escrito à instituição onde investe.",
        enunciado: "Com base nessas informações, ela pode ser classificada como investidora:",
        alternativas: [
            "Qualificada, pois o limite para profissional é de R$ 50 milhões",
            "De varejo, pois a classificação depende apenas de certificação",
            "Não residente",
            "Profissional"
        ],
        correta: 3
    },

    {
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        contexto: "Um fundo de pensão da Europa decide investir em ações de empresas brasileiras por meio da B3.",
        enunciado: "Para realizar esses investimentos, o investidor estrangeiro precisa:",
        alternativas: [
            "Abrir conta diretamente no Banco Central, sem intermediários",
            "Constituir um representante no Brasil, responsável por suas obrigações perante os órgãos reguladores",
            "Adquirir cidadania brasileira antes de operar no mercado",
            "Investir exclusivamente em títulos públicos federais"
        ],
        correta: 1
    },

    {
        grupo: "Investidores e riscos",
        tema: "Riscos",
        contexto: "Carla tem toda a sua carteira investida em ações de uma única empresa. Um analista sugere distribuir os recursos entre ações de empresas de setores diferentes.",
        enunciado: "Com essa diversificação, Carla reduz principalmente o risco:",
        alternativas: [
            "Sistemático, ligado a fatores que afetam todo o mercado",
            "De mercado, eliminando qualquer oscilação da carteira",
            "Não sistemático, ligado a fatores específicos de cada empresa",
            "De crédito dos títulos públicos federais"
        ],
        correta: 2
    },

    {
        grupo: "Investidores e riscos",
        tema: "Riscos",
        contexto: "Em uma aula sobre carteiras de investimento, o professor apresenta a teoria de Markowitz e explica como combinar ativos de forma eficiente.",
        enunciado: "Segundo essa teoria, é possível reduzir o risco de uma carteira:",
        alternativas: [
            "Combinando ativos com baixa correlação entre si",
            "Concentrando os recursos no ativo de maior retorno",
            "Escolhendo ativos que sobem e caem sempre juntos",
            "Mantendo todos os recursos em um único ativo de baixo risco"
        ],
        correta: 0
    },

    {
        grupo: "Investidores e riscos",
        tema: "Riscos",
        contexto: "Um investidor comprou debêntures de uma empresa do setor de varejo. Meses depois, a empresa anuncia dificuldades financeiras e atrasa o pagamento dos juros.",
        enunciado: "O risco que se materializou para o investidor foi o risco de:",
        alternativas: [
            "Liquidez",
            "Mercado",
            "Sistêmico",
            "Crédito"
        ],
        correta: 3
    },

    {
        grupo: "Investidores e riscos",
        tema: "Riscos",
        contexto: "Rafael precisa vender com urgência as cotas de um fundo imobiliário pouco negociado, mas encontra poucos compradores e só consegue vender aceitando um preço bem abaixo do esperado.",
        enunciado: "O risco que Rafael enfrentou foi o risco de:",
        alternativas: [
            "Crédito",
            "Liquidez",
            "Mercado",
            "Contraparte"
        ],
        correta: 1
    },

    // ===================== GRUPO: REGULAÇÃO E CONDUTA (9) =====================

    {
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        contexto: "Juliano tem um financiamento em um banco com taxa de juros alta. Outro banco oferece assumir a dívida com uma taxa menor.",
        enunciado: "Sobre a portabilidade de crédito, é correto afirmar que:",
        alternativas: [
            "Juliano precisa quitar a dívida com recursos próprios antes de transferir",
            "A transferência depende da autorização do banco de origem, que pode recusá-la",
            "Juliano pode transferir a dívida sem custo, e o banco de origem pode fazer uma contraproposta",
            "A portabilidade só é permitida para financiamentos imobiliários"
        ],
        correta: 2
    },

    {
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        contexto: "Helena quer trocar de corretora, mas não quer vender suas ações e títulos para transferir os recursos.",
        enunciado: "A solução adequada para Helena é a:",
        alternativas: [
            "Portabilidade de custódia, que transfere os ativos sem necessidade de venda",
            "Portabilidade de crédito, que transfere os investimentos para outro banco",
            "Venda de todos os ativos e compra novamente na nova corretora",
            "Transferência feita pelo FGC entre as instituições"
        ],
        correta: 0
    },

    {
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        contexto: "Ao abrir conta em um banco digital, Pedro recebe a proposta de compartilhar seu histórico financeiro do banco antigo para conseguir um limite de crédito melhor.",
        enunciado: "No open finance, o compartilhamento dos dados de Pedro:",
        alternativas: [
            "Acontece automaticamente, sem necessidade de autorização",
            "É feito pelo Banco Central, que repassa os dados a todas as instituições",
            "É obrigatório para quem quer abrir conta em banco digital",
            "Depende do consentimento de Pedro, que escolhe quais dados e por quanto tempo compartilhar"
        ],
        correta: 3
    },

    {
        grupo: "Regulação e conduta",
        tema: "Lei de Liberdade Econômica",
        contexto: "Um pequeno empreendedor quer abrir uma atividade de baixo risco e descobre que, por causa de uma lei de 2019, não precisa de alvará para começar a funcionar.",
        enunciado: "Entre os princípios da Lei de Liberdade Econômica está:",
        alternativas: [
            "A intervenção do Estado como regra nas atividades econômicas",
            "A presunção de boa-fé do particular perante o Estado",
            "A exigência de autorização prévia para qualquer atividade",
            "A obrigação de o Estado definir os preços praticados pelas empresas"
        ],
        correta: 1
    },

    {
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        contexto: "Antes de recomendar investimentos a uma nova cliente, a gerente aplica um questionário para identificar o perfil dela.",
        enunciado: "Para definir o perfil do investidor, a instituição deve considerar:",
        alternativas: [
            "Os objetivos de investimento, a situação financeira e o conhecimento do cliente",
            "Apenas o valor que o cliente pretende investir",
            "Apenas a idade e a profissão do cliente",
            "A rentabilidade que a instituição deseja obter com o cliente"
        ],
        correta: 0
    },

    {
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        contexto: "Um cliente com perfil conservador insiste em aplicar parte relevante de seus recursos em um fundo de ações, produto inadequado ao seu perfil.",
        enunciado: "Nessa situação, a instituição deve:",
        alternativas: [
            "Recusar a aplicação, pois é proibido investir fora do perfil",
            "Alterar o perfil do cliente para agressivo sem novo questionário",
            "Realizar a aplicação normalmente, sem nenhum registro",
            "Alertar o cliente sobre o desenquadramento e obter sua declaração expressa de ciência"
        ],
        correta: 3
    },

    {
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        contexto: "Uma instituição atualiza periodicamente o cadastro de seus clientes, verificando dados pessoais, renda, patrimônio e a origem dos recursos aplicados.",
        enunciado: "Esse procedimento está relacionado principalmente ao processo de:",
        alternativas: [
            "Suitability, que define o produto mais rentável",
            "Conheça seu Cliente (KYC), que também apoia a prevenção à lavagem de dinheiro",
            "Portabilidade de custódia",
            "Análise de payback do cliente"
        ],
        correta: 1
    },

    {
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        contexto: "Uma distribuidora prepara um material publicitário para divulgar um fundo de investimento com ótimo desempenho nos últimos anos.",
        enunciado: "De acordo com as regras de publicidade, o material deve:",
        alternativas: [
            "Garantir ao investidor que a rentabilidade passada se repetirá",
            "Destacar apenas os pontos positivos do fundo, omitindo os riscos",
            "Usar linguagem clara e informar que rentabilidade passada não é garantia de rentabilidade futura",
            "Ser aprovado previamente pelo Banco Central"
        ],
        correta: 2
    },

    {
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        contexto: "Ao aplicar em um fundo recomendado pelo gerente, um cliente pergunta se a instituição ganha algo por distribuir aquele produto.",
        enunciado: "Sobre a remuneração da instituição distribuidora, é correto afirmar que:",
        alternativas: [
            "É sigilosa e não pode ser informada ao cliente",
            "Só pode existir em produtos isentos de Imposto de Renda",
            "É proibida em qualquer produto de investimento",
            "Deve ser informada de forma transparente ao investidor"
        ],
        correta: 3
    }

];