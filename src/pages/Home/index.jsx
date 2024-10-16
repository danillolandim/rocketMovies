import {FiPlus} from 'react-icons/fi'

import {Container, Content} from './styles'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Note} from '../../components/Note'

import {Button} from '../../components/Button'

export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
              <header>
                <h1>Meus Filmes</h1>
               <Button title=" +  Adicionar filme"/>
               </header> 

             <main>
                    <Note data={{
                        title: 'Interestellar',
                        
                        tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                        ]
                    }}
                    
                    />   

<Note data={{
                        title: 'Interestellar',
                        
                        tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                        ]
                    }}
                    
                    />  

<Note data={{
                        title: 'Interestellar',
                        
                        tags: [
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                        ]
                    }}
                    
                    />  
            </main>
    
                
            </Content>
        
        </Container>
    )
}