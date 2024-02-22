package monkis.monkisBack.domain.repository;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.persistence.entity.Persona;

import java.util.List;

public interface PersonaDtoRepository {
    List<PersonaDto> getAll();
    PersonaDto getPersonaById(int idPersona);
    PersonaDto save(PersonaDto personaDto);
    PersonaDto update (PersonaDto personaDto);
    boolean deleteById(int idPersona);
}
