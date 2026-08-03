import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const assetVersion = '20260803-3';
const whatsapp = 'https://wa.me/5521990368159?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Thalita.';
const doctoralia = 'https://www.doctoralia.com.br/thalita-menezes-2/ginecologista/niteroi';
const instagram = 'https://www.instagram.com/magnoliaporthalita';
const linktree = 'https://linktr.ee/magnoliaporthalita';

function brand() {
  return `<span class="brand-symbol"><img src="/logo_contorno.png" alt="" width="493" height="324"></span><span class="brand-copy"><strong>MAGNÓLIA</strong><small>SAÚDE DA MULHER</small></span>`;
}

function socialLinks(extraClass = '') {
  return `<div class="social-links ${extraClass}" aria-label="Redes e perfis da Magnólia">
    <a href="${instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Magnólia"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.5" cy="6.6" r="1"></circle></svg></a>
    <a href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Magnólia"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.7Z"></path><path d="M8.3 7.5c.3-.7.7-.7 1-.7h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.5 0 .7.5 1 1.3 1.8 2.3 2.4.3.2.6.2.8 0l.9-1.1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.3.5.6 0 .4-.2 1.4-.7 1.8-.5.5-1.2.8-2 .8-.8 0-2.7-.4-4.6-2.1-1.5-1.3-2.5-2.9-2.8-3.8-.4-1-.4-2 .1-3Z"></path></svg></a>
    <a href="${linktree}" target="_blank" rel="noopener noreferrer" aria-label="Linktree da Magnólia"><svg class="linktree-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.4 2h3.2v5.4l3.8-3.8 2.3 2.3-4 4h5.7v3.2h-5.7l4 4-2.3 2.3-3.8-3.8V22h-3.2v-6.4l-3.8 3.8-2.3-2.3 4-4H2.6V9.9h5.7l-4-4 2.3-2.3 3.8 3.8V2Z"></path></svg></a>
    <a class="doctoralia-link" href="${doctoralia}" target="_blank" rel="noopener noreferrer" aria-label="Perfil da Dra. Thalita na Doctoralia"><img src="/doctoralia-symbol.svg" alt="" width="128" height="122"></a>
  </div>`;
}

function header() {
  return `
  <header class="site-header">
    <div class="shell nav-bar">
      <a class="brand" href="/" aria-label="Magnólia — Saúde da Mulher, página inicial">
        ${brand()}
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <details class="nav-dropdown">
          <summary>Cuidados</summary>
          <div class="nav-dropdown-menu">
            <a href="/cuidados/">Todos os cuidados</a>
            <a href="/cuidados/consulta-ginecologica/">Consulta ginecológica</a>
            <a href="/cuidados/climaterio-menopausa/">Climatério e menopausa</a>
            <a href="/cuidados/contracepcao/">Contracepção</a>
            <a href="/cuidados/saude-intima/">Saúde íntima</a>
            <a href="/cuidados/trh/">Terapia de reposição hormonal</a>
          </div>
        </details>
        <a href="/dra-thalita-amaral/">Dra. Thalita</a>
        <a href="/a-magnolia/">A Magnólia</a>
        <a href="/conteudos/">Conteúdos</a>
        <a href="/duvidas/">Dúvidas</a>
      </nav>
      ${socialLinks('header-socials')}
      <a class="button button--small header-cta" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Agendar consulta <span aria-hidden="true">↗</span></a>
      <button class="mobile-toggle" type="button" data-menu-button aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    </div>
    <nav class="mobile-panel" id="mobile-menu" data-mobile-panel aria-label="Navegação em dispositivos móveis">
      <a href="/cuidados/">Cuidados</a>
      <a href="/dra-thalita-amaral/">Dra. Thalita</a>
      <a href="/a-magnolia/">A Magnólia</a>
      <a href="/conteudos/">Conteúdos</a>
      <a href="/duvidas/">Dúvidas</a>
      <a href="/em-estruturacao/">Em estruturação</a>
      <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">Agendar consulta</a>
      ${socialLinks('mobile-socials')}
    </nav>
  </header>`;
}

function footer() {
  return `
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div class="footer-brand">
        <a class="brand brand--footer" href="/" aria-label="Magnólia — Saúde da Mulher, página inicial">${brand()}</a>
        <p>Cuidado ginecológico humano e individualizado em Niterói.</p>
        ${socialLinks('footer-socials')}
      </div>
      <div>
        <strong>Cuidados</strong>
        <div class="footer-links">
          <a href="/cuidados/consulta-ginecologica/">Consulta ginecológica</a>
          <a href="/cuidados/climaterio-menopausa/">Climatério e menopausa</a>
          <a href="/cuidados/contracepcao/">Contracepção</a>
          <a href="/cuidados/saude-intima/">Saúde íntima</a>
          <a href="/cuidados/trh/">Terapia de reposição hormonal</a>
        </div>
      </div>
      <div>
        <strong>Magnólia</strong>
        <div class="footer-links">
          <a href="/dra-thalita-amaral/">Dra. Thalita Amaral</a>
          <a href="/a-magnolia/">A clínica</a>
          <a href="/conteudos/">Conteúdos</a>
          <a href="/duvidas/">Dúvidas</a>
          <a href="/em-estruturacao/">Em estruturação</a>
        </div>
      </div>
      <div>
        <strong>Contato</strong>
        <p>Av. Sete de Setembro, 317, sala 405<br>Jardim Icaraí · Niterói/RJ</p>
        <div class="footer-links">
          <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="${instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="${linktree}" target="_blank" rel="noopener noreferrer">Linktree</a>
          <a href="${doctoralia}" target="_blank" rel="noopener noreferrer">Doctoralia</a>
        </div>
      </div>
    </div>
    <div class="shell footer-legal"><span>© <span data-year>2026</span> Magnólia Saúde da Mulher. Conteúdo educativo; não substitui avaliação médica individual.</span><span><a href="/politica-de-privacidade/">Política de Privacidade</a> · <a href="/termos-de-uso/">Termos de Uso</a></span></div>
  </footer>
  <a class="floating-whatsapp" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp"><span>✦</span> Agendar consulta</a>`;
}

function layout({ title, description, path = '/', body, schema = '' }) {
  const canonical = `https://magnoliasdm.com.br${path}`;
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#18382d">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/site.css?v=${assetVersion}">
  ${schema}
</head>
<body>
${header()}
<main>${body}</main>
${footer()}
<script src="/assets/site.js?v=${assetVersion}" defer></script>
</body>
</html>`;
}

function pageHero({ eyebrow, title, lead, crumbs = '', image = '' }) {
  return `<section class="page-hero">
    <div class="shell page-hero-grid">
      <div data-reveal>
        ${crumbs ? `<div class="breadcrumb">${crumbs}</div>` : ''}
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
        <div class="actions"><a class="button" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Agendar consulta <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="page-hero-visual ${image ? 'page-hero-visual--photo' : 'page-hero-visual--brand'}" data-reveal>${image ? `<img src="${image}" alt="" width="900" height="900">` : '<img class="page-hero-logo" src="/log_marca_contorno.png" alt="Magnólia por Thalita Menezes" width="527" height="413">'}</div>
    </div>
  </section>`;
}

function contactSection() {
  return `<section class="section section--forest">
    <div class="shell contact-grid">
      <div data-reveal>
        <p class="eyebrow eyebrow--light">Atendimento em Niterói</p>
        <h2>Seu cuidado pode começar com uma conversa.</h2>
        <p class="lead">Fale com a equipe da Magnólia para consultar horários e receber as orientações para o atendimento.</p>
        <div class="actions"><a class="button button--light" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="contact-card" data-reveal>
        <h3>Magnólia Saúde da Mulher</h3>
        <p>Av. Sete de Setembro, 317 — sala 405<br>Jardim Icaraí · Niterói/RJ · CEP 24230-251</p>
        <p>Atendimento particular, presencial e online conforme indicação e disponibilidade.</p>
      </div>
    </div>
  </section>`;
}

const services = [
  {
    slug: 'consulta-ginecologica',
    title: 'Consulta ginecológica',
    eyebrow: 'Cuidado integral',
    description: 'Uma avaliação completa da saúde da mulher, com prevenção, investigação de sintomas e um plano de cuidado individualizado.',
    direct: 'A consulta ginecológica organiza prevenção, sintomas, exames e decisões de saúde em uma avaliação individualizada. A proposta é compreender a paciente como um todo, sem reduzir o atendimento a uma queixa isolada.',
    when: ['Consulta de rotina e prevenção', 'Alterações do ciclo menstrual', 'Dor pélvica ou dor na relação sexual', 'Corrimentos, coceira ou desconforto íntimo', 'Dúvidas sobre métodos contraceptivos', 'Revisão de exames e acompanhamento'],
    evaluated: ['história clínica, ciclo e sintomas', 'antecedentes pessoais e familiares', 'medicações, hábitos e objetivos', 'necessidade de exame físico ou exames complementares', 'plano de prevenção e acompanhamento'],
    faq: [
      ['Preciso ter uma queixa para marcar?', 'Não. A consulta também é indicada para prevenção, atualização de exames e planejamento do cuidado.'],
      ['O atendimento pode ser online?', 'Algumas demandas podem ser avaliadas online. Quando houver necessidade de exame físico ou procedimento, será orientado atendimento presencial.'],
      ['Quais exames devo levar?', 'Leve exames recentes, receitas, lista de medicações e informações sobre cirurgias ou tratamentos anteriores.']
    ]
  },
  {
    slug: 'climaterio-menopausa',
    title: 'Climatério e menopausa',
    eyebrow: 'Uma nova fase',
    description: 'Avaliação dos sintomas, riscos e possibilidades de cuidado durante a transição menopausal e depois dela.',
    direct: 'Climatério é a fase de transição que antecede e sucede a menopausa. O acompanhamento avalia sintomas, saúde óssea e cardiovascular, sono, sexualidade e qualidade de vida para definir opções seguras e personalizadas.',
    when: ['Ondas de calor e suor noturno', 'Alterações do sono ou do humor', 'Ressecamento e desconforto vaginal', 'Queda de libido', 'Mudanças no ciclo menstrual', 'Dúvidas sobre terapia hormonal'],
    evaluated: ['intensidade e impacto dos sintomas', 'histórico ginecológico e cardiovascular', 'saúde óssea e metabólica', 'sono, humor e sexualidade', 'benefícios, riscos e preferências terapêuticas'],
    faq: [
      ['Toda mulher precisa de terapia hormonal?', 'Não. A indicação depende dos sintomas, riscos, contraindicações e preferências de cada paciente.'],
      ['Menopausa é confirmada somente por exame?', 'Na maioria das mulheres, idade, história menstrual e sintomas orientam o diagnóstico. Exames são solicitados quando realmente ajudam.'],
      ['Ressecamento vaginal tem tratamento?', 'Sim. Existem opções locais e sistêmicas, escolhidas conforme o quadro clínico e a segurança individual.']
    ]
  },
  {
    slug: 'contracepcao',
    title: 'Contracepção',
    eyebrow: 'Escolha informada',
    description: 'Orientação para escolher o método contraceptivo de acordo com sua saúde, rotina, prioridades e planos de vida.',
    direct: 'O melhor método contraceptivo é aquele que combina segurança clínica, eficácia, preferência pessoal e adaptação à rotina. A consulta compara possibilidades sem impor uma escolha única.',
    when: ['Início ou troca de método', 'Efeitos adversos com o método atual', 'Esquecimentos frequentes da pílula', 'Dúvidas sobre DIU ou implante contraceptivo', 'Contracepção após os 40 anos', 'Planejamento reprodutivo'],
    evaluated: ['histórico de saúde e contraindicações', 'padrão menstrual e sintomas', 'rotina e facilidade de uso', 'efeitos desejados e possíveis efeitos adversos', 'preferências e planos futuros'],
    faq: [
      ['Existe anticoncepcional certo para todo mundo?', 'Não. O método precisa ser escolhido individualmente porque riscos, benefícios e preferências variam entre mulheres.'],
      ['DIU é uma opção para quem nunca teve filhos?', 'Pode ser. A indicação depende da avaliação clínica e da escolha informada da paciente.'],
      ['A consulta inclui colocação do método?', 'A avaliação e a orientação acontecem primeiro. Quando houver indicação de procedimento, a equipe informa preparo, valores e disponibilidade.']
    ]
  },
  {
    slug: 'saude-intima',
    title: 'Saúde íntima',
    eyebrow: 'Conforto e bem-estar',
    description: 'Investigação cuidadosa de sintomas vulvovaginais, dor, corrimentos e mudanças que afetam o conforto e a vida sexual.',
    direct: 'Sintomas íntimos podem ter causas infecciosas, hormonais, dermatológicas, musculares ou relacionadas ao uso de produtos e medicamentos. A avaliação correta evita tratamentos repetidos sem diagnóstico.',
    when: ['Corrimento recorrente', 'Coceira, ardência ou odor diferente', 'Dor durante ou depois da relação', 'Ressecamento ou fissuras', 'Dor vulvar persistente', 'Alterações após a menopausa'],
    evaluated: ['características e duração dos sintomas', 'produtos e tratamentos já utilizados', 'relação com ciclo, atividade sexual ou menopausa', 'necessidade de exame físico e testes', 'medidas de cuidado e tratamento específico'],
    faq: [
      ['Todo corrimento é infecção?', 'Não. A secreção vaginal pode ser fisiológica ou estar ligada a diferentes condições. Cor, odor e sintomas associados ajudam na avaliação.'],
      ['Dor na relação é normal?', 'Não deve ser naturalizada. A dor merece investigação porque pode ter diferentes causas e tratamentos.'],
      ['Posso usar medicamento por conta própria?', 'O uso repetido sem diagnóstico pode mascarar sintomas ou piorar desequilíbrios locais. O ideal é avaliar a causa.']
    ]
  },
  {
    slug: 'trh',
    title: 'Terapia de reposição hormonal (TRH)',
    eyebrow: 'Cuidado no climatério',
    description: 'Avaliação individualizada dos sintomas e da segurança da terapia hormonal durante o climatério e a menopausa.',
    direct: 'A terapia de reposição hormonal pode ser considerada para algumas mulheres com sintomas do climatério ou da menopausa. A decisão é individual: considera intensidade dos sintomas, idade, tempo desde a menopausa, histórico de saúde, contraindicações e preferências da paciente.',
    when: ['Ondas de calor ou suor noturno', 'Sono prejudicado pelos sintomas', 'Ressecamento e desconforto vaginal', 'Sintomas com impacto na qualidade de vida', 'Dúvidas sobre benefícios e riscos da terapia hormonal', 'Necessidade de revisar um tratamento já iniciado'],
    evaluated: ['sintomas e seu impacto na rotina', 'histórico ginecológico, cardiovascular e familiar', 'fatores de risco e contraindicações', 'saúde óssea e metabólica quando pertinente', 'via, dose, duração e acompanhamento adequados ao caso'],
    faq: [
      ['Toda mulher na menopausa precisa de TRH?', 'Não. A indicação depende dos sintomas, do perfil de risco, das contraindicações e da preferência de cada paciente.'],
      ['Existe apenas um tipo de terapia hormonal?', 'Não. Há diferentes hormônios, doses e vias de uso. A escolha precisa ser individualizada e acompanhada.'],
      ['TRH é o mesmo que implante hormonal?', 'Não. Implantes são uma forma específica de administração e permanecem em estruturação na Magnólia. A consulta de TRH não implica indicação de implantes.']
    ]
  }
];

function servicePage(service) {
  const faq = service.faq.map(([q, a]) => `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('');
  const serviceNav = services.map((item) => `<a href="/cuidados/${item.slug}/">${item.title}</a>`).join('');
  return layout({
    title: `${service.title} em Niterói | Magnólia`,
    description: service.description,
    path: `/cuidados/${service.slug}/`,
    body: `${pageHero({ eyebrow: service.eyebrow, title: service.title, lead: service.description, crumbs: '<a href="/">Início</a> · <a href="/cuidados/">Cuidados</a>' })}
      <section class="section">
        <div class="shell service-layout">
          <aside class="service-aside" data-reveal>
            <strong>Outros cuidados</strong>
            ${serviceNav}
            <div class="actions"><a class="button button--small" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Agendar</a></div>
          </aside>
          <article class="service-copy" data-reveal>
            <h2>O que você precisa saber</h2>
            <div class="answer-box"><strong>Resposta direta</strong>${service.direct}</div>
            <h2>Quando procurar atendimento?</h2>
            <ul>${service.when.map((item) => `<li>${item}</li>`).join('')}</ul>
            <h2>O que é avaliado?</h2>
            <ul>${service.evaluated.map((item) => `<li>${item}</li>`).join('')}</ul>
            <h2>Como funciona o cuidado</h2>
            <div class="process-grid">
              <div class="process-card"><span>01</span><h3>Escuta</h3><p>Entendimento dos sintomas, contexto, antecedentes e objetivos.</p></div>
              <div class="process-card"><span>02</span><h3>Avaliação</h3><p>Exame e investigação apenas quando contribuem para a decisão clínica.</p></div>
              <div class="process-card"><span>03</span><h3>Plano</h3><p>Orientações e condutas explicadas de forma clara e individualizada.</p></div>
            </div>
            <h2>Perguntas frequentes</h2>
            <div class="faq-list">${faq}</div>
          </article>
        </div>
      </section>
      ${contactSection()}`
  });
}

const home = layout({
  title: 'Ginecologista em Niterói | Dra. Thalita Amaral | Magnólia',
  description: 'Cuidado ginecológico humano e individualizado em Niterói com a Dra. Thalita Amaral. Prevenção, climatério, contracepção, saúde íntima e TRH.',
  path: '/',
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalClinic","name":"Magnólia Saúde da Mulher","url":"https://magnoliasdm.com.br/","medicalSpecialty":"Gynecologic","address":{"@type":"PostalAddress","streetAddress":"Avenida Sete de Setembro, 317, sala 405","addressLocality":"Niterói","addressRegion":"RJ","postalCode":"24230-251","addressCountry":"BR"}}</script>`,
  body: `
    <section class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy" data-reveal>
          <div class="care-pill">✦ &nbsp; Ginecologia em Niterói</div>
          <h1>Cuidado ginecológico completo, humano e individualizado.</h1>
          <p class="lead">Consulta presencial e online com a Dra. Thalita Amaral. Prevenção, climatério, contracepção, saúde íntima e terapia de reposição hormonal.</p>
          <div class="actions">
            <a class="button" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Agendar consulta <span aria-hidden="true">↗</span></a>
            <a class="button button--ghost" href="/dra-thalita-amaral/">Conheça a Dra. Thalita</a>
          </div>
          <div class="credentials">CRM-RJ 920347 &nbsp;•&nbsp; RQE 53626</div>
        </div>
        <div class="hero-art" data-reveal>
          <div class="hero-image-frame"><img src="/hero-sensorial.webp" alt="Mulher em ambiente acolhedor com uma magnólia em primeiro plano" width="1600" height="900"></div>
        </div>
      </div>
    </section>
    <section class="trust-strip">
      <div class="shell trust-row">
        <div class="trust-item"><span>✓</span> Atendimento particular</div>
        <div class="trust-item"><span>⌖</span> Jardim Icaraí · Niterói</div>
        <a class="trust-item" href="${doctoralia}" target="_blank" rel="noopener noreferrer"><span>✦</span> Perfil profissional na Doctoralia</a>
        <div class="trust-item"><span>◌</span> Consulta presencial e online</div>
      </div>
    </section>
    <section class="section" id="cuidados">
      <div class="shell">
        <div class="heading-row" data-reveal>
          <div><p class="eyebrow">Como podemos cuidar de você?</p><h2>Cuidado para diferentes momentos da vida.</h2></div>
          <p class="lead">Encontre o atendimento a partir do que você sente, da fase que está vivendo ou da decisão que precisa tomar.</p>
        </div>
        <div class="care-grid">
          <a class="care-card care-card--accent" href="/cuidados/consulta-ginecologica/" data-reveal><span class="care-card__number">01</span><span class="care-card__arrow">↗</span><h3>Consulta ginecológica</h3><p>Prevenção, sintomas, exames e plano de cuidado completo.</p></a>
          <a class="care-card" href="/cuidados/climaterio-menopausa/" data-reveal><span class="care-card__number">02</span><span class="care-card__arrow">↗</span><h3>Climatério e menopausa</h3><p>Sintomas, sexualidade, sono, ossos e decisões terapêuticas.</p></a>
          <a class="care-card" href="/cuidados/contracepcao/" data-reveal><span class="care-card__number">03</span><span class="care-card__arrow">↗</span><h3>Contracepção</h3><p>Escolha segura e informada do método contraceptivo.</p></a>
          <a class="care-card" href="/cuidados/saude-intima/" data-reveal><span class="care-card__number">04</span><span class="care-card__arrow">↗</span><h3>Saúde íntima</h3><p>Corrimentos, dor, ressecamento e desconfortos vulvovaginais.</p></a>
          <a class="care-card" href="/cuidados/trh/" data-reveal><span class="care-card__number">05</span><span class="care-card__arrow">↗</span><h3>Terapia de reposição hormonal</h3><p>Avaliação individualizada de sintomas, benefícios e riscos.</p></a>
        </div>
        <div class="actions"><a class="text-link" href="/cuidados/">Ver todos os cuidados <span>→</span></a></div>
      </div>
    </section>
    <section class="section section--forest">
      <div class="shell journey-grid">
        <div class="journey-intro" data-reveal><p class="eyebrow eyebrow--light">Método Magnólia</p><h2>Um atendimento que começa pela escuta.</h2><p class="lead">Informação clara e decisões compartilhadas em todas as etapas.</p></div>
        <div class="journey-list" data-reveal>
          <div class="journey-step"><div><h3>Entender você</h3><p>Queixas, histórico, rotina, exames, receios e objetivos são acolhidos sem pressa.</p></div></div>
          <div class="journey-step"><div><h3>Avaliar com propósito</h3><p>Exames e procedimentos são indicados quando realmente contribuem para a decisão.</p></div></div>
          <div class="journey-step"><div><h3>Construir o plano</h3><p>Você entende as alternativas, benefícios, limites e próximos passos.</p></div></div>
          <div class="journey-step"><div><h3>Acompanhar</h3><p>O cuidado continua conforme sua necessidade e sua fase de vida.</p></div></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="shell doctor-grid">
        <div class="doctor-photo" data-reveal><img src="/dra-thalita-consultorio.jpg" alt="Dra. Thalita Amaral em seu consultório" width="1364" height="2048" loading="lazy"><div class="doctor-note"><strong>Dra. Thalita Amaral</strong>Ginecologista · CRM-RJ 920347 · RQE 53626</div></div>
        <div data-reveal><p class="eyebrow">Sua médica</p><h2>Experiência clínica com cuidado próximo.</h2><p class="lead">A Dra. Thalita do Amaral Menezes Teixeira é médica especialista em Ginecologia e Obstetrícia, com atuação voltada hoje ao cuidado ginecológico integral da mulher.</p><ul class="fact-list"><li>Residência médica no Hospital Naval Marcílio Dias.</li><li>Especialização em ultrassonografia ginecológica e mamografia.</li><li>Atendimento particular, presencial e online.</li><li>Conteúdo e condutas revisados sob responsabilidade médica.</li></ul><div class="actions"><a class="button" href="/dra-thalita-amaral/">Conheça a trajetória</a><a class="text-link" href="${doctoralia}" target="_blank" rel="noopener noreferrer">Ver Doctoralia ↗</a></div></div>
      </div>
    </section>
    <section class="section section--soft">
      <div class="shell">
        <div class="heading-row" data-reveal><div><p class="eyebrow">Conteúdos</p><h2>Informação para decidir com mais segurança.</h2></div><p class="lead">Respostas claras para as dúvidas que mais aparecem no consultório e nas pesquisas das pacientes.</p></div>
        <div class="content-grid">
          <a class="content-card" href="/conteudos/#climaterio" data-reveal><div class="content-card__visual"></div><div class="content-card__body"><small>Climatério</small><h3>Menopausa: quais sintomas merecem avaliação?</h3><span class="text-link">Ler conteúdo →</span></div></a>
          <a class="content-card" href="/conteudos/#contracepcao" data-reveal><div class="content-card__visual"></div><div class="content-card__body"><small>Contracepção</small><h3>Como escolher um método contraceptivo?</h3><span class="text-link">Ler conteúdo →</span></div></a>
          <a class="content-card" href="/conteudos/#saude-intima" data-reveal><div class="content-card__visual"></div><div class="content-card__body"><small>Saúde íntima</small><h3>Corrimento vaginal: quando procurar atendimento?</h3><span class="text-link">Ler conteúdo →</span></div></a>
        </div>
      </div>
    </section>
    <section class="section"><div class="shell"><div class="soon-panel" data-reveal><p class="eyebrow eyebrow--light">Em estruturação</p><h2>Novas frentes de cuidado serão apresentadas quando estiverem prontas.</h2><p>Ultrassonografia, cuidado da obesidade e implantes estão em desenvolvimento clínico e operacional. Ainda não são apresentados como serviços disponíveis.</p><div class="soon-tags"><span>Ultrassonografia</span><span>Obesidade</span><span>Implantes</span></div><a class="button button--light" href="/em-estruturacao/">Entenda esta etapa</a></div></div></section>
    <section class="section section--soft"><div class="shell faq-grid"><div class="faq-intro" data-reveal><p class="eyebrow">Dúvidas frequentes</p><h2>Antes de agendar.</h2><a class="text-link" href="/duvidas/">Ver todas as respostas →</a></div><div class="faq-list" data-reveal><details><summary>A consulta é particular?<span>+</span></summary><p>Sim. O atendimento é particular. A clínica pode emitir documentação para tentativa de reembolso, conforme as regras do plano da paciente.</p></details><details><summary>Posso fazer consulta online?<span>+</span></summary><p>Sim, para demandas compatíveis com teleatendimento. Quando houver necessidade de exame físico ou procedimento, será orientada consulta presencial.</p></details><details><summary>Como faço para agendar?<span>+</span></summary><p>O agendamento é realizado pelo WhatsApp. A equipe informa horários, valores e orientações.</p></details></div></div></section>
    ${contactSection()}`
});

const careHub = layout({
  title: 'Cuidados ginecológicos em Niterói | Magnólia',
  description: 'Conheça os cuidados ginecológicos da Magnólia: consulta, climatério, menopausa, contracepção, saúde íntima e terapia de reposição hormonal.',
  path: '/cuidados/',
  body: `${pageHero({ eyebrow: 'Cuidados', title: 'Encontre o cuidado que faz sentido para você.', lead: 'Organizamos os atendimentos por necessidades reais da mulher — prevenção, sintomas, fases de vida e decisões de saúde.', crumbs: '<a href="/">Início</a>' })}
    <section class="section"><div class="shell"><div class="heading-row"><div><p class="eyebrow">Atendimentos disponíveis</p><h2>Ginecologia com visão integral.</h2></div><p class="lead">Cada página explica quando procurar, o que é avaliado e como funciona o cuidado.</p></div><div class="service-index">${services.map((s, i) => `<a class="care-card ${i === 0 ? 'care-card--accent' : ''}" href="/cuidados/${s.slug}/" data-reveal><span class="care-card__number">0${i + 1}</span><span class="care-card__arrow">↗</span><h3>${s.title}</h3><p>${s.description}</p></a>`).join('')}</div></div></section>
    <section class="section section--soft"><div class="shell"><p class="eyebrow">Você pode começar pelo sintoma</p><h2>O que está incomodando?</h2><div class="symptom-row"><a href="/cuidados/saude-intima/">Corrimento vaginal</a><a href="/cuidados/saude-intima/">Dor na relação</a><a href="/cuidados/climaterio-menopausa/">Ondas de calor</a><a href="/cuidados/consulta-ginecologica/">Sangramento irregular</a><a href="/cuidados/consulta-ginecologica/">Dor pélvica</a><a href="/cuidados/contracepcao/">Escolher contraceptivo</a><a href="/cuidados/trh/">Dúvidas sobre TRH</a><a href="/cuidados/consulta-ginecologica/">Check-up ginecológico</a></div></div></section>
    ${contactSection()}`
});

const doctorPage = layout({
  title: 'Dra. Thalita Amaral | Ginecologista em Niterói',
  description: 'Conheça a formação, experiência e abordagem de cuidado da Dra. Thalita Amaral, ginecologista em Niterói.',
  path: '/dra-thalita-amaral/',
  body: `${pageHero({ eyebrow: 'Dra. Thalita Amaral', title: 'Medicina com experiência, escuta e clareza.', lead: 'Ginecologista em Niterói, dedicada a um cuidado feminino individualizado, baseado em evidências e decisões compartilhadas.', crumbs: '<a href="/">Início</a>', image: '/dra-thalita-consultorio.jpg' })}
    <section class="section"><div class="shell about-grid"><div data-reveal><p class="eyebrow">Trajetória</p><h2>Formação sólida para um cuidado próximo.</h2><p class="lead">Dra. Thalita do Amaral Menezes Teixeira é médica especialista em Ginecologia e Obstetrícia, com residência no Hospital Naval Marcílio Dias e experiência clínica dedicada à saúde da mulher.</p><p class="muted">Possui especialização em ultrassonografia ginecológica e mamografia. Sua atuação atual na Magnólia prioriza prevenção, climatério e menopausa, contracepção, saúde íntima e avaliação individualizada de terapia hormonal.</p><ul class="fact-list"><li>CRM-RJ 920347</li><li>RQE 53626</li><li>Atendimento particular em Niterói</li><li>Consulta presencial e online conforme indicação</li></ul><div class="actions"><a class="button" href="${doctoralia}" target="_blank" rel="noopener noreferrer">Perfil na Doctoralia ↗</a></div></div><div class="doctor-photo" data-reveal><img src="/dra-thalita-congresso.jpeg" alt="Dra. Thalita Amaral em atualização científica" width="1600" height="1066" loading="lazy"></div></div></section>
    <section class="section section--soft"><div class="shell doctor-gallery"><figure data-reveal><img src="/dra-thalita-rhia.jpeg" alt="Dra. Thalita Amaral no congresso de reposição hormonal e implantes" width="1200" height="1600" loading="lazy"><figcaption>Atualização científica contínua em saúde da mulher.</figcaption></figure><div data-reveal><p class="eyebrow">Atualização profissional</p><h2>Ciência aplicada com responsabilidade.</h2><p class="lead">A participação em congressos e atividades de educação médica continuada sustenta uma prática que revê evidências, limites e critérios de segurança antes de cada decisão clínica.</p><p class="muted">Formação e participação em eventos não significam indicação automática de procedimentos. Cada opção é discutida conforme o quadro e as preferências da paciente.</p></div></div></section>
    <section class="section section--forest"><div class="shell journey-grid"><div><p class="eyebrow eyebrow--light">Princípios de atendimento</p><h2>Informação também é cuidado.</h2></div><div class="journey-list"><div class="journey-step"><div><h3>Escuta sem julgamento</h3><p>O contexto e as preferências da paciente fazem parte da decisão clínica.</p></div></div><div class="journey-step"><div><h3>Condutas explicadas</h3><p>Benefícios, riscos, alternativas e limites são apresentados com clareza.</p></div></div><div class="journey-step"><div><h3>Continuidade</h3><p>O plano é revisto conforme sintomas, exames e fase de vida.</p></div></div></div></div></section>
    ${contactSection()}`
});

const aboutPage = layout({
  title: 'A Magnólia Saúde da Mulher | Niterói',
  description: 'Conheça a Magnólia Saúde da Mulher, clínica ginecológica em Niterói criada para oferecer cuidado humano, claro e individualizado.',
  path: '/a-magnolia/',
  body: `${pageHero({ eyebrow: 'A Magnólia', title: 'Um espaço pensado para a mulher ser ouvida.', lead: 'A Magnólia nasceu para unir competência clínica, acolhimento e uma experiência de cuidado organizada em torno da paciente.', crumbs: '<a href="/">Início</a>', image: '/hero-sensorial.webp' })}
    <section class="section"><div class="shell heading-row"><div><p class="eyebrow">Nosso propósito</p><h2>Cuidar com tempo, contexto e individualidade.</h2></div><p class="lead">A proposta não é criar uma consulta padronizada, mas uma jornada em que a paciente compreende o próprio quadro e participa das decisões.</p></div><div class="shell values-grid"><div class="value-card" data-reveal><span>01</span><h3>Escuta</h3><p class="muted">A queixa é recebida dentro da história, da rotina e da fase de vida.</p></div><div class="value-card" data-reveal><span>02</span><h3>Clareza</h3><p class="muted">Explicações objetivas para que decisões médicas façam sentido.</p></div><div class="value-card" data-reveal><span>03</span><h3>Continuidade</h3><p class="muted">Acompanhamento proporcional à necessidade, sem excesso de intervenções.</p></div></div></section>
    <section class="section section--soft"><div class="shell about-grid"><div class="about-photo" data-reveal><img src="/dra-thalita-consultorio.jpg" alt="Dra. Thalita Amaral no espaço da Magnólia" width="1364" height="2048" loading="lazy"></div><div data-reveal><p class="eyebrow">Experiência Magnólia</p><h2>Ginecologia com identidade própria.</h2><p class="lead">Ambiente reservado, atendimento particular e comunicação direta com a equipe.</p><ul class="fact-list"><li>Localização no Jardim Icaraí, em Niterói.</li><li>Atendimento presencial e online conforme a demanda.</li><li>Avaliação clínica individualizada e decisões compartilhadas.</li><li>Conteúdo médico revisado e responsável.</li></ul></div></div></section>
    ${contactSection()}`
});

const contentPage = layout({
  title: 'Conteúdos sobre saúde da mulher | Magnólia',
  description: 'Conteúdos claros sobre ginecologia, climatério, menopausa, contracepção, saúde íntima e terapia de reposição hormonal.',
  path: '/conteudos/',
  body: `${pageHero({ eyebrow: 'Conteúdos', title: 'Respostas confiáveis para dúvidas reais.', lead: 'Uma biblioteca editorial organizada pelas perguntas que as mulheres fazem no consultório e nos mecanismos de busca.', crumbs: '<a href="/">Início</a>' })}
    <section class="section"><div class="shell article-list">
      <article class="article-card" id="climaterio" data-reveal><small>Climatério e menopausa</small><h2>Menopausa: quais sintomas merecem avaliação?</h2><p class="muted">Ondas de calor, sono, humor, libido e alterações geniturinárias podem ter impacto relevante na qualidade de vida.</p><a class="text-link" href="/cuidados/climaterio-menopausa/">Ver guia clínico →</a></article>
      <article class="article-card" id="contracepcao" data-reveal><small>Contracepção</small><h2>Como escolher o melhor método para mim?</h2><p class="muted">Segurança, eficácia, rotina, efeitos desejados e preferências precisam ser considerados juntos.</p><a class="text-link" href="/cuidados/contracepcao/">Ver guia clínico →</a></article>
      <article class="article-card" id="saude-intima" data-reveal><small>Saúde íntima</small><h2>Corrimento vaginal: quando é necessário investigar?</h2><p class="muted">Nem toda secreção é doença. Sintomas associados e exame direcionam a conduta correta.</p><a class="text-link" href="/cuidados/saude-intima/">Ver guia clínico →</a></article>
      <article class="article-card" data-reveal><small>Prevenção</small><h2>O que faz parte de um check-up ginecológico?</h2><p class="muted">A prevenção depende da idade, do histórico, dos sintomas e dos exames já realizados.</p><a class="text-link" href="/cuidados/consulta-ginecologica/">Ver guia clínico →</a></article>
      <article class="article-card" data-reveal><small>Terapia hormonal</small><h2>TRH: para quem a avaliação pode fazer sentido?</h2><p class="muted">Sintomas, perfil de risco, contraindicações e preferências precisam ser considerados antes de qualquer indicação.</p><a class="text-link" href="/cuidados/trh/">Ver guia clínico →</a></article>
      <article class="article-card" data-reveal><small>Saúde íntima</small><h2>Dor durante a relação sexual não deve ser normalizada.</h2><p class="muted">Causas hormonais, musculares, inflamatórias e ginecológicas podem estar envolvidas.</p><a class="text-link" href="/cuidados/saude-intima/">Ver guia clínico →</a></article>
    </div></section>${contactSection()}`
});

const faqPage = layout({
  title: 'Dúvidas frequentes | Magnólia Saúde da Mulher',
  description: 'Respostas sobre consulta ginecológica, agendamento, teleatendimento, exames, climatério, contracepção e saúde íntima.',
  path: '/duvidas/',
  body: `${pageHero({ eyebrow: 'Dúvidas', title: 'Informação clara antes, durante e depois da consulta.', lead: 'Reunimos as perguntas mais frequentes sobre atendimento, preparo, exames e os cuidados oferecidos pela Magnólia.', crumbs: '<a href="/">Início</a>' })}
    <section class="section"><div class="shell faq-grid"><div class="faq-intro"><p class="eyebrow">Atendimento</p><h2>Perguntas frequentes.</h2><p class="lead">Se sua dúvida não estiver aqui, fale com a equipe pelo WhatsApp.</p></div><div class="faq-list">
      <details open><summary>A consulta é particular?<span>+</span></summary><p>Sim. A Magnólia trabalha com atendimento particular. A emissão de documentação para reembolso pode ser solicitada, respeitando as regras do convênio.</p></details>
      <details><summary>Como funciona o agendamento?<span>+</span></summary><p>A equipe informa horários, modalidade, valor e orientações pelo WhatsApp. A confirmação segue as regras apresentadas no momento da reserva.</p></details>
      <details><summary>Há consulta online?<span>+</span></summary><p>Sim, quando a demanda é adequada ao teleatendimento. Se houver necessidade de exame físico ou procedimento, será orientado atendimento presencial.</p></details>
      <details><summary>O que levar à consulta?<span>+</span></summary><p>Leve exames recentes, receitas, lista de medicamentos e informações sobre tratamentos e cirurgias anteriores.</p></details>
      <details><summary>A ultrassonografia já está disponível na Magnólia?<span>+</span></summary><p>A ultrassonografia está em estruturação e ainda não possui agenda aberta. A consulta ginecológica segue disponível normalmente.</p></details>
      <details><summary>A Magnólia atende climatério e menopausa?<span>+</span></summary><p>Sim. A avaliação aborda sintomas, qualidade de vida, sexualidade, saúde óssea e cardiovascular, além das possibilidades terapêuticas.</p></details>
      <details><summary>TRH, obesidade e implantes já estão disponíveis?<span>+</span></summary><p>A avaliação clínica para TRH está disponível. Obesidade e implantes permanecem em estruturação e serão divulgados somente após definição completa dos protocolos e da operação.</p></details>
      <details><summary>A Magnólia oferece acompanhamento obstétrico?<span>+</span></summary><p>Não. O portfólio atual é direcionado ao cuidado ginecológico e não inclui serviços de Obstetrícia.</p></details>
    </div></div></section>${contactSection()}`
});

const soonPage = layout({
  title: 'Serviços em estruturação | Magnólia',
  description: 'Conheça as frentes de ultrassonografia, obesidade e implantes que estão em estruturação na Magnólia e ainda não possuem agenda aberta.',
  path: '/em-estruturacao/',
  body: `${pageHero({ eyebrow: 'Em estruturação', title: 'Novas frentes, apresentadas somente quando estiverem prontas.', lead: 'Ultrassonografia, cuidado da obesidade e implantes estão em desenvolvimento clínico, operacional e regulatório. Ainda não há agenda aberta.', crumbs: '<a href="/">Início</a>' })}
    <section class="section"><div class="shell"><div class="values-grid"><div class="value-card" data-reveal><span>01</span><h3>Ultrassonografia</h3><p class="muted">Estruturação de agenda, fluxo de atendimento, preparo e integração dos laudos ao cuidado clínico.</p></div><div class="value-card" data-reveal><span>02</span><h3>Obesidade</h3><p class="muted">Estruturação do cuidado longitudinal, equipe, protocolos e integração de dados.</p></div><div class="value-card" data-reveal><span>03</span><h3>Implantes</h3><p class="muted">Análise de indicações, segurança, consentimentos, operação e acompanhamento.</p></div></div><div class="answer-box narrow" style="margin-top:60px"><strong>Transparência</strong>Esta página não representa oferta ou indicação desses tratamentos. A comunicação definitiva será publicada quando o serviço estiver formalmente disponível.</div></div></section>${contactSection()}`
});

const ultrasoundStatusPage = layout({
  title: 'Ultrassonografia em estruturação | Magnólia',
  description: 'O serviço de ultrassonografia da Magnólia está em estruturação e ainda não possui agenda aberta.',
  path: '/cuidados/ultrassonografia/',
  body: `${pageHero({ eyebrow: 'Em estruturação', title: 'Ultrassonografia ainda não está disponível.', lead: 'A operação do serviço está sendo organizada. Quando houver agenda, preparo e fluxo definidos, as informações serão publicadas nesta página.', crumbs: '<a href="/">Início</a> · <a href="/em-estruturacao/">Em estruturação</a>' })}
    <section class="section"><div class="shell narrow"><div class="answer-box"><strong>O que permanece disponível</strong>A consulta ginecológica continua atendendo prevenção, sintomas e investigação clínica. Quando necessário, a médica poderá orientar a realização de exames de imagem em serviço externo.</div><div class="actions"><a class="button" href="/cuidados/consulta-ginecologica/">Conhecer a consulta ginecológica</a></div></div></section>${contactSection()}`
});

const privacyPage = layout({
  title: 'Política de Privacidade | Magnólia Saúde da Mulher',
  description: 'Saiba como a Magnólia Saúde da Mulher trata dados pessoais no site e nos canais de contato.',
  path: '/politica-de-privacidade/',
  body: `${pageHero({ eyebrow: 'Documento legal', title: 'Política de Privacidade', lead: 'Esta política explica como os dados pessoais podem ser coletados e tratados nos canais digitais da Magnólia Saúde da Mulher.', crumbs: '<a href="/">Início</a>', image: '' })}
    <section class="section"><article class="shell legal-copy">
      <p class="legal-updated">Última atualização: 3 de agosto de 2026.</p>
      <h2>1. Quem é responsável pelo tratamento</h2><p>A Magnólia Saúde da Mulher é responsável pelos dados tratados por meio do site <a href="https://magnoliasdm.com.br/">magnoliasdm.com.br</a> e de seus canais oficiais. Dúvidas e solicitações podem ser enviadas para <a href="mailto:magnoliasdm@gmail.com">magnoliasdm@gmail.com</a>.</p>
      <h2>2. Quais dados podem ser coletados</h2><p>Podemos receber dados de contato, como nome, telefone e e-mail, além das informações que você decide enviar por formulários, WhatsApp ou outros canais. Durante a navegação, registros técnicos como endereço IP, tipo de navegador, dispositivo, páginas visitadas e cookies podem ser processados para segurança e funcionamento do site.</p>
      <div class="legal-alert"><strong>Dados de saúde</strong><p>Evite enviar informações médicas sensíveis por formulários públicos. Informações clínicas devem ser compartilhadas somente pelos canais orientados pela equipe e quando necessárias ao atendimento.</p></div>
      <h2>3. Para quais finalidades</h2><ul><li>responder solicitações e viabilizar o contato com a equipe;</li><li>organizar informações sobre agendamento e atendimento;</li><li>manter a segurança, a disponibilidade e o funcionamento do site;</li><li>cumprir obrigações legais e regulatórias;</li><li>produzir estatísticas agregadas para melhoria da experiência.</li></ul>
      <h2>4. Bases legais e compartilhamento</h2><p>O tratamento poderá ocorrer, conforme o caso, para execução de procedimentos solicitados pela titular, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse ou consentimento. Dados podem ser compartilhados com fornecedores essenciais de hospedagem, comunicação, segurança e tecnologia, limitados ao necessário para a prestação do serviço.</p>
      <h2>5. Cookies e serviços de terceiros</h2><p>Cookies estritamente necessários podem ser usados para o funcionamento do site. Links para WhatsApp, Instagram, Linktree, Doctoralia, mapas e outros serviços levam a ambientes de terceiros, sujeitos às políticas próprias dessas plataformas.</p>
      <h2>6. Armazenamento e segurança</h2><p>Adotamos medidas técnicas e organizacionais razoáveis para reduzir riscos de acesso indevido, alteração, perda ou divulgação. Nenhuma transmissão ou armazenamento digital é absolutamente infalível; por isso, mantemos práticas de prevenção e resposta compatíveis com a operação.</p>
      <h2>7. Seus direitos</h2><p>Nos termos da Lei Geral de Proteção de Dados, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação quando aplicável, informação sobre compartilhamento, portabilidade nos limites legais e revogação do consentimento. Poderemos solicitar comprovação de identidade para proteger a titular dos dados.</p>
      <h2>8. Atualizações e contato</h2><p>Esta política poderá ser atualizada para refletir mudanças legais, técnicas ou operacionais. A versão vigente e sua data de atualização permanecerão publicadas nesta página. Para exercer direitos ou esclarecer dúvidas, escreva para <a href="mailto:magnoliasdm@gmail.com">magnoliasdm@gmail.com</a>.</p>
    </article></section>`
});

const termsPage = layout({
  title: 'Termos de Uso | Magnólia Saúde da Mulher',
  description: 'Conheça as regras de utilização do site da Magnólia Saúde da Mulher.',
  path: '/termos-de-uso/',
  body: `${pageHero({ eyebrow: 'Documento legal', title: 'Termos de Uso', lead: 'Ao acessar este site, você concorda com as condições abaixo. Leia o documento antes de continuar a navegação.', crumbs: '<a href="/">Início</a>', image: '' })}
    <section class="section"><article class="shell legal-copy">
      <p class="legal-updated">Vigente desde junho de 2024. Revisado em 3 de agosto de 2026.</p>
      <h2>1. Uso do site</h2><p>O acesso ao site da Magnólia Saúde da Mulher é gratuito e atribui à pessoa visitante a condição de usuária destes Termos. O conteúdo deve ser utilizado de forma lícita, ética e compatível com sua finalidade informativa.</p>
      <h2>2. Informação médica e atendimento</h2><div class="legal-alert"><strong>Conteúdo educativo</strong><p>As informações publicadas não substituem consulta, diagnóstico, prescrição ou atendimento de urgência. Em caso de sintomas importantes ou emergência, procure um serviço de saúde adequado.</p></div>
      <h2>3. Dados pessoais</h2><p>O tratamento de dados pessoais relacionado ao uso do site segue a versão vigente da nossa <a href="/politica-de-privacidade/">Política de Privacidade</a>.</p>
      <h2>4. Propriedade intelectual</h2><p>Textos, identidade visual, fotografias, ilustrações, marcas e demais elementos do site pertencem à Magnólia Saúde da Mulher ou são utilizados mediante autorização. Nenhum direito de reprodução, adaptação ou exploração comercial é concedido sem autorização expressa.</p>
      <h2>5. Links externos</h2><p>O site pode conter links para plataformas de terceiros, como WhatsApp, Instagram, Linktree e Doctoralia. Cada serviço possui regras e práticas próprias. A Magnólia não controla a disponibilidade, o conteúdo ou o tratamento de dados realizado nesses ambientes externos.</p>
      <h2>6. Disponibilidade e alterações</h2><p>O site poderá ser atualizado, suspenso ou interrompido, no todo ou em parte, por razões técnicas, operacionais ou legais. Os serviços apresentados também podem mudar conforme disponibilidade e organização clínica. Informações de agenda devem ser confirmadas diretamente com a equipe.</p>
      <h2>7. Conduta da pessoa usuária</h2><p>Não é permitido tentar comprometer a segurança do site, acessar áreas não autorizadas, inserir código malicioso, usar o conteúdo de maneira ilícita ou violar direitos de terceiros.</p>
      <h2>8. Atualização dos termos</h2><p>Estes Termos podem ser modificados. A versão atualizada passa a valer a partir de sua publicação nesta página. A continuidade do uso após a alteração representa ciência das novas condições.</p>
      <h2>9. Contato</h2><p>Dúvidas sobre estes Termos podem ser encaminhadas para <a href="mailto:magnoliasdm@gmail.com">magnoliasdm@gmail.com</a>.</p>
    </article></section>`
});

const outputs = new Map([
  ['index.html', home],
  ['cuidados/index.html', careHub],
  ['dra-thalita-amaral/index.html', doctorPage],
  ['a-magnolia/index.html', aboutPage],
  ['conteudos/index.html', contentPage],
  ['duvidas/index.html', faqPage],
  ['em-estruturacao/index.html', soonPage],
  ['cuidados/ultrassonografia/index.html', ultrasoundStatusPage],
  ['politica-de-privacidade/index.html', privacyPage],
  ['termos-de-uso/index.html', termsPage]
]);

for (const service of services) outputs.set(`cuidados/${service.slug}/index.html`, servicePage(service));

for (const [relativePath, content] of outputs) {
  const fullPath = join(root, relativePath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content, 'utf8');
}

console.log(`Protótipo gerado: ${outputs.size} páginas.`);
