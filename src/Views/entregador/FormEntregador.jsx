import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRG] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();

    const [qtdentregasrealizadas, setQTDEntregasRealizadas] = useState();
    const [valorporfrete, setValorPorFrete] = useState();
    const [rua, setRua] = useState();
    const [número, setNúmero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCEP] = useState();
    const [complemento, setComplemento] = useState();
  

 

    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />
                                <Form.Field
                                    required
                                    control={InputMask}
                                    fluid
                                    label='CPF'
                                    mask="999.999.999-99"
                                />
                                <Form.Input
                                    fluid
                                    label='RG'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    control={InputMask}
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                    mask="99/99/9999"
                                    maskChar={null}
                                    placeholder="Ex: 20/03/1985"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={13}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={3}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={7}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={7}
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={3}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    fluid
                                    control={Select}
                                    label='UF'
                                    width={16}
                                    options={[
                                        { key: '1', text: 'Option 1', value: 'option1' },
                                        { key: '2', text: 'Option 2', value: 'option2' },
                                    ]}
                                    placeholder='Selecione'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={16}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field label="Ativo:"></Form.Field>
                                <Form.Radio id="sim" name="ativo" value={"Sim"} label="Sim" />
                                <Form.Radio id="nao" name="ativo" value={"Não"} label="Não" />
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