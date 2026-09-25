// ===== DOMINA — QUESTÕES CPA (4 módulos) =====
// id: identificador único (usado para salvar anotações e avaliações) | curso: "cpa" ou "cpror"
// modulo | grupo: usado no sorteio | tema | nivel: fácil, médio ou difícil
// correta: 0 = A, 1 = B, 2 = C, 3 = D

const questoes = [

    // ===================== MÓDULO 1 — GRUPO: ESTRUTURA DO SFN (20) =====================

    {
        id: "CPA-M1-001",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "fácil",
        contexto: "Em uma aula de introdução ao mercado financeiro para uma turma de administração, o professor explica que a intermediação financeira conecta quem tem recursos sobrando a quem precisa deles. Para fixar o conteúdo, ele apresenta quatro situações do dia a dia de pessoas e empresas e pede que os alunos identifiquem qual delas representa um agente deficitário.",
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
        id: "CPA-M1-002",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "fácil",
        contexto: "Rafael, 21 anos, é estudante de economia e está montando um resumo sobre o Conselho Monetário Nacional para uma apresentação na faculdade. O professor avisou que vai descontar pontos de quem usar informações desatualizadas, já que a composição do conselho mudou ao longo dos anos. Ele precisa informar corretamente quais autoridades participam das reuniões e votam as resoluções.",
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
        id: "CPA-M1-003",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "fácil",
        contexto: "Pedro, 35 anos, é vendedor e adquiriu, na agência do banco, um título de capitalização oferecido com a promessa de sorteios mensais de até R$ 50 mil. Após um ano pagando R$ 200,00 por mês, ele descobre que o valor de resgate é inferior ao total pago e quer saber qual entidade supervisiona a empresa que emitiu o título.",
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
        id: "CPA-M1-004",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "fácil",
        contexto: "Marcos, 48 anos, trabalha há 20 anos em uma grande indústria que oferece aos funcionários um plano de previdência exclusivo, administrado por uma fundação criada pela própria empresa. Após ler o relatório anual do plano, ele desconfia de irregularidades na gestão dos recursos e quer levar o caso à entidade responsável pela fiscalização.",
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
        id: "CPA-M1-005",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "Banco Central",
        nivel: "fácil",
        contexto: "Joana, 39 anos, é professora e associada há cinco anos de uma cooperativa de crédito em sua cidade. Ao revisar o extrato, percebeu cobranças de tarifas que considera abusivas, que não constavam na tabela apresentada quando se associou. Antes de registrar uma reclamação formal, ela pesquisa qual órgão é responsável por autorizar o funcionamento e fiscalizar esse tipo de instituição.",
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
        id: "CPA-M1-006",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "médio",
        contexto: "Seu Valdir, 57 anos, é pequeno produtor rural e tem um CDB na cooperativa onde é associado há anos. Ao conversar com o vizinho, descobre que ele pagou juros bem mais altos em um crédito rural na mesma cooperativa. Intrigado, pergunta a Ana, profissional certificada CPA, por que a instituição paga juros no CDB dele e, ao mesmo tempo, cobra juros mais altos no crédito do vizinho.",
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
        id: "CPA-M1-007",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "médio",
        contexto: "Alexandre, 46 anos, é empresário e tem seguros do carro, da casa e da empresa na mesma seguradora. Ele leu uma notícia sobre uma nova regra para o mercado de seguros e ficou em dúvida sobre como ela o afeta. Pergunta ao gerente, certificado CPA, quem criou a regra, quem vai fiscalizar o seu cumprimento e onde a seguradora dele se encaixa nessa estrutura.",
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
        id: "CPA-M1-008",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "médio",
        contexto: "Durante uma reunião de revisão da carteira, Dona Lourdes, 61 anos, professora aposentada, comenta com o gerente, certificado CPA, que leu em um portal de notícias que o Banco Central decidiu qual será a meta de inflação do país. Por isso, diz ela, o Banco Central é o responsável por defini-la e deveria ser cobrado quando a meta muda.",
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
        id: "CPA-M1-009",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CMN",
        nivel: "médio",
        contexto: "Bruno, 34 anos, é engenheiro de software e já fundou duas startups de tecnologia. Agora quer abrir uma instituição financeira voltada ao crédito digital para pequenas empresas e procura uma consultora certificada CPA. Ele quer entender quem define as regras de constituição e funcionamento e quem analisa e aprova o pedido de autorização.",
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
        id: "CPA-M1-010",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "médio",
        contexto: "Carla, 42 anos, é gerente de marketing e contratou um plano PGBL em uma seguradora há seis anos. Após ler sobre uma mudança nas regras de portabilidade de planos de previdência, ela quer entender a quem recorrer em caso de problemas. Pergunta ao gerente, certificado CPA, quais entidades criaram a nova norma e quais fiscalizam a seguradora.",
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
        id: "CPA-M1-011",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNSP e SUSEP",
        nivel: "médio",
        contexto: "Sílvia, 50 anos, é comerciante e recebeu uma ligação oferecendo um seguro de vida com mensalidade baixa e cobertura alta. O vendedor pediu que ela fechasse o contrato no mesmo dia. Antes de contratar, Sílvia pede orientação a um profissional certificado CPA, pois quer confirmar se a seguradora está autorizada a funcionar e se o corretor que a atendeu é habilitado.",
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
        id: "CPA-M1-012",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "médio",
        contexto: "Em uma palestra sobre previdência promovida por um sindicato, o palestrante apresenta a estrutura de regulação do setor. Ele explica que os conselhos normativos de seguros privados e de previdência complementar fechada são presididos por autoridades de ministérios diferentes. Um participante, que trabalha no RH de uma empresa, anota a informação para revisar depois.",
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
        id: "CPA-M1-013",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CVM",
        nivel: "médio",
        contexto: "O diretor financeiro de uma companhia aberta do setor de alimentos vai emitir R$ 500 milhões em debêntures para financiar uma nova fábrica no interior de Goiás. Como é a primeira emissão da empresa, ele pede ao gerente do banco coordenador, certificado CPA, que explique quem regula e fiscaliza a operação.",
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
        id: "CPA-M1-014",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CVM",
        nivel: "médio",
        contexto: "Ao atender um cliente de 55 anos na agência, Lucas, gerente de relacionamento, explica a diferença entre produtos bancários e valores mobiliários. O cliente, que é médico, possui aplicações em poupança, CDB, títulos do Tesouro Direto e cotas de um fundo de investimento, e quer saber qual delas se enquadra como valor mobiliário.",
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
        id: "CPA-M1-015",
        curso: "cpa",
        modulo: 1,
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
        id: "CPA-M1-016",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "SFN",
        nivel: "difícil",
        contexto: "Paulo, 51 anos, é engenheiro de uma empresa de energia, participa do fundo de pensão da empresa, tem um plano VGBL contratado em uma seguradora e aplica em um fundo multimercado distribuído pelo seu banco. Depois de ler notícias sobre problemas no mercado, ele suspeita de irregularidades nos três produtos e quer levar cada caso à entidade supervisora correta.",
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
        id: "CPA-M1-017",
        curso: "cpa",
        modulo: 1,
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
        id: "CPA-M1-018",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "Banco Central",
        nivel: "difícil",
        contexto: "Durante uma reunião, Evandro, 58 anos, investidor experiente, comenta com o assessor, certificado CPA, que leu opiniões nas redes sociais sobre a autonomia do Banco Central. Segundo ele, com a autonomia, o Banco Central deixou de seguir o CMN, e o presidente do BC agora fica no cargo enquanto o Presidente da República quiser.",
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
        id: "CPA-M1-019",
        curso: "cpa",
        modulo: 1,
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
        id: "CPA-M1-020",
        curso: "cpa",
        modulo: 1,
        grupo: "Estrutura do SFN",
        tema: "CNPC e PREVIC",
        nivel: "difícil",
        contexto: "O fundo de pensão dos funcionários de uma estatal apresenta déficit grave causado por má gestão, e os participantes foram avisados de que terão de fazer contribuições extras. Dona Ivone, 60 anos, participante do plano, diz ao gerente, certificado CPA, que está tranquila, pois a SUSEP vai intervir no fundo e o FGC garante até R$ 250 mil de cada participante.",
        enunciado: "Para corrigir o entendimento da participante, o gerente deve explicar que:",
        alternativas: [
            "a SUSEP pode decretar a intervenção, e os recursos contam com a garantia do FGC até R$ 250 mil",
            "a PREVIC pode decretar intervenção ou liquidação extrajudicial, e os recursos não têm garantia do FGC",
            "a PREVIC pode decretar a intervenção, e os recursos contam com a garantia do FGC até R$ 250 mil",
            "o Banco Central pode decretar a intervenção, e os recursos não têm garantia do FGC"
        ],
        correta: 1
    },

    // ===================== MÓDULO 1 — GRUPO: INSTITUIÇÕES FINANCEIRAS (15) =====================

    {
        id: "CPA-M1-021",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        nivel: "fácil",
        contexto: "Um grupo de 40 pequenos agricultores de uma mesma região do Paraná, cansados de pagar juros altos em bancos distantes, quer criar uma instituição financeira própria. Eles desejam ser, ao mesmo tempo, donos e clientes do negócio, decidir os rumos em assembleia e dividir entre si os resultados positivos do ano.",
        enunciado: "O tipo de instituição do SFN que atende a esse modelo é:",
        alternativas: [
            "Banco de investimento",
            "Agência de fomento",
            "Cooperativa de crédito",
            "Sociedade de crédito, financiamento e investimento"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-022",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        nivel: "fácil",
        contexto: "Fernanda, 20 anos, cursa Administração e está fazendo um trabalho sobre bancos públicos para a disciplina de Mercado Financeiro. Na pesquisa, ela encontrou informações sobre o Banco do Brasil, o BNDES e a Caixa Econômica Federal, e precisa diferenciar corretamente a Caixa das demais instituições ligadas ao governo federal.",
        enunciado: "A descrição correta da Caixa Econômica Federal é:",
        alternativas: [
            "Sociedade de economia mista, com ações negociadas na bolsa e controle da União",
            "Empresa pública que opera o FGTS e lidera os programas habitacionais do governo",
            "Autarquia federal responsável por fiscalizar os bancos públicos e seus programas sociais",
            "Banco de desenvolvimento voltado ao financiamento de grandes projetos de infraestrutura"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-023",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Fintechs",
        nivel: "fácil",
        contexto: "Três sócios, com experiência em tecnologia e análise de dados, querem lançar uma startup que concede empréstimos pela internet a profissionais autônomos. Eles pretendem usar apenas o capital próprio dos sócios, sem captar recursos do público. Antes de começar, pesquisam qual autorização devem pedir ao Banco Central.",
        enunciado: "O modelo de instituição adequado para essa operação é:",
        alternativas: [
            "Sociedade de Empréstimo entre Pessoas (SEP)",
            "Instituição de pagamento emissora de moeda eletrônica",
            "Banco comercial",
            "Sociedade de Crédito Direto (SCD)"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-024",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Fomento e microcrédito",
        nivel: "fácil",
        contexto: "Dona Sônia vende salgados em uma feira e quer comprar um forno maior. Ela não tem comprovante de renda formal nem bens para dar em garantia. Um agente de crédito visita a feira, analisa o negócio pessoalmente e apresenta uma linha específica para esse perfil.",
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
        id: "CPA-M1-025",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "médio",
        contexto: "A diretoria de uma indústria de médio porte planeja abrir o capital na bolsa em alguns anos e, até lá, precisa de recursos de longo prazo para ampliar a fábrica. O diretor financeiro pede ao gerente, certificado CPA, uma indicação de instituição especializada nessas operações.",
        enunciado: "O gerente deve indicar:",
        alternativas: [
            "o banco comercial, que capta depósitos à vista e, por isso, é especializado em financiamentos longos e ofertas de ações",
            "o banco de investimento, que capta recursos a prazo, financia projetos de médio e longo prazo e estrutura ofertas de ações",
            "o banco de investimento, que capta depósitos à vista e usa esses recursos para financiar projetos de longo prazo",
            "a sociedade de crédito imobiliário, especializada em financiar a construção e a ampliação de imóveis industriais"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-026",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "médio",
        contexto: "Rodrigo, 37 anos, é arquiteto e tem conta corrente em um grande banco há dez anos. Ao navegar pelo aplicativo, percebe que a mesma instituição também oferece financiamento imobiliário, leasing de veículos e fundos de investimento. Curioso, pergunta ao gerente, certificado CPA, como uma única instituição pode atuar em tantas áreas.",
        enunciado: "O gerente deve explicar que o banco é:",
        alternativas: [
            "comercial, autorizado a operar qualquer carteira desde que mantenha a captação de depósitos à vista",
            "múltiplo, operando ao menos duas carteiras, sendo uma obrigatoriamente de crédito imobiliário",
            "um conjunto de empresas independentes, cada uma autorizada pela CVM a oferecer um produto",
            "múltiplo, operando ao menos duas carteiras, sendo uma obrigatoriamente comercial ou de investimento"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-027",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        nivel: "médio",
        contexto: "Marcelo, 55 anos, é empresário e acabou de se associar a uma cooperativa de crédito, integralizando muitas cotas-parte, embora movimente pouco a conta. Na primeira assembleia de que participa, pergunta à gerente, certificada CPA, como serão divididas as sobras do ano e quanto vale o voto dele, considerando o capital que investiu.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "as sobras são distribuídas conforme as cotas-parte, e o peso do voto é proporcional ao capital investido",
            "as sobras são distribuídas conforme as operações de cada associado, e cada associado tem direito a um voto",
            "as sobras são distribuídas conforme as operações, mas o peso do voto é proporcional às cotas-parte",
            "as sobras são divididas igualmente entre todos, e o voto é exclusivo dos membros do conselho"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-028",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        nivel: "médio",
        contexto: "Lucas, 28 anos, é entregador e recebe o salário em uma conta de pagamento de um aplicativo autorizado pelo Banco Central como instituição de pagamento. Ele mantém cerca de R$ 6 mil na conta. Preocupado com notícias sobre dificuldades da empresa, pergunta a uma profissional certificada CPA se o dinheiro estaria protegido em caso de quebra.",
        enunciado: "A profissional deve explicar que os recursos:",
        alternativas: [
            "contam com a garantia do FGC até R$ 250 mil, assim como os depósitos em conta corrente bancária",
            "não contam com o FGC e podem ser usados pela instituição para pagar suas dívidas em caso de quebra",
            "não contam com o FGC, mas ficam em patrimônio separado, depositados no Banco Central ou em títulos públicos",
            "contam com a garantia do FGCoop, por se tratar de uma instituição de pagamento autorizada pelo Banco Central"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-029",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Financiamento e leasing",
        nivel: "médio",
        contexto: "Sr. Adilson, 49 anos, é dono de uma transportadora com cinco caminhões e precisa de um novo veículo para atender um contrato recente. Ele compara duas propostas com parcelas parecidas: um financiamento e um contrato de leasing. Pede ao gerente, certificado CPA, que explique a diferença entre as duas quanto à propriedade do caminhão.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "no financiamento, o bem é do cliente e fica alienado; no leasing, pertence à arrendadora, com opção de compra ao final",
            "no financiamento, o bem pertence à instituição até a quitação; no leasing, é do cliente desde a assinatura do contrato",
            "no financiamento, o bem é do cliente e fica alienado; no leasing, também é do cliente, mudando só a taxa",
            "no financiamento, o bem é do cliente sem garantia; no leasing, é da arrendadora, com compra obrigatória ao final"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-030",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Fomento e microcrédito",
        nivel: "médio",
        contexto: "O prefeito de uma cidade do interior, com cerca de 30 mil habitantes, quer mudar o banco que paga os salários dos servidores. Ele procura um consultor certificado CPA para saber se a agência de fomento do estado, que já financiou obras no município, poderia abrir contas correntes para receber a folha de pagamento dos servidores municipais.",
        enunciado: "O consultor deve explicar que:",
        alternativas: [
            "sim, pois as agências de fomento captam depósitos à vista, assim como os bancos comerciais",
            "não, pois as agências de fomento não captam recursos do público e financiam projetos no estado",
            "não, pois as agências de fomento são supervisionadas pela CVM e operam só no mercado de capitais",
            "sim, desde que os recursos das contas sejam usados exclusivamente em crédito imobiliário"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-031",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Consórcio",
        nivel: "médio",
        contexto: "Aline, 33 anos, é esteticista e quer trocar de carro, mas não tem pressa em receber o veículo e não gosta da ideia de pagar juros de financiamento. Uma amiga sugeriu o consórcio, e ela recebeu uma proposta de uma administradora. Pede a um profissional certificado CPA que explique como funciona o consórcio.",
        enunciado: "O profissional deve explicar que, no consórcio:",
        alternativas: [
            "não há juros, mas há taxa de administração; a contemplação é por sorteio ou lance; e o Banco Central supervisiona",
            "não há juros nem taxas, pois o participante paga apenas o valor do bem dividido pelo número de meses do grupo",
            "há juros menores que no financiamento, e a contemplação segue a ordem de adesão de cada participante ao grupo",
            "não há juros, mas há taxa de administração; a contemplação é só por lance; e a SUSEP supervisiona"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-032",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "difícil",
        contexto: "Felipe, diretor financeiro de uma empresa de logística, teve um ano de resultados recordes, com melhora na liquidez e redução do endividamento. Ao cotar uma nova linha de capital de giro, porém, recebe uma taxa bem mais alta do que a de uma linha idêntica contratada no ano anterior. A gerente, certificada CPA, confirma que o spread de risco da empresa até diminuiu, mas que a taxa básica de juros subiu bastante no período.",
        enunciado: "A explicação técnica correta para o encarecimento da linha é:",
        alternativas: [
            "a taxa final depende só do risco de crédito do cliente; se ela subiu, o banco passou a considerar a empresa mais arriscada",
            "a taxa final de cada linha é fixada pelo CMN, e a alta decorre da nova tabela de juros divulgada pelo conselho",
            "a taxa final repassa integralmente a inflação passada, e a alta decorre da correção obrigatória dos últimos doze meses",
            "a taxa final soma o custo de captação e o spread; a alta dos juros básicos elevou o custo de captação mais do que o spread caiu"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-033",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Consórcio",
        nivel: "difícil",
        contexto: "Tiago quer um carro de R$ 60.000,00 e compara duas opções. No consórcio, o plano tem 60 meses e taxa de administração total de 15% sobre o valor do bem. No financiamento, o carro é entregue na hora, com 60 parcelas fixas de R$ 1.450,00. Desconsidere fundo de reserva, seguros e reajustes.",
        enunciado: "Comparando apenas os valores informados, o profissional CPA deve explicar que:",
        alternativas: [
            "o consórcio custará R$ 60.000,00, pois não tem juros, cerca de R$ 27.000,00 a menos, com o carro na adesão",
            "o consórcio custará R$ 69.000,00, cerca de R$ 18.000,00 a menos, e o carro será entregue já na adesão",
            "o consórcio custará R$ 69.000,00, cerca de R$ 18.000,00 a menos, mas o carro só virá com a contemplação",
            "o financiamento custará R$ 87.000,00 e será mais vantajoso, pois seus juros são menores que a taxa de administração"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-034",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Crédito imobiliário",
        nivel: "difícil",
        contexto: "Renato quer financiar um imóvel de alto padrão cujo valor ultrapassa o teto do Sistema Financeiro da Habitação. Ele pretende usar o saldo do FGTS na entrada e acredita que, por isso, terá acesso às taxas limitadas do SFH. O gerente, certificado CPA, precisa corrigir esse entendimento.",
        enunciado: "O gerente deve explicar que o financiamento:",
        alternativas: [
            "seguirá o SFI, com taxa livremente negociada e sem uso do FGTS, permitido apenas para imóveis enquadrados no SFH",
            "seguirá o SFH, pois o uso do FGTS enquadra automaticamente o imóvel no sistema, independentemente do valor",
            "seguirá o SFI, com taxa limitada por lei e possibilidade de usar o FGTS para amortizar o saldo devedor",
            "seguirá o SFH com taxa livremente negociada, mas o FGTS não poderá ser usado por causa do valor elevado do imóvel"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-035",
        curso: "cpa",
        modulo: 1,
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "difícil",
        contexto: "Em um treinamento para novos funcionários de um banco, o instrutor explica a criação de moeda escritural com um exemplo: um cliente deposita R$ 1.000,00 à vista, o banco recolhe 20% como depósito compulsório e empresta o restante, que é depositado em outro banco, e assim sucessivamente. Ele pede que a turma calcule o efeito total.",
        enunciado: "Considerando que os bancos emprestam todo o valor livre, o total máximo de depósitos gerado no sistema a partir do depósito inicial é de:",
        alternativas: [
            "R$ 800,00, pois o banco só pode emprestar o valor que sobra após o recolhimento do compulsório",
            "R$ 4.000,00, pois o efeito multiplicador se aplica apenas aos valores emprestados, sem o depósito inicial",
            "R$ 5.000,00, pois cada empréstimo volta como novo depósito, até o limite dado por 1 dividido por 0,20",
            "R$ 1.200,00, pois o valor recolhido como compulsório é somado ao depósito inicial do cliente"
        ],
        correta: 2
    },

    // ===================== MÓDULO 1 — GRUPO: MERCADO DE CAPITAIS (11) =====================

    {
        id: "CPA-M1-036",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        nivel: "fácil",
        contexto: "Lívia, 22 anos, estudante de Economia, começou o estágio em uma distribuidora de títulos e valores mobiliários. No primeiro dia, ouviu várias vezes, em reuniões e treinamentos, que a instituição precisa seguir os códigos da ANBIMA. Com dúvida, pergunta ao supervisor que tipo de entidade é essa.",
        enunciado: "A ANBIMA é uma:",
        alternativas: [
            "Autarquia federal vinculada ao Ministério da Fazenda",
            "Associação privada que atua na autorregulação do mercado",
            "Entidade normativa que integra o Conselho Monetário Nacional",
            "Diretoria do Banco Central dedicada aos fundos"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-037",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "Apimec, Planejar e Ancord",
        nivel: "fácil",
        contexto: "Em uma feira de carreiras do mercado financeiro, estudantes visitam estandes de várias entidades. Três delas, Apimec, Planejar e Ancord, apresentam suas certificações profissionais e os benefícios para quem as obtém. Guilherme, estudante de Finanças, tenta associar cada entidade ao profissional que ela certifica.",
        enunciado: "A associação correta é:",
        alternativas: [
            "Apimec: planejadores financeiros; Planejar: assessores de investimento; Ancord: analistas de valores mobiliários",
            "Apimec: assessores de investimento; Planejar: analistas de valores mobiliários; Ancord: planejadores financeiros",
            "Apimec: analistas de valores mobiliários; Planejar: planejadores financeiros; Ancord: assessores de investimento",
            "Apimec: analistas de valores mobiliários; Planejar: assessores de investimento; Ancord: planejadores financeiros"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-038",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        nivel: "fácil",
        contexto: "Uma empresa de logística vai abrir capital na bolsa e quer ter certeza de que vai captar os R$ 800 milhões previstos para a expansão. Na oferta pública de ações, o banco coordenador se compromete a comprar todas as ações que não forem vendidas aos investidores, garantindo à empresa a captação total prevista.",
        enunciado: "Esse tipo de compromisso é conhecido como:",
        alternativas: [
            "Melhores esforços",
            "Standby",
            "Book building",
            "Garantia firme"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-039",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Gustavo, 26 anos, é analista de marketing e abriu conta em uma corretora digital. Comprou suas primeiras ações pelo home broker e viu a operação confirmada em segundos. Como quem executou a ordem foi a corretora, ele pergunta ao assessor, certificado CPA, qual é o papel da B3 na operação.",
        enunciado: "O assessor deve explicar que a B3:",
        alternativas: [
            "administra o ambiente de negociação, liquida as operações e guarda os ativos como depositária central",
            "executa diretamente as ordens dos investidores, dispensando a corretora, e regula as empresas listadas",
            "administra o ambiente de negociação, mas a liquidação e a guarda dos ativos cabem ao Banco Central",
            "garante o valor investido contra quedas de preço, por meio de um fundo semelhante ao FGC"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-040",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        nivel: "médio",
        contexto: "Mariana, 30 anos, é jornalista e quer começar a investir em ações. Pesquisando na internet, encontra uma corretora e uma distribuidora de títulos e valores mobiliários, ambas com boas avaliações e custos diferentes. Ela pergunta a uma profissional certificada CPA se precisa escolher obrigatoriamente uma corretora para operar na bolsa.",
        enunciado: "A profissional deve explicar que:",
        alternativas: [
            "apenas a corretora pode operar na bolsa, e a distribuidora atua somente no mercado de balcão",
            "ambas podem operar na bolsa, mas apenas a corretora é supervisionada pelo Banco Central e pela CVM",
            "ambas podem operar na bolsa, e a escolha deve considerar custos, serviços e produtos oferecidos",
            "a distribuidora é mais segura, pois seus clientes contam com a garantia do FGC sobre as ações"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-041",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Rodrigo, 43 anos, é administrador e quer investir em uma grande empresa do setor elétrico. Ele quer participar das decisões tomadas nas assembleias, mas também gosta de receber dividendos. Ao ver que a empresa tem ações terminadas em 3 e em 4, com preços diferentes, pede orientação ao gerente, certificado CPA.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "as ações PN dão direito a voto e têm preferência nos dividendos, sendo as mais vantajosas para ele",
            "as ações ON têm preferência nos dividendos, enquanto as PN dão direito a voto nas assembleias",
            "as ações ON e PN dão os mesmos direitos, mudando apenas a liquidez de cada uma na bolsa",
            "as ações ON dão direito a voto, enquanto as PN têm preferência nos dividendos e, em geral, não votam"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-042",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        nivel: "médio",
        contexto: "Carlos, 31 anos, trabalhava na área de crédito e foi promovido a gerente de investimentos em um banco associado à ANBIMA. Ele tem boa formação acadêmica e conhece os produtos. Antes de começar a recomendar produtos aos clientes, é informado de que precisa obter uma certificação e pergunta ao superior por que isso é exigido.",
        enunciado: "O superior deve explicar que:",
        alternativas: [
            "uma lei federal exige certificação de qualquer funcionário de instituição financeira, até do atendimento",
            "as regras da ANBIMA, seguidas pelo banco, exigem que quem distribui investimentos comprove qualificação",
            "a certificação é emitida pelo Banco Central e autoriza o profissional a gerir carteiras de clientes",
            "a certificação dispensa a análise do perfil do cliente, pois comprova que o profissional sabe recomendar"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-043",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Seu Joaquim, 63 anos, é aposentado e comprou pela primeira vez ações de uma grande varejista pelo home broker, investindo R$ 10 mil. Animado, comenta com o assessor, certificado CPA, que agora está ajudando a empresa a abrir novas lojas com o dinheiro que investiu.",
        enunciado: "Para corrigir o entendimento de Joaquim, o assessor deve explicar que:",
        alternativas: [
            "a compra ocorreu no mercado secundário, e o dinheiro foi para outro investidor, não para a empresa",
            "a compra ocorreu no mercado primário, e o dinheiro foi para a empresa financiar suas novas lojas",
            "a compra ocorreu no mercado secundário, e o dinheiro foi dividido entre a empresa e a B3",
            "a compra ocorreu no mercado de balcão, e o dinheiro foi para a corretora que intermediou a ordem"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-044",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "difícil",
        contexto: "Uma empresa de tecnologia realiza uma oferta pública inicial de R$ 500 milhões: R$ 300 milhões em novas ações emitidas pela companhia e R$ 200 milhões em ações vendidas pelo fundador. Um cliente comenta com o assessor, certificado CPA, que a empresa terá R$ 500 milhões para investir na expansão.",
        enunciado: "Para corrigir o cliente, o assessor deve explicar que a empresa receberá:",
        alternativas: [
            "R$ 500 milhões, pois todo o valor de uma oferta pública inicial vai para a companhia emissora",
            "R$ 200 milhões, pois é a parcela secundária que financia os projetos de expansão da companhia",
            "R$ 300 milhões, pois só a parcela primária emite novas ações e capta recursos para a companhia",
            "R$ 300 milhões, pois a parte vendida pelo fundador fica retida pela B3 até o fim do bloqueio"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-045",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "difícil",
        contexto: "O controlador de uma companhia aberta listada no segmento tradicional da B3 vende sua participação por R$ 50,00 por ação. Ana, acionista minoritária, tem ações ordinárias e preferenciais da empresa, e o estatuto não prevê nenhum direito adicional. Ela pede orientação ao assessor, certificado CPA.",
        enunciado: "Considerando a Lei das S.A., o assessor deve explicar que:",
        alternativas: [
            "as ações ON e PN têm direito a receber ao menos R$ 40,00 cada, pelo tag along previsto na Lei das S.A.",
            "as ações ON têm direito a receber ao menos R$ 40,00 cada, e as PN não têm esse direito garantido por lei",
            "as ações ON têm direito a receber R$ 50,00 cada, e as PN, ao menos R$ 40,00 cada, pelo tag along legal",
            "nenhuma das ações tem direito ao tag along, pois ele só existe para empresas listadas no Novo Mercado"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-046",
        curso: "cpa",
        modulo: 1,
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "difícil",
        contexto: "Camila, 34 anos, é nutricionista e tinha 100 ações cotadas a R$ 40,00 quando a empresa anunciou um desdobramento em que cada ação passaria a valer duas. No dia seguinte, ela viu a quantidade de ações dobrar no extrato e diz ao assessor, certificado CPA, que ficou mais rica, pois ganhou ações de graça.",
        enunciado: "Desconsiderando outras oscilações do mercado, o assessor deve explicar que Camila:",
        alternativas: [
            "terá 200 ações a R$ 40,00, dobrando o patrimônio para R$ 8.000,00, pois recebeu novas ações de graça",
            "terá 50 ações a cerca de R$ 80,00, mantendo os R$ 4.000,00, pois o desdobramento agrupa as ações",
            "terá 200 ações a cerca de R$ 20,00, e o patrimônio cai, pois a empresa perde valor com a operação",
            "terá 200 ações a cerca de R$ 20,00, mantendo os R$ 4.000,00, pois o desdobramento só divide as ações"
        ],
        correta: 3
    },

    // ===================== MÓDULO 1 — GRUPO: SEGUROS E PREVIDÊNCIA (11) =====================

    {
        id: "CPA-M1-047",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        nivel: "fácil",
        contexto: "Paula, 32 anos, é enfermeira e acabou de comprar um apartamento. Ao contratar um seguro residencial, lê o contrato com atenção e encontra termos como prêmio, sinistro, indenização e franquia. Como nunca contratou um seguro antes, ela quer entender o significado de cada um.",
        enunciado: "No contrato de seguro, o prêmio corresponde:",
        alternativas: [
            "Ao valor pago pela seguradora ao segurado após o sinistro",
            "Ao evento que causa o dano coberto pelo contrato",
            "À parte do prejuízo que fica a cargo do próprio segurado",
            "Ao valor pago pelo segurado à seguradora pela cobertura"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-048",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        nivel: "fácil",
        contexto: "Uma seguradora de médio porte, com patrimônio de R$ 400 milhões, fechou contrato para segurar uma grande usina hidrelétrica no Norte do país. Em caso de perda total, a indenização superaria todo o patrimônio da seguradora, que decide transferir parte desse risco a outra instituição.",
        enunciado: "A seguradora deve buscar apoio de uma:",
        alternativas: [
            "Resseguradora",
            "Corretora de seguros",
            "Sociedade de capitalização",
            "Entidade fechada de previdência"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-049",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Corretoras de seguro",
        nivel: "fácil",
        contexto: "Patrícia, 29 anos, é dentista e comprou o primeiro carro. Ao contratar o seguro, foi atendida por um corretor, que comparou propostas de quatro seguradoras, explicou as coberturas e sugeriu ajustes na franquia. Ela quer entender melhor o papel desse profissional e quem o autoriza a atuar.",
        enunciado: "O corretor de seguros é responsável por:",
        alternativas: [
            "Assumir os riscos e pagar as indenizações ao segurado",
            "Fiscalizar as seguradoras e aplicar multas quando houver irregularidades",
            "Intermediar a contratação e orientar o cliente, com registro na SUSEP",
            "Emitir as apólices em nome próprio, no lugar da seguradora"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-050",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Mariana, 38 anos, é analista de sistemas contratada pelo regime CLT, com salário de R$ 12.000,00. Ela contribui para o INSS e faz a declaração completa do Imposto de Renda por causa das despesas com a filha. Pede ao gerente, certificado CPA, uma indicação de plano de previdência que traga benefício fiscal enquanto contribui.",
        enunciado: "O gerente deve indicar o plano:",
        alternativas: [
            "VGBL, pois ela faz a declaração completa e pode deduzir as contribuições até 12% da renda bruta tributável",
            "PGBL, pois ela faz a declaração completa e pode deduzir as contribuições até 12% da renda bruta tributável",
            "PGBL, pois ela faz a declaração completa, e o IR no resgate incidirá apenas sobre os rendimentos obtidos",
            "VGBL, pois as contribuições são dedutíveis sem limite para quem contribui regularmente ao INSS"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-051",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Seu Jorge, 72 anos, é aposentado, isento de Imposto de Renda e faz a declaração simplificada. Ele tem três filhos e quer um plano de previdência para organizar a sucessão, evitando que os recursos entrem em inventário. Pede orientação à gerente, certificada CPA, sobre qual plano contratar.",
        enunciado: "A gerente deve indicar o plano:",
        alternativas: [
            "PGBL, com IR apenas sobre os rendimentos, já que ele é isento e faz a declaração simplificada",
            "VGBL, com IR sobre o valor total resgatado, já que ele não aproveitaria a dedução do PGBL",
            "PGBL, com IR sobre o valor total resgatado, pois esse plano garante a maior dedução a aposentados",
            "VGBL, com IR apenas sobre os rendimentos no resgate, já que ele não aproveitaria a dedução do PGBL"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-052",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Capitalização",
        nivel: "médio",
        contexto: "Seu Antônio, 59 anos, é marceneiro e recebeu na agência a oferta de um título de capitalização com sorteios mensais de R$ 20 mil. O vendedor disse que o produto seria como uma poupança com chance de prêmio. Desconfiado, ele pede a opinião de uma profissional certificada CPA antes de assinar.",
        enunciado: "A profissional deve explicar que o título de capitalização:",
        alternativas: [
            "combina sorteios com rentabilidade superior à da poupança, sendo um investimento fiscalizado pela SUSEP",
            "une sorteios à devolução de parte ou de todo o valor pago, não é investimento e é fiscalizado pela SUSEP",
            "combina sorteios com a devolução do valor pago, sendo um investimento regulado e fiscalizado pela CVM",
            "garante a devolução integral e corrigida a qualquer momento e conta com a cobertura do FGC até R$ 250 mil"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-053",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Beatriz, 44 anos, é gerente comercial e tem R$ 180 mil em um PGBL há oito anos. Insatisfeita com as taxas cobradas e a rentabilidade baixa, quer transferir os recursos para outra instituição sem pagar Imposto de Renda. Ela pede ao gerente, certificado CPA, que explique as regras da portabilidade.",
        enunciado: "O gerente deve explicar que a portabilidade:",
        alternativas: [
            "é permitida entre quaisquer planos, inclusive de PGBL para VGBL, sem incidência de IR na transferência",
            "é permitida entre planos do mesmo tipo, como PGBL para PGBL, sem incidência de IR na transferência",
            "é permitida entre planos do mesmo tipo, mas exige o pagamento do IR sobre os rendimentos acumulados",
            "exige o resgate total dos recursos, com pagamento do IR, e uma nova aplicação na outra instituição"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-054",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Ricardo, 35 anos, é engenheiro em uma multinacional que oferece um plano de previdência administrado por uma fundação própria, com contrapartida da empresa. Ao mesmo tempo, o banco onde tem conta oferece um plano de previdência aberto. Ele pede a uma profissional certificada CPA que explique a diferença entre as entidades.",
        enunciado: "A profissional deve explicar que:",
        alternativas: [
            "o plano do banco é de uma EFPC, com fins lucrativos e aberto a todos; o da empresa é de uma EAPC, sem fins lucrativos",
            "os dois planos são de entidades supervisionadas pela PREVIC, mudando apenas o público que pode aderir",
            "o plano do banco é de uma EAPC, com fins lucrativos e aberto a todos; o da empresa é de uma EFPC, sem fins lucrativos",
            "o plano do banco é de uma EAPC, sem fins lucrativos e aberto a todos; o da empresa é de uma EFPC, com fins lucrativos"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-055",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Helena, 50 anos, é advogada e aplicou R$ 100.000,00 em um VGBL com tabela regressiva, em um único aporte. Sete anos depois, resgatou todo o saldo, de R$ 160.000,00, para comprar uma casa de praia. Ao conferir o extrato do resgate, pergunta ao gerente, certificado CPA, quanto pagou de Imposto de Renda.",
        enunciado: "Considerando a tabela regressiva, o valor do IR no resgate foi de:",
        alternativas: [
            "R$ 32.000,00, pois no VGBL o IR incide sobre o valor total resgatado, à alíquota de 20%",
            "R$ 9.000,00, pois no VGBL o IR incide só sobre os R$ 60.000,00 de rendimento, à alíquota de 15%",
            "R$ 12.000,00, pois no VGBL o IR incide só sobre os R$ 60.000,00 de rendimento, à alíquota de 20%",
            "R$ 6.000,00, pois depois de cinco anos a alíquota da tabela regressiva cai para 10%"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-056",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Marcelo, 56 anos, é gerente industrial e contribuiu com R$ 80.000,00 para um PGBL ao longo de nove anos, sempre deduzindo os aportes na declaração completa, e optou pela tabela regressiva. Hoje o saldo é de R$ 120.000,00, e ele vai resgatar tudo para quitar o financiamento do apartamento.",
        enunciado: "O Imposto de Renda devido no resgate será de:",
        alternativas: [
            "R$ 6.000,00, pois no PGBL o IR incide só sobre os R$ 40.000,00 de rendimento, à alíquota de 15%",
            "R$ 12.000,00, pois depois de oito anos a alíquota da tabela regressiva cai para 10%",
            "R$ 24.000,00, pois no PGBL o IR incide sobre o valor total resgatado, à alíquota de 20%",
            "R$ 18.000,00, pois no PGBL o IR incide sobre o valor total resgatado, à alíquota de 15%"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-057",
        curso: "cpa",
        modulo: 1,
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Juliana, 45 anos, é médica, faz a declaração completa e tem renda bruta tributável de R$ 200.000,00 por ano. Ela já aporta R$ 24.000,00 anuais em um PGBL. Após receber um aumento, quer investir mais R$ 20.000,00 por ano em previdência para a aposentadoria e pede orientação ao gerente, certificado CPA.",
        enunciado: "A orientação mais adequada para o valor adicional é:",
        alternativas: [
            "aplicar no VGBL, pois ela já atingiu o limite de dedução de 12%, e no VGBL o IR incide só sobre os rendimentos",
            "aplicar no PGBL, pois o limite de dedução de 12% é calculado sobre o saldo total acumulado no plano de previdência",
            "aplicar no PGBL, pois todo aporte nesse plano reduz o IR a pagar de quem faz a declaração completa",
            "aplicar no VGBL, pois nele as contribuições também são dedutíveis até 12% da renda bruta tributável"
        ],
        correta: 0
    },

    // ===================== MÓDULO 1 — GRUPO: GARANTIAS E INFRAESTRUTURA (14) =====================

    {
        id: "CPA-M1-058",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "fácil",
        contexto: "Tiago, 30 anos, é professor de Educação Física e começou a investir em ações. Ao consultar seus investimentos no portal do investidor, vê que suas ações estão registradas em seu nome em uma entidade responsável pela guarda dos ativos e pelo controle da titularidade, e não na corretora.",
        enunciado: "A entidade descrita é o:",
        alternativas: [
            "Banco comercial",
            "Depositário central",
            "Fundo Garantidor de Créditos",
            "Comitê de Política Monetária"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-059",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "fácil",
        contexto: "Uma empresa exportadora de café faz uma operação de derivativos no mercado de balcão com um banco para se proteger da variação do dólar. Para dar transparência e segurança jurídica ao negócio, ela precisa formalizar o registro dessa operação em uma instituição especializada.",
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
        id: "CPA-M1-060",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "fácil",
        contexto: "Otávio, 41 anos, é gerente de uma loja de roupas e comprou seu primeiro título do Tesouro Direto. Ao ler as informações no site do Tesouro, descobre que a custódia e a liquidação dos títulos públicos federais são feitas por um sistema específico, diferente do usado para ações.",
        enunciado: "Esse sistema é o:",
        alternativas: [
            "SPI, sistema administrado pela B3",
            "STR, sistema administrado pela CVM",
            "FGC, sistema administrado pelos bancos",
            "Selic, administrado pelo Banco Central"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-061",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "fácil",
        contexto: "Um grande banco, com milhões de correntistas, é liquidado após perdas bilionárias em operações de crédito. Nos dias seguintes, a notícia começa a gerar desconfiança em outras instituições do sistema, que passam a enfrentar saques em massa e dificuldade de captar recursos, mesmo estando financeiramente saudáveis.",
        enunciado: "Essa situação caracteriza o:",
        alternativas: [
            "Risco sistêmico",
            "Risco de crédito individual",
            "Risco não sistemático",
            "Risco operacional isolado"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-062",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "médio",
        contexto: "Dona Célia, 63 anos, é professora aposentada e tem R$ 180 mil aplicados apenas em poupança. Ela quer diversificar, mas só aceita produtos com garantia do Fundo Garantidor de Créditos, pois já perdeu dinheiro no passado. O gerente, certificado CPA, apresenta quatro opções: um fundo DI, uma debênture, um título do Tesouro Direto e uma LCA.",
        enunciado: "O gerente deve indicar:",
        alternativas: [
            "o fundo DI, pois aplica em títulos de bancos e, por isso, tem garantia do FGC até R$ 250 mil por CPF",
            "a debênture, pois é distribuída pelo banco e, por isso, tem garantia do FGC até R$ 250 mil por CPF",
            "o Tesouro Direto, pois é garantido pelo FGC sem limite de valor, por ser título emitido pelo governo federal",
            "a LCA, pois é emitida por instituição financeira e tem garantia do FGC até R$ 250 mil por CPF e instituição"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-063",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "médio",
        contexto: "Otávio, 54 anos, é produtor de café e associado há 15 anos de uma cooperativa de crédito, onde mantém R$ 100.000,00 em um depósito a prazo. Depois de ouvir boatos na cidade sobre problemas na cooperativa, ficou preocupado com a saúde da instituição e pergunta ao gerente, certificado CPA, se esse valor tem alguma garantia.",
        enunciado: "O gerente deve explicar que os recursos:",
        alternativas: [
            "estão protegidos pelo FGCoop, que garante até R$ 250 mil por associado em cada cooperativa",
            "estão protegidos pelo FGC, que garante cooperativas e bancos até R$ 250 mil por CPF",
            "não têm garantia, pois as cooperativas de crédito não são instituições financeiras",
            "estão protegidos pelo FGCoop, que garante até R$ 1 milhão por associado em cada cooperativa"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-064",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "médio",
        contexto: "Bianca, 27 anos, é produtora de eventos e, em uma madrugada de domingo, precisou pagar um fornecedor com urgência. Ela enviou um Pix de R$ 3.000,00, e o valor caiu na conta do destinatário em segundos. Curiosa, pergunta depois a um profissional certificado CPA como isso é possível fora do horário bancário.",
        enunciado: "O profissional deve explicar que o Pix é liquidado:",
        alternativas: [
            "pela B3, que liquida as transferências em tempo real, mas apenas nos dias úteis",
            "pelos próprios bancos, que compensam as transferências entre si no fim do dia",
            "pelo SPI, sistema do Banco Central que opera todos os dias, 24 horas, em tempo real",
            "pelo SPI, sistema da CVM que opera todos os dias, com compensação no dia seguinte"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-065",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        nivel: "médio",
        contexto: "Uma indústria de embalagens precisa transferir R$ 5 milhões a um fornecedor de matéria-prima e quer que o recurso esteja disponível no mesmo instante, para liberar a carga no porto. O gerente, certificado CPA, explica ao diretor financeiro que a operação será liquidada no STR, sistema operado pelo Banco Central.",
        enunciado: "O gerente deve explicar que, no STR, a liquidação é:",
        alternativas: [
            "pelo valor líquido do dia, compensando todas as operações dos bancos no fim do expediente",
            "bruta e em tempo real, operação por operação, o que reduz o risco de o pagamento não se concretizar",
            "bruta, mas feita apenas no dia útil seguinte, depois da conferência dos dados pelo banco",
            "garantida pelo FGC, que cobre o valor transferido caso o banco de destino venha a quebrar antes do crédito"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-066",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        nivel: "médio",
        contexto: "Dois investidores que não se conhecem fecham um negócio na bolsa: um vende 1.000 ações de uma empresa de mineração e o outro compra. Leandro, o comprador, de 32 anos, investe há pouco tempo e pergunta ao assessor, certificado CPA, o que acontece se o vendedor não entregar as ações no prazo.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a clearing devolve o dinheiro ao investidor prejudicado com recursos do FGC, até R$ 250 mil por CPF",
            "a clearing cancela a operação e transfere a cobrança da parte inadimplente para a CVM",
            "a clearing atua como contraparte central, mas só garante as operações acima de R$ 250 mil por investidor",
            "a clearing atua como contraparte central e garante a liquidação, mesmo que uma das partes não cumpra"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-067",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "médio",
        contexto: "Wilson, 45 anos, é empresário e teve prejuízo de R$ 15 mil por causa de uma falha operacional da sua corretora, que executou uma ordem de compra na B3 com quantidade errada. A corretora se recusou a ressarcir o valor. Ele pergunta a uma profissional certificada CPA onde pode pedir o ressarcimento.",
        enunciado: "A profissional deve orientá-lo a:",
        alternativas: [
            "recorrer à BSM, que supervisiona os participantes da B3 e administra o Mecanismo de Ressarcimento de Prejuízos",
            "recorrer à ANBIMA, que administra o Mecanismo de Ressarcimento de Prejuízos dos investidores que operam na B3",
            "recorrer ao FGC, que cobre prejuízos causados por falhas de corretoras até R$ 250 mil por CPF",
            "recorrer à BSM, que garante o ressarcimento de perdas causadas por quedas no preço das ações"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-068",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "médio",
        contexto: "Dois bancos de porte parecido têm carteiras de mesmo valor total, cerca de R$ 5 bilhões. O primeiro concentra empréstimos de alto risco a empresas, e o segundo, títulos públicos federais. Um analista, certificado CPA, explica a um cliente, que pretende escolher entre os dois bancos, como isso afeta o capital exigido de cada um.",
        enunciado: "O analista deve explicar que:",
        alternativas: [
            "os dois bancos precisam manter o mesmo capital, pois as carteiras têm o mesmo valor total",
            "o banco com títulos públicos precisa de mais capital, pois esses títulos pesam mais no RWA",
            "o banco com empréstimos de alto risco precisa de mais capital, pois esses ativos pesam mais no RWA",
            "nenhum dos dois precisa manter capital próprio, pois ambos são supervisionados pelo Banco Central"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-069",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "difícil",
        contexto: "Roberto, 60 anos, é empresário e tem R$ 200.000,00 em CDB e R$ 150.000,00 em LCI no Banco A, R$ 100.000,00 em um fundo DI administrado pelo Banco A e R$ 80.000,00 em poupança no Banco B, que pertence a outro conglomerado. Em uma crise que atinge o setor, os dois bancos sofrem liquidação extrajudicial.",
        enunciado: "O valor total garantido pelo FGC a Roberto é de:",
        alternativas: [
            "R$ 430.000,00: R$ 350 mil pelo CDB e pela LCI no Banco A e R$ 80 mil pelo Banco B, sem cobertura do fundo",
            "R$ 330.000,00: R$ 250 mil pelo conglomerado do Banco A e R$ 80 mil pelo Banco B, sem cobertura do fundo",
            "R$ 250.000,00: o FGC limita a garantia a R$ 250 mil por CPF, somando todas as instituições",
            "R$ 530.000,00: todos os valores estão cobertos, pois nenhuma aplicação passa de R$ 250 mil"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-070",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "difícil",
        contexto: "Laura, 64 anos, é empresária aposentada e, para aproveitar a garantia do FGC, distribuiu R$ 250.000,00 em CDB em cada um de cinco bancos de conglomerados diferentes. Em um intervalo de três anos, os cinco bancos sofrem liquidação extrajudicial, e ela pergunta ao gerente, certificado CPA, quanto vai receber do FGC.",
        enunciado: "O valor total que Laura receberá do FGC é de:",
        alternativas: [
            "R$ 1.250.000,00, pois o limite de R$ 250 mil vale para cada instituição, sem nenhum teto global",
            "R$ 250.000,00, pois o limite de R$ 250 mil vale por CPF, somando todas as instituições",
            "R$ 1.000.000,00, pois, além do limite por instituição, há um teto de R$ 1 milhão por CPF a cada quatro anos",
            "R$ 1.000.000,00, pois o FGC garante no máximo quatro instituições por CPF ao longo de toda a vida do investidor"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-071",
        curso: "cpa",
        modulo: 1,
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "difícil",
        contexto: "Dr. Fausto, 58 anos, é médico e pretende aplicar R$ 2 milhões em CDB de um banco de médio porte, valor muito acima da cobertura do FGC. Antes de decidir, pede a um analista, certificado CPA, uma avaliação da solidez do banco. O banco tem Patrimônio de Referência de R$ 110 milhões e ativos ponderados pelo risco de R$ 1 bilhão.",
        enunciado: "O Índice de Basileia desse banco é de:",
        alternativas: [
            "aproximadamente 9,1%, pois o índice divide os ativos ponderados pelo risco pelo Patrimônio de Referência",
            "aproximadamente 1,1%, pois o índice divide o Patrimônio de Referência pelo total de depósitos do banco",
            "aproximadamente 110%, pois o índice compara o Patrimônio de Referência com o capital mínimo exigido",
            "aproximadamente 11%, pois o índice divide o Patrimônio de Referência pelos ativos ponderados pelo risco"
        ],
        correta: 3
    },

    // ===================== MÓDULO 1 — GRUPO: ECONOMIA (18) =====================

    {
        id: "CPA-M1-072",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Fluxo circular de renda",
        nivel: "fácil",
        contexto: "Em uma aula de introdução à economia, o professor desenha no quadro um diagrama com dois grandes grupos, famílias e empresas, e setas mostrando o que circula entre eles, como trabalho, bens, serviços e dinheiro. Em seguida, pede que os alunos expliquem como funciona esse fluxo em uma economia simplificada.",
        enunciado: "No fluxo circular de renda:",
        alternativas: [
            "As empresas oferecem trabalho às famílias e recebem delas os salários pagos a cada mês",
            "As famílias oferecem trabalho às empresas e recebem renda, que volta às empresas pelo consumo",
            "O governo produz todos os bens e serviços e os distribui às famílias sem nenhuma contrapartida",
            "Os bancos definem a renda das famílias conforme o volume de crédito concedido"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-073",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        nivel: "fácil",
        contexto: "No fim do dia, depois de uma série de saques e transferências de clientes, um banco percebe que ficou com menos recursos do que precisava em caixa para cumprir suas obrigações, enquanto outro banco ficou com sobra. Os dois fecham uma operação de um dia, lastreada em títulos, para equilibrar suas posições.",
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
        id: "CPA-M1-074",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "PIB e inflação",
        nivel: "fácil",
        contexto: "Paulo, 23 anos, é estudante de Contabilidade e está se preparando para a certificação. Ao estudar sobre inflação, descobre que existem vários índices de preços no Brasil, calculados por instituições diferentes e usados em contratos diversos, mas que apenas um é usado como referência no sistema de metas de inflação.",
        enunciado: "O índice oficial do sistema de metas de inflação é o:",
        alternativas: [
            "IPCA, calculado pelo IBGE",
            "IGP-M, calculado pela FGV",
            "INPC, calculado pelo Banco Central",
            "IPCA, calculado pela FGV"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-075",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "fácil",
        contexto: "Seu Evandro, 66 anos, é aposentado e acompanha o noticiário econômico todas as manhãs. Ele percebe que as notícias sobre a taxa Selic aparecem em alguns momentos específicos do ano e que, depois delas, os rendimentos das suas aplicações mudam. Ele quer saber quem define a meta da Selic e com que frequência essa decisão é tomada.",
        enunciado: "A meta da taxa Selic é definida pelo:",
        alternativas: [
            "CMN, em reuniões mensais",
            "Banco Central, em reuniões diárias",
            "Copom, em oito reuniões por ano",
            "Ministério da Fazenda, a cada trimestre"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-076",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        nivel: "médio",
        contexto: "Rafael, 47 anos, é dono de uma pequena fábrica de móveis em Bento Gonçalves e vai importar duas máquinas da Alemanha, no valor de 200 mil euros, pagando o fornecedor em euros. Parte da compra será financiada pelo banco. O assessor, certificado CPA, explica em qual segmento do mercado financeiro a etapa do pagamento acontece.",
        enunciado: "O assessor deve explicar que a operação ocorre no mercado:",
        alternativas: [
            "de capitais, pois a compra das máquinas é um investimento produtivo de longo prazo da empresa",
            "de crédito, pois o banco intermedia o pagamento ao fornecedor em nome da empresa importadora",
            "monetário, pois depende da liquidez imediata dos bancos para que o pagamento seja liquidado",
            "de câmbio, pois o pagamento exige a troca de reais por euros para concluir a compra no exterior"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-077",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política fiscal",
        nivel: "médio",
        contexto: "Com a economia em recessão há dois trimestres e o desemprego em alta, o governo anuncia a redução de impostos sobre a produção industrial e o aumento dos investimentos em obras de infraestrutura. Seu Otávio, 52 anos, dono de uma revenda de materiais de construção, pede ao gerente, certificado CPA, que explique a medida.",
        enunciado: "O gerente deve explicar que se trata de uma política:",
        alternativas: [
            "monetária expansionista, que usa impostos e gastos públicos para estimular a demanda e o crescimento",
            "fiscal expansionista, que usa impostos e gastos públicos para estimular a demanda e o crescimento",
            "fiscal contracionista, que reduz a arrecadação para controlar a inflação no curto prazo",
            "cambial, que reduz impostos para valorizar o real e baratear os produtos importados"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-078",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Lei de Responsabilidade Fiscal",
        nivel: "médio",
        contexto: "Um prefeito recém-eleito de uma cidade de médio porte recebe da equipe de transição um relatório alertando que as despesas com servidores já estão próximas do limite legal e que a dívida do município cresceu nos últimos anos. Ele pede a um consultor, certificado CPA, que explique a lei que estabelece esse controle.",
        enunciado: "O consultor deve explicar que a Lei de Responsabilidade Fiscal:",
        alternativas: [
            "limita os gastos com pessoal e o endividamento de União, estados e municípios, exigindo transparência",
            "limita os gastos com pessoal apenas da União, sem nenhum efeito sobre as contas dos municípios",
            "define a meta de inflação e autoriza o Banco Central a financiar diretamente os municípios",
            "limita o endividamento dos municípios, mas deixa livres os gastos com pessoal de cada prefeitura"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-079",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "médio",
        contexto: "Com a inflação acima da meta por vários meses, puxada principalmente por alimentos e serviços, o Copom eleva a taxa Selic em 1 ponto percentual. Dona Rita, 55 anos, é dona de uma loja de eletrodomésticos que vende muito a prazo e pergunta ao gerente, certificado CPA, qual é o efeito esperado da decisão.",
        enunciado: "O gerente deve explicar que, com a alta da Selic:",
        alternativas: [
            "o crédito fica mais barato, o consumo aumenta e a inflação tende a cair",
            "o crédito fica mais caro, mas o consumo e a inflação não são afetados",
            "o crédito fica mais caro, o consumo desacelera e a inflação tende a cair",
            "o crédito fica mais caro, o consumo desacelera e a inflação tende a subir"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-080",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "médio",
        contexto: "Alberto, 50 anos, é investidor e tem parte do patrimônio em ativos dolarizados. Ao ler a ata do Copom, vê que a taxa Selic foi elevada de forma agressiva, mais do que o mercado esperava. Ele pergunta ao assessor, certificado CPA, como isso tende a afetar o câmbio, mantidos os demais fatores constantes.",
        enunciado: "O assessor deve explicar que a alta dos juros tende a:",
        alternativas: [
            "provocar a saída de capital estrangeiro do país, o que tende a desvalorizar o real",
            "atrair capital estrangeiro em busca de juros maiores, o que tende a desvalorizar o real",
            "não afetar o câmbio, pois o regime flutuante separa totalmente os juros e a moeda",
            "atrair capital estrangeiro em busca de juros maiores, o que tende a valorizar o real"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-081",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        nivel: "médio",
        contexto: "Em uma mesa de operações, a equipe percebe que a taxa de juros negociada entre os bancos começou a ficar abaixo da meta definida pelo Copom. Logo depois, o Banco Central passa a vender títulos públicos no mercado. Um estagiário, recém-chegado à área, pergunta ao analista, certificado CPA, o que isso significa.",
        enunciado: "O analista deve explicar que se trata de uma:",
        alternativas: [
            "operação de mercado aberto, que injeta dinheiro na economia e pressiona os juros para baixo",
            "operação de mercado aberto, que retira dinheiro de circulação e pressiona os juros para cima",
            "operação de redesconto, que retira dinheiro de circulação e pressiona os juros para cima",
            "mudança no compulsório, que injeta dinheiro na economia e pressiona os juros para baixo"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-082",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        nivel: "médio",
        contexto: "Seu Lauro recebeu dois avisos: um banco reduziu seu limite de cheque especial, e outro restringiu novas linhas de crédito pessoal. No mesmo dia, leu que o Banco Central aumentou o depósito compulsório. Ele pergunta ao gerente, certificado CPA, se há relação entre os fatos.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "não: o compulsório afeta apenas o crédito imobiliário, sem impacto nos limites de outras linhas de crédito",
            "sim: o aumento do compulsório amplia os recursos livres dos bancos, que passam a exigir mais garantias",
            "não: a redução decorre só de políticas internas, pois o compulsório afeta apenas a caderneta de poupança",
            "sim: com mais recursos recolhidos ao Banco Central, os bancos têm menos dinheiro livre e ficam mais seletivos"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-083",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        nivel: "médio",
        contexto: "Um banco sólido e bem capitalizado enfrenta uma falta momentânea de caixa por causa de saques muito acima do esperado, após boatos falsos nas redes sociais. Para honrar os pagamentos do dia, recorre a um empréstimo de curtíssimo prazo diretamente com o Banco Central. Um cliente pergunta ao gerente, certificado CPA, como isso funciona.",
        enunciado: "O gerente deve explicar que se trata do:",
        alternativas: [
            "redesconto, em que o Banco Central atua como emprestador de última instância para dar liquidez",
            "compulsório, em que o Banco Central libera recursos recolhidos pelo banco para dar liquidez",
            "mercado aberto, em que o Banco Central compra ações do próprio banco para dar liquidez",
            "redesconto, em que o FGC empresta recursos ao banco para cobrir os saques dos clientes"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-084",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política cambial",
        nivel: "médio",
        contexto: "Mark, um turista canadense de 40 anos, está em uma casa de câmbio em Foz do Iguaçu e percebe que a cotação do dólar mudou desde a semana passada. Curioso, pergunta ao profissional certificado CPA que o atende como é definido o preço do dólar no Brasil e se o governo controla essa cotação.",
        enunciado: "O profissional deve explicar que o regime cambial brasileiro é:",
        alternativas: [
            "fixo, com a cotação definida pelo governo e ajustada periodicamente pelo Banco Central",
            "flutuante, com a cotação definida pelo mercado e proibição de intervenção do Banco Central",
            "flutuante, com a cotação definida pelo mercado e intervenções pontuais do Banco Central",
            "de bandas, com limites mínimo e máximo definidos pelo CMN no início de cada ano"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-085",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política fiscal",
        nivel: "difícil",
        contexto: "O governo aprova um pacote que amplia fortemente os gastos públicos sem criar novas fontes de arrecadação. A dívida pública cresce em relação ao PIB, e o mercado revisa para cima as projeções de inflação e de risco do país. Um cliente pede ao assessor, certificado CPA, uma avaliação dos efeitos.",
        enunciado: "O efeito mais provável sobre a política monetária e os investimentos é:",
        alternativas: [
            "o Banco Central tende a elevar os juros para conter a inflação, encarecendo a dívida e inibindo investimentos",
            "o Banco Central tende a reduzir os juros para baratear a dívida pública, atraindo investimentos de longo prazo",
            "o Banco Central tende a manter os juros, pois gastos públicos geram arrecadação equivalente no curto prazo",
            "o Banco Central tende a elevar os juros, o que barateia a dívida pública e estimula os investimentos produtivos"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-086",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política cambial",
        nivel: "difícil",
        contexto: "Diante de uma alta abrupta do dólar, que em poucas semanas subiu mais de 10% e passou a pressionar os preços, o Banco Central decide ofertar contratos de swap cambial tradicional para atender à demanda por proteção das empresas. Sr. Nogueira, 55 anos, importador, pergunta ao assessor, certificado CPA, o que exatamente o BC está fazendo.",
        enunciado: "Tecnicamente, essa operação equivale a:",
        alternativas: [
            "uma compra de dólar no mercado futuro, que sinaliza ao mercado que a moeda deve continuar subindo",
            "uma venda de dólar no mercado à vista, feita diretamente com recursos das reservas internacionais",
            "um empréstimo de dólares do Tesouro Nacional aos bancos, para ampliar a oferta imediata da moeda",
            "uma venda de dólar no mercado futuro, que oferece proteção contra a alta da moeda sem usar as reservas"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-087",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "PIB e inflação",
        nivel: "difícil",
        contexto: "Em uma apresentação para investidores estrangeiros, um economista de um banco informa os dados das contas nacionais do último ano, em bilhões de reais: consumo das famílias de 600, investimentos de 200, gastos do governo de 250, exportações de 150 e importações de 100. Ele pede que a plateia calcule o PIB.",
        enunciado: "Pela ótica da despesa, o PIB do período foi de:",
        alternativas: [
            "R$ 1.300 bilhões, somando consumo, investimento, gastos do governo, exportações e importações",
            "R$ 1.100 bilhões, somando consumo, investimento e gastos do governo às exportações líquidas",
            "R$ 1.200 bilhões, somando consumo, investimento, gastos do governo e exportações, sem as importações",
            "R$ 1.050 bilhões, somando consumo, investimento e gastos do governo, sem considerar o setor externo"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-088",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "Política cambial",
        nivel: "difícil",
        contexto: "Um investidor estrangeiro avalia aplicar no Brasil em um título atrelado ao DI, que deve render 12% no ano. A expectativa do mercado é de que o dólar se valorize 5% frente ao real no mesmo período. Ele pede ao assessor, certificado CPA, uma estimativa do ganho em dólar.",
        enunciado: "O cupom cambial esperado, ou seja, o ganho em dólar, é de aproximadamente:",
        alternativas: [
            "7,00%, pois basta subtrair a alta esperada do dólar da taxa de juros obtida em reais",
            "17,00%, pois a alta esperada do dólar se soma ao ganho obtido com os juros em reais",
            "6,67%, pois divide-se 1,12 por 1,05 e subtrai-se 1, descontando a alta esperada do dólar",
            "12,00%, pois o investidor estrangeiro recebe integralmente a taxa de juros brasileira"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-089",
        curso: "cpa",
        modulo: 1,
        grupo: "Economia",
        tema: "PIB e inflação",
        nivel: "difícil",
        contexto: "Márcia, 46 anos, é farmacêutica e, ao longo de um ano, manteve seus recursos em uma aplicação que rendeu 6%, enquanto o IPCA do período foi de 7%. Ao revisar a carteira, comenta com o gerente, certificado CPA, que perdeu exatamente 1% de poder de compra e quer migrar para outra aplicação.",
        enunciado: "Para corrigir o cálculo de Márcia, o gerente deve explicar que o rendimento real foi de aproximadamente:",
        alternativas: [
            "-1,00%, pois basta subtrair a inflação do rendimento nominal para encontrar o ganho real",
            "-0,93%, pois divide-se 1,06 por 1,07 e subtrai-se 1, o que indica perda de poder de compra",
            "+13,00%, pois a inflação do período se soma ao rendimento nominal obtido na aplicação",
            "+6,00%, pois a inflação não afeta o rendimento das aplicações de renda fixa"
        ],
        correta: 1
    },

    // ===================== MÓDULO 1 — GRUPO: MATEMÁTICA FINANCEIRA (13) =====================

    {
        id: "CPA-M1-090",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "fácil",
        contexto: "O diretor financeiro de uma rede de supermercados recebe três propostas de expansão: novas lojas, um centro de distribuição e um aplicativo de vendas. Antes de avaliar os projetos, ele define a taxa de retorno mínima que qualquer investimento precisa oferecer para ser considerado pela empresa.",
        enunciado: "Essa taxa é conhecida como:",
        alternativas: [
            "Taxa Referencial de juros (TR)",
            "Taxa Mínima de Atratividade (TMA)",
            "Taxa de juros nominal do período",
            "Taxa de redesconto do Banco Central"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-091",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "fácil",
        contexto: "Seu Arnaldo, 60 anos, é comerciante e está analisando a rentabilidade de um CDB atrelado ao DI. Ao comparar a conta com a de um amigo, percebe que a taxa considera apenas os dias em que há negociação no mercado, e não todos os dias do calendário.",
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
        id: "CPA-M1-092",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "fácil",
        contexto: "Jaqueline, 38 anos, é dona de uma lavanderia e investiu R$ 50.000,00 em uma nova máquina industrial. Ela também pagou R$ 2.000,00 pela instalação elétrica, lançada como despesa do mês. Ao fim do período analisado, obteve um lucro de R$ 10.000,00 com o novo equipamento e quer medir o retorno obtido.",
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
        id: "CPA-M1-093",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "médio",
        contexto: "Uma empresa quer trocar uma dívida em juros simples por um financiamento longo em juros compostos. Ao ver as projeções, a diretoria nota que os juros totais crescem muito ao longo dos meses, mesmo com uma taxa mensal baixa, e pede explicação ao gerente, certificado CPA.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "nos juros compostos, os juros incidem sobre o saldo acumulado, crescendo de forma exponencial; nos simples, só sobre o capital inicial",
            "nos juros compostos, os juros incidem só sobre o capital inicial, crescendo de forma linear; nos simples, sobre o saldo acumulado",
            "nos juros compostos, a taxa diminui ao longo do prazo, e o crescimento dos juros se concentra nas primeiras parcelas",
            "nos dois regimes, o total de juros é o mesmo, mudando apenas a forma como as parcelas são distribuídas no tempo"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-094",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Uma indústria de cosméticos avalia um projeto de expansão para o Nordeste, com investimento inicial de R$ 20 milhões. Ao descontar os fluxos de caixa futuros pela taxa mínima de atratividade da empresa, o analista, certificado CPA, encontra um Valor Presente Líquido positivo e prepara a recomendação para a diretoria.",
        enunciado: "O analista deve recomendar:",
        alternativas: [
            "rejeitar o projeto, pois o VPL positivo indica que o retorno ficou abaixo da taxa mínima",
            "aceitar o projeto, pois o VPL positivo garante que não haverá risco de perdas no futuro",
            "aceitar o projeto, pois ele remunera o capital acima da taxa mínima exigida pela empresa",
            "adiar a decisão, pois o VPL só pode ser usado depois que o projeto já estiver em operação"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-095",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        nivel: "médio",
        contexto: "Bruno, 32 anos, é técnico em radiologia e está planejando comprar o primeiro apartamento. Ao simular um financiamento imobiliário pelo Sistema de Amortização Constante (SAC), percebe que as parcelas mudam ao longo do contrato, diferentemente do que imaginava, e pede explicação ao gerente, certificado CPA.",
        enunciado: "O gerente deve explicar que, no SAC:",
        alternativas: [
            "as parcelas diminuem, pois a amortização cai a cada mês e os juros ficam constantes",
            "as parcelas diminuem, pois a amortização é constante e os juros caem a cada mês",
            "as parcelas aumentam, pois a amortização é constante e os juros sobem a cada mês",
            "as parcelas ficam iguais, pois a amortização e os juros são constantes no contrato"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-096",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        nivel: "médio",
        contexto: "Ana, 29 anos, é vendedora e financiou um carro pela Tabela Price em 48 meses. Ela gosta de saber exatamente quanto vai pagar e percebeu que a parcela é a mesma do começo ao fim. Curiosa, pergunta à gerente, certificada CPA, se a composição da parcela também é sempre igual.",
        enunciado: "A gerente deve explicar que, na Tabela Price, ao longo do tempo:",
        alternativas: [
            "a parcela é fixa, a amortização diminui e os juros crescem",
            "a parcela é fixa, e a amortização e os juros ficam iguais",
            "a parcela cai, a amortização é fixa e os juros diminuem",
            "a parcela é fixa, a amortização cresce e os juros diminuem"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-097",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Hélio, 40 anos, é empresário e está confiante na alta da bolsa. Ele pega um empréstimo de R$ 100 mil para ampliar o valor aplicado em ações, apostando que os preços vão subir nos próximos meses. Antes de concluir a operação, o assessor, certificado CPA, explica o efeito dessa estratégia.",
        enunciado: "O assessor deve explicar que a alavancagem:",
        alternativas: [
            "amplia os ganhos se as ações subirem e protege o investidor se elas caírem",
            "reduz o risco da operação, pois o empréstimo dilui a exposição às ações",
            "amplia os ganhos se as ações subirem, mas também amplia as perdas se elas caírem",
            "amplia as perdas se as ações caírem, mas não altera os ganhos se elas subirem"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-098",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Uma empresa de transportes financia suas atividades com recursos dos sócios e com empréstimos bancários, em proporções parecidas. Para avaliar novos investimentos, o diretor financeiro pede ao consultor, certificado CPA, um indicador que represente o custo total desses recursos.",
        enunciado: "O consultor deve indicar o:",
        alternativas: [
            "WACC, que pondera o custo do capital próprio e o de terceiros por sua participação na empresa",
            "VPL, que soma os fluxos de caixa futuros descontados pela taxa mínima de atratividade",
            "WACC, que soma o custo do capital próprio e o de terceiros, sem considerar a participação de cada um",
            "payback, que mede o tempo necessário para recuperar o capital investido pela empresa"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-099",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Sr. Rubens, 55 anos, é dono de uma gráfica e investiu R$ 60.000,00 em uma máquina que gera economia de R$ 15.000,00 por ano em energia e manutenção. A máquina tem vida útil estimada de dez anos. Ele pergunta ao consultor, certificado CPA, em quanto tempo recupera o valor investido.",
        enunciado: "O consultor deve informar que o payback simples é de:",
        alternativas: [
            "3 anos, pois a economia anual representa cerca de um terço do valor investido na máquina",
            "4 anos, pois o valor investido dividido pela economia anual resulta em quatro períodos",
            "5 anos, pois é preciso somar um ano de instalação da máquina ao período de recuperação",
            "6 anos, pois o payback considera o dobro do período para cobrir a depreciação do bem"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-100",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "difícil",
        contexto: "Carlos, 36 anos, é engenheiro e comenta com um amigo que seu CDB rendeu 12% no ano, com inflação de 5%, e que seu ganho real foi de exatamente 7%, pois basta subtrair a inflação. O amigo, que estuda para a certificação, discorda, e os dois pedem ao gerente, certificado CPA, que faça a conta correta.",
        enunciado: "O gerente deve informar que a taxa real foi de aproximadamente:",
        alternativas: [
            "7,00%, pois o ganho real é a diferença simples entre as duas taxas",
            "7,35%, pois a inflação acumulada aumenta o ganho real no ano",
            "6,50%, pois é preciso descontar também o IR da tabela regressiva",
            "6,67%, pois a relação de Fisher divide 1,12 por 1,05 e subtrai 1"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-101",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "difícil",
        contexto: "Wellington, 44 anos, é gerente de uma loja de autopeças e compara duas aplicações para um valor que não vai usar por um ano: a primeira rende 1% ao mês em juros compostos, e a segunda, 12% ao ano. Ele conclui que as duas são iguais, pois 12 meses de 1% somam 12%. O assessor, certificado CPA, corrige o raciocínio.",
        enunciado: "O assessor deve explicar que a primeira aplicação equivale a:",
        alternativas: [
            "exatamente 12% ao ano, pois a taxa proporcional é igual à taxa equivalente nos juros compostos",
            "cerca de 11,36% ao ano, pois a capitalização mensal reduz o rendimento em relação à taxa anual",
            "cerca de 12,68% ao ano, pois os juros de cada mês passam a render juros nos meses seguintes",
            "cerca de 12,68% ao ano, pois a taxa mensal é multiplicada por 12 e somada à inflação do período"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-102",
        curso: "cpa",
        modulo: 1,
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "difícil",
        contexto: "Letícia, 41 anos, é engenheira e quer comprar um título prefixado sem cupom, com valor de face de R$ 1.000,00 e vencimento em dois anos, para pagar uma viagem planejada com a família. A taxa exigida pelo mercado é de 10% ao ano. Ela pede à gerente, certificada CPA, quanto vai pagar hoje pelo título.",
        enunciado: "O preço unitário aproximado do título hoje é de:",
        alternativas: [
            "R$ 826,45, pois o valor de face é dividido por 1,10 elevado ao quadrado",
            "R$ 800,00, pois basta descontar 20% do valor de face, somando as taxas",
            "R$ 833,33, pois o valor de face é dividido por 1,20, a taxa dos dois anos",
            "R$ 1.000,00, pois o título é sempre comprado pelo valor de face"
        ],
        correta: 0
    },

    // ===================== MÓDULO 1 — GRUPO: INVESTIDORES E RISCOS (7) =====================

    {
        id: "CPA-M1-103",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "fácil",
        contexto: "Sérgio, 45 anos, é contador e comprou debêntures de uma grande empresa do varejo, atraído por uma taxa acima da média. Meses depois, a empresa anuncia dificuldades financeiras causadas pela queda nas vendas e atrasa o pagamento dos juros aos debenturistas.",
        enunciado: "O risco que se materializou foi o risco de:",
        alternativas: [
            "Liquidez",
            "Mercado",
            "Sistêmico",
            "Crédito"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-104",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "fácil",
        contexto: "Rafael, 37 anos, é analista financeiro e precisa vender com urgência as cotas de um fundo imobiliário pouco negociado para pagar uma despesa médica. Ao colocar a ordem de venda, encontra poucos compradores e só consegue vender aceitando um preço bem abaixo do esperado.",
        enunciado: "O risco que Rafael enfrentou foi o risco de:",
        alternativas: [
            "Liquidez",
            "Crédito",
            "Mercado",
            "Contraparte"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-105",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        nivel: "médio",
        contexto: "Fernando, 52 anos, é gerente comercial e tem R$ 1,5 milhão em aplicações financeiras, acumuladas ao longo da carreira. Ele não tem certificações do mercado financeiro. Ao ver na plataforma um fundo restrito a determinado público, com estratégia que o interessou, pede orientação ao gerente, certificado CPA.",
        enunciado: "O gerente deve explicar que Fernando:",
        alternativas: [
            "já é qualificado automaticamente, por ter mais de R$ 1 milhão, sem precisar assinar nenhuma declaração",
            "pode ser qualificado, por ter mais de R$ 1 milhão aplicado, desde que assine declaração atestando isso",
            "pode ser profissional, por ter mais de R$ 1 milhão aplicado, desde que assine a declaração exigida",
            "não pode ser qualificado, pois essa categoria exige mais de R$ 10 milhões em aplicações financeiras"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-106",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "médio",
        contexto: "Carla, 40 anos, é engenheira de uma grande mineradora e, ao longo de dez anos, concentrou toda a carteira em ações dessa empresa, onde trabalha. O assessor, certificado CPA, sugere distribuir os recursos entre ações de empresas de setores diferentes, como bancos, energia e varejo.",
        enunciado: "O assessor deve explicar que essa diversificação reduz principalmente o risco:",
        alternativas: [
            "sistemático, ligado a fatores que afetam todo o mercado, eliminando as oscilações da carteira",
            "não sistemático e também o sistemático, zerando o risco da carteira com poucos ativos",
            "não sistemático, ligado a fatores específicos de cada empresa, mas não elimina o risco de mercado",
            "de crédito dos títulos públicos, pois a carteira passa a ter ativos com garantia do governo"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-107",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "médio",
        contexto: "Em uma consultoria, Dr. Rogério, 55 anos, que tem uma carteira concentrada em poucos ativos, pergunta ao profissional, certificado CPA, como montar uma carteira mais eficiente. Ele leu sobre a teoria de Markowitz e quer entender como aplicá-la na prática.",
        enunciado: "O profissional deve explicar que o risco da carteira pode ser reduzido:",
        alternativas: [
            "concentrando os recursos no ativo de maior retorno, pois ele compensa o risco dos demais ativos",
            "combinando ativos que sobem e caem juntos, pois isso torna o comportamento da carteira mais previsível",
            "combinando ativos de baixa correlação, mas isso sempre exige abrir mão de todo o retorno esperado",
            "combinando ativos de baixa correlação entre si, sem necessariamente abrir mão do retorno esperado"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-108",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        nivel: "difícil",
        contexto: "Um gerente, certificado CPA, atende três clientes que já assinaram declaração sobre seu patrimônio aplicado: Ana, 50 anos, médica, tem R$ 800 mil aplicados; Bruno, 45 anos, empresário, R$ 1,5 milhão; e Cláudia, 62 anos, herdeira, R$ 12 milhões. Nenhum deles possui certificações profissionais.",
        enunciado: "A classificação correta de Ana, Bruno e Cláudia é, respectivamente:",
        alternativas: [
            "varejo, qualificado e profissional",
            "qualificado, qualificado e profissional",
            "varejo, profissional e profissional",
            "varejo, qualificado e qualificado"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-109",
        curso: "cpa",
        modulo: 1,
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "difícil",
        contexto: "Sílvia, 42 anos, é professora universitária e tem um título prefixado com vencimento em cinco anos, comprado para complementar a aposentadoria. Após uma alta forte e inesperada da Selic, ela vê no aplicativo que o título desvalorizou. Assustada, pede à assessora, certificada CPA, que explique o que houve e o que fazer.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "a queda reflete o risco de crédito do Tesouro; mantido até o vencimento, o título pode não ser pago integralmente",
            "a queda reflete o risco de mercado pela marcação a mercado; mantido até o vencimento, o título paga a taxa contratada",
            "a queda reflete o risco de mercado pela marcação a mercado; mantido até o vencimento, o título paga a nova Selic",
            "a queda reflete o risco de liquidez do título; vendê-lo imediatamente é a única forma de evitar perda definitiva"
        ],
        correta: 1
    },

    // ===================== MÓDULO 1 — GRUPO: REGULAÇÃO E CONDUTA (9) =====================

    {
        id: "CPA-M1-110",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Lei de Liberdade Econômica",
        nivel: "fácil",
        contexto: "Cleide, 35 anos, quer abrir um pequeno ateliê de costura em casa, uma atividade considerada de baixo risco. Ao pesquisar a documentação necessária, descobre que, por causa de uma lei de 2019, não precisa de alvará prévio para começar a funcionar, o que agiliza a abertura do negócio.",
        enunciado: "Um dos princípios da Lei de Liberdade Econômica é:",
        alternativas: [
            "A intervenção do Estado como regra na economia",
            "A exigência de autorização prévia para qualquer atividade",
            "A presunção de boa-fé do particular perante o Estado",
            "A definição pelo Estado dos preços praticados"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-111",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "fácil",
        contexto: "Pedro, 28 anos, é designer e decidiu abrir conta em um banco digital. No processo de cadastro, recebe a proposta de compartilhar seu histórico financeiro do banco antigo, onde tem conta há oito anos, para conseguir um limite de crédito melhor.",
        enunciado: "No open finance, o compartilhamento dos dados de Pedro:",
        alternativas: [
            "Acontece automaticamente",
            "É feito pelo Banco Central",
            "É obrigatório para abrir conta",
            "Depende do consentimento dele"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-112",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "médio",
        contexto: "Juliano, 39 anos, é técnico de enfermagem e tem um financiamento de R$ 40 mil com juros altos, contratado em um momento de urgência. Outro banco oferece assumir a dívida com taxa menor. Ele pergunta ao gerente, certificado CPA, como funciona a transferência.",
        enunciado: "O gerente deve explicar que, na portabilidade de crédito:",
        alternativas: [
            "Juliano pode transferir a dívida sem custo, e o banco de origem pode fazer uma contraproposta",
            "Juliano precisa quitar a dívida com recursos próprios antes de fazer a transferência",
            "a transferência depende de autorização do banco de origem, que pode recusá-la livremente",
            "Juliano pode transferir a dívida, mas paga multa ao banco de origem pela quitação antecipada"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-113",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "médio",
        contexto: "Helena, 48 anos, é médica e investe há dez anos em uma corretora cujo atendimento piorou bastante. Ela quer trocar de instituição, mas não quer vender suas ações e títulos para transferir os recursos, pois teria de pagar imposto sobre o lucro. Pede orientação a um profissional certificado CPA.",
        enunciado: "O profissional deve orientar Helena a solicitar a:",
        alternativas: [
            "portabilidade de crédito, que transfere os investimentos e as dívidas para a nova instituição",
            "portabilidade de custódia, que transfere os ativos para a nova corretora sem precisar vendê-los",
            "venda de todos os ativos e a recompra na nova corretora, único caminho permitido pela CVM",
            "portabilidade de custódia, que transfere os ativos, mas exige pagar o IR sobre os ganhos antes"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-114",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Dona Marta, 58 anos, é empresária e acabou de abrir conta de investimentos no banco, com R$ 500 mil vindos da venda de um imóvel. Antes de recomendar qualquer produto, a gerente, certificada CPA, aplica um questionário para definir o perfil da cliente.",
        enunciado: "Para definir o perfil da investidora, a gerente deve considerar:",
        alternativas: [
            "o valor que a cliente pretende investir e a rentabilidade que ela deseja obter",
            "apenas a idade, a profissão e o tempo de relacionamento da cliente com o banco",
            "os objetivos de investimento, a situação financeira e o conhecimento da cliente",
            "os produtos que o banco precisa vender e a meta comercial da agência no mês"
        ],
        correta: 2
    },

    {
        id: "CPA-M1-115",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Uma instituição atualiza periodicamente o cadastro dos clientes, verificando dados pessoais, renda, patrimônio e a origem dos recursos aplicados, e solicita documentos quando há mudanças relevantes. Um novo funcionário, que acha o processo burocrático, pergunta ao gerente, certificado CPA, qual é o objetivo desse processo.",
        enunciado: "O gerente deve explicar que o processo é o:",
        alternativas: [
            "Suitability, que serve apenas para definir o produto mais rentável ao cliente",
            "Conheça seu Cliente (KYC), usado apenas para oferecer crédito pré-aprovado",
            "Portabilidade de cadastro, que compartilha os dados com outras instituições",
            "Conheça seu Cliente (KYC), que também apoia a prevenção à lavagem de dinheiro"
        ],
        correta: 3
    },

    {
        id: "CPA-M1-116",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Uma distribuidora de investimentos prepara um material para divulgar um fundo multimercado que teve ótimo desempenho nos últimos três anos, bem acima do CDI. A equipe de marketing quer destacar os números. O profissional, certificado CPA, revisa o texto antes da publicação.",
        enunciado: "De acordo com as regras de publicidade, o material deve:",
        alternativas: [
            "usar linguagem clara e informar que rentabilidade passada não é garantia de rentabilidade futura",
            "garantir ao investidor que a rentabilidade dos últimos anos vai se repetir nos próximos",
            "destacar apenas os pontos positivos do fundo, deixando os riscos para o regulamento do produto",
            "ser aprovado previamente pelo Banco Central antes de qualquer divulgação ao público investidor"
        ],
        correta: 0
    },

    {
        id: "CPA-M1-117",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "difícil",
        contexto: "Seu Durval, 66 anos, é aposentado e tem perfil conservador, confirmado no questionário do ano passado. Depois de ouvir um amigo contar sobre ganhos na bolsa, insiste em aplicar parte relevante do patrimônio em um fundo de ações e pede ao gerente, certificado CPA, que faça a aplicação sem mais perguntas.",
        enunciado: "O gerente deve:",
        alternativas: [
            "recusar a aplicação, pois é proibido investir em produtos fora do perfil definido para o cliente",
            "alertar o cliente sobre o desenquadramento e obter sua declaração expressa de ciência antes de aplicar",
            "alterar o perfil do cliente para agressivo, sem novo questionário, e realizar a aplicação",
            "realizar a aplicação normalmente, pois o pedido do cliente dispensa qualquer registro adicional"
        ],
        correta: 1
    },

    {
        id: "CPA-M1-118",
        curso: "cpa",
        modulo: 1,
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "difícil",
        contexto: "Um gerente, certificado CPA, pode recomendar dois fundos igualmente adequados ao perfil de uma cliente de 50 anos, com taxas e riscos parecidos. O fundo A gera remuneração maior para o banco. Durante a conversa, a cliente pergunta se a instituição ganha algo pela recomendação.",
        enunciado: "A conduta correta do gerente é:",
        alternativas: [
            "recomendar o fundo A sem mencionar a remuneração, pois essa informação é protegida por sigilo legal",
            "informar a remuneração apenas se o fundo recomendado for isento de Imposto de Renda para a cliente",
            "informar com transparência a remuneração do banco e basear a recomendação na adequação ao perfil",
            "recusar a pergunta, pois a remuneração do distribuidor só pode ser revelada à CVM, se ela solicitar"
        ],
        correta: 2
    },

    // ===================== MÓDULO 2 — GRUPO: TÍTULOS PÚBLICOS (18) =====================

    {
        id: "CPA-M2-001",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Renda fixa e renda variável",
        nivel: "fácil",
        contexto: "Rita, 34 anos, é farmacêutica e recebeu R$ 20 mil de participação nos lucros da empresa. Como nunca investiu, ela quer começar com segurança e deixa claro ao atendente que não gosta de surpresas: quer saber desde o início como o seu dinheiro será remunerado, seja por uma taxa definida ou por um indexador conhecido, como a Selic ou o IPCA.",
        enunciado: "O tipo de investimento que atende a essa característica é a:",
        alternativas: [
            "Renda fixa, com regras de remuneração definidas no momento da aplicação",
            "Renda variável, com retorno definido no momento da aplicação",
            "Renda fixa, com retorno garantido mesmo em caso de venda antecipada",
            "Renda variável, com regras de remuneração fixadas pelo Tesouro"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-002",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "fácil",
        contexto: "Valter, 40 anos, é eletricista autônomo e acabou de juntar R$ 12 mil. Como seu trabalho depende de chamados e há meses fracos, ele quer um título público com baixa oscilação de preço, que acompanhe a taxa básica de juros da economia e sirva para guardar um dinheiro que pode precisar a qualquer momento.",
        enunciado: "O título indicado é o:",
        alternativas: [
            "Tesouro Prefixado (LTN)",
            "Tesouro Selic (LFT)",
            "Tesouro Prefixado com Juros Semestrais (NTN-F)",
            "Tesouro IPCA+ (NTN-B Principal)"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-003",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "fácil",
        contexto: "Cláudio, 38 anos, é gerente de uma loja de materiais de construção e recebeu uma herança de R$ 80 mil. Ele quer um título público que proteja esse dinheiro da inflação no longo prazo, pois pretende usá-lo só daqui a 15 anos. Como tem salário suficiente para as despesas, não precisa de renda periódica e prefere receber tudo de uma vez no vencimento.",
        enunciado: "O título indicado para Cláudio é o:",
        alternativas: [
            "Tesouro Selic (LFT)",
            "Tesouro IPCA+ com Juros Semestrais (NTN-B)",
            "Tesouro IPCA+ (NTN-B Principal)",
            "Tesouro Prefixado (LTN)"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-004",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "fácil",
        contexto: "Seu Ivo, de 45 anos, é motorista de ônibus e contribui para o INSS, mas sabe que o benefício não vai cobrir todas as suas despesas quando parar de trabalhar. Ele quer usar o Tesouro Direto para garantir uma renda mensal complementar à aposentadoria, corrigida pela inflação, a partir dos 65 anos, investindo pequenos valores todo mês.",
        enunciado: "O título criado para esse objetivo é o:",
        alternativas: [
            "Tesouro Educa+",
            "Tesouro Selic",
            "Tesouro Prefixado",
            "Tesouro Renda+"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-005",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Em uma palestra de educação financeira promovida pelo banco para clientes, o gerente, certificado CPA, apresenta os títulos do Tesouro Direto. Um participante, professor de História aposentado, pergunta por que o governo emite títulos públicos, se já arrecada impostos, e se o Banco Central também pode emiti-los.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o Tesouro emite títulos para financiar o governo e rolar a dívida; o BC também emite títulos próprios para controlar os juros",
            "o Tesouro emite títulos para financiar o governo e rolar a dívida; o BC não emite, mas usa esses títulos na política monetária",
            "o BC emite os títulos para financiar o governo, e o Tesouro apenas administra o pagamento dos juros aos investidores",
            "o Tesouro emite títulos apenas para controlar a inflação, pois as despesas do governo são pagas só com impostos"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-006",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "médio",
        contexto: "Marta, 42 anos, é contadora e começou a estudar investimentos por conta própria. Em um vídeo, ouviu que os títulos públicos são registrados e negociados no sistema Selic e achou que poderia economizar comprando direto na fonte. Ela pergunta ao gerente, certificado CPA, se, como pessoa física, pode comprar diretamente nesse sistema.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o Selic é voltado às instituições, e a pessoa física compra pelo Tesouro Direto, por meio de uma instituição habilitada",
            "o Selic é aberto a qualquer investidor, que pode comprar sem intermediário e sem custo de custódia",
            "o Selic é voltado às instituições, e a pessoa física só consegue comprar títulos por meio de fundos de investimento",
            "o Tesouro Direto é um sistema do Banco Central em que a pessoa física compra sem nenhuma instituição intermediária"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-007",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "médio",
        contexto: "Diego, 29 anos, é desenvolvedor e vai começar a investir no Tesouro Direto por uma corretora digital que não cobra taxa própria de administração. Antes de aplicar, quer entender todos os custos para calcular a rentabilidade líquida. Ele pede ao assessor, certificado CPA, que explique quais custos obrigatórios existem nesse investimento.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "há taxa de custódia da B3 de 0,20% ao ano, com isenção para até R$ 10 mil em qualquer título",
            "não há nenhum custo obrigatório, pois a corretora escolhida não cobra taxa de administração",
            "há taxa de custódia da B3 de 1% ao ano, cobrada sobre o valor total investido em todos os títulos",
            "há taxa de custódia da B3 de 0,20% ao ano, com isenção para até R$ 10 mil no Tesouro Selic"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-008",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Paula, 30 anos, é vendedora em uma loja de shopping e recebe parte do salário em comissões, que variam bastante de um mês para outro. Ela conseguiu juntar R$ 15 mil e quer montar sua reserva de emergência no Tesouro Direto. Pergunta à gerente, certificada CPA, qual título é mais adequado e por quê.",
        enunciado: "A gerente deve indicar:",
        alternativas: [
            "o Tesouro Prefixado, pois a taxa contratada garante o mesmo valor em qualquer data de resgate antecipado",
            "o Tesouro IPCA+, pois a proteção contra a inflação elimina a oscilação em caso de resgate antecipado",
            "o Tesouro Selic, pois acompanha a taxa básica de juros e tem baixa oscilação em caso de resgate antecipado",
            "o Tesouro Selic, pois ele tem cobertura do FGC e garante liquidez imediata a qualquer hora do dia"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-009",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Álvaro, 52 anos, é economista de uma indústria e acompanha de perto o cenário macroeconômico. Ele acredita que a taxa de juros vai cair nos próximos anos e quer aproveitar esse cenário para travar uma boa rentabilidade, com R$ 200 mil que não vai precisar usar tão cedo. Ele pede orientação ao assessor, certificado CPA.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o Tesouro Prefixado trava a taxa atual e tende a se valorizar se os juros caírem, ganhando com a marcação a mercado",
            "o Tesouro Selic trava a taxa atual e tende a se valorizar se os juros caírem, ganhando com a marcação a mercado",
            "o Tesouro Prefixado trava a taxa atual, mas tende a se desvalorizar se os juros caírem, perdendo com a marcação",
            "o Tesouro IPCA+ trava a taxa total, sem relação com os juros futuros, e não sofre efeito da marcação a mercado"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-010",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Gilberto, 60 anos, é comerciante e está reduzindo o ritmo de trabalho. Ele tem R$ 300 mil disponíveis e quer um título público com rentabilidade prefixada, para saber exatamente quanto vai ganhar, mas que pague renda a cada seis meses para complementar o orçamento doméstico. Ele pede orientação ao gerente, certificado CPA.",
        enunciado: "O gerente deve indicar:",
        alternativas: [
            "o Tesouro Prefixado (LTN), que paga cupons semestrais e devolve o principal no vencimento",
            "o Tesouro IPCA+ com Juros Semestrais (NTN-B), que paga cupons prefixados e devolve o principal no vencimento",
            "o Tesouro Prefixado com Juros Semestrais (NTN-F), que paga todo o rendimento acumulado apenas no vencimento",
            "o Tesouro Prefixado com Juros Semestrais (NTN-F), que paga cupons semestrais e devolve o principal no vencimento"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-011",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "médio",
        contexto: "Carla, 36 anos, é arquiteta e mãe de Sofia, que hoje tem 5 anos. Ela quer juntar dinheiro desde já para a faculdade da filha e soube, por uma amiga, que existe um título do Tesouro criado especificamente para esse objetivo. Pergunta à gerente, certificada CPA, como funciona o Tesouro Educa+.",
        enunciado: "A gerente deve explicar que o Tesouro Educa+:",
        alternativas: [
            "acumula recursos corrigidos pela Selic e depois paga 60 parcelas mensais, equivalentes a cinco anos de estudo",
            "acumula recursos corrigidos pelo IPCA e depois paga 60 parcelas mensais, equivalentes a cinco anos de estudo",
            "acumula recursos corrigidos pelo IPCA e depois paga 240 parcelas mensais, equivalentes a vinte anos de estudo",
            "paga o valor total de uma vez na data de início do curso, sem correção pela inflação no período de acumulação"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-012",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Riscos dos títulos públicos",
        nivel: "médio",
        contexto: "Seu Mário, 70 anos, é aposentado e tem boa parte do patrimônio em títulos públicos. Em uma conversa sobre diversificação, ele diz ao gerente, certificado CPA, que títulos públicos não têm nenhum risco, porque são garantidos pelo governo e ainda contam com o FGC, e que por isso não vê motivo para diversificar.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que os títulos públicos:",
        alternativas: [
            "têm o menor risco de crédito do país, contam com o FGC até R$ 250 mil por CPF e não têm outro risco",
            "não têm nenhum risco de crédito ou de mercado, mas também não contam com a garantia do FGC",
            "têm risco de crédito maior que o dos CDBs, pois não contam com a garantia do FGC nem de outro fundo",
            "têm o menor risco de crédito do país, não contam com o FGC e têm risco de mercado na venda antecipada"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-013",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Riscos dos títulos públicos",
        nivel: "médio",
        contexto: "Rogério, 44 anos, é gerente de logística e comprou um Tesouro Prefixado há dois anos, com vencimento em 2029. Agora, precisa do dinheiro para ajudar o irmão com uma cirurgia, bem antes do vencimento. Preocupado, ele pergunta ao assessor, certificado CPA, se consegue resgatar o título e por qual valor.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o Tesouro recompra o título diariamente, sempre pelo valor aplicado mais a taxa contratada até a data do resgate",
            "o título só pode ser resgatado no vencimento, pois o Tesouro não faz recompras antes do prazo final",
            "o Tesouro recompra o título diariamente, mas pelo preço de mercado do dia, que pode ser maior ou menor que o esperado",
            "o Tesouro recompra o título diariamente, mas cobra uma multa fixa de 10% sobre o valor resgatado antes do prazo"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-014",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Beatriz comprou um Tesouro Prefixado a 12% ao ano. Um ano depois, os juros de mercado caíram bastante, e ela vendeu o título antes do vencimento. Ela comenta com o gerente, certificado CPA, que achava que um prefixado só poderia render exatamente a taxa contratada.",
        enunciado: "O gerente deve explicar que, na venda antecipada:",
        alternativas: [
            "ela rendeu exatamente 12% ao ano, pois a taxa contratada vale para qualquer data em que o título for vendido",
            "ela pode ter rendido acima de 12% ao ano, pois a queda dos juros elevou o preço do título na marcação",
            "ela necessariamente teve prejuízo, pois toda venda antes do vencimento gera perda no título prefixado",
            "ela rendeu abaixo de 12% ao ano, pois a queda dos juros reduziu o preço do título pela marcação a mercado"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-015",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "difícil",
        contexto: "Lucas, 35 anos, é analista financeiro e investe pelo Tesouro Direto por meio de uma corretora que não cobra taxa própria. Ele tem R$ 50.000,00 no Tesouro Selic e R$ 50.000,00 no Tesouro Prefixado, e aplica R$ 1.000,00 por mês na poupança do banco. Para o cálculo, considere os valores dos títulos estáveis ao longo do ano.",
        enunciado: "O custo anual aproximado de custódia da B3 que Lucas vai pagar é de:",
        alternativas: [
            "R$ 180,00: 0,20% sobre o que passa de R$ 10 mil no Tesouro Selic e 0,20% sobre o total no Prefixado",
            "R$ 200,00: os dois títulos pagam 0,20% ao ano sobre o valor total aplicado, sem nenhuma isenção",
            "R$ 160,00: os dois títulos são isentos da custódia nos primeiros R$ 10 mil investidos em cada um",
            "R$ 100,00: o Tesouro Selic é totalmente isento, e o Prefixado paga 0,20% ao ano sobre o total"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-016",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Um engenheiro de 48 anos quer aplicar R$ 100 mil por cinco anos e está dividido entre dois títulos com o mesmo prazo: um Tesouro Prefixado que paga 11% ao ano e um Tesouro IPCA+ que paga IPCA mais 6% ao ano. Antes de decidir, pede ao assessor, certificado CPA, a inflação que tornaria os dois equivalentes.",
        enunciado: "A inflação de equilíbrio entre os dois títulos é de aproximadamente:",
        alternativas: [
            "17,66%, pois a taxa do Prefixado é multiplicada pela taxa real do IPCA+",
            "4,72%, pois divide-se 1,11 por 1,06 e subtrai-se 1",
            "5,00%, pois basta subtrair a taxa real do IPCA+ da taxa do Prefixado",
            "6,00%, pois a inflação de equilíbrio é igual à taxa real do IPCA+"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-017",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Renato, 55 anos, é dentista e comprou um Tesouro Prefixado com Juros Semestrais no valor de R$ 50 mil. Ele recebeu o primeiro cupom, de R$ 500,00, cinco meses depois da compra. Ao conferir o extrato, diz ao gerente, certificado CPA, que o Imposto de Renda só seria cobrado no vencimento do título.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que, sobre esse cupom:",
        alternativas: [
            "não incide IR, pois o imposto sobre títulos com cupom é cobrado apenas no vencimento do principal",
            "incide IR de 15%, ou R$ 75,00, pois os cupons semestrais têm sempre a alíquota mínima da tabela",
            "incide IR de 22,5%, ou R$ 112,50, pois cada cupom é tributado no pagamento, pelo prazo desde a compra",
            "incide IR de 22,5%, ou R$ 112,50, mas o valor só é descontado no vencimento, junto com o principal"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-018",
        curso: "cpa",
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "difícil",
        contexto: "Luciana, 38 anos, é gerente de projetos e acabou de receber uma promoção. Ela tem três objetivos: montar uma reserva para imprevistos, pagar a faculdade do filho daqui a 12 anos e ter uma renda mensal na aposentadoria, daqui a 25 anos. Como prefere a simplicidade do Tesouro Direto, pede ao gerente, certificado CPA, um título para cada objetivo.",
        enunciado: "Na ordem reserva, faculdade e aposentadoria, os títulos mais adequados são:",
        alternativas: [
            "Tesouro Prefixado, Tesouro Renda+ e Tesouro Educa+",
            "Tesouro Selic, Tesouro Renda+ e Tesouro Educa+",
            "Tesouro IPCA+, Tesouro Educa+ e Tesouro Selic",
            "Tesouro Selic, Tesouro Educa+ e Tesouro Renda+"
        ],
        correta: 3
    },

    // ===================== MÓDULO 2 — GRUPO: RENDA FIXA BANCÁRIA E PRIVADA (18) =====================

    {
        id: "CPA-M2-019",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "fácil",
        contexto: "Seu Arlindo, 58 anos, é produtor de soja e associado há 20 anos de uma cooperativa de crédito da região. Depois da colheita, sobraram R$ 150 mil no caixa. Ele confia na cooperativa e quer aplicar parte desse valor em um título de renda fixa emitido pela própria cooperativa.",
        enunciado: "O título indicado para ele é o:",
        alternativas: [
            "CDB",
            "RDC",
            "RDB",
            "LCA"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-020",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "fácil",
        contexto: "Heloísa, 46 anos, é médica e paga muito Imposto de Renda sobre o salário. Ela quer diversificar com um título bancário de renda fixa que seja isento de Imposto de Renda para pessoa física e que tenha lastro em financiamentos imobiliários, pois acredita na solidez do setor.",
        enunciado: "O título que atende a essas características é a:",
        alternativas: [
            "LCA",
            "CDB",
            "Debênture comum",
            "LCI"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-021",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "fácil",
        contexto: "Maurício, 39 anos, é engenheiro e está começando a investir em crédito privado. Ao analisar uma debênture de uma empresa de energia na plataforma da corretora, ele vê que o título recebeu nota AAA de uma agência de classificação de risco e quer entender o que isso significa.",
        enunciado: "Essa nota indica que o emissor tem:",
        alternativas: [
            "A melhor qualidade de crédito da escala",
            "O maior risco de crédito da escala",
            "Rentabilidade garantida pela agência",
            "Garantia do FGC sobre o título"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-022",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "fácil",
        contexto: "Rubens, 50 anos, é corretor de imóveis e conhece bem o mercado imobiliário. Na plataforma da corretora, encontrou Certificados de Recebíveis Imobiliários (CRI) ligados a grandes empreendimentos e quer entender quem é o responsável por emitir esses títulos antes de investir.",
        enunciado: "O CRI é emitido por uma:",
        alternativas: [
            "Cooperativa de crédito",
            "Agência de fomento",
            "Companhia securitizadora",
            "Sociedade corretora"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-023",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "médio",
        contexto: "Laura, 33 anos, é jornalista e tem um CDB e um RDB, ambos com vencimento em dois anos. Ela vai se mudar para o exterior e pensa em deixar parte das aplicações com o irmão, que ficará no Brasil. Ela pergunta ao gerente, certificado CPA, se pode transferir um deles para o nome do irmão antes do vencimento.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o RDB pode ser transferido a outro investidor, enquanto o CDB é intransferível",
            "os dois podem ser transferidos, desde que o banco emissor autorize a operação",
            "nenhum dos dois pode ser transferido, pois ambos são títulos bancários",
            "o CDB pode ser transferido a outro investidor, enquanto o RDB é intransferível"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-024",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "médio",
        contexto: "Marcelo, 41 anos, é gerente comercial e aplicou R$ 80.000,00 em CDB de um banco de médio porte, atraído por uma taxa acima da média. Depois de ler notícias sobre a quebra de outra instituição, ficou inseguro e pergunta ao gerente, certificado CPA, o que garante o pagamento do seu dinheiro.",
        enunciado: "O gerente deve explicar que o pagamento é garantido:",
        alternativas: [
            "somente pelo FGC, que paga o valor integral em qualquer situação de atraso",
            "primeiro pelo próprio banco emissor e, se ele quebrar, pelo FGC até R$ 250 mil",
            "primeiro pelo FGC e, se o fundo não tiver recursos, pelo Tesouro Nacional",
            "somente pelo banco emissor, pois o CDB não conta com nenhuma garantia adicional"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-025",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "médio",
        contexto: "Sr. Jonas, 55 anos, é produtor rural de milho e soja e tem conta no banco há anos. Ao comparar as opções de renda fixa, percebe que a LCA oferecida rende uma taxa nominal menor que a de um CDB do mesmo prazo. Ele pergunta ao gerente, certificado CPA, por que isso acontece e se a LCA tem alguma garantia.",
        enunciado: "O gerente deve explicar que a LCA:",
        alternativas: [
            "é isenta de IR para pessoa física, tem lastro no agronegócio, mas não conta com o FGC",
            "é tributada como o CDB, tem lastro no agronegócio e conta com o FGC",
            "é isenta de IR para pessoa física, tem lastro no agronegócio e conta com o FGC",
            "é isenta de IR para pessoa física, tem lastro imobiliário e conta com o FGC"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-026",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "médio",
        contexto: "Fernando, 47 anos, é engenheiro civil e trabalha com obras de saneamento. Na plataforma da corretora, encontra a LCD, um título mais recente que não conhecia, e fica curioso pela ligação com a área em que atua. Ele pergunta ao assessor, certificado CPA, quem emite a LCD e qual é a sua finalidade.",
        enunciado: "O assessor deve explicar que a LCD:",
        alternativas: [
            "é emitida por bancos de desenvolvimento para financiar projetos de infraestrutura",
            "é emitida por bancos comerciais para financiar a compra de imóveis residenciais",
            "é emitida pelo Tesouro Nacional para financiar o déficit público de longo prazo",
            "é emitida por cooperativas de crédito para financiar pequenos produtores rurais"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-027",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "médio",
        contexto: "Ana, 37 anos, é veterinária e atende fazendas da região. Ela quer aplicar R$ 40 mil em um CRA isento de IR, que paga uma taxa maior do que a LCA do seu banco. Antes de decidir, pergunta à assessora, certificada CPA, se o CRA tem a mesma proteção de uma LCA em caso de problema.",
        enunciado: "A assessora deve explicar que o CRA:",
        alternativas: [
            "tem FGC até R$ 250 mil, assim como a LCA, e o risco depende da securitizadora",
            "não tem FGC, e o risco depende principalmente da qualidade dos recebíveis que servem de lastro",
            "não tem FGC, e o risco depende apenas da solidez da corretora que distribuiu o título",
            "tem FGC até R$ 250 mil, e o risco depende apenas da qualidade dos recebíveis do lastro"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-028",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Debêntures",
        nivel: "médio",
        contexto: "Rodrigo, 43 anos, é gestor de uma rede de academias e quer diversificar com crédito privado. Ao pesquisar debêntures na corretora, percebe que algumas aparecem como isentas de Imposto de Renda e outras não, mesmo com prazos e taxas parecidos. Ele pergunta ao assessor, certificado CPA, o motivo dessa diferença.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "todas as debêntures são isentas para pessoa física, desde que mantidas até o vencimento",
            "as debêntures comuns são isentas para pessoa física; as incentivadas pagam a tabela regressiva",
            "a isenção depende do rating: debêntures com nota AAA são isentas para pessoa física",
            "as incentivadas, de infraestrutura, são isentas para pessoa física; as comuns são tributadas"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-029",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "médio",
        contexto: "Hugo, 50 anos, é empresário do setor de móveis e encontrou na corretora dois títulos ligados à mesma construtora: um CRI e uma debênture, com prazos semelhantes. Antes de escolher, pergunta à gerente, certificada CPA, qual é a diferença de estrutura entre os dois.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "o CRI nasce da securitização de recebíveis, enquanto a debênture é dívida emitida pela própria empresa",
            "a debênture nasce da securitização de recebíveis, enquanto o CRI é dívida emitida pela própria empresa",
            "os dois são dívidas emitidas pela própria empresa, mudando apenas o prazo de vencimento",
            "os dois nascem da securitização de recebíveis, mudando apenas o setor econômico do lastro"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-030",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "médio",
        contexto: "Eduardo, 45 anos, é advogado e está comparando duas debêntures de mesmo prazo e mesmo setor. A de nota AA paga CDI + 1% ao ano, e a de nota BB paga CDI + 4% ao ano. Achando estranho que títulos tão parecidos paguem taxas tão diferentes, ele pergunta ao assessor, certificado CPA, por que há essa diferença.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o emissor de rating mais baixo tem menos risco de crédito e, por isso, pode oferecer taxa maior",
            "o rating não influencia a taxa, que depende apenas do volume emitido por cada empresa",
            "o emissor de rating mais baixo tem mais risco, e o investidor exige taxa maior para compensar",
            "o emissor de rating mais baixo tem mais risco, mas a taxa maior é garantida pelo FGC"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-031",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "médio",
        contexto: "Uma agência internacional de classificação de risco anuncia o rebaixamento da nota de crédito do Brasil, e o assunto domina o noticiário. Um cliente de 60 anos, que tem boa parte da carteira em títulos públicos e privados brasileiros, pergunta ao gerente, certificado CPA, que efeito isso tende a ter sobre os títulos do país.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o risco soberano percebido diminui, e os investidores tendem a aceitar taxas menores para financiar o país",
            "o rebaixamento só afeta as empresas privadas, sem efeito sobre os títulos públicos",
            "o risco soberano percebido aumenta, mas as taxas não mudam, pois são fixadas pelo Tesouro",
            "o risco soberano percebido aumenta, e os investidores tendem a exigir taxas maiores para financiar o país"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-032",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "difícil",
        contexto: "Otávio, 52 anos, é gerente industrial e vai aplicar R$ 100 mil por três anos. Ele compara uma LCI que paga 90% do CDI com um CDB que paga 110% do CDI, ambos de bancos grandes. Um colega de trabalho disse que a LCI é sempre melhor, e Otávio acha que ela vence por ser isenta de IR.",
        enunciado: "O assessor, certificado CPA, deve explicar que:",
        alternativas: [
            "a LCI rende mais, pois 110% do CDI menos 22,5% de IR equivale a 85,25% do CDI líquido",
            "o CDB rende mais, pois 110% do CDI menos 15% de IR equivale a 93,5% do CDI líquido",
            "os dois rendem igual, pois a isenção compensa exatamente a diferença de 20 pontos",
            "a LCI rende mais, pois 110% do CDI menos 20% de IR equivale a 88% do CDI líquido"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-033",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "difícil",
        contexto: "Cecília, 29 anos, é engenheira de alimentos e vai usar o dinheiro para a festa de casamento, em cerca de 200 dias. Ela tem um CDB que paga 100% do CDI e recebeu a oferta de uma LCA de mesmo prazo. Ela pergunta ao gerente, certificado CPA, qual taxa mínima a LCA precisaria pagar para render igual ao CDB.",
        enunciado: "A taxa de equilíbrio da LCA é de:",
        alternativas: [
            "77,5% do CDI, pois o CDB tem IR de 22,5% nesse prazo e fica com 77,5% do CDI líquido",
            "85% do CDI, pois o CDB tem IR de 15% nesse prazo e fica com 85% do CDI líquido",
            "80% do CDI, pois o CDB tem IR de 20% nesse prazo e fica com 80% do CDI líquido",
            "100% do CDI, pois a isenção não altera a comparação entre os dois títulos"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-034",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "difícil",
        contexto: "Roberto, 57 anos, é médico e tem, no mesmo banco, R$ 150.000,00 em CDB e R$ 120.000,00 em LCA, além de R$ 100.000,00 em um CRI distribuído por esse banco. Ele também tem R$ 80.000,00 em ações custodiadas em uma corretora independente. O banco sofre liquidação extrajudicial.",
        enunciado: "O valor garantido pelo FGC a Roberto é de:",
        alternativas: [
            "R$ 250.000,00, pois CDB e LCA somam R$ 270 mil no mesmo banco, e o CRI não tem FGC",
            "R$ 270.000,00, pois CDB e LCA são cobertos integralmente, e o CRI não tem FGC",
            "R$ 350.000,00, pois cada produto tem limite próprio de R$ 250 mil no FGC",
            "R$ 370.000,00, pois o CRI distribuído pelo banco também tem cobertura do FGC"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-035",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "difícil",
        contexto: "Juliana, 40 anos, é analista de marketing e tem uma debênture prefixada de uma empresa de varejo, comprada há um ano. Após a empresa ter o rating rebaixado por uma agência, ela vê o preço do título cair na plataforma e diz ao assessor, certificado CPA, que isso não faz sentido, pois a taxa contratada não mudou.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o rebaixamento reduziu a taxa exigida pelo mercado, o que reduz o preço do título na venda antecipada",
            "o rebaixamento elevou a taxa exigida pelo mercado, o que reduz o preço do título na venda antecipada",
            "o rebaixamento alterou a taxa contratada, que passa a ser menor até o vencimento do título",
            "o preço caiu apenas por falta de compradores, sem relação com o rebaixamento do rating"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-036",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "difícil",
        contexto: "Denise, 44 anos, é corretora de seguros e vai receber R$ 30.000,00 de comissão atrasada. Ela quer aplicar em algo isento de IR, mas o marido está em processo de troca de emprego, e ela pode precisar do dinheiro a qualquer momento nos próximos meses. O gerente, certificado CPA, compara um CDB com liquidez diária e uma LCI com carência.",
        enunciado: "A orientação mais adequada é:",
        alternativas: [
            "preferir a LCI, pois a isenção de IR garante o resgate a qualquer momento sem nenhuma perda",
            "preferir a LCI, pois a carência só se aplica a valores acima de R$ 250 mil cobertos pelo FGC",
            "preferir o CDB, pois ele é isento de IR quando tem liquidez diária e fica mais de 30 dias aplicado",
            "preferir o CDB com liquidez diária, pois a carência da LCI pode impedir o resgate quando ela precisar"
        ],
        correta: 3
    },

    // ===================== MÓDULO 2 — GRUPO: POUPANÇA, TR E TLP (8) =====================

    {
        id: "CPA-M2-037",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "fácil",
        contexto: "Dona Neusa, 72 anos, é aposentada e guarda suas economias na caderneta de poupança há mais de 40 anos. O neto insiste que ela deveria mudar tudo para outros investimentos. Antes de decidir, ela pergunta ao gerente quais são as principais vantagens da poupança para a pessoa física.",
        enunciado: "As principais vantagens da poupança para a pessoa física são:",
        alternativas: [
            "Rentabilidade acima da Selic e garantia do FGC",
            "Isenção de IR e rentabilidade garantida acima da inflação",
            "Liquidez diária com rendimento proporcional aos dias",
            "Isenção de IR e garantia do FGC"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-038",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "fácil",
        contexto: "Sr. Anselmo, 58 anos, é dono de uma metalúrgica e pretende pedir um financiamento ao BNDES para comprar máquinas. Ao ler a proposta, estranha um termo que não aparecia no financiamento anterior, feito em 2015. Ele pergunta qual taxa passou a ser usada, desde 2018, como referência nos novos financiamentos do BNDES, no lugar da TJLP.",
        enunciado: "Essa taxa é a:",
        alternativas: [
            "TLP",
            "TR",
            "Selic",
            "TBF"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-039",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Com a Selic em 10% ao ano, Seu Almir, 66 anos, aposentado, compara a poupança com outros investimentos. Ele diz ao gerente, certificado CPA, que leu em uma revista que a poupança sempre rende 70% da Selic mais a TR, e usa essa conta para decidir onde aplicar.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que, com a Selic nesse nível, a poupança rende:",
        alternativas: [
            "70% da Selic mais a TR, pois essa regra vale para qualquer nível da taxa básica de juros",
            "0,5% ao mês mais a TR, pois a regra dos 70% só vale com a Selic acima de 8,5% ao ano",
            "0,5% ao mês mais a TR, pois a regra dos 70% só vale com a Selic igual ou abaixo de 8,5%",
            "100% da Selic, pois a poupança passa a acompanhar integralmente a taxa básica de juros"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-040",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Rafael, 27 anos, é auxiliar administrativo e depositou R$ 5 mil na poupança no dia 5 de março, para uma viagem. Com a mudança da data da viagem, ele precisa sacar o dinheiro no dia 3 de abril. Antes de sacar, pergunta ao gerente, certificado CPA, se vai receber o rendimento do período.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "sim, pois o rendimento da poupança é calculado diariamente e creditado a cada dia útil",
            "sim, pois basta que o dinheiro fique aplicado por pelo menos 28 dias para receber o rendimento",
            "não, pois a poupança só paga rendimento para valores mantidos por pelo menos seis meses",
            "não, pois o rendimento só é creditado no aniversário, e o saque antes dele perde o rendimento do mês"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-041",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Em uma aula sobre o sistema financeiro para uma turma de pós-graduação em finanças, o professor, certificado CPA, apresenta dados sobre o volume de recursos na caderneta de poupança. Um aluno, que trabalha em uma construtora, pergunta qual é a principal função econômica dos recursos depositados na poupança.",
        enunciado: "O professor deve explicar que:",
        alternativas: [
            "a maior parte dos recursos é direcionada, por regra, ao financiamento da dívida pública",
            "a maior parte dos recursos é direcionada, por regra, ao financiamento habitacional",
            "a maior parte dos recursos é direcionada, por regra, ao crédito para o agronegócio",
            "os recursos ficam integralmente depositados no Banco Central, sem uso pelo banco"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-042",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "médio",
        contexto: "Sr. Vicente, 49 anos, é técnico em eletrônica e financiou a casa própria há oito anos. Ao revisar o contrato, vê a TR como índice de correção do saldo devedor e não entende o que ela significa. Ele pergunta ao gerente, certificado CPA, o que é essa taxa e onde mais ela aparece.",
        enunciado: "O gerente deve explicar que a TR:",
        alternativas: [
            "é calculada pelo IBGE, corrige a poupança, o FGTS e financiamentos imobiliários e acompanha a inflação oficial",
            "é calculada pelo Banco Central e corrige apenas os financiamentos do BNDES, sempre acima da Selic",
            "é calculada pelo Banco Central, corrige a poupança, o FGTS e financiamentos imobiliários e muitas vezes fica zerada",
            "é definida pelo Copom a cada reunião e corrige apenas a poupança, sempre acima de zero"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-043",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "difícil",
        contexto: "Com a Selic em 7% ao ano e a TR zerada, Seu Paulo compara a poupança com um CDB que paga 100% do CDI por mais de dois anos. Considere o CDI igual à Selic. Ele acha que a poupança rende mais por ser isenta.",
        enunciado: "O gerente, certificado CPA, deve explicar que:",
        alternativas: [
            "o CDB rende mais: cerca de 5,95% líquido, contra 4,9% ao ano da poupança",
            "a poupança rende mais: 4,9% ao ano, contra cerca de 4,55% líquido do CDB",
            "os dois rendem igual, pois a isenção compensa exatamente o IR do CDB",
            "a poupança rende mais: 6,17% ao ano, contra cerca de 5,95% líquido do CDB"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-044",
        curso: "cpa",
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "difícil",
        contexto: "Sr. Anderson, 55 anos, é dono de uma indústria de embalagens e tem um financiamento do BNDES atrelado à TLP, contratado para ampliar a fábrica. Após um período de inflação alta, percebeu que o custo do financiamento subiu, mesmo sem qualquer mudança no contrato. Ele pergunta ao consultor, certificado CPA, por que isso aconteceu.",
        enunciado: "O consultor deve explicar que:",
        alternativas: [
            "a TLP é uma taxa fixa definida pelo CMN, e a alta decorre apenas de uma revisão anual do conselho",
            "a TLP combina o IPCA com uma taxa real ligada aos títulos públicos, e a alta da inflação eleva o custo",
            "a TLP acompanha a TR, que sobe automaticamente sempre que a inflação ultrapassa a meta",
            "a TLP combina a Selic com o spread do BNDES, e a inflação não tem efeito sobre o custo"
        ],
        correta: 1
    },

    // ===================== MÓDULO 2 — GRUPO: TRIBUTAÇÃO DE INVESTIMENTOS (14) =====================

    {
        id: "CPA-M2-045",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "fácil",
        contexto: "Tiago, 30 anos, é garçom e aplicou R$ 3 mil em um CDB de liquidez diária. Uma semana depois, pensou em resgatar para comprar um celular, mas o gerente avisou que haveria IOF. Ele decide esperar e pergunta a partir de quantos dias de aplicação deixa de pagar IOF no resgate.",
        enunciado: "O IOF sobre os rendimentos deixa de incidir a partir de:",
        alternativas: [
            "30 dias",
            "180 dias",
            "360 dias",
            "720 dias"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-046",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "fácil",
        contexto: "Rosana, 50 anos, é professora e investe há dois anos em um fundo de renda fixa. Ao analisar o extrato anual, percebe que o número de cotas diminuiu em dois meses do ano, mesmo sem ter feito nenhum resgate. Preocupada, procura o banco para entender o que aconteceu.",
        enunciado: "Os meses em que ocorre o come-cotas são:",
        alternativas: [
            "Janeiro e julho",
            "Junho e dezembro",
            "Maio e novembro",
            "Março e setembro"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-047",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "fácil",
        contexto: "Paulo, 36 anos, é bombeiro e quer aplicar R$ 25 mil em um CDB para trocar de carro no futuro. Ele sabe que o Imposto de Renda cai com o tempo e quer planejar o resgate para pagar o mínimo possível. Pergunta qual é a menor alíquota de IR possível em um CDB e a partir de quando ela vale.",
        enunciado: "A alíquota mínima e o prazo são:",
        alternativas: [
            "10%, acima de 10 anos",
            "15%, acima de 360 dias",
            "20%, acima de 720 dias",
            "15%, acima de 720 dias"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-048",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Sandra, 48 anos, é enfermeira e resgatou um CDB de R$ 40 mil que tinha havia um ano e meio. É o primeiro investimento que resgata, e ela ficou em dúvida se precisa emitir alguma guia de imposto. Ela pergunta ao gerente, certificado CPA, se precisa recolher o IR por conta própria e sobre qual valor ele incide.",
        enunciado: "O gerente deve explicar que o IR:",
        alternativas: [
            "incide sobre o valor total resgatado e é retido na fonte pela instituição",
            "incide só sobre o rendimento e é retido na fonte pela instituição no resgate",
            "incide só sobre o rendimento, mas deve ser recolhido por ela até o mês seguinte",
            "incide sobre o valor total resgatado e deve ser pago por ela na declaração anual"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-049",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Isenções",
        nivel: "médio",
        contexto: "Frederico, 54 anos, é empresário e está incomodado com o imposto pago sobre as aplicações. Ele quer montar uma carteira de renda fixa só com produtos isentos de IR para pessoa física, mesmo que isso reduza um pouco a diversificação, e pede ao assessor, certificado CPA, uma lista de opções.",
        enunciado: "O assessor deve indicar:",
        alternativas: [
            "poupança, CDB, LCI e LCA",
            "LCI, LCA, CRI e fundos de renda fixa",
            "poupança, LCI, LCA, CRI e CRA",
            "poupança, LCA, debêntures comuns e CRA"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-050",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "médio",
        contexto: "Seu Walter, 64 anos, é aposentado e investe em um fundo de renda fixa de longo prazo. Ao ver no extrato a cobrança do come-cotas em maio, conclui que esse é todo o imposto que vai pagar e que, no resgate, não haverá mais descontos. Ele pergunta ao gerente, certificado CPA, se o come-cotas é o imposto final sobre seus rendimentos.",
        enunciado: "O gerente deve explicar que o come-cotas:",
        alternativas: [
            "antecipa o IR a 15% a cada semestre, e no resgate há o ajuste conforme a tabela regressiva",
            "é o IR definitivo a 15%, sem nenhum ajuste no resgate, qualquer que seja o prazo",
            "antecipa o IR a 22,5% a cada semestre, e no resgate há devolução do que foi pago a mais",
            "é cobrado só no resgate, com alíquota definida pelo prazo em que o dinheiro ficou aplicado"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-051",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "médio",
        contexto: "Pedro, 39 anos, é analista de dados e investe em um fundo de ações e em um fundo de renda fixa na mesma instituição. Ao comparar os extratos, percebe que só um deles teve redução no número de cotas em maio e novembro. Ele pergunta à assessora, certificada CPA, por que só um deles tem come-cotas.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "fundos de ações não têm come-cotas e são isentos de IR no resgate para pessoa física",
            "fundos de ações não têm come-cotas e pagam 15% sobre o ganho apenas no resgate",
            "fundos de renda fixa não têm come-cotas e pagam 15% sobre o ganho apenas no resgate",
            "fundos de ações têm come-cotas anual, cobrado no mês de dezembro, a 15%"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-052",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Gabriela, 31 anos, é publicitária e aplicou R$ 20 mil em um fundo classificado como de curto prazo. Ela sabe que, em um CDB, a alíquota de IR chega a 15% depois de dois anos, e pretende deixar o dinheiro aplicado por mais de três anos. Pergunta ao gerente, certificado CPA, se, com o tempo, a alíquota cairá para 15%.",
        enunciado: "O gerente deve explicar que, no fundo de curto prazo:",
        alternativas: [
            "a alíquota segue a tabela regressiva completa e chega a 15% após 720 dias",
            "a alíquota é fixa de 20% desde o primeiro dia, sem nenhuma redução",
            "a alíquota é de 22,5% até 180 dias e cai para 15% depois disso",
            "a alíquota é de 22,5% até 180 dias e de 20% depois disso, sem chegar a 15%"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-053",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "médio",
        contexto: "Camila, 26 anos, é recepcionista e aplicou R$ 10 mil em um CDB, mas precisou resgatar tudo com 10 dias de aplicação para pagar o conserto do carro. Ao ver o valor líquido, ficou surpresa com o IOF descontado. Ela pergunta à gerente, certificada CPA, sobre qual valor o imposto foi calculado.",
        enunciado: "A gerente deve explicar que o IOF:",
        alternativas: [
            "incide sobre o rendimento, com alíquota regressiva que cai a zero no 30º dia",
            "incide sobre o valor aplicado, com alíquota regressiva que cai a zero no 30º dia",
            "incide sobre o rendimento, com alíquota fixa de 0,38% em qualquer prazo",
            "incide sobre o valor resgatado, com alíquota regressiva que cai a zero no 60º dia"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-054",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Vítor, 45 anos, é gerente de uma rede de supermercados e está comparando fundos de renda fixa. Percebeu que alguns são tributados como de longo prazo e outros como de curto prazo, mesmo quando ele pretende deixar o dinheiro aplicado pelo mesmo tempo. Pergunta ao assessor, certificado CPA, o que define essa classificação.",
        enunciado: "O assessor deve explicar que a classificação depende:",
        alternativas: [
            "do prazo em que o cliente mantém o dinheiro aplicado, sendo longo prazo acima de 720 dias",
            "do prazo médio da carteira do fundo, sendo longo prazo acima de 720 dias",
            "do prazo médio da carteira do fundo, sendo longo prazo acima de 365 dias",
            "do tipo de cota do fundo, sendo longo prazo todos os fundos de cotas fechadas"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-055",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "difícil",
        contexto: "Marta, 33 anos, é secretária e aplicou em um CDB para juntar dinheiro para uma viagem. Com um imprevisto na família, resgatou tudo com 20 dias de aplicação. O rendimento bruto foi de R$ 300,00, e a alíquota de IOF para esse prazo é de 33%. Ela pede ao gerente, certificado CPA, o valor líquido do rendimento.",
        enunciado: "O rendimento líquido de Marta é de aproximadamente:",
        alternativas: [
            "R$ 133,50: IOF de R$ 99,00 e IR de 22,5% sobre os R$ 300,00 brutos",
            "R$ 201,00: IOF de R$ 99,00, sem IR para prazos menores que 30 dias",
            "R$ 232,50: IR de 22,5% sobre os R$ 300,00, sem IOF para CDBs",
            "R$ 155,77: IOF de R$ 99,00 e IR de 22,5% sobre os R$ 201,00 restantes"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-056",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "difícil",
        contexto: "Lucas, 42 anos, é gerente de uma concessionária e resgatou um CDB com 400 dias de aplicação, com rendimento bruto de R$ 2.000,00. O valor será usado na reforma da cozinha. Ao conferir o extrato, ele diz ao gerente, certificado CPA, que pagou 15% de IR, pois ficou mais de um ano aplicado.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que o IR foi de:",
        alternativas: [
            "R$ 300,00, pois acima de 360 dias a alíquota já é de 15%",
            "R$ 350,00, pois de 361 a 720 dias a alíquota é de 17,5%",
            "R$ 400,00, pois de 181 a 720 dias a alíquota é de 20%",
            "R$ 450,00, pois acima de 180 dias a alíquota é de 22,5%"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-057",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "difícil",
        contexto: "Seu Moacir, 61 anos, é comerciante e investiu em um fundo de renda fixa de longo prazo, que lhe rendeu R$ 1.000,00 no primeiro semestre, com come-cotas em maio. Ele precisou do dinheiro para ajudar a filha e resgatou tudo após 200 dias de aplicação, sem novos rendimentos depois disso.",
        enunciado: "No resgate, o IR complementar retido foi de:",
        alternativas: [
            "R$ 75,00, pois o come-cotas já reteve 15% e no resgate a alíquota devida era de 22,5%",
            "R$ 0,00, pois o come-cotas é o imposto definitivo sobre esse rendimento",
            "R$ 50,00, pois o come-cotas já reteve 15% e no resgate a alíquota devida era de 20%",
            "R$ 200,00, pois o come-cotas é descontado de novo no resgate, sem compensação"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-058",
        curso: "cpa",
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "difícil",
        contexto: "Débora, 47 anos, é advogada e manteve os recursos em um fundo de renda fixa de curto prazo por três anos, sem fazer resgates. Ela leu que, depois de dois anos, a alíquota de IR cai para o mínimo e, ao planejar o resgate, diz ao gerente, certificado CPA, que já tem direito à alíquota mínima de 15%.",
        enunciado: "Para corrigir a cliente, o gerente deve explicar que:",
        alternativas: [
            "o fundo de curto prazo tem alíquota mínima de 20%, mesmo após três anos de aplicação",
            "o fundo de curto prazo tem alíquota mínima de 17,5%, alcançada após dois anos de aplicação",
            "a alíquota mínima de 15% vale, mas só é aplicada após cinco anos no fundo de curto prazo",
            "o fundo de curto prazo é isento de IR após três anos, pois não sofre o come-cotas"
        ],
        correta: 0
    },

    // ===================== MÓDULO 2 — GRUPO: RENDA VARIÁVEL E COE (18) =====================

    {
        id: "CPA-M2-059",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "fácil",
        contexto: "Três amigos de faculdade, formados em Engenharia, querem abrir uma empresa de tecnologia agrícola. Eles têm planos ambiciosos e querem que o capital seja dividido em ações, permitindo, no futuro, a entrada de muitos novos sócios e até uma eventual abertura de capital na bolsa.",
        enunciado: "O tipo de sociedade adequado é a:",
        alternativas: [
            "Sociedade limitada (LTDA)",
            "Cooperativa de crédito",
            "Sociedade anônima (S.A.)",
            "Microempreendedor individual (MEI)"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-060",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Índices da bolsa",
        nivel: "fácil",
        contexto: "Durante o café da manhã, Seu Augusto, 68 anos, aposentado, lê no jornal que o principal indicador de desempenho da bolsa brasileira subiu 2% no dia, puxado pelas ações de bancos e de mineração. O neto, que está começando a investir, pergunta a ele qual é o nome desse indicador.",
        enunciado: "Esse indicador é o:",
        alternativas: [
            "IPCA",
            "CDI",
            "IGP-M",
            "Ibovespa"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-061",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "fácil",
        contexto: "A diretoria de uma fabricante de autopeças precisa de R$ 50 milhões para construir uma nova fábrica. Em reunião, os executivos avaliam duas alternativas: trazer novos sócios para a empresa ou tomar recursos emprestados de investidores, que serão pagos com juros ao longo dos anos.",
        enunciado: "A emissão de debêntures é um exemplo de captação de:",
        alternativas: [
            "Capital próprio",
            "Capital de terceiros",
            "Capital social",
            "Reserva de lucros"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-062",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "fácil",
        contexto: "Sandro, 50 anos, é empresário e tem perfil moderado. Ele quer um produto que combine renda fixa com uma estratégia atrelada ao desempenho de um índice da bolsa americana, com opção de proteção do capital no vencimento, pois não aceita perder o valor investido se levar a aplicação até o fim.",
        enunciado: "Esse produto é o:",
        alternativas: [
            "CDB",
            "LCA",
            "COE",
            "CRI"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-063",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "médio",
        contexto: "Uma empresa familiar de capital fechado, fabricante de cosméticos há 30 anos, avalia listar suas ações na B3 para financiar a expansão internacional. O diretor financeiro, filho do fundador, pergunta à consultora, certificada CPA, o que muda para a empresa ao se tornar uma companhia aberta.",
        enunciado: "A consultora deve explicar que a companhia aberta:",
        alternativas: [
            "precisa de registro na CVM, pode negociar ações no mercado e deve divulgar informações periódicas",
            "precisa de registro no Banco Central, pode negociar ações no mercado e fica dispensada de divulgar balanços",
            "dispensa registro na CVM, mas precisa manter todas as ações nas mãos dos sócios fundadores",
            "precisa de registro na CVM, mas só pode negociar ações diretamente entre os sócios, fora da bolsa"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-064",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Ricardo, 37 anos, é engenheiro e comprou recentemente ações de uma grande empresa de energia. Ao ler o relatório anual, vê referências ao conselho de administração e à diretoria executiva e não entende a diferença. Ele pergunta ao assessor, certificado CPA, qual é o papel do conselho de administração em uma companhia aberta.",
        enunciado: "O assessor deve explicar que o conselho de administração:",
        alternativas: [
            "executa o dia a dia da empresa, substituindo a diretoria na gestão operacional",
            "define a estratégia, elege e fiscaliza a diretoria e zela pelos acionistas",
            "fiscaliza apenas as contas da empresa, sem participar das decisões estratégicas",
            "define a estratégia e fixa o preço das ações negociadas na bolsa a cada pregão"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-065",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Carla, 44 anos, é economista e está analisando uma empresa de saneamento que apresenta bons resultados. Ao pesquisar a composição acionária, vê que o controlador detém 95% das ações e que apenas 5% estão em circulação no mercado. Ela pergunta à assessora, certificada CPA, que impacto isso tem para quem investe.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "um free float baixo tende a aumentar a liquidez, pois há menos ações disputadas pelos investidores",
            "o free float mede o lucro distribuído aos acionistas e não tem relação com a liquidez da ação",
            "um free float baixo garante preços mais estáveis, pois o controlador impede grandes oscilações",
            "um free float baixo tende a reduzir a liquidez, dificultando comprar ou vender sem afetar o preço"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-066",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Márcio, 49 anos, é auditor e, por experiência profissional, valoriza muito a transparência das empresas. Ao montar sua carteira de ações, quer priorizar empresas com o mais alto padrão de governança da B3, mesmo que isso reduza as opções disponíveis, e pede orientação ao assessor, certificado CPA.",
        enunciado: "O assessor deve indicar empresas do Novo Mercado, pois esse segmento:",
        alternativas: [
            "exige que o capital seja formado só por ações ordinárias, além de regras mais rígidas de governança",
            "exige que o capital seja formado só por ações preferenciais, além de regras mais rígidas de governança",
            "garante rentabilidade mínima aos acionistas, além de regras mais rígidas de governança",
            "dispensa a divulgação de resultados trimestrais, em troca de regras mais rígidas de governança"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-067",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "médio",
        contexto: "Seu Joaquim, 65 anos, é aposentado e investe em ações pensando nos dividendos. Uma empresa de energia que ele acompanha anuncia dividendos com data com no dia 10. Ele ainda não tem as ações e pergunta ao assessor, certificado CPA, até quando precisa tê-las para receber o provento.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "ele precisa ter as ações na data de pagamento, mesmo que as tenha comprado depois da data com",
            "ele precisa ter as ações há pelo menos 30 dias antes da data com para ter direito ao provento",
            "ele precisa ter as ações ao fim do pregão da data com, e quem comprar a partir da data ex não recebe",
            "qualquer acionista recebe o provento, desde que tenha as ações até o fim do mês do anúncio"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-068",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "médio",
        contexto: "Dona Lúcia, 59 anos, é professora aposentada e tem ações de um banco há 15 anos. Pela primeira vez, recebe em casa a convocação para a Assembleia Geral Ordinária da empresa e fica em dúvida se deve participar. Ela pergunta ao gerente, certificado CPA, o que costuma ser decidido nessa assembleia.",
        enunciado: "O gerente deve explicar que a AGO:",
        alternativas: [
            "decide apenas alterações no estatuto e fusões, sem tratar das contas do exercício",
            "define o preço das ações na bolsa e a quantidade de ações que cada acionista pode vender",
            "aprova as contas do exercício, mas o destino do lucro é decidido só pela diretoria",
            "aprova as contas do exercício e decide o destino do lucro da empresa"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-069",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "médio",
        contexto: "Paulo, 36 anos, é técnico em informática e investe em ações nas horas vagas. Neste mês, vendeu R$ 15.000,00 em ações, em operações comuns, com lucro de R$ 3.000,00, e não fez nenhuma outra venda. Com o dinheiro, pretende comprar um notebook novo. Ele pergunta à assessora, certificada CPA, se precisa pagar IR.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "sim, 15% sobre o lucro, pois a isenção só vale quando o lucro fica abaixo de R$ 20 mil",
            "não, pois as vendas no mês ficaram abaixo de R$ 20 mil, limite da isenção para operações comuns",
            "não, pois o lucro no mês ficou abaixo de R$ 20 mil, limite da isenção para operações comuns",
            "sim, 20% sobre o lucro, pois toda venda de ações é tributada como operação de curto prazo"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-070",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "médio",
        contexto: "Carlos, 32 anos, é corretor de imóveis e começou a operar na bolsa no último ano. No mesmo mês, fez operações de day trade, comprando e vendendo no mesmo dia, e de swing trade, mantendo as ações por algumas semanas. Teve prejuízo no day trade e lucro no swing trade, e pergunta ao assessor, certificado CPA, se pode compensar um com o outro.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "sim, pois qualquer prejuízo em ações pode compensar qualquer lucro em ações no mesmo mês",
            "não, pois o prejuízo de day trade só compensa lucro de day trade, que é tributado a 15%",
            "não, pois o prejuízo de day trade só compensa lucro de day trade, que é tributado a 20%",
            "sim, desde que o prejuízo e o lucro tenham ocorrido com ações da mesma empresa"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-071",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "médio",
        contexto: "Irene, 55 anos, é funcionária pública e comprou um COE com capital protegido, oferecido pelo banco como uma forma de ganhar com a bolsa sem risco. Depois de conversar com uma amiga, ficou em dúvida e pergunta à gerente, certificada CPA, se o produto tem algum risco e como é tributado.",
        enunciado: "A gerente deve explicar que o COE:",
        alternativas: [
            "tem risco de crédito do emissor, não conta com o FGC e segue a tabela regressiva",
            "não tem nenhum risco, pois o capital protegido é garantido pelo FGC até R$ 250 mil",
            "tem risco de crédito do emissor, conta com o FGC e é isento de IR para pessoa física",
            "tem risco de crédito do emissor, não conta com o FGC e é tributado a 15% como ações"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-072",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Fernanda, 41 anos, é gerente de RH e vendeu R$ 25.000,00 em ações no mês, em operações comuns, com lucro de R$ 3.000,00. Ela ouviu de um colega que pequenos investidores são isentos e diz ao assessor, certificado CPA, que está isenta, pois o lucro foi bem menor que R$ 20 mil.",
        enunciado: "Para corrigir a cliente, o assessor deve explicar que o IR devido é de:",
        alternativas: [
            "R$ 0,00, pois a isenção considera o lucro do mês, que ficou abaixo de R$ 20 mil",
            "R$ 450,00, pois as vendas passaram de R$ 20 mil, e o lucro é tributado a 15%",
            "R$ 600,00, pois as vendas passaram de R$ 20 mil, e o lucro é tributado a 20%",
            "R$ 750,00, pois o excesso de R$ 5 mil em vendas é tributado a 15%"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-073",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Ricardo, 46 anos, é administrador e investe em ações por conta própria. Em operações comuns, ele teve prejuízo de R$ 2.000,00 em março. Em abril, vendeu R$ 40.000,00 em ações e teve lucro de R$ 5.000,00. Ele guarda todos os informes da corretora e pergunta ao assessor, certificado CPA, quanto de IR deve pagar em abril.",
        enunciado: "O IR devido em abril é de:",
        alternativas: [
            "R$ 750,00, pois o prejuízo de março não pode ser compensado em outro mês",
            "R$ 600,00, pois o prejuízo de março é compensado, e os R$ 3.000,00 restantes pagam 20%",
            "R$ 0,00, pois o prejuízo de março isenta todas as vendas feitas em abril",
            "R$ 450,00, pois o prejuízo de março é compensado, e os R$ 3.000,00 restantes pagam 15%"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-074",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Júlia, 28 anos, é designer e faz operações de day trade depois do expediente. Neste mês, teve lucro de R$ 1.000,00 nessas operações, e a corretora reteve 1% desse lucro na fonte. Como é a primeira vez que tem lucro, ela pergunta à assessora, certificada CPA, quanto ainda precisa recolher.",
        enunciado: "A assessora deve explicar que Júlia deve recolher por DARF:",
        alternativas: [
            "R$ 190,00, pois o IR é de 20%, ou R$ 200,00, e os R$ 10,00 retidos são descontados",
            "R$ 200,00, pois o valor retido na fonte não pode ser descontado do imposto devido",
            "R$ 140,00, pois o IR é de 15%, ou R$ 150,00, e os R$ 10,00 retidos são descontados",
            "R$ 0,00, pois a retenção na fonte já quita todo o imposto devido no day trade"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-075",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "difícil",
        contexto: "Mário, 53 anos, é engenheiro e comprou um COE com capital protegido e vencimento em três anos, atrelado a um índice internacional. Após um ano, decidiu usar o dinheiro para dar entrada em um terreno e quer resgatar. Ele diz ao gerente, certificado CPA, que não corre risco de perda, pois o capital é protegido.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "a proteção vale em qualquer data, e a saída antecipada devolve o valor aplicado integral",
            "a proteção vale no vencimento, mas a saída antecipada é garantida pelo FGC até R$ 250 mil",
            "a proteção vale no vencimento, e a saída antecipada, quando possível, pode gerar perda",
            "a proteção deixa de existir após o primeiro ano, e o resgate só pode ocorrer com perda"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-076",
        curso: "cpa",
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "difícil",
        contexto: "Uma ação cotada a R$ 30,00 terá dividendos de R$ 1,00 por ação, com data com no dia 10. André, 35 anos, é vendedor e acompanha a bolsa pelo celular. No dia 11, viu o papel cair e comprou as ações. Animado, diz ao assessor, certificado CPA, que aproveitou uma queda de preço para receber os dividendos.",
        enunciado: "O assessor deve explicar que André:",
        alternativas: [
            "recebe os dividendos, pois comprou antes da data de pagamento anunciada pela empresa",
            "não recebe os dividendos, e a queda no dia 11 decorre apenas da oscilação do mercado",
            "recebe os dividendos, pois a queda no dia 11 indica que o provento ainda não foi descontado",
            "não recebe os dividendos, e a queda no dia 11 reflete o ajuste do preço pelo provento"
        ],
        correta: 3
    },

    // ===================== MÓDULO 2 — GRUPO: FUNDOS: ESTRUTURA E FUNCIONAMENTO (22) =====================

    {
        id: "CPA-M2-077",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Conceitos de fundos",
        nivel: "fácil",
        contexto: "Em um curso para novos funcionários de uma distribuidora de investimentos, o professor começa a aula sobre fundos. Ele explica que os recursos de vários investidores são reunidos para serem aplicados em conjunto, sob a gestão de profissionais, e que o patrimônio é dividido em cotas proporcionais ao valor aplicado por cada um.",
        enunciado: "Pela regulação, o fundo de investimento é uma:",
        alternativas: [
            "Sociedade anônima de capital aberto",
            "Conta conjunta dos cotistas no banco",
            "Cooperativa formada pelos cotistas",
            "Comunhão de recursos na forma de condomínio"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-078",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Cotas",
        nivel: "fácil",
        contexto: "Márcia, 46 anos, é dentista e investiu R$ 50 mil em um fundo com prazo de duração de seis anos, indicado por um amigo. Ao ler o regulamento com mais atenção, percebeu que o fundo não permite resgate antes do fim do prazo, mas que as cotas podem ser vendidas a outro investidor na bolsa, pelo preço do momento.",
        enunciado: "Esse tipo de cota é chamado de:",
        alternativas: [
            "Cota aberta",
            "Cota fechada",
            "Cota subordinada",
            "Cota amortizável"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-079",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Prestadores de serviços",
        nivel: "fácil",
        contexto: "Em um treinamento interno de uma distribuidora, a instrutora apresenta os principais pontos da Resolução CVM 175, que reformulou a regulação dos fundos. Ela explica que vários prestadores atuam em um fundo, mas que dois deles são considerados essenciais para o seu funcionamento, e pede à turma que os identifique.",
        enunciado: "Esses prestadores de serviços essenciais são:",
        alternativas: [
            "Custodiante e auditor",
            "Distribuidor e custodiante",
            "Administrador e gestor",
            "Gestor e distribuidor"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-080",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Documentos dos fundos",
        nivel: "fácil",
        contexto: "Dona Rosa, 62 anos, é aposentada e recebeu do banco a sugestão de um fundo de renda fixa. Ela não tem paciência para ler documentos longos e, antes de aplicar, pede um material curto que resuma as principais informações do fundo, como objetivo, riscos, taxas e rentabilidade dos últimos anos.",
        enunciado: "Esse documento é a:",
        alternativas: [
            "Lâmina",
            "Ata de assembleia",
            "Demonstração contábil",
            "Nota de corretagem"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-081",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "fácil",
        contexto: "Alberto, 44 anos, é engenheiro e está comparando dois fundos multimercado. Um deles, além da taxa de administração de 2% ao ano, cobra uma taxa adicional somente quando a sua rentabilidade supera um indicador de referência, como o CDI. Ele quer saber o nome dessa cobrança adicional.",
        enunciado: "Essa taxa é a de:",
        alternativas: [
            "Administração",
            "Performance",
            "Custódia",
            "Distribuição"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-082",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes e subclasses",
        nivel: "médio",
        contexto: "Heitor, 39 anos, é médico e está pesquisando fundos na plataforma do banco. Ele percebe que um mesmo fundo aparece com duas opções: uma com resgate em poucos dias e taxa maior, outra com resgate mais longo e taxa menor. Ele pergunta ao assessor, certificado CPA, como isso é possível sem mudar a estratégia de investimento.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "as subclasses de uma mesma classe podem ter prazos e taxas diferentes, e cada uma tem carteira própria",
            "as classes de um fundo sempre têm a mesma carteira, mudando apenas o nome comercial de cada uma",
            "as subclasses só podem se diferenciar pelo público-alvo, nunca por prazos de resgate ou taxas",
            "as subclasses de uma mesma classe podem ter prazos e taxas diferentes, mas compartilham a mesma carteira"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-083",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Conceitos de fundos",
        nivel: "médio",
        contexto: "Seu Norberto, 67 anos, é aposentado e tem R$ 400 mil aplicados em fundos de uma mesma administradora. Ao ler no jornal que uma instituição financeira de outro grupo passava por dificuldades, ficou com medo de perder o dinheiro caso a administradora dos seus fundos enfrentasse problemas parecidos. Ele pede à gerente, certificada CPA, uma explicação.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "o patrimônio do fundo é segregado e não se confunde com o da administradora",
            "o patrimônio do fundo é garantido pelo FGC até R$ 250 mil por cotista",
            "o patrimônio do fundo pertence à administradora, que responde pelas cotas",
            "o patrimônio do fundo é segregado, mas pode pagar dívidas da administradora"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-084",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Responsabilidade limitada",
        nivel: "médio",
        contexto: "Isabela, 35 anos, é advogada e, ao ler o regulamento de um fundo multimercado, encontrou uma cláusula que prevê a responsabilidade limitada dos cotistas. Ela ficou em dúvida se, em caso de grandes perdas, poderia ser cobrada além do valor aplicado. Pergunta ao gerente, certificado CPA, o que essa cláusula significa.",
        enunciado: "O gerente deve explicar que, quando o regulamento prevê a limitação:",
        alternativas: [
            "o cotista tem o valor das cotas garantido, sem risco de perder o capital investido",
            "o cotista responde por todo o prejuízo, mas só depois que o gestor cobrir as perdas",
            "o cotista responde apenas até o valor de suas cotas, mesmo que o patrimônio fique negativo",
            "o cotista responde apenas até o valor de suas cotas, mas só nos fundos de renda fixa"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-085",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Aplicação e resgate",
        nivel: "médio",
        contexto: "Clarice, 50 anos, é empresária e investe R$ 100 mil em um fundo multimercado com cotização em D+30 e pagamento em D+31. Ela precisa do dinheiro para quitar um fornecedor e pede o resgate hoje. Preocupada com o prazo, pergunta ao gerente, certificado CPA, qual cota será usada e quando recebe o dinheiro.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o valor será calculado pela cota do dia do pedido, e o pagamento ocorre 31 dias depois",
            "o valor será calculado pela cota de 31 dias após o pedido, e o pagamento ocorre no mesmo dia",
            "o valor e o pagamento são definidos no dia do pedido, e os prazos servem só para a auditoria",
            "o valor será calculado pela cota de 30 dias após o pedido, e o pagamento ocorre no dia seguinte"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-086",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Documentos dos fundos",
        nivel: "médio",
        contexto: "Jefferson, 30 anos, é analista de sistemas e vai fazer sua primeira aplicação em um fundo de ações. Antes de concluir a operação, o gerente, certificado CPA, pede que ele assine um termo de adesão e ciência de risco. Jefferson, com pressa, pergunta para que serve o documento.",
        enunciado: "O gerente deve explicar que o termo:",
        alternativas: [
            "garante ao cliente a rentabilidade apresentada na lâmina do fundo",
            "confirma que o cliente acessou os documentos e conhece os riscos",
            "transfere ao gerente a responsabilidade por eventuais perdas do fundo",
            "substitui a análise do perfil do cliente feita pela instituição"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-087",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Prestadores de serviços",
        nivel: "médio",
        contexto: "Renata, 41 anos, é gerente de compras e, ao ler a lâmina de um fundo, vê o nome de duas instituições diferentes: uma como administradora e outra como gestora. Ela pensava que uma única empresa cuidava de tudo e pergunta ao assessor, certificado CPA, qual é a diferença entre as duas funções.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o administrador decide a compra e a venda dos ativos, e o gestor cuida do funcionamento e dos controles do fundo",
            "os dois decidem juntos a compra e a venda dos ativos, e a custódia cuida do funcionamento do fundo",
            "o gestor decide a compra e a venda dos ativos, e o administrador cuida do funcionamento e dos controles do fundo",
            "o gestor cuida do funcionamento do fundo, e a compra e a venda dos ativos são decididas em assembleia"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-088",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Assembleia de cotistas",
        nivel: "médio",
        contexto: "Seu Leopoldo, 58 anos, é comerciante e cotista de um fundo multimercado há cinco anos. Ele recebe um comunicado dizendo que o gestor pretende aumentar a taxa de administração de 1,5% para 2% ao ano. Contrariado, pergunta ao gerente, certificado CPA, se isso pode ser feito sem consultar os investidores.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o aumento da taxa depende de aprovação da assembleia de cotistas",
            "o aumento pode ser feito pelo gestor, bastando comunicar os cotistas",
            "o aumento depende de autorização prévia da ANBIMA, sem assembleia",
            "o aumento pode ser feito pelo administrador, desde que seja pequeno"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-089",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Divulgação de informações",
        nivel: "médio",
        contexto: "O gestor de um fundo de crédito privado com cerca de 3 mil cotistas descobre que um dos principais emissores da carteira, responsável por 12% do patrimônio, entrou em recuperação judicial. A notícia ainda não saiu na imprensa, mas o fato pode afetar de forma relevante o valor das cotas.",
        enunciado: "Essa informação deve ser:",
        alternativas: [
            "divulgada só no próximo relatório mensal da carteira",
            "divulgada imediatamente aos cotistas como fato relevante",
            "mantida em sigilo até a assembleia anual de cotistas",
            "divulgada apenas à CVM, sem comunicação aos cotistas"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-090",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes restritas, exclusivas e previdenciárias",
        nivel: "médio",
        contexto: "Dr. Afonso, 60 anos, é empresário do setor de agronegócio e tem R$ 30 milhões em aplicações financeiras, sendo classificado como investidor profissional. Ele quer um fundo feito só para ele, com estratégia personalizada para seu patrimônio, e pergunta ao gerente, certificado CPA, qual é a classe adequada.",
        enunciado: "O gerente deve explicar que a classe adequada é a:",
        alternativas: [
            "restrita, destinada a um único investidor de varejo",
            "exclusiva, destinada a qualquer investidor qualificado",
            "previdenciária, destinada a um único investidor profissional",
            "exclusiva, destinada a um único investidor profissional"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-091",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Encargos dos fundos",
        nivel: "médio",
        contexto: "Walter, 52 anos, é contador e, ao ler o relatório anual de um fundo em que investe, percebe que o fundo paga auditoria independente, serviços de custódia e taxas de fiscalização da CVM. Como nunca viu essas cobranças no seu extrato, pergunta ao assessor, certificado CPA, quem arca com essas despesas.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "são encargos do fundo, debitados do seu patrimônio e refletidos no valor da cota",
            "são pagas pelo administrador com a própria taxa, sem afetar o valor da cota",
            "são cobradas do cotista em boleto separado, uma vez por ano",
            "são pagas pelo gestor apenas quando o fundo supera o seu benchmark"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-092",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Distribuição de cotas",
        nivel: "médio",
        contexto: "Letícia, 29 anos, é arquiteta e investe em fundos por meio de uma plataforma digital de investimentos, sem conta no banco da administradora. Ao ler o termo, viu que a aplicação é feita na modalidade por conta e ordem. Ela pergunta ao assessor, certificado CPA, o que isso muda para ela.",
        enunciado: "O assessor deve explicar que, nessa modalidade:",
        alternativas: [
            "o administrador mantém o cadastro dela, e a plataforma passa a ser a verdadeira dona das cotas aplicadas",
            "o distribuidor mantém o cadastro dela, e as cotas ficam registradas em nome do gestor do fundo",
            "o distribuidor mantém o cadastro dela, e o administrador registra a aplicação em nome da plataforma",
            "o administrador mantém o cadastro dela, e a plataforma não tem nenhuma obrigação com a cliente"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-093",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "difícil",
        contexto: "Rubens, 48 anos, é empresário e tem R$ 100.000,00 aplicados em um fundo multimercado que cobra taxa de administração de 2% ao ano e taxa de performance de 20% sobre o que exceder o CDI. No ano, o fundo rendeu 14%, e o CDI, 10%. Ele pergunta ao assessor, certificado CPA, quanto pagou de performance.",
        enunciado: "A taxa de performance paga foi de aproximadamente:",
        alternativas: [
            "R$ 2.800,00, pois 20% incidem sobre todo o rendimento de 14%",
            "R$ 2.000,00, pois 20% incidem sobre o rendimento do CDI",
            "R$ 400,00, pois 10% incidem sobre os 4 pontos acima do CDI",
            "R$ 800,00, pois 20% incidem sobre os 4 pontos acima do CDI"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-094",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Aplicação e resgate",
        nivel: "difícil",
        contexto: "Priscila, 37 anos, é enfermeira e aplicou R$ 18.000,00 em um fundo de renda fixa quando a cota valia R$ 1,25. Um ano e meio depois, precisou do dinheiro para a reforma da casa e resgatou tudo quando a cota valia R$ 1,30. Para o cálculo, desconsidere impostos e taxas.",
        enunciado: "O valor bruto do resgate foi de:",
        alternativas: [
            "R$ 18.900,00, pois o rendimento de 5% incide sobre o valor aplicado",
            "R$ 18.720,00, pois as 14.400 cotas são multiplicadas por R$ 1,30",
            "R$ 18.050,00, pois a cota subiu R$ 0,05 sobre o valor aplicado",
            "R$ 23.400,00, pois as 18.000 cotas são multiplicadas por R$ 1,30"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-095",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Responsabilidade limitada",
        nivel: "difícil",
        contexto: "Silas, 45 anos, é gerente de uma rede de lojas e investiu R$ 30 mil em uma classe de fundo com responsabilidade limitada. Após grandes perdas em derivativos, a classe fica com patrimônio líquido negativo. Assustado, ele teme ser cobrado para cobrir o rombo e pergunta ao gerente, certificado CPA, o que pode acontecer.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o cotista deve aportar novos recursos até zerar o rombo, na proporção de suas cotas",
            "o cotista não responde além das cotas, pois o FGC cobre o patrimônio negativo",
            "o cotista não responde além do valor das cotas, e a classe pode ter a insolvência declarada",
            "o gestor deve cobrir o rombo com recursos próprios, e a classe segue funcionando"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-096",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "difícil",
        contexto: "Seu Josué, 63 anos, é aposentado e tem R$ 200.000,00 em um fundo de renda fixa com taxa de administração de 1,5% ao ano. Ao revisar os extratos, diz ao gerente, certificado CPA, que nunca pagou essa taxa, pois não vê nenhuma cobrança lançada, e que por isso considera o fundo muito barato.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "a taxa é provisionada todo dia, cerca de R$ 3.000,00 ao ano, e já está refletida no valor da cota",
            "a taxa é cobrada só no resgate, cerca de R$ 3.000,00 por ano aplicado, e aparecerá no extrato final",
            "a taxa é cobrada só sobre o rendimento, e por isso não aparece quando o fundo rende pouco",
            "a taxa é paga pelo distribuidor, cerca de R$ 3.000,00 ao ano, sem nenhum efeito sobre a cota"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-097",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes e subclasses",
        nivel: "difícil",
        contexto: "Uma classe de fundo tem duas subclasses: uma com resgate em D+1 e taxa de 1,2% ao ano e outra com resgate em D+30 e taxa de 0,8% ao ano. Luciano, 38 anos, é autônomo, tem renda irregular e pode precisar do dinheiro a qualquer momento. Mesmo assim, ele quer a subclasse com a menor taxa.",
        enunciado: "A orientação correta do gerente, certificado CPA, é:",
        alternativas: [
            "indicar a subclasse D+30, pois a carteira é diferente e tende a render mais que a D+1",
            "indicar a subclasse D+1, pois a carteira é a mesma, e ele precisa de liquidez",
            "indicar a subclasse D+30, pois a taxa menor compensa qualquer necessidade de liquidez",
            "indicar a subclasse D+1, pois a carteira é diferente e tem ativos com menos risco"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-098",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Cotas",
        nivel: "difícil",
        contexto: "Rita, 55 anos, é professora e tem cotas de um fundo de cotas fechadas, com prazo de duração de oito anos, dos quais faltam três. Ela precisa do dinheiro antes do fim do prazo para ajudar o filho a abrir um negócio e pergunta ao assessor, certificado CPA, se pode pedir o resgate ao administrador.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "ela pode pedir o resgate ao administrador, que paga o valor da cota do dia em até 30 dias",
            "não há resgate antecipado nem venda, e ela precisa esperar o fim do prazo do fundo",
            "ela pode vender as cotas no mercado secundário, sempre pelo valor exato da cota do dia",
            "não há resgate antecipado, mas ela pode vender as cotas na bolsa, a um preço que pode variar"
        ],
        correta: 3
    },

    // ===================== MÓDULO 2 — GRUPO: FUNDOS: TIPOS E CARTEIRAS (22) =====================

    {
        id: "CPA-M2-099",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "fácil",
        contexto: "Rômulo, 42 anos, é importador de peças industriais e paga fornecedores em dólar. Para se proteger das variações do câmbio, quer um fundo que aplique pelo menos 80% do patrimônio em ativos ligados à variação de moedas estrangeiras.",
        enunciado: "Esse fundo é classificado como:",
        alternativas: [
            "Multimercado",
            "Cambial",
            "Renda fixa",
            "Ações"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-100",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "fácil",
        contexto: "Dona Glória, 60 anos, é aposentada e quer uma renda mensal. Ela está analisando um fundo imobiliário cujo principal ativo são prédios comerciais em São Paulo, alugados a grandes empresas, que pagam os aluguéis mensalmente. O fundo distribui esses aluguéis aos cotistas.",
        enunciado: "Esse fundo é classificado como de:",
        alternativas: [
            "Papel",
            "Fundo de fundos",
            "Tijolo",
            "Desenvolvimento"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-101",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "fácil",
        contexto: "Sidnei, 27 anos, é estagiário de engenharia e quer começar a investir em ações com pouco dinheiro e sem escolher empresas uma a uma. Ele procura um fundo negociado na bolsa, como uma ação, que busque replicar o desempenho de um índice.",
        enunciado: "Esse produto é um:",
        alternativas: [
            "ETF",
            "FIDC",
            "FIP",
            "FIC"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-102",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "fácil",
        contexto: "Joice, 36 anos, é bancária e está analisando o regulamento de um fundo oferecido pelo banco. Ela percebe que o fundo não compra títulos ou ações diretamente: aplica a maior parte do seu patrimônio em cotas de outros fundos de investimento, geridos pela mesma instituição.",
        enunciado: "Esse tipo de fundo é chamado de:",
        alternativas: [
            "Fundo de investimento em participações (FIP)",
            "Fundo de investimento em cotas (FIC)",
            "Fundo de investimento imobiliário (FII)",
            "Fundo de direitos creditórios (FIDC)"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-103",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIP",
        nivel: "fácil",
        contexto: "Um grupo de investidores profissionais aplica em um fundo que compra participações em empresas de tecnologia de capital fechado. Os gestores participam ativamente da gestão dessas empresas, indicando membros para o conselho, e buscam valorizá-las para vender as participações no futuro.",
        enunciado: "Esse fundo é um:",
        alternativas: [
            "ETF",
            "FII",
            "FIDC",
            "FIP"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-104",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Marcos, 44 anos, é gerente de uma indústria e tem perfil moderado. Já tem boa parte da carteira em renda fixa e quer diversificar com um fundo de gestão flexível, capaz de combinar juros, ações, câmbio e outros mercados conforme o cenário. Ele pede orientação ao assessor, certificado CPA.",
        enunciado: "O assessor deve indicar um fundo:",
        alternativas: [
            "multimercado, que pode investir em vários fatores de risco sem concentração obrigatória em um deles",
            "de renda fixa, que pode investir em vários fatores de risco sem concentração obrigatória em um deles",
            "multimercado, que precisa manter no mínimo 67% do patrimônio em ações de companhias abertas",
            "cambial, que pode investir em vários fatores de risco sem concentração obrigatória em um deles"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-105",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Luana, 33 anos, é engenheira e está analisando um fundo classificado como de ações. Ao ver a composição da carteira, percebe que parte dos recursos está em títulos públicos e fica em dúvida se isso é permitido. Ela pergunta à gerente, certificada CPA, qual é a exposição mínima exigida a ações.",
        enunciado: "A gerente deve explicar que o fundo de ações deve ter:",
        alternativas: [
            "no mínimo 80% do patrimônio em ações e ativos relacionados",
            "no mínimo 50% do patrimônio em ações e ativos relacionados",
            "no mínimo 67% do patrimônio em ações e ativos relacionados",
            "no mínimo 95% do patrimônio em ações e ativos relacionados"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-106",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Gustavo, 50 anos, é administrador e investe R$ 150 mil em um fundo de renda fixa que rende acima da média da categoria. Ao ler a carteira, descobre que mais da metade está em debêntures e outros títulos de empresas privadas. Ele pergunta ao assessor, certificado CPA, o que isso indica.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o fundo concentra crédito privado, mas o risco é o mesmo de um fundo só de títulos públicos",
            "o fundo concentra títulos públicos e tem o menor risco de crédito disponível no mercado",
            "o fundo concentra crédito privado, e o FGC cobre as perdas com esses títulos até R$ 250 mil",
            "o fundo concentra crédito privado e tem mais risco de crédito, o que deve ser informado"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-107",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIDC",
        nivel: "médio",
        contexto: "Cristiano, 47 anos, é empresário e está avaliando investir em cotas sênior de um FIDC que compra recebíveis de uma rede varejista. No material, vê que o fundo também tem cotas subordinadas, detidas pela própria empresa cedente. Ele pergunta ao assessor, certificado CPA, qual é a diferença entre os dois tipos de cota.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "as cotas sênior absorvem as perdas primeiro, protegendo as cotas subordinadas",
            "as cotas subordinadas absorvem as perdas primeiro, protegendo as cotas sênior",
            "as duas cotas absorvem as perdas na mesma proporção, mudando só a taxa de administração",
            "as cotas subordinadas têm garantia do FGC, e as cotas sênior não têm nenhuma proteção"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-108",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "médio",
        contexto: "Dona Vera, 64 anos, é aposentada e tem 200 cotas de um FII de shoppings negociado na bolsa, com mais de 100 mil cotistas. Ela recebe rendimentos mensais e pensa em vender parte das cotas no futuro. Pergunta à assessora, certificada CPA, como são tributados os rendimentos mensais e a venda.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "os rendimentos pagam 15% de IR na fonte, e o ganho na venda das cotas é isento",
            "os rendimentos e o ganho na venda das cotas são isentos para qualquer cotista",
            "os rendimentos são isentos para ela, mas o ganho na venda das cotas paga 20% de IR",
            "os rendimentos são isentos para ela, e o ganho na venda das cotas paga 15% de IR"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-109",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "médio",
        contexto: "Felipe, 38 anos, é gerente comercial e quer colocar metade do patrimônio em fundos imobiliários. Ele acredita que FII é um investimento sem riscos, pois é lastreado em imóveis, e compara com a compra de um apartamento. Antes de decidir, pede a opinião da gerente, certificada CPA.",
        enunciado: "A gerente deve explicar que os FIIs têm riscos como:",
        alternativas: [
            "vacância dos imóveis, inadimplência dos inquilinos e oscilação do preço das cotas na bolsa",
            "nenhum risco relevante, pois os imóveis garantem o valor das cotas em qualquer cenário",
            "apenas o risco de inflação, pois os aluguéis não são reajustados ao longo do contrato",
            "vacância dos imóveis, mas as cotas têm preço fixo e não oscilam na bolsa"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-110",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "médio",
        contexto: "Beatriz, 26 anos, é recém-formada em Economia e tem R$ 5 mil para começar a investir em ações. Ela não tem tempo para analisar empresas e quer se expor ao Ibovespa com poucas operações. Pede ao assessor, certificado CPA, que explique as vantagens de usar um ETF.",
        enunciado: "O assessor deve explicar que o ETF oferece:",
        alternativas: [
            "diversificação em uma única cota, gestão ativa e rentabilidade garantida",
            "diversificação em uma única cota, gestão passiva e custo geralmente baixo",
            "uma única ação escolhida pelo gestor, com custo geralmente baixo",
            "diversificação em uma única cota, com garantia do FGC até R$ 250 mil"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-111",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira administrada",
        nivel: "médio",
        contexto: "Dr. Ernesto, 58 anos, é cirurgião, tem R$ 5 milhões em aplicações e quer uma gestão profissional do seu patrimônio. Ele compara um fundo com uma carteira administrada, que o banco oferece a partir de determinado valor, e pergunta à gerente, certificada CPA, a principal diferença entre as duas alternativas.",
        enunciado: "A gerente deve explicar que, na carteira administrada:",
        alternativas: [
            "os ativos ficam em nome do gestor, e o cliente recebe cotas proporcionais",
            "os ativos ficam em nome do cliente, mas a gestão segue um regulamento padrão",
            "os ativos ficam em nome do administrador, e a gestão é feita em assembleia",
            "os ativos ficam em nome do cliente, e a gestão pode ser personalizada para ele"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-112",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Fundos sustentáveis",
        nivel: "médio",
        contexto: "Camila, 30 anos, é bióloga e trabalha com conservação ambiental. Ela quer investir em fundos com foco em sustentabilidade e vê dois tipos na plataforma: um com o sufixo IS no nome e outro que informa apenas integrar questões ESG na análise dos ativos. Ela pede orientação ao assessor, certificado CPA.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o fundo IS tem objetivo sustentável, e o outro só considera fatores ESG na análise",
            "os dois têm objetivo de investimento sustentável, mudando apenas o nome comercial",
            "o fundo que integra ESG tem objetivo sustentável, e o fundo IS só considera fatores ESG",
            "o fundo IS garante retorno ambiental mensurável, e o outro é proibido de usar o termo ESG"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-113",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira do fundo",
        nivel: "médio",
        contexto: "Silvana, 51 anos, é contadora e está analisando a carteira de um fundo de renda fixa. Percebe que o fundo tem cerca de 70% do patrimônio em títulos públicos federais, mas nunca mais do que uma pequena parcela em títulos de uma única empresa. Ela pergunta ao gerente, certificado CPA, por que há essa diferença.",
        enunciado: "O gerente deve explicar que os limites por emissor:",
        alternativas: [
            "se aplicam da mesma forma a todos os emissores, inclusive aos títulos públicos",
            "não existem na regulação, e a concentração depende só da decisão do gestor",
            "não valem para títulos públicos federais, mas limitam a exposição a uma empresa",
            "limitam os títulos públicos, mas não a exposição a uma mesma empresa privada"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-114",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Classificação ANBIMA",
        nivel: "médio",
        contexto: "Otávio, 43 anos, é engenheiro e está comparando fundos na plataforma do banco. Um deles é classificado pela ANBIMA como Renda Fixa Duração Alta, e outro como Renda Fixa Duração Baixa. Ele pergunta à assessora, certificada CPA, o que essa informação indica.",
        enunciado: "A assessora deve explicar que a classificação indica:",
        alternativas: [
            "a classe do fundo, o nível de risco e a estratégia, e a duração alta reduz a sensibilidade aos juros",
            "apenas o prazo mínimo de resgate, e a duração alta indica cotização em mais de 30 dias",
            "a classe do fundo e a rentabilidade garantida, e a duração alta indica maior retorno certo",
            "a classe do fundo, o nível de risco e a estratégia, e a duração alta aumenta a sensibilidade aos juros"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-115",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "difícil",
        contexto: "Luísa, 39 anos, é fisioterapeuta e investe em FIIs negociados na bolsa, com milhares de cotistas, e tem menos de 1% das cotas de cada fundo. No semestre, recebeu R$ 800,00 de rendimentos e vendeu parte das cotas com lucro de R$ 2.000,00. Ela diz ao assessor, certificado CPA, que tudo é isento, por se tratar de FII.",
        enunciado: "O assessor deve explicar que o IR devido é de:",
        alternativas: [
            "R$ 0,00, pois os rendimentos e o ganho na venda de FII são isentos",
            "R$ 400,00, pois os rendimentos são isentos, mas o ganho na venda paga 20%",
            "R$ 560,00, pois os rendimentos e o ganho na venda pagam 20%",
            "R$ 300,00, pois os rendimentos são isentos, e o ganho na venda paga 15%"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-116",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIDC",
        nivel: "difícil",
        contexto: "Um FIDC que compra recebíveis de uma rede de lojas tem patrimônio de R$ 100 milhões, sendo R$ 80 milhões em cotas sênior e R$ 20 milhões em cotas subordinadas. Com a alta da inadimplência dos clientes da rede, a carteira sofre perda de R$ 15 milhões.",
        enunciado: "O efeito dessa perda sobre as cotas é:",
        alternativas: [
            "as sênior perdem R$ 15 milhões, e as subordinadas não sofrem perda",
            "as duas perdem 15% do valor, na proporção de sua participação",
            "as subordinadas perdem R$ 15 milhões, e as sênior não sofrem perda",
            "as subordinadas perdem R$ 20 milhões, e as sênior perdem R$ 5 milhões"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-117",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "difícil",
        contexto: "Tiago, 34 anos, é analista de TI e investe em ETFs de ações para ter diversificação. Neste mês, vendeu R$ 15.000,00 em cotas de um ETF de ações, com lucro de R$ 1.000,00, e não fez outras vendas. Ele diz ao assessor, certificado CPA, que está isento, pois as vendas ficaram abaixo de R$ 20 mil.",
        enunciado: "O assessor deve explicar que o IR devido é de:",
        alternativas: [
            "R$ 150,00, pois a isenção de R$ 20 mil não vale para ETF, e o lucro paga 15%",
            "R$ 0,00, pois a isenção de R$ 20 mil em vendas vale também para ETF",
            "R$ 200,00, pois ETF é tributado como day trade, a 20% sobre o lucro",
            "R$ 225,00, pois ETF segue a tabela regressiva, com 22,5% no curto prazo"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-118",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "difícil",
        contexto: "Sr. Heráclito, 66 anos, é empresário aposentado e foi comprando cotas de um FII de galpões logísticos ao longo dos anos, até passar a ter 12% das cotas do fundo. Ele continua recebendo os rendimentos mensais e acredita que seguem isentos, como para os demais cotistas.",
        enunciado: "O assessor, certificado CPA, deve explicar que:",
        alternativas: [
            "a isenção é mantida, pois ela vale para qualquer pessoa física cotista de FII",
            "ao ter 10% ou mais das cotas, ele perde a isenção, e os rendimentos passam a pagar 20%",
            "ao ter 10% ou mais das cotas, ele perde a isenção, e os rendimentos passam a pagar 15%",
            "ao ter 10% ou mais das cotas, o ganho na venda fica isento, e os rendimentos também"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-119",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira administrada",
        nivel: "difícil",
        contexto: "Norma, 57 anos, é médica e tem R$ 1 milhão para investir em renda fixa. Ela compara um fundo de renda fixa de longo prazo e uma carteira administrada com títulos de renda fixa semelhantes, com taxas de administração próximas. Pergunta à gerente, certificada CPA, se há diferença na tributação.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "na carteira administrada também há come-cotas, cobrado em maio e novembro sobre todos os títulos",
            "nos dois casos o IR é cobrado apenas no resgate total, sem antecipação semestral",
            "no fundo não há come-cotas, e na carteira administrada o IR é antecipado a cada semestre",
            "na carteira administrada não há come-cotas, e o IR é cobrado em cada título, no vencimento ou na venda"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-120",
        curso: "cpa",
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Classificação ANBIMA",
        nivel: "difícil",
        contexto: "Anderson, 45 anos, é gerente financeiro e tem dois fundos de renda fixa: um Duração Baixa e um Duração Alta, com valores parecidos. Após uma alta inesperada dos juros pelo Copom, ele vê perdas diferentes nos dois fundos no mesmo mês e pergunta ao assessor, certificado CPA, o motivo.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o fundo de duração alta tende a cair mais, pois títulos longos são mais sensíveis à alta dos juros",
            "o fundo de duração baixa tende a cair mais, pois títulos curtos são mais sensíveis à alta dos juros",
            "os dois tendem a cair igual, pois a duração não influencia a sensibilidade aos juros",
            "o fundo de duração alta tende a subir, pois títulos longos se beneficiam da alta dos juros"
        ],
        correta: 0
    },

    // ===================== MÓDULO 2 — GRUPO: CÓDIGOS ANBIMA E PUBLICIDADE (8) =====================

    {
        id: "CPA-M2-121",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Selo ANBIMA",
        nivel: "fácil",
        contexto: "Dona Célia, 59 anos, é professora e está escolhendo um fundo de renda fixa. No material de divulgação de um dos fundos, ela vê o selo ANBIMA no rodapé da página e, sem saber o que ele representa, pergunta à gerente o que significa.",
        enunciado: "O selo ANBIMA indica que:",
        alternativas: [
            "O fundo tem rentabilidade garantida",
            "O fundo conta com a garantia do FGC",
            "A instituição segue o código ANBIMA",
            "A ANBIMA recomenda a compra do fundo"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-122",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "fácil",
        contexto: "Uma gestora de recursos que também presta outros serviços financeiros decide reorganizar sua estrutura. Ela separa fisicamente, com andares e acessos diferentes, e por sistemas, com senhas e bases de dados independentes, a equipe que administra recursos de terceiros das demais áreas, para evitar conflitos de interesse.",
        enunciado: "Essa prática é chamada de:",
        alternativas: [
            "Segregação de atividades",
            "Gestão discricionária",
            "Marcação a mercado",
            "Portabilidade de custódia"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-123",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "médio",
        contexto: "Um profissional da área de marketing de uma distribuidora, certificado CPA, revisa a lâmina de um fundo multimercado antes da divulgação ao público. Ao conferir o documento, percebe que falta um aviso obrigatório sobre garantias do investimento.",
        enunciado: "O aviso que deve constar no material é:",
        alternativas: [
            "que o fundo conta com a garantia do FGC até R$ 250 mil por cotista e por instituição",
            "que o fundo não conta com garantia do administrador, do gestor, de seguro ou do FGC",
            "que o fundo é garantido pela ANBIMA em caso de perdas causadas pelo gestor",
            "que o fundo tem garantia do administrador, desde que mantido por mais de 12 meses"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-124",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "médio",
        contexto: "A equipe de uma distribuidora de investimentos prepara dois documentos para o lançamento de um novo fundo: um anúncio curto para redes sociais, com imagem atraente e chamada para investir, e um relatório com dados detalhados da carteira, voltado a investidores que querem analisar o fundo. O profissional, certificado CPA, precisa classificá-los.",
        enunciado: "Pelas regras da ANBIMA, os documentos são, respectivamente:",
        alternativas: [
            "material técnico, que busca atrair investidores, e material publicitário, que dá suporte à análise",
            "dois materiais publicitários, pois ambos são divulgados pela própria distribuidora",
            "dois materiais técnicos, pois ambos trazem informações sobre o fundo de investimento",
            "material publicitário, que busca atrair investidores, e material técnico, que dá suporte à análise"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-125",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "médio",
        contexto: "O gestor de um fundo de ações percebe que poderia comprar para o fundo ativos de uma empresa ligada ao seu grupo econômico, a um preço acima do praticado no mercado, o que ajudaria a empresa do grupo. Antes de decidir, ele pede orientação ao profissional de compliance, certificado CPA.",
        enunciado: "O profissional deve lembrar que o código exige que o gestor:",
        alternativas: [
            "atue com lealdade aos cotistas, evitando conflitos de interesse que os prejudiquem",
            "atue com lealdade ao grupo econômico, desde que a operação seja informada depois",
            "atue com lealdade aos cotistas, mas pode aceitar o conflito se o valor for pequeno",
            "atue com lealdade à ANBIMA, que deve aprovar previamente a operação"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-126",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "médio",
        contexto: "Em um churrasco de fim de semana, um analista de uma gestora comenta com um amigo quais ações o fundo vai comprar na próxima semana. O amigo compra as ações antes do fundo. O caso chega ao compliance, e um profissional certificado CPA analisa a conduta do analista.",
        enunciado: "O profissional deve concluir que:",
        alternativas: [
            "não houve irregularidade, pois a informação foi passada fora do horário de trabalho",
            "houve irregularidade apenas se o amigo tiver comprado as ações antes do fundo",
            "houve quebra do dever de sigilo, pois dados da gestão não podem ir a terceiros",
            "não houve irregularidade, pois a carteira do fundo é pública desde o primeiro dia"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-127",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Selo ANBIMA",
        nivel: "difícil",
        contexto: "Seu Arnaldo, 70 anos, é aposentado e aplicou R$ 150 mil em um fundo multimercado. Quando o fundo teve um mês negativo, ele procurou o gerente, certificado CPA, dizendo que escolheu o fundo por ter o selo ANBIMA, pois isso garante bons resultados e protege contra perdas.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que o selo:",
        alternativas: [
            "garante que o fundo terá rentabilidade acima do CDI, mas não protege contra perdas de capital",
            "protege contra perdas até R$ 250 mil, mas não garante a rentabilidade do fundo",
            "mostra que o fundo foi aprovado pela CVM, que garante a rentabilidade divulgada",
            "mostra que a instituição segue o código, mas não garante rentabilidade nem evita perdas"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-128",
        curso: "cpa",
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "difícil",
        contexto: "Uma distribuidora vai divulgar a rentabilidade de um fundo de renda fixa que teve excelente desempenho no último ano. A equipe de marketing testa quatro versões de anúncio, com textos e comparações diferentes. O profissional, certificado CPA, precisa escolher a única que segue as regras de publicidade.",
        enunciado: "A versão adequada é a que:",
        alternativas: [
            "destaca apenas o melhor mês do fundo, para mostrar o potencial máximo de ganho",
            "informa o período, compara com um indicador adequado e traz os avisos obrigatórios",
            "informa o período e a rentabilidade, e garante que o resultado se repetirá no próximo ano",
            "compara o fundo com a poupança, sem informar o período, e omite os avisos obrigatórios"
        ],
        correta: 1
    },

    // ===================== MÓDULO 2 — GRUPO: PREVIDÊNCIA COMPLEMENTAR (8) =====================

    {
        id: "CPA-M2-129",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Taxas na previdência",
        nivel: "fácil",
        contexto: "Márcio, 40 anos, é contador e contribui com R$ 800,00 por mês para um plano de previdência há dois anos. Ao analisar o extrato com atenção, percebe que, de cada contribuição feita ao plano, um percentual é descontado antes de o valor ir para a reserva.",
        enunciado: "Essa taxa é a de:",
        alternativas: [
            "Carregamento",
            "Performance",
            "Custódia",
            "Corretagem"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-130",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "fácil",
        contexto: "Seu Nelson, 64 anos, é engenheiro e vai se aposentar no próximo mês, depois de contribuir por 25 anos para um plano de previdência. Com medo de o dinheiro acabar antes dele, quer transformar a reserva acumulada em uma renda paga todos os meses enquanto viver.",
        enunciado: "Essa modalidade de renda é a:",
        alternativas: [
            "Renda temporária",
            "Renda vitalícia",
            "Renda por prazo certo",
            "Resgate total"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-131",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "médio",
        contexto: "Dona Helena, 62 anos, é professora aposentada e acumulou R$ 400 mil em um plano de previdência. Ela quer transformar a reserva em renda mensal por 15 anos. Como tem dois filhos adultos, pergunta ao gerente, certificado CPA, o que acontece se ela falecer antes desse prazo.",
        enunciado: "O gerente deve explicar que, na renda por prazo certo:",
        alternativas: [
            "o pagamento termina no falecimento, e o saldo fica com a seguradora",
            "o pagamento segue por toda a vida dos beneficiários, sem prazo definido",
            "o pagamento termina no falecimento, e o saldo vai para o inventário",
            "o pagamento segue até o fim dos 15 anos, repassado aos beneficiários indicados"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-132",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "médio",
        contexto: "Seu Joaquim, 66 anos, é aposentado e casado há 40 anos com Dona Aurora, que nunca trabalhou fora e não tem renda própria. Ele quer transformar a reserva da previdência em renda vitalícia, mas se preocupa com a esposa caso ele morra primeiro. Pede orientação à gerente, certificada CPA.",
        enunciado: "A gerente deve indicar a renda:",
        alternativas: [
            "vitalícia reversível, que continua sendo paga à esposa após o falecimento dele",
            "vitalícia simples, que continua sendo paga à esposa após o falecimento dele",
            "temporária, que continua sendo paga à esposa por toda a vida dela",
            "vitalícia reversível, que é paga só enquanto os dois estiverem vivos"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-133",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "médio",
        contexto: "Rafael, 45 anos, é gerente de TI e tem um PGBL no qual escolheu a tabela progressiva, por ter renda variável ao longo dos anos. Ele está pensando em fazer um resgate parcial para reformar a casa e pergunta ao gerente, certificado CPA, como é cobrado o IR quando ele fizer o resgate.",
        enunciado: "O gerente deve explicar que, no resgate:",
        alternativas: [
            "há retenção de 10% na fonte, sem ajuste na declaração anual",
            "não há retenção, e todo o imposto é pago na declaração anual",
            "há retenção de 15% na fonte, com ajuste na declaração anual pela tabela do IR",
            "há retenção pela tabela regressiva, que cai com o prazo de cada aporte"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-134",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "médio",
        contexto: "Karen, 32 anos, é designer e acabou de abrir um plano de previdência para a aposentadoria. Ainda não sabe se prefere a tabela progressiva ou a regressiva, pois não tem certeza de por quanto tempo vai manter o plano. Ela pergunta ao gerente, certificado CPA, até quando pode decidir.",
        enunciado: "O gerente deve explicar que, pelas regras atuais:",
        alternativas: [
            "a escolha precisa ser feita no ato da contratação e não pode ser alterada",
            "a escolha pode ser alterada a qualquer momento, inclusive após os resgates",
            "a escolha é feita pela seguradora, conforme a idade da cliente",
            "a escolha pode ser feita até o primeiro resgate ou o pedido do benefício"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-135",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "difícil",
        contexto: "Gustavo, 52 anos, é gerente de vendas e tem um PGBL na tabela regressiva. O aporte mais antigo, feito há 11 anos, vale hoje R$ 40.000,00, e os demais foram feitos há 3 anos. Ele resgata R$ 30.000,00 para pagar a faculdade da filha e quer saber quanto será retido de imposto.",
        enunciado: "O IR retido no resgate será de aproximadamente:",
        alternativas: [
            "R$ 9.000,00, pois saem primeiro os aportes mais recentes, com alíquota de 30% sobre o valor total",
            "R$ 3.000,00, pois saem primeiro os aportes mais antigos, com alíquota de 10% sobre o valor total",
            "R$ 4.500,00, pois o resgate paga 15% sobre o valor total, qualquer que seja a idade dos aportes",
            "R$ 3.000,00, pois saem primeiro os aportes mais antigos, com 10% apenas sobre o rendimento"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-136",
        curso: "cpa",
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Taxas na previdência",
        nivel: "difícil",
        contexto: "Jussara, 38 anos, é bancária e contribui com R$ 1.000,00 por mês para um plano de previdência com taxa de carregamento de 3% sobre cada aporte e taxa de administração de 1% ao ano. Ao comparar planos, ela diz ao gerente, certificado CPA, que só paga a taxa de administração.",
        enunciado: "Para corrigir a cliente, o gerente deve explicar que, em um ano, o carregamento reduz a reserva em:",
        alternativas: [
            "R$ 30,00, pois o carregamento incide uma única vez ao ano, sobre um aporte",
            "R$ 0,00, pois o carregamento só é cobrado no resgate, sobre o rendimento",
            "R$ 360,00, pois 3% de cada aporte de R$ 1.000,00 deixa de ir para a reserva",
            "R$ 360,00, mas o valor é devolvido integralmente na hora da aposentadoria"
        ],
        correta: 2
    },

    // ===================== MÓDULO 2 — GRUPO: CRÉDITO, SERVIÇOS, CÂMBIO E SEGUROS (12) =====================

    {
        id: "CPA-M2-137",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "fácil",
        contexto: "Edmar, 35 anos, é motorista de entregas e tem renda variável. Nos meses fracos, costuma usar com frequência o limite pré-aprovado vinculado à conta corrente, que é liberado automaticamente quando o saldo fica negativo, sem precisar pedir nada ao banco.",
        enunciado: "Esse crédito é o:",
        alternativas: [
            "Crédito consignado",
            "Cheque especial",
            "Financiamento imobiliário",
            "Capital de giro"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-138",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "fácil",
        contexto: "Dona Filomena, 71 anos, é aposentada do INSS e precisa de R$ 10 mil para trocar o telhado da casa. Ela quer um empréstimo com parcelas descontadas diretamente do benefício, pois ouviu que essa modalidade tem taxas mais baixas que as demais.",
        enunciado: "Essa modalidade é o:",
        alternativas: [
            "Cheque especial",
            "Crédito rotativo",
            "Cartão de crédito",
            "Crédito consignado"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-139",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "fácil",
        contexto: "Luiz, 29 anos, é representante comercial e acabou de comprar o primeiro carro. Ao contratar o seguro do veículo, lê na apólice que, em caso de sinistro parcial, como uma batida leve, ele terá de pagar uma parte do conserto, e a seguradora cobre o restante.",
        enunciado: "Essa parte paga pelo segurado é a:",
        alternativas: [
            "Franquia",
            "Prêmio",
            "Indenização",
            "Carência"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-140",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "médio",
        contexto: "Sr. Otacílio, 50 anos, é pedreiro e ficou dois meses usando o cheque especial depois de um período sem obras. Ao ver o valor dos juros cobrados, procura o gerente, certificado CPA, reclama da cobrança e pergunta se existe algum limite para os juros dessa modalidade.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "os juros do cheque especial são livres, sem nenhum limite definido",
            "para pessoas físicas, os juros do cheque especial são limitados à Selic",
            "para pessoas físicas, os juros do cheque especial são limitados a 8% ao mês",
            "os juros do cheque especial são limitados a 8% ao ano para qualquer cliente"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-141",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "médio",
        contexto: "Patrícia, 28 anos, é vendedora e pagou só o mínimo da fatura do cartão de crédito por causa de uma despesa inesperada, entrando no rotativo. Com medo de a dívida ficar impagável, pergunta à gerente, certificada CPA, quais regras protegem o consumidor nessa situação.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "os juros e encargos do rotativo são livres e podem crescer sem limite",
            "os juros do rotativo são limitados a 8% ao ano, como no cheque especial",
            "o rotativo pode durar indefinidamente, sem exigência de parcelamento",
            "os juros e encargos do rotativo não podem passar do valor original da dívida"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-142",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Serviços bancários",
        nivel: "médio",
        contexto: "Seu Genésio, 60 anos, é comerciante e, ao revisar o extrato, percebe cobranças de tarifas por extratos impressos e transferências. Ele acha que os bancos não podem cobrar por nada e questiona o gerente, certificado CPA, se essas cobranças são permitidas.",
        enunciado: "O gerente deve explicar que as tarifas são devidas quando:",
        alternativas: [
            "o banco decide reajustar suas margens, podendo cobrar qualquer serviço",
            "o cliente passa dos serviços essenciais gratuitos ou do pacote contratado",
            "o cliente usa canais digitais, pois a gratuidade vale só nas agências",
            "o saldo fica negativo por qualquer período, independentemente do pacote"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-143",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "PIX",
        nivel: "médio",
        contexto: "Maria, 45 anos, é cabeleireira e recebeu uma mensagem de alguém que se passava pela filha, pedindo dinheiro com urgência. Ela fez um Pix de R$ 2.000,00 e, logo depois, percebeu que era um golpe. Desesperada, vai à agência e pergunta ao gerente, certificado CPA, se existe algum mecanismo para tentar reaver o valor.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o Pix é irreversível em qualquer situação, e não há nenhum mecanismo de devolução",
            "ela pode cancelar o Pix pelo aplicativo em até 30 dias, sem necessidade de análise",
            "ela pode acionar o MED, que permite bloquear e devolver valores em caso de fraude",
            "o FGC devolve o valor de golpes via Pix até R$ 250 mil por CPF"
        ],
        correta: 2
    },

    {
        id: "CPA-M2-144",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "médio",
        contexto: "Roberto, 40 anos, é engenheiro, casado e pai de dois filhos pequenos. Ele tem um financiamento imobiliário com saldo de R$ 350 mil e é o principal provedor da família. Preocupado com o que aconteceria se ele viesse a faltar, pede ao gerente, certificado CPA, que apresente os seguros disponíveis.",
        enunciado: "A recomendação mais completa é:",
        alternativas: [
            "o seguro prestamista para quitar o financiamento, somado a um seguro de vida para a família",
            "apenas o seguro prestamista, pois ele também paga uma renda mensal à família",
            "apenas o seguro de vida, pois ele quita automaticamente o financiamento imobiliário",
            "apenas o seguro residencial, pois ele protege o imóvel e a renda da família"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-145",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Câmbio",
        nivel: "médio",
        contexto: "Leandro, 36 anos, é engenheiro de software e trabalha para uma empresa americana. Ele quer abrir uma conta de investimentos no exterior por uma plataforma digital e comprar ações de empresas estrangeiras, mas tem medo de estar fazendo algo irregular. Pergunta ao assessor, certificado CPA, se isso é permitido.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "é proibido para residentes no Brasil, que só podem investir no exterior por BDRs",
            "é permitido, com remessa por operação de câmbio regular e declaração dos bens à Receita",
            "é permitido, mas os recursos não precisam ser declarados por estarem fora do país",
            "é permitido apenas para investidores profissionais, com abertura presencial da conta"
        ],
        correta: 1
    },

    {
        id: "CPA-M2-146",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "difícil",
        contexto: "Cláudio, 58 anos, é servidor público municipal e, depois de uma emergência médica na família, precisa de dinheiro por alguns meses. Ele pode escolher entre cheque especial, rotativo do cartão e crédito consignado. Diz ao gerente, certificado CPA, que vai usar o cheque especial por ser o mais prático.",
        enunciado: "O gerente deve orientar que a opção mais barata tende a ser:",
        alternativas: [
            "o cheque especial, pois o limite de 8% ao mês o torna mais barato que o consignado",
            "o rotativo do cartão, pois o limite de encargos o torna mais barato que o consignado",
            "o cheque especial, pois ele é o único crédito sem incidência de IOF para pessoa física",
            "o consignado, pois o desconto em folha reduz o risco e resulta em juros menores"
        ],
        correta: 3
    },

    {
        id: "CPA-M2-147",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "difícil",
        contexto: "Vanessa, 31 anos, é recepcionista e deixou R$ 1.000,00 no rotativo do cartão depois de perder o emprego. Durante vários meses, não conseguiu pagar a fatura. Agora, recolocada no mercado, teme que a dívida tenha crescido indefinidamente e pede ajuda ao gerente, certificado CPA.",
        enunciado: "O gerente deve explicar que o valor máximo da dívida, somando juros e encargos, é de:",
        alternativas: [
            "R$ 2.000,00, pois juros e encargos não podem passar de 100% do valor original",
            "R$ 1.080,00, pois juros e encargos são limitados a 8% do valor original",
            "R$ 1.000,00, pois o rotativo não pode gerar juros após o primeiro mês",
            "não há limite, pois o rotativo é uma dívida de juros livres"
        ],
        correta: 0
    },

    {
        id: "CPA-M2-148",
        curso: "cpa",
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "difícil",
        contexto: "Seu Anacleto, 62 anos, é comerciante e tem um imóvel que vale R$ 300.000,00, mas o segurou por R$ 500.000,00, acreditando que assim estaria mais protegido. Após um incêndio com perda total, ele espera receber os R$ 500 mil previstos na apólice e pergunta ao corretor, certificado CPA, quanto vai receber.",
        enunciado: "O corretor deve explicar que a indenização será de até:",
        alternativas: [
            "R$ 500.000,00, pois a indenização sempre segue o valor contratado na apólice",
            "R$ 400.000,00, pois a indenização é a média entre o valor do bem e o da apólice",
            "R$ 300.000,00, pois o seguro de dano repõe o prejuízo, sem gerar lucro ao segurado",
            "R$ 250.000,00, pois a indenização é limitada pelo mesmo teto do FGC"
        ],
        correta: 2
    },

    // ===================== MÓDULO 3 — GRUPO: ORÇAMENTO E BALANÇO PATRIMONIAL (10) =====================

    {
        id: "CPA-M3-001",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "fácil",
        contexto: "Clara, 29 anos, é enfermeira em um hospital particular e decidiu organizar as finanças depois de perceber que o saldo da conta sempre zerava antes do fim do mês. Ela recebe R$ 8.000,00 líquidos por mês e, somando aluguel, mercado, transporte, academia e assinaturas, chegou a despesas mensais de R$ 6.500,00. Desse total, R$ 500,00 correspondem a assinaturas de serviços que ela quase não usa.",
        enunciado: "Considerando a renda líquida e as despesas levantadas por Clara, qual é a sua capacidade de poupança mensal hoje e quanto ela passaria a ser se cancelasse as assinaturas que não usa?",
        alternativas: [
            "R$ 1.500,00 hoje e R$ 1.500,00 depois, pois assinaturas não entram no cálculo da capacidade de poupança",
            "R$ 1.500,00 hoje e R$ 2.000,00 depois do cancelamento das assinaturas",
            "R$ 1.000,00 hoje e R$ 1.500,00 depois do cancelamento das assinaturas",
            "R$ 2.000,00 hoje e R$ 2.500,00 depois do cancelamento das assinaturas"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-002",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "fácil",
        contexto: "Jorge, 41 anos, é representante comercial e visita clientes em várias cidades da região. Incentivado pela esposa, resolveu montar pela primeira vez o balanço patrimonial da família. Ao listar o que possui, incluiu o apartamento financiado, uma pequena aplicação em CDB e o carro que usa todos os dias para trabalhar, avaliado em R$ 75 mil.",
        enunciado: "Ao montar o balanço patrimonial da família, como Jorge deve classificar o carro que utiliza diariamente para visitar os clientes?",
        alternativas: [
            "Ativo de não uso, pois o carro é utilizado para gerar a renda do trabalho",
            "Passivo, pois o carro gera despesas constantes de manutenção e combustível",
            "Ativo de não uso, pois pode ser vendido a qualquer momento pelo valor de mercado",
            "Ativo de uso, pois serve ao dia a dia da família e não gera renda por si só"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-003",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Luana, 26 anos, é designer em uma agência de publicidade e acaba de sair da casa dos pais. Com a ajuda de uma profissional certificada CPA, ela começa a montar o primeiro orçamento mensal. Na lista de gastos, inclui o aluguel do apartamento, a conta de luz, os jantares em restaurantes com amigos e os presentes de aniversário que costuma comprar ao longo do ano.",
        enunciado: "Ao classificar os gastos listados por Luana para montar o orçamento mensal, a profissional deve explicar que:",
        alternativas: [
            "o aluguel é uma despesa fixa, enquanto restaurantes e presentes são despesas variáveis, que mudam conforme as escolhas dela",
            "o aluguel e a conta de luz são despesas fixas de mesmo valor todo mês, e os presentes são despesas fixas anuais",
            "os restaurantes são despesas fixas, pois se repetem toda semana, e o aluguel é variável, pois é reajustado todo ano",
            "todos os itens são despesas variáveis, pois qualquer gasto pode ser reduzido com mudança de hábitos"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-004",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Rodrigo, 37 anos, é dentista e tem um consultório próprio. Ele leu em um blog que todo investidor deveria acompanhar dois relatórios pessoais, o fluxo de caixa e o balanço patrimonial, mas ficou confuso porque os dois pareciam tratar de dinheiro da mesma forma. Na reunião mensal com o planejador, certificado CPA, pergunta qual é a diferença entre eles.",
        enunciado: "Diante da dúvida de Rodrigo, qual explicação o planejador deve dar sobre a diferença entre o fluxo de caixa e o balanço patrimonial pessoal?",
        alternativas: [
            "o fluxo de caixa mostra a posição de bens e dívidas em uma data, e o balanço mostra as entradas e saídas ao longo de um período",
            "o fluxo de caixa e o balanço trazem as mesmas informações, mas o balanço é atualizado apenas uma vez por ano",
            "o fluxo de caixa registra entradas e saídas ao longo de um período, e o balanço mostra a posição de bens e dívidas em uma data",
            "o fluxo de caixa registra entradas e saídas ao longo de um período, e o balanço mostra apenas os investimentos e sua rentabilidade"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-005",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "médio",
        contexto: "Paulo, 45 anos, engenheiro, quer saber se está no caminho da independência financeira. Ele mora em uma casa própria quitada, avaliada em R$ 700 mil, usa um carro no dia a dia e mantém uma carteira de renda fixa e fundos formada ao longo de 15 anos. Em reunião com o assessor, certificado CPA, pergunta quais desses bens geram renda para sustentar seus planos.",
        enunciado: "Considerando os bens de Paulo, qual é a classificação correta de cada um e qual deles pode sustentar sua independência financeira?",
        alternativas: [
            "a casa é um ativo de não uso, pois se valoriza com o tempo, e o carro e os investimentos são ativos de uso",
            "a casa e os investimentos são ativos de não uso, pois ambos se valorizam, e apenas o carro é ativo de uso",
            "todos os bens são ativos de não uso, pois podem ser vendidos e, juntos, sustentam a independência financeira",
            "os investimentos são ativos de não uso e geram renda, enquanto a casa e o carro são ativos de uso"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-006",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Renata, 33 anos, é analista de RH e recebe R$ 6.200,00 por mês. Há dois anos promete a si mesma que vai começar a investir, mas o método que usa nunca funciona: ela paga as contas, faz as compras do mês e tenta guardar o que sobrar no fim. Frustrada, conta ao gerente, certificado CPA, que no fim do mês nunca sobra nada.",
        enunciado: "Considerando que Renata tenta poupar apenas o que sobra no fim do mês, qual é a orientação mais adequada para que ela consiga começar a investir?",
        alternativas: [
            "manter o método atual e investir somente nos meses em que a sobra ultrapassar 10% da renda",
            "definir um valor fixo e separá-lo assim que receber o salário, ajustando as demais despesas ao que restar",
            "aguardar o próximo aumento salarial e investir apenas a diferença entre o salário novo e o antigo",
            "investir o que sobrar no fim do mês e, nos meses sem sobra, usar o cheque especial para manter a regularidade"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-007",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "médio",
        contexto: "Edson, 50 anos, é dono de uma pequena transportadora e procurou o planejador, certificado CPA, para organizar a vida financeira da família. Ao somar tudo, os dois perceberam que as dívidas pessoais, entre financiamento do imóvel, empréstimos e cartões, chegam a 70% do valor total dos seus bens. Edson pergunta se a situação é preocupante e se já pode começar a investir em ações.",
        enunciado: "Com dívidas equivalentes a 70% do valor total dos bens, qual avaliação o planejador deve fazer sobre a situação de Edson e sobre o início dos investimentos em ações?",
        alternativas: [
            "o endividamento é moderado, e ele pode investir em ações desde que mantenha as parcelas em dia",
            "o endividamento é elevado, mas investir em ações é recomendado, pois o retorno esperado supera os juros das dívidas",
            "o endividamento é elevado, e reduzir as dívidas mais caras deve ser prioridade antes de investir em renda variável",
            "o endividamento não é relevante enquanto os bens superarem as dívidas, pois o patrimônio líquido segue positivo"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-008",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Joana, 34 anos, é professora universitária e recebe R$ 9.000,00 por mês. Ela mantém R$ 30.000,00 em aplicações de liquidez diária, tem um carro quitado avaliado em R$ 45.000,00 e despesas mensais de R$ 5.000,00. Preocupada com rumores de cortes na instituição, pede ao planejador, certificado CPA, uma avaliação. Ele calcula o índice de cobertura de despesas, que divide os ativos líquidos pelas despesas mensais.",
        enunciado: "Com base no índice calculado pelo planejador, por quanto tempo Joana conseguiria manter o padrão de vida atual caso perdesse a renda do trabalho?",
        alternativas: [
            "6 meses, pois somente os ativos líquidos, de R$ 30 mil, são divididos pelas despesas mensais de R$ 5 mil",
            "15 meses, pois o carro quitado também entra no cálculo, somando R$ 75 mil divididos por R$ 5 mil",
            "7,5 meses, pois os ativos líquidos são divididos pela sobra mensal entre renda e despesas",
            "3,3 meses, pois os ativos líquidos são divididos pela renda mensal de R$ 9 mil"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-009",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Marcos, 38 anos, é gerente comercial com salário de R$ 15.000,00 e procurou o planejador, certificado CPA, para montar seu balanço patrimonial. Ele mora em uma casa de R$ 400.000,00, usa um carro de R$ 60.000,00 para trabalhar e tem R$ 40.000,00 em investimentos. Ainda deve R$ 250.000,00 do financiamento da casa, em parcelas de R$ 3.200,00, e R$ 10.000,00 na fatura do cartão.",
        enunciado: "Ao consolidar o balanço patrimonial, quais são, respectivamente, o patrimônio líquido de Marcos e o total de seus ativos de não uso?",
        alternativas: [
            "R$ 500.000,00 de patrimônio líquido e R$ 40.000,00 em ativos de não uso",
            "R$ 240.000,00 de patrimônio líquido e R$ 40.000,00 em ativos de não uso",
            "R$ 250.000,00 de patrimônio líquido e R$ 100.000,00 em ativos de não uso",
            "R$ 240.000,00 de patrimônio líquido e R$ 100.000,00 em ativos de não uso"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-010",
        curso: "cpa",
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Seu Rui tem 58 anos, é gerente de uma fábrica de móveis e pretende parar de trabalhar em breve. Ele mora em um apartamento de R$ 1 milhão, quitado há dez anos, e tem poucos investimentos, pois sempre priorizou pagar o imóvel. Em reunião com o planejador, certificado CPA, afirma com confiança que já tem patrimônio suficiente para se aposentar, pois o imóvel vale muito.",
        enunciado: "Considerando a composição do patrimônio de Seu Rui e sua intenção de parar de trabalhar em breve, qual análise o planejador deve apresentar?",
        alternativas: [
            "o imóvel quitado é um ativo de não uso e, por ter alto valor, já garante a renda necessária para a aposentadoria",
            "o imóvel é um ativo de uso, mas conta como fonte de renda passiva, já que elimina a despesa com aluguel",
            "o patrimônio é suficiente, pois o imóvel pode ser dado em garantia de empréstimos para complementar a renda",
            "o imóvel é um ativo de uso e não gera renda; para se aposentar, ele precisa formar ativos que gerem renda"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: CRÉDITO E GESTÃO DE DÍVIDAS (10) =====================

    {
        id: "CPA-M3-011",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Garantias",
        nivel: "fácil",
        contexto: "Bruno, 27 anos, trabalha como técnico de manutenção e decidiu trocar a moto por um carro para levar a filha à escola. Na concessionária, fechou um financiamento em 48 parcelas. Ao ler o contrato, descobriu que o veículo fica registrado em nome dele, mas vinculado ao banco até a quitação, podendo ser retomado caso as parcelas deixem de ser pagas.",
        enunciado: "No financiamento contratado por Bruno, qual é a garantia que permite ao banco retomar o veículo caso as parcelas deixem de ser pagas?",
        alternativas: [
            "Aval, pois um terceiro assume a dívida caso Bruno fique inadimplente",
            "Hipoteca, pois o bem permanece em nome do devedor até a quitação",
            "Penhor, pois o veículo fica em poder do banco até o fim do contrato",
            "Alienação fiduciária, pois o bem fica vinculado ao credor até a quitação"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-012",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "fácil",
        contexto: "Sônia, 52 anos, é costureira autônoma e precisa trocar a geladeira, que quebrou na semana passada. Na loja de eletrodomésticos, o vendedor oferece o parcelamento em 12 vezes por meio de um banco parceiro. O crédito é concedido especificamente para a compra daquele produto, e o valor é pago diretamente à loja, não caindo na conta dela.",
        enunciado: "Considerando que o crédito foi concedido para a compra de um produto específico e pago diretamente à loja, qual modalidade Sônia está contratando?",
        alternativas: [
            "CDC, crédito vinculado à aquisição de um bem ou serviço específico",
            "Empréstimo pessoal, crédito de uso livre liberado na conta do cliente",
            "Crédito consignado, com parcelas descontadas diretamente da renda",
            "Cheque especial, limite pré-aprovado vinculado à conta corrente"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-013",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "médio",
        contexto: "Seu Antônio, 67 anos, é aposentado do INSS e recebe R$ 3.800,00 por mês. Depois de ajudar o neto com despesas de faculdade, acumulou uma dívida de R$ 8.000,00 no rotativo do cartão de crédito, que cresce a cada fatura. Como aposentado, ele tem acesso ao crédito consignado. Preocupado, procura o gerente, certificado CPA, para saber o que fazer.",
        enunciado: "Diante da dívida crescente no rotativo e da possibilidade de contratar crédito consignado, qual orientação o gerente deve dar a Seu Antônio?",
        alternativas: [
            "pagar o mínimo da fatura enquanto negocia, pois os juros do rotativo são limitados por lei ao nível do consignado",
            "manter a dívida no rotativo, pois o consignado compromete o benefício e tem custo total maior",
            "trocar a dívida do rotativo pelo consignado, que tem juros bem menores, desde que a parcela caiba no orçamento",
            "parcelar a fatura no próprio cartão, pois o parcelamento tem juros menores que qualquer consignado"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-014",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "Mariana, 30 anos, é fisioterapeuta e está planejando duas coisas para o próximo ano: trocar o carro e fazer uma viagem longa com o marido. Em conversas com amigos, ouviu os termos empréstimo pessoal e financiamento usados como se fossem a mesma coisa. Antes de decidir, pergunta ao gerente, certificado CPA, qual é a diferença entre as duas modalidades.",
        enunciado: "Como Mariana pretende trocar o carro e também viajar, qual diferença entre empréstimo pessoal e financiamento o gerente deve explicar?",
        alternativas: [
            "o empréstimo tem destinação específica, como veículo ou imóvel, e o financiamento pode ser usado livremente",
            "os dois podem ser usados livremente e diferem apenas no prazo máximo e no valor das parcelas",
            "os dois têm destinação específica, mas apenas o empréstimo pode ser usado para pagar viagens",
            "o financiamento tem destinação específica, como veículo ou imóvel, e o empréstimo pode ser usado livremente"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-015",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Garantias",
        nivel: "médio",
        contexto: "Otávio, 48 anos, é dono de uma rede de três padarias e quer abrir uma quarta unidade. Para conseguir juros menores, pensa em oferecer a casa onde mora com a família, avaliada em R$ 900 mil, como garantia de um empréstimo de R$ 200 mil. Antes de assinar, pergunta ao consultor, certificado CPA, quais são as vantagens e os riscos dessa escolha.",
        enunciado: "Em relação à ideia de oferecer a casa da família como garantia do empréstimo, qual análise o consultor deve apresentar a Otávio?",
        alternativas: [
            "a garantia reduz os juros, e a casa não pode ser tomada pelo credor por ser o imóvel de moradia da família",
            "a garantia tende a reduzir os juros, mas a casa pode ser tomada pelo credor se as parcelas não forem pagas",
            "a garantia aumenta os juros, pois o banco passa a arcar com os custos de avaliação e manutenção do imóvel",
            "a garantia não altera os juros, mas dá ao cliente o direito de suspender parcelas sem multa em caso de dificuldade"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-016",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "Kauã, 18 anos, terminou o ensino médio em escola pública e foi aprovado em Engenharia em uma faculdade particular. A mãe é diarista e o pai trabalha como pedreiro, e a renda da família não comporta a mensalidade de R$ 1.800,00. Acompanhado da mãe, ele pergunta ao gerente, certificado CPA, se existe uma linha de crédito específica para esse tipo de situação.",
        enunciado: "Considerando a renda da família e o valor da mensalidade, o que o gerente deve explicar a Kauã sobre o financiamento estudantil?",
        alternativas: [
            "cobra juros de mercado e exige o pagamento integral das parcelas durante o curso",
            "é concedido apenas a estudantes de universidades públicas, para custear moradia e material",
            "tem condições especiais, e boa parte do pagamento ocorre após a conclusão do curso",
            "tem condições especiais, mas só pode ser contratado depois do primeiro ano de faculdade"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-017",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "A família Oliveira mora em uma casa em Cuiabá e paga, em média, R$ 650,00 por mês de energia elétrica por causa do uso intenso do ar-condicionado. Eles receberam um orçamento de R$ 25 mil para instalar painéis solares e souberam que o banco oferece uma linha de crédito para energia sustentável. Perguntam ao gerente, certificado CPA, como avaliar se vale a pena.",
        enunciado: "Para decidir se vale a pena financiar os painéis solares, qual análise o gerente deve recomendar à família Oliveira?",
        alternativas: [
            "comparar o custo total do financiamento com a economia esperada na conta de luz ao longo do tempo",
            "contratar sem comparar custos, pois a economia na conta de luz sempre supera o valor das parcelas",
            "considerar apenas a taxa de juros mensal, pois tarifas e seguros não incidem nesse tipo de linha",
            "descartar a linha, pois o crédito para energia sustentável é restrito a pessoas jurídicas"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-018",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Carla, 36 anos, é vendedora em uma loja de roupas e tem três dívidas: o rotativo do cartão, a 14% ao mês; o cheque especial, a 8% ao mês; e um consignado, a 1,8% ao mês, que ela considera a dívida mais incômoda por ter as parcelas descontadas direto no salário. Ela recebeu um bônus que dá para quitar apenas uma delas.",
        enunciado: "Considerando que o bônus permite quitar apenas uma das dívidas, qual delas o planejador deve orientar Carla a quitar primeiro e por quê?",
        alternativas: [
            "o consignado, pois o desconto direto no salário reduz a renda disponível todos os meses",
            "o rotativo do cartão, pois é a dívida com o maior custo mensal",
            "o cheque especial, pois tem juros intermediários e é renovado automaticamente pelo banco",
            "a de menor saldo devedor, pois eliminar uma dívida inteira reduz o número de credores"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-019",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Sérgio, 44 anos, pequeno empresário, precisa de R$ 50 mil para reformar a loja e recebeu duas propostas com o mesmo valor e prazo. O banco A cobra juros de 1,9% ao mês, mas inclui tarifa de cadastro e seguro prestamista obrigatório, que elevam o CET para 2,6% ao mês. O banco B cobra juros de 2,1% ao mês, com CET de 2,2% ao mês. Sérgio está inclinado a escolher o banco A, por ter a menor taxa anunciada.",
        enunciado: "Qual proposta o gerente, certificado CPA, deve indicar como a de menor custo para Sérgio, e por qual motivo?",
        alternativas: [
            "a do banco A, pois a taxa de juros é o único componente que define o custo final da operação",
            "a do banco A, pois tarifas e seguros são cobrados à parte e não integram o custo do crédito",
            "a do banco B, pois a diferença entre sua taxa de juros e o CET indica que ele não cobra tarifas",
            "a do banco B, pois o CET, que reúne juros, tarifas, seguros e demais encargos, é menor"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-020",
        curso: "cpa",
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Fábio e Cristina estão casados há 12 anos, trabalham como servidores públicos e têm renda familiar estável de R$ 18.000,00. Eles querem reformar a casa e, para isso, consideram três opções: o cheque especial, o crédito pessoal sem garantia e um empréstimo com o imóvel em garantia. O casal está convencido de que dar o imóvel em garantia é sempre uma má ideia.",
        enunciado: "Considerando a renda estável do casal e as três opções de crédito avaliadas para a reforma, qual orientação o consultor deve dar?",
        alternativas: [
            "o empréstimo com garantia do imóvel pode ser vantajoso pelos juros menores, desde que as parcelas caibam no orçamento",
            "o cheque especial é o mais indicado, pois permite pagar a reforma aos poucos, sem parcelas fixas",
            "o crédito pessoal sem garantia é o mais indicado, pois tem juros menores que o crédito com garantia imobiliária",
            "o empréstimo com garantia deve ser evitado, pois o imóvel é tomado automaticamente no primeiro atraso"
        ],
        correta: 0
    },

    // ===================== MÓDULO 3 — GRUPO: RESERVA DE EMERGÊNCIA (8) =====================

    {
        id: "CPA-M3-021",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "fácil",
        contexto: "Leandro, 29 anos, é analista de logística e acabou de abrir sua primeira conta de investimentos. No aplicativo do banco, viu uma mensagem recomendando que todo investidor comece pela reserva de emergência antes de pensar em ações ou fundos. Curioso, ele pergunta ao atendente qual é, afinal, o principal objetivo de manter esse tipo de reserva.",
        enunciado: "Qual é o principal objetivo da reserva de emergência que o atendente deve explicar a Leandro?",
        alternativas: [
            "Cobrir imprevistos, como perda de renda ou despesas inesperadas, sem recorrer a dívidas",
            "Buscar a maior rentabilidade possível antes de migrar para ações e fundos",
            "Acumular recursos para compras planejadas, como viagens e troca de carro",
            "Complementar a aposentadoria, dispensando a contratação de um plano de previdência"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-022",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "fácil",
        contexto: "Priscila, 31 anos, é bancária em outra instituição e juntou R$ 20 mil para formar sua reserva de emergência. Ela quer deixar o dinheiro em uma aplicação que não oscile muito e que possa ser resgatada a qualquer momento, sem depender de vender em momento ruim. Pede ao gerente uma indicação simples para esse objetivo.",
        enunciado: "Considerando que Priscila busca baixa oscilação e possibilidade de resgate a qualquer momento, qual aplicação o gerente deve indicar para a reserva?",
        alternativas: [
            "Tesouro IPCA+ de longo prazo, pois protege o valor aplicado contra a inflação",
            "Fundo de ações com resgate em D+2, pois tem liquidez em poucos dias",
            "Tesouro Selic, pois tem baixa oscilação e liquidez diária",
            "LCA com carência de 90 dias, pois é isenta de imposto de renda"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-023",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Gilberto, 44 anos, é mecânico e dono de uma oficina. Depois de passar três meses sem conseguir trabalhar por causa de uma cirurgia no joelho, decidiu que nunca mais ficaria sem uma reserva. Ele tem R$ 15 mil para começar e pergunta ao gerente, certificado CPA, quais características são mais importantes na aplicação escolhida para esse dinheiro.",
        enunciado: "Ao escolher a aplicação para a reserva de Gilberto, quais características o gerente deve apontar como prioritárias?",
        alternativas: [
            "rentabilidade alta, ainda que o resgate leve alguns meses para ser concluído",
            "baixo risco, ainda que o resgate dependa de um prazo de carência longo",
            "liquidez e rentabilidade alta, ainda que haja risco de perda no curto prazo",
            "liquidez e baixo risco, ainda que a rentabilidade seja menor que a de outras opções"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-024",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Thiago, 25 anos, é programador e levou um ano para juntar uma reserva de emergência equivalente a seis meses de despesas. Sua banda favorita anunciou um show único no Brasil, com ingressos e viagem que somam R$ 4.000,00, e ele não tem esse valor fora da reserva. Antes de decidir, pede a opinião do planejador, certificado CPA.",
        enunciado: "Diante do desejo de Thiago de usar parte da reserva para ir ao show, qual orientação o planejador deve dar sobre o uso desse dinheiro?",
        alternativas: [
            "pode ser usada em qualquer gasto, desde que o valor seja reposto nos meses seguintes",
            "deve ser usada apenas em imprevistos necessários, como perda de renda ou problemas de saúde",
            "pode ser usada em gastos planejados, pois o dinheiro já está disponível e rende pouco",
            "deve ser usada em oportunidades de investimento que ofereçam rentabilidade maior"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-025",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Ana, 40 anos, é servidora pública estadual há 15 anos, com estabilidade no cargo e salário fixo. Pedro, seu irmão, 38 anos, é fotógrafo autônomo e tem meses de alta renda, como dezembro, e meses quase sem trabalho. Os dois têm despesas mensais parecidas e perguntam ao planejador, certificado CPA, se precisam de reservas do mesmo tamanho.",
        enunciado: "Considerando a estabilidade de renda de cada um, o que o planejador deve explicar a Ana e Pedro sobre o tamanho das reservas?",
        alternativas: [
            "Ana precisa de uma reserva maior, pois servidores costumam ter despesas fixas mais altas",
            "os dois precisam de reservas do mesmo tamanho, pois as despesas mensais são parecidas",
            "Pedro precisa de uma reserva maior, pois sua renda é mais instável",
            "Pedro precisa de uma reserva menor, pois nos meses de alta renda consegue repor o que usar"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-026",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Débora, 35 anos, é psicóloga e quer calcular o tamanho ideal da sua reserva de emergência. Ao revisar os gastos do último ano, ela lista aluguel, alimentação, plano de saúde, duas viagens de férias e jantares frequentes em restaurantes. Sem saber o que considerar, pergunta à gerente, certificada CPA, quais desses itens devem entrar na conta.",
        enunciado: "Para calcular o tamanho ideal da reserva de Débora, quais despesas a gerente deve orientar a considerar?",
        alternativas: [
            "as despesas essenciais, como aluguel, alimentação e plano de saúde",
            "todas as despesas do último ano, incluindo viagens e restaurantes, divididas por 12",
            "apenas o aluguel e o plano de saúde, por serem as despesas previstas em contrato",
            "apenas as despesas variáveis, como viagens e restaurantes, por serem as que oscilam"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-027",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "difícil",
        contexto: "Um planejador, certificado CPA, adota como regra 6 meses de despesas essenciais para assalariados e 12 meses para autônomos. Lúcia, 42 anos, é arquiteta autônoma e tem renda média de R$ 9.000,00 por mês, que varia conforme os projetos. Ela gasta R$ 6.000,00 por mês, sendo R$ 1.500,00 com lazer, e pede ajuda para definir o tamanho da sua reserva.",
        enunciado: "Aplicando a regra adotada pelo planejador ao perfil profissional e às despesas de Lúcia, qual deve ser o valor da reserva de emergência?",
        alternativas: [
            "R$ 72.000,00, correspondentes a 12 meses das despesas totais de R$ 6.000,00",
            "R$ 54.000,00, correspondentes a 12 meses das despesas essenciais de R$ 4.500,00",
            "R$ 27.000,00, correspondentes a 6 meses das despesas essenciais de R$ 4.500,00",
            "R$ 108.000,00, correspondentes a 12 meses da renda média de R$ 9.000,00"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-028",
        curso: "cpa",
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "difícil",
        contexto: "Rafael, 32 anos, é engenheiro civil e investe há cinco anos. Ele mantém toda a sua reserva de emergência, cerca de R$ 40 mil, em cotas de fundos imobiliários negociados na bolsa, pois pagam rendimentos mensais isentos de IR para pessoa física. Em reunião de revisão da carteira, diz ao assessor, certificado CPA, que considera a reserva muito bem aplicada.",
        enunciado: "Qual avaliação o assessor deve fazer sobre manter toda a reserva de emergência de Rafael em cotas de fundos imobiliários?",
        alternativas: [
            "a reserva está adequada, pois os rendimentos mensais isentos compensam eventuais oscilações das cotas",
            "a reserva está adequada, pois as cotas são negociadas em bolsa e contam com a garantia do FGC",
            "a reserva está inadequada apenas porque o ganho na venda das cotas é tributado",
            "a reserva está inadequada, pois as cotas oscilam e podem precisar ser vendidas com perda em uma emergência"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: PLANEJAMENTO FINANCEIRO (10) =====================

    {
        id: "CPA-M3-029",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "fácil",
        contexto: "Um planejador, certificado CPA, recebe em seu escritório um casal que acabou de vender uma empresa familiar e quer organizar o futuro financeiro. Eles chegam com muitas dúvidas sobre investimentos, previdência e compra de imóveis, e pedem que o planejador sugira logo onde aplicar o dinheiro. Ele explica que o processo de planejamento segue uma ordem de etapas.",
        enunciado: "Diante do pedido do casal para receber logo a indicação de investimentos, qual deve ser a primeira etapa do processo de planejamento financeiro conduzido pelo planejador?",
        alternativas: [
            "Escolher os produtos mais adequados ao perfil do casal",
            "Implementar o plano de ação com parte dos recursos",
            "Definir, junto com o casal, os objetivos financeiros",
            "Monitorar o desempenho das aplicações já existentes"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-030",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Ciclo de vida",
        nivel: "fácil",
        contexto: "Gustavo tem 25 anos, formou-se em Administração no ano passado e acabou de ser efetivado como analista júnior em uma empresa de tecnologia. Ele mora com os pais, não tem dívidas e ainda tem pouco patrimônio, apenas uma pequena aplicação no Tesouro. Pretende comprar um apartamento e começar a investir todo mês.",
        enunciado: "Considerando a idade, o início da carreira e os planos de Gustavo, em qual fase do ciclo de vida financeiro ele se encontra?",
        alternativas: [
            "Consolidação, pois já possui uma aplicação no Tesouro",
            "Usufruto, pois ainda mora com os pais e tem poucas despesas",
            "Transferência, pois pretende adquirir um imóvel próprio",
            "Acumulação, pois está no início da formação de patrimônio"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-031",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "médio",
        contexto: "Silvana, 46 anos, é empresária do setor de eventos e procurou um planejador, certificado CPA, porque quer começar a investir em fundos. Antes de sugerir qualquer investimento, ele pede a ela extratos bancários, a lista de dívidas e o detalhamento das despesas do mês. Impaciente, Silvana pergunta por que tudo isso é necessário, se ela só quer saber onde aplicar.",
        enunciado: "Diante da impaciência de Silvana, como o planejador deve justificar o pedido de extratos, dívidas e despesas antes de sugerir investimentos?",
        alternativas: [
            "os documentos são exigidos pela Receita Federal de qualquer cliente que queira investir em fundos",
            "é preciso diagnosticar a situação financeira atual antes de elaborar o plano de ação",
            "o plano de ação pode ser montado antes, e os documentos servem apenas para validá-lo depois",
            "os documentos só são necessários porque o setor de eventos tem renda irregular"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-032",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "médio",
        contexto: "Henrique, 34 anos, é contador e montou um plano financeiro detalhado há três anos, quando ainda era solteiro e morava de aluguel. Desde então, casou, teve um filho e comprou um carro financiado, mas nunca mais revisou o plano, que continua prevendo aportes e prazos da época. Ele procura o planejador, certificado CPA, porque os números já não parecem fazer sentido.",
        enunciado: "Considerando as mudanças ocorridas na vida de Henrique desde a elaboração do plano, qual orientação o planejador deve dar?",
        alternativas: [
            "manter o plano original até o fim do prazo, para não perder a disciplina dos aportes",
            "revisar o plano somente se os investimentos apresentarem prejuízo em algum período",
            "monitorar o plano periodicamente e revisá-lo, sobretudo após mudanças relevantes de vida",
            "abandonar o planejamento de longo prazo, pois mudanças de vida tornam qualquer plano inútil"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-033",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Metas financeiras",
        nivel: "médio",
        contexto: "Viviane, 28 anos, é enfermeira e está animada para começar a investir. Na primeira conversa com o gerente, certificado CPA, ele pergunta qual é o seu objetivo. Ela responde que sua meta é juntar bastante dinheiro algum dia, para ter mais tranquilidade. O gerente percebe que esse objetivo, como está, dificulta a escolha dos investimentos.",
        enunciado: "Para que o objetivo de Viviane ajude na escolha dos investimentos, como o gerente deve orientá-la a reformular sua meta?",
        alternativas: [
            "tornando-a específica, mensurável e com prazo, como juntar R$ 30 mil em três anos",
            "mantendo-a ampla e flexível, para evitar frustração caso o valor não seja atingido",
            "definindo-a pela rentabilidade, como superar o Ibovespa todos os anos",
            "definindo um prazo curto, mas sem valor fixo, para criar senso de urgência"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-034",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Planejamento educacional",
        nivel: "médio",
        contexto: "Rogério e Patrícia têm uma filha de 3 anos, Alice, e querem garantir que ela possa cursar uma boa faculdade, o que deve acontecer daqui a 15 anos. Os dois são médicos e conseguem aplicar R$ 1.500,00 por mês. Preocupados com o aumento constante das mensalidades, pedem orientação ao planejador, certificado CPA, sobre como investir para esse objetivo.",
        enunciado: "Considerando o prazo até a faculdade de Alice e a preocupação com o aumento das mensalidades, qual orientação o planejador deve dar ao casal?",
        alternativas: [
            "o horizonte é curto, e a poupança é a opção mais adequada por ter liquidez diária",
            "o horizonte é longo, e produtos com proteção contra a inflação são adequados ao objetivo",
            "o horizonte é longo, e concentrar os aportes em ações de uma única empresa maximiza o resultado",
            "o horizonte é longo, mas a inflação não afeta o objetivo, pois as mensalidades são reajustadas uma vez por ano"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-035",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Aposentadoria",
        nivel: "médio",
        contexto: "Wagner, 39 anos, é gerente de vendas e leu um livro sobre finanças pessoais que fala muito em independência financeira. Ele imaginava que o termo significasse ganhar um salário alto, mas o livro sugere outra coisa. Na reunião com o planejador, certificado CPA, pergunta o que significa, na prática, atingir a independência financeira.",
        enunciado: "Qual definição de independência financeira o planejador deve apresentar a Wagner?",
        alternativas: [
            "o momento em que o salário passa a superar todas as despesas mensais da família",
            "o momento em que o financiamento da casa própria é quitado e o aluguel deixa de existir",
            "o momento em que o patrimônio acumulado supera o valor do imóvel em que ele mora",
            "o momento em que a renda gerada pelos investimentos é suficiente para cobrir as despesas"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-036",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Aposentadoria",
        nivel: "difícil",
        contexto: "Cláudio, 50 anos, é diretor de uma empresa de engenharia e quer se aposentar com renda de R$ 10.000,00 por mês, vivendo apenas do rendimento dos investimentos, sem consumir o patrimônio. Hoje ele recebe R$ 35.000,00 por mês. Para o cálculo, o planejador, certificado CPA, considera um retorno real de 4% ao ano sobre o patrimônio.",
        enunciado: "Considerando a renda desejada e o retorno real estimado pelo planejador, qual é o patrimônio necessário para que Cláudio viva apenas dos rendimentos?",
        alternativas: [
            "R$ 3.000.000,00, pois a renda anual de R$ 120 mil dividida por 4% resulta nesse valor",
            "R$ 250.000,00, pois a renda mensal de R$ 10 mil dividida por 4% resulta nesse valor",
            "R$ 10.500.000,00, pois a renda mensal atual de R$ 35 mil, anualizada, é dividida por 4%",
            "R$ 4.800.000,00, pois a renda anual de R$ 120 mil é multiplicada por 40 anos de aposentadoria"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-037",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Ciclo de vida",
        nivel: "difícil",
        contexto: "Seu Hélio tem 62 anos, é gerente administrativo e vai se aposentar em dois anos. Durante toda a carreira, deixou o patrimônio em poupança e CDB. Depois de ver amigos comentarem sobre ganhos na bolsa, diz ao assessor, certificado CPA, que quer colocar 80% do patrimônio em ações para recuperar o tempo perdido antes de parar de trabalhar.",
        enunciado: "Considerando a proximidade da aposentadoria de Seu Hélio e sua intenção de alocar 80% do patrimônio em ações, qual análise o assessor deve apresentar?",
        alternativas: [
            "nessa fase, a prioridade é recuperar o tempo perdido, e a alta exposição a ações é a mais indicada",
            "nessa fase, a prioridade é preservar o patrimônio, e por isso ele deve manter tudo na poupança",
            "nessa fase, a prioridade é preservar o patrimônio, e muita exposição a ações eleva o risco perto da aposentadoria",
            "nessa fase, a exposição a ações é adequada, pois eventuais perdas são recuperadas antes da aposentadoria"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-038",
        curso: "cpa",
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Planejamento educacional",
        nivel: "difícil",
        contexto: "Eduardo e Simone têm um filho de 8 anos e acabaram de receber uma herança. Eles decidem aplicar hoje R$ 50.000,00 para a faculdade do menino, que deve começar daqui a 10 anos, e pretendem não mexer no valor até lá. O planejador, certificado CPA, estima um retorno real de 7% ao ano, no regime de juros compostos.",
        enunciado: "Considerando a aplicação única de R$ 50.000,00 e o retorno real estimado, qual será o valor aproximado, em termos reais, quando o filho de Eduardo e Simone começar a faculdade?",
        alternativas: [
            "R$ 85.000,00, pois 7% ao ano durante 10 anos representam 70% de juros sobre o valor inicial",
            "R$ 100.000,00, pois, pela regra dos 72, o valor dobra em exatamente 10 anos a 7% ao ano",
            "R$ 91.923,00, pois R$ 50 mil são multiplicados por 1,07 elevado a 9",
            "R$ 98.358,00, pois R$ 50 mil são multiplicados por 1,07 elevado a 10"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: IMPOSTO DE RENDA DA PESSOA FÍSICA (8) =====================

    {
        id: "CPA-M3-039",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "fácil",
        contexto: "Lucas, 30 anos, é analista de sistemas contratado pelo regime CLT e vai fazer a própria declaração do Imposto de Renda pela primeira vez, sem ajuda de contador. Com o informe de rendimentos da empresa em mãos, ele precisa classificar corretamente o salário que recebeu ao longo do ano no programa da Receita Federal.",
        enunciado: "O salário é um rendimento:",
        alternativas: [
            "Isento",
            "Não tributável",
            "Exclusivo na fonte",
            "Tributável"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-040",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "fácil",
        contexto: "Ana, 27 anos, é assistente administrativa em uma construtora e está preenchendo a declaração do Imposto de Renda. No informe de rendimentos enviado pela empresa, aparecem o salário, o valor descontado de INSS e o 13º salário recebido em dezembro. Ela precisa informar o 13º na ficha correta da declaração.",
        enunciado: "O 13º salário é um rendimento:",
        alternativas: [
            "Tributável",
            "Exclusivo na fonte",
            "Isento",
            "Não tributável"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-041",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "médio",
        contexto: "Sandra, 45 anos, é gerente de uma rede de farmácias e tem dois filhos em escola particular. No último ano, teve muitas despesas médicas com o tratamento da mãe, que é sua dependente, e contribuiu regularmente para um PGBL. Na hora de declarar o Imposto de Renda, pergunta ao gerente, certificado CPA, qual modelo de declaração tende a ser melhor.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o modelo simplificado é sempre o melhor, pois dá desconto sem comprovantes",
            "o modelo completo é obrigatório para quem tem filhos em escola particular",
            "o modelo completo tende a ser melhor quando as deduções legais são altas",
            "os dois modelos resultam sempre no mesmo imposto a pagar"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-042",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "médio",
        contexto: "Roberto, 38 anos, é engenheiro e sempre fez a declaração do Imposto de Renda no modelo simplificado, por ser mais prático. No ano passado, começou a contribuir para um PGBL depois de ouvir que o plano traz benefício fiscal. Ao preparar a nova declaração, pergunta ao assessor, certificado CPA, se pode deduzir essas contribuições.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a dedução do PGBL só é aproveitada no modelo completo",
            "a dedução do PGBL vale nos dois modelos, até 12% da renda",
            "a dedução do PGBL só é aproveitada no modelo simplificado",
            "o PGBL não permite dedução em nenhum modelo de declaração"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-043",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "médio",
        contexto: "Nelson, 55 anos, é comerciante e mantém aplicações em três produtos: uma caderneta de poupança aberta há anos, uma LCI comprada no ano passado e um CDB com vencimento em dois anos. Ao preencher a declaração do Imposto de Renda, fica em dúvida sobre onde informar cada rendimento e pergunta à gerente, certificada CPA.",
        enunciado: "A gerente deve explicar que:",
        alternativas: [
            "os três são tributáveis e somados ao salário no cálculo do imposto",
            "os de poupança e LCI são isentos, e os do CDB são exclusivos na fonte",
            "os de poupança e LCI são exclusivos na fonte, e os do CDB são isentos",
            "os três são isentos e não precisam ser informados na declaração"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-044",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "médio",
        contexto: "Seu Carlos, 63 anos, é aposentado e herdou um apartamento que passou a alugar para um casal jovem por R$ 2.500,00 por mês. Os inquilinos são pessoas físicas e pagam o aluguel diretamente a ele por transferência. Carlos nunca teve renda além da aposentadoria e pergunta ao gerente, certificado CPA, como esse rendimento é tratado no IR.",
        enunciado: "O gerente deve explicar que o aluguel:",
        alternativas: [
            "é isento, pois o imóvel já pagou impostos quando foi comprado",
            "é tributado exclusivamente na fonte pelo inquilino, sem outra obrigação",
            "é tributável, mas só precisa ser declarado quando o imóvel for vendido",
            "é tributável e, pago por pessoa física, exige o carnê-leão mensal"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-045",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "difícil",
        contexto: "Renan, 41 anos, é engenheiro de produção e tem rendimentos tributáveis anuais de R$ 100.000,00. Ele mora sozinho e sempre usou o modelo simplificado, no qual o desconto seria de cerca de R$ 16.000,00. Neste ano, porém, passou por uma cirurgia e tem R$ 25.000,00 em despesas médicas comprovadas, que poderia deduzir no modelo completo.",
        enunciado: "O planejador, certificado CPA, deve orientar Renan a escolher:",
        alternativas: [
            "o modelo completo, pois as deduções de R$ 25 mil superam o desconto de R$ 16 mil",
            "o modelo simplificado, pois o desconto padrão é sempre mais vantajoso",
            "o modelo simplificado, pois despesas médicas não são dedutíveis",
            "o modelo completo, pois ele permite somar o desconto de R$ 16 mil às deduções"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-046",
        curso: "cpa",
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "difícil",
        contexto: "Beatriz, 33 anos, é advogada contratada por um escritório e começou a investir no ano passado. Ao longo do ano, recebeu o salário, os rendimentos de um CDB e os rendimentos de uma LCA. Ao reunir os documentos para a declaração do Imposto de Renda, o contador pede que ela classifique cada um desses rendimentos.",
        enunciado: "Na ordem salário, CDB e LCA, a classificação correta é:",
        alternativas: [
            "exclusivo na fonte, tributável e isento",
            "tributável, isento e exclusivo na fonte",
            "tributável, exclusivo na fonte e isento",
            "isento, exclusivo na fonte e tributável"
        ],
        correta: 2
    },

    // ===================== MÓDULO 3 — GRUPO: PERFIL, SUITABILITY E CONDUTA (14) =====================

    {
        id: "CPA-M3-047",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Perfis de investidor",
        nivel: "fácil",
        contexto: "Dona Irene, 58 anos, é professora aposentada e tem R$ 200 mil aplicados. Ao responder o questionário de perfil, ela conta ao gerente que já perdeu dinheiro uma vez com ações, na década de 1990, e que não aceita ver o valor investido cair, mesmo que isso signifique ganhar menos do que outros investimentos poderiam render.",
        enunciado: "O perfil dessa cliente é:",
        alternativas: [
            "Moderado",
            "Conservador",
            "Arrojado",
            "Agressivo"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-048",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Técnicas de atendimento",
        nivel: "fácil",
        contexto: "Seu Ademar, 70 anos, chega à agência nervoso por causa de uma cobrança que não reconhece. A gerente o recebe, deixa que ele explique toda a situação sem interrupções, faz perguntas para confirmar o que entendeu e repete com as próprias palavras o problema relatado. Só depois disso apresenta as soluções possíveis.",
        enunciado: "Essa técnica é chamada de:",
        alternativas: [
            "Venda consultiva",
            "Ancoragem",
            "Escuta ativa",
            "Gestão discricionária"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-049",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "fácil",
        contexto: "Um vídeo de um cliente reclamando do atendimento de uma instituição financeira, que demorou semanas para devolver um valor cobrado por engano, viraliza nas redes sociais. Nos dias seguintes, outros clientes, mesmo sem problemas com a instituição, começam a retirar seus recursos e a encerrar contas.",
        enunciado: "Esse risco é o:",
        alternativas: [
            "De imagem",
            "Operacional",
            "De crédito",
            "De mercado"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-050",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Adequação de produtos",
        nivel: "médio",
        contexto: "Tatiana, 31 anos, é nutricionista, tem perfil moderado e está noiva. Ela e o noivo já escolheram um apartamento na planta e precisam dar a entrada daqui a seis meses. Tatiana tem R$ 60 mil guardados na conta corrente e pede ao gerente, certificado CPA, uma indicação de onde aplicar esse valor até a data da entrada.",
        enunciado: "O gerente deve indicar:",
        alternativas: [
            "um fundo de ações, pois o perfil moderado permite parte em renda variável",
            "um produto de baixa oscilação e boa liquidez, pois o objetivo é de curto prazo",
            "um produto de prazo longo, pois o perfil moderado pede diversificação",
            "um produto de alta volatilidade, pois o prazo curto exige retorno maior"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-051",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Monitoramento do suitability",
        nivel: "médio",
        contexto: "Sérgio, 47 anos, é cliente do banco há dez anos e respondeu o questionário de perfil de investidor há três anos, quando abriu a conta de investimentos. Desde então, trocou de emprego e teve o primeiro filho. Agora, o gerente, certificado CPA, vai recomendar a ele um novo investimento.",
        enunciado: "O gerente deve observar que:",
        alternativas: [
            "o perfil vale por tempo indeterminado, desde que o cliente não reclame",
            "o perfil deve ser atualizado apenas quando o cliente mudar de renda",
            "o perfil deve ser atualizado a cada 60 meses, por exigência da CVM",
            "o perfil deve ser atualizado em intervalos de no máximo 24 meses"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-052",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Comunicação com o cliente",
        nivel: "médio",
        contexto: "Dona Marlene, 64 anos, é aposentada e sempre investiu apenas na poupança. Ela quer diversificar e aceitou ouvir a proposta de um COE, que o banco está oferecendo. O gerente, certificado CPA, sabe que ela tem pouco conhecimento sobre investimentos e precisa decidir como apresentar o produto.",
        enunciado: "A forma mais adequada de comunicar o produto é:",
        alternativas: [
            "usar linguagem simples e explicar os riscos, os custos e os cenários de perda",
            "destacar o cenário de maior ganho, para despertar o interesse da cliente",
            "usar termos técnicos, para demonstrar domínio sobre o produto",
            "entregar o material por escrito e dispensar explicações verbais"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-053",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Gerenciamento de expectativas",
        nivel: "médio",
        contexto: "Juliano, 36 anos, é engenheiro e tem perfil arrojado. Ele está pensando em aplicar R$ 50 mil em um fundo multimercado recomendado pela instituição, que rendeu 18% no último ano. Antes de decidir, pergunta ao assessor, certificado CPA, quanto vai ganhar nesse fundo no próximo ano.",
        enunciado: "O assessor deve:",
        alternativas: [
            "informar a rentabilidade do último ano como a esperada para o próximo",
            "garantir um retorno mínimo acima do CDI para manter o cliente confiante",
            "explicar que não há garantia de retorno e mostrar cenários possíveis",
            "recusar a pergunta, pois retornos futuros não podem ser discutidos"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-054",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Conflitos de interesses",
        nivel: "médio",
        contexto: "Um gerente, certificado CPA, está no último dia do mês e precisa de mais uma venda de um fundo de ações para bater a meta de captação da agência. Uma cliente de perfil conservador, que quer aplicar R$ 30 mil, chega para atendimento. O fundo em questão não se encaixa no perfil dela.",
        enunciado: "A conduta correta do gerente é:",
        alternativas: [
            "recomendar o fundo e registrar que a cliente pediu o produto",
            "recomendar o fundo, desde que o valor aplicado seja pequeno",
            "recomendar o fundo e ajustar o perfil da cliente para permitir a venda",
            "recomendar só produtos adequados, mesmo sem bater a meta"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-055",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Segregação de funções",
        nivel: "médio",
        contexto: "Em uma pequena instituição financeira, por falta de pessoal, o mesmo funcionário aprova operações de crédito, registra os contratos no sistema e confere os próprios lançamentos no fim do dia. Durante uma revisão interna, o profissional da área de controles, certificado CPA, analisa esse processo.",
        enunciado: "O profissional de controles, certificado CPA, deve apontar que:",
        alternativas: [
            "a concentração é positiva, pois torna o processo mais rápido e barato",
            "falta segregação de funções, o que aumenta o risco de erros e fraudes",
            "não há problema, desde que a pessoa tenha certificação profissional",
            "falta segregação, mas isso só importa em instituições de grande porte"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-056",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "médio",
        contexto: "Em uma manhã de alta volatilidade na bolsa, uma falha no sistema de uma corretora impede que as ordens de compra e venda de clientes sejam executadas durante quase todo o pregão. Muitos clientes reclamam de prejuízos. O profissional de riscos, certificado CPA, precisa classificar o evento no relatório interno.",
        enunciado: "O profissional, certificado CPA, deve classificar esse evento como risco:",
        alternativas: [
            "regulatório, ligado ao descumprimento de normas dos órgãos",
            "legal, ligado a contratos mal elaborados ou ações judiciais",
            "operacional, ligado a falhas de sistemas, processos ou pessoas",
            "de imagem, ligado apenas à reputação da corretora no mercado"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-057",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Adequação de produtos",
        nivel: "difícil",
        contexto: "Leonardo, 35 anos, é gerente de TI, tem perfil arrojado e investe em ações há anos. Ele tem R$ 100 mil disponíveis e pretende usar o valor para quitar o financiamento do apartamento daqui a um ano. Pede ao assessor, certificado CPA, para aplicar tudo em ações, já que seu perfil permite.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "apesar do perfil arrojado, o prazo curto do objetivo pede produtos de baixa oscilação",
            "o perfil arrojado permite ações, e o prazo do objetivo não influencia a recomendação",
            "o perfil arrojado exige ações, pois produtos de baixo risco são inadequados para ele",
            "apesar do prazo curto, ações são adequadas, pois tendem a subir em um ano"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-058",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Monitoramento do suitability",
        nivel: "difícil",
        contexto: "Dona Célia, 60 anos, é cliente do banco há décadas e respondeu o questionário de perfil há quatro anos. Após receber a venda de um terreno, ela pede ao gerente, certificado CPA, para aplicar parte do valor em um fundo de crédito privado que viu em uma propaganda.",
        enunciado: "A conduta correta do gerente é:",
        alternativas: [
            "aplicar normalmente, pois o pedido partiu da própria cliente e dispensa qualquer registro",
            "atualizar o perfil antes de recomendar; se ela insistir, alertar e obter declaração expressa",
            "recusar a aplicação em definitivo, pois clientes com perfil desatualizado não podem investir",
            "aplicar e atualizar o perfil depois, desde que o valor seja inferior a R$ 10 mil"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-059",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "difícil",
        contexto: "Em um mesmo trimestre, uma instituição financeira enfrenta três problemas: um erro de sistema duplicou débitos em milhares de contas de clientes; um contrato de prestação de serviços mal redigido gerou várias ações judiciais; e o descumprimento de uma norma da CVM resultou em multa aplicada pelo regulador.",
        enunciado: "Na ordem apresentada, os riscos são:",
        alternativas: [
            "legal, operacional e regulatório",
            "regulatório, legal e operacional",
            "operacional, regulatório e legal",
            "operacional, legal e regulatório"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-060",
        curso: "cpa",
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Gerenciamento de expectativas",
        nivel: "difícil",
        contexto: "Marcelo, 52 anos, é empresário e reclama que o fundo onde aplicou R$ 300 mil rendeu 6% no ano, e não os 12% que o antigo gerente havia dito que ele ganharia. Ele ameaça transferir todos os recursos para outro banco. O novo gerente, certificado CPA, assume o atendimento.",
        enunciado: "A conduta mais adequada do novo gerente é:",
        alternativas: [
            "reconhecer que não se devia prometer retorno e rever a adequação do fundo",
            "garantir que o fundo vai compensar a diferença no próximo ano",
            "informar que a promessa foi do gerente anterior e que ele não responde por isso",
            "sugerir um fundo mais arriscado, para recuperar a rentabilidade prometida"
        ],
        correta: 0
    },

    // ===================== MÓDULO 3 — GRUPO: PLD/FT E CONHEÇA SEU CLIENTE (8) =====================

    {
        id: "CPA-M3-061",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "fácil",
        contexto: "Durante a análise diária de movimentações, a área de compliance de um banco identifica que um cliente recebeu várias transferências de pessoas desconhecidas e, em seguida, enviou todo o valor para contas no exterior. A operação é considerada atípica e pode indicar lavagem de dinheiro.",
        enunciado: "A comunicação deve ser feita ao:",
        alternativas: [
            "FGC",
            "Copom",
            "COAF",
            "CMN"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-062",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "fácil",
        contexto: "Em um treinamento sobre prevenção à lavagem de dinheiro, a instrutora explica que o processo costuma ocorrer em etapas. Ela descreve o caso de um criminoso que faz vários depósitos em espécie, provenientes do tráfico, em contas bancárias diferentes. Nesse momento, os recursos ilícitos entram pela primeira vez no sistema financeiro.",
        enunciado: "Essa etapa é a:",
        alternativas: [
            "Colocação",
            "Ocultação",
            "Integração",
            "Compensação"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-063",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "médio",
        contexto: "Um gerente, certificado CPA, percebe que um cliente antigo, com quem tem boa relação, fez uma série de operações incompatíveis com o seu histórico. A área de compliance confirma que a operação será comunicada às autoridades. Por consideração ao cliente, o gerente pensa em avisá-lo sobre a comunicação.",
        enunciado: "O gerente deve saber que:",
        alternativas: [
            "a comunicação só pode ser feita após autorização do cliente",
            "a comunicação deve ser feita sem dar ciência ao cliente",
            "o cliente deve ser avisado antes, para apresentar sua defesa",
            "a comunicação é dispensada se o cliente justificar a operação"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-064",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Abordagem baseada em risco",
        nivel: "médio",
        contexto: "Uma instituição financeira revisa sua política de prevenção à lavagem de dinheiro. A partir da mudança, passa a aplicar controles mais rigorosos a clientes e produtos considerados de maior risco, como pessoas politicamente expostas e operações em espécie, e controles mais simples aos de menor risco.",
        enunciado: "O profissional, certificado CPA, deve reconhecer essa prática como:",
        alternativas: [
            "tratamento discriminatório, proibido pelas normas de prevenção à lavagem",
            "padronização de controles, que exige o mesmo tratamento a todos",
            "terceirização da prevenção, que transfere o risco ao cliente",
            "abordagem baseada em risco, que ajusta os controles ao risco"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-065",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Conheça seu Cliente",
        nivel: "médio",
        contexto: "Sr. Osvaldo, 49 anos, é cliente do banco há 12 anos e informou, na abertura da conta, renda mensal de R$ 4.000,00. O cadastro nunca foi atualizado. Nos últimos três meses, ele passou a movimentar valores muito acima da renda informada. A gerente, certificada CPA, analisa o caso.",
        enunciado: "A gerente deve considerar que:",
        alternativas: [
            "o cadastro desatualizado impede avaliar a compatibilidade das operações",
            "o cadastro não importa, pois as operações já foram autorizadas pelo sistema",
            "a renda antiga vale até o cliente pedir a atualização por conta própria",
            "o cadastro só precisa ser atualizado quando o cliente pedir crédito"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-066",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Conheça seu Cliente",
        nivel: "médio",
        contexto: "Diego, 24 anos, acabou de ser contratado como gerente de relacionamento e acha que o procedimento Conheça seu Cliente é só burocracia que atrasa a abertura de contas. No café, comenta isso com uma colega mais experiente, certificada CPA, e pergunta por que o procedimento é considerado tão importante.",
        enunciado: "O colega deve explicar que o procedimento:",
        alternativas: [
            "serve apenas para oferecer produtos com maior rentabilidade ao cliente",
            "é uma formalidade exigida só na abertura da conta, sem outras funções",
            "protege a instituição e o profissional ao revelar operações incompatíveis",
            "transfere ao cliente toda a responsabilidade por operações suspeitas"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-067",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "difícil",
        contexto: "Um cliente com renda mensal declarada de R$ 5.000,00, que trabalha como vendedor, passa a fazer vários depósitos em espécie de R$ 9.000,00, em dias seguidos e em agências diferentes, sempre abaixo de valores que chamam atenção. O gerente, certificado CPA, percebe o padrão ao revisar os extratos.",
        enunciado: "A conduta correta do gerente é:",
        alternativas: [
            "aceitar os depósitos, pois cada um está abaixo dos valores que exigem comunicação",
            "pedir ao cliente que concentre os valores em um único depósito maior",
            "avisar o cliente de que o padrão foi notado e sugerir que justifique a origem",
            "tratar como indício de fracionamento e reportar ao COAF, sem avisar o cliente"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-068",
        curso: "cpa",
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "difícil",
        contexto: "Uma gerente, certificada CPA, atende uma conta empresarial que responde por boa parte da captação da agência. Ela notou sinais claros de lavagem de dinheiro nas operações do cliente, como transferências fracionadas e depósitos sem origem, mas não comunicou nada para não perder a conta.",
        enunciado: "A gerente deve saber que:",
        alternativas: [
            "a responsabilidade é só da instituição, e a gerente não pode ser punida",
            "a omissão pode gerar punição administrativa e até criminal para ela e o banco",
            "a omissão é permitida quando o cliente é antigo e de grande porte",
            "só haveria punição se a lavagem fosse comprovada pela Justiça"
        ],
        correta: 1
    },

    // ===================== MÓDULO 3 — GRUPO: CRIMES E ILÍCITOS DE MERCADO (8) =====================

    {
        id: "CPA-M3-069",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "fácil",
        contexto: "O diretor financeiro de uma empresa de capital aberto participa das negociações para a compra de um concorrente. Dias antes de a aquisição ser anunciada ao mercado, ele compra um grande lote de ações da própria empresa, usando essa informação, e lucra com a alta após a divulgação.",
        enunciado: "Esse crime é o de:",
        alternativas: [
            "Uso indevido de informação privilegiada",
            "Manipulação do mercado",
            "Exercício irregular de profissão",
            "Emissão imprópria"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-070",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "fácil",
        contexto: "Um grupo de investidores se organiza em aplicativos de mensagens e passa a espalhar boatos falsos sobre problemas financeiros de uma empresa listada na bolsa. Com a queda das ações provocada pelos boatos, o grupo compra os papéis a preço baixo e lucra quando o mercado percebe que as notícias eram falsas.",
        enunciado: "Essa conduta caracteriza:",
        alternativas: [
            "Uso de informação privilegiada",
            "Manipulação do mercado",
            "Prática não equitativa",
            "Exercício irregular de profissão"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-071",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "médio",
        contexto: "Um influenciador com 500 mil seguidores, sem registro na CVM, passa a cobrar uma assinatura mensal para enviar recomendações de compra e venda de ações pelas redes sociais, apresentando-se como analista. Um cliente pergunta ao profissional, certificado CPA, se pode confiar nas dicas.",
        enunciado: "O profissional, certificado CPA, deve reconhecer a conduta como:",
        alternativas: [
            "atividade livre, pois recomendações nas redes sociais não são reguladas",
            "prática permitida, desde que a pessoa tenha certificação ANBIMA",
            "infração leve, punida apenas com advertência da ANBIMA",
            "exercício irregular de atividade regulada, sujeito a punição"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-072",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "médio",
        contexto: "Um motorista de aplicativo leva dois executivos para o aeroporto e os ouve falando sobre uma fusão entre duas empresas, ainda não divulgada ao mercado. No dia seguinte, compra ações de uma das empresas. Ao comentar o caso com um amigo, afirma que só diretores podem cometer o crime de informação privilegiada.",
        enunciado: "O profissional, certificado CPA, deve explicar que:",
        alternativas: [
            "qualquer pessoa que use informação relevante não divulgada pode responder",
            "apenas administradores e diretores da empresa podem responder pelo crime",
            "o crime só existe se a pessoa trabalhar em instituição financeira",
            "o uso é permitido quando a informação foi obtida por acaso"
        ],
        correta: 0
    },

    {
        id: "CPA-M3-073",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "médio",
        contexto: "Um operador de uma corretora percebe que, sempre que recebe grandes ordens de compra de clientes institucionais, o preço das ações sobe logo depois da execução. Ele passa a executar ordens para a própria conta antes de executar as dos clientes, aproveitando o movimento de preço que elas vão causar.",
        enunciado: "Pela Resolução CVM 62, essa conduta é uma:",
        alternativas: [
            "manipulação de preços, que exige a divulgação de boatos ao mercado",
            "criação de condições artificiais, que depende de negociar com a mesma pessoa",
            "prática não equitativa, que coloca o cliente em desvantagem indevida",
            "prática permitida, desde que as ordens do cliente sejam executadas no mesmo dia"
        ],
        correta: 2
    },

    {
        id: "CPA-M3-074",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "médio",
        contexto: "Durante uma reunião, um profissional da área comercial comenta que leu a Resolução CVM 62 e que uma conduta que um colega adotou não aparece descrita no texto. Ele pergunta ao colega de compliance, certificado CPA, se só as condutas listadas expressamente na norma podem ser punidas.",
        enunciado: "O colega deve explicar que:",
        alternativas: [
            "a norma tem lista fechada, e só as condutas descritas nela podem ser punidas",
            "a norma se aplica só a administradores de fundos, e não a outros profissionais",
            "a norma trata apenas de crimes, e não de infrações administrativas",
            "a norma tem tipologia aberta, e condutas com os mesmos efeitos podem ser punidas"
        ],
        correta: 3
    },

    {
        id: "CPA-M3-075",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "difícil",
        contexto: "Dois investidores do mesmo grupo econômico passam a comprar e vender ações de uma pequena empresa entre si, várias vezes ao dia, sem mudança real de titularidade. As operações fazem o papel aparecer entre os mais negociados, dando a impressão ao mercado de que tem grande liquidez.",
        enunciado: "A conduta caracteriza:",
        alternativas: [
            "prática não equitativa, pois prejudica diretamente um cliente",
            "criação de condições artificiais de demanda, oferta ou preço",
            "uso indevido de informação privilegiada, pois os dois são do mesmo grupo",
            "operação legítima, pois as negociações foram registradas na bolsa"
        ],
        correta: 1
    },

    {
        id: "CPA-M3-076",
        curso: "cpa",
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "difícil",
        contexto: "Um analista de um banco de investimentos soube, por trabalhar no caso, de uma aquisição ainda não divulgada. Em um almoço de família, contou a novidade ao cunhado, que comprou ações da empresa no dia seguinte. O cunhado acredita que não cometeu crime, pois não trabalha no banco nem tem vínculo com a empresa.",
        enunciado: "O profissional de compliance, certificado CPA, deve explicar que:",
        alternativas: [
            "apenas o analista pode responder, pois o cunhado não tem vínculo com o banco",
            "apenas o cunhado pode responder, pois foi ele quem comprou as ações",
            "ambos podem responder, pois o crime alcança quem repassa e quem usa a informação",
            "nenhum dos dois comete crime, pois o lucro não foi dividido entre eles"
        ],
        correta: 2
    },

    // ===================== MÓDULO 4 — GRUPO: ESG (6) =====================

    {
        id: "CPA-M4-001",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "fácil",
        contexto: "Marina, 34 anos, engenheira ambiental em uma empresa de saneamento, já formou sua reserva de emergência e agora quer montar uma carteira de longo prazo. No aplicativo do banco, encontra alguns fundos que dizem seguir critérios ESG e outros que mencionam uma \"análise ASG\". Na conversa com o gerente, certificado CPA, ela diz que imaginou se tratar de metodologias diferentes e pergunta o que cada sigla representa.",
        enunciado: "Diante da dúvida de Marina sobre os fundos que citam ESG e os que citam análise ASG, o que o gerente deve explicar sobre as duas siglas?",
        alternativas: [
            "ASG é a tradução de ESG, e as letras correspondem aos pilares ambiental, social e gestão de riscos",
            "ASG é a tradução de ESG, e ambas se referem aos pilares ambiental, social e de governança",
            "ESG se refere aos pilares ambiental, social e de governança, enquanto ASG trata apenas do pilar ambiental",
            "ESG e ASG se referem aos pilares econômico, social e de governança, com nomes que variam conforme o país"
        ],
        correta: 1
    },

    {
        id: "CPA-M4-002",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "médio",
        contexto: "Seu Armando, 58 anos, empresário do setor de transportes, tem perfil moderado e patrimônio financeiro de R$ 2 milhões. Ao receber a sugestão de alocar 10% da carteira em um fundo de ações que integra critérios ESG, ele recusa: diz que esses fundos são uma \"doação disfarçada\", em que o investidor aceita ganhar menos para apoiar causas sociais, e que prefere gestores que olham apenas para os números das empresas.",
        enunciado: "Considerando a visão de Seu Armando sobre os fundos ESG, como o assessor, certificado CPA, deve explicar o papel da integração ESG na análise de investimentos?",
        alternativas: [
            "substitui a análise financeira tradicional por critérios socioambientais, priorizando o impacto gerado em vez do retorno",
            "consiste em excluir automaticamente da carteira setores poluentes, como o de transportes, independentemente do preço das ações",
            "elimina o risco reputacional da carteira, já que empresas bem avaliadas em ESG não são afetadas por crises de imagem",
            "complementa a análise financeira com fatores que podem afetar risco e retorno, como passivos ambientais e falhas de governança"
        ],
        correta: 3
    },

    {
        id: "CPA-M4-003",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Produtos ESG",
        nivel: "médio",
        contexto: "Paula, 46 anos, cliente de perfil moderado que já investe em CDBs e LCAs, recebe a oferta de uma debênture emitida por uma empresa de energia eólica. A escritura determina que todo o valor captado seja aplicado na construção de novos parques eólicos e que a empresa publique relatórios anuais sobre o uso dos recursos, verificados por uma consultoria independente. A remuneração do título não muda em função do cumprimento de metas ambientais.",
        enunciado: "Considerando a destinação obrigatória dos recursos e a forma de remuneração descritas na escritura, como a debênture oferecida a Paula deve ser classificada?",
        alternativas: [
            "título verde, pois a destinação dos recursos está vinculada a projetos com benefício ambiental",
            "título vinculado à sustentabilidade, pois a empresa precisa comprovar o cumprimento de metas ambientais",
            "título social, pois a geração de energia limpa beneficia diretamente a população do entorno",
            "título de infraestrutura comum, pois debêntures de energia não podem receber classificação ambiental"
        ],
        correta: 0
    },

    {
        id: "CPA-M4-004",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Regulação ESG",
        nivel: "médio",
        contexto: "Ricardo, 41 anos, médico, quer que parte dos seus investimentos esteja alinhada aos seus valores. Na plataforma, encontra dois fundos de ações com taxas parecidas: o primeiro tem o sufixo \"IS\" no nome; o segundo não usa sufixo, mas informa no material de divulgação que \"integra questões ASG\" ao processo de análise. Ele pergunta ao assessor, certificado CPA, se a diferença entre os dois é apenas de nomenclatura.",
        enunciado: "De acordo com as regras de autorregulação da ANBIMA, o que diferencia o fundo com sufixo IS do fundo que apenas informa integrar questões ASG?",
        alternativas: [
            "os dois fundos podem usar o sufixo IS, pois basta considerar critérios ASG em alguma etapa do processo de gestão",
            "o sufixo IS é reservado a fundos que investem exclusivamente em empresas do setor de energia renovável",
            "o fundo IS tem objetivo de investimento sustentável e precisa cumprir exigências específicas de transparência para usar o sufixo",
            "o fundo que integra questões ASG segue exigências mais rigorosas que o fundo IS, por adotar uma política mais abrangente"
        ],
        correta: 2
    },

    {
        id: "CPA-M4-005",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Produtos ESG",
        nivel: "difícil",
        contexto: "Uma companhia de papel e celulose emitiu debêntures com a seguinte cláusula: caso não reduza em 30% suas emissões de gases de efeito estufa até 2030, a taxa paga aos investidores aumenta 0,25 ponto percentual ao ano. A escritura não impõe restrição ao uso dos recursos, que serão usados para refinanciar dívidas antigas. Rogério, 52 anos, investidor qualificado, afirma ao assessor que se trata de um título verde, já que o setor trabalha com florestas plantadas e há uma meta ambiental envolvida.",
        enunciado: "Considerando a cláusula de ajuste da taxa e a ausência de restrição ao uso dos recursos, como o assessor, certificado CPA, deve classificar a debênture?",
        alternativas: [
            "verde, pois a existência de meta ambiental na escritura basta para essa classificação, independentemente do uso dos recursos",
            "verde, pois empresas do setor de florestas plantadas têm seus títulos classificados dessa forma automaticamente",
            "social, pois o aumento da taxa em caso de descumprimento funciona como uma compensação aos investidores afetados",
            "vinculado à sustentabilidade, pois o custo da dívida depende do cumprimento de metas, e não da destinação dos recursos"
        ],
        correta: 3
    },

    {
        id: "CPA-M4-006",
        curso: "cpa",
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "difícil",
        contexto: "Um fundo de ações divulga em anúncios que é \"100% sustentável\" e usa imagens de florestas em todo o material. Ao ler a lâmina, Carla, 29 anos, percebe que 35% da carteira está em empresas com histórico recente de acidentes ambientais graves, e o regulamento não menciona critérios de exclusão, ações de engajamento ou metas socioambientais. Questionado, o gestor afirma que a sustentabilidade faz parte da \"filosofia da casa\".",
        enunciado: "Considerando a comunicação do fundo e a composição real da carteira, qual prática o gerente, certificado CPA, deve apontar a Carla?",
        alternativas: [
            "engajamento acionário, pois o gestor mantém empresas com problemas na carteira para influenciar suas práticas",
            "greenwashing, pois a comunicação atribui ao fundo uma sustentabilidade que não se comprova em sua política de investimento",
            "integração ESG, pois a filosofia declarada pela gestora é suficiente para classificar o fundo como sustentável",
            "investimento de impacto, pois o fundo busca gerar benefício ambiental ao financiar empresas que precisam melhorar"
        ],
        correta: 1
    },

    // ===================== MÓDULO 4 — GRUPO: DEFI, TOKENIZAÇÃO E CRIPTOATIVOS (7) =====================

    {
        id: "CPA-M4-007",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "fácil",
        contexto: "Lucas, 27 anos, programador de uma empresa de jogos, já tem parte do patrimônio em bitcoin e ethereum. Ele costuma transferir recursos entre plataformas de criptoativos e reclama que, nos dias de forte oscilação, perde dinheiro apenas no intervalo entre enviar e receber os valores. Ele pede ao assessor uma alternativa dentro do próprio universo cripto para fazer essas transferências.",
        enunciado: "Considerando que Lucas quer evitar perdas com a oscilação durante as transferências, qual tipo de criptoativo atende melhor a essa necessidade?",
        alternativas: [
            "stablecoin, que busca manter paridade com um ativo de referência, como o dólar",
            "utility token, que dá acesso a um serviço e mantém valor fixo em reais",
            "security token, que representa um investimento e tem valor garantido pelo emissor",
            "NFT, que representa um ativo único e, por isso, não sofre com a volatilidade do mercado"
        ],
        correta: 0
    },

    {
        id: "CPA-M4-008",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "fácil",
        contexto: "Marina, 34 anos, é artista digital. Ela registrou em blockchain uma ilustração criada ao longo de seis meses, com um certificado que comprova autoria e propriedade. Esse registro é único e não pode ser trocado por outro equivalente, como acontece com uma moeda. Colecionadores de três países já fizeram lances pela obra, pagos em criptomoedas.",
        enunciado: "Considerando as características do registro feito por Marina em blockchain, como esse ativo deve ser classificado?",
        alternativas: [
            "stablecoin, pois o registro em blockchain garante a estabilidade do valor da obra",
            "payment token, pois pode ser usado pelos colecionadores como meio de pagamento",
            "NFT, pois é um token não fungível que representa a propriedade de um item único",
            "security token, pois a obra pode se valorizar e gerar ganho para quem a comprar"
        ],
        correta: 2
    },

    {
        id: "CPA-M4-009",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "DeFi",
        nivel: "médio",
        contexto: "Felipe, 31 anos, analista de dados de perfil arrojado, encontrou em um fórum uma plataforma de finanças descentralizadas que paga 18% ao ano a quem deposita stablecoins em um pool de empréstimos. As operações são executadas por contratos inteligentes, sem intermediário. Ele argumenta com o assessor, certificado CPA, que, como o código é público e a stablecoin acompanha o dólar, o risco seria semelhante ao de um CDB.",
        enunciado: "Por que a comparação feita por Felipe entre a plataforma de finanças descentralizadas e um CDB é inadequada?",
        alternativas: [
            "o risco de crédito é eliminado pelos contratos inteligentes, restando apenas o risco cambial da stablecoin",
            "os depósitos contam com a cobertura do FGC, mas não há a liquidez diária oferecida pelos bancos",
            "o código público impede falhas de programação, mas a rentabilidade não é garantida como no CDB",
            "há risco de falhas no código, de perda de paridade da stablecoin e ausência de garantia como a do FGC"
        ],
        correta: 3
    },

    {
        id: "CPA-M4-010",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Tokenização",
        nivel: "médio",
        contexto: "Uma incorporadora de São Paulo pretende dividir um prédio comercial em milhares de frações digitais registradas em blockchain. Cada fração dá direito a parte dos aluguéis pagos pelos inquilinos e pode ser revendida em uma plataforma. Seu Aurélio, 57 anos, perfil moderado, acredita que, por ser digital, o produto fica fora do alcance dos reguladores e pergunta à gerente, certificada CPA, como ele é classificado.",
        enunciado: "Considerando os direitos que cada fração digital oferece ao investidor, como a gerente deve classificar o produto e qual regulador pode alcançá-lo?",
        alternativas: [
            "um utility token, pois dá acesso ao uso do imóvel e, por isso, é supervisionado pelo Banco Central",
            "um security token, pois representa um investimento com expectativa de retorno e pode ser regulado pela CVM",
            "um NFT, pois cada fração é registrada individualmente e, assim, não se sujeita às regras de valores mobiliários",
            "um payment token, pois os aluguéis são distribuídos em criptomoeda e o controle cabe à Receita Federal"
        ],
        correta: 1
    },

    {
        id: "CPA-M4-011",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "médio",
        contexto: "Dona Célia, 55 anos, dona de uma loja de roupas, investe em ações por meio de uma corretora e quer ter uma pequena exposição a criptoativos depois de ouvir o filho falar sobre o assunto. Ela tem receio de guardar senhas e chaves de carteiras digitais e prefere algo que possa acompanhar no mesmo extrato em que vê suas ações. Ela pergunta ao assessor, certificado CPA, qual alternativa atende a essas preferências.",
        enunciado: "Considerando as preferências de Dona Célia, qual alternativa o assessor deve indicar, com a característica corretamente descrita?",
        alternativas: [
            "comprar criptoativos diretamente em uma exchange, pois as corretoras de ações assumem a custódia das chaves",
            "investir em um COE atrelado ao bitcoin, negociado em bolsa e isento de IR em vendas de até R$ 20 mil por mês",
            "investir em um ETF de criptoativos, negociado em bolsa como uma ação e sem necessidade de guardar chaves",
            "investir em um ETF de criptoativos, negociado em bolsa e isento de IR em vendas de até R$ 20 mil por mês"
        ],
        correta: 2
    },

    {
        id: "CPA-M4-012",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "DeFi",
        nivel: "médio",
        contexto: "Um grupo de investidores criou uma organização sem diretoria tradicional: as propostas sobre o uso do caixa comum são votadas pelos detentores de tokens, e o resultado é executado automaticamente por contratos inteligentes. O peso de cada voto depende da quantidade de tokens do participante. Um cliente acha a ideia parecida com uma cooperativa e pergunta ao assessor, certificado CPA, que estrutura é essa.",
        enunciado: "Considerando a forma como as decisões são tomadas e executadas, que estrutura o assessor deve identificar para o cliente?",
        alternativas: [
            "DAO, organização autônoma descentralizada, em que a governança é exercida pelos detentores de tokens",
            "cooperativa digital, em que cada associado tem direito a um voto, independentemente da quantidade de tokens",
            "sociedade anônima tokenizada, cujas decisões são tomadas por um conselho eleito pelos acionistas",
            "fintech de crédito, cujas decisões dependem de autorização prévia do Banco Central"
        ],
        correta: 0
    },

    {
        id: "CPA-M4-013",
        curso: "cpa",
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Drex",
        nivel: "difícil",
        contexto: "Sr. Ronaldo, 45 anos, empresário e entusiasta de tecnologia, mantém parte do patrimônio em bitcoin. Em reunião, diz ao gerente, certificado CPA, que pretende vender parte dos bitcoins para comprar Drex, pois, na visão dele, trata-se de uma criptomoeda com respaldo do governo, com menor risco e grande potencial de valorização. Ele também acredita que o Drex vai substituir o Pix nas transferências do dia a dia.",
        enunciado: "Considerando as expectativas de Sr. Ronaldo sobre valorização e sobre o Pix, o que o gerente deve explicar a respeito do Drex?",
        alternativas: [
            "é uma criptomoeda emitida pelo Tesouro Nacional, com cotação livre, e vai substituir o Pix nas transferências de varejo",
            "é uma iniciativa do Banco Central ligada ao real em formato digital, com valor equivalente ao real, e não substitui o Pix",
            "é uma stablecoin emitida pelos grandes bancos e lastreada em dólar, com valorização atrelada ao câmbio",
            "é uma moeda digital do Banco Central com valor equivalente ao real, que vai substituir o Pix e o dinheiro em espécie"
        ],
        correta: 1
    },

    // ===================== MÓDULO 4 — GRUPO: OPEN FINANCE, INVESTMENT E INSURANCE (3) =====================

    {
        id: "CPA-M4-014",
        curso: "cpa",
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Finance",
        nivel: "fácil",
        contexto: "Paulo, 38 anos, professor, tem conta em dois bancos, uma aplicação em CDB e um seguro de carro. Ao baixar um aplicativo de gestão financeira, recebe um pedido para autorizar, por prazo determinado, o acesso aos dados de conta, investimentos e seguros mantidos em outras instituições. O aplicativo promete usar essas informações para oferecer crédito com taxas menores.",
        enunciado: "O compartilhamento de dados autorizado por Paulo no aplicativo de gestão financeira ocorre no âmbito de qual sistema?",
        alternativas: [
            "Sistema de Informações de Crédito (SCR), que permite a consulta livre de dados de qualquer cliente",
            "sandbox regulatório, que autoriza empresas a testar produtos usando dados de clientes",
            "Cadastro Positivo, que compartilha automaticamente dados de investimentos e seguros",
            "Open Finance, que permite o compartilhamento de dados mediante consentimento do cliente"
        ],
        correta: 3
    },

    {
        id: "CPA-M4-015",
        curso: "cpa",
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Investment",
        nivel: "médio",
        contexto: "Juliana, 42 anos, gerente de projetos, tem aplicações em um banco tradicional, em um banco digital e em uma corretora. Ela quer acompanhar tudo em um único aplicativo e, se encontrar condições melhores, transferir parte das aplicações entre as instituições. Um colega disse a ela que o Open Investment faz isso automaticamente e ainda obriga os bancos a cobrirem a melhor taxa do mercado.",
        enunciado: "Considerando o que o colega disse a Juliana, o que a assessora, certificada CPA, deve esclarecer sobre o funcionamento do Open Investment?",
        alternativas: [
            "reúne os dados automaticamente, sem necessidade de consentimento, mas não obriga as instituições a igualar taxas",
            "depende do consentimento da cliente para compartilhar dados e pode facilitar a portabilidade, sem obrigar a igualar taxas",
            "depende do consentimento da cliente e obriga as instituições a igualar a melhor taxa oferecida no mercado",
            "abrange apenas títulos públicos, pois somente eles são registrados no Sistema Selic"
        ],
        correta: 1
    },

    {
        id: "CPA-M4-016",
        curso: "cpa",
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Insurance",
        nivel: "difícil",
        contexto: "Sr. Valdemar, 50 anos, comerciante, ouviu que o Open Insurance permite que qualquer seguradora consulte livremente seus dados e que o sistema é conduzido pelo Banco Central, junto com o Open Finance. Com medo de ter as informações expostas, decidiu não renovar o seguro residencial, que vence na próxima semana. O corretor, certificado CPA, precisa esclarecer essas afirmações antes que o cliente fique sem cobertura.",
        enunciado: "Para corrigir as duas crenças de Sr. Valdemar sobre o Open Insurance, o que o corretor, certificado CPA, deve explicar?",
        alternativas: [
            "depende do consentimento do cliente e é regulado pelo Banco Central, como parte do Open Finance",
            "dispensa o consentimento do cliente, mas é regulado pela SUSEP, que protege os dados compartilhados",
            "depende do consentimento do cliente e é regulado pela SUSEP, no âmbito do mercado de seguros privados",
            "depende do consentimento do cliente e é regulado pela PREVIC, por envolver também planos de previdência"
        ],
        correta: 2
    },

    // ===================== MÓDULO 4 — GRUPO: IA, FINTECHS E MEIOS DE PAGAMENTO (4) =====================

    {
        id: "CPA-M4-017",
        curso: "cpa",
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Fintechs",
        nivel: "fácil",
        contexto: "Uma startup de Florianópolis desenvolveu um serviço que usa dados de consumo para conceder microcrédito a trabalhadores informais. Como o modelo ainda não se encaixa nas regras existentes, a empresa foi autorizada a operá-lo com um número limitado de clientes reais, por prazo determinado e com regras mais flexíveis, sob acompanhamento próximo do regulador.",
        enunciado: "Como se chama o ambiente em que a startup foi admitida para testar seu serviço de microcrédito?",
        alternativas: [
            "Open Finance, que permite a oferta de crédito sem autorização do regulador",
            "mercado de balcão organizado, que registra operações de crédito entre instituições",
            "sandbox regulatório, ambiente experimental supervisionado para testar inovações",
            "Sistema Financeiro da Habitação, voltado a linhas de crédito com juros subsidiados"
        ],
        correta: 2
    },

    {
        id: "CPA-M4-018",
        curso: "cpa",
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Inteligência artificial",
        nivel: "médio",
        contexto: "Um banco utiliza duas ferramentas de inteligência artificial. A primeira analisa o histórico de milhares de contratos para estimar a probabilidade de inadimplência de cada novo pedido de crédito. A segunda redige respostas personalizadas no chat e resume extratos em linguagem simples. Um estagiário afirma ao gerente, certificado CPA, que as duas são do mesmo tipo, pois ambas \"aprendem com dados\".",
        enunciado: "Diante da afirmação do estagiário, como o gerente deve diferenciar as duas ferramentas de inteligência artificial usadas pelo banco?",
        alternativas: [
            "a primeira é IA preditiva, que estima resultados a partir de padrões, e a segunda é IA generativa, que produz conteúdo novo",
            "a primeira é IA generativa, que produz conteúdo novo, e a segunda é IA preditiva, que estima resultados a partir de padrões",
            "as duas são IA preditiva, pois ambas usam dados históricos, e a distinção entre tipos não se aplica ao setor financeiro",
            "as duas são IA generativa, pois ambas produzem respostas, e a IA preditiva se limita a cálculos estatísticos sem aprendizado"
        ],
        correta: 0
    },

    {
        id: "CPA-M4-019",
        curso: "cpa",
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Inteligência artificial",
        nivel: "médio",
        contexto: "Uma corretora com 200 mil clientes quer ampliar o uso de um assistente virtual com IA, que atende 24 horas por dia, tira dúvidas sobre produtos e já começou a sugerir aplicações durante as conversas. Para reduzir custos, a diretoria propõe retirar a revisão humana das respostas. A profissional de compliance, certificada CPA, é consultada antes da decisão.",
        enunciado: "Diante da proposta da diretoria de retirar a revisão humana, qual recomendação a profissional de compliance deve fazer?",
        alternativas: [
            "retirar a revisão humana, desde que o cliente aceite um termo que isente a corretora por respostas incorretas",
            "manter a supervisão humana, proteger os dados pessoais e garantir que as sugestões respeitem o perfil do cliente",
            "permitir sugestões de produtos apenas para clientes que já tenham feito aplicações pela plataforma",
            "manter a revisão humana somente nas respostas sobre renda variável, por serem os produtos de maior risco"
        ],
        correta: 1
    },

    {
        id: "CPA-M4-020",
        curso: "cpa",
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Meios de pagamento",
        nivel: "difícil",
        contexto: "Uma lojista de 36 anos recebe por cartão de crédito, boleto e Pix. Ela reclama ao gerente, certificado CPA, que o dinheiro do cartão parcelado demora a cair, que o boleto leva até dois dias úteis para compensar e que as taxas pesam no caixa. Ela acredita que o Pix funciona como o boleto, apenas com outro nome, e que o cliente pode desfazer o pagamento quando quiser.",
        enunciado: "Considerando as crenças da lojista, o que o gerente deve explicar sobre o Pix em comparação com o cartão e o boleto?",
        alternativas: [
            "é liquidado em até um dia útil, como o boleto, e o pagador pode pedir a devolução por arrependimento pelo MED",
            "é liquidado em segundos, mas funciona apenas em dias úteis e tem custo maior que o do cartão para o recebedor",
            "é liquidado em segundos, funciona 24 horas por dia e o pagador pode cancelar a transação em até 30 dias",
            "é liquidado em segundos, funciona 24 horas por dia e a devolução pelo MED se limita a casos como fraude ou falha"
        ],
        correta: 3
    }

];