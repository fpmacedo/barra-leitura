import React, {useEffect,useState, useRef} from 'react';
import {Texto, Body,Bar} from './styles';

function App() {
  const textRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(()=>{
    
    //função para ler as posilçoes atuais do scrol e calcular % de leitura
    function handleScroll(){
      
      //armazena o tamanho do componente onde o texto de leitura esta utilizando o hook de useRef
      const textHeight = textRef.current.offsetHeight;
      //armazena a posição do scroll na página
      const positionY = window.pageYOffset;
      //calcula a porcentagem do texto em que o leitor de encontra
      const pagePosition = positionY*100 / textHeight;
      //atualiza o barWidth para passar a propriedade ao componente
      setBarWidth(pagePosition);
    }
      //escuta o evento de scroll da janela e chama a função handleScroll quando isso acontece  
      window.addEventListener('scroll', ()=> handleScroll());
       
  },[])



  return (
    <div className="App">
      <Bar width={barWidth + "%"}/>      
      <Body>
        <Texto  ref={textRef}>
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO
           TEXTO

        </Texto>
      </Body>
    </div>
  );
}

export default App;
