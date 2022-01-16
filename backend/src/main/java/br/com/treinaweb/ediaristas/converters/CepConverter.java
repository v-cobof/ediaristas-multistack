package br.com.treinaweb.ediaristas.converters;

// import java.security.KeyStore.Entry.Attribute;

import javax.persistence.AttributeConverter;

public class CepConverter implements AttributeConverter<String, String> {

  @Override
  public String convertToDatabaseColumn(String cep) {
    return cep.replace("-", "");
  }

  @Override
  public String convertToEntityAttribute(String cep) {
    return cep;
  }

}
