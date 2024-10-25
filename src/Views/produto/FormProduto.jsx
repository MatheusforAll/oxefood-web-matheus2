import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function FormProduto() {
    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    placeholder="Informe o título do produto"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder="Informe o código do produto"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    control={TextArea}
                                    label='Descrição'
                                    placeholder='Informe a descrição do Produto'
                                    width={16}
                                />
                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitario'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                    control={InputMask}
                                    mask="99"
                                    maskChar={null}
                                    placeholder="30"
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    control={InputMask}
                                    mask="99"
                                    maskChar={null}
                                    placeholder="40"
                                    width={6}
                                />
                            </Form.Group>
                        </Form>
                        <div style={{ marginTop: '4%' }}>
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