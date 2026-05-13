// script.js

const respostas = {
  "o que é ia": "A Inteligência Artificial, também chamada de IA, é uma tecnologia criada para simular capacidades humanas como aprendizado, interpretação de informações, reconhecimento de padrões e tomada de decisões. Ela já está presente no nosso dia a dia em aplicativos, redes sociais, assistentes virtuais, carros inteligentes, hospitais, bancos e empresas. A IA funciona utilizando algoritmos e grandes quantidades de dados para aprender e melhorar suas respostas com o tempo.",

  "o que é inteligência artificial": "Inteligência Artificial é um ramo da computação desenvolvido para criar sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana. Isso inclui reconhecer imagens, entender linguagem, analisar dados, responder perguntas e até criar conteúdos. Atualmente, a IA está transformando a forma como trabalhamos, estudamos e nos comunicamos.",

  "ia e emprego": "A relação entre IA e emprego gera muitos debates. A tecnologia pode substituir funções repetitivas e automatizadas, principalmente em áreas operacionais e administrativas. Porém, ao mesmo tempo, ela também cria novas oportunidades de trabalho ligadas à tecnologia, análise de dados, programação, automação e segurança digital. O grande desafio é a adaptação dos profissionais às novas exigências do mercado.",

  "ia e produtividade": "A Inteligência Artificial aumenta a produtividade porque consegue executar tarefas de forma rápida, organizada e com menos erros. Empresas utilizam IA para automatizar processos, analisar grandes volumes de dados e melhorar a tomada de decisões. Isso permite economizar tempo, reduzir custos e aumentar a eficiência em diversos setores.",

  "desemprego tecnológico": "O desemprego tecnológico acontece quando máquinas, robôs ou sistemas inteligentes substituem trabalhadores humanos em determinadas funções. Isso geralmente ocorre em atividades repetitivas e previsíveis. Apesar disso, a história mostra que novas tecnologias também criam novas profissões e áreas de atuação. Por isso, a qualificação profissional se torna cada vez mais importante.",

  "vantagens da ia": "A IA oferece diversas vantagens para empresas e trabalhadores. Entre as principais estão a automação de tarefas repetitivas, aumento da produtividade, redução de erros humanos, maior rapidez na análise de informações e melhoria na tomada de decisões. Além disso, a IA também ajuda em áreas como saúde, educação, transporte e segurança.",

  "desvantagens da ia": "Apesar dos benefícios, a IA também apresenta desafios importantes. Entre eles estão o risco de desemprego tecnológico, dependência excessiva da tecnologia, preocupações com privacidade de dados e desigualdade no acesso às novas ferramentas digitais. Outro ponto importante é a necessidade constante de atualização profissional.",

  "relações de trabalho": "As relações de trabalho mudaram bastante com o avanço da tecnologia e da Inteligência Artificial. Hoje muitas empresas utilizam sistemas automatizados para selecionar currículos, organizar equipes, monitorar produtividade e facilitar a comunicação. Isso trouxe mais agilidade, mas também aumentou discussões sobre privacidade, saúde mental e equilíbrio entre vida pessoal e trabalho.",

  "trabalho remoto": "O trabalho remoto cresceu muito com o avanço das tecnologias digitais e da IA. Ferramentas inteligentes ajudam em reuniões online, organização de tarefas, comunicação entre equipes e automação de processos. Esse modelo trouxe mais flexibilidade para muitos trabalhadores, mas também exige disciplina e adaptação.",

  "profissões do futuro": "As profissões do futuro estarão fortemente ligadas à tecnologia e inovação. Áreas como Inteligência Artificial, programação, segurança digital, análise de dados, automação e robótica devem crescer bastante nos próximos anos. Ao mesmo tempo, habilidades humanas como criatividade, comunicação e liderança continuarão sendo muito valorizadas.",

  "ética na ia": "A ética na Inteligência Artificial envolve questões relacionadas à privacidade, segurança de dados, transparência dos algoritmos e respeito aos direitos humanos. Especialistas defendem que a IA deve ser utilizada de forma responsável, evitando discriminação, vigilância excessiva e decisões injustas automatizadas.",

  "qualificação profissional": "A qualificação profissional tornou-se essencial no mercado atual. Com o avanço da IA e da automação, trabalhadores precisam desenvolver tanto habilidades técnicas quanto competências humanas. Cursos, treinamentos e aprendizado contínuo ajudam os profissionais a se adaptarem às mudanças do mercado de trabalho.",

  "ia no brasil": "No Brasil, a Inteligência Artificial vem crescendo em áreas como bancos, comércio digital, agronegócio, saúde e educação. Muitas empresas já utilizam sistemas inteligentes para automatizar processos, melhorar atendimentos e analisar informações. Apesar do crescimento, ainda existem desafios relacionados à qualificação profissional e acesso à tecnologia.",

  "futuro do trabalho": "O futuro do trabalho será marcado pela colaboração entre humanos e máquinas. Muitas tarefas repetitivas serão automatizadas, enquanto atividades que exigem criatividade, pensamento crítico e inteligência emocional continuarão dependendo das pessoas. A tendência é que o mercado valorize profissionais adaptáveis e preparados tecnologicamente.",

  "machine learning": "Machine Learning, ou aprendizado de máquina, é uma área da Inteligência Artificial em que os sistemas aprendem automaticamente através de dados e experiências. Quanto mais informações o sistema recebe, melhor ele consegue identificar padrões e realizar previsões.",

  "deep learning": "Deep Learning é uma tecnologia baseada em redes neurais artificiais inspiradas no funcionamento do cérebro humano. Ela é muito utilizada em reconhecimento facial, tradução automática, carros autônomos e sistemas avançados de análise de imagens e voz.",

  "automação": "Automação é o uso de máquinas, softwares ou sistemas inteligentes para executar tarefas automaticamente. Ela é muito utilizada em indústrias, empresas e serviços para aumentar a produtividade, reduzir custos e melhorar a eficiência dos processos.",

  "produtividade": "Produtividade é a capacidade de produzir mais utilizando menos tempo e recursos. A IA ajuda a aumentar a produtividade ao automatizar tarefas, reduzir erros, organizar informações e acelerar processos de trabalho.",

  "ia na educação": "Na educação, a IA vem sendo utilizada para personalizar o aprendizado, corrigir atividades automaticamente e auxiliar professores na organização das aulas. Plataformas inteligentes conseguem identificar dificuldades dos alunos e adaptar os conteúdos conforme suas necessidades.",

  "ia na saúde": "Na saúde, a Inteligência Artificial auxilia em diagnósticos, análise de exames, cirurgias robóticas e monitoramento de pacientes. Sistemas inteligentes conseguem analisar grandes volumes de dados médicos rapidamente, ajudando médicos a tomarem decisões mais precisas.",

  "ia nas empresas": "As empresas utilizam IA para melhorar produtividade, automatizar processos, analisar dados e atender clientes de forma mais rápida. Chatbots, sistemas de recomendação e análise de comportamento do consumidor são alguns exemplos do uso da IA no ambiente empresarial.",

  "ia e sociedade": "A IA está transformando a sociedade em diversos aspectos, desde a comunicação até o mercado de trabalho. Apesar dos benefícios tecnológicos, também existem preocupações relacionadas à desigualdade social, privacidade e impacto nas profissões tradicionais."
};

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function adicionarMensagem(texto, tipo) {
  const mensagem = document.createElement("div");
  mensagem.classList.add("message");
  mensagem.classList.add(tipo);
  mensagem.textContent = texto;

  chatBox.appendChild(mensagem);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function buscarResposta(pergunta) {
  const texto = pergunta.toLowerCase();

  for (let chave in respostas) {
    if (texto.includes(chave)) {
      return respostas[chave];
    }
  }

  return "Ainda não tenho uma resposta específica para isso. Tente perguntar sobre IA, emprego, produtividade, automação ou ética.";
}

function enviarMensagem() {
  const pergunta = userInput.value.trim();

  if (pergunta === "") return;

  adicionarMensagem(pergunta, "user-message");

  const resposta = buscarResposta(pergunta);

  setTimeout(() => {
    adicionarMensagem(resposta, "bot-message");
  }, 500);

  userInput.value = "";
}

function preencherPergunta(texto) {
  userInput.value = texto;
}

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    enviarMensagem();
  }
});
