package com.wb.wbbackend.atualizadores;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Telefone;
import com.wb.wbbackend.verificadores.VerificadorEnderecoNulo;
import com.wb.wbbackend.verificadores.VerificadorStringNula;
import com.wb.wbbackend.verificadores.VerificadorTelefoneNulo;

@Component
public class AtualizadorCliente implements Atualizador<Cliente> {
	@Autowired
	private VerificadorStringNula verificadorString;
	@Autowired
	private VerificadorEnderecoNulo verificadorEndereco;
	@Autowired
	private AtualizadorEndereco atualizadorEndereco;
	@Autowired
	private VerificadorTelefoneNulo verificadorTelefone;

	@Override
	public void atualizar(Cliente alvo, Cliente atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getEmail())) {
			alvo.setEmail(atualizacao.getEmail());
		}
		if (!verificadorString.verificar(atualizacao.getSobreNome())) {
			alvo.setSobreNome(atualizacao.getSobreNome());
		}
		if (!verificadorEndereco.verificar(atualizacao.getEndereco())) {
			if (alvo.getEndereco() != null) {
				atualizadorEndereco.atualizar(alvo.getEndereco(), atualizacao.getEndereco());
			} else {
				alvo.setEndereco(atualizacao.getEndereco());
			}
		}
		if (atualizacao.getTelefones().size() > 0) {
			Set<Telefone> conjunto = new HashSet<>();
			conjunto.addAll(alvo.getTelefones());
			conjunto.addAll(atualizacao.getTelefones());

			alvo.getTelefones().clear();
			for (Telefone telefone : conjunto) {
				if (!verificadorTelefone.verificar(telefone)) {
					alvo.getTelefones().add(telefone);
				}
			}
		}
	}
}