import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';


export default function FormProduto () {

    const [titulo, setTitulo] = useState();
    const [códigodoproduto, setCódigodoproduto] = useState();

    const [códigodoproduto, setCódigodoproduto] = useState();
    const [valorunitário, setValorUnitário] = useState();
    
    const [valorunitário, setTempodeEntregaMínimoemMinutos] = useState();


  


    return (
        <div>
            <div style={{marginTop: '3%'}}>
                <Container textAlign='justified' >
                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
                    <Divider />
                    <div style={{marginTop: '4%'}}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    placeholder='Informe o título do produto'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    placeholder='Informe o código do produto'
                                    maxLength="100"
                                />
                            </Form.Group>
                            
                            
                            <Form.Group widths='equal'>

                                <Form.Input
                                    label='Titulo'
                                >
                                    <TextArea placeholder='Informe a descrição do produto' />
                                </Form.Input>
                                
                            </Form.Group>

                        
                            <Form.Group>
                                 <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={5}
                                /> 
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder='30'
                                    width={6}
                                /> 
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder='40'
                                    width={6}
                                />
                            </Form.Group>

                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>
                    </div>
                    
                </Container>
            </div>
        </div>
    );
}