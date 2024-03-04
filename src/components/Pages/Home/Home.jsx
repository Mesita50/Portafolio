import React, { useState,useEffect  } from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Header } from '../../Layouts/Header/Header';
import { ImgPerfil } from '../../ImgPerfil/ImgPerfil';
import { Name } from '../../Name/Name';
import { Item } from '../../Item/Item';
import NavBar from '../../NavBar/NavBar';
import { LogoSena } from '../../LogoSena/LogoSena';
import { UserInfoSocial } from '../../UserInfoSocial/UserInfoSocial';
import { ItemPages } from '../../ItemPages/ItemPages';
import { Main } from '../../Layouts/Main/Main';
import { TitleSection } from '../../TitleSection/TitleSection';
import { InformationPerfil } from '../../InformationPerfil/InformationPerfil';
import { Content } from '../../Content/Content';
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { ItemExperience } from '../../ItemExperience/ItemExperience';
import mongodb from '../../../assets/mongodb.png';
import java from '../../../assets/java.png';
import JS from '../../../assets/JS.png';
import react from '../../../assets/React.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import './Home.css';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  };
  useEffect(() => {
    const handleResize = () => {
      const shouldBeVisible = window.innerWidth < 768; 
      setIsVisible(shouldBeVisible);
    };

    
    
  }, []);

  return (
    <>
      <Header isVisible={isVisible}>
        <RxCross1 id='exit'onClick={toggleVisibility} />
        <ImgPerfil />
        <Name name='SEBASTIAN MESA' />
        <NavBar>
          <Item link='#'  text='Inicio' />
          <Item link='#profile' text='Perfil' />
          <Item link='#proyects' text='Proyectos' />
          <Item link='#references' text='Referencias' />
          <Item link='#expe' text='Experiencia' />
        </NavBar>
        <LogoSena />
        <UserInfoSocial>
          <ItemPages link={'https://www.linkedin.com/in/juan-sebastian-mesa-leon-051bb92b7/'} icon={<BsLinkedin />} />
          <ItemPages link={'https://www.facebook.com/juansebastian.mesaleon.92'} icon={<BsFacebook />} />
          <ItemPages link={'https://www.instagram.com/sebastian_mesa77/'} icon={<BsInstagram />} />
          <ItemPages link={'https://twitter.com/SebastianMesaa7'} icon={<BsTwitter />} />
          <ItemPages link={'https://api.whatsapp.com/send?phone=573027268394'} icon={<BsWhatsapp />} />
        </UserInfoSocial>
      </Header>
      <Main>  
        <RxHamburgerMenu id='menu' onClick={toggleVisibility} />
        <TitleSection id='profile' title='PERFIL' />
        <InformationPerfil info="Me llamo Sebastian Mesa y Soy un aprendiz del SENA con un enfoque apasionado en el análisis y desarrollo de software.
         Mi camino profesional ha estado marcado por proyectos desafiantes que han estimulado mi creatividad y ampliado mis horizontes en el fascinante mundo
        del desarrollo de software. Estoy emocionado por las oportunidades que el futuro tiene reservadas para seguir creciendo y aprendiendo en este apasionante campo. " />
        <TitleSection id='proyects'title='PROYECTOS' />
        <Content>
          <Proyects title="Graphel" description="Desarrollo de la maquetación de la página web Graphel utilizando HTML y CSS." Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/Mesita50/Graphel.git'/>
          <Proyects title="Bleux" description="DesarrollO de la maquetación de la página web Bleux utilizando HTML y CSS." Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/Mesita50/Bleux.git'/>
          <Proyects title="AppTastico" description="Desarrollo de la maquetación de la página web Apptastico utilizando HTML y CSS." Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/Mesita50/Apptastico.git'/>
        </Content>
        <TitleSection id='references' title='REFERENCIAS' />
        <Content>
          <References name='Nombre: Sandra Milena Leon Trujillo' cargo='Cargo: Independiente' number='Numero:3009824067' email='Email: sandramilenaleontrujillo5@gmail.com' />
          <References name='Nombre: Angela Patricia Leon Trujillo' cargo='Cargo: Profesional Universitaria' number='Numero:3216680637' email='Email: angelita25051@hotmail.com' />
          <References name='Nombre: Gabriel Moreno Carmona' cargo='Cargo: Maestro de obra' number='Numero:3017960357' email='Email: gabrielillom0305@gmail.com' />
        </Content>
        <TitleSection id='expe' title='EXPERIENCIA' />
        <Content>
          <ItemExperience image={react} value="50" progress="Intermedio" />
          <ItemExperience image={JS} value="50" progress="Intermedio" />
          <ItemExperience image={mongodb} value="50" progress="Intermedio" />
          <ItemExperience image={java} value="50" progress="Intermedio" />
        </Content>
      </Main>
    </>
  )
}
