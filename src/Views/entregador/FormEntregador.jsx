import axios from "axios";
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

    const [enderecoUf, setEnderecoUf] = useState();

    const [complemento, setComplemento] = useState();
    const [ativo, setAtivo] = useState(true);
  
    function salvar() {

		let entregadorRequest = {
		     nome: nome,
		     cpf: cpf,
             rg: rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
             qtdentregasrealizadas: qtdentregasrealizadas,
             valorporfrete: valorporfrete,
             rua: rua,
             número: número,
             bairro: bairro,
             cidade:cidade,
             cep:cep,
             enderecoUf:enderecoUf,
             complemento:complemento,
             ativo:ativo


		}
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Entregador.')
		})
	}

 

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
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}     
                                />
                                <Form.Field
                                    required
                                    control={InputMask}
                                    fluid
                                    label='CPF'
                                    mask="999.999.999-99"
                                    value={cpf}
			                        onChange={e => setCpf(e.target.value)} 
                                />
                                <Form.Input
                                    fluid
                                    label='RG'
                                    value={rg}
			                        onChange={e => setRG(e.target.value)} 
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
                                    value={dataNascimento}
			                        onChange={e => setDataNascimento(e.target.value)} 
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                    value={foneCelular}
			                        onChange={e => setFoneCelular(e.target.value)} 
                                />
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                    value={foneFixo}
			                        onChange={e => setFoneFixo(e.target.value)} 
                                />
                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdentregasrealizadas}
			                        onChange={e => setQTDEntregasRealizadas(e.target.value)} 
                                />
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorporfrete}
			                        onChange={e => setValorPorFrete(e.target.value)} 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={13}
                                    value={rua}
			                        onChange={e => setRua(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={3}
                                    value={número}
			                        onChange={e => setNúmero(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={7}
                                    value={bairro}
			                        onChange={e => setBairro(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={7}
                                    value={cidade}
			                        onChange={e => setCidade(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={3}
                                    value={cep}
			                        onChange={e => setCEP(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    fluid
                                    control={Select}
                                    label='UF'
                                    width={16}
                                    options={[
                                        { key: '1', text: 'São Paulo', value: 'SP' },
                                        { key: '2', text: 'Rio de Janeiro', value: 'RJ' },
                                        { key: '3', text: 'Minas Gerais', value: 'MG' },
                                    ]}
                                    placeholder='Selecione'
                                    value={enderecoUf}
                                    onChange={(e, { value }) => setEnderecoUf(value)} 
                                />
            
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={16}
                                    value={complemento}
			                        onChange={e => setComplemento(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                            <Form.Field label="Ativo:"></Form.Field>
                                <Form.Radio 
                                    id="sim" 
                                    name="ativo" 
                                    value="Sim" 
                                    label="Sim" 
                                    checked={ativo === true}
                                    onChange={() => setAtivo(true)}
                                />
                                <Form.Radio 
                                    id="nao" 
                                    name="ativo" 
                                    value="Não" 
                                    label="Não" 
                                    checked={ativo === false}
                                    onChange={() => setAtivo(false)}
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