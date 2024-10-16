import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout, HeaderSearch} from './styles'
import { Input } from '../Input';
import {Link} from 'react-router-dom'

export function Header(){
        return(
            <Container>
                <h1>Rocketmovies</h1>
                <HeaderSearch>
                <Input placeholder="Pesquisar pelo título"/>    
                </HeaderSearch>
                
               
                
                <Profile to="/profile">
                    

                        <div>
                            
                            <strong>Danillo Landim</strong>
                            <Link to="/"> Sair</Link>
                        </div>
                        <img
                        src="https://github.com/danillolandim.png"
                        alt="Foto de Usuário"/>
                </Profile>

               

            </Container>
        );
}