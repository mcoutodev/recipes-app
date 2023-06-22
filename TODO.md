
    *  Rotas

      As rotas a serem utilizadas na aplicação devem ser as seguintes:

      * Tela de login: `/`;
      * Tela principal de receitas de comidas: `/meals`;
      * Tela principal de receitas de bebidas: `/drinks`;
      * Tela de detalhes de uma receita de comida: `/meals/:id-da-receita`;
      * Tela de detalhes de uma receita de bebida: `/drinks/:id-da-receita`;
      * Tela de receita em progresso de comida: `/meals/:id-da-receita/in-progress`;
      * Tela de receita em progresso de bebida: `/drinks/:id-da-receita/in-progress`;
      * Tela de perfil: `/profile`;
      * Tela de receitas feitas: `/done-recipes`;
      * Tela de receitas favoritas: `/favorite-recipes`.
   
      



## Tela de login

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Login.js`.
> - 🔗 A rota usada para essa tela deve ser `/`.

### 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

  <summary><strong>O que será verificado</strong></summary>

 - [ ] email-input, password-input e login-submit-btn.
</details><br />

---

### 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha


  -  [ ] A possibilidade de escrever o email no input do email.
  -  [ ] A possibilidade de escrever a senha no input de senha.


---

### 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos


<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos;
  * Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`;
  * Caso o formulário esteja válido, o botão de submeter deve estar ativado, não contendo a propriedade `disabled`.

  -  [ ] O botão deve estar desativado se o email for inválido
  - [ ] O botão deve estar desativado se a senha deve 6 caracteres ou menos
  - [ ] O botão deve estar ativado se o email e a senha forem válidos

</details><br />

---

### 5 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login



  -  [ ] A rota muda para a tela principal de receitas de comidas.


---

## Header


### 6 - Implemente o header de acordo com a necessidade de cada tela

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O Header deve ter os seguintes elementos: 
    * [ ] Ícone de perfil ;
    *  [ ] Ícone de pesquisa  que deverá estar presente somente em alguma páginas (conforme a lista abaixo);
    *  [ ] Título da página, que deverá estar sempre presente.

  * Cada página deverá ter seu próprio título, que será renderizado pelo Header.
</details>

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Rota "/": **não** possui header
  - Rota "/meals": possui o header com o título "Meals" e os ícones de perfil e pesquisa
  - Rota "/drinks": possui o header com o título "Drinks" e os ícones de perfil e pesquisa
  - Rota "/meals/:id-da-receita": **não** possui header
  - Rota "/drinks/:id-da-receita": **não** possui header
  - Rota "/meals/:id-da-receita/in-progress": **não** possui header
  - Rota "/drinks/:id-da-receita/in-progress": **não** possui header
  - Rota "/profile": possui o header com o título "Profile" e o ícone de perfil, mas **sem** o ícone de pesquisa
  - Rota "/done-recipes": possui o header com o título "Done Recipes" e o ícone de perfil, mas **sem** o ícone de pesquisa
  - Rota "/favorite-recipes": possui o header com o título "Favorite Recipes" e o ícone de perfil, mas **sem** o ícone de pesquisa
</details>

---

### 7 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil


  - Após clicar no botão de perfil , verifica se:
    -  [ ] A rota muda para a tela de perfil `/profile`
    -  [ ]  O título do header muda para "Profile"


---

### 8 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la


  <summary><strong>O que será verificado</strong></summary>
  
  - [ ] Se ao clicar no botão de busca pela primeira vez, a barra de busca aparece.
  - [ ] Se ao clicar no botão de busca pela segunda vez, a barra de busca desaparece;

---

## Barra de busca - Header


### 9 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo


  - [ ] O radio button de busca de ingrediente
  - [ ] O radio button de busca por nome
  - [ ]  O radio button de busca da primeira letra
  - [ ] O botão de busca 



---

### 10 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

  - [ ] Se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - [ ] Se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - [ ] Se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - [ ] Se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert

---

### 11 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

  - [ ] Na tela de bebidas, se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - [ ] Na tela de bebidas, se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - [ ] Na tela de bebidas, se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - [ ] Na tela de bebidas, se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert

---
### 12 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

  - [ ] Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/meals/:id-da-receita`);
- [ ] Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/:id-da-receita`).


---

### 13 - Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma


  - [ ] Exiba as 12 primeiras receitas que forem retornadas pela busca.
  - [ ] Caso a busca retorne menos do que 12 receitas, exiba todas elas.
  - [ ] Cada receita deve ser exibida em um elemento que contenha as suas informações.
  - [ ] Exiba a imagem e o nome de cada receita.



---

### 14 - Exiba um `alert` caso nenhuma receita seja encontrada


  - [ ] Se caso nenhuma comida seja encontrada o alert deve ser exibido.
  - [ ] Se caso nenhuma bebida seja encontrada o alert deve ser exibido.



---

## Menu inferior


### 15 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

  
  - [ ] Se o menu inferior existe e contém os ícones corretos
  - [ ] Se o menu inferior está fixado sempre ao final da página.


---

### 16 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo


  - [ ]  Rota "/": **não** deve ter footer
  - [ ] Rota "/meals": deve ter footer
  - [ ] Rota "/drinks": deve ter footer
  - [ ] Rota "/meals/:id-da-receita": **não** deve ter footer
  - [ ] Rota "/drinks/:id-da-receita": **não** deve ter footer
  - [ ] Rota "/meals/:id-da-receita/in-progress": **não** deve ter footer
  - [ ] Rota "/drinks/:id-da-receita/in-progress": **não** deve ter footer
  - [ ] Rota "/profile": deve ter footer
  - [ ] Rota "/done-recipes": **não** deve ter footer
  - [ ] Rota "/favorite-recipes": **não** deve ter footer

---

### 17 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior


- [ ] Se há o redirecionamento para a lista de bebidas ao clicar no ícone de bebidas;
- [ ] Se há o redirecionamento para a lista de comidas ao clicar no ícone de comidas;


---

## Tela principal de receitas

### 18 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card


- [ ] Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas

- [ ]  Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas

---



### 19 - Implemente os botões de categoria para serem utilizados como filtro


- [ ] Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida
- [ ] Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida


---

### 20 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro


  - [ ] Caso as receitas sejam de comida e o filtro seja selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro.
  - [ ] Caso as receitas sejam de bebida e o filtro seja selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro.

---

### 21 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL


  - [ ] Caso a receita seja de uma comida, a pessoa deve ser redirecionada para a rota `/meals/:id-da-receita`
  - [ ]  Caso a receita seja de uma bebida, a pessoa deve ser redirecionada para a rota `/drinks/:id-da-receita`

---

## Tela de detalhes de uma receita


### 22 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL


  - [ ] Se a requisição para a API de comidas foi realizada.
  - [ ] Se a requisição para a API de bebidas foi realizada.


---

### 23 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

  A verificação será feita por meio das receitas retornadas pela API, como por exemplo: o texto dos ingredientes e das instruções, a partir dos atributos data-testids:

  - [ ] A foto 
  - [ ]  O título 
  - [ ] O texto 
  - [ ]  Os ingredientes 
  - [ ]  O texto de instruções 
  - [ ]  O vídeo, presente somente na tela de comidas,
  

---

### 24 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida


  - [ ]  Na página de comidas realize uma requisição para a API de bebidas
  - [ ]  Na página de bebidas realize uma requisição para a API de comidas

---

### 25 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`


  - [ ] Se são visíveis apenas duas recomendações por vez na tela;
  - [ ] Se o scroll do carousel é feito na horizontal;
  - [ ] Se existem todas as 6 recomendações na tela de detalhes de uma comida
  - [ ] Se existem todas as 6 recomendações na tela de detalhes de uma bebida


---

### 26 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo


  - [ ] O posicionamento do botão na tela de detalhes de comida.
  - [ ] O posicionamento do botão na tela de detalhes de bebida.


---

### 27 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça


  - [ ] Se o botão de iniciar receita não é visível na tela de detalhes de uma comida.
  - [ ] Se o botão de iniciar receita não é visível na tela de detalhes de uma bebida.


---

### 28 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"



  - [ ] O botão de "Continue Recipe" na tela de detalhes de uma comida.
  - [ ] O botão de "Continue Recipe" na tela de detalhes de uma bebida.


---

### 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso


  - [ ] Se redireciona para tela de receita da bebida em progresso.
  - [ ] Se redireciona para tela de receita da comida em progresso.


---

### 32 - Implemente um botão de compartilhar e um de favoritar a receita


  - [ ] Se os botões estão disponíveis na tela de detalhes de uma comida.
  - [ ] Se os botões estão disponíveis na tela de detalhes de uma bebida.


---

### 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer na tela em uma tag HTML


  - [ ] Se a mensagem "Link copied!" aparece na tela dentro de uma tag HTML e se o link de detalhes receita da comida foi copiado para o clipboard.
  - [ ] Se a mensagem "Link copied!" aparece na tela dentro de uma tag HTML e se o link de detalhes receita da bebida foi copiado para o clipboard.


---

### 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e vazio caso contrário


  - [ ] Se a comida favoritada vem com o coração preenchido.
  - [ ] Se a comida não favoritada vem com o coração vazio.
  - [ ] Se a bebida favoritada vem com o coração preenchido.
  - [ ] Se a bebida não favoritada vem com o coração vazio.


---

### 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para vazio e vice-versa

  - [ ] Favorita a comida
  - [ ] Desfavorita a comida
  - [ ] Favorita a bebida
  - [ ] Desfavorita a bebida


---



## Tela de receita em progresso


### 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

  - [ ] A foto 
  - [ ] O título 
  - [ ] O botão de compartilhar 
  - [ ] O botão de favoritar 
  - [ ] O texto da categoria 
  - [ ] O elemento de instruções 
  - [ ] O botão para finalizar 

---

### 38 - Desenvolva um checkbox para cada item da lista de ingredientes


  - [ ] Se todos os ingredientes estão sendo exibidos corretamente.
  - [ ] Se cada ingrediente de uma receita de comida/bebida possui um checkbox.


---

### 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

  - [ ] Se é possível marcar todos os passos da receita de comida.
  - [ ] Se é possível marcar todos os passos da receita de bebida.


---

### 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita


  - [ ] Se salva o progresso de uma receita de comida em andamento.
  - [ ] Se salva o progresso de uma receita de bebida em andamento.


---

### 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui


  - [ ] Se os botões estão disponíveis na tela de detalhes de uma comida.
  - [ ]  Se os botões estão disponíveis na tela de detalhes de uma bebida.
  - [ ]  A mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard.
  - [ ]  Verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard.
  - [ ]  Verifica comida favoritada.
  - [ ]  Verifica comida não favoritada.
  - [ ]  Verifica bebida favoritada.
  - [ ]  Verifica bebida não favoritada.
  - [ ]  Favorita comida.
  - [ ]  Desfavorita comida.
  - [ ]  Favorita bebida.
  - [ ]  Desfavorita bebida.
  - [ ]  Favorita receita de uma comida.
  - [ ]  Favorita receita de uma bebida.

---

### 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)


  - [ ]   Se o botão para finalizar está desabilitado em receitas de comidas.
  - [ ]  Se o botão para finalizar está desabilitado em receitas de bebidas.
  - [ ]  Se o botão para finalizar está habilitado em receitas de comidas.
  - [ ]  Se o botão para finalizar está habilitado em receitas de bebidas.


---

### 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

  - [ ]  Se redireciona após concluir uma receita de comida.
  - [ ]  Se redireciona após concluir uma receita de bebida.
  - [ ]  Se a receita é adicionada no banco, quando o botão "Finish Recipe" é clicado.


---

## Tela de receitas feitas

### 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

- [ ] O botão de filtro `All`
- [ ] O botão de filtro `Meals` 
- [ ] O botão de `Drinks` 
- [ ] A imagem do card de receita
    * - [ ] O texto da categoria da receita 
    * - [ ] O texto do nome da receita
    * - [ ] O texto da data que a receita foi feita
    * - [ ] O elemento de compartilhar a receita
    * - [ ] As `tags` da receita


---

### 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar


  - Se o card possui os atributos de uma comida:
    - [ ] foto da receita;
    - [ ] nome;
    - [ ] categoria e nacionalidade;
    - [ ] a data que a receita foi feita;
    - [ ] 2 primeiras tags retornadas pela API;
    - [ ] botão de compartilhar.


---

### 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

  - Se o card possui os atributos corretos de uma bebida:
    - [ ] foto da receita;
    - [ ] nome;
    - [ ] se é alcoólica;
    - [ ] a data que a receita foi feita;
    - [ ] botão de compartilhar.


---

### 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

  - [ ] Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
  - [ ] Se a URL da tela de detalhes da receita é copiada para o clipboard.

---

### 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros


  - [ ]  Se ao clicar no botão "Meals", as receitas são filtradas por comidas;
  - [ ] Se ao clicar no botão "Drinks", as receitas são filtradas por bebidas;
  - [ ] Se ao clicar no botão "All", o filtro  é removido.


---

### 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita


  - [ ] Se ao clicar na foto da receita, a rota  muda para a tela de detalhes daquela receita;
  - [ ] Se ao clicar no nome da receita, a rota muda para a tela de detalhes daquela receita;


---

## Tela de receitas favoritas

### 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo


- [ ] O botão de filtro `All` 
- [ ] botão de filtro `Meals` 
- [ ] O botão de `Drinks` 
- [ ] A imagem do card de receita 
- [ ] O texto da categoria da receita 
- [ ] O texto do nome da receita 
- [ ] O elemento de compartilhar a receita 
- [ ] O elemento de favoritar a receita 
---

### 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita,  nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

  - Se o card possui os atributos de uma comida:
    - [ ] foto da receita;
    - [ ] nome;
    - [ ] categoria e nacionalidade;
    - [ ] botão de compartilhar;
    - [ ] botão de favoritar.


---

### 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita,  nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"


  - Se o card possui os atributos corretos de uma bebida:
    - [ ] foto da receita;
    - [ ] nome;
    - [ ] se é alcoólica;
    - [ ] botão de compartilhar;
    - [ ] botão de favoritar.


---

### 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

  - [ ] Se ao clicar no botão de compartilhar, aparece a mensagem "Link copied!";
  - [ ] Se a URL da tela de detalhes da receita é copiada para o clipboard.


---

### 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas e da tela

  - [ ] Se ao clicar no botão de "desfavoritar", a respectiva receita é removida da tela.



---

### 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros


  - [ ] Se ao clicar no botão "Meals", as receitas devem ser filtradas por comidas;
  - [ ] Se ao clicar no botão "Drinks" , as receitas devem ser filtradas por bebidas;
  - [ ] Se ao clicar no botão "All", o filtro deve ser removido.


---

### 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita


  - [ ] Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
  - [ ] Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.


---



## Tela de perfil



### 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

  - [ ] O elemento de email
   - [ ] O botão para "Done Recipes" 
   - [ ] O botão para "Favorite Recipes" 
   - [ ] O botão de "Logout"


---

### 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

---

### 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"


  - [ ] Se a tela contêm todos os 3 botões.

---

### 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

  - [ ] Se redireciona para a rota correta.


---

### 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

  - [ ] Se redireciona para a rota correta.


---

### 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", 
