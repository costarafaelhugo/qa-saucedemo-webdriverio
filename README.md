# qa-saucedemo-webdriverio
Automação de testes Web com WebdriverIO aplicada no site SauceDemo# Projeto de Automação de Testes - SauceDemo WebdriverIO

## 📋 Sobre o Projeto

Este projeto consiste em uma suíte completa de testes automatizados para o site SauceDemo, desenvolvida com WebdriverIO seguindo as melhores práticas de automação. A estrutura foi organizada para garantir maintainability, escalabilidade e confiabilidade dos testes.

## 🎯 Cenários de Teste Implementados

### ✅ Login com Sucesso (`login.success.spec.js`)
- Valida autenticação bem-sucedida com usuário padrão
- Verifica redirecionamento para página de inventário

### ❌ Login com Credenciais Inválidas (`login.invalid.spec.js`)
- Testa mensagens de erro para diversos cenários:
  - Senha incorreta
  - Usuário inexistente
  - Campos obrigatórios vazios

### 🔒 Login com Usuário Bloqueado (`login.locked.spec.js`)
- Valida restrição de acesso para usuário bloqueado
- Verifica mensagem de erro específica

### ⚡ Login com Problema de Performance (`login.performance.spec.js`)
- Monitora tempo de resposta do sistema
- Identifica possíveis lentidões no login

### 🐛 Login com Usuário Problemático (`login.problem.spec.js`)
- Testa comportamento com usuário de problemas conhecidos
- Valida redirecionamento apesar de inconsistências

## 🏗️ Estrutura do Projeto

```
qa-saucedemo-webdriverio/
├── 📁 doc/
│   ├── plano_de_testes.md
│   └── respostas_teoricas.md
├── 📁 test/
│   ├── 📁 pageobjects/
│   │   ├── page.js (classe base)
│   │   ├── login.page.js
│   │   ├── inventory.page.js
│   │   └── secure.page.js
│   └── 📁 specs/
│       ├── login.success.spec.js
│       ├── login.invalid.spec.js
│       ├── login.locked.spec.js
│       ├── login.performance.spec.js
│       └── login.problem.spec.js
├── ⚙️ wdio.conf.js (configuração principal)
├── 📋 package.json
├── 📝 README.md
└── 🔒 .gitignore
```

## 🛠️ Tecnologias e Padrões

- **WebdriverIO v8**: Framework moderno de automação
- **Mocha**: Framework de testes com BDD syntax
- **Page Object Pattern**: Separação clara entre specs e page objects
- **ES6 Modules**: Sintaxe moderna JavaScript
- **CSS Selectors**: Seletores robustos e maintainable

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar todos os testes
npx wdio run wdio.conf.js

# Executar teste específico
npx wdio run wdio.conf.js --spec ./test/specs/login.success.spec.js

# Executar em modo debug
npx wdio run wdio.conf.js --logLevel debug
```

## 🔧 Configurações Principais

- **Browser**: Chrome
- **Timeout**: 10s para waits implícitos
- **Relatórios**: Spec reporter para output claro
- **PageLoad Strategy**: Normal
- **Execução**: Local com ChromeDriver

## 📊 Critérios de Qualidade Implementados

### ✅ Organização do Código
- Page Object Model bem implementado
- Separação clara entre concerns
- Código limpo e seguindo boas práticas

### ✅ Seletores Robustos
- Uso de `[data-test]` attributes quando disponíveis
- CSS selectors simples e eficientes
- Evitado XPath complexo desnecessário

### ✅ Sincronização Adequada
- Waits explícitos com `waitUntil`
- Timeouts configurados apropriadamente
- Espera inteligente por elementos

### ✅ Tratamento de Erros
- Asserções específicas para cada cenário
- Mensagens de erro claras e descritivas
- Validações completas do estado da aplicação

## 🎯 Abordagem de Teste

A estratégia de teste focou em cobrir os principais fluxos de login com diferentes tipos de usuários, priorizando os cenários mais críticos para o negócio. Cada spec testa um comportamento específico do sistema, permitindo isolamento e debugging eficiente.

## 📈 Próximas Melhorias Possíveis

1. **✅ Relatórios HTML** com screenshots automatizados
2. **✅ Integração CI/CD** com GitHub Actions
3. **✅ Testes Cross-Browser** (Firefox, Safari)
4. **✅ Testes de API** complementares
5. **✅ Dashboard** de resultados e métricas
6. **✅ Testes em Paralelo** para faster feedback

## 📝 Documentação Adicional

Consulte os documentos na pasta `doc/` para:
- 📋 `plano_de_testes.md`: Estratégia completa de teste
- 📚 `respostas_teoricas.md`: Respostas teóricas sobre automação

---

**Nota**: Este projeto foi desenvolvido como parte de um processo de avaliação técnica, demonstrando habilidades em automação de testes Web com WebdriverIO seguindo melhores práticas do mercado.
