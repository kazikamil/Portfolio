import Image from "next/image";
import Nav from "./nav";
import Accueil from "./Accueil";
import Skills from "./skills";
import Projects from "./projects";
import Footer from "./footer";
import Form from "./Form";
export default function Home() {
  return (
    <div>
       <Nav></Nav>
       <Accueil></Accueil>
       <Skills></Skills>         
       <Projects></Projects>
       <Form></Form>
       <Footer></Footer>
    </div>
  );
}
