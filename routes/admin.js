import { Router } from "express";
import mongoose from "mongoose";
import empresas from "../models/empre.js";
import funcionarios from "../models/func.js";
import bcrypt from "bcrypt";

const admin = Router();

const saltRounds = 10;

admin.get("/empresas", (req, res) => {
    empresas.find().then((empresas) => {
        res.render("empresas", { empresas: empresas });
    }).catch((erro) => {
        console.log(erro);
        res.status(500).send("Erro ao buscar empresas");
    });
});

admin.post("/empresas/registrar", (req, res) => {
    const novaEmpresa = {
        nome_emp: req.body.nome_emp,
        telefone_emp: req.body.telefone_emp,
        endereco: req.body.endereco,
        cnpj: req.body.cnpj,
        chave_gerente: req.body.chave_gerente,
        chave_funcionario: req.body.chave_funcionario 
    }

    bcrypt.hash(novaEmpresa.chave_gerente, saltRounds, function (err, hashGerente) {
        if (err) {
            console.log(err);
            res.status(500).send("Erro ao criar hash para a chave do gerente");
        } else {
            novaEmpresa.chave_gerente = hashGerente;

            bcrypt.hash(novaEmpresa.chave_funcionario, saltRounds, function (err, hashFuncionario) {
                if (err) {
                    console.log(err);
                    res.status(500).send("Erro ao criar hash para a chave do funcionário");
                } else {
                    novaEmpresa.chave_funcionario = hashFuncionario;

                    new empresas(novaEmpresa).save().then(() => {
                        console.log("EMPRESA REGISTRADA COM SUCESSO");
                        res.redirect("/empresas")
                    }).catch((erro) => {
                        console.log(erro);
                        res.status(500).send("Erro ao registrar a empresa");
                    });
                }
            });
        }
    });
});

admin.post("/funcionarios/registrar", (req, res) => {
    const novoFuncionario = {
        nome_fun: req.body.nome_fun,
        telefone_fun: req.body.telefone_fun,
        sexo: req.body.sexo,
        salario: req.body.salario,
        cpf_fun: req.body.cpf_fun,
        empresa_fun: req.body.empresa_fun,
        cargo: req.body.cargo 
    }

    new funcionarios(novoFuncionario).save().then(() => {
        console.log("FUNCIONÁRIO REGISTRADO COM SUCESSO");
        res.redirect("/empresas")
    }).catch((erro) => {
        console.log(erro);
    });
});

admin.get("/empresa/:_id", (req, res) => {
    empresas.findById(req.params._id).then((empresa) => {
        if (empresa) {
            funcionarios.find({ empresa_fun: req.params._id }).then((funcionarios) => {
                res.render("empresa", { empresa: empresa, funcionarios: funcionarios });
            })
        }
    }).catch((error) => {
        console.error("Erro ao buscar empresa:", error);
    });
});

admin.get("/empresas/registrar", (req, res) => {
    res.render("addempresa");
})

admin.get("/funcionarios/registrar", (req, res) => {
    empresas.find().then((empresas) => {
        console.log(empresas);
        res.render("addfuncionario", {empresas: empresas})
    });
})


export default(admin);