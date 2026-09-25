// ===== DOMINA — FERRAMENTAS DO SIMULADO =====
// Janelas flutuantes: HP-12C, calculadora comum e rascunho.
// As anotações ficam no index.html, porque dependem da questão atual.

/* ===================================================== */
/* ===== JANELAS (abrir, fechar, arrastar)           ===== */
/* ===================================================== */

let camadaJanela = 90;

function trazerParaFrente(janela) {
    camadaJanela++;
    janela.style.zIndex = camadaJanela;
}

function alternarJanela(id) {
    const janela = document.getElementById(id);

    if (janela.style.display === "flex") {
        fecharJanela(id);
        return;
    }

    janela.style.display = "flex";
    trazerParaFrente(janela);

    // na primeira vez, centraliza (cada janela um pouco deslocada)
    if (!janela.dataset.posicionada) {
        const abertas = document.querySelectorAll(".janela[data-posicionada]").length;
        const deslocamento = abertas * 30;
        const esquerda = (window.innerWidth - janela.offsetWidth) / 2 + deslocamento;
        janela.style.left = Math.max(8, esquerda) + "px";
        janela.style.top = Math.max(8, 175 + deslocamento) + "px";
        janela.dataset.posicionada = "sim";
    }

    if (id === "janela-rascunho") {
        prepararRascunho();
    }

    atualizarBotoesJanelas();
}

function fecharJanela(id) {
    document.getElementById(id).style.display = "none";
    atualizarBotoesJanelas();
}

function fecharTodasJanelas() {
    document.querySelectorAll(".janela").forEach((janela) => {
        janela.style.display = "none";
    });
    atualizarBotoesJanelas();
}

function atualizarBotoesJanelas() {
    document.querySelectorAll("[data-janela]").forEach((botao) => {
        const janela = document.getElementById(botao.dataset.janela);
        botao.classList.toggle("aberta", janela.style.display === "flex");
    });
}

// arrastar pela barra de título
document.querySelectorAll(".janela").forEach((janela) => {
    const topo = janela.querySelector(".janela-topo");

    janela.addEventListener("pointerdown", () => trazerParaFrente(janela));

    topo.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) {
            return;
        }

        const inicio = janela.getBoundingClientRect();
        const difX = e.clientX - inicio.left;
        const difY = e.clientY - inicio.top;
        topo.setPointerCapture(e.pointerId);

        function mover(ev) {
            const maxX = Math.max(0, window.innerWidth - janela.offsetWidth);
            const maxY = Math.max(0, window.innerHeight - topo.offsetHeight);
            const x = Math.min(Math.max(0, ev.clientX - difX), maxX);
            const y = Math.min(Math.max(0, ev.clientY - difY), maxY);
            janela.style.left = x + "px";
            janela.style.top = y + "px";
        }

        function soltar() {
            topo.removeEventListener("pointermove", mover);
            topo.removeEventListener("pointerup", soltar);
            topo.removeEventListener("pointercancel", soltar);
        }

        topo.addEventListener("pointermove", mover);
        topo.addEventListener("pointerup", soltar);
        topo.addEventListener("pointercancel", soltar);
    });
});

/* ===================================================== */
/* ===== HP-12C (modo RPN)                           ===== */
/* ===================================================== */

// [tecla, função com f (dourado), função com g (azul)]
const HP_TECLAS = [
    ["n", "AMORT", "12x"], ["i", "INT", "12÷"], ["PV", "NPV", "CF₀"], ["PMT", "RND", "CFj"], ["FV", "IRR", "Nj"],
    ["CHS", "", "DATE"], ["7", "", "BEG"], ["8", "", "END"], ["9", "", "MEM"], ["÷", "", ""],

    ["yˣ", "PRICE", "√x"], ["1/x", "YTM", "eˣ"], ["%T", "SL", "LN"], ["Δ%", "SOYD", "FRAC"], ["%", "DB", "INTG"],
    ["EEX", "", "ΔDYS"], ["4", "", "D.MY"], ["5", "", "M.DY"], ["6", "", "x̄w"], ["×", "", ""],

    ["R/S", "P/R", "PSE"], ["SST", "Σ", "BST"], ["R↓", "PRGM", "GTO"], ["x≷y", "FIN", "x≤y"], ["CLx", "REG", "x=0"],
    ["ENTER", "PREFIX", "LSTx"], ["1", "", "x̂,r"], ["2", "", "ŷ,r"], ["3", "", "n!"], ["−", "", ""],

    ["ON", "", ""], ["f", "", ""], ["g", "", ""], ["STO", "", ""], ["RCL", "", ""],
    ["0", "", "x̄"], [".", "", "s"], ["Σ+", "", "Σ−"], ["+", "", ""]
];

const HP_FINANCEIRAS = ["n", "i", "PV", "PMT", "FV"];

const hp = {};

function reiniciarHP() {
    hp.x = 0;
    hp.y = 0;
    hp.z = 0;
    hp.t = 0;
    hp.ultimoX = 0;
    hp.buffer = "";
    hp.digitando = false;
    hp.elevar = true;       // se o próximo número "empurra" a pilha
    hp.entrada = false;     // se o X acabou de ser digitado/calculado (tecla financeira armazena)
    hp.prefixo = null;      // "f" ou "g"
    hp.pendente = null;     // "STO" ou "RCL" esperando o registrador
    hp.casas = 2;
    hp.beg = false;
    hp.erro = null;
    hp.fin = { n: 0, i: 0, PV: 0, PMT: 0, FV: 0 };
    hp.reg = new Array(10).fill(0);
}

function montarHP() {
    const teclado = document.getElementById("hp-teclado");

    HP_TECLAS.forEach(([principal, rotuloF, rotuloG]) => {
        const tecla = document.createElement("button");
        tecla.className = "hp-tecla";

        if (principal === "f") tecla.classList.add("hp-f");
        if (principal === "g") tecla.classList.add("hp-g");
        if (principal === "ENTER") tecla.classList.add("hp-enter");

        tecla.innerHTML = `
            <span class="hp-rotulo-f">${rotuloF}</span>
            <span class="hp-principal">${principal}</span>
            <span class="hp-rotulo-g">${rotuloG}</span>
        `;
        tecla.addEventListener("click", () => teclaHP(principal));
        teclado.appendChild(tecla);
    });

    reiniciarHP();
    mostrarHP();
}

/* --- pilha --- */
function empurrarPilha() {
    hp.t = hp.z;
    hp.z = hp.y;
    hp.y = hp.x;
}

function inserirX(valor) {
    if (hp.elevar) {
        empurrarPilha();
    }
    hp.x = valor;
    hp.digitando = false;
    hp.elevar = true;
    hp.entrada = true;
}

function definirX(valor) {
    if (!isFinite(valor)) {
        hp.erro = "Error 0";
        return;
    }
    hp.x = valor;
    hp.digitando = false;
    hp.elevar = true;
    hp.entrada = true;
}

function unario(funcao) {
    hp.ultimoX = hp.x;
    definirX(funcao(hp.x));
}

function binario(funcao) {
    const resultado = funcao(hp.y, hp.x);
    if (!isFinite(resultado)) {
        hp.erro = "Error 0";
        return;
    }
    hp.ultimoX = hp.x;
    hp.x = resultado;
    hp.y = hp.z;
    hp.z = hp.t;
    hp.digitando = false;
    hp.elevar = true;
    hp.entrada = true;
}

/* --- digitação --- */
function iniciarDigitacao() {
    if (!hp.digitando) {
        if (hp.elevar) {
            empurrarPilha();
        }
        hp.buffer = "";
        hp.digitando = true;
    }
}

function digitarHP(caractere) {
    iniciarDigitacao();

    const digitos = hp.buffer.replace(/[^0-9]/g, "").length;

    if (caractere === ".") {
        if (hp.buffer.includes(".")) return;
        hp.buffer += hp.buffer === "" || hp.buffer === "-" ? "0." : ".";
    } else {
        if (digitos >= 10) return;
        hp.buffer += caractere;
    }

    hp.x = parseFloat(hp.buffer) || 0;
    hp.entrada = true;
}

/* --- teclas --- */
function teclaHP(tecla) {
    // qualquer tecla apaga a mensagem de erro
    if (hp.erro) {
        hp.erro = null;
        mostrarHP();
        return;
    }

    const prefixo = hp.prefixo;
    hp.prefixo = null;

    if (tecla === "f" || tecla === "g") {
        hp.prefixo = prefixo === tecla ? null : tecla;
        mostrarHP();
        return;
    }

    if (tecla === "ON") {
        reiniciarHP();
        mostrarHP();
        return;
    }

    const ehDigito = /^[0-9]$/.test(tecla);

    // STO ou RCL esperando o registrador (0–9 ou tecla financeira)
    if (hp.pendente) {
        const modo = hp.pendente;
        hp.pendente = null;

        if (ehDigito || HP_FINANCEIRAS.includes(tecla)) {
            const registro = ehDigito ? hp.reg : hp.fin;
            const chave = ehDigito ? Number(tecla) : tecla;

            if (modo === "STO") {
                registro[chave] = hp.x;
                hp.digitando = false;
                hp.elevar = true;
            } else {
                inserirX(registro[chave]);
            }
            mostrarHP();
            return;
        }
    }

    if (prefixo === "f") {
        acaoF(tecla, ehDigito);
    } else if (prefixo === "g") {
        acaoG(tecla);
    } else {
        acaoPrincipal(tecla, ehDigito);
    }

    mostrarHP();
}

function acaoPrincipal(tecla, ehDigito) {
    if (ehDigito || tecla === ".") {
        digitarHP(tecla);
        return;
    }

    if (HP_FINANCEIRAS.includes(tecla)) {
        teclaFinanceira(tecla);
        return;
    }

    switch (tecla) {
        case "ENTER":
            empurrarPilha();
            hp.digitando = false;
            hp.elevar = false;
            hp.entrada = true;
            break;

        case "CHS":
            if (hp.digitando) {
                hp.buffer = hp.buffer.startsWith("-") ? hp.buffer.slice(1) : "-" + hp.buffer;
                hp.x = parseFloat(hp.buffer) || 0;
            } else {
                hp.x = -hp.x;
            }
            hp.entrada = true;
            break;

        case "CLx":
            hp.x = 0;
            hp.digitando = false;
            hp.elevar = false;
            hp.entrada = true;
            break;

        case "x≷y": {
            const temp = hp.x;
            hp.x = hp.y;
            hp.y = temp;
            hp.digitando = false;
            hp.elevar = true;
            hp.entrada = true;
            break;
        }

        case "R↓": {
            const temp = hp.x;
            hp.x = hp.y;
            hp.y = hp.z;
            hp.z = hp.t;
            hp.t = temp;
            hp.digitando = false;
            hp.elevar = true;
            hp.entrada = true;
            break;
        }

        case "+": binario((y, x) => y + x); break;
        case "−": binario((y, x) => y - x); break;
        case "×": binario((y, x) => y * x); break;
        case "÷": binario((y, x) => y / x); break;
        case "yˣ": binario((y, x) => Math.pow(y, x)); break;
        case "1/x": unario((x) => 1 / x); break;

        // porcentagens: o Y continua na pilha
        case "%": hp.ultimoX = hp.x; definirX(hp.y * hp.x / 100); break;
        case "Δ%": hp.ultimoX = hp.x; definirX((hp.x - hp.y) / hp.y * 100); break;
        case "%T": hp.ultimoX = hp.x; definirX(hp.x / hp.y * 100); break;

        case "STO":
        case "RCL":
            hp.pendente = tecla;
            hp.digitando = false;
            break;

        // R/S, SST, EEX e Σ+ não são usados na prova
        default:
            break;
    }
}

function acaoF(tecla, ehDigito) {
    if (ehDigito) {
        hp.casas = Number(tecla); // f + número = casas decimais
        hp.digitando = false;
        hp.elevar = true;
        return;
    }

    if (tecla === "x≷y") {
        // CLEAR FIN
        hp.fin = { n: 0, i: 0, PV: 0, PMT: 0, FV: 0 };
    }

    if (tecla === "CLx") {
        // CLEAR REG: limpa pilha, registradores e financeiros
        const casas = hp.casas;
        const beg = hp.beg;
        reiniciarHP();
        hp.casas = casas;
        hp.beg = beg;
    }
}

function acaoG(tecla) {
    switch (tecla) {
        case "n": // 12x
            hp.x = hp.x * 12;
            hp.fin.n = hp.x;
            hp.digitando = false;
            hp.elevar = true;
            hp.entrada = false;
            break;
        case "i": // 12÷
            hp.x = hp.x / 12;
            hp.fin.i = hp.x;
            hp.digitando = false;
            hp.elevar = true;
            hp.entrada = false;
            break;
        case "7": hp.beg = true; break;   // BEG
        case "8": hp.beg = false; break;  // END
        case "yˣ": unario(Math.sqrt); break;
        case "1/x": unario(Math.exp); break;
        case "%T": unario(Math.log); break;
        case "Δ%": unario((x) => x - Math.trunc(x)); break;
        case "%": unario(Math.trunc); break;
        case "ENTER": inserirX(hp.ultimoX); break; // LSTx
        default: break;
    }
}

/* --- matemática financeira --- */
function teclaFinanceira(tecla) {
    // depois de digitar um número, a tecla ARMAZENA; sem digitação, ela CALCULA
    if (hp.entrada) {
        hp.fin[tecla] = hp.x;
        hp.digitando = false;
        hp.elevar = true;
        hp.entrada = false;
        return;
    }

    const valor = calcularTVM(tecla);

    if (!isFinite(valor)) {
        hp.erro = "Error 5";
        return;
    }

    hp.fin[tecla] = valor;
    if (hp.elevar) {
        empurrarPilha();
    }
    hp.x = valor;
    hp.digitando = false;
    hp.elevar = true;
    hp.entrada = false;
}

function equacaoTVM(taxa, f, b) {
    if (Math.abs(taxa) < 1e-12) {
        return f.PV + f.PMT * f.n + f.FV;
    }
    const q = Math.pow(1 + taxa, f.n);
    return f.PV * q + f.PMT * (1 + taxa * b) * (q - 1) / taxa + f.FV;
}

function calcularTVM(alvo) {
    const f = hp.fin;
    const b = hp.beg ? 1 : 0;
    const taxa = f.i / 100;
    const q = Math.pow(1 + taxa, f.n);
    const semJuros = Math.abs(taxa) < 1e-12;

    if (alvo === "FV") {
        if (semJuros) return -(f.PV + f.PMT * f.n);
        return -(f.PV * q + f.PMT * (1 + taxa * b) * (q - 1) / taxa);
    }

    if (alvo === "PV") {
        if (semJuros) return -(f.FV + f.PMT * f.n);
        return -(f.FV + f.PMT * (1 + taxa * b) * (q - 1) / taxa) / q;
    }

    if (alvo === "PMT") {
        if (semJuros) return f.n === 0 ? NaN : -(f.PV + f.FV) / f.n;
        return -(f.PV * q + f.FV) * taxa / ((1 + taxa * b) * (q - 1));
    }

    if (alvo === "n") {
        let periodos;
        if (semJuros) {
            periodos = f.PMT === 0 ? NaN : -(f.PV + f.FV) / f.PMT;
        } else {
            const a = f.PMT * (1 + taxa * b);
            const razao = (a - f.FV * taxa) / (a + f.PV * taxa);
            periodos = razao > 0 ? Math.log(razao) / Math.log(1 + taxa) : NaN;
        }
        // a HP-12C arredonda n para cima
        return periodos > 0 ? Math.ceil(periodos - 1e-9) : NaN;
    }

    if (alvo === "i") {
        // procura a taxa por varredura + bisseção
        let anterior = -0.99;
        let valorAnterior = equacaoTVM(anterior, f, b);

        for (let r = -0.99 + 0.0005; r <= 10; r += 0.0005) {
            const valor = equacaoTVM(r, f, b);

            if (Math.sign(valor) !== Math.sign(valorAnterior)) {
                let baixo = anterior;
                let alto = r;
                for (let k = 0; k < 100; k++) {
                    const meio = (baixo + alto) / 2;
                    if (Math.sign(equacaoTVM(meio, f, b)) === Math.sign(equacaoTVM(baixo, f, b))) {
                        baixo = meio;
                    } else {
                        alto = meio;
                    }
                }
                return ((baixo + alto) / 2) * 100;
            }

            anterior = r;
            valorAnterior = valor;
        }
        return NaN;
    }

    return NaN;
}

/* --- visor --- */
function formatarNumeroHP(valor) {
    valor = valor === 0 ? 0 : valor; // evita "-0,00"

    if (Math.abs(valor) >= 1e10) {
        return valor.toExponential(hp.casas).replace(".", ",");
    }

    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: hp.casas,
        maximumFractionDigits: hp.casas
    });
}

function formatarDigitacaoHP(texto) {
    const negativo = texto.startsWith("-");
    const semSinal = negativo ? texto.slice(1) : texto;
    const [inteiro, decimal] = semSinal.split(".");
    const inteiroFormatado = Number(inteiro || "0").toLocaleString("pt-BR");
    const temPonto = semSinal.includes(".");

    return (negativo ? "-" : "") + inteiroFormatado + (temPonto ? "," + decimal : "");
}

function mostrarHP() {
    let texto;

    if (hp.erro) {
        texto = hp.erro;
    } else if (hp.digitando) {
        texto = formatarDigitacaoHP(hp.buffer);
    } else {
        texto = formatarNumeroHP(hp.x);
    }

    document.getElementById("hp-visor").textContent = texto;

    const indicadores = [];
    if (hp.prefixo) indicadores.push(hp.prefixo);
    if (hp.beg) indicadores.push("BEGIN");
    if (hp.pendente) indicadores.push(hp.pendente);
    document.getElementById("hp-status").textContent = indicadores.join("   ");
}

/* ===================================================== */
/* ===== CALCULADORA COMUM                           ===== */
/* ===================================================== */

const calc = {
    atual: "0",
    acumulado: null,
    operador: null,
    novo: true,
    expressao: ""
};

function numeroCalc(texto) {
    return parseFloat(texto.replace(/\./g, "").replace(",", "."));
}

function formatarCalc(valor) {
    if (!isFinite(valor)) {
        return "Erro";
    }
    const arredondado = Math.round(valor * 1e10) / 1e10;
    return String(arredondado).replace(".", ",");
}

function calcularCalc() {
    const a = calc.acumulado;
    const b = numeroCalc(calc.atual);
    let resultado = b;

    if (calc.operador === "+") resultado = a + b;
    if (calc.operador === "−") resultado = a - b;
    if (calc.operador === "×") resultado = a * b;
    if (calc.operador === "÷") resultado = a / b;

    calc.atual = formatarCalc(resultado);
    calc.acumulado = resultado;
}

function teclaCalc(tecla) {
    if (calc.atual === "Erro" && tecla !== "C") {
        return;
    }

    if (/^[0-9]$/.test(tecla)) {
        if (calc.novo) {
            calc.atual = tecla;
            calc.novo = false;
        } else if (calc.atual.replace(/[^0-9]/g, "").length < 15) {
            calc.atual = calc.atual === "0" ? tecla : calc.atual + tecla;
        }
    } else if (tecla === ",") {
        if (calc.novo) {
            calc.atual = "0,";
            calc.novo = false;
        } else if (!calc.atual.includes(",")) {
            calc.atual += ",";
        }
    } else if (["+", "−", "×", "÷"].includes(tecla)) {
        if (calc.operador && !calc.novo) {
            calcularCalc();
        } else {
            calc.acumulado = numeroCalc(calc.atual);
        }
        calc.operador = tecla;
        calc.novo = true;
        calc.expressao = `${calc.atual} ${tecla}`;
    } else if (tecla === "=") {
        if (calc.operador) {
            calc.expressao = `${calc.expressao} ${calc.atual} =`;
            calcularCalc();
            calc.operador = null;
            calc.novo = true;
        }
    } else if (tecla === "%") {
        const valor = numeroCalc(calc.atual);
        const base = calc.operador ? calc.acumulado : 1;
        calc.atual = formatarCalc(calc.operador ? base * valor / 100 : valor / 100);
    } else if (tecla === "±") {
        if (calc.atual !== "0") {
            calc.atual = calc.atual.startsWith("-") ? calc.atual.slice(1) : "-" + calc.atual;
        }
    } else if (tecla === "⌫") {
        if (!calc.novo) {
            calc.atual = calc.atual.length > 1 ? calc.atual.slice(0, -1) : "0";
            if (calc.atual === "-") calc.atual = "0";
        }
    } else if (tecla === "C") {
        calc.atual = "0";
        calc.acumulado = null;
        calc.operador = null;
        calc.novo = true;
        calc.expressao = "";
    }

    document.getElementById("calc-atual").textContent = calc.atual;
    document.getElementById("calc-expressao").textContent = calc.expressao;
}

// teclado do computador na calculadora comum (quando ela está aberta)
document.addEventListener("keydown", (e) => {
    const janela = document.getElementById("janela-calc");
    if (janela.style.display !== "flex") return;
    if (e.target.matches("textarea, input")) return;

    const mapa = { "+": "+", "-": "−", "*": "×", "/": "÷", "Enter": "=", "=": "=", ",": ",", ".": ",", "%": "%", "Backspace": "⌫", "Delete": "C" };
    const tecla = /^[0-9]$/.test(e.key) ? e.key : mapa[e.key];

    if (tecla) {
        e.preventDefault();
        teclaCalc(tecla);
    }
});

/* ===================================================== */
/* ===== RASCUNHO (desenho livre)                    ===== */
/* ===================================================== */

let rascunhoPronto = false;
let modoBorracha = false;

function prepararRascunho() {
    if (rascunhoPronto) {
        return;
    }

    const canvas = document.getElementById("rascunho-canvas");
    const escala = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * escala;
    canvas.height = canvas.clientHeight * escala;

    const ctx = canvas.getContext("2d");
    ctx.scale(escala, escala);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let desenhando = false;

    canvas.addEventListener("pointerdown", (e) => {
        desenhando = true;
        canvas.setPointerCapture(e.pointerId);

        ctx.globalCompositeOperation = modoBorracha ? "destination-out" : "source-over";
        ctx.lineWidth = modoBorracha ? 18 : 2;
        ctx.strokeStyle = "#1e293b";

        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX + 0.1, e.offsetY);
        ctx.stroke();
    });

    canvas.addEventListener("pointermove", (e) => {
        if (!desenhando) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });

    canvas.addEventListener("pointerup", () => { desenhando = false; });
    canvas.addEventListener("pointercancel", () => { desenhando = false; });

    rascunhoPronto = true;
}

function alternarBorracha() {
    modoBorracha = !modoBorracha;
    document.getElementById("btnBorracha").classList.toggle("ativo", modoBorracha);
    document.getElementById("rascunho-canvas").style.cursor = modoBorracha ? "cell" : "crosshair";
}

function limparRascunho() {
    const canvas = document.getElementById("rascunho-canvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}

/* ===== INICIALIZAÇÃO ===== */
montarHP();
