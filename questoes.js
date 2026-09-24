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
    },

    // ===================== MÓDULO 2 — GRUPO: TÍTULOS PÚBLICOS (18) =====================

    {
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Renda fixa e renda variável",
        nivel: "fácil",
        contexto: "Ao escolher uma aplicação, Rita quer saber desde o início como o seu dinheiro será remunerado, seja por uma taxa definida ou por um indexador conhecido, como a Selic ou o IPCA.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "fácil",
        contexto: "Um investidor quer um título público pós-fixado para a reserva de emergência, com a menor oscilação de preço possível em caso de venda antecipada.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "fácil",
        contexto: "Cláudio quer um título público que proteja seu dinheiro da inflação no longo prazo. Ele não precisa de renda periódica e prefere receber tudo de uma vez no vencimento.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "fácil",
        contexto: "Seu Ivo, de 45 anos, quer investir no Tesouro Direto para, a partir dos 65, receber 240 pagamentos mensais corrigidos pela inflação.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Durante uma aula para clientes, um participante pergunta ao gerente por que o governo emite títulos públicos e se o Banco Central também pode emiti-los.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "médio",
        contexto: "Marta ouviu que os títulos públicos são negociados no sistema Selic e pergunta ao gerente se ela, como pessoa física, pode comprar diretamente nesse sistema.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "médio",
        contexto: "Diego vai investir no Tesouro Direto por uma corretora que não cobra taxa própria. Ele pede ao assessor que explique quais custos obrigatórios existem.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Paula quer montar sua reserva de emergência no Tesouro Direto e pergunta à gerente qual título é mais adequado e por quê.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Um investidor acredita que a taxa de juros vai cair nos próximos anos e quer aproveitar esse cenário para travar uma boa rentabilidade. Ele pede orientação ao assessor.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "médio",
        contexto: "Gilberto quer um título público com rentabilidade prefixada, mas que pague renda a cada seis meses para complementar o orçamento. Ele pede orientação ao gerente.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "médio",
        contexto: "Carla quer juntar dinheiro para a faculdade da filha, que hoje tem 5 anos, e pergunta à gerente como funciona o Tesouro Educa+.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Riscos dos títulos públicos",
        nivel: "médio",
        contexto: "Seu Mário diz ao gerente que títulos públicos não têm nenhum risco, porque são garantidos pelo governo e ainda contam com o FGC.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Riscos dos títulos públicos",
        nivel: "médio",
        contexto: "Rogério tem um Tesouro Prefixado e precisa do dinheiro antes do vencimento. Ele pergunta ao assessor se consegue resgatar e por qual valor.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Beatriz comprou um Tesouro Prefixado a 12% ao ano. Um ano depois, os juros de mercado caíram bastante, e ela vendeu o título antes do vencimento. Ela comenta com o gerente que achava que um prefixado só poderia render exatamente a taxa contratada.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Direto",
        nivel: "difícil",
        contexto: "Lucas tem R$ 50.000,00 no Tesouro Selic e R$ 50.000,00 no Tesouro Prefixado. A corretora não cobra taxa própria. Considere os valores estáveis ao longo do ano.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Um investidor compara dois títulos com o mesmo prazo: um Tesouro Prefixado que paga 11% ao ano e um Tesouro IPCA+ que paga IPCA mais 6% ao ano. Ele pede ao assessor a inflação que tornaria os dois equivalentes.",
        enunciado: "A inflação de equilíbrio entre os dois títulos é de aproximadamente:",
        alternativas: [
            "17,66%, pois a taxa do Prefixado é multiplicada pela taxa real do IPCA+",
            "4,72%, pois divide-se 1,11 por 1,06 e subtrai-se 1",
            "5,00%, pois basta subtrair a taxa real do IPCA+ da taxa do Prefixado",
            "6,00%, pois a inflação de equilíbrio é igual à taxa real do IPCA+"
        ],
        correta: 1
    },

    {
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Títulos públicos",
        nivel: "difícil",
        contexto: "Renato comprou um Tesouro Prefixado com Juros Semestrais e recebeu o primeiro cupom, de R$ 500,00, cinco meses depois da compra. Ele diz ao gerente que o Imposto de Renda só seria cobrado no vencimento do título.",
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
        modulo: 2,
        grupo: "Títulos públicos",
        tema: "Tesouro Renda+ e Educa+",
        nivel: "difícil",
        contexto: "Uma cliente tem três objetivos: montar uma reserva para imprevistos, pagar a faculdade do filho daqui a 12 anos e ter uma renda mensal na aposentadoria, daqui a 25 anos. Ela pede ao gerente um título do Tesouro para cada objetivo.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "fácil",
        contexto: "Seu Arlindo quer aplicar em um título de captação de uma instituição financeira que só pode ser adquirido por quem é associado a ela.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "fácil",
        contexto: "Uma cliente quer um título bancário de renda fixa isento de Imposto de Renda para pessoa física e com lastro em créditos para construção e compra de residências.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "fácil",
        contexto: "Ao analisar uma debênture, um investidor vê que ela recebeu nota AAA de uma agência de classificação de risco.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "fácil",
        contexto: "Um investidor quer entender quem emite os Certificados de Recebíveis Imobiliários (CRI) que encontrou na corretora.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "médio",
        contexto: "Laura tem um CDB e um RDB, ambos com vencimento em dois anos. Ela pergunta ao gerente se pode transferir um deles para o nome do irmão antes do vencimento.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "médio",
        contexto: "Marcelo aplicou R$ 80.000,00 em CDB de um banco de médio porte e pergunta ao gerente o que garante o pagamento do seu dinheiro.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "médio",
        contexto: "Um produtor rural pergunta ao gerente por que a LCA oferecida pelo banco rende menos que um CDB do mesmo prazo e se ela tem alguma garantia.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "médio",
        contexto: "Um investidor encontra a LCD, um título mais recente, e pergunta ao assessor quem a emite e qual é a sua finalidade.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "médio",
        contexto: "Ana quer aplicar em um CRA isento de IR e pergunta à assessora se o título tem a mesma proteção de uma LCA em caso de problema.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Debêntures",
        nivel: "médio",
        contexto: "Rodrigo quer comprar debêntures e pergunta ao assessor por que algumas são isentas de Imposto de Renda e outras não.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "médio",
        contexto: "Um cliente compara um CRI e uma debênture da mesma construtora e pergunta à gerente qual é a diferença de estrutura entre os dois.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "médio",
        contexto: "Duas debêntures de mesmo prazo pagam taxas diferentes: a de nota AA paga CDI + 1% ao ano, e a de nota BB paga CDI + 4% ao ano. O cliente pergunta ao assessor por que há essa diferença.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "médio",
        contexto: "Uma agência de classificação rebaixa a nota de crédito do Brasil. Um cliente pergunta ao gerente que efeito isso tende a ter sobre os títulos do país.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "difícil",
        contexto: "Um cliente vai aplicar por três anos e compara uma LCI que paga 90% do CDI com um CDB que paga 110% do CDI. Ele acha que a LCI é melhor por ser isenta de IR.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a LCI rende mais, pois 110% do CDI menos 22,5% de IR equivale a 85,25% do CDI líquido",
            "o CDB rende mais, pois 110% do CDI menos 15% de IR equivale a 93,5% do CDI líquido",
            "os dois rendem igual, pois a isenção compensa exatamente a diferença de 20 pontos",
            "a LCI rende mais, pois 110% do CDI menos 20% de IR equivale a 88% do CDI líquido"
        ],
        correta: 1
    },

    {
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "LCI, LCA e LCD",
        nivel: "difícil",
        contexto: "Uma cliente vai resgatar uma aplicação em cerca de 200 dias e tem um CDB que paga 100% do CDI. Ela pergunta ao gerente qual taxa mínima uma LCA de mesmo prazo precisaria pagar para render igual.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CRI e CRA",
        nivel: "difícil",
        contexto: "Roberto tem, no mesmo banco, R$ 150.000,00 em CDB e R$ 120.000,00 em LCA, além de R$ 100.000,00 em um CRI distribuído por esse banco. O banco sofre liquidação extrajudicial.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "Rating",
        nivel: "difícil",
        contexto: "Juliana tem uma debênture prefixada. Após a empresa ter o rating rebaixado, ela vê o preço do título cair e diz ao assessor que isso não faz sentido, pois a taxa contratada não mudou.",
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
        modulo: 2,
        grupo: "Renda fixa bancária e privada",
        tema: "CDB, RDB e RDC",
        nivel: "difícil",
        contexto: "Uma cliente quer aplicar R$ 30.000,00 isentos de IR, mas pode precisar do dinheiro a qualquer momento nos próximos meses. O gerente compara um CDB com liquidez diária e uma LCI com carência.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "fácil",
        contexto: "Dona Neusa guarda suas economias na caderneta de poupança e pergunta quais são as principais vantagens do produto para a pessoa física.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "fácil",
        contexto: "Um empresário pergunta qual taxa passou a ser usada, desde 2018, como referência nos novos financiamentos do BNDES, no lugar da TJLP.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Com a Selic em 10% ao ano, um cliente diz ao gerente que a poupança sempre rende 70% da Selic mais a TR.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Rafael depositou na poupança no dia 5 de março e precisa sacar o dinheiro no dia 3 de abril. Ele pergunta ao gerente se vai receber o rendimento do período.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "médio",
        contexto: "Em uma aula sobre o sistema financeiro, um aluno pergunta ao professor qual é a principal função econômica dos recursos depositados na poupança.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "médio",
        contexto: "Um cliente vê a TR em seu contrato de financiamento imobiliário e pergunta ao gerente o que é essa taxa e onde mais ela aparece.",
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
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "Poupança",
        nivel: "difícil",
        contexto: "Com a Selic em 7% ao ano e a TR zerada, Seu Paulo compara a poupança com um CDB que paga 100% do CDI por mais de dois anos. Considere o CDI igual à Selic. Ele acha que a poupança rende mais por ser isenta.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o CDB rende mais: cerca de 5,95% líquido, contra 4,9% ao ano da poupança",
            "a poupança rende mais: 4,9% ao ano, contra cerca de 4,55% líquido do CDB",
            "os dois rendem igual, pois a isenção compensa exatamente o IR do CDB",
            "a poupança rende mais: 6,17% ao ano, contra cerca de 5,95% líquido do CDB"
        ],
        correta: 0
    },

    {
        modulo: 2,
        grupo: "Poupança, TR e TLP",
        tema: "TR e TLP",
        nivel: "difícil",
        contexto: "Um empresário pergunta ao consultor por que o custo do seu financiamento do BNDES atrelado à TLP subiu após um período de inflação alta.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "fácil",
        contexto: "Um cliente pergunta a partir de quantos dias de aplicação deixa de pagar IOF no resgate de um CDB.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "fácil",
        contexto: "Uma investidora de um fundo de renda fixa percebe que o número de cotas diminuiu em dois meses do ano, mesmo sem ter feito resgates.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "fácil",
        contexto: "Um cliente quer saber qual é a menor alíquota de IR possível em um CDB e a partir de quando ela vale.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Sandra resgatou um CDB e perguntou ao gerente se precisa recolher o IR por conta própria e sobre qual valor ele incide.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Isenções",
        nivel: "médio",
        contexto: "Um investidor pessoa física quer montar uma carteira só com produtos isentos de IR e pede ao assessor uma lista de opções.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "médio",
        contexto: "Um cliente de um fundo de renda fixa de longo prazo pergunta ao gerente se o come-cotas é o imposto final sobre seus rendimentos.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "médio",
        contexto: "Pedro investe em um fundo de ações e em um fundo de renda fixa. Ele pergunta à assessora por que só um deles tem come-cotas.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Um cliente aplicou em um fundo classificado como de curto prazo e pergunta ao gerente se, com o tempo, a alíquota cairá para 15%.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "médio",
        contexto: "Camila resgatou um CDB com 10 dias de aplicação e ficou surpresa com o IOF. Ela pergunta à gerente sobre qual valor o imposto foi calculado.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "médio",
        contexto: "Um cliente pergunta ao assessor o que define se um fundo de renda fixa é tributado como de longo ou de curto prazo.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "IOF",
        nivel: "difícil",
        contexto: "Marta resgatou um CDB com 20 dias de aplicação. O rendimento bruto foi de R$ 300,00, e a alíquota de IOF para esse prazo é de 33%. Ela pede ao gerente o valor líquido do rendimento.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "difícil",
        contexto: "Lucas resgatou um CDB com 400 dias de aplicação e rendimento bruto de R$ 2.000,00. Ele diz ao gerente que pagou 15% de IR, pois ficou mais de um ano aplicado.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Come-cotas",
        nivel: "difícil",
        contexto: "Um fundo de renda fixa de longo prazo rendeu R$ 1.000,00 a um cliente no primeiro semestre, e houve come-cotas em maio. O cliente resgatou tudo após 200 dias, sem novos rendimentos depois disso.",
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
        modulo: 2,
        grupo: "Tributação de investimentos",
        tema: "Imposto de Renda",
        nivel: "difícil",
        contexto: "Débora manteve os recursos em um fundo de renda fixa de curto prazo por três anos e diz ao gerente que já tem direito à alíquota mínima de 15%.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "fácil",
        contexto: "Três amigos querem abrir uma empresa em que o capital seja dividido em ações, permitindo, no futuro, a entrada de muitos novos sócios.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Índices da bolsa",
        nivel: "fácil",
        contexto: "Um jornal informa que o principal indicador de desempenho da bolsa brasileira subiu 2% no dia.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "fácil",
        contexto: "Para financiar uma nova fábrica, uma empresa pode trazer novos sócios ou tomar recursos emprestados.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "fácil",
        contexto: "Um cliente quer um produto que combine renda fixa com uma estratégia atrelada ao desempenho de um índice, com opção de proteção do capital no vencimento.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Sociedades e financiamento",
        nivel: "médio",
        contexto: "Uma empresa familiar de capital fechado avalia listar suas ações na B3. O diretor pergunta à consultora o que muda ao se tornar uma companhia aberta.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Um investidor pergunta ao assessor qual é o papel do conselho de administração em uma companhia aberta.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Ao analisar uma empresa, Carla vê que apenas 5% das ações estão em circulação no mercado. Ela pergunta à assessora que impacto isso tem para quem investe.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Governança corporativa",
        nivel: "médio",
        contexto: "Um investidor quer priorizar empresas com o mais alto padrão de governança da B3 e pede orientação ao assessor.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "médio",
        contexto: "Uma empresa anuncia dividendos com data com no dia 10. Um cliente pergunta ao assessor até quando precisa ter as ações para receber o provento.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "médio",
        contexto: "Um acionista recebe a convocação para a Assembleia Geral Ordinária da empresa e pergunta ao gerente o que costuma ser decidido nela.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "médio",
        contexto: "Paulo vendeu R$ 15.000,00 em ações no mês, em operações comuns, com lucro de R$ 3.000,00. Ele pergunta à assessora se precisa pagar IR.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "médio",
        contexto: "Carlos fez operações de day trade e de swing trade no mesmo mês. Ele teve prejuízo no day trade e lucro no swing trade, e pergunta ao assessor se pode compensar um com o outro.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "médio",
        contexto: "Um cliente comprou um COE com capital protegido e pergunta à gerente se o produto tem algum risco e como é tributado.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Fernanda vendeu R$ 25.000,00 em ações no mês, em operações comuns, com lucro de R$ 3.000,00. Ela diz ao assessor que está isenta, pois o lucro foi bem menor que R$ 20 mil.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Em operações comuns, Ricardo teve prejuízo de R$ 2.000,00 em março. Em abril, vendeu R$ 40.000,00 em ações e teve lucro de R$ 5.000,00. Ele pergunta ao assessor quanto de IR deve pagar em abril.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Tributação de ações",
        nivel: "difícil",
        contexto: "Júlia teve lucro de R$ 1.000,00 em operações de day trade no mês, e a corretora reteve 1% desse lucro na fonte. Ela pergunta à assessora quanto ainda precisa recolher.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "COE",
        nivel: "difícil",
        contexto: "Mário comprou um COE com capital protegido e vencimento em três anos. Após um ano, quer resgatar e diz ao gerente que não corre risco de perda, pois o capital é protegido.",
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
        modulo: 2,
        grupo: "Renda variável e COE",
        tema: "Eventos corporativos",
        nivel: "difícil",
        contexto: "Uma ação cotada a R$ 30,00 terá dividendos de R$ 1,00 por ação, com data com no dia 10. André comprou as ações no dia 11 e diz ao assessor que aproveitou uma queda de preço para receber os dividendos.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Conceitos de fundos",
        nivel: "fácil",
        contexto: "Em uma aula sobre fundos, o professor explica que os recursos de vários investidores são reunidos para serem aplicados em conjunto, com o patrimônio dividido em cotas.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Cotas",
        nivel: "fácil",
        contexto: "Um investidor tem cotas de um fundo que não permite resgate antes do fim do prazo, mas cujas cotas podem ser vendidas a outro investidor na bolsa.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Prestadores de serviços",
        nivel: "fácil",
        contexto: "Pela Resolução CVM 175, dois prestadores são considerados essenciais para o funcionamento de um fundo.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Documentos dos fundos",
        nivel: "fácil",
        contexto: "Antes de aplicar, uma cliente quer um documento curto que resuma as principais informações do fundo, como objetivo, riscos, taxas e rentabilidade.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "fácil",
        contexto: "Um fundo cobra uma taxa adicional somente quando a sua rentabilidade supera um indicador de referência, como o CDI.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes e subclasses",
        nivel: "médio",
        contexto: "Um investidor pergunta ao assessor como um mesmo fundo pode oferecer opções com prazos de resgate e taxas diferentes sem mudar a estratégia de investimento.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Conceitos de fundos",
        nivel: "médio",
        contexto: "Um cliente teme perder o dinheiro aplicado em um fundo caso a administradora enfrente problemas financeiros. Ele pede à gerente uma explicação.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Responsabilidade limitada",
        nivel: "médio",
        contexto: "Uma cliente leu que alguns fundos preveem responsabilidade limitada dos cotistas e pergunta ao gerente o que isso significa.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Aplicação e resgate",
        nivel: "médio",
        contexto: "Um fundo tem cotização em D+30 e pagamento em D+31. Uma cliente pede o resgate e pergunta ao gerente qual cota será usada e quando recebe o dinheiro.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Documentos dos fundos",
        nivel: "médio",
        contexto: "Na primeira aplicação em um fundo, o gerente pede que o cliente assine um termo de adesão e ciência de risco. O cliente pergunta para que serve o documento.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Prestadores de serviços",
        nivel: "médio",
        contexto: "Um investidor pergunta ao assessor qual é a diferença entre o administrador e o gestor do fundo.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Assembleia de cotistas",
        nivel: "médio",
        contexto: "O gestor de um fundo quer aumentar a taxa de administração. Um cotista pergunta ao gerente se isso pode ser feito sem consultar os investidores.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Divulgação de informações",
        nivel: "médio",
        contexto: "O gestor de um fundo descobre que um dos principais emissores da carteira entrou em recuperação judicial, fato que pode afetar o valor das cotas.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes restritas, exclusivas e previdenciárias",
        nivel: "médio",
        contexto: "Um cliente de alto patrimônio, investidor profissional, quer um fundo feito só para ele. Ele pergunta ao gerente qual é a classe adequada.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Encargos dos fundos",
        nivel: "médio",
        contexto: "Um cotista percebe que o fundo paga auditoria, custódia e taxas de fiscalização, e pergunta ao assessor quem arca com essas despesas.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Distribuição de cotas",
        nivel: "médio",
        contexto: "Uma cliente aplica em um fundo por meio de uma plataforma de investimentos, na modalidade por conta e ordem. Ela pergunta ao assessor o que isso muda.",
        enunciado: "O assessor deve explicar que, nessa modalidade:",
        alternativas: [
            "o administrador mantém o cadastro dela, e a plataforma passa a ser a verdadeira dona das cotas aplicadas",
            "o distribuidor mantém o cadastro dela, e as cotas ficam registradas em nome do gestor do fundo",
            "o distribuidor mantém o cadastro dela, e o administrador registra a aplicação em nome da plataforma, em subconta que identifica a cliente",
            "o administrador mantém o cadastro dela, e a plataforma não tem nenhuma obrigação com a cliente"
        ],
        correta: 2
    },

    {
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "difícil",
        contexto: "Um fundo cobra taxa de performance de 20% sobre o que exceder o CDI. No ano, o fundo rendeu 14%, e o CDI, 10%. Um cotista com R$ 100.000,00 aplicados pergunta ao assessor quanto pagou de performance.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Aplicação e resgate",
        nivel: "difícil",
        contexto: "Um investidor aplicou R$ 18.000,00 em um fundo quando a cota valia R$ 1,25 e resgatou tudo quando a cota valia R$ 1,30. Desconsidere impostos e taxas.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Responsabilidade limitada",
        nivel: "difícil",
        contexto: "Uma classe de fundo com responsabilidade limitada fica com patrimônio líquido negativo após grandes perdas. Um cotista teme ser cobrado para cobrir o rombo e pergunta ao gerente.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Remuneração dos prestadores",
        nivel: "difícil",
        contexto: "Um cliente com R$ 200.000,00 em um fundo com taxa de administração de 1,5% ao ano diz ao gerente que nunca pagou essa taxa, pois não vê nenhuma cobrança no extrato.",
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
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Classes e subclasses",
        nivel: "difícil",
        contexto: "Uma classe de fundo tem duas subclasses: uma com resgate em D+1 e taxa de 1,2% ao ano e outra com resgate em D+30 e taxa de 0,8% ao ano. Um cliente que pode precisar do dinheiro a qualquer momento quer a menor taxa.",
        enunciado: "A orientação correta do gerente é:",
        alternativas: [
            "indicar a subclasse D+30, pois a carteira é diferente e tende a render mais que a D+1",
            "indicar a subclasse D+1, pois a carteira é a mesma, e ele precisa de liquidez",
            "indicar a subclasse D+30, pois a taxa menor compensa qualquer necessidade de liquidez",
            "indicar a subclasse D+1, pois a carteira é diferente e tem ativos com menos risco"
        ],
        correta: 1
    },

    {
        modulo: 2,
        grupo: "Fundos: estrutura e funcionamento",
        tema: "Cotas",
        nivel: "difícil",
        contexto: "Rita tem cotas de um fundo de cotas fechadas e precisa do dinheiro antes do fim do prazo. Ela pergunta ao assessor se pode pedir o resgate ao administrador.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "fácil",
        contexto: "Um exportador quer um fundo que se valorize quando o dólar sobe e que, por regra, mantenha ao menos 80% da carteira nesse fator de risco.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "fácil",
        contexto: "Um fundo imobiliário tem como principal ativo prédios comerciais alugados a empresas, recebendo os aluguéis mensalmente.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "fácil",
        contexto: "Um investidor quer um fundo negociado na bolsa, como uma ação, que busca replicar o desempenho de um índice.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "fácil",
        contexto: "Em vez de comprar títulos e ações diretamente, um fundo monta sua carteira aplicando em outros fundos de investimento.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIP",
        nivel: "fácil",
        contexto: "Um fundo compra participações em empresas de capital fechado e participa ativamente da gestão delas, buscando valorizá-las para vender no futuro.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Um cliente de perfil moderado quer um fundo com gestão flexível, capaz de combinar juros, ações, câmbio e outros mercados. Ele pede orientação ao assessor.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Uma cliente vê que um fundo é classificado como de ações e pergunta à gerente qual é a exposição mínima exigida a esse tipo de ativo.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Tipos de fundos",
        nivel: "médio",
        contexto: "Um fundo de renda fixa tem mais da metade da carteira em debêntures e outros títulos de empresas privadas. O cliente pergunta ao assessor o que isso indica.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIDC",
        nivel: "médio",
        contexto: "Um investidor avalia as cotas sênior de um FIDC e pergunta ao assessor qual é a diferença para as cotas subordinadas.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "médio",
        contexto: "Uma investidora pessoa física tem poucas cotas de um FII negociado na bolsa, com mais de 100 cotistas. Ela pergunta à assessora como são tributados os rendimentos mensais.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "médio",
        contexto: "Um cliente acha que FII é um investimento sem riscos, pois é lastreado em imóveis. Ele pede a opinião da gerente.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "médio",
        contexto: "Um investidor iniciante quer se expor ao Ibovespa com poucas operações e pede ao assessor as vantagens de usar um ETF.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira administrada",
        nivel: "médio",
        contexto: "Um cliente de alto patrimônio compara um fundo com uma carteira administrada e pergunta à gerente a principal diferença entre eles.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Fundos sustentáveis",
        nivel: "médio",
        contexto: "Um cliente quer investir em fundos com foco em sustentabilidade e vê dois tipos na plataforma: um com o sufixo IS e outro que apenas integra questões ESG. Ele pede orientação ao assessor.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira do fundo",
        nivel: "médio",
        contexto: "Uma cliente pergunta ao gerente por que um fundo de renda fixa pode ter muitos títulos públicos e poucos títulos de uma única empresa.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Classificação ANBIMA",
        nivel: "médio",
        contexto: "Um cliente vê que um fundo é classificado pela ANBIMA como Renda Fixa Duração Alta e pergunta à assessora o que essa informação indica.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "difícil",
        contexto: "Luísa recebeu R$ 800,00 de rendimentos de um FII no semestre e vendeu parte das cotas com lucro de R$ 2.000,00. Ela diz ao assessor que tudo é isento, por se tratar de FII.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FIDC",
        nivel: "difícil",
        contexto: "Um FIDC tem patrimônio de R$ 100 milhões, sendo R$ 80 milhões em cotas sênior e R$ 20 milhões em cotas subordinadas. A carteira sofre perda de R$ 15 milhões.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "ETF",
        nivel: "difícil",
        contexto: "Tiago vendeu R$ 15.000,00 em cotas de um ETF de ações no mês, com lucro de R$ 1.000,00. Ele diz ao assessor que está isento, pois as vendas ficaram abaixo de R$ 20 mil.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "FII",
        nivel: "difícil",
        contexto: "Um investidor passou a ter 12% das cotas de um FII e continua recebendo os rendimentos mensais. Ele acredita que os rendimentos seguem isentos, como para os demais cotistas.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a isenção é mantida, pois ela vale para qualquer pessoa física cotista de FII",
            "ao ter 10% ou mais das cotas, ele perde a isenção, e os rendimentos passam a pagar 20%",
            "ao ter 10% ou mais das cotas, ele perde a isenção, e os rendimentos passam a pagar 15%",
            "ao ter 10% ou mais das cotas, o ganho na venda fica isento, e os rendimentos também"
        ],
        correta: 1
    },

    {
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Carteira administrada",
        nivel: "difícil",
        contexto: "Um cliente compara um fundo de renda fixa de longo prazo e uma carteira administrada com títulos de renda fixa semelhantes. Ele pergunta à gerente se há diferença na tributação.",
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
        modulo: 2,
        grupo: "Fundos: tipos e carteiras",
        tema: "Classificação ANBIMA",
        nivel: "difícil",
        contexto: "Um cliente tem dois fundos de renda fixa: um Duração Baixa e um Duração Alta. Após uma alta inesperada dos juros, ele vê perdas diferentes e pergunta ao assessor o motivo.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Selo ANBIMA",
        nivel: "fácil",
        contexto: "Uma cliente vê o selo ANBIMA no material de um fundo e pergunta o que ele significa.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "fácil",
        contexto: "Uma gestora separa fisicamente e por sistemas a equipe que administra recursos de terceiros das demais áreas, para evitar conflitos de interesse.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "médio",
        contexto: "Um profissional revisa a lâmina de um fundo antes da divulgação e percebe que falta um aviso obrigatório sobre garantias.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "médio",
        contexto: "Uma distribuidora prepara dois documentos: um anúncio para redes sociais e um relatório com dados detalhados da carteira para investidores. O profissional precisa classificá-los.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "médio",
        contexto: "Um gestor percebe que poderia comprar para o fundo ativos de uma empresa ligada ao seu grupo, a um preço acima do mercado. Ele pede orientação ao profissional de compliance.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Princípios e controles",
        nivel: "médio",
        contexto: "Um funcionário da gestora comenta com um amigo quais ações o fundo vai comprar na próxima semana. O caso chega ao compliance, e um profissional analisa a conduta.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Selo ANBIMA",
        nivel: "difícil",
        contexto: "Um cliente diz ao gerente que escolheu um fundo por ter o selo ANBIMA, pois isso garante bons resultados e protege contra perdas.",
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
        modulo: 2,
        grupo: "Códigos ANBIMA e publicidade",
        tema: "Publicidade",
        nivel: "difícil",
        contexto: "Uma distribuidora vai divulgar a rentabilidade de um fundo e testa quatro versões de anúncio. O profissional precisa escolher a única que segue as regras.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Taxas na previdência",
        nivel: "fácil",
        contexto: "Um cliente percebe que, de cada contribuição feita ao plano de previdência, um percentual é descontado antes de ir para a reserva.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "fácil",
        contexto: "Ao se aposentar, Seu Nelson quer transformar a reserva do plano em renda mensal, sem o risco de ficar sem pagamentos caso viva mais do que o previsto.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "médio",
        contexto: "Uma cliente quer transformar a reserva da previdência em renda por 15 anos e pergunta ao gerente o que acontece se ela falecer antes desse prazo.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Renda na previdência",
        nivel: "médio",
        contexto: "Seu Joaquim quer uma renda vitalícia, mas se preocupa com a esposa caso ele morra primeiro. Ele pede orientação à gerente.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "médio",
        contexto: "Um cliente escolheu a tabela progressiva em seu plano e pergunta ao gerente como é cobrado o IR quando ele fizer um resgate.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "médio",
        contexto: "Uma cliente abriu um plano de previdência e ainda não sabe se prefere a tabela progressiva ou a regressiva. Ela pergunta ao gerente até quando pode decidir.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Tributação na previdência",
        nivel: "difícil",
        contexto: "Gustavo tem um PGBL na tabela regressiva. O aporte mais antigo, feito há 11 anos, vale hoje R$ 40.000,00, e os demais foram feitos há 3 anos. Ele resgata R$ 30.000,00.",
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
        modulo: 2,
        grupo: "Previdência complementar",
        tema: "Taxas na previdência",
        nivel: "difícil",
        contexto: "Uma cliente contribui com R$ 1.000,00 por mês para um plano com taxa de carregamento de 3% sobre cada aporte. Ela diz ao gerente que só paga a taxa de administração.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "fácil",
        contexto: "Um cliente usa com frequência o limite pré-aprovado vinculado à conta corrente, que é liberado automaticamente quando o saldo fica negativo.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "fácil",
        contexto: "Uma aposentada do INSS quer um empréstimo com taxas mais baixas, em que a parcela seja paga pela fonte pagadora antes de o benefício cair na conta.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "fácil",
        contexto: "Ao contratar o seguro do carro, Luiz vê que, em caso de sinistro parcial, ele terá de pagar uma parte do conserto.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "médio",
        contexto: "Um cliente reclama ao gerente dos juros do cheque especial e pergunta se existe algum limite para essa cobrança.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "médio",
        contexto: "Uma cliente entrou no rotativo do cartão de crédito e pergunta à gerente quais regras protegem o consumidor nessa situação.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Serviços bancários",
        nivel: "médio",
        contexto: "Um cliente percebe tarifas por extratos e transferências em sua conta e questiona o gerente se essas cobranças são permitidas.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "PIX",
        nivel: "médio",
        contexto: "Maria caiu em um golpe e fez um Pix para um fraudador. Ela pergunta ao gerente se existe algum mecanismo para tentar reaver o valor.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "médio",
        contexto: "Roberto tem um financiamento imobiliário e quer proteger a família caso ele venha a faltar. O gerente apresenta os seguros disponíveis.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Câmbio",
        nivel: "médio",
        contexto: "Um cliente quer abrir uma conta de investimentos no exterior por uma plataforma digital e pergunta ao assessor se isso é permitido.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "difícil",
        contexto: "Em um aperto, Cláudio precisa de dinheiro por alguns meses e pode escolher entre cheque especial, rotativo do cartão e crédito consignado. Ele diz ao gerente que vai usar o cheque especial por ser o mais prático.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Crédito",
        nivel: "difícil",
        contexto: "Uma cliente deixou R$ 1.000,00 no rotativo do cartão e não conseguiu pagar por vários meses. Ela teme que a dívida cresça indefinidamente e pede ajuda ao gerente.",
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
        modulo: 2,
        grupo: "Crédito, serviços, câmbio e seguros",
        tema: "Seguros",
        nivel: "difícil",
        contexto: "Um imóvel que vale R$ 300.000,00 foi segurado por R$ 500.000,00. Após um incêndio com perda total, o proprietário espera receber os R$ 500 mil e pergunta ao corretor.",
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
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "fácil",
        contexto: "Clara recebe R$ 8.000,00 por mês e tem despesas mensais de R$ 6.500,00.",
        enunciado: "A capacidade de poupança mensal de Clara é de:",
        alternativas: [
            "R$ 6.500,00",
            "R$ 1.500,00",
            "R$ 8.000,00",
            "R$ 14.500,00"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "fácil",
        contexto: "Ao listar seu patrimônio, Jorge inclui o carro que usa todos os dias para trabalhar.",
        enunciado: "No balanço patrimonial pessoal, esse carro é classificado como:",
        alternativas: [
            "Ativo de não uso",
            "Passivo de longo prazo",
            "Receita variável",
            "Ativo de uso"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Ao montar o orçamento com a ajuda de uma profissional certificada CPA, Luana lista aluguel, conta de luz, restaurantes e presentes de aniversário.",
        enunciado: "A profissional deve explicar que:",
        alternativas: [
            "o aluguel é uma despesa fixa, e restaurantes e presentes são despesas variáveis",
            "o aluguel é uma despesa variável, e restaurantes e presentes são despesas fixas",
            "todas são despesas fixas, pois se repetem ao longo do ano",
            "o aluguel e a luz são despesas variáveis, pois mudam a cada reajuste"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Um cliente pergunta ao planejador, certificado CPA, qual é a diferença entre o fluxo de caixa pessoal e o balanço patrimonial.",
        enunciado: "O planejador deve explicar que:",
        alternativas: [
            "o fluxo de caixa mostra bens e dívidas em uma data, e o balanço mostra entradas e saídas em um período",
            "os dois mostram as mesmas informações, mudando apenas a frequência de atualização",
            "o fluxo de caixa mostra entradas e saídas em um período, e o balanço mostra bens e dívidas em uma data",
            "o fluxo de caixa mostra só as dívidas, e o balanço mostra só os investimentos"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "médio",
        contexto: "Paulo tem casa própria, um carro e uma carteira de investimentos. Ele pergunta ao assessor, certificado CPA, quais desses bens geram renda para a sua independência financeira.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a casa e o carro são ativos de não uso e geram renda; os investimentos são ativos de uso",
            "todos os bens são ativos de não uso, pois podem ser vendidos a qualquer momento",
            "os investimentos e a casa geram renda, pois ambos se valorizam com o tempo",
            "os investimentos são ativos de não uso e geram renda; a casa e o carro são ativos de uso"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Orçamento",
        nivel: "médio",
        contexto: "Renata diz ao gerente, certificado CPA, que tenta guardar o que sobra no fim do mês, mas nunca sobra nada.",
        enunciado: "A orientação mais adequada do gerente é:",
        alternativas: [
            "esperar um aumento de salário, pois só então haverá sobra para poupar",
            "separar o valor a poupar logo que receber a renda, antes das demais despesas",
            "poupar apenas quando o saldo da conta ficar acima de R$ 10 mil",
            "usar o limite do cheque especial para investir e pagar no mês seguinte"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "médio",
        contexto: "Um cliente tem dívidas que somam 70% do valor total dos seus bens. Ele pede ao planejador, certificado CPA, uma avaliação da situação.",
        enunciado: "O planejador deve explicar que:",
        alternativas: [
            "o endividamento é baixo, e ele pode tomar novos créditos para investir em renda variável",
            "o endividamento não importa, pois os bens podem ser vendidos a qualquer momento",
            "o endividamento é elevado, e reduzir as dívidas deve ser prioridade antes de novos investimentos",
            "o endividamento é elevado, mas deve ser mantido para aproveitar o benefício fiscal das dívidas"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Joana tem R$ 30.000,00 em aplicações de liquidez diária e despesas mensais de R$ 5.000,00. O planejador, certificado CPA, calcula o índice de cobertura de despesas, que divide os ativos líquidos pelas despesas mensais.",
        enunciado: "O resultado indica que Joana consegue se manter por:",
        alternativas: [
            "6 meses, pois R$ 30 mil divididos por R$ 5 mil de despesas resultam em seis meses",
            "5 meses, pois é preciso descontar um mês de despesas como margem de segurança",
            "16 meses, pois o índice considera a renda anual somada aos ativos líquidos",
            "3 meses, pois apenas metade dos ativos líquidos entra no cálculo do índice"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Marcos tem casa de R$ 400.000,00, carro de R$ 60.000,00 e investimentos de R$ 40.000,00. Deve R$ 250.000,00 do financiamento da casa e R$ 10.000,00 no cartão.",
        enunciado: "O patrimônio líquido de Marcos e o valor dos seus ativos de não uso são:",
        alternativas: [
            "R$ 500.000,00 de patrimônio líquido e R$ 40.000,00 em ativos de não uso",
            "R$ 240.000,00 de patrimônio líquido e R$ 40.000,00 em ativos de não uso",
            "R$ 240.000,00 de patrimônio líquido e R$ 460.000,00 em ativos de não uso",
            "R$ 250.000,00 de patrimônio líquido e R$ 100.000,00 em ativos de não uso"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Orçamento e balanço patrimonial",
        tema: "Balanço patrimonial",
        nivel: "difícil",
        contexto: "Seu Rui tem 58 anos, um apartamento de R$ 1 milhão onde mora e poucos investimentos. Ele diz ao planejador, certificado CPA, que já tem patrimônio suficiente para se aposentar, pois o imóvel vale muito.",
        enunciado: "O planejador deve explicar que:",
        alternativas: [
            "o imóvel é um ativo de não uso e já gera a renda necessária para a aposentadoria",
            "o valor do imóvel garante a aposentadoria, pois pode ser dado em garantia a qualquer momento",
            "o imóvel é um ativo de uso, mas conta como renda passiva no cálculo da independência financeira",
            "o imóvel é um ativo de uso e não gera renda; para se aposentar, ele precisa de ativos que gerem renda"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: CRÉDITO E GESTÃO DE DÍVIDAS (10) =====================

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Garantias",
        nivel: "fácil",
        contexto: "Ao financiar um carro, Bruno descobre que o veículo fica em nome dele, mas vinculado ao banco até a quitação, podendo ser retomado em caso de inadimplência.",
        enunciado: "Essa garantia é a:",
        alternativas: [
            "Aval",
            "Fiança",
            "Penhor rural",
            "Alienação fiduciária"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "fácil",
        contexto: "Uma cliente quer comprar uma geladeira parcelada, com um crédito concedido pelo banco especificamente para essa compra.",
        enunciado: "Essa modalidade é o:",
        alternativas: [
            "CDC",
            "Cheque especial",
            "Consignado",
            "Home equity"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "médio",
        contexto: "Seu Antônio tem uma dívida no rotativo do cartão e, por ser aposentado do INSS, tem acesso ao consignado. Ele pergunta ao gerente, certificado CPA, o que fazer.",
        enunciado: "O gerente deve orientar:",
        alternativas: [
            "manter a dívida no rotativo, pois o consignado compromete o benefício",
            "pagar apenas o mínimo do cartão até a dívida ser renegociada pelo banco",
            "trocar a dívida do rotativo por consignado, que tem juros bem menores",
            "pegar mais crédito no rotativo para quitar a fatura e ganhar prazo"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "Uma cliente pergunta ao gerente, certificado CPA, qual é a diferença entre um empréstimo pessoal e um financiamento.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o empréstimo tem destino definido, como um imóvel ou veículo, e o financiamento tem uso livre",
            "os dois têm uso livre, mudando apenas o prazo e o valor máximo das parcelas",
            "os dois têm destino definido, mas só o financiamento exige garantia",
            "o financiamento tem destino definido, como um imóvel ou veículo, e o empréstimo tem uso livre"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Garantias",
        nivel: "médio",
        contexto: "Um empresário pensa em usar a casa como garantia em um empréstimo e pergunta ao consultor, certificado CPA, quais são as vantagens e os riscos.",
        enunciado: "O consultor deve explicar que:",
        alternativas: [
            "a garantia reduz os juros, e o imóvel nunca pode ser tomado por ser de moradia",
            "a garantia reduz os juros, mas o imóvel pode ser tomado se ele não pagar",
            "a garantia aumenta os juros, pois o banco assume o risco de manter o imóvel",
            "a garantia não altera os juros, mas permite adiar as parcelas sem nenhuma multa"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "Um estudante de baixa renda quer cursar uma faculdade particular e pergunta ao gerente, certificado CPA, se existe uma linha de crédito específica para isso.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o financiamento estudantil tem juros de mercado e exige o pagamento integral durante o curso",
            "o único caminho é o crédito pessoal, pois não há linhas específicas para educação",
            "o financiamento estudantil tem condições especiais e pagamento, em grande parte, após a formatura",
            "o financiamento estudantil é concedido só a estudantes de universidades públicas"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Modalidades de crédito",
        nivel: "médio",
        contexto: "Uma família quer instalar painéis solares em casa e pergunta ao gerente, certificado CPA, como avaliar uma linha de crédito para energia sustentável.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "a economia na conta de luz ajuda nas parcelas, mas o custo total deve ser comparado",
            "a economia na conta de luz sempre cobre as parcelas, dispensando comparar o custo",
            "essas linhas não cobram juros, pois são subsidiadas integralmente pelo governo",
            "essas linhas só podem ser contratadas por empresas, e não por pessoas físicas"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Carla tem três dívidas: rotativo do cartão a 14% ao mês, cheque especial a 8% ao mês e consignado a 1,8% ao mês. Ela recebeu um bônus que dá para quitar apenas uma delas.",
        enunciado: "O planejador, certificado CPA, deve orientar a quitar primeiro:",
        alternativas: [
            "o consignado, pois é a dívida com o maior prazo restante",
            "o rotativo do cartão, pois é a dívida com o maior custo mensal",
            "o cheque especial, pois é a dívida mais fácil de voltar a usar",
            "a de menor saldo, pois quitar mais dívidas reduz o risco"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Dois bancos oferecem o mesmo valor e prazo. O banco A cobra juros de 1,9% ao mês, e o banco B, 2,1% ao mês. O banco A inclui tarifas e seguro obrigatório que elevam o CET para 2,6% ao mês, enquanto o CET do banco B é de 2,2% ao mês.",
        enunciado: "O gerente, certificado CPA, deve orientar o cliente a escolher:",
        alternativas: [
            "o banco A, pois a taxa de juros nominal é o que define o custo final",
            "o banco A, pois tarifas e seguros não fazem parte do custo do crédito",
            "o banco B, pois a taxa de juros nominal dele é menor que a do banco A",
            "o banco B, pois o CET, que inclui juros, tarifas e seguros, é menor"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Crédito e gestão de dívidas",
        tema: "Gestão de dívidas",
        nivel: "difícil",
        contexto: "Um casal quer reformar a casa e tem renda estável. Eles consideram o cheque especial, o crédito pessoal sem garantia e um empréstimo com o imóvel em garantia. Eles acham que dar o imóvel em garantia é sempre uma má ideia.",
        enunciado: "O consultor, certificado CPA, deve explicar que:",
        alternativas: [
            "com renda estável, a garantia pode valer a pena pelos juros menores, se as parcelas couberem",
            "a garantia deve ser evitada em qualquer caso, pois o cheque especial é mais barato",
            "o crédito pessoal é sempre a melhor opção, pois não exige garantia e tem juros menores",
            "o cheque especial é o mais indicado para reformas, pois tem limite de juros por lei"
        ],
        correta: 0
    },

    // ===================== MÓDULO 3 — GRUPO: RESERVA DE EMERGÊNCIA (8) =====================

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "fácil",
        contexto: "Um cliente pergunta qual é o principal objetivo de manter uma reserva de emergência.",
        enunciado: "O objetivo da reserva é:",
        alternativas: [
            "Cobrir imprevistos sem recorrer a dívidas",
            "Obter a maior rentabilidade possível",
            "Financiar viagens e compras planejadas",
            "Substituir o plano de aposentadoria"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "fácil",
        contexto: "Uma cliente quer aplicar sua reserva de emergência e pede uma indicação simples.",
        enunciado: "Uma aplicação adequada para a reserva é o:",
        alternativas: [
            "Fundo de ações",
            "Tesouro IPCA+ longo",
            "Tesouro Selic",
            "COE de cinco anos"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Um cliente pergunta ao gerente, certificado CPA, quais características são mais importantes para a aplicação da reserva de emergência.",
        enunciado: "O gerente deve explicar que a reserva deve priorizar:",
        alternativas: [
            "rentabilidade alta, mesmo que o resgate leve alguns meses",
            "baixo risco, mesmo que o resgate dependa de carência longa",
            "liquidez e rentabilidade alta, mesmo com risco de perda",
            "liquidez e baixo risco, mesmo que a rentabilidade seja menor"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Um cliente pensa em usar a reserva de emergência para comprar ingressos de um show. Ele pede a opinião do planejador, certificado CPA.",
        enunciado: "O planejador deve explicar que a reserva deve ser usada:",
        alternativas: [
            "em qualquer gasto do mês, desde que o valor seja reposto depois",
            "em imprevistos necessários, como perda de renda ou doença",
            "em compras planejadas, pois o dinheiro já está disponível",
            "em oportunidades de investimento com rentabilidade maior"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Ana é servidora pública, e Pedro é profissional autônomo com renda variável. Os dois perguntam ao planejador, certificado CPA, se precisam de reservas do mesmo tamanho.",
        enunciado: "O planejador deve explicar que:",
        alternativas: [
            "Ana precisa de uma reserva maior, pois sua renda é mais instável",
            "os dois precisam da mesma reserva, pois ela depende só da idade",
            "Pedro precisa de uma reserva maior, pois sua renda é mais instável",
            "nenhum dos dois precisa de reserva, pois ambos têm renda mensal"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "médio",
        contexto: "Ao calcular a reserva, uma cliente lista aluguel, alimentação, plano de saúde, viagens e restaurantes. Ela pergunta à gerente, certificada CPA, o que deve entrar na conta.",
        enunciado: "A gerente deve explicar que entram no cálculo:",
        alternativas: [
            "as despesas essenciais, como aluguel, alimentação e plano de saúde",
            "todas as despesas do mês, inclusive viagens e restaurantes",
            "apenas o aluguel, pois é a maior despesa do orçamento",
            "apenas as despesas variáveis, como viagens e restaurantes"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "difícil",
        contexto: "Um planejador, certificado CPA, adota como regra 6 meses de despesas essenciais para assalariados e 12 meses para autônomos. Lúcia é autônoma e gasta R$ 6.000,00 por mês, sendo R$ 1.500,00 com lazer.",
        enunciado: "A reserva de emergência recomendada para Lúcia é de:",
        alternativas: [
            "R$ 72.000,00, pois 12 meses de despesas totais de R$ 6.000,00",
            "R$ 54.000,00, pois 12 meses de despesas essenciais de R$ 4.500,00",
            "R$ 27.000,00, pois 6 meses de despesas essenciais de R$ 4.500,00",
            "R$ 36.000,00, pois 6 meses de despesas totais de R$ 6.000,00"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Reserva de emergência",
        tema: "Reserva de emergência",
        nivel: "difícil",
        contexto: "Rafael mantém toda a sua reserva de emergência em cotas de fundos imobiliários, pois pagam rendimentos mensais isentos. Ele diz ao assessor, certificado CPA, que a reserva está bem aplicada.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "a reserva está adequada, pois os rendimentos isentos compensam qualquer oscilação",
            "a reserva está adequada, pois os fundos imobiliários têm garantia do FGC",
            "a reserva está inadequada apenas porque os rendimentos não são mensais",
            "a reserva está inadequada, pois as cotas oscilam e podem ser vendidas com perda"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: PLANEJAMENTO FINANCEIRO (10) =====================

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "fácil",
        contexto: "Um planejador, certificado CPA, inicia o atendimento de um novo cliente.",
        enunciado: "A primeira etapa do planejamento financeiro é:",
        alternativas: [
            "Implementar o plano de ação",
            "Monitorar os resultados",
            "Definir os objetivos financeiros",
            "Escolher os produtos"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Ciclo de vida",
        nivel: "fácil",
        contexto: "Gustavo tem 25 anos, acabou de começar a trabalhar e ainda tem pouco patrimônio.",
        enunciado: "A fase do ciclo de vida financeiro de Gustavo é a de:",
        alternativas: [
            "Consolidação",
            "Usufruto",
            "Transferência",
            "Acumulação"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "médio",
        contexto: "Antes de sugerir qualquer investimento, o planejador, certificado CPA, pede à cliente extratos, lista de dívidas e despesas do mês. Ela pergunta por que isso é necessário.",
        enunciado: "O planejador deve explicar que:",
        alternativas: [
            "esses documentos servem só para cumprir exigências da Receita Federal",
            "é preciso avaliar a situação financeira atual antes de montar o plano de ação",
            "o plano de ação vem antes, e os documentos servem para confirmar depois",
            "esses documentos são necessários apenas para clientes com dívidas em atraso"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Etapas do planejamento",
        nivel: "médio",
        contexto: "Um cliente montou o plano financeiro há três anos e nunca mais o revisou, mesmo após casar e ter um filho.",
        enunciado: "O planejador, certificado CPA, deve orientar que:",
        alternativas: [
            "o plano, uma vez feito, deve ser mantido até o fim para não perder o foco",
            "o plano só deve ser revisado quando os investimentos derem prejuízo",
            "o plano precisa ser monitorado e revisado, principalmente após mudanças de vida",
            "o plano deve ser refeito do zero todo mês, independentemente de mudanças"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Metas financeiras",
        nivel: "médio",
        contexto: "Uma cliente diz ao gerente, certificado CPA, que sua meta é juntar bastante dinheiro algum dia.",
        enunciado: "O gerente deve orientá-la a definir uma meta:",
        alternativas: [
            "específica, mensurável e com prazo, como juntar R$ 30 mil em três anos",
            "ampla e flexível, para não gerar frustração caso não seja atingida",
            "baseada na rentabilidade, como ganhar mais que a bolsa todos os anos",
            "sem valor definido, mas com prazo curto, para gerar urgência"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Planejamento educacional",
        nivel: "médio",
        contexto: "Um casal quer juntar recursos para a faculdade da filha, que começa daqui a 15 anos. Eles pedem orientação ao planejador, certificado CPA.",
        enunciado: "O planejador deve explicar que, para esse objetivo:",
        alternativas: [
            "o horizonte é curto, e a poupança é a única opção adequada",
            "o horizonte é longo, e produtos com proteção contra a inflação são adequados",
            "o horizonte é longo, e o ideal é concentrar tudo em ações de uma empresa",
            "o horizonte não importa, pois o custo da faculdade não muda com o tempo"
        ],
        correta: 1
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Aposentadoria",
        nivel: "médio",
        contexto: "Um cliente pergunta ao planejador, certificado CPA, o que significa atingir a independência financeira.",
        enunciado: "O planejador deve explicar que é o momento em que:",
        alternativas: [
            "o salário passa a ser maior que todas as despesas do mês",
            "o cliente quita o financiamento da casa própria",
            "o patrimônio passa a ser maior que o do ano anterior",
            "a renda dos investimentos cobre as despesas"
        ],
        correta: 3
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Aposentadoria",
        nivel: "difícil",
        contexto: "Um cliente quer se aposentar com renda de R$ 10.000,00 por mês, vivendo apenas do rendimento. O planejador, certificado CPA, considera um retorno real de 4% ao ano sobre o patrimônio.",
        enunciado: "O patrimônio necessário para essa independência é de:",
        alternativas: [
            "R$ 3.000.000,00, pois R$ 120 mil por ano divididos por 4% resultam nesse valor",
            "R$ 250.000,00, pois R$ 10 mil por mês divididos por 4% resultam nesse valor",
            "R$ 1.200.000,00, pois são necessários dez anos de despesas anuais",
            "R$ 4.800.000,00, pois R$ 120 mil por ano são multiplicados por 40"
        ],
        correta: 0
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Ciclo de vida",
        nivel: "difícil",
        contexto: "Seu Hélio tem 62 anos, vai se aposentar em dois anos e diz ao assessor, certificado CPA, que quer colocar 80% do patrimônio em ações para recuperar o tempo perdido.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "nessa fase, a prioridade é maximizar o retorno, e a alta exposição a ações é a mais adequada",
            "nessa fase, a prioridade é preservar o patrimônio, e por isso ele deve manter tudo na poupança",
            "nessa fase, a prioridade é preservar o patrimônio, e muita exposição a ações eleva o risco",
            "nessa fase, a exposição a ações não tem risco, pois o horizonte até a aposentadoria é longo"
        ],
        correta: 2
    },

    {
        modulo: 3,
        grupo: "Planejamento financeiro",
        tema: "Planejamento educacional",
        nivel: "difícil",
        contexto: "Um casal aplica hoje R$ 50.000,00 para a faculdade do filho, daqui a 10 anos, com retorno real estimado de 7% ao ano, no regime de juros compostos.",
        enunciado: "O valor aproximado, em termos reais, ao fim do prazo é de:",
        alternativas: [
            "R$ 85.000,00, pois são 70% de juros simples sobre 50 mil",
            "R$ 53.500,00, pois são 7% sobre os 50 mil aplicados",
            "R$ 100.000,00, pois o valor dobra a cada sete anos",
            "R$ 98.358,00, pois 50 mil multiplicados por 1,07 elevado a 10"
        ],
        correta: 3
    },

    // ===================== MÓDULO 3 — GRUPO: IMPOSTO DE RENDA DA PESSOA FÍSICA (8) =====================

    {
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "fácil",
        contexto: "Na declaração do IR, Lucas precisa classificar o salário que recebe da empresa.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "fácil",
        contexto: "Na declaração do IR, Ana precisa informar o 13º salário recebido no ano.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "médio",
        contexto: "Uma cliente tem muitas despesas médicas, paga escola dos filhos e contribui para um PGBL. Ela pergunta ao gerente, certificado CPA, qual modelo de declaração tende a ser melhor.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "médio",
        contexto: "Um cliente que faz a declaração simplificada pergunta ao assessor, certificado CPA, se pode deduzir as contribuições feitas ao PGBL.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "médio",
        contexto: "Um investidor tem rendimentos de poupança, de LCI e de CDB e pergunta à gerente, certificada CPA, como informá-los na declaração.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "médio",
        contexto: "Seu Carlos passou a receber aluguel de um imóvel e pergunta ao gerente, certificado CPA, como esse rendimento é tratado no IR.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Modelos de declaração",
        nivel: "difícil",
        contexto: "Renan tem rendimentos tributáveis anuais de R$ 100.000,00. No modelo simplificado, o desconto seria de cerca de R$ 16.000,00. No modelo completo, ele tem R$ 25.000,00 em despesas médicas comprovadas.",
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
        modulo: 3,
        grupo: "Imposto de Renda da pessoa física",
        tema: "Classificação dos rendimentos",
        nivel: "difícil",
        contexto: "No ano, Beatriz recebeu salário, rendimentos de um CDB e rendimentos de uma LCA. O contador pede que ela classifique cada um para a declaração.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Perfis de investidor",
        nivel: "fácil",
        contexto: "Uma cliente diz que não aceita ver o valor investido cair, mesmo que isso signifique ganhar menos.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Técnicas de atendimento",
        nivel: "fácil",
        contexto: "Durante o atendimento, a gerente deixa o cliente falar sem interrupções, faz perguntas para confirmar o que entendeu e só depois apresenta soluções.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "fácil",
        contexto: "Uma notícia negativa sobre o mau atendimento de uma instituição se espalha nas redes sociais e faz clientes retirarem seus recursos.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Adequação de produtos",
        nivel: "médio",
        contexto: "Uma cliente de perfil moderado quer juntar dinheiro para dar entrada em um imóvel daqui a seis meses. Ela pede ao gerente, certificado CPA, uma indicação.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Monitoramento do suitability",
        nivel: "médio",
        contexto: "Um cliente respondeu o questionário de perfil há três anos. O gerente, certificado CPA, vai recomendar um novo investimento.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Comunicação com o cliente",
        nivel: "médio",
        contexto: "Um gerente, certificado CPA, vai apresentar um COE a uma cliente com pouco conhecimento de investimentos.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Gerenciamento de expectativas",
        nivel: "médio",
        contexto: "Um cliente pergunta ao assessor, certificado CPA, quanto vai ganhar em um fundo multimercado no próximo ano.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Conflitos de interesses",
        nivel: "médio",
        contexto: "Um gerente, certificado CPA, precisa bater a meta de vendas de um fundo que não se encaixa no perfil de uma cliente.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Segregação de funções",
        nivel: "médio",
        contexto: "Em uma instituição, a mesma pessoa aprova operações de crédito, registra os contratos e confere os próprios lançamentos.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "médio",
        contexto: "Uma falha no sistema de uma corretora impede que ordens de clientes sejam executadas durante o pregão.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Adequação de produtos",
        nivel: "difícil",
        contexto: "Um cliente de perfil arrojado quer usar R$ 100 mil para quitar um financiamento daqui a um ano e pede ao assessor, certificado CPA, para aplicar tudo em ações, já que seu perfil permite.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Monitoramento do suitability",
        nivel: "difícil",
        contexto: "Uma cliente com perfil desatualizado há quatro anos pede ao gerente, certificado CPA, para aplicar em um fundo de crédito privado.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Riscos da atividade",
        nivel: "difícil",
        contexto: "Uma instituição enfrenta três problemas: um erro de sistema duplicou débitos em contas; um contrato mal redigido gerou ações judiciais; e o descumprimento de uma norma da CVM resultou em multa.",
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
        modulo: 3,
        grupo: "Perfil, suitability e conduta",
        tema: "Gerenciamento de expectativas",
        nivel: "difícil",
        contexto: "Um cliente reclama que o fundo rendeu 6% no ano, e não os 12% que o gerente havia dito que ele ganharia. O novo gerente, certificado CPA, assume o atendimento.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "fácil",
        contexto: "Uma instituição identifica uma operação atípica que pode indicar lavagem de dinheiro.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "fácil",
        contexto: "Na lavagem de dinheiro, há uma etapa em que os recursos ilícitos entram pela primeira vez no sistema financeiro.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "médio",
        contexto: "Um gerente, certificado CPA, identifica uma operação suspeita e pensa em avisar o cliente de que ela será comunicada às autoridades.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Abordagem baseada em risco",
        nivel: "médio",
        contexto: "Uma instituição passa a aplicar controles mais rigorosos a clientes e produtos de maior risco e controles mais simples aos de menor risco.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Conheça seu Cliente",
        nivel: "médio",
        contexto: "O cadastro de um cliente não é atualizado há anos, e ele passou a movimentar valores muito acima da renda informada. A gerente, certificada CPA, analisa o caso.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "Conheça seu Cliente",
        nivel: "médio",
        contexto: "Um novo gerente pergunta ao colega, certificado CPA, por que o procedimento Conheça seu Cliente é tão importante.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "difícil",
        contexto: "Um cliente com renda mensal de R$ 5.000,00 passa a fazer vários depósitos em espécie de R$ 9.000,00, em dias seguidos, sempre abaixo de valores que chamam atenção. O gerente, certificado CPA, percebe o padrão.",
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
        modulo: 3,
        grupo: "PLD/FT e Conheça seu Cliente",
        tema: "PLD/FT",
        nivel: "difícil",
        contexto: "Uma gerente, certificada CPA, notou sinais claros de lavagem de dinheiro em operações de um cliente, mas não comunicou nada para não perder a conta.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "fácil",
        contexto: "Um diretor compra ações da própria empresa dias antes de uma aquisição ainda não divulgada, usando essa informação.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "fácil",
        contexto: "Um grupo espalha boatos falsos sobre uma empresa para derrubar o preço das ações e lucrar com isso.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "médio",
        contexto: "Uma pessoa sem registro na CVM passa a cobrar para recomendar ações a clientes pelas redes sociais, como se fosse analista.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "médio",
        contexto: "Um motorista de aplicativo ouve dois executivos falando sobre uma fusão ainda não divulgada e compra ações da empresa. Ele acredita que só diretores podem cometer o crime de informação privilegiada.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "médio",
        contexto: "Um operador executa ordens para a própria conta antes de executar grandes ordens de clientes, aproveitando o movimento de preço que elas vão causar.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "médio",
        contexto: "Um profissional pergunta ao colega de compliance, certificado CPA, se só as condutas listadas expressamente na Resolução CVM 62 podem ser punidas.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Ilícitos de mercado",
        nivel: "difícil",
        contexto: "Dois investidores do mesmo grupo compram e vendem ações entre si várias vezes ao dia, sem mudança real de titularidade, para dar a impressão de que o papel tem grande liquidez.",
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
        modulo: 3,
        grupo: "Crimes e ilícitos de mercado",
        tema: "Crimes contra o mercado",
        nivel: "difícil",
        contexto: "Um analista de um banco soube de uma aquisição ainda não divulgada e contou ao cunhado, que comprou ações da empresa. O cunhado acredita que não cometeu crime, pois não trabalha no banco.",
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
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "fácil",
        contexto: "Marina, 34 anos, engenheira ambiental, está montando sua primeira carteira e leu no aplicativo do banco que alguns fundos seguem critérios ESG. Ela trabalha em uma empresa de saneamento, tem uma reserva de emergência já formada e pergunta ao gerente, certificado CPA, o que significam as letras da sigla.",
        enunciado: "A sigla ESG corresponde a:",
        alternativas: [
            "Econômico, sustentável e global",
            "Ambiental, social e governança",
            "Ético, solidário e governamental",
            "Energia, sociedade e gestão"
        ],
        correta: 1
    },

    {
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "médio",
        contexto: "Seu Armando, empresário de 58 anos do setor de transportes, diz ao assessor, certificado CPA, que não pretende investir em fundos ESG porque, na visão dele, são uma espécie de doação disfarçada, em que o investidor abre mão de retorno para ajudar causas sociais. Ele tem perfil moderado e patrimônio de R$ 2 milhões.",
        enunciado: "Para corrigir o entendimento do cliente, o assessor deve explicar que o investimento ESG:",
        alternativas: [
            "é uma forma de filantropia, em que o investidor aceita retorno menor em troca de impacto social",
            "considera apenas critérios ambientais, sem relação com a governança ou os resultados das empresas",
            "garante retorno superior ao dos fundos tradicionais, pois as empresas sustentáveis não têm riscos",
            "integra riscos e oportunidades socioambientais e de governança à análise, buscando retorno no longo prazo"
        ],
        correta: 3
    },

    {
        modulo: 4,
        grupo: "ESG",
        tema: "Produtos ESG",
        nivel: "médio",
        contexto: "Uma empresa de energia eólica emitiu títulos de dívida cujos recursos só podem ser usados em projetos de energia renovável, com relatórios periódicos sobre o uso do dinheiro. Paula, cliente de perfil moderado que já investe em CDBs e LCAs, pergunta à gerente, certificada CPA, que tipo de título é esse.",
        enunciado: "A gerente deve explicar que se trata de um:",
        alternativas: [
            "título verde, cujos recursos são destinados a projetos com benefício ambiental",
            "título social, cujos recursos são destinados a projetos de moradia popular",
            "título atrelado a metas, cujos recursos podem ter qualquer destino na empresa",
            "título público federal, cujos recursos financiam o orçamento do governo"
        ],
        correta: 0
    },

    {
        modulo: 4,
        grupo: "ESG",
        tema: "Regulação ESG",
        nivel: "médio",
        contexto: "Ricardo, 41 anos, médico, encontra na plataforma um fundo com o sufixo IS e outro que apenas menciona considerar questões ESG em sua análise. Ele quer investir em algo alinhado a seus valores e pergunta ao assessor, certificado CPA, como a autorregulação trata essa diferença.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "o sufixo IS é apenas comercial e pode ser usado por qualquer fundo que cite sustentabilidade",
            "os dois fundos seguem as mesmas exigências, pois ambos mencionam questões ESG",
            "o fundo IS precisa comprovar um objetivo de investimento sustentável, seguindo regras da ANBIMA",
            "o fundo que integra ESG é o único obrigado a comprovar objetivo sustentável"
        ],
        correta: 2
    },

    {
        modulo: 4,
        grupo: "ESG",
        tema: "Produtos ESG",
        nivel: "difícil",
        contexto: "Uma companhia emitiu debêntures com uma cláusula especial: se não reduzir suas emissões de carbono em 30% até 2030, a taxa de juros paga aos investidores sobe. Os recursos captados podem ser usados livremente pela empresa. Um cliente acredita que, por ser ligado a uma meta ambiental, o título é um título verde.",
        enunciado: "O assessor, certificado CPA, deve explicar que:",
        alternativas: [
            "é um título verde, pois todo título com meta ambiental exige que os recursos financiem projetos ambientais",
            "é um título social, pois a redução de emissões de carbono beneficia diretamente a sociedade",
            "é um título comum, pois a cláusula de juros não tem relação com critérios de sustentabilidade",
            "é um título atrelado a metas, pois o custo depende das metas, e não do uso dos recursos"
        ],
        correta: 3
    },

    {
        modulo: 4,
        grupo: "ESG",
        tema: "Conceitos de ESG",
        nivel: "difícil",
        contexto: "Um fundo divulga em sua propaganda que é 100% sustentável, mas a carteira tem grande exposição a empresas com histórico de desastres ambientais e não há relatório que comprove critérios socioambientais. Uma cliente de 29 anos, que escolheu o fundo justamente por isso, pergunta ao gerente, certificado CPA, se há algum problema.",
        enunciado: "O gerente deve explicar que a situação indica:",
        alternativas: [
            "exclusão negativa, pois o fundo afasta empresas com histórico de desastres ambientais",
            "greenwashing, pois o fundo divulga uma sustentabilidade que não se comprova na carteira",
            "investimento de impacto, pois o fundo busca mudar as empresas por dentro da carteira",
            "integração ESG, pois basta o fundo declarar critérios para ser considerado sustentável"
        ],
        correta: 1
    },

    // ===================== MÓDULO 4 — GRUPO: DEFI, TOKENIZAÇÃO E CRIPTOATIVOS (7) =====================

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "fácil",
        contexto: "Lucas, 27 anos, programador, quer uma criptomoeda que mantenha o valor estável, acompanhando o dólar, para transferir recursos entre plataformas sem sofrer com a volatilidade. Ele já tem uma pequena parte do patrimônio em bitcoin e pede uma indicação ao assessor.",
        enunciado: "O tipo de criptoativo adequado é a:",
        alternativas: [
            "Stablecoin",
            "NFT",
            "Security token",
            "Utility token"
        ],
        correta: 0
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "fácil",
        contexto: "Uma artista digital vende uma obra única registrada em blockchain, com certificado de autenticidade que não pode ser trocado por outro item equivalente. Ela recebeu propostas de colecionadores de três países.",
        enunciado: "Esse ativo é um:",
        alternativas: [
            "ETF",
            "Stablecoin",
            "NFT",
            "Payment token"
        ],
        correta: 2
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "DeFi",
        nivel: "médio",
        contexto: "Felipe, 31 anos, conheceu uma plataforma de finanças descentralizadas que oferece empréstimos sem banco, executados automaticamente por programas na blockchain. Ele pergunta ao assessor, certificado CPA, quais são os principais riscos, já que a taxa oferecida é bem acima da renda fixa.",
        enunciado: "O assessor deve explicar que:",
        alternativas: [
            "não há riscos relevantes, pois a blockchain impede qualquer tipo de falha ou perda",
            "há apenas o risco de mercado, pois os contratos inteligentes são garantidos pelo FGC",
            "há riscos de falhas nos contratos, mas a CVM garante a devolução dos valores perdidos",
            "há risco de falhas nos contratos, pouca regulação e nenhuma garantia como o FGC"
        ],
        correta: 3
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Tokenização",
        nivel: "médio",
        contexto: "Uma incorporadora quer dividir a propriedade de um prédio comercial em milhares de frações digitais registradas em blockchain, que dão direito a parte dos aluguéis. Um cliente de perfil moderado pergunta à gerente, certificada CPA, como esse token é classificado e quem o regula.",
        enunciado: "A gerente deve explicar que se trata de um:",
        alternativas: [
            "utility token, que dá acesso a um serviço e é regulado pelo Banco Central",
            "security token, que representa um investimento e pode ser regulado pela CVM",
            "payment token, que funciona como moeda e é regulado pela SUSEP",
            "NFT, que representa um item único e não está sujeito a nenhuma regulação"
        ],
        correta: 1
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Criptoativos",
        nivel: "médio",
        contexto: "Dona Célia, 55 anos, quer ter um pouco de exposição a criptoativos, mas tem receio de guardar senhas e carteiras digitais. Ela já investe em ações pela corretora e pede orientação ao assessor, certificado CPA.",
        enunciado: "O assessor deve sugerir um ETF de criptoativos, pois ele:",
        alternativas: [
            "é negociado na bolsa e tem a garantia do FGC contra quedas dos criptoativos",
            "é negociado fora da bolsa e exige que ela mantenha uma carteira digital própria",
            "é negociado na bolsa como uma ação e dispensa a guarda direta dos criptoativos",
            "é negociado na bolsa e é isento de IR em vendas de até R$ 20 mil por mês"
        ],
        correta: 2
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "DeFi",
        nivel: "médio",
        contexto: "Um grupo de investidores criou uma organização que funciona sem diretoria tradicional: as decisões sobre o uso dos recursos são votadas pelos detentores de tokens, e as regras ficam registradas em contratos inteligentes. Um cliente curioso pergunta ao assessor, certificado CPA, que estrutura é essa.",
        enunciado: "O assessor deve explicar que se trata de uma:",
        alternativas: [
            "DAO, organização descentralizada governada pelos detentores de tokens",
            "sociedade anônima, com decisões tomadas pelo conselho de administração eleito",
            "cooperativa de crédito, com decisões tomadas em assembleia de associados",
            "fintech regulada, com decisões tomadas por uma diretoria autorizada pelo BC"
        ],
        correta: 0
    },

    {
        modulo: 4,
        grupo: "DeFi, tokenização e criptoativos",
        tema: "Drex",
        nivel: "difícil",
        contexto: "Um cliente de 45 anos, entusiasta de tecnologia, diz ao gerente, certificado CPA, que o Drex é uma criptomoeda do governo que vai se valorizar como o bitcoin e que, por isso, quer comprar o máximo possível antes do lançamento.",
        enunciado: "Para corrigir o cliente, o gerente deve explicar que o Drex:",
        alternativas: [
            "é uma criptomoeda emitida pelo governo, com valor definido pela oferta e demanda do mercado",
            "é uma iniciativa do BC de real digital, com o mesmo valor da moeda, sem proposta de valorização",
            "é uma stablecoin privada lastreada em dólar, emitida pelos grandes bancos brasileiros",
            "é um token de investimento do Tesouro, com rendimento atrelado à taxa Selic"
        ],
        correta: 1
    },

    // ===================== MÓDULO 4 — GRUPO: OPEN FINANCE, INVESTMENT E INSURANCE (3) =====================

    {
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Finance",
        nivel: "fácil",
        contexto: "Paulo, 38 anos, tem conta em dois bancos e um seguro de carro. Um aplicativo pede autorização para acessar seus dados de conta, investimentos e seguros, prometendo ofertas melhores. Ele quer saber em que tipo de sistema isso se baseia.",
        enunciado: "Esse compartilhamento faz parte do:",
        alternativas: [
            "Sistema Selic",
            "Sandbox regulatório",
            "Drex",
            "Open Finance"
        ],
        correta: 3
    },

    {
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Investment",
        nivel: "médio",
        contexto: "Juliana, 42 anos, tem investimentos em três instituições diferentes e quer ver tudo em um único aplicativo, além de facilitar a transferência de aplicações entre elas. Ela pergunta à assessora, certificada CPA, como o Open Investment pode ajudar.",
        enunciado: "A assessora deve explicar que o Open Investment:",
        alternativas: [
            "permite reunir os dados automaticamente, sem necessidade de qualquer autorização da cliente",
            "permite, com o consentimento dela, reunir os dados e facilitar a portabilidade",
            "garante uma rentabilidade maior ao transferir os investimentos para outra instituição",
            "obriga as instituições a igualar as taxas oferecidas por todas as outras do mercado"
        ],
        correta: 1
    },

    {
        modulo: 4,
        grupo: "Open Finance, Investment e Insurance",
        tema: "Open Insurance",
        nivel: "difícil",
        contexto: "Um cliente de 50 anos acredita que o Open Insurance permite que qualquer seguradora acesse livremente seus dados e que ele é regulado pelo Banco Central, como o Open Finance. Ele desistiu de renovar o seguro por medo de ter os dados expostos.",
        enunciado: "O corretor, certificado CPA, deve explicar que o Open Insurance:",
        alternativas: [
            "depende do consentimento do cliente e é conduzido pelo Banco Central, junto com o Open Finance",
            "dispensa o consentimento do cliente e é conduzido pela SUSEP, para ampliar a concorrência",
            "depende do consentimento do cliente e é conduzido pela SUSEP, trazendo mais transparência",
            "dispensa o consentimento do cliente e é conduzido pela CVM, para proteger os dados"
        ],
        correta: 2
    },

    // ===================== MÓDULO 4 — GRUPO: IA, FINTECHS E MEIOS DE PAGAMENTO (4) =====================

    {
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Fintechs",
        nivel: "fácil",
        contexto: "Uma startup criou um novo serviço financeiro que ainda não se encaixa nas regras existentes. Para testá-lo com clientes reais, por tempo limitado e sob supervisão do regulador, ela foi admitida em um ambiente especial.",
        enunciado: "Esse ambiente é o:",
        alternativas: [
            "Open Finance",
            "Sistema Selic",
            "Sandbox regulatório",
            "Mercado de balcão"
        ],
        correta: 2
    },

    {
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Inteligência artificial",
        nivel: "médio",
        contexto: "Um banco usa uma ferramenta que analisa o histórico de milhares de clientes para prever a chance de inadimplência de um novo pedido de crédito. Outro sistema do mesmo banco conversa com clientes e escreve respostas personalizadas. Um estagiário pergunta ao gerente, certificado CPA, qual a diferença entre os dois.",
        enunciado: "O gerente deve explicar que:",
        alternativas: [
            "o primeiro é IA preditiva, que analisa dados para prever, e o segundo é IA generativa, que cria conteúdo",
            "o primeiro é IA generativa, que cria conteúdo, e o segundo é IA preditiva, que analisa dados para prever",
            "os dois são IAs generativas, pois ambos produzem respostas a partir de dados",
            "os dois são IAs preditivas, pois ambos usam dados históricos dos clientes"
        ],
        correta: 0
    },

    {
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Inteligência artificial",
        nivel: "médio",
        contexto: "Uma corretora passou a usar um assistente virtual com IA para atender clientes 24 horas por dia. A diretoria pergunta à profissional de compliance, certificada CPA, quais cuidados são necessários.",
        enunciado: "A profissional deve recomendar:",
        alternativas: [
            "dispensar a supervisão humana, pois a IA não comete erros nas respostas aos clientes",
            "supervisão humana, proteção dos dados pessoais e controle de respostas erradas ou enviesadas",
            "permitir que a IA recomende qualquer produto, sem considerar o perfil do investidor",
            "usar os dados dos clientes livremente, pois a IA dispensa as regras de proteção de dados"
        ],
        correta: 1
    },

    {
        modulo: 4,
        grupo: "IA, fintechs e meios de pagamento",
        tema: "Meios de pagamento",
        nivel: "difícil",
        contexto: "Uma lojista de 36 anos recebe vendas por cartão de crédito, boleto e Pix. Ela reclama ao gerente, certificado CPA, que o dinheiro das vendas demora a cair e que paga taxas altas, e acha que o Pix é igual aos outros meios, só que mais moderno.",
        enunciado: "O gerente deve explicar que, em comparação com cartão e boleto, o Pix:",
        alternativas: [
            "cai na conta em até dois dias úteis, como o boleto, mas com custo menor para o recebedor",
            "cai na conta em segundos, mas só funciona em horário bancário e custa mais que o cartão",
            "cai na conta em segundos, mas o valor pode ser cancelado pelo pagador em até 30 dias",
            "cai na conta em segundos, funciona 24 horas por dia e costuma ter custo menor para o recebedor"
        ],
        correta: 3
    },

];