import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    TextField,
  } from '@mui/material';

import { CustomGrid, Title } from '../Home/styles';
import { CustomImage } from '../Home/styles';
import logoSF from '../../../assets/logoSF.png';
import { CustomText, LabelError, CustomButton1, CustomButton2, Subtitle } from './../Signin/styles';


// const cpfRegex = [0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2};

function CrudAgente() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [setor, setSetor] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    
    return (
        <Grid
            container
            height="150vh"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <title>PSF - Cadastre-se</title>
            <CustomGrid
                container
                item
                xs={12}
                sm={12}
                md={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style= {{ color: 'white', backgroundColor: '#0693E3' }}
            >
                <Box maxWidth="500px">
                    <Title> BEM-VINDO AO SISTEMA DE PSF! </Title>
                    {/* <Subtitle></Subtitle> */}
                    <CustomImage src={logoSF} alt="logoSF" />
                </Box>
            </CustomGrid>
            <Grid
                item
                xs={12}
                sm={12}
                md={7}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                minWidth="400px"
            >
            <Box
                p="20px"
                gap="15px"
                borderRadius="5px"
                boxShadow="0 1px 10px #0003"
                maxWidth="350px"
            >
                <Subtitle style= {{ color: '#0693E3'}}> Cadastre-se </Subtitle>
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="nome"
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="cpf"
                    label="CPF"
                    variant="outlined"
                    fullWidth
                    value={cpf}
                    onChange={(e) => {
                        setCpf(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="dataNascimento"
                    label="Data de Nascimento"
                    variant="outlined"
                    fullWidth
                    value={dataNascimento}
                    onChange={(e) => {
                        setDataNascimento(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="setor"
                    label="Setor"
                    variant="outlined"
                    fullWidth
                    value={setor}
                    onChange={(e) => {
                        setSetor(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="rua"
                    label="Rua"
                    variant="outlined"
                    fullWidth
                    value={rua}
                    onChange={(e) => {
                        setRua(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="numero"
                    label="N??mero"
                    variant="outlined"
                    fullWidth
                    value={numero}
                    onChange={(e) => {
                        setNumero(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="bairro"
                    label="Bairro"
                    variant="outlined"
                    fullWidth
                    value={bairro}
                    onChange={(e) => {
                        setBairro(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="complemento"
                    label="Complemento"
                    variant="outlined"
                    fullWidth
                    value={complemento}
                    onChange={(e) => {
                        setComplemento(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="cidade"
                    label="Cidade"
                    variant="outlined"
                    fullWidth
                    value={cidade}
                    onChange={(e) => {
                        setCidade(e.target.value);
                    }}
                    margin="dense"
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="estado"
                    label="Estado"
                    variant="outlined"
                    fullWidth
                    value={estado}
                    onChange={(e) => {
                        setEstado(e.target.value);
                    }}
                    margin="dense"
                />

                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="senha"
                    label="Digite sua senha"
                    variant="outlined"
                    fullWidth
                    value={senha}
                    onChange={(e) => {
                        setSenha(e.target.value)
                    }}
                />
                <TextField style={{ backgroundColor: '#AFDCF6' }}
                    data-testid="ConfirmarSenha"
                    label="Confirme a sua senha"
                    variant="outlined"
                    fullWidth
                    value={confirmarSenha}
                    onChange={(e) => {
                        setConfirmarSenha(e.target.value)
                    }}
                    margin="dense"
                />
                <LabelError> {error} </LabelError>
                <Box textAlign="end" width="100%" mt="4px">
                    <CustomButton1 style= {{ color: 'white', backgroundColor: '#0693E3' }}
                        data-testid="cadastrar"
                        // variant="contained"
                        // onClick={handleSignup}
                    >
                       Cadastrar
                    </CustomButton1>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="end">
                <CustomText> J?? tem uma conta? </CustomText>
                <CustomButton2 style= {{ color: 'black', backgroundColor: '#E0E6F8' }}
                    data-testid="btnEntrar"
                    // variant="contained"
                    onClick={() => {
                        navigate('/Signin') 
                    }}
                >
                    Entrar
                </CustomButton2>
                </Box>
            </Grid>
        </Grid>

    );
}

export default CrudAgente;