# Plano de Testes – SauceDemo

## 1. Escopo
Automação de testes Web no site [SauceDemo](https://www.saucedemo.com/v1/), com foco na funcionalidade de **login**.  
Usuários de teste fornecidos pelo sistema:
- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`  
Senha padrão: `secret_sauce`.

## 2. Riscos
- **Login** é funcionalidade crítica → bloqueia acesso ao inventário.  
- Usuários diferentes apresentam comportamentos distintos que precisam ser validados.  
- Performance pode afetar experiência do usuário (caso `performance_glitch_user`).  

## 3. Casos de Teste Mínimos
1. **Login válido (usuário padrão)**  
   - Dado usuário `standard_user` + senha correta  
   - Quando efetuar login  
   - Então deve ser redirecionado para inventário.  

2. **Usuário bloqueado**  
   - Dado usuário `locked_out_user`  
   - Quando efetuar login  
   - Então deve exibir mensagem de erro.  

3. **Usuário problemático**  
   - Dado usuário `problem_user`  
   - Quando efetuar login  
   - Então deve carregar inventário, mas com inconsistências (ex.: imagens quebradas).  

4. **Performance glitch user**  
   - Dado usuário `performance_glitch_user`  
   - Quando efetuar login  
   - Então deve carregar inventário, mas com atraso maior que o normal.  

5. **Login inválido (senha incorreta)**  
   - Dado usuário válido  
   - Quando digitar senha incorreta  
   - Então deve exibir mensagem de erro.  

6. **Campos vazios**  
   - Dado usuário não preencher login/senha  
   - Quando clicar em login  
   - Então deve exibir mensagens de obrigatoriedade.  

## 4. Critérios de Aceite
- Todos os cenários descritos devem estar automatizados.  
- Uso de boas práticas de Page Object Model.  
- Seletores claros (`id`, `name`, `data-test`).  
- Relatório de execução acessível (Allure).  