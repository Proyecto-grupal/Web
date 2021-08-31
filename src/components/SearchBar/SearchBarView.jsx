import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default function SearchBarView() {
    return (
        <InputGroup size="lg">
           <FormControl
      placeholder="Busca tu curso"
    />
    <Button variant="outline-primary">Buscar</Button> 
        </InputGroup>
    )
}
