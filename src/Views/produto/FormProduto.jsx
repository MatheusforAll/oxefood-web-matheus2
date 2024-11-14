import axios from "axios";
import React, { useState } from "react";
import MenuSistema from '../../MenuSistema';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';


export default function FormProduto () {

    const [titulo, setTitulo] = useState();
    const [códigodoproduto, setCódigodoproduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorunitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    function salvar() {

		let produtoRequest = {
            titulo: titulo,
            códigodoproduto: códigodoproduto,
            descricao: descricao,
            valorunitario: valorunitario,
		    tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo:tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}

    
   


    return (
        <div>
            
            <MenuSistema tela={'Produto'} />

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
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    placeholder='Informe o código do produto'
                                    maxLength="100"
                                    value={códigodoproduto}
			                        onChange={e => setCódigodoproduto(e.target.value)}
                                />
                            </Form.Group>
                            
                            
                            <Form.Group widths='equal'>

                                <Form.Input
                                    label='Descricão'
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}
                                >
                                    <TextArea placeholder='Informe a descrição do produto' />
                                </Form.Input>
                                
                            </Form.Group>

                        
                            <Form.Group>
                                 <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={5}
                                    value={valorunitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                /> 
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder='30'
                                    width={6}
                                    value={tempoEntregaMinimo}
			                        onChange={e => setTempoEntregaMinimo(e.target.value)}
                                /> 
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder='40'
                                    width={6}
                                    value={tempoEntregaMaximo}
			                        onChange={e => setTempoEntregaMaximo(e.target.value)}
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
                                onClick={() => salvar()}

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