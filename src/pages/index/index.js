import React from "react";

export default function Home() {
  return (
    <>
      <title>Rastremar - Rastreamento de veiculos</title>
      <div id="page-wrapper">
        {/* <!-- Header --> */}
        <header id="header">
          <h1 id="logo">
            <a href="/">Rastremar</a>
          </h1>

          <nav id="nav">
            <ul>
              <li className="divisor" role="separator">
                |
              </li>

              <li>
                <a
                  className="button primary fit"
                  href="http://semprecomvoce.rastremar.com.br/sistema/login.aspx"
                >
                  Sempre Rastreamento
                </a>
              </li>
              <li className="divisor" role="separator">
                |
              </li>

              <li>
                <a
                  className="button primary"
                  href="http://monitoramento.rastremar.com.br/sistema/login.aspx"
                >
                  Rastremar Rastreamento e Logistica
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* <!-- Banner --> */}
        <section id="banner">
          <div className="content">
            <header>
              <a href="/" className="navbar-brand  center">
                <h2>
                  <img src="./images/logo.png" alt="" />
                </h2>
              </a>
            </header>
            <span className="image">
              <img src="./images/pic01.jpg" alt="" />
            </span>
          </div>
          
        </section>

        {/* <!-- One --> */}

        {/* <!-- Two --> */}
        <section id="two" className="spotlight style2 right">
          <span className="image fit main"></span>
          <div className="content">
            <header>
              <h2>Rastreador Veicular</h2>
              <p>
                Através de um hardware embarcado no veiculo, o mesmo capta
                informações da Latitude e Longitude fornecida pelos satélites
                GPS enviando para nossos servidores e gateway
              </p>
            </header>
            <p>
              Essas informações são processadas e apresentadas aos usuários
              através de um acesso 100% WEB. Desta forma cada usuário poderá em
              tempo real, rastrear, localizar e até mesmo gerenciar rotas e
              serviços realizados pelo seu veiculo e colaboradores, reduzindo
              assim, custos em até 15% e aumento da produtividade em até 40%.
            </p>
          </div>
          
        </section>

        {/* <!-- Three --> */}
        <section id="three" className="spotlight style3 left">
          <span className="image fit main bottom"></span>
          <div className="content">
            <header>
              <h2>Rastreador Pessoal</h2>
              <p>
                Rastreador de tamanho reduzido ideal para uso pessoal. Seu
                tamanho facilita o uso em situações de segurança, controle de
                pessoas e de bens móveis.
              </p>
            </header>
            <p>
              Contando com modem GPRS Quadriband, GPS de alta sensibilidade,
              entrada para botão de pânico, escuta sigilosa e autonomia da
              bateria de até 120horas. Esse equipamento é um forte aliado para
              sua proteção.
            </p>
          </div>
          
        </section>

        {/* <!-- Four --> */}
        <section id="four" className="wrapper style1 special fade-up">
          <div className="container">
            <header className="major">
              <h2>Empresa</h2>
            </header>
            <div className="box alt">
              <div className="row gtr-uniform">
                <section className="col-4 col-6-medium col-12-xsmall">
                  <p>
                    A RASTREMAR é uma empresa especializada em soluções de
                    monitoramento e rastreamento de veículos, localizada na
                    cidade de Maringá-Pr. Tem como finalidade a segurança, o
                    apoio logístico, a redução dos custos e o aumento da
                    produtividade dos nossos parceiros.
                  </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                  <p>
                    Utilizando as mais avançadas tecnologias disponiveis, a
                    empresa desenvolve um serviço de monitoramento em tempo
                    real, oferecendo rastreamento completo e detalhado, nos mais
                    variados setores, permitindo assim a imediata localização de
                    veículos, cargas e pessoas em todo o território nacional.
                    <p>
                      Através de um sistema 100% WEB, possibilitamos aos nossos
                      clientes sua plena utilização sem a necessidade de
                      instalação de nenhum aplicativo especial.
                    </p>
                  </p>
                </section>
                <section className="col-4 col-6-medium col-12-xsmall">
                  <p>
                    Além disso, o sistema apresenta uma tela simples e
                    eficiente, onde as ações são sensíveis ao contexto, ou seja,
                    somente quando for necessário a Central irá solicitar a
                    intervenção do usuário na tomada de decisão. Esta
                    característica permite que todas as operações possam ser
                    realizadas com total clareza e rapidez.
                  </p>
                </section>
              </div>
            </div>

            {/* <!-- Main --> */}
            <div id="main" className="wrapper style1">
              <div className="container">
                <header className="major">
                  <header className="major" />
                  <h2>Contatos</h2>
                  <p>Assim que possivel entraremos em contato</p>
                </header>

                {/* <!-- Form --> */}
                <section>
                  <h3>Contato</h3>
                  <form method="POST" action="https://formspree.io/f/xeqpnqjj">
                    <div className="row gtr-uniform gtr-50">
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="text"
                          required
                          name="name"
                          id="name"
                          placeholder="Nome Completo"
                        />
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="email"
                          name="email"
                          required
                          id="email"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="col-12">
                        <select name="category" id="category">
                          <option value="">- Categoria -</option>
                          <option value="Comprar">Comprar</option>
                          <option value="Contato">Contato</option>
                          <option value="Representante">Representante</option>
                        </select>
                      </div>
                      <div className="col-6 col-12-xsmall">
                        <input
                          type="text"
                          name="Telefone"
                          id="Telefone"
                          placeholder="(xx)xxxxx-xxxx"
                        />
                      </div>

                      <div className="col-12">
                        <textarea
                          name="message"
                          id="message"
                          required
                          placeholder="Digite sua mensagem"
                          rows="6"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <input
                              type="submit"
                              value="Enviar"
                              className="primary"
                            />
                          </li>
                          <li>
                            <input type="reset" value="Reset" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer id="footer">
          <ul className="icons"></ul>
          <ul className="copyright">
            <li>&copy; Rastremar 2021. Todos os direitos reservados.</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
