# Challenge
<h3>Informações do Repositório</h3>
Criação do Chatbot Lora
Chatbot construído utilizando a plataforma Blip da empresa Take Blip. 
API construída para consumir a API do git hub para extração de dados foi construída em JavaScipt/TypeScript.
API foi hospetada em um servidor da AWS, com seguinte endereço http://54.94.246.15:3333/getRepositories;
<h3>Problemas enfrentados</h3>
Na plataforma da take foi enfrentado um problema em relação a manipulação da resposta da requisição como um array, sendo necessário a criação de vários scripts
para retornar apenas um objeto e manipula-lo na seção de conteúdo.
Na construção da api foi encontrado um problema no parmetro sort da url do git hub, não possibilitando a ordenação da data pela url, dessa forma foi feita a ordenação
e seleção do número de repositórios pela api intermediária construída.
