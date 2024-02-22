package monkis.monkisBack.persistence;

import monkis.monkisBack.domain.dto.FamiliarDto;
import monkis.monkisBack.domain.dto.PersonaDto;
import monkis.monkisBack.domain.repository.FamiliarDtoRepository;
import monkis.monkisBack.domain.repository.PersonaDtoRepository;
import monkis.monkisBack.persistence.crud.FamiliarCrudRepository;
import monkis.monkisBack.persistence.entity.Familiar;
import monkis.monkisBack.persistence.entity.Persona;
import monkis.monkisBack.persistence.mapper.FamiliarDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class FamiliarRepository implements FamiliarDtoRepository {

    @Autowired
    private FamiliarCrudRepository familiarCrudRepository;
    @Autowired
    private FamiliarDtoMapper mapper;
    @Autowired
    private PersonaDtoRepository personaDtoRepository;

    @Override
    public List<FamiliarDto> getAll() {
        List<Familiar> familiares = (List<Familiar>)familiarCrudRepository.findAll();
        return mapper.toFamiliaresDto(familiares);
    }

    @Override
    public FamiliarDto getFamiliarById(int idFamiliar) {
        Familiar familiar = familiarCrudRepository.findById(idFamiliar)
                .orElse(null);
        return mapper.toFamiliarDto(familiar);
    }

    @Override
    public Optional<List<FamiliarDto>> getByPrincipal(int idPrincipal) {
        Optional<List<Familiar>> familiares = familiarCrudRepository.findFamiliarByIdPrincipal(idPrincipal);
        return familiares.map(familiar -> mapper.toFamiliaresDto(familiar));
    }

    @Override
    public FamiliarDto save(FamiliarDto familiarDto) {
        //Primero se debe crear la Persona
        if(familiarDto.getPersona()!=null){
            PersonaDto personaDto = personaDtoRepository.save(familiarDto.getPersona());
            familiarDto.setIdPersona(personaDto.getId());
            familiarDto.setPersona(null);
        }

        Familiar familiar = mapper.toFamiliar(familiarDto);
        return mapper.toFamiliarDto(familiarCrudRepository.save(familiar));
    }

    @Override
    public FamiliarDto update(FamiliarDto familiarDto) {
        FamiliarDto existeFamiliar = getFamiliarById(familiarDto.getId());

        if(existeFamiliar!=null){
            //Se debe actualizar primero la persona
            PersonaDto personaDto = familiarDto.getPersona();
            familiarDto.setPersona(personaDtoRepository.update(personaDto));

            //Se actualiza los otros campos incluyendo el id de Persona
            return mapper.toFamiliarDto(familiarCrudRepository.save(mapper.toFamiliar(familiarDto)));
        }else{
            return null;
        }
    }

    @Override
    public boolean deleteById(int idFamiliar) {
        Familiar familiar = familiarCrudRepository.findById(idFamiliar)
                .orElse(null);
        if(familiar!=null){
            familiarCrudRepository.deleteById(idFamiliar);
            return personaDtoRepository.deleteById(familiar.getIdPersona());
        }
        else return false;
    }
}
