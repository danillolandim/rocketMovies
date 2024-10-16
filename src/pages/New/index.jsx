
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {Link} from 'react-router-dom'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>

        <Link to="/">voltar</Link>
        <h1>Novo filme</h1>
          
          <header>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
          </header>

         
          <Textarea placeholder="Observações" />

      
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <footer>
          <Button title="Excluir filme" />
          <Button title="Salvar" />
          </footer>
        </Form>
      </main>
    </Container>
  )
}
