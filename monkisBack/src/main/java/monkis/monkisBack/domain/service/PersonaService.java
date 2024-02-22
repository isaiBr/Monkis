package monkis.monkisBack.domain.service;

import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.repository.PersonaDtoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService {
    @Autowired
    private PersonaDtoRepository personaDtoRepository;

    public List<PersonaDto> getAll(){
        return personaDtoRepository.getAll();
    }

    public PersonaDto save(PersonaDto personaDto){
        return personaDtoRepository.save(personaDto);
    }
}
