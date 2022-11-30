package com.wb.wbbackend;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Endereco;
import com.wb.wbbackend.entidades.Telefone;
import com.wb.wbbackend.repositorios.RepositorioCliente;

@SpringBootApplication
public class WbbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WbbackendApplication.class, args);
	}

	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public RepositorioCliente repositorio;

		@Override
		public void run(ApplicationArguments args) throws Exception {
			Calendar calendario = Calendar.getInstance();
			calendario.set(2002, 05, 15);

			Cliente cliente = new Cliente();
			cliente.setNome("Pedro Alcântara de Bragança e Bourbon");
			cliente.setSobreNome("Dom Pedro");

			Endereco endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente.setEndereco(endereco);
			Telefone telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente.getTelefones().add(telefone);
			repositorio.save(cliente);

			Cliente cliente2 = new Cliente();
			cliente2.setNome("Teresa Cristina de Bourbon-Duas Sicílias");
			cliente2.setSobreNome("Mãe dos Brasileiros");
			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente2.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente2.getTelefones().add(telefone);
			repositorio.save(cliente2);

			Cliente cliente3 = new Cliente();
			cliente3.setNome("Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança");
			cliente3.setSobreNome("Pricesa Isabel");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente3.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente3.getTelefones().add(telefone);
			repositorio.save(cliente3);

			Cliente cliente4 = new Cliente();
			cliente4.setNome("Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias");
			cliente4.setSobreNome("Pricesa Leopoldina");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente4.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente4.getTelefones().add(telefone);
			repositorio.save(cliente4);

		}
	}
}