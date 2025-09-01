# Respostas Teóricas – Teste de QA

## 1. O que é automação de testes e em quais situações você considera adequada?
Automação de testes é o uso de scripts e ferramentas para validar funcionalidades de forma repetitiva, confiável e rápida.  
**Adequada quando:**
- Testes regressivos frequentes e críticos.
- Cenários de alto risco (login, checkout, pagamentos).
- Execução em múltiplos navegadores/dispositivos.
- Rotinas repetitivas e demoradas se feitas manualmente.  

**Não adequada quando:**
- Funcionalidade instável ou em constante mudança.
- Testes exploratórios ou de usabilidade.  

---

## 2. Diferença entre testes funcionais, de regressão e smoke
- **Funcional:** valida uma funcionalidade específica contra requisitos definidos.  
- **Regressão:** garante que funcionalidades existentes continuam funcionando após mudanças.  
- **Smoke:** conjunto mínimo que verifica se a aplicação está estável o suficiente para testes mais profundos.  

---

## 3. Como estruturaria um projeto de testes automatizados em WebdriverIO
Estrutura sugerida:

/config
/tests
/pageobjects
/specs
/helpers
/reports
README.md
wdio.conf.js


**Boas práticas:**
- Uso do Page Object Model (POM) para desacoplar lógica de testes.  
- Seletores claros e estáveis (evitar XPath complexos).  
- Sincronização via `waitFor*` para reduzir flakiness.  
- Relatórios (ex.: Allure).  
- Hooks para setup/teardown e captura de evidências.


## 2. Perguntas de Cenários da automação
1. O que faria se o teste falhasse de forma intermitente?
Primeiro, identificaria o padrão da falha: se é ambiente, dados ou código. Testes intermitentes são mais perigosos que bugs comuns porque minam a confiança da automação. Aplicaria logs detalhados, screenshots e registros do ambiente para diagnosticar a causa. Se for um flaky test, priorizo a estabilização do teste ou isolo ele até que seja corrigido. Nunca ignoraria a falha.

2. Como garantir que os testes rodem em paralelo sem impactar o resultado?
A base é garantir isolamento completo: dados independentes, ambientes limpos, e evitar state sharing entre testes. Uso test containers, mocks quando necessário e boas práticas de design de testes para que cada execução seja idempotente. Paralelismo sem cuidado gera falsos positivos/falsos negativos — e isso destrói credibilidade da automação.

3. Qual importância de ter os testes rodando em uma pipeline?
Testes na pipeline são essenciais para feedback rápido, detectar regressões antes que cheguem em produção e reduzir custo de retrabalho. Isso também mantém a equipe alinhada e garante que cada commit seja validado de forma automatizada. Sem pipeline, automação perde valor estratégico: deixa de ser segurança e passa a ser só relatório.

4. Como você apontaria bugs que estão afetando diretamente a automação?
Registro o bug com evidências claras: logs, screenshots, steps precisos, e impacto direto na automação. Sempre contextualizo para o time de desenvolvimento o risco que esse bug representa — por exemplo, se impede testes críticos de rodar ou gera falsos negativos. Transparência e detalhamento são cruciais: quero que o time entenda que resolver aquele bug é prioridade, porque está travando a eficiência da QA.
