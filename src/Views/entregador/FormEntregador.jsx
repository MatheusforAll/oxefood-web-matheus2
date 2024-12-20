import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link,  useLocation  } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador() {

    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();
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
  

    function formatarData(data) {
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    }

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

        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
            .then((response) => { console.log('Entregador alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um entregador.') })
        } else 
 

		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Entregador.')
		})
	}

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id)
.then((response) => {
                           setIdEntregador(response.data.id)
                           setNome(response.data.nome)
                           setCpf(response.data.cpf)
                           setRG(response.data.rg)
                           setDataNascimento(formatarData(response.data.dataNascimento))
                           setFoneCelular(response.data.foneCelular)
                           setFoneFixo(response.data.foneFixo)
                           setQTDEntregasRealizadas(response.data.qtdentregasrealizadas)
                           setValorPorFrete(response.data.valorporfrete)
                           setRua(response.data.rua)
                           setNúmero(response.data.número)
                           setBairro(response.data.bairro)
                           setCidade(response.data.cidade)
                           setCEP(response.data.cep)
                           setEnderecoUf(response.data.enderecoUf)
                           setComplemento(response.data.complemento)
                           setComplemento(response.data.complemento)
                           
                           

            })
        }
}, [state])


 

    return (
        <div>
              <MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >
                { idEntregador === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idEntregador != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

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
                                <Link to={'/list-entregador'}>Voltar</Link>

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
