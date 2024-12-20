import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListVenda() {

    const [lista, setLista] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/venda")
            .then((response) => {
                setLista(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar lista de vendas:", error);
            });
         

    }


    function formatarData(data) {
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    
    async function remover() {

        await axios.delete('http://localhost:8080/api/Venda/' + idRemover)
        .then((response) => {
  
            console.log('Venda removido com sucesso.')
  
            axios.get("http://localhost:8080/api/Venda")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            console.log('Erro ao remover um Venda.')
        })
        setOpenModal(false)
    }
 

    return (
        <div>
            <MenuSistema tela={'venda'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2> Venda </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-venda'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Cliente</Table.HeaderCell>
                                    <Table.HeaderCell>Produto</Table.HeaderCell>
                                    <Table.HeaderCell>StatusVenda</Table.HeaderCell>
                                    <Table.HeaderCell>DataVenda</Table.HeaderCell>
                                    <Table.HeaderCell>valorTotal</Table.HeaderCell>
                                    <Table.HeaderCell>Observacao</Table.HeaderCell>
                                    <Table.HeaderCell>RetiradaEmLoja</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map(venda => (
                                    <Table.Row key={venda.id}>
                                        <Table.Cell>{venda.cliente}</Table.Cell>
                                        <Table.Cell>{venda.produto}</Table.Cell>
                                        <Table.Cell>{venda.statusVenda }</Table.Cell>
                                        <Table.Cell>{formatarData(venda.dataVenda)}</Table.Cell>
                                        <Table.Cell>{venda.valorTotal}</Table.Cell>
                                        <Table.Cell>{venda.observacao}</Table.Cell>
                                        <Table.Cell>{venda.retiradaEmLoja }</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste venda'
                                                icon>
                                                    <Link to="/form-venda" state={{id: venda.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>                                       
        
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este venda'
                                                icon 
                                                onClick={e => confirmaRemover(venda.id)}>
                                                
                                                <Icon name='trash' />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
               <Header icon>
                   <Icon name='trash' />
                   <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
               </Header>
               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>


        </div>
    );




}