import { app } from "./app";

const PORTA = 3333;

const server = app.listen(PORTA, () => {
    console.log(`App ouvindo na porta ${PORTA}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('App finalizado.');
});