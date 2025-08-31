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