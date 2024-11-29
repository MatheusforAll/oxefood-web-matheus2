import axios from "axios";
import React, {useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormCliente() {

  const { state } = useLocation();
   const [idVenda, setIdVenda] = useState();
   const [cliente, setCliente] = useState('');
   const [produto, setproduto] = useState('');
   const [statusvenda, setStatusVenda] = useState('');
   const [datavenda, setDataVenda] = useState('');
   const [valorTotal, setValorTotal] = useState('');
   const [observacao, setobservacao] = useState('');
   const [retiradaEmLoja, setretiradaEmLoja] = useState('');

   function formatarData(data) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
}

function salvar() {
    let vendaRequest = {
       cliente: cliente,
       produto: produto,
       statusvenda:statusvenda,
       datavenda: datavenda,
       valorTotal:valorTotal,
       observacao: observacao,
       retiradaEmLoja:retiradaEmLoja
    };


    if (idVenda != null) { //Alteração:
        axios.put("http://localhost:8080/api/venda/" + idVenda, vendaRequest)
        .then((response) => { console.log('Venda alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um Venda.') })

      } else 
    
    axios.post("http://localhost:8080/api/venda", vendaRequest)
         .then((response) => {
            console.log('Venda cadastrado com sucesso.');
         })
         .catch((error) => {
            console.log('Erro ao incluir o um Venda.');
         });
   }

   useEffect(() => {
    if (state != null && state.id != null) {
        axios.get("http://localhost:8080/api/venda/" + state.id)
.then((response) => {
                       setIdVenda(response.data.id)
                       setcliente(response.data.cliente)
                       setproduto(response.data.produto)
                       setstatusVenda(response.data.statusvenda)
                       setdatavenda(formatarData(response.data.datavenda))
                       setvalorTotal(response.data.valortotal)
                       setobservacao(response.data.observacao)
                       setretiradaEmLoja(response.dataretiradaEmLoja)

        })
    }
}, [state])


return (
    <div>
       <MenuSistema tela={'cliente'} />
       <div style={{ marginTop: '3%' }}>
          <Container textAlign='justified'>

          { idCliente === undefined &&
  <h2> <span style={{color: 'darkgray'}}> Venda &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idVenda != undefined &&
  <h2> <span style={{color: 'darkgray'}}> Venda &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

             <Divider />
             <div style={{ marginTop: '4%' }}>
                <Form>
                   <Form.Group widths='equal'>
                      <Form.Input
                         required
                         fluid
                         label='Cliente'
                         maxLength="100"
                         value={cliente}
                         onChange={e => setCliente(e.target.value)}
                      />
                      <Form.Input
                         required
                         fluid
                         label='Produto'>
                         <InputMask
                            required
                            mask="999.999.999-999"
                            value={produto}
                            onChange={e => setproduto(e.target.value)}
                         />
                      </Form.Input>
                   </Form.Group>

                   <Form.Group>
                   <Form.Field
                                    fluid
                                    control={Select}
                                    label='UF'
                                    width={16}
                                    options={[
                                        { key: '1', text: ' Pedido Cancelado', value: 'Pc' },
                                        { key: '2', text: 'Aguardando Pagamento', value: 'ap' },
                                        { key: '3', text: 'Pago', value: 'pg' },
                                        { key: '3', text: ' Entregue', value: 'Eg' },
                                    ]}
                                    placeholder='Selecione'
                                    value={statusVenda}
                                    onChange={(e, { value }) => setstatusVenda(value)} 
                                />
            
                     
                      <Form.Input
                         fluid
                         label='dataVenda'
                         width={6}
                      >
                         <InputMask
                            mask="99/99/9999"
                            maskChar={null}
                            placeholder="Ex: 20/03/1985"
                            value={dataVenda}
                            onChange={e => setdataVenda(e.target.value)}
                         />
                      </Form.Input>
                   </Form.Group>


                   <Form.Input
                         fluid
                         label='valorTotal'
                         width={6}
                      >
                         <InputMask
                            mask="99/99/9999"
                            maskChar={null}
                            value={valorTotal}
                            onChange={e => setvalorTotal(e.target.value)}
                         />
                      </Form.Input>


                      <Form.Input
                         fluid
                         label='observacao '
                         width={6}
                      >
                         <InputMask
                            mask="99/99/9999"
                            maskChar={null}
                            value={observacao }
                            onChange={e => setobservacao (e.target.value)}
                         />
                      </Form.Input>

                      <Form.Input
                         fluid
                         label='retiradaEmLoja '
                         width={6}
                      >
                         <InputMask
                            mask="99/99/9999"
                            maskChar={null}
                            value={retiradaEmLoja }
                            onChange={e => setretiradaEmLoja(e.target.value)}
                         />
                      </Form.Input>



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
                      <Link to={'/list-venda'}>Voltar</Link>
                   
                   </Button>

                   <Button
                      inverted
                      circular
                      icon
                      labelPosition='left'
                      color='blue'
                      floated='right'
                      onClick={salvar}
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

