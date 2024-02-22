package monkis.monkisBack.persistence;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.repository.PersonaDtoRepository;
import monkis.monkisBack.persistence.crud.NacionalidadCrudRepository;
import monkis.monkisBack.persistence.crud.PersonaCrudRepository;
import monkis.monkisBack.persistence.entity.Nacionalidad;
import monkis.monkisBack.persistence.entity.Persona;
import monkis.monkisBack.persistence.mapper.PersonaDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PersonaRepository implements PersonaDtoRepository {

    @Autowired
    private PersonaCrudRepository personaCrudRepository;
    @Autowired
    private PersonaDtoMapper personaDtoMapper;

    @Override
    public List<PersonaDto> getAll() {
        List<Persona> personas =  (List<Persona>)personaCrudRepository.findAll();
        return personaDtoMapper.toPersonasDto(personas);
    }

    @Override
    public PersonaDto getPersonaById(int idPersona) {
        Persona persona = personaCrudRepository.findById(idPersona)
                .orElse(null);
        return personaDtoMapper.toPersonaDto(persona);
    }

    @Override
    public PersonaDto save(PersonaDto personaDto) {
        Persona persona = personaDtoMapper.toPersona(personaDto);
        return personaDtoMapper.toPersonaDto(personaCrudRepository.save(persona));
    }

    @Override
    public PersonaDto update(PersonaDto personaDto) {
        PersonaDto existePersona = getPersonaById(personaDto.getId());

        if(existePersona!=null){
            Persona personaSave = personaCrudRepository.save(personaDtoMapper.toPersona(personaDto));
            return personaDtoMapper.toPersonaDto(personaSave);
        }
        else{
            return null;
        }
    }

    @Override
    public boolean deleteById(int idPersona) {
        PersonaDto existePersona = getPersonaById(idPersona);
        if(existePersona!=null){
            personaCrudRepository.deleteById(idPersona);
            return true;
        }
        else return false;
    }
}
