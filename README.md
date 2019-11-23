# DevAcademyDesafio-Jo-o-
Usando Vue como framework e AWS como backend
Sou o participante João Pedro Dedê da Silva
e-mail joam.mega@gmail.com
Cursando Design Digital 6º semestre

Skills:
Angular
React-native
Vue
HTML e css
JS
Java
Postgres
NodeJS
Express
MongoDB

Para a edição do front-end foi feito os seguintes passos:

-Foram criados 2 novos components(HomeProductModal e HomeProductForm):
  1.O HomeProductModal é um modal que é carregado pela page home e sobrepõe seus outros 2 componentes, para controlar esse componente existe uma mutation "toggleModal" e um state "productModal" que podem ser alterados no store para abrir e fechar o modal.
  2.O HomeProductForm é um component carregado dentro do modal com um formulário para a edição do state "productForm" e será responsável para ativar a action de POST do produto que estará salvo no state "productForm"

-Foram criados e alterados os services de product, auth e checkout:
  __Nesses arquivos é necessário alterar os caminhos da url para ser condizentes com os paths que foram configurados na sua API da AWS
  __Precisa adicionar o token de autentificação nos Headers da requizição já que foi configurado na sua API que as requizições precisam de autorização via cognito que está configurada na sua Stack Federation.
  __Precisa adicionar o ID da sua API na URL da requizição
  __Foi criado as funções de POST e GET(byID) do produto que não estavam configurados e alterar o caminho da função de GET que estava configurado pra dar GET no MOCK.
  __No Auth service é necessário alterar a POOLID, CLIENTID eseu user e password, para autentificar corretamente sua aplicação.
  
