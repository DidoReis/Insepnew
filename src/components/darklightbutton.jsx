// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const DarkLightButton = () => {
  const [isDark, setIsDark] = useState(true); // Estado para controlar o botão dark/light

  // Função para alternar o estado do botão quando ele for clicado
  const handleClick = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="28"
      viewBox="0 0 46 28"
      fill="none"
      onClick={handleClick} // Adicione o evento de clique para mudar o estado ao clicar no SVG
      style={{ cursor: 'pointer' }} // Adicione um estilo para o cursor indicando que é clicável
    >
      {isDark ? (
        // SVG para o estado "dark" do botão
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 14C1 7.09644 6.59644 1.5 13.5 1.5H33.5C40.4036 1.5 46 7.09644 46 14C46 20.9036 40.4036 26.5 33.5 26.5H13.5C6.59644 26.5 1 20.9036 1 14Z"
            fill="#DADADA"
          />
          <g filter="url(#filter0_d_182_218)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 23.5C18.7467 23.5 23 19.2467 23 14C23 8.75329 18.7467 4.5 13.5 4.5C8.25329 4.5 4 8.75329 4 14C4 19.2467 8.25329 23.5 13.5 23.5Z"
              fill="#F9F9F9"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7827 14.832C18.5443 17.4113 16.3403 19.3599 13.7512 19.2803C11.1622 19.2008 9.0819 17.1205 9.00235 14.5315C8.9228 11.9424 10.8714 9.73836 13.4507 9.5C12.329 11.0176 12.4863 13.1275 13.8207 14.462C15.1552 15.7964 17.2651 15.9537 18.7827 14.832V14.832Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ) : (
        // SVG para o estado "light" do botão (quando o botão for clicado)
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45 14C45 7.09644 39.4036 1.5 32.5 1.5H12.5C5.59644 1.5 0 7.09644 0 14C0 20.9036 5.59644 26.5 12.5 26.5H32.5C39.4036 26.5 45 20.9036 45 14Z"
            fill="#FEAC39"
          />
          <g filter="url(#filter0_d_182_89)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.5 23.5C27.2533 23.5 23 19.2467 23 14C23 8.75329 27.2533 4.5 32.5 4.5C37.7467 4.5 42 8.75329 42 14C42 19.2467 37.7467 23.5 32.5 23.5Z"
              fill="#F9F9F9"
            />
            <path d="M32.8057 8.17749V10.6291" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.8057 17.9839V20.4355" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.1387 9.97339L35.4042 11.7079" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.207 16.9053L28.4725 18.6398" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.9346 14.3066H36.483" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.127 14.3066H26.6753" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.1387 18.6398L35.4042 16.9053" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.207 11.7079L28.4725 9.97339" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      )}
    </svg>
  );
};

export default DarkLightButton;
