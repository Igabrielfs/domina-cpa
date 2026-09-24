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

    

    /// ===================== GRUPO: INSTITUIÇÕES FINANCEIRAS (15) =====================

    {
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        nivel: "fácil",
        contexto: "Um grupo de pequenos agricultores de uma mesma região quer criar uma instituição financeira própria. Eles desejam ser, ao mesmo tempo, donos e clientes do negócio, decidir os rumos em assembleia e dividir entre si os resultados positivos do ano.",
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
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        nivel: "fácil",
        contexto: "Em um trabalho sobre bancos públicos, um estudante precisa diferenciar a Caixa Econômica Federal de outras instituições financeiras ligadas ao governo federal.",
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
        grupo: "Instituições financeiras",
        tema: "Fintechs",
        nivel: "fácil",
        contexto: "Uma startup quer conceder empréstimos pela internet usando apenas o capital dos sócios, sem captar recursos do público. Os fundadores pesquisam qual autorização devem pedir ao Banco Central.",
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
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "médio",
        contexto: "Rodrigo percebe que o mesmo banco onde tem conta corrente também oferece financiamento imobiliário, leasing de veículos e fundos de investimento. Ele pergunta ao gerente, certificado CPA, como uma única instituição pode atuar em tantas áreas.",
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
        grupo: "Instituições financeiras",
        tema: "Cooperativas de crédito",
        nivel: "médio",
        contexto: "Na primeira assembleia da cooperativa, Marcelo, que tem muitas cotas-parte e movimenta pouco sua conta, pergunta à gerente, certificada CPA, como serão divididas as sobras do ano e quanto vale o voto dele.",
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
        grupo: "Instituições financeiras",
        tema: "Caixa e instituições de pagamento",
        nivel: "médio",
        contexto: "Lucas recebe o salário em uma conta de pagamento de um aplicativo autorizado pelo Banco Central como instituição de pagamento. Preocupado com notícias sobre a empresa, ele pergunta a uma profissional certificada CPA se o dinheiro estaria protegido em caso de quebra.",
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
        grupo: "Instituições financeiras",
        tema: "Financiamento e leasing",
        nivel: "médio",
        contexto: "O dono de uma transportadora precisa de um novo caminhão e compara duas propostas: um financiamento e um contrato de leasing. Ele pede ao gerente, certificado CPA, que explique a diferença entre as duas quanto à propriedade do veículo.",
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
        grupo: "Instituições financeiras",
        tema: "Fomento e microcrédito",
        nivel: "médio",
        contexto: "O prefeito de uma cidade do interior procura um consultor certificado CPA para saber se a agência de fomento do estado poderia abrir contas correntes para receber a folha de pagamento dos servidores municipais.",
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
        grupo: "Instituições financeiras",
        tema: "Consórcio",
        nivel: "médio",
        contexto: "Aline quer trocar de carro, mas não tem pressa em receber o veículo. Ela pede a um profissional certificado CPA que explique como funciona o consórcio oferecido pela administradora.",
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
        grupo: "Instituições financeiras",
        tema: "Bancos",
        nivel: "difícil",
        contexto: "Em um treinamento, o instrutor explica a criação de moeda escritural: um cliente deposita R$ 1.000,00 à vista, o banco recolhe 20% como depósito compulsório e empresta o restante, que é depositado em outro banco, e assim sucessivamente.",
        enunciado: "Considerando que os bancos emprestam todo o valor livre, o total máximo de depósitos gerado no sistema a partir do depósito inicial é de:",
        alternativas: [
            "R$ 800,00, pois o banco só pode emprestar o valor que sobra após o recolhimento do compulsório",
            "R$ 4.000,00, pois o efeito multiplicador se aplica apenas aos valores emprestados, sem o depósito inicial",
            "R$ 5.000,00, pois cada empréstimo volta como novo depósito, até o limite dado por 1 dividido por 0,20",
            "R$ 1.200,00, pois o valor recolhido como compulsório é somado ao depósito inicial do cliente"
        ],
        correta: 2
    },

    // ===================== GRUPO: MERCADO DE CAPITAIS (11) =====================

    {
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        nivel: "fácil",
        contexto: "No primeiro dia de estágio em uma distribuidora, Lívia ouve várias vezes que a instituição precisa seguir os códigos da ANBIMA. Ela pergunta ao supervisor que tipo de entidade é essa.",
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
        grupo: "Mercado de capitais",
        tema: "Apimec, Planejar e Ancord",
        nivel: "fácil",
        contexto: "Em uma feira de carreiras do mercado financeiro, três entidades apresentam suas certificações profissionais: Apimec, Planejar e Ancord. Um estudante tenta associar cada entidade ao profissional que ela certifica.",
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
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        nivel: "fácil",
        contexto: "Em uma oferta pública de ações, o banco coordenador se compromete a comprar todas as ações que não forem vendidas aos investidores, garantindo à empresa a captação total prevista.",
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
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Gustavo abriu conta em uma corretora e comprou suas primeiras ações pelo home broker. Como quem executou a ordem foi a corretora, ele pergunta ao assessor, certificado CPA, qual é o papel da B3 na operação.",
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
        grupo: "Mercado de capitais",
        tema: "Corretoras e distribuidoras",
        nivel: "médio",
        contexto: "Mariana quer começar a investir em ações e encontra uma corretora e uma distribuidora de títulos e valores mobiliários. Ela pergunta a uma profissional certificada CPA se precisa escolher obrigatoriamente uma corretora para operar na bolsa.",
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
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Rodrigo quer investir em uma empresa e participar das decisões tomadas nas assembleias, mas também gosta de receber dividendos. Ao ver que a empresa tem ações terminadas em 3 e em 4, ele pede orientação ao gerente, certificado CPA.",
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
        grupo: "Mercado de capitais",
        tema: "ANBIMA",
        nivel: "médio",
        contexto: "Carlos foi promovido a gerente de investimentos em um banco associado à ANBIMA. Antes de começar a recomendar produtos aos clientes, ele é informado de que precisa obter uma certificação e pergunta ao superior por que isso é exigido.",
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
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "médio",
        contexto: "Joaquim comprou ações de uma varejista pelo home broker e comenta, animado, com o assessor, certificado CPA, que agora está ajudando a empresa a abrir novas lojas com o dinheiro que investiu.",
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
        grupo: "Mercado de capitais",
        tema: "B3",
        nivel: "difícil",
        contexto: "Camila tinha 100 ações cotadas a R$ 40,00 quando a empresa anunciou um desdobramento em que cada ação passaria a valer duas. Ela diz ao assessor, certificado CPA, que ficou mais rica, pois ganhou ações de graça.",
        enunciado: "Desconsiderando outras oscilações do mercado, o assessor deve explicar que Camila:",
        alternativas: [
            "terá 200 ações a R$ 40,00, dobrando o patrimônio para R$ 8.000,00, pois recebeu novas ações de graça",
            "terá 50 ações a cerca de R$ 80,00, mantendo os R$ 4.000,00, pois o desdobramento agrupa as ações",
            "terá 200 ações a cerca de R$ 20,00, e o patrimônio cai, pois a empresa perde valor com a operação",
            "terá 200 ações a cerca de R$ 20,00, mantendo os R$ 4.000,00, pois o desdobramento só divide as ações"
        ],
        correta: 3
    },

    // ===================== GRUPO: SEGUROS E PREVIDÊNCIA (11) =====================

    {
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        nivel: "fácil",
        contexto: "Ao contratar um seguro residencial, Paula lê o contrato e encontra termos como prêmio, sinistro e indenização. Ela quer entender o significado de cada um.",
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
        grupo: "Seguros e previdência",
        tema: "Seguradoras e resseguradoras",
        nivel: "fácil",
        contexto: "Uma seguradora de médio porte fechou contrato para segurar uma grande usina hidrelétrica. Em caso de perda total, a indenização superaria todo o patrimônio da seguradora, que decide transferir parte desse risco a outra instituição.",
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
        grupo: "Seguros e previdência",
        tema: "Corretoras de seguro",
        nivel: "fácil",
        contexto: "Ao contratar o seguro do carro, Patrícia foi atendida por um corretor, que comparou propostas de várias seguradoras e explicou as coberturas. Ela quer entender o papel desse profissional.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Mariana é assalariada, contribui para o INSS e faz a declaração completa do Imposto de Renda. Ela pede ao gerente, certificado CPA, uma indicação de plano de previdência que traga benefício fiscal enquanto contribui.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Seu Jorge é aposentado, isento de Imposto de Renda e faz a declaração simplificada. Ele quer um plano de previdência para organizar a sucessão e pede orientação à gerente, certificada CPA.",
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
        grupo: "Seguros e previdência",
        tema: "Capitalização",
        nivel: "médio",
        contexto: "Seu Antônio recebeu uma oferta de título de capitalização com sorteios mensais. O vendedor disse que o produto seria como uma poupança com chance de prêmio. Desconfiado, ele pede a opinião de uma profissional certificada CPA.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "Insatisfeita com as taxas de seu PGBL, Beatriz quer transferir os recursos para outra instituição sem pagar Imposto de Renda. Ela pede ao gerente, certificado CPA, que explique as regras da portabilidade.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "médio",
        contexto: "A empresa onde Ricardo trabalha oferece um plano de previdência administrado por uma fundação própria. Ao mesmo tempo, o banco dele oferece um plano de previdência aberto. Ele pede a uma profissional certificada CPA que explique a diferença entre as entidades.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Helena aplicou R$ 100.000,00 em um VGBL com tabela regressiva. Sete anos depois, resgatou todo o saldo, de R$ 160.000,00, e pergunta ao gerente, certificado CPA, quanto pagou de Imposto de Renda.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Marcelo contribuiu com R$ 80.000,00 para um PGBL ao longo de nove anos, sempre deduzindo os aportes na declaração completa, e optou pela tabela regressiva. Hoje o saldo é de R$ 120.000,00, e ele vai resgatar tudo.",
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
        grupo: "Seguros e previdência",
        tema: "Previdência complementar",
        nivel: "difícil",
        contexto: "Juliana faz a declaração completa, tem renda bruta tributável de R$ 200.000,00 por ano e já aporta R$ 24.000,00 anuais em um PGBL. Ela quer investir mais R$ 20.000,00 por ano em previdência e pede orientação ao gerente, certificado CPA.",
        enunciado: "A orientação mais adequada para o valor adicional é:",
        alternativas: [
            "aplicar no VGBL, pois ela já atingiu o limite de dedução de 12%, e no VGBL o IR incide só sobre os rendimentos",
            "aplicar no PGBL, pois o limite de dedução de 12% é calculado sobre o saldo total acumulado no plano de previdência",
            "aplicar no PGBL, pois todo aporte nesse plano reduz o IR a pagar de quem faz a declaração completa",
            "aplicar no VGBL, pois nele as contribuições também são dedutíveis até 12% da renda bruta tributável"
        ],
        correta: 0
    },

    // ===================== GRUPO: GARANTIAS E INFRAESTRUTURA (14) =====================

    {
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "fácil",
        contexto: "Ao consultar seus investimentos, Tiago vê que suas ações estão registradas em seu nome em uma entidade responsável pela guarda dos ativos e pelo controle da titularidade.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "fácil",
        contexto: "Uma empresa faz uma operação de derivativos no mercado de balcão e precisa formalizar o registro dessa operação para dar transparência e segurança jurídica ao negócio.",
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
        nivel: "fácil",
        contexto: "Ao comprar um título do Tesouro Direto, um investidor descobre que a custódia e a liquidação dos títulos públicos federais são feitas por um sistema específico.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "fácil",
        contexto: "A quebra de um grande banco começa a gerar desconfiança em outras instituições, que passam a enfrentar saques em massa, mesmo estando saudáveis.",
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
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "médio",
        contexto: "Uma cliente quer diversificar, mas só aceita produtos com garantia do Fundo Garantidor de Créditos. O gerente, certificado CPA, apresenta um fundo DI, uma debênture, um título do Tesouro Direto e uma LCA.",
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
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "médio",
        contexto: "Otávio é associado de uma cooperativa de crédito e mantém R$ 100.000,00 em um depósito a prazo. Preocupado com a saúde da instituição, ele pergunta ao gerente, certificado CPA, se esse valor tem alguma garantia.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "médio",
        contexto: "Em uma madrugada de domingo, Bianca envia um Pix e o valor cai na conta do destinatário em segundos. Curiosa, ela pergunta a um profissional certificado CPA como isso é possível fora do horário bancário.",
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
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        nivel: "médio",
        contexto: "Uma empresa precisa transferir um valor alto a um fornecedor e quer que o recurso esteja disponível no mesmo instante. O gerente, certificado CPA, explica que a operação será liquidada no STR, sistema operado pelo Banco Central.",
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
        grupo: "Garantias e infraestrutura",
        tema: "SPB e clearing houses",
        nivel: "médio",
        contexto: "Dois investidores fecham um negócio na bolsa: um vende ações e o outro compra. O comprador pergunta ao assessor, certificado CPA, o que acontece se o vendedor não entregar as ações no prazo.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Infraestrutura do mercado",
        nivel: "médio",
        contexto: "Um investidor teve prejuízo por causa de uma falha operacional da sua corretora ao executar uma ordem na B3. Ele pergunta a uma profissional certificada CPA onde pode pedir o ressarcimento.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "médio",
        contexto: "Dois bancos têm carteiras de mesmo valor total. O primeiro concentra empréstimos de alto risco, e o segundo, títulos públicos federais. Um analista, certificado CPA, explica a um cliente como isso afeta o capital exigido de cada um.",
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
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "difícil",
        contexto: "Roberto tem R$ 200.000,00 em CDB e R$ 150.000,00 em LCI no Banco A, R$ 100.000,00 em um fundo DI administrado pelo Banco A e R$ 80.000,00 em poupança no Banco B, que pertence a outro conglomerado. Os dois bancos sofrem liquidação extrajudicial.",
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
        grupo: "Garantias e infraestrutura",
        tema: "FGC e FGCoop",
        nivel: "difícil",
        contexto: "Laura tem R$ 250.000,00 em CDB em cada um de cinco bancos de conglomerados diferentes. Em um intervalo de três anos, os cinco bancos sofrem liquidação extrajudicial, e ela pergunta ao gerente, certificado CPA, quanto vai receber do FGC.",
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
        grupo: "Garantias e infraestrutura",
        tema: "Estabilidade financeira",
        nivel: "difícil",
        contexto: "Um analista, certificado CPA, avalia a solidez de um banco para um cliente que pretende aplicar valores acima da cobertura do FGC. O banco tem Patrimônio de Referência de R$ 110 milhões e ativos ponderados pelo risco de R$ 1 bilhão.",
        enunciado: "O Índice de Basileia desse banco é de:",
        alternativas: [
            "aproximadamente 9,1%, pois o índice divide os ativos ponderados pelo risco pelo Patrimônio de Referência",
            "aproximadamente 1,1%, pois o índice divide o Patrimônio de Referência pelo total de depósitos do banco",
            "aproximadamente 110%, pois o índice compara o Patrimônio de Referência com o capital mínimo exigido",
            "aproximadamente 11%, pois o índice divide o Patrimônio de Referência pelos ativos ponderados pelo risco"
        ],
        correta: 3
    },
    
    // ===================== GRUPO: ECONOMIA (18) =====================

    {
        grupo: "Economia",
        tema: "Fluxo circular de renda",
        nivel: "fácil",
        contexto: "Em uma aula de introdução à economia, o professor desenha um diagrama com dois grupos, famílias e empresas, e setas mostrando o que circula entre eles.",
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
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        nivel: "fácil",
        contexto: "No fim do dia, um banco percebe que ficou com menos recursos do que precisava em caixa, enquanto outro ficou com sobra. Os dois fecham uma operação de um dia para equilibrar suas posições.",
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
        tema: "PIB e inflação",
        nivel: "fácil",
        contexto: "Ao estudar sobre inflação, Paulo descobre que existem vários índices de preços no Brasil, mas apenas um é usado como referência no sistema de metas de inflação.",
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
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "fácil",
        contexto: "Um investidor que acompanha o noticiário econômico quer saber quem define a meta da taxa Selic e com que frequência essa decisão é tomada.",
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
        grupo: "Economia",
        tema: "Mercado financeiro e subdivisões",
        nivel: "médio",
        contexto: "Rafael, dono de uma pequena fábrica de móveis, vai importar máquinas da Alemanha e pagar o fornecedor em euros. O assessor, certificado CPA, explica em qual segmento do mercado financeiro essa etapa da operação acontece.",
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
        grupo: "Economia",
        tema: "Política fiscal",
        nivel: "médio",
        contexto: "Com a economia em recessão, o governo anuncia a redução de impostos sobre a produção industrial e o aumento dos investimentos em obras de infraestrutura. Um cliente pede ao gerente, certificado CPA, que explique a medida.",
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
        grupo: "Economia",
        tema: "Lei de Responsabilidade Fiscal",
        nivel: "médio",
        contexto: "Um prefeito recém-eleito é alertado de que as despesas com servidores já estão próximas do limite legal. Ele pede a um consultor, certificado CPA, que explique a lei que estabelece esse controle.",
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
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "médio",
        contexto: "Com a inflação acima da meta por vários meses, o Copom eleva a taxa Selic em 1 ponto percentual. Uma cliente pergunta ao gerente, certificado CPA, qual é o efeito esperado da decisão.",
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
        grupo: "Economia",
        tema: "Política monetária e Selic",
        nivel: "médio",
        contexto: "Um investidor lê na ata do Copom que a taxa Selic foi elevada de forma agressiva e pergunta ao assessor, certificado CPA, como isso tende a afetar o câmbio, mantidos os demais fatores constantes.",
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
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        nivel: "médio",
        contexto: "A taxa de juros negociada entre os bancos começa a ficar abaixo da meta do Copom, e o Banco Central passa a vender títulos públicos no mercado. Um estagiário pergunta ao analista, certificado CPA, o que isso significa.",
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
        grupo: "Economia",
        tema: "Instrumentos de política monetária",
        nivel: "médio",
        contexto: "Um banco sólido enfrenta uma falta momentânea de caixa por causa de saques acima do esperado e recorre a um empréstimo de curtíssimo prazo diretamente com o Banco Central. Um cliente pergunta ao gerente, certificado CPA, como isso funciona.",
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
        grupo: "Economia",
        tema: "Política cambial",
        nivel: "médio",
        contexto: "Um turista estrangeiro pergunta a um profissional certificado CPA, em uma casa de câmbio, como é definido o preço do dólar no Brasil e se o governo controla essa cotação.",
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
        grupo: "Economia",
        tema: "Política cambial",
        nivel: "difícil",
        contexto: "Diante de uma alta abrupta do dólar que pressiona os preços, o Banco Central decide ofertar contratos de swap cambial tradicional para atender à demanda por proteção das empresas. Um cliente pergunta ao assessor, certificado CPA, o que exatamente o BC está fazendo.",
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
        grupo: "Economia",
        tema: "PIB e inflação",
        nivel: "difícil",
        contexto: "Em uma apresentação, um economista informa os dados do último ano, em bilhões de reais: consumo das famílias de 600, investimentos de 200, gastos do governo de 250, exportações de 150 e importações de 100.",
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
        grupo: "Economia",
        tema: "PIB e inflação",
        nivel: "difícil",
        contexto: "Ao longo de um ano, Márcia manteve seus recursos em uma aplicação que rendeu 6%, enquanto o IPCA do período foi de 7%. Ela comenta com o gerente, certificado CPA, que perdeu exatamente 1% de poder de compra.",
        enunciado: "Para corrigir o cálculo de Márcia, o gerente deve explicar que o rendimento real foi de aproximadamente:",
        alternativas: [
            "−1,00%, pois basta subtrair a inflação do rendimento nominal para encontrar o ganho real",
            "−0,93%, pois divide-se 1,06 por 1,07 e subtrai-se 1, o que indica perda de poder de compra",
            "+13,00%, pois a inflação do período se soma ao rendimento nominal obtido na aplicação",
            "+6,00%, pois a inflação não afeta o rendimento das aplicações de renda fixa"
        ],
        correta: 1
    },

    // ===================== GRUPO: MATEMÁTICA FINANCEIRA (13) =====================

    {
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "fácil",
        contexto: "Antes de avaliar novos projetos, o diretor financeiro de uma empresa define a taxa de retorno mínima que qualquer investimento precisa oferecer para ser considerado.",
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
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "fácil",
        contexto: "Ao analisar a rentabilidade de um CDB atrelado ao DI, um cliente percebe que a taxa considera apenas os dias em que há negociação no mercado.",
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
        nivel: "fácil",
        contexto: "Um empreendedor investiu R$ 50.000,00 em um novo equipamento e, ao fim do período analisado, obteve um lucro de R$ 10.000,00 com essa aplicação.",
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
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Uma empresa avalia um projeto de expansão. Ao descontar os fluxos de caixa futuros pela taxa mínima de atratividade, o analista, certificado CPA, encontra um Valor Presente Líquido positivo.",
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
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        nivel: "médio",
        contexto: "Ao simular um financiamento imobiliário pelo Sistema de Amortização Constante (SAC), Bruno percebe que as parcelas mudam ao longo do contrato e pede explicação ao gerente, certificado CPA.",
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
        grupo: "Matemática financeira",
        tema: "Sistemas de amortização",
        nivel: "médio",
        contexto: "Ana financiou um carro pela Tabela Price e percebeu que a parcela é a mesma do começo ao fim. Ela pergunta à gerente, certificada CPA, se a composição da parcela também é sempre igual.",
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
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Um investidor pega um empréstimo para ampliar o valor aplicado em ações, apostando que os preços vão subir. O assessor, certificado CPA, explica o efeito dessa estratégia.",
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
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Uma empresa financia suas atividades com recursos dos sócios e com empréstimos bancários. O diretor financeiro pede ao consultor, certificado CPA, um indicador que represente o custo total desses recursos.",
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
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "médio",
        contexto: "Uma empresa investiu R$ 60.000,00 em uma máquina que gera economia de R$ 15.000,00 por ano. O dono pergunta ao consultor, certificado CPA, em quanto tempo recupera o valor investido.",
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
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "difícil",
        contexto: "Carlos comenta com um amigo que seu CDB rendeu 12% no ano, com inflação de 5%, e que seu ganho real foi de exatamente 7%, pois basta subtrair a inflação. O amigo discorda e pede ao gerente, certificado CPA, que faça a conta correta.",
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
        grupo: "Matemática financeira",
        tema: "Taxas de juros",
        nivel: "difícil",
        contexto: "Um cliente compara duas aplicações: a primeira rende 1% ao mês em juros compostos, e a segunda, 12% ao ano. Ele conclui que as duas são iguais, pois 12 meses de 1% somam 12%. O assessor, certificado CPA, corrige o raciocínio.",
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
        grupo: "Matemática financeira",
        tema: "Análise de investimentos",
        nivel: "difícil",
        contexto: "Uma investidora quer comprar um título prefixado sem cupom, com valor de face de R$ 1.000,00 e vencimento em dois anos. A taxa exigida pelo mercado é de 10% ao ano. Ela pede à gerente, certificada CPA, quanto vai pagar hoje pelo título.",
        enunciado: "O preço unitário aproximado do título hoje é de:",
        alternativas: [
            "R$ 826,45, pois o valor de face é dividido por 1,10 elevado ao quadrado",
            "R$ 800,00, pois basta descontar 20% do valor de face, somando as taxas",
            "R$ 833,33, pois o valor de face é dividido por 1,20, a taxa dos dois anos",
            "R$ 1.000,00, pois o título é sempre comprado pelo valor de face"
        ],
        correta: 0
    },

    // ===================== GRUPO: INVESTIDORES E RISCOS (7) =====================

    {
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "fácil",
        contexto: "Um investidor comprou debêntures de uma empresa do varejo. Meses depois, a empresa anuncia dificuldades financeiras e atrasa o pagamento dos juros.",
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
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "fácil",
        contexto: "Rafael precisa vender com urgência as cotas de um fundo imobiliário pouco negociado, mas encontra poucos compradores e só consegue vender aceitando um preço bem abaixo do esperado.",
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
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        nivel: "médio",
        contexto: "Fernando tem R$ 1,5 milhão em aplicações financeiras e quer acessar um fundo restrito a determinado público. Ele pede orientação ao gerente, certificado CPA.",
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
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "médio",
        contexto: "Carla tem toda a carteira em ações de uma única empresa. O assessor, certificado CPA, sugere distribuir os recursos entre ações de empresas de setores diferentes.",
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
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "médio",
        contexto: "Em uma consultoria, o investidor pergunta ao profissional, certificado CPA, como montar uma carteira mais eficiente, com base na teoria de Markowitz.",
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
        grupo: "Investidores e riscos",
        tema: "Classificação de investidores",
        nivel: "difícil",
        contexto: "Um gerente, certificado CPA, atende três clientes que já assinaram declaração sobre seu patrimônio: Ana tem R$ 800 mil aplicados; Bruno, R$ 1,5 milhão; e Cláudia, R$ 12 milhões. Nenhum deles possui certificações profissionais.",
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
        grupo: "Investidores e riscos",
        tema: "Riscos",
        nivel: "difícil",
        contexto: "Sílvia tem um título prefixado com vencimento em cinco anos. Após uma alta forte e inesperada da Selic, ela vê no aplicativo que o título desvalorizou e pede à assessora, certificada CPA, que explique o que houve e o que fazer.",
        enunciado: "A assessora deve explicar que:",
        alternativas: [
            "a queda reflete o risco de crédito do Tesouro; mantido até o vencimento, o título pode não ser pago integralmente",
            "a queda reflete o risco de mercado pela marcação a mercado; mantido até o vencimento, o título paga a taxa contratada",
            "a queda reflete o risco de mercado pela marcação a mercado; mantido até o vencimento, o título paga a nova Selic",
            "a queda reflete o risco de liquidez do título; vendê-lo imediatamente é a única forma de evitar perda definitiva"
        ],
        correta: 1
    },

    // ===================== GRUPO: REGULAÇÃO E CONDUTA (9) =====================

    {
        grupo: "Regulação e conduta",
        tema: "Lei de Liberdade Econômica",
        nivel: "fácil",
        contexto: "Um pequeno empreendedor quer abrir uma atividade de baixo risco e descobre que, por causa de uma lei de 2019, não precisa de alvará prévio para começar a funcionar.",
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
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "fácil",
        contexto: "Ao abrir conta em um banco digital, Pedro recebe a proposta de compartilhar seu histórico financeiro do banco antigo para conseguir um limite de crédito melhor.",
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
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "médio",
        contexto: "Juliano tem um financiamento com juros altos. Outro banco oferece assumir a dívida com taxa menor, e ele pergunta ao gerente, certificado CPA, como funciona a transferência.",
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
        grupo: "Regulação e conduta",
        tema: "Portabilidade e open finance",
        nivel: "médio",
        contexto: "Helena quer trocar de corretora, mas não quer vender suas ações e títulos para transferir os recursos. Ela pede orientação a um profissional certificado CPA.",
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
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Antes de recomendar investimentos a uma nova cliente, a gerente, certificada CPA, aplica um questionário para definir o perfil dela.",
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
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Uma instituição atualiza periodicamente o cadastro dos clientes, verificando dados pessoais, renda, patrimônio e a origem dos recursos aplicados. Um novo funcionário pergunta ao gerente, certificado CPA, qual é o objetivo desse processo.",
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
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "médio",
        contexto: "Uma distribuidora prepara um material para divulgar um fundo que teve ótimo desempenho nos últimos anos. O profissional, certificado CPA, revisa o texto antes da publicação.",
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
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "difícil",
        contexto: "Um cliente de perfil conservador insiste em aplicar parte relevante do patrimônio em um fundo de ações. Ele pede ao gerente, certificado CPA, que faça a aplicação sem mais perguntas.",
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
        grupo: "Regulação e conduta",
        tema: "Código ANBIMA de Distribuição",
        nivel: "difícil",
        contexto: "Um gerente, certificado CPA, pode recomendar dois fundos igualmente adequados ao perfil de uma cliente. O fundo A gera remuneração maior para o banco. A cliente pergunta se a instituição ganha algo pela recomendação.",
        enunciado: "A conduta correta do gerente é:",
        alternativas: [
            "recomendar o fundo A sem mencionar a remuneração, pois essa informação é protegida por sigilo legal",
            "informar a remuneração apenas se o fundo recomendado for isento de Imposto de Renda para a cliente",
            "informar com transparência a remuneração do banco e basear a recomendação na adequação ao perfil",
            "recusar a pergunta, pois a remuneração do distribuidor só pode ser revelada à CVM, se ela solicitar"
        ],
        correta: 2
    }

];